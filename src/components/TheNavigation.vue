<template>
      <div id="nav">
    <!-- we use the router link tag for any internal link -->
      <router-link id="logo" to="/">Vue Shool Travel</router-link>
    <router-link 
    v-for="destination in destinations" 
            :key="destination.id" 
            :to="{
                name: 'destination.show',
                params: { id: destination.id, slug: destination.slug }
            }">
            {{ destination.name }}
            </router-link>
  </div>
</template>

<script>
  import sourceData from '../data.json'
  export default {
    data(){
      return {
        destinations: sourceData.destinations
      }
    }
  }
</script>

<!-- trying the router link active class -->
<!-- <style lang="css">
  #nav .vue-school-active-link{
    color: red;
    border-bottom: 2px solid red;
  }
</style> -->