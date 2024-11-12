<script>
    let {children} = $props()
</script>



    <h1 class="title">Divisions</h1>
    {@render children()}


    <style>



     .title {
            color:var(--accent-clr);
            font-size: 5rem;
            text-align: center;
        }

    </style>
