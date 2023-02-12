<template>
    <div id="body">

    </div>
</template>

<script>
import HeaderComponent from "@/components/shared/HeaderComponent.vue";

export default {
    name: 'car-list-view',
    data() {

    },
    components: {
        CarCardComponent,
        HeaderComponent
    },
    methods: {

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
    grid-template-columns: repeat(4, auto);
}

.card-item {
        margin: 20px;
    }
</style>