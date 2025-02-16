import ReactLogo from './assets/react.svg?react';
import { createElement } from 'react';

const date = new Date().getFullYear();

export const App = () => {
	return createElement(
		'div',
		null,
		createElement('h1', null, 'Hello world'),
		createElement('p', null, date.toString()),
		createElement(ReactLogo),
	);
};
