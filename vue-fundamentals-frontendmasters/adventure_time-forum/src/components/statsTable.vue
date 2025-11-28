<script>
    export default{
        data(){
            return{
                listOfRaces: ["Human",  "dog", "Candy person", "rainycorn"],

            }
        },

        computed: {
            raceStatisitcs() {
            return this.listOfRaces.map( (race) => {
                const total = this.listOfCharacters.filter(character => character.race === race).length

                const numFavorites = this.listOfCharacters.filter(character => character.favorite && character.race === race).length

                return{
                    race: race,
                    total: total,
                    numFavorites: numFavorites
                }
                })
            }
        },

        props: ['listOfCharacters']

    }

</script>

<template>
  <table>
      <thead>
          <tr>
              <th>raça</th>
              <th>QTD</th>
              <th>num de favoritos</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="stat in raceStatisitcs">
              <td>{{ stat.race }}</td>
              <td>{{ stat.total }}</td> <!-- quantidade reativa -->
              <td>{{ stat.numFavorites }}</td> <!-- quantidade reativa -->
          </tr>
      </tbody>
  </table>
</template>