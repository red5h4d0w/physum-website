<script lang="ts">
    import postes from "../assets/data/ca.json";
    import CartePoste from "./CartePoste.svelte";
</script>


<div id="ca" class="container-fluid">
    <h1>LES MEMBRES DU C.A. SONT LÀ POUR VOUS</h1>
    <hr />
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-5 h-100">
        {#each postes as poste, i}
            <CartePoste {poste} {i} />
        {/each}
    </div>
</div>


<style>
    #ca {
        background: rgba(0, 0, 0, 0.5);
        padding: 2%;
    }

    #ca h1 {
        color: #ddd;
    }

    #ca hr {
        border-color: #bbb;
    }
</style>
