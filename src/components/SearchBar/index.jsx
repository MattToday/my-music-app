import { View, Icon,  Text} from '@tarojs/components';
import { memo } from 'react';
import { SearchBarWrapper } from './style';

const SearchBar = memo(() => {
  return (
    <SearchBarWrapper>
      <View className='search-bar__inner'>
        <Icon className='search__icon' size='14' color='#666' type='search' />
        <View className='search__text'>王心凌</View>
      </View>
    </SearchBarWrapper>
  );
});

export default SearchBar;
