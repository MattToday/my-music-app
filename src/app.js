
import { Provider } from 'react-redux'
import 'taro-ui/dist/style/index.scss'
import 'taro-skeleton/dist/index.css'
import '@assets/font/iconfont.scss'
import './app.scss'
import store from './store'

function App({ children }) {

  // children 是将要会渲染的页面
  return (
    <Provider store={store}>
      { children }
    </Provider>
  )
}

export default App
