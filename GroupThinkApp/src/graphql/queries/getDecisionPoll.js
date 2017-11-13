import { gql } from 'react-apollo';

export default gql`
	query getDecisionPoll($_id: String){
		getDecisionPoll(_id: $_id) {
			_id
			title
		}
	}
`;