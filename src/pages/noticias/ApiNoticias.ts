import axios from "axios"; //npm i axios

const IP = "127.0.0.1"; //"10.15.5.25";
const Puerto = "8000"; // "8099";

//Buscar Noticias
async function getListaNoticias() {
  //Ruta
  const url = "http://" + IP + ":" + Puerto + "/api/app/uagro/noticias/lista";

  //Obtenemos lista
  const respuesta = await axios
    .get(url)
    //Éxito
    .then(function (response) {
      return response.data;
    })
    //Error
    .catch(function (error) {
      return [];
    });

  return respuesta;
}

export { getListaNoticias };
