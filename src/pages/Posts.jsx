import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ErrorAlert from '../components/ErrorAlert';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import axios from 'axios';
import Post from './Post';

const Posts = () => {
	const [posts, setPosts] = useState([]);

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const getData = async () => {
		setLoading(true);
		setError(false);
		const request = await axios.get('http://localhost:3001/v1/api/posts');
		setLoading(false);
		setPosts(request.data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			{error && <ErrorAlert>{error}</ErrorAlert>}
			{!error && loading && (
				<div className="max-w-[230px]">
					<Skeleton count="10" />
				</div>
			)}
			{!error && !loading && (
				<>
					Posts:
					{posts.map(({ id, title }) => {
						return (
							// <p role="button" onClick={() => fetchPostHandler(id)} key={id}>
							// 	{id} - {title}
							// </p>
							<div key={id}>
								<Link className="hover:underline" to={`/posts/${id}`}>
									{title}
								</Link>
							</div>
						);
					})}
				</>
			)}
		</>
	);
};

export default Posts;
