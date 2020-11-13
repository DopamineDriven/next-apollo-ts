import { useMutation } from '@apollo/client';
import { votePost_votePost } from '../lib/__generated__/votePost';
import UPDATE_POST_MUTATION from '../lib/update-post-mutation';

export default function PostUpvoter({ votes, id }: votePost_votePost) {
	const [updatePost] = useMutation(UPDATE_POST_MUTATION);

	const upvotePost = () => {
		updatePost({
			variables: {
				id
			},
			optimisticResponse: {
				__typename: 'Mutation',
				votePost: {
					__typename: 'Post',
					id,
					votes: votes + 1
				}
			}
		});
	};

	return (
		<button onClick={() => upvotePost()}>
			{votes}
			<style jsx>{`
				button {
					background-color: transparent;
					border: 1px solid #e4e4e4;
					color: #000;
				}
				button:active {
					background-color: transparent;
				}
				button:before {
					align-self: center;
					border-color: transparent transparent #000000 transparent;
					border-style: solid;
					border-width: 0 4px 6px 4px;
					content: '';
					height: 0;
					margin-right: 5px;
					width: 0;
				}
			`}</style>
		</button>
	);
}
