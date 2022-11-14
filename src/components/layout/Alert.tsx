import {useContext} from 'react';
import AlertContext from '../../context/alert/AlertContext';

function Alert() {
	const {alertBool, alertMsg} = useContext(AlertContext);

	return alertBool ? (
		<p className='flex items-start mb-4 space-x-2'>
			<strong style={{color: '#ff9966'}}>{alertMsg}</strong>
		</p>
	) : null;
}

export default Alert;
