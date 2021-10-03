<script lang="ts">
    import "../styles/globals.postcss";
    import { onMount } from "svelte";
    //import config from "../config.json";

    onMount(async () => {

    });

    // DOM updater (50ms)
    /*setInterval(() => {

    }, 50);*/
</script>

<div class="h-screen w-screen bg-black opacity-90 text-white">
    <slot />
</div>
