import {
  IonAccordion,
  IonAccordionGroup,
  IonAvatar,
  IonButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonNav,
  IonPage,
  IonPopover,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import React from "react";
import ReactDOM from "react-dom";
import "./ContenedorDePagina.css";
import PaginaPrueba from "../pages/PaginaPrueba";
import PaginaMenuNoticias from "../pages/noticias/PaginaMenuNoticias";
import { personCircle } from "ionicons/icons";

//import { UnauthenticatedSessionControl } from  'react-session-control';
 

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
          <IonTitle className="letrasDeBarra" color={"light"}>
            {nombreUrl.toUpperCase()}
          </IonTitle>

          {/* Sección de inicio de sesión */}
          <IonButtons slot="secondary">
            {/* Boton */}
            <IonButton
              className="letrasDeBarra"
              id="secciones-sesion"
              color={"light"}
            >
              Iniciar sesión{" "}
            </IonButton>

            {/* Secciones */}
            <IonPopover trigger="secciones-sesion" dismissOnSelect={false}>
              <IonContent>
                <IonItem button>
                  <IonLabel>Cuenta</IonLabel>
                </IonItem>
                <IonItem button>
                  <IonLabel>Configuraciones</IonLabel>
                </IonItem>
                <IonItem button>
                  <IonLabel>Cambiar cuenta</IonLabel>
                </IonItem>
                <IonItem button>
                  <IonLabel>Cerrar sesión</IonLabel>
                </IonItem>
              </IonContent>
            </IonPopover>

            {/* Imagen */}
            <IonItem>
              <IonAvatar slot="start">
                <img
                  alt="Silhouette of a person's head"
                  src="https://ionicframework.com/docs/img/demos/avatar.svg"
                />
              </IonAvatar>
            </IonItem>
          </IonButtons>
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
