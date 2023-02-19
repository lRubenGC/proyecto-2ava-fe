<template>
    <div id="user-login">
        <form @submit.prevent="validateLogin">
                <h1>Iniciar Sesión</h1>
                <div>
                    <input placeholder="Username" type="text" v-model="user.username" />
                </div>
                <div>
                    <input placeholder="Password" type="password" v-model="user.password" autocomplete="on" />
                </div>
                <span v-if="this.invalidLogin" class="error-msg">Correo o contraseña no válidos</span>

                <div>
                    <button>INICIAR SESIÓN</button>
                </div>
                <!-- <div>
                    <router-link to="/listado"><button>ENTRAR SIN INICIAR SESIÓN</button></router-link>
                </div> -->
                <div>
                    <p>¿No tienes cuenta? Registrate <span class="change-view" @click="$emit('change-view')">aquí</span></p>
                </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
    name: 'login-component',
    data() {
        return {
            invalidLogin: false,
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        validateLogin() {
            axios
                .post('http://localhost:8000/api/login_check', {
                    username: this.user.username,
                    password: this.user.password,
                })
                .then(response => {
                    if (response.status === 200) {
                        this.invalidLogin = false;
                        const token = response.data.token;

                        // Guardar token en una cokie que expire a los 7 dias
                        const date = new Date();
                        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
                        const expires = date.toUTCString();
                        document.cookie = `token=${token}; expires=${expires}; path=/`
                        
                        router.push({ name: 'car-list-view' });
                    } else this.invalidLogin = true;
                })
                .catch(err => {
                    this.invalidLogin = true;
                })
        }
    }
}
</script>

<style scoped>
    #user-login {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 25px;
        text-align: center;
        font-size: 1.3em;
        color: white;
        text-shadow: 2px 2px 5px black;
        padding: 10px;
    }

    h1 {
        margin: 10px;
    }

    input {
        margin-bottom: 15px;
        text-align: center;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-size: 1.1em;
    }

    button {
        padding: 10px;
        margin: 10px;
        background-color: rgb(255, 255, 255, 0.7);
        border: 2px solid black;
        border-radius: 15px;
        font-size: 0.7em;
        width: 82%;
        font-weight: bold;
        cursor: pointer;
    }

    input {
        font-size: 1.2em;
        border-radius: 15px;
        background-color: rgb(255, 255, 255, 0.7);
    }
    .change-view {
        cursor: pointer;
        text-decoration: underline;
    }

    p {
        font-size: 1.2em;
        font-weight: 600;
    }

    .error-msg {
        display: block;
        color: orange;
        margin: -10px 0 10px;
        font-weight: 600;
    }

</style>