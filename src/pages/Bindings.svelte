<script>
    let text = '';
   
    let count = 0;
    function countSymbols(e){
        count = e.target.value.toString().length
    }

    // reactive statement
    $: showAlert = count > 20;

</script>

<style>
    div, textarea{
        min-height: 200px;
        width: 40%
    }
    
    div{
        border: 1px solid grey;
        padding: 5px
    }

    h3.alert{color: red}
</style>

<h1>Bindings and Events</h1>

<textarea bind:value={text} on:keyup={countSymbols}></textarea>


{#if !showAlert}
    <h3>Number of symbols: {count}</h3>
{:else}    
    <h3 class="alert">Number of symbols is dangerously high!</h3>
{/if}

<div>
    {@html text}
</div>