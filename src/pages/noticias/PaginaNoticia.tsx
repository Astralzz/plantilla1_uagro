import { IonContent, IonText, IonTitle } from "@ionic/react";
import React from "react";
import Noticia from "./Noticia";

//Pagina de noticias
const PaginaNoticia: React.FC<Noticia> = (noticia: Noticia) => {
  return (
    <IonContent>
      <IonTitle>{noticia.titulo}</IonTitle>
      <IonText>{noticia.informacion}</IonText>
    </IonContent>
  );
};

export default PaginaNoticia;
