import { gql } from 'react-apollo';

export default gql`
	{
		currentUser {
			avatar
			username
			firstname
			lastname
		}
	}

`;