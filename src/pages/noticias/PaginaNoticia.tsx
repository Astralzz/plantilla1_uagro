import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import Noticia from "./Noticia";

//props
interface props {
  noticia: Noticia;
}

//Pagina de noticias
const PaginaNoticia: React.FC<props> = (p) => {
  return (
    <IonContent class="ion-padding">
      <IonTitle>{p.noticia.titulo}</IonTitle>
      <IonText>{p.noticia.informacion}</IonText>
      <IonHeader>
        {" "}
        <IonBackButton color={"primary"}></IonBackButton>
      </IonHeader>
    </IonContent>
  );
};

export default PaginaNoticia;
