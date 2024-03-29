import { gql } from 'react-apollo';

export default gql`
	mutation signup(
	$username: String!, 
	$email: String!, 
	$password: String!
	) {
	signup(
	username: $username, 
	email: $email, 
	password: $password
	) {
		token
	  }
	}
`;