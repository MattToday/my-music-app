
import { Provider } from 'react-redux'
import 'taro-ui/dist/style/index.scss'
import { useLaunch } from '@tarojs/taro'
import store from './store'
import './app.scss'

function App({ children }) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}

export default App
