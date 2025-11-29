<script>
    export default{
        data() {
            return{
            }
        },

        props: {
            listOfCharacters: {
                type: Array,
                required: true
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
  <h3>Characters:</h3>
  <ul v-if="this.listOfCharacters.length > 0">
      <h3>favoritos: </h3>
      <div v-for="character in this.listOfCharacters">
          <div v-if="character.favorite">
              <li>{{ character.name }}</li>
              <button @click="toggleFavorite(character)"> desfavoritar </button>
          </div>
      </div>
      <h3>n favoritos: </h3>
      <div v-for="character in this.listOfCharacters">
          <div v-if="!character.favorite">
              <li>{{ character.name }}</li>
              <button @click="toggleFavorite(character)"> favoritar </button>
          </div>
      </div>
  </ul>        
  <p v-else>No characters in the list</p>
</template>