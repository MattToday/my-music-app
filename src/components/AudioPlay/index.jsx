import PropTypes from 'prop-types'
import Taro from '@tarojs/taro'
import { Image, View, Text, PageContainer } from '@tarojs/components'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { memo, useEffect } from 'react';
import { AudioPlayPageWrapper, AudioPlayWrapper } from './style';
import classname from 'classname';

const AudioPlay = memo(() => {

  const dispath = useDispatch()

  const { showAudio, playingMusic, playMode, playing } = useSelector((state) => ({
    showAudio: state.app.showAudio, // 展示播放页面
    playingMusic: state.music.playingMusic,
    playMode: state.music.playMode,
    playing: state.music.playing
  }), shallowEqual)

  const onBeforeEnter = () => {
    // 播放页面进入前触发
    console.log('onBeforeEnter')
  }

  const onBeforeLeave = () => {
    dispath.app.changeShowAudio(false)
  }

  const backgroundAudioManager = Taro.getBackgroundAudioManager()
  console.log('setSongInfo', backgroundAudioManager)
  // 设置播放信息
  const setSongInfo = (songInfo) => {
    try {
      const { name, al, url, lrcInfo } = songInfo;
      // Taro.setNavigationBarTitle({
      //   title: name
      // });
      backgroundAudioManager.title = name;
      backgroundAudioManager.coverImgUrl = al.picUrl;
      backgroundAudioManager.src = url;
      // this.setState({
      //   lrc: lrcInfo,
      //   isPlaying: true,
      //   firstEnter: false
      // });
    } catch (err) {
      console.log("err", err);
      // this.getNextSong();
    }
  }
  // 循环播放当前歌曲
  const getCurrentSong = () => {
    const { currentSongInfo } = this.props.song;
    this.setSongInfo(currentSongInfo);
  }
  // 根据播放模式进行播放
  const playByMode = () => {
    switch (playMode) {
      case "one":
        getCurrentSong()
        break;
      case "shuffle":
        // this.getShuffleSong()
        break;
      // 默认按列表顺序播放
      default:
        // this.getNextSong()
    }
  }
  const playMusic = (e) => {
    if (!backgroundAudioManager.src) {
      setSongInfo(playingMusic)
    } else {
      backgroundAudioManager.play()
    }
    dispath.music.changePlaying(true)
  }
  const pauseMusic = () => {
    backgroundAudioManager.pause()
    dispath.music.changePlaying(false)
  }

  const playBtnClick = (e) => {
    e.stopPropagation()
    if (playing) {
      pauseMusic()
    } else {
      playMusic()
    }
  }


  return (
    <View>
      <AudioPlayWrapper onClick={() => {dispath.app.changeShowAudio(true)}}>
        <View className='left'>
          {
            playingMusic.id && (
              <>
                <View className={classname('img-wrap', {playing: playing})}>
                  <Image className='music-pic' src={playingMusic.al.picUrl} />
                </View>
                <View className='music-title'>{playingMusic.name}-<Text style='color:#858a96'>{playingMusic.ar?.map(item => item.name).join('、')}</Text></View>
              </>
            )
          }
        </View>
        <View className='right'>
          <Text onClick={playBtnClick} className={classname('iconfont', playing ? 'icon-zanting' : 'icon-bofang1')}></Text>
          <Text className='iconfont icon-zhankaicaidan'></Text>
        </View>
      </AudioPlayWrapper>
      <AudioPlayPageWrapper>
        <PageContainer
          className='adio-play-page'
          show={showAudio}
          overlay={false}
          position='bottom'
          closeOnSlideDown
          onBeforeEnter={onBeforeEnter}
          onBeforeLeave={onBeforeLeave}
        >
          <View className='audio-play-inner'>

          </View>
        </PageContainer>
      </AudioPlayPageWrapper>
    </View>
  )
})

export default AudioPlay

AudioPlay.propTypes = {
}

AudioPlay.defaultProps = {
}

