import axios from "axios"; //npm i axios

const URL = process.env.REACT_APP_API_URL;

//Buscar ultimas n Noticias
async function getListaNoticias(no: number = 10) {
  //Ruta
  const url = URL + "/api/app/uagro/noticias/lista/" + no;

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
  const url = URL + "/api/app/uagro/noticias/lista/" + nombre + "/" + no;

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
