<template>
    <section class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section>
</template>
<!-- <script setup>
import sourceData from '../data.json'

const destinationId = () => {
    parseInt(this.$route.params.id)
};

const destination = () => {
    sourceData.destinations.find(destination => destination.id === this.destinationId)
}

</script> -->

<script>

import sourceData from '../data.json'

export default {
    computed: {
        destinationId() {
            return parseInt(this.$route.params.id)
        },
        destination() {
            return sourceData.destinations.find(destination => destination.id === this.destinationId)
        }
    }
}
</script>