<script>

</script>

<template>
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>

        <main>
            <slot name="main"></slot>
        </main>

        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style scoped>
    *{
        box-sizing: border-box;
    }

    main{
        font-family: Arial, Helvetica, sans-serif;
        background-color: #333d47;
        margin: 0;
        color: rgb(214, 214, 214);
        padding: 50px;
        min-height: 90vh;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .container{
        display: flex;
        flex-direction: column;
    }

    header{
        background-color: #3b4652;
        text-align: center;
    }

    footer{
        background-color: #3b4652;
        padding: 20px;
        text-align: center;
    }
</style>