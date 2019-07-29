<script>
  import { Router, Route } from "svelte-routing";
  import NavLink from "./shared/NavLink.svelte";
  import Home from "./pages/Home.svelte";
  import Props from "./pages/Props.svelte";
  import DynamicAttr from "./pages/DynamicAttr.svelte";
  import Bindings from "./pages/Bindings.svelte";
  import Lifecycle from "./pages/Lifecycle.svelte";
  
</script>

<Router>
  <nav>
    <NavLink to="/">Home</NavLink> | 
    <NavLink to="dynamic-attr">Dynamic Attributes</NavLink> |
    <NavLink to="bindings">Bindings and Events</NavLink> | 
    <NavLink to="props">Props</NavLink> | 
    <NavLink to="lifecycle">Lifecycle</NavLink> | 
    <a target="_blank" href="https://svelte.dev/examples">See other examples</a> 
  </nav>
  <div>
    <Route path="dynamic-attr" component="{DynamicAttr}" />
    <Route path="bindings" component="{Bindings}" />
    <Route path="props" component="{Props}" />
    <Route path="lifecycle" component="{Lifecycle}" />
    <Route path="/" component="{Home}" />
  </div>
</Router>