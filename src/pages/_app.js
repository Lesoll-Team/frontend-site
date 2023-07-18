import '@/styles/globals.css'
import Layout from '@/components/layout'
import { Provider } from 'react-redux';
import {store} from '../redux-store/store'

 function App({ Component, pageProps }) {
  return (
    <Provider store={store}>

  <Layout>
    <Component {...pageProps} />
  </Layout>

  </Provider>) 
}
export default App
