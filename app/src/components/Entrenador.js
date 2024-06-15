export default {
    template: `

   <main class="pokemon-game">
    <h1 class="pokemon-title">Entrenadores Pokemon!</h1>
    <div class="listEntrenadores">
      <ul v-if="isEntrenador">
        <li v-for="Entrenador in Entrenadores" :key="Entrenador.id" class="entrenador-card">
          <i class="icon-pokemon"></i>
          <span class="entrenador-name">{{ Entrenador.entrenador }}</span>
          <button @click="togglePokemon(Entrenador.id)" class="btn-ver-pokemon">Ver Pokémon</button>
          <button @click="toggleSeleccion(Entrenador.id)" class="btn-seleccionar" v-if="!isSelected(Entrenador.id)">Seleccionar</button>
          <button @click="toggleSeleccion(Entrenador.id)" class="btn-cancelar" v-else>Cancelar</button>
          <ul v-if="isActive(Entrenador.id)" class="lista-pokemones">
            <li v-for="pokemon in Entrenador.pokemons" :key="pokemon.nombre" :class="['pokemon-item', pokemon.tipo]">
              <img :src="pokemon.foto" :alt="pokemon.nombre" class="pokemon-photo" width="100px">
              <span class="pokemon-name">Nombre: {{ pokemon.nombre }}</span>
              <span class="pokemon-type">Tipo: {{ pokemon.tipo }}</span>
            </li>
          </ul>
        </li>
      </ul>
      <p v-else class="notEntrenador">
        ¡No hay Entrenadores pokemon!
      </p>
      <center>
      <button @click="realizarCombate" :disabled="selectedEntrenadores.length !== 2" class="btn-combate">Nuevo Combate</button>
      
      </center>
    </div>
  </main>
    `,
    props: {
        Entrenadores: {
            type: Array,
            required: true
        },
        isEntrenador: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            activeEntrenadores: [],
            selectedEntrenadores: []
        };
    },
    methods: {
        togglePokemon(id) {
            if (this.isActive(id)) {
                this.activeEntrenadores = this.activeEntrenadores.filter(e => e !== id);
            } else {
                this.activeEntrenadores.push(id);
            }
        },
        toggleSeleccion(id) {
            if (!this.isSelected(id)) {
              if (this.selectedEntrenadores.length < 2) {
                const entrenador = this.Entrenadores.find(e => e.id === id);
                alert(`Entrenador ${entrenador.entrenador} seleccionado.`);
                this.selectedEntrenadores.push(id);
              } else {
                alert('Ya has seleccionado 2 entrenadores para el combate.');
              }
            } else {
              this.selectedEntrenadores = this.selectedEntrenadores.filter(e => e !== id);
            }
          },
        isSelected(id) {
            return this.selectedEntrenadores.includes(id);
        },
        isActive(id) {
            return this.activeEntrenadores.includes(id);
        },
        realizarCombate() {
            if (this.selectedEntrenadores.length === 2) {
                const entrenador1 = this.Entrenadores.find(e => e.id === this.selectedEntrenadores[0]);
                const entrenador2 = this.Entrenadores.find(e => e.id === this.selectedEntrenadores[1]);
                alert(`¡Combate! ${entrenador1.entrenador} vs ${entrenador2.entrenador}`);
            } else {
                alert('Debes seleccionar exactamente 2 entrenadores para realizar el combate.');
            }
        }
    },
    name: 'Entrenador',
};
