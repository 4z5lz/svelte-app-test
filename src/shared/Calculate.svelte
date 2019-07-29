<script>
    import { afterUpdate } from 'svelte';
    
    export let first
    export let second
    export let operator

    let result = 0; 

	afterUpdate(() => {
		calculate()
	});
    
    const calculate = () => {
        if (operator === '+') {
            result = parseFloat(first) + parseFloat(second)
        } else if (operator === '-') {
            result = parseFloat(first) - parseFloat(second)
        } else if (operator === '*') {
            result = parseFloat(first) * parseFloat(second)
        } else if (operator === '/') {
            result = parseFloat(first) / parseFloat(second)
        }
    }
</script>

<strong>
    = { result }
</strong>
