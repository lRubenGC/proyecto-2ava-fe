<template>
    <div id="user-register">
        <form @submit.prevent="verifyUser">
            <h1>Regístrate!</h1>
            <div>
                <input placeholder="Usuario" v-model="user.username" type="text" @input="processing()"/>
                <span v-if="this.invalidUser" class="warn-msg">El usuario debe tener más de 3 letras</span>
            </div>
            <div>
                <input placeholder="Email" v-model="user.email" type="text" />
                <span v-if="this.invalidEmail" class="warn-msg">Formato de correo incorrecto</span>
            </div>
            <div>
                <input placeholder="Contraseña" v-model="user.password1" type="password" autocomplete="on" />
                <span v-if="this.invalidPassword1" class="warn-msg">La contraseña es muy corta</span>
            </div>
            <div>
                <input placeholder="Repetir Contraseña" v-model="user.password2" type="password" autocomplete="on" />
                <span v-if="this.invalidPassword2" class="warn-msg">Las contraseñas no coinciden</span>
            </div>
            <div>
                <button>REGISTRARSE</button>
            </div>
                <span v-if="this.correctRegister" class="success-msg">Usuario registrado con éxito</span>
                <span v-if="this.incorrectRegister" class="error-msg">Error en el registro</span>
                <span v-if="this.usedUsername && this.procesando" class="error-msg">El usuario {{ user.username }} está en uso</span>
            <div>
                <p>Ya tienes cuenta? Inicia sesión <span class="change-view" @click="$emit('change-view')">aquí</span></p>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
    name: 'register-component',
    data() {
        return {
            correctRegister: false,
            incorrectRegister: false,
            usedUsername: false,
            procesando: false,
            correcto: false,
            invalidUser: false,
            invalidEmail: false,
            invalidPassword1: false,
            invalidPassword2: false,
            user: {
                username: '',
                email: '',
                password1: '',
                password2: ''
            }
        }
    },
    methods: {
        verifyUser() {
            this.correcto = false;

            if (this.invalidUserF) {
                this.invalidUser = true;
                return;
            }
            this.invalidUser = false;

            if (this.invalidEmailF) {
                this.invalidEmail = true;
                return;
            }
            this.invalidEmail = false;

            if (this.invalidPasswordF) {
                this.invalidPassword1 = true;
                return;
            }
            this.invalidPassword1 = false;

            if (this.differentPasswordF) {
                this.invalidPassword2 = true;
                return;
            }
            this.invalidPassword2 = false;

            this.correcto = true;

            this.registerUser();

        },

        registerUser() {
            if (this.correcto) {
                axios
                .post('http://localhost:8000/user/register', {
                    username: this.user.username,
                    password: this.user.password1,
                    email: this.user.email
                })
                .then(response => {
                    if (response.status === 200) {
                        this.usedUsername = false;
                        this.correctRegister = true;
                        this.procesando = false;
                        // setTimeout(() => {
                        //     // TODO: Cambiar la booleana del padre para cambiar de componente
                        // }, 1000);
                    }
                })
                .catch(err => {
                    if (err.response.status === 400) {
                        this.procesando = true;
                        this.correctRegister = false;
                        this.usedUsername = true;
                    }
                })
            }
        },

        processing() {
            this.procesando = false;
        }
    },
    computed: {
        invalidUserF() {
            return this.user.username.length < 3;
        },

        invalidEmailF() {
            const validPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
            if (!this.user.email.match(validPattern)) {
                return true;
            } return false;
        },

        invalidPasswordF() {
            return this.user.password1.length < 8;
        },

        differentPasswordF() {
            return this.user.password1 !== this.user.password2;
        }
    }
}
</script>

<style scoped>
#user-register {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 25px;
        text-align: center;
        font-size: 1.3em;
        color: white;
        text-shadow: 6px 6px 10px black;
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

    .success-msg, .warn-msg, .error-msg {
        display: block;
        font-weight: 600;
        text-shadow: none;
        background-color: rgb(0, 0, 0, 0.6);
        border-radius: 100px;
        padding: 5px;
        margin: 15px 0;
    }
    .error-msg {
        color: red;
    }

    .warn-msg {
        color: orange;
        margin-top: -5px
    }

    .success-msg {
        color: #86DC3D;
    }

</style>