<template>
    <div id="body">
        <header-component id="header" />
        <div class="header">
            <h1>Listado de los coches</h1>
            <hr>
            <button v-on:click="filterBy('show-all')" class="filter-button show-all">Mostrar todos los coches</button>
            <button v-on:click="filterBy('Treasure Hunt')" class="filter-button treasure-hunt">Treasure Hunts</button>
            <button v-on:click="filterBy('Super Treasure Hunt')" class="filter-button super-treasure-hunt">Super Treasure
                Hunts</button>
            <button v-on:click="filterBy('Red Edition')" class="filter-button red-edition">Red Edition</button>
            <div>
                <button v-for="button in buttons" v-on:click="filterBy(button[0])" class="filter-button"
                    :class="button[1]">{{ button[0] }}</button>
            </div>
        </div>
        <div class="card-body">
            <div class="card-list">
                <div v-for="car in cars_showed">
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
import token from "@/auth/getToken";
import router from "@/router";


export default {
    name: 'car-list-view',
    data() {
        return {
            cars: [],
            cars_showed: [],
            buttons: [
                ['HW Dream Garage', 'hw-dream-garage'],
                ['Baja Blazers', 'baja-blazers'],
                ['Experimotors', 'experimotors'],
                ['HW Metro', 'hw-metro'],
                ['Batman', 'batman'],
                ['HW Screen Time', 'hw-screen-time'],
                ['Tooned', 'tooned'],
                ['Fast Foodie', 'fast-foodie'],
                ['HW Turbo', 'hw-turbo'],
                ['Street Beasts', 'street-beasts'],
                ['HW Ride-Ons', 'hw ride-ons'],
                ['HW Hatchbacks', 'hw-hatchbacks'],
                ['Compact Kings', 'compact-kings'],
                ['Chevy Bel Air', 'chevy-bel-air'],
                ['HW Contoured', 'hw-contoured'],
                ['HW Speed Team', 'hw-speed-team'],
                ['HW Hot Trucks', 'hw-hot-trucks'],
                ['Retro Racers', 'retro-racers'],
                ['HW Art Cars', 'hw-art-cars'],
                ['Mud Studs', 'mud-studs'],
                ['HW Green Speed', 'hw-green-speed'],
                ['Factory Fresh', 'factory-fresh'],
                ['HW Daredevils', 'hw-daredevils'],
                ['HW J-Imports', 'hw-j-imports'],
                ['Spoiler Alert', 'spoiler-alert'],
                ['HW Wagons', 'hw-wagons'],
                ['HW Rescue', 'hw-rescue'],
                ['X-Raycers', 'x-raycers'],
                ['HW Drift', 'hw-drift'],
                ['Rod Squad', 'rod-squad'],
                ['HW Exotics', 'hw-exotics'],
                ['Rally Champs', 'rally-champs'],
                ['HW Drag Strip', 'hw-drag-strip'],
                ['Muscle Mania', 'muscle-mania'],
                ['Then and Now', 'then-and-now']
            ]
        }
    },
    mounted() {
        axios
            .get(`http://localhost:8000/api/cars`, {
                headers: {
                    'Authorization': `Bearer ${token.getToken()}`
                }
            })
            .then(response => {
                this.cars = response.data;
                this.cars.map(car => {
                    car.car_series = car.car_series.split(",");
                });
                this.cars_showed = [...this.cars];
            })
            .catch(err => console.log(err))

            const valid = token.getToken();
            if (!valid) {
                router.push({ name: 'login-view' });
            }
    },
    components: {
        HeaderComponent,
        CarCardComponent
    },
    methods: {
        filterBy(car_class) {
            if (car_class === 'show-all') {
                this.cars_showed = [...this.cars];
                return;
            }

            if (car_class === 'Treasure Hunt' || car_class === 'Super Treasure Hunt') {
                this.cars_showed = [];
                this.cars.filter(car => {
                    car.car_series.some(serie => {
                        if (serie === car_class) {
                            this.cars_showed.push(car);
                        }
                    });
                })
                return;
            }

            this.cars_showed = this.cars.filter(car => car.car_series[0] === car_class);
        }
    }
}

</script>

<style scoped>
#body {
    background-color: #E3E6E6;
}

hr {
    margin-top: -10px;
    width: 40%;
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

.header {
    width: 80%;
    text-align: center;
    margin: auto;
}

.filter-button {
    padding: 10px;
    margin: 15px 5px;
    font-weight: 600;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
}

.hw-dream-garage {
    background-color: #3F3B40;
    color: #FFFFFF;
}

.baja-blazers {
    background-color: #9A844E;
    color: #FFFFFF;
}

.experimotors {
    background-color: #E4D702;
    color: #000000;
}

.hw-metro {
    background: linear-gradient(#c1c5c6 60%, #9A9896);
    color: #000000;
}

.batman {
    background-color: #000000;
    color: #FFFFFF;
}

.hw-screen-time {
    background-color: #362D60;
    color: #FFFFFF;
}

.tooned {
    background-color: #4A9088;
    color: #000000
}

.fast-foodie {
    background-color: #EDDA00;
    color: #000000;
}

.hw-turbo {
    background: linear-gradient(#e3a127 60%, #ce8c01);
    color: #FFFFFF;
}

.red-edition {
    background-color: #C23E19;
    color: #FFFFFF;
}

.street-beasts {
    background-color: #4CA0DB;
    color: #000000;
}

.hw-ride-ons {
    background-color: #328EE4;
    color: #FFFFFF;
}

.hw-hatchbacks {
    background-color: #92b607;
    color: #FFFFFF;
}

.retro-racers {
    background-color: #2a5237;
    color: #FFFFFF;
}

.compact-kings {
    background: linear-gradient(#D9C9EB 40%, #876c7d);
    color: #000000;
}

.chevy-bel-air {
    background-color: #70bcfd;
    color: #000000;
}

.hw-contoured {
    background: linear-gradient(#dcd9dc 70%, #B5ACA9);
    color: #000000;
}

.hw-speed-team {
    background-color: #2A378F;
    color: #FFFFFF;
}

.hw-hot-trucks {
    background: linear-gradient(#F1AA40 60%, #ea8021);
    color: #FFFFFF;
}

.spoiler-alert {
    background-color: #E54C2D;
    color: #FFFFFF;
}

.hw-art-cars {
    background-color: #F8E752;
    color: #000000;
}

.mud-studs {
    background-color: #478457;
    color: #FFFFFF;
}

.hw-green-speed {
    background-color: #55973C;
    color: #FFFFFF;
}

.factory-fresh {
    background-color: #65afdf;
    color: #000000;
}

.hw-daredevils {
    background-color: #E54D3E;
    color: #FFFFFF;
}

.hw-j-imports {
    background-color: #4AA0C8;
    color: #FFFFFF;
}

.hw-wagons {
    background-color: #C3681A;
    color: #FFFFFF;
}

.hw-rescue {
    background-color: #9E311D;
    color: #FFFFFF;
}

.x-raycers {
    background-color: #181617;
    color: #FFFFFF;
}

.hw-drift {
    background-color: #C74B6D;
    color: #FFFFFF;
}

.rod-squad {
    background-color: #161d1f;
    color: #FFFFFF;
}

.hw-exotics {
    background: linear-gradient(#DBDB09 55%, #64AE14);
}

.rally-champs {
    background-color: #21336D;
    color: #FFFFFF;
}

.hw-drag-strip {
    background: linear-gradient(#B1B7BE 60%, #868E95);
    color: #000000;
}

.then-and-now {
    background-color: #E54B23;
    color: #000000;
}

.muscle-mania {
    background-color: #DD6113;
    color: #000000;
}

.treasure-hunt {
    background: linear-gradient(#C0C0C0, #7B7B7B);
    color: #000000;
}

.super-treasure-hunt {
    background: linear-gradient(#FFD700, #D1B000);
}

.show-all {
    background-color: #131921;
    color: #FFFFFF;
}
</style>