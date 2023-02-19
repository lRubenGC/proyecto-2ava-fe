<template>
    <div id="body">
      <h1>404 - Page Not Found</h1>
      <p>Esta página no existe, pulse <router-link id="redirect" to="/">aquí</router-link> para volver al inicio</p>
    </div>
</template>

<script>
    export default {
        name: 'page-not-found'
    }
</script>

<style scoped>
    #body {
        margin: 20px;
        text-align: center;
    }

    #redirect {
        font-weight: 600;
    }
</style>