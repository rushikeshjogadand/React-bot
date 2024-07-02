
import './App.css';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { Header } from './component/header';
import { Address } from './component/Address';
import { Wallet } from './component/wallet';


function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
           <Header/>
           <Address/>
           <Wallet/>
        </TonConnectUIProvider>
  );
}

export default App;
