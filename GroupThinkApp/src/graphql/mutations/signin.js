import { gql } from 'react-apollo';

export default gql`
	mutation signin(
	$email: String!, 
	$password: String!
	) {
	signin(
	email: $email, 
	password: $password
	) {
		token
	  }
	}
`;