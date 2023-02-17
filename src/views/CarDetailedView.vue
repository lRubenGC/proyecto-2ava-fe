<template>
    <div id="body">
        <header-component id="header" />
        <div id="container">
            <div>
                <img :src="'/2022MainImages/' + car.car_image" alt="coche" id="img-car">
            </div>
            <div class="data-part">
                <p class="car-data">Número de la colección: {{ car.car_col }}</p>
                <p class="car-data">Nombre del modelo: {{ car.car_model }}</p>
                <p class="car-data">ID del coche: {{ car.car_id }}</p>
                <p class="car-data">Versión del coche: {{ car.car_version }}</p>
                <p class="car-data">Serie/s del coche: <span v-for="serie in car.car_series">{{ serie }}. </span></p>
                <p class="car-data">Número de la serie: {{ car.series_col }}</p>
                <router-link to="/listado" id="return-route"><button class="button">Volver al listado</button></router-link>
                <button class="button add">Añadir a mi colección</button>
            </div>
        </div>

    </div>
</template>

<script>
import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import axios from 'axios';

export default {
    name: 'car-detailed-view',
    data() {
        return {
            car: []
        }
    },
    components: {
        HeaderComponent
    },
    mounted() {
        const id = this.$route.params.id
        axios
        .get(`http://localhost:8000/api/car/${ id }`)
        .then(response => {
            this.car = response.data;
            this.car.car_series = this.car.car_series.split(",");
        })
        .catch(err => console.log(err))
    },
    methods: {

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
    background-color: #18A558;
}
</style>