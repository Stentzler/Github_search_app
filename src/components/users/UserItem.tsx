import {Link} from 'react-router-dom';

interface props {
	user: any;
}
interface data {
	login: string;
	avatar_url: string;
}
function UserItem({user}: props) {
	const {login, avatar_url}: data = user;

	return (
		<div className='card shadow-xl compact side bg-base-200 '>
			<div className='flexrow items-center space-x-4 card-body'>
				<div>
					<div className='avatar'>
						<div className='rounded-full shadow w-14 h-14'>
							<img src={avatar_url} alt='Profile' />
						</div>
					</div>
				</div>
				<h2 className='card-title'>{login}</h2>
				<Link
					to={`/user/${login}`}
					className='text-base-content text-opacity-40'
				>
					Visit Profile
				</Link>
			</div>
		</div>
	);
}

export default UserItem;
