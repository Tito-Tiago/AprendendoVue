<script>
    export default {
        emits: ['prettyClick'],
    }
</script>

<template>
    <button @click="$emit('prettyClick')">
        <slot>Default</slot>
    </button>
</template>

<style scoped>
    button{
        background: #5db3e3;
        /* color: white; */
        padding: 5px 10px;
        border-radius: 8px;
        cursor: pointer;
        border: none;    
    }

    button:hover {
        background-color: #529dc5;
    }
</style>