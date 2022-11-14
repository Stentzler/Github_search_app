import {createContext, useState, ReactNode} from 'react';
import {URLSearchParams} from 'url';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

interface props {
	children: ReactNode;
}

interface context {
	users: any;
	user: any;
	loading: boolean;
	repos: any;
	getUser: (login: any) => Promise<void>;
	getRepos: (login: any) => Promise<void>;
	clearUsers: () => void;
	searchUsers: (input: string) => void;
}

const GithubContext = createContext<context>({} as context);

export const GithubProvider = ({children}: props) => {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);

	const searchUsers = async (input: string): Promise<void> => {
		setLoading(true);
		try {
			const response = await fetch(`${GITHUB_URL}/search/users?q=${input}`, {
				headers: {
					Authorization: `token ${GITHUB_TOKEN}`,
				},
			});
			const {items} = await response.json();
			setUsers(items);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const getUser = async (login: any): Promise<void> => {
		setLoading(true);
		try {
			const response = await fetch(`${GITHUB_URL}/users/${login}`, {
				headers: {
					Authorization: `token ${GITHUB_TOKEN}`,
				},
			});

			const data = await response.json();
			setUser(data);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const getRepos = async (login: string): Promise<void> => {
		setLoading(true);

		const filter: string = 'created&per_page=10';

		try {
			const response = await fetch(
				`${GITHUB_URL}/users/${login}/repos?${filter}`,
				{
					headers: {
						Authorization: `token ${GITHUB_TOKEN}`,
					},
				}
			);
			const data = await response.json();

			setRepos(data);

			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	const clearUsers = () => setUsers([]);

	return (
		<GithubContext.Provider
			value={{
				users,
				user,
				loading,
				repos,
				getUser,
				getRepos,
				clearUsers,
				searchUsers,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
