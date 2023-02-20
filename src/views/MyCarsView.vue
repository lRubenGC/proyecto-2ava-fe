<template>
    <div id="body">
        <header-component id="header"/>
        <div class="header">
            <h1>{{ username }}, aquí está el listado de tu colección</h1>
            <hr>
        </div>
        <div class="card-body">
            <div class="card-list">
                <div v-for="car in cars">
                    <car-card-component :car="car" class="card-item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import CarCardComponent from "@/components/CarCardComponent.vue";
import token from '@/auth/getToken';
import router from "@/router";


export default {
    name: 'my-cars-view',
    data() {
        return {
            cars: [],
            username: ''
        }
    },
    components: {
        HeaderComponent,
        CarCardComponent
    },
    mounted() {
        const id = sessionStorage.getItem("userId");
        axios
            .get(`http://localhost:8000/user/${id}/cars`)
            .then(response => {
                this.cars = [...response.data.cars];
                this.cars.map(car => {
                    car.car_series = car.car_series.split(",");
                });
            })
        
        this.username = sessionStorage.getItem('username');

        const valid = token.getToken();
        if (!valid) {
            router.push({ name: 'login-view' });
        }
    },
    methods: {

    }
}

</script>

<style scoped>
#body {
    background-color: #E3E6E6;
}

.header {
    text-align: center;
}

hr {
    width: 50%;
}

.card-body {
    display: flex;
    justify-content: center;
    cursor: default;
}

.card-list {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(5, auto);
}

.card-item {
    margin: 10px;
}

</style>