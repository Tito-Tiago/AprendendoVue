<script>
    export default{
        emits: ['toggle-favourite'],


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
            emitToggleFavourite(character) {
                this.$emit('toggle-favourite', character)
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
              <button @click="emitToggleFavourite(character)"> desfavoritar </button>
          </div>
      </div>
      <h3>n favoritos: </h3>
      <div v-for="character in this.listOfCharacters">
          <div v-if="!character.favorite">
              <li>{{ character.name }}</li>
              <button @click="emitToggleFavourite(character)"> favoritar </button>
          </div>
      </div>
  </ul>        
  <p v-else>No characters in the list</p>
</template>