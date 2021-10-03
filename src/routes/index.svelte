
<script lang="ts">
    import { onMount } from "svelte";

    onMount(async () => {
        // Call 300 ms after onmount first called because we need to hide messy loading
    setTimeout(() => {
        document.body.style.opacity = "100%";
        document.title = "Vector Client - Home";
        document.getElementById("logo")!.style.animation = "1s ease-in 0s logoImg";
        document.getElementById("logoText")!.style.animation = "1s ease-in 0s logoText";
    }, 200);
    });

    

    // DOM updater (50ms)
    /*setInterval(() => {

    }, 50);*/

    
</script>

<div class="flex flex-col h-full items-center justify-center overflow-hidden">
    <img width="50%" class="m-6 transition duration-500" src="/img/logo.png" alt="logo" id="logo">
    <div class="flex m-6 font-normal text-4xl tracking-wider" id="logoText">
        Customisable. Cross-platform. Cloud-oriented.
    </div>
</div>
