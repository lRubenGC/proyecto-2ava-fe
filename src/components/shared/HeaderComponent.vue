<template>
    <header>
        <div class="logo">
            <img src="@/assets/HotWheelsLogo.png" alt="Logo">
        </div>
        <nav>
            <ul>
                <li><router-link class="nav-item" to="/listado">Cuenta</router-link></li>
                <li><router-link class="nav-item" to="/">Desconectarse</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'header-component'
}
</script>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #131921;
}

.logo img {
    height: 3rem;
}

nav ul {
    display: flex;
    list-style: none;
}

nav li:not(:last-child) {
    margin-right: 1rem;
}

.nav-item {
    text-decoration: none;
    color: white;
    font-size: 1.5em;
}
</style>
