<script>
  import { Router, Route } from "svelte-routing";
  import NavLink from "./shared/NavLink.svelte";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Film from "./pages/Film.svelte";
  
  // Used for SSR. A falsy value is ignored by the Router.
  export let url = "";
</script>

<Router url="{url}">
  <nav>
    <NavLink to="/">Home</NavLink> | 
    <NavLink to="about">About</NavLink>
  </nav>
  <div>
    <Route path="about" component="{About}" />
    <Route path="film/:id" component="{Film}" />
    <Route path="/" component="{Home}" />
  </div>
</Router>