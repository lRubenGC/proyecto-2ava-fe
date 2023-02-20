<template>
    <div id="body">
        <header-component id="header" />
        <div id="container">
            <div>
                <img :src="image" alt="coche" id="img-car">
            </div>
            <div class="data-part">
                <p class="car-data">Número de la colección: {{ car.car_col }}</p>
                <p class="car-data">Nombre del modelo: {{ car.car_model }}</p>
                <p class="car-data">ID del coche: {{ car.car_id }}</p>
                <p class="car-data">Versión del coche: {{ car.car_version }}</p>
                <p class="car-data">Serie/s del coche: <span v-for="serie in car.car_series">{{ serie }}. </span></p>
                <p class="car-data">Número de la serie: {{ car.series_col }}</p>
                <button class="button add" @click="addCar">Añadir a mi colección</button>
                <button class="button remove" @click="removeCar">Eliminar de mi colección</button>
                <p class="alert alert-add" v-if="carAdded">Coche añadido a tu colección</p>
                <p class="alert alert-remove" v-if="carRemoved">Coche eliminado de tu colección</p>
            </div>
        </div>

    </div>
</template>

<script>
import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import axios from 'axios';
import token from "@/auth/getToken";
import router from "@/router";


export default {
    name: 'car-detailed-view',
    data() {
        return {
            car: [],
            image: '',
            carAdded: false,
            carRemoved: false
        }
    },
    components: {
        HeaderComponent
    },
    mounted() {
        const id = this.$route.params.id;
        axios
        .get(`http://localhost:8000/api/car/${ id }`, {
            headers: {
                    'Authorization': `Bearer ${token.getToken()}`
                }
        })
        .then(response => {
            this.car = response.data;
            this.image = '/2022MainImages/'+response.data.car_image;
            this.car.car_series = this.car.car_series.split(",");
        })
        .catch(err => console.log(err))


        const valid = token.getToken();
        if (!valid) {
            router.push({ name: 'login-view' });
        }
    },
    methods: {
        addCar() {
            const id = sessionStorage.getItem("userId");
            axios
            .post(`http://localhost:8000/user/${id}/cars/add`, {
                car_id: this.car.id
            })
            .then(response => {
                if (response.status === 200) {
                    this.carAdded = true;
                }
                setTimeout(() => {
                    this.carAdded = false;
                }, 3000)
            })
            .catch(err => console.log(err))
        },

        removeCar() {
            const id = sessionStorage.getItem("userId");
            axios
            .post(`http://localhost:8000/user/${id}/cars/remove`, {
                car_id: this.car.id
            })
            .then(response => {
                if (response.status === 200) {
                    this.carRemoved = true;
                }
                setTimeout(() => {
                    this.carRemoved = false;
                }, 3000)
            })
            .catch(err => console.log(err))
        }
    }
}

</script>

<style scoped>
#body {
    background-color: #E3E6E6;
    height: 100vh;
}

#container {
    display: grid;
    grid-template-columns: 45% 55%;
}

#img-car {
    border: 1px solid black;
    border-radius: 25px;
    max-width: 800px;
    margin: 30px;
}

.data-part {
    margin: 10px 20px;
}

.car-data {
    font-size: x-large;
}

.button {
    padding: 15px;
    font-weight: 600;
    font-size: 1.1em;
    border: 0;
    background-color: #131921;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    margin-right: 10px;
    color: #FFFFFF;
}

#return-route {
    text-decoration: none;
    color: #FFFFFF;
}

.add {
    color: #18A558;
}

.remove {
    color: red;
}

.alert {
    width: 42.5%;
    padding: 20px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 1.1em;
    text-align: center;
}

.alert-add {
    background-color: #18A558;
    color: #FFFFFF;
}

.alert-remove {
    background-color: #FF6242;
    color: #FFFFFF;
}
</style>