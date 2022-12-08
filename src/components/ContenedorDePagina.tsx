import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  ScrollDetail,
} from "@ionic/react";
import { useParams } from "react-router";
import React, { createRef } from "react";
import ReactDOM from "react-dom";
import "./ContenedorDePagina.css";
import { warning } from "ionicons/icons";
import PaginaPrueba from "../pages/PaginaPrueba";

//Pagina de prueba
const ContenedorDePagina: React.FC = () => {
  //Obtenemos el titulo de la pagina por la url
  const { name: nombreUrl } = useParams<{ name: string }>();

  //Pagina que se a escogido
  const PaginaEscogida = () => {
    switch (nombreUrl) {
      case "Inicio":
        return <PaginaPrueba />;
      case "Noticias":
        return (
          <IonContent>
            <IonTitle>Noticias</IonTitle>
          </IonContent>
        );
      case "Eventos":
        return (
          <IonContent>
            <IonTitle>Eventos</IonTitle>
          </IonContent>
        );
      default:
        return <PaginaPrueba />;
    }
  };

  return (
    // Pagina por defecto
    <IonPage>
      {/* Contenedor de la barra */}
      <IonHeader>
        {/* Barra de arriba */}
        <IonToolbar>
          {/* Boton */}
          <IonButtons slot="start">
            {/* Boton del menu principal */}
            <IonMenuButton color={"light"} />
          </IonButtons>
          {/* Titulo de la pagina */}
          <IonTitle color={"light"}>{nombreUrl}</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Pagina a mostrar */}
      <PaginaEscogida />
    </IonPage>
  );
};

export default ContenedorDePagina;
