<script>
    import PrettyButton from './prettyButton.vue';

    export default{
        components: {
            PrettyButton
        },
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
              <li>
                {{ character.name }}
                <PrettyButton @prettyClick="emitToggleFavourite(character)"> desfavoritar </PrettyButton>
              </li> 
          </div>
      </div>
      <h3>n favoritos: </h3>
      <div v-for="character in this.listOfCharacters">
          <div v-if="!character.favorite">
              <li>
                {{ character.name }}
                <PrettyButton @prettyClick="emitToggleFavourite(character)"> favoritar </PrettyButton>
            </li>
          </div>
      </div>
  </ul>        
  <p v-else>No characters in the list</p>
</template> 

<style scoped>
    ul {
        text-decoration: none;
    }
    li {
        padding: 10px;
        min-width: 10vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>