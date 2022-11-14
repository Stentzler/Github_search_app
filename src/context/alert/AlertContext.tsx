import {createContext, ReactNode, useState} from 'react';

interface props {
	children: ReactNode;
}

interface context {
	alertBool: boolean;
	alertMsg: string;
	requestAlert: (msg: string) => void;
}

const AlertContext = createContext<context>({} as context);

export const AlertProvider = ({children}: props) => {
	const [alertBool, setAlert] = useState<boolean>(false);
	const [alertMsg, setAlertMsg] = useState<string>('');

	const requestAlert = (msg: string) => {
		setAlert(true);
		setAlertMsg(msg);

		setTimeout(() => {
			setAlert(false);
			setAlertMsg('');
		}, 3000);
	};

	return (
		<AlertContext.Provider value={{alertBool, alertMsg, requestAlert}}>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertContext;
