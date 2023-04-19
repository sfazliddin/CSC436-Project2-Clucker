/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import Container from './Container';
import './darkMode.css';

const Footer = () => {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};
	useEffect(() => {
		document.body.className = theme;
	}, [theme]);
	return (
		<Container className={`bg-gray-300 ${theme}`}>
			<>
				<div className="flex">
					<h1 className="flex-initial w-10/12">Let's All Cluck Together </h1>
					<button className="rounded-full bg-orange-800 p-3" onClick={toggleTheme}>
						TOGGLE DARK MODE
					</button>
				</div>
			</>
		</Container>
	);
};

export default Footer;
