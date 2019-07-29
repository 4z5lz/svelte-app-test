<script>
	import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

	onMount(() => {
		console.log('the component has mounted');
    });
    
    afterUpdate(() => {
		console.log('the component just updated');
    });
    
    onDestroy(() => {
		console.log('the component is being destroyed');
    });
    
</script>

<h1>Some lifecycle methods</h1>

See console