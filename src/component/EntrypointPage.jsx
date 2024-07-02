import { useIsConnectionRestored } from '@tonconnect/ui-react';
import App from '../App';

export const EntrypointPage = () => {
    const connectionRestored = useIsConnectionRestored();

    if (!connectionRestored) {
        return <h1>Please wait...</h1>;
    }

    return <App/>;
};