import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './Providers/CartProviders.jsx';


createRoot(document.getElementById('root')).render(
    
<CartProvider>
    <App />
    </CartProvider>
   
)
