<template>
    <div id="body">
        <div class="card" :class="setBGColor" @mouseover="showSeeMore" @mouseleave="hideSeeMore">
            <transition name="fade">
                <div v-show="see_more_visibility" class="more">Ver más</div>
            </transition>
            <div v-for="serie in car.series">
                <img v-if="serie==='Treasure Hunt'" src="@/assets/th.png" alt="th icon" id="th-icon">
                <img v-if="serie==='Super Treasure Hunt'" src="@/assets/sth.png" alt="th icon" id="th-icon">
            </div>
            <img :src="imgSrc" alt="coche" id="img-car">
            <div class="car-data">
                <p class="title">{{ car.col }}. {{ car.model_name }}</p>
                <p class="series">{{ car.series[0] }}</p>
                <div v-for="serie in car.series">
                    <p v-if="serie === 'Treasure Hunt'" class="th">*TH</p>
                    <p v-if="serie === 'Super Treasure Hunt'" class="th">*STH</p>
                </div>      
                <p class="col_series">{{ car.col_serie }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'car-card-component',
    data() {
        return {
            see_more_visibility: false
        }
    },
    props: {
        car: Object
    },
    methods: {
        showSeeMore() {
            this.see_more_visibility = true;
        },

        hideSeeMore() {
            this.see_more_visibility = false;
        }
    },
    computed: {
        imgSrc() {
            return `/2022MainImages/${this.car.col}_${this.car.id_car}.jpg`;
        },

        setBGColor() {
            const serie = this.car.series[0].replace(/ /g,'-');
            return serie.toLowerCase();
        }
    }
}
</script>

<style scoped>
.card {
    max-width: fit-content;
    border: 1px solid grey;
    border-radius: 10px;
    position: relative;
    max-width: 300px;
}

.more {
    position: absolute;
    background-color: #131921;
    color: white;
    right: 5px;
    top: 5px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    font-size: 1.1em;
}

#img-car {
    width: 300px;
    height: 160px;
    object-fit: cover;
    object-position: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom: 1px solid grey;
}

.car-data {
    display: block;
    justify-content: space-evenly;
    font-size: 1em;
    font-weight: 600;
}

.title, .series, .col_series {
    display: block;
    margin: 5px 10px;
}

.series {
    text-align: left;
}

.col_series {
    position: absolute;
    right: 0;
    bottom: 0;
}

.th, .sth {
    font-weight: 600;
    margin: 5px 10px;
}

#th-icon {
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 5px 0 0 5px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
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
    background: linear-gradient(#c1c5c6 70%, #9A9896);
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
    background: linear-gradient(#e3a127 85%, #ce8c01);
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
    background: linear-gradient(#D9C9EB 85%, #876c7d);
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
    background: linear-gradient(#DBDB09 70%, #64AE14);
}

.rally-champs {
    background-color: #21336D;
    color: #FFFFFF;
}

.hw-drag-strip {
    background: linear-gradient(#B1B7BE 70%, #868E95);
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

</style>