<template>
    <div id="user-register">
        <form @submit.prevent="registerUser">
            <h1>Regístrate!</h1>
            <div>
                <input placeholder="Usuario" v-model="user.name" type="text" />
                <span v-if="this.invalidUser" class="error-msg">El usuario debe tener más de 3 letras</span>
            </div>
            <div>
                <input placeholder="Email" v-model="user.email" type="text" />
                <span v-if="this.invalidEmail" class="error-msg">Formato de correo incorrecto</span>
            </div>
            <div>
                <input placeholder="Contraseña" v-model="user.password1" type="password" />
                <span v-if="this.invalidPassword1" class="error-msg">La contraseña es muy corta</span>
            </div>
            <div>
                <input placeholder="Repetir Contraseña" v-model="user.password2" type="password" />
                <span v-if="this.invalidPassword2" class="error-msg">Las contraseñas no coinciden</span>
            </div>
            <div>
                <button>REGISTRARSE</button>
            </div>
            <div>
                    <p>Ya tienes cuenta? Inicia sesión <span class="change-view" @click="$emit('change-view')">aquí</span></p>
                </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'register-component',
    data() {
        return {
            procesando: false,
            correcto: false,
            invalidUser: false,
            invalidEmail: false,
            invalidPassword1: false,
            invalidPassword2: false,
            user: {
                name: '',
                email: '',
                password1: '',
                password2: ''
            }
        }
    },
    methods: {
        registerUser() {
            this.procesando = true;
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

        }
    },
    computed: {
        invalidUserF() {
            return this.user.name.length < 3;
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