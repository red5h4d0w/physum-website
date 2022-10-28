<script lang="ts">
    import type { Poste } from "../types";
    export let poste: Poste;
    export let i: number;
</script>

<head />
<div class="card text-center">
    <div
        id="carouselExampleIndicators{i}"
        class="carousel slide"
        data-ride="carousel"
    >
        <ol class="carousel-indicators">
            {#each poste.responsables as responsable, j}
                {#if j == 0}
                    <li
                        data-target="#carouselExampleIndicators{i}"
                        data-slide-to="0"
                        class="active"
                    />
                {:else}
                    <li
                        data-target="#carouselExampleIndicators{i}"
                        data-slide-to={j}
                    />
                {/if}
            {/each}
            {#each poste.adjoints as adjoint, j}
                {#if poste.responsables.length == 0}
                    <li
                        data-target="#carouselExampleIndicators{i}"
                        data-slide-to="0"
                        class="active"
                    />
                {:else}
                    <li
                        data-target="#carouselExampleIndicators{i}"
                        data-slide-to={j + poste.responsables.length}
                    />
                {/if}
            {/each}
        </ol>
        <div class="carousel-inner">
            {#each poste.responsables as responsable, j}
                {#if j == 0}
                    <div class="carousel-item active">
                        {#if responsable.image}
                            <img
                                class="card-img-top img-thumbnail ca-img-elu"
                                src="/images/ca/{responsable.image}"
                                alt={responsable.nom}
                            />
                        {:else}
                            <img
                                class="card-img-top img-thumbnail ca-img-elu"
                                src="/images/ca/pas_de_photo.jpg"
                                alt={responsable.nom}
                            />
                        {/if}
                    </div>
                {:else}
                    <div class="carousel-item">
                        {#if responsable.image}
                            <img
                                class="card-img-top img-thumbnail ca-img-elu"
                                src="/images/ca/{responsable.image}"
                                alt={responsable.nom}
                            />
                        {:else}
                            <img
                                class="card-img-top img-thumbnail ca-img-elu"
                                src="/images/ca/pas_de_photo.jpg"
                                alt={responsable.nom}
                            />
                        {/if}
                    </div>
                {/if}
            {/each}
            {#each poste.adjoints as adjoint}
                {#if poste.responsables.length == 0}
                    <div class="carousel-item active">
                        <img
                            class="card-img-top img-thumbnail ca-img-elu"
                            src="/images/ca/{adjoint.image}"
                            alt={adjoint.nom}
                        />
                    </div>
                {:else}
                    <div class="carousel-item">
                        <img
                            class="card-img-top img-thumbnail ca-img-elu"
                            src="/images/ca/{adjoint.image}"
                            alt={adjoint.nom}
                        />
                    </div>
                {/if}
            {/each}
        </div>
        <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators{i}"
            role="button"
            data-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Précédent</span>
        </a>
        <a
            class="carousel-control-next"
            href="#carouselExampleIndicators{i}"
            role="button"
            data-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Suivant</span>
        </a>
    </div>

    <div class="card-body">
        <div class="card-title">{poste.role}</div>
    </div>
    <div class="card-footer text-center">
        <button
            class="btn btn-primary"
            data-target="#caFooter{i}"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="caFooter{i}"
        >
            Informations
        </button>
    </div>

    <div id="caFooter{i}" class="collapse">
        <div class="card-text">
            {#each poste.responsables as responsable}
                <h3>{responsable.nom}</h3>
                <h6>
                    {#if responsable.facebook}
                        <a href={responsable.facebook}>
                            <i class="fa-brands fa-facebook" />
                        </a>
                    {/if}
                    {#if responsable.courriel}
                        <a
                            href="mailto:{responsable.courriel}"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i class="fa-regular fa-envelope" />
                        </a>
                    {/if}
                </h6>
            {/each}

            {#each poste.adjoints as adjoint}
                <h3>{adjoint.nom}</h3>
                <h6>
                    {#if adjoint.facebook}
                        <a href={adjoint.facebook}>
                            <i class="fa-brands fa-facebook" />
                        </a>
                    {/if}
                    {#if adjoint.courriel}
                        <a
                            href="mailto:{adjoint.courriel}"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i class="fa-regular fa-envelope" />
                        </a>
                    {/if}
                </h6>
            {/each}
            <br />
            <p>{poste.description}</p>
        </div>
    </div>
</div>

<style>
    .card-body {
        padding: 0;
        padding-top: 30px;
        background: #ddd;
    }
    img {
        box-shadow: 0px 0px 20px #33ff33;
        align-self: center;
    }
    .card-text {
        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: 1000;
        background-color: white;
        width: 98%;
        left: 0px;
        margin-top: 10px;
    }
</style>
