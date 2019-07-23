<script>
    import { Link } from "svelte-routing";

    // https://jsonplaceholder.typicode.com/photos
    // const fetchQuotes = async (data, component) => {
    //     const response = await fetch(`http://quotesondesign.com/wp-json/posts?filter[order]=rand&filter[posts_per_page]=3`);
    //     const json = await response.json();
    //     const quotes = data.quotes.concat(json);
    //     component.set({ quotes });
    // }
</script>

<style>
</style>

<h1>Home page</h1>

<Link to="/film/1">Film 1</Link>
