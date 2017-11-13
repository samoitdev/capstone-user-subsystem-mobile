import { gql } from 'react-apollo';

export default gql`
	query getSomeDecisionPolls($limit: Int!, $offset: Int!){
		getSomeDecisionPolls(limit: $limit, offset: $offset) {
			_id
			title
			createdAt
			user {
				_id
				username
				avatar
			}
			choices {
				_id
				imageURL
			}
		}
	}
`;