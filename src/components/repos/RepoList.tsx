import React from 'react';
import RepoItem from './RepoItem';
interface props {
	repos: any;
}

function RepoList({repos}: props) {
	return (
		<div className='rounded-lg shadow-lg card bg-base-100'>
			<div className='card-body'>
				<h2 className='text-3xl my-4 font-bold card-title'>
					Latest Repositories
				</h2>
				{repos.map((repo: any) => (
					<RepoItem key={repo.id} repo={repo} />
				))}
			</div>
		</div>
	);
}

export default RepoList;
