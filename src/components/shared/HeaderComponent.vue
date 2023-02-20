<template>
    <header>
        <div class="logo">
            <img src="@/assets/HotWheelsLogo.png" alt="Logo">
        </div>
        <nav>
            <ul>
                <li><router-link class="nav-item" :to="{ name: 'car-list-view' }">Listado</router-link></li>
                <li><router-link class="nav-item" :to="{ name: 'my-cars-view' }">Mis coches</router-link></li>
                <li @click="logout()" class="nav-item">Desconectarse</li>
            </ul>
        </nav>
    </header>
</template>

<script>
import auth from '@/auth/getToken'

export default {
    name: 'header-component',
    methods: {
        logout() {
            sessionStorage.removeItem("userId");
            auth.deleteCookie();
        }
    }
}
</script>

<style scoped>
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
    font-weight: 600;
}

li {
    cursor: pointer;
    margin: 0 10px;
}
</style>
