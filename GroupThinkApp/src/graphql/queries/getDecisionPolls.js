import { gql } from 'react-apollo';

export default gql`
	{
		getDecisionPolls {
			_id
			title
		}
	}
`;