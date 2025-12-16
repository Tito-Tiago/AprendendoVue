<script>
    import FavoritesList from './components/favoritesList.vue';
    import StatsTable from './components/statsTable.vue';
    import BaseLayout from './components/baseLayout.vue'


    export default {
        components: {
            FavoritesList,
            StatsTable,
            BaseLayout
        },

        data() {
        return{
            listOfCharacters: [ 
                {
                    name: "Fin",
                    favorite: false,
                    race: "Human"
                },
                {
                    name: "Jake",
                    favorite: false,
                    race: "dog"
                },
                {
                    name: "Jake's Mom",
                    favorite: false,
                    race: "dog"
                },
                {
                    name: "PB",
                    favorite: false,
                    race: "Candy person" 
                },
                {
                    name: "LR",
                    favorite: false,
                    race: "rainycorn"
                },
                {
                    name: "CB",
                    favorite: false,
                    race: "Candy person"
                },
                {
                    name: "Crunchy",
                    favorite: false,
                    race: "Candy person"
                }],
            }
        },

        methods: {
            toggleFavorite(character) {
                if(character.favorite) {
                    character.favorite = false
                }
                else {
                    character.favorite = true
                }
            }
        }
    }

</script>

<template>

    <BaseLayout>
        <template #header> <h1>It`s adventure time</h1> </template>
        <template #main>
          <FavoritesList :listOfCharacters="listOfCharacters" @toggle-favourite="toggleFavorite" />
          <StatsTable :listOfCharacters="listOfCharacters" />
        </template>
        <template #footer> <p>All rights reserved</p> </template>
    </BaseLayout>


</template>

<style>
  *{
    box-sizing: border-box;
  }
  body{
      color: darkgray;
      margin: 0;
      background-color: #3b4652;
  }
</style>
