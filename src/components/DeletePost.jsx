/* eslint-disable react/prop-types */
import axios from 'axios';

const DeletePost = ({ id }) => {
	const url = `http://localhost:3001/v1/api/posts/${id}`;

	const deletePost = async () => {
		axios.delete(url).then(function (response) {
			console.log(response);
		});
	};
	return (
		<>
			<button className="rounded-full bg-red-600 p-3" onClick={deletePost}>
				DELETE POST
			</button>
		</>
	);
};

export default DeletePost;
