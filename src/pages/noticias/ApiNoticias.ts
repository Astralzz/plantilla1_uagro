import axios from "axios"; //npm i axios

const IP = "10.15.5.25"; // "127.0.0.1";
const Puerto = "8099"; // "8000";

//Buscar ultimas n Noticias
async function getListaNoticias(no: number = 10) {
  //Ruta
  const url =
    "http://" + IP + ":" + Puerto + "/api/app/uagro/noticias/lista/" + no;

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

//Buscar Noticias por nombre
async function getListaNoticiasPorNombre(nombre: string, no: number = 10) {
  //Ruta
  const url =
    "http://" +
    IP +
    ":" +
    Puerto +
    "/api/app/uagro/noticias/lista/" +
    nombre +
    "/" +
    no;

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

export { getListaNoticias, getListaNoticiasPorNombre };
