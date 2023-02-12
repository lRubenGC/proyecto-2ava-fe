<template>
    <div id="body">
        <img id="bg-img" src="@/assets/BG.jpg" alt="background of login">
        <div class="content">
            <img id="logo" src="@/assets/HotWheelsLogo.png" alt="logo hotwheels">
            <div class="container">
                <login-component v-if="this.login" class="login" @change-view="changeView"/>
                <register-component v-if="!this.login" class="register" @change-view="changeView" />
            </div>
        </div>
    </div>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue';
import RegisterComponent from '@/components/RegisterComponent.vue';

export default {
    name: 'login-view',
    data() {
        return {
            login: true
        }
    },
    components: {
        LoginComponent,
        RegisterComponent
    },
    methods: {
        changeView() {
            if (this.login) {
                this.login = false;
            } else this.login = true;
        }
    }
}
</script>

<style scoped>

#bg-img {
    opacity: 0.9;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
}

#logo {
    width: 20%;
    display: block;
    margin: 100px auto 20px;
}

.content {
    position: relative;
}

h1 {
    text-align: center;
    margin-top: 150px;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.login, .register {
    width: 400px;
    margin: 0 50px;
}

</style>