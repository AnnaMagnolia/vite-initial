import ReactLogo from './assets/react.svg?react'

const date = new Date().getFullYear(); // императивный

export const App = () => (
	<div>
		<h1>Hello world</h1> {/*декларативный*/}

		<p>{date.toString()}</p>   {/*декларативный*/}

		<ReactLogo/> {/*декларативный*/}
	</div>
);






