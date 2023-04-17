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
				<h1>Coming soon: A Footer! </h1>
				<button onClick={toggleTheme}>TOGGLE DARK MODE</button>
			</>
		</Container>
	);
};

export default Footer;
