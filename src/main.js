/* 
This is the starting point of the Svelte application.
*/

import App from './App.svelte';

const app = new App({
	target: document.body
	// props: {
	// 	name: 'world '
	// }
});

export default app;