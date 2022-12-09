import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import React from "react";
import ReactDOM from "react-dom";
import "./ContenedorDePagina.css";
import PaginaPrueba from "../pages/PaginaPrueba";
import PaginaMenuNoticias from "../pages/noticias/PaginaMenuNoticias";

//Pagina de prueba
const ContenedorDePagina: React.FC = () => {
  //Obtenemos el titulo de la pagina por la url
  const { name: nombreUrl } = useParams<{ name: string }>();

  //Pagina que se a escogido
  const PaginaEscogida = () => {
    //Paginas
    switch (nombreUrl) {
      case "Inicio":
        return <PaginaPrueba />;
      case "Noticias":
        return <PaginaMenuNoticias />;
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
