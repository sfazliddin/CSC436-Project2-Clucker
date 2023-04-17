/* eslint-disable react/prop-types */
import axios from 'axios';
import Container from '../components/Container';
// import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import UpdatePost from '../components/UpdatePost';
import { useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';

const Post = () => {
	const { id } = useParams();

	const [loading, setLoading] = useState(false);
	const [postData, setPostData] = useState(null);

	useEffect(() => {
		setLoading(true);
		setPostData(null);

		axios
			.get(`http://localhost:3001/v1/api/posts/${id}`)
			.then(({ data }) => {
				setPostData(data);
			})
			.catch((error) => {
				// setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [id]);

	return (
		<Container>
			{!!loading && <p>Loading Post Data</p>}
			{!loading && !!postData && (
				<div>
					{/* <button onClick={setListMode}>Return to List</button> */}
					<hr />
					<p>Title: {postData.title}</p>
					<p>Content: {postData.content}</p>
					<p>Last Updated: {postData.last_updated}</p>
					<p>Publish Date: {postData.originally_published}</p>

					<Popup trigger={<button>Edit Post</button>} position={'right center'}>
						<UpdatePost
							id={postData.id}
							title={postData.title}
							content={postData.content}
						/>
					</Popup>
				</div>
			)}
		</Container>
	);
};
//{"id":8,"title":"test for time","content":"date:april 12, time:12:17pm","last_updated":"2023-04-12T16:17:14.410Z","originally_published":"2023-04-12T16:17:14.410Z"}]
//id,title,content,last_updated,originally_published

export default Post;
