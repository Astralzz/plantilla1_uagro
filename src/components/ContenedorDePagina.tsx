import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonNav,
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

//Contenedor de paginas
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
        return <IonNav root={() => <PaginaMenuNoticias />}></IonNav>;
      case "Eventos":
        return <IonTitle>Eventos</IonTitle>;
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
      <IonContent>
        <PaginaEscogida />
      </IonContent>
    </IonPage>
  );
};

export default ContenedorDePagina;
