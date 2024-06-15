import Entrenador from "./components/Entrenador.js";
import Servicios from "./services/api.js";

var app = new Vue({
    el: '#app',
    data: {
        isEntrenador: true,
        myEntrenadores: [],
        isSelecciona: false
    },
    components: {
        Entrenador
    },
    methods: {
        initMenssage: function () {
            console.log("Bienvenidos a la clase 2 de Vue.js");
        },
        async fetchData() {
            const servicio = new Servicios();
            servicio.fetchData((error, response) => {
                if (error) {
                    console.error('Error al obtener canchas:', error);
                } else {
                    this.myEntrenadores = response;
                    this.isEntrenador = (this.myEntrenadores.length > 0) ? true : false;
                }
            });

        },
       
       
       
    },
    mounted() {
        this.fetchData();
        this.initMenssage();
    },
    template: `
    <div>
        <Entrenador :Entrenadores="myEntrenadores" :isEntrenador="isEntrenador" />
    </div>
    `
});
