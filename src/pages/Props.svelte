<script>
    import Calculate from '../shared/Calculate.svelte'

    let calc = {
        first: 0,
        second: 0,
        operator: '+'
    }
</script>

<style>
    input{
        width: 80px
    }
</style>

<h1>Props</h1>


<h2>Calculator</h2>

<input type="number" bind:value={calc.first} />

<select bind:value={calc.operator}>
    <option value="+">+</option>
    <option value="-">-</option>
    <option value="*">*</option>
    <option value="/">/</option>
</select>

<input type="number" bind:value={calc.second} />

<Calculate {...calc}></Calculate>