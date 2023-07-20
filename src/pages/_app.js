import '@/styles/globals.css'
import Layout from '@/components/layout'
import { Provider } from 'react-redux';
import {store} from '../redux-store/store'
import { QueryClientProvider,queryClient  } from '../utils/queryClient';


function App({ Component, pageProps }) {
  return (
    <Provider store={store}>

  <Layout>
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    </QueryClientProvider>

  </Layout>

  </Provider>) 
}
export default App
