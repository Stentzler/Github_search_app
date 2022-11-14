import {createContext, useState, ReactNode} from 'react';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

interface props {
	children: ReactNode;
}

interface context {
	users: any;
	loading: boolean;
	clearUsers: () => void;
	searchUsers: (input: string) => void;
}

const GithubContext = createContext<context>({} as context);

export const GithubProvider = ({children}: props) => {
	const [users, setUsers] = useState([]);
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

	const clearUsers = () => setUsers([]);

	return (
		<GithubContext.Provider value={{users, loading, clearUsers, searchUsers}}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
