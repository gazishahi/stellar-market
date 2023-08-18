import Layout from '@/components/layout'
import '../styles/globals.css'
import { AuthProvider} from '../context/AuthContext'
import { CartProvider } from '../context/CartContext'

export default function App({ Component, pageProps }) {
  return(
    <CartProvider>
      <AuthProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </CartProvider>
 
    
  )
}
