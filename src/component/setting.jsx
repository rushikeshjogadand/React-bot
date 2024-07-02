import { Locales, useTonConnectUI } from '@tonconnect/ui-react';

export const Settings = () => {
    const [tonConnectUI, setOptions] = useTonConnectUI();

    const onLanguageChange = (lang) => {
        setOptions({ language: lang });
    };

    const myTransaction = {
        // Define your transaction details here
    };

    return (
        <div>
            <button onClick={() => tonConnectUI.sendTransaction(myTransaction)}>
                Send transaction
            </button>

            <div>
                <label>Language</label>
                <select onChange={e => onLanguageChange(e.target.value)}>
                    <option value="en">en</option>
                    <option value="ru">ru</option>
                </select>
            </div>
        </div>
    );
};
