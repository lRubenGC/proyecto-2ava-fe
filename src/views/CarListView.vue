<template>
    <div id="body">
        <header-component id="header" />
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
import HeaderComponent from "@/components/shared/HeaderComponent.vue";
import CarCardComponent from "@/components/CarCardComponent.vue";

export default {
    name: 'car-list-view',
    data() {
        return {
            cars: []
        }
    },
    mounted() {
        this.getCoches();
    },
    components: {
        HeaderComponent,
        CarCardComponent
    },
    methods: {
        async getCoches() {
            try {
                const response = await fetch("http://localhost:3000/cars");
                this.cars = await response.json();
            } catch (err) {
                console.log(err);
            }
        }
    }
}

</script>

<style>
#body {
    background-color: #E3E6E6;
}

.card-body {
    display: flex;
    justify-content: center;
}

.card-list {
    display: grid;
    grid-template-columns: repeat(5, auto);
}

.card-item {
        margin: 10px;
    }
</style>