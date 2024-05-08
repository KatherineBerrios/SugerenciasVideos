// IIFE (Expresión de Función Invocada Inmediatamente) que encapsula la lógica de inyectar y mostrar contenido
let iifeGlobal = (() => {
  let inyectarTodo = (url, id) => {
    id.setAttribute("src", url);
    id.style.display = "block";
  };

  return {
    mostrarTodo: (url, id) => inyectarTodo(url, id),
  };
})();

// Definición de la clase Multimedia para manejar la URL
class Multimedia {
  constructor(url) {
    let _url = url;

    this.getUrl = () => _url;
  }
};

  // Getter para obtener la URL
    function Multimedia(url) {
      var _url = url;
      Object.defineProperty(this, "_getUrl", {
      get: function () {
      return _url
      }
      });
    }

    Multimedia.prototype.getUrl = function(){
      return this._getUrl;
    };


  // Método para establecer el inicio del video (no implementado)
    function Multimedia(url) {
          var _url = url;
          Object.defineProperty(this, "_setUrl", {
          set: function () {
          return _url
          }
          });
        }

        Multimedia.prototype.setUrl = function(){
          return this._setUrl;
        };

  // Definición de la clase Reproductor que hereda de Multimedia
  class Reproductor extends Multimedia{
    constructor(id,playMultimedia,setInicio){
    super(id,playMultimedia,setInicio);
    }
  // Método para establecer el inicio del video
  setInicio() {
    // Modifica la URL del video para iniciar en un tiempo específico
    this.getId().setAttribute("src", `${this.url}?start=${tiempo}`);
  }
}

// Crear instancias de Reproductor para reproducir diferentes videos
let playMusica = new Reproductor(
  playMusica.getUrl ("https://www.youtube.com/embed/35K6vQRt67g?si=ZcXyV9ZH6Qscqosm"),
  musica
);
playMusica.playMultimedia();
playMusica.setInicio(200);

let playPelicula = new Reproductor(
  playPelicula.getUrl("https://www.youtube.com/embed/5PSNL1qE6VY?si=72bo9ALCCTW9WUzr"),
  peliculas
);
playPelicula.playMultimedia();
playPelicula.setInicio(200);

let playSerie = new Reproductor(
  playSerie.getUrl("https://www.youtube.com/embed/kEkZdgWu7mM?si=KXdFw-fKfpNm_Klo"),
  series
);
playSerie.playMultimedia();
playSerie.setInicio(200);