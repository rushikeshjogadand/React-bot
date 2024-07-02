import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";

export const Header = () => {
    return (
        <header>
            <span>My App with React UI</span>
           
            <TonConnectButton className="my-button-class" style={{ float: "right" }}/>

            <TonConnectUIProvider
            // ... other parameters
          actionsConfiguration={{
              twaReturnUrl: 'https://t.me/<YOUR_APP_NAME>'
          }}
      >
      </TonConnectUIProvider>
     <TonConnectUIProvider/>
        </header>

    );
};