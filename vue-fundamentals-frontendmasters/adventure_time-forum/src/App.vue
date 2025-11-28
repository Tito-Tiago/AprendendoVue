<script>
import FavoritesList from './components/favoritesList.vue';
import StatsTable from './components/statsTable.vue';


  export default {

    components: {
    FavoritesList,
    StatsTable
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
            }
        ],
    }
  },
  }
</script>

<template>
  <h1>It`s adventure time</h1>

  <FavoritesList :listOfCharacters="listOfCharacters" />

  <StatsTable :listOfCharacters="listOfCharacters" />
</template>

<style scoped>
  body{
      background-color: black;
      color: darkgray;
  }
  table{
      width: 600px;
  }
  td{
      text-align: center;
  }
</style>
