import {useContext} from 'react';
import GithubContext from '../../context/github/GithubContext';
import LoadingEffect from '../layout/Loading';
import UserItem from './UserItem';

function UserResults() {
	const {loading, users} = useContext(GithubContext);

	if (!loading) {
		return (
			<div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
				{users?.map((user: any) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	} else {
		return (
			<div className='flex content-center justify-center '>
				<LoadingEffect />
			</div>
		);
	}
}

export default UserResults;
