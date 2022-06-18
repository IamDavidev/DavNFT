import { createContext, useEffect, useState } from 'react';

export const INTIAL_STATE_CONTEXT_USER = {
	user: {
		name: null,
		username: null,
		email: null,
		banner: null,
		bio: null,
		picture_profile: null,
	},
	address: null,
	id: {},
	isActive: false,
};

export const UserContext = createContext(INTIAL_STATE_CONTEXT_USER);

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(INTIAL_STATE_CONTEXT_USER);

	useEffect(() => {
		// lamada al backend para obtener el usuario
	}, []);

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
			}}>
			{children}
		</UserContext.Provider>
	);
};
