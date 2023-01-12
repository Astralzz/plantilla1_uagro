import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonNav,
  IonPage,
  IonPopover,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import React, {
  Dispatch,
  SetStateAction,
} from "react";
import ReactDOM from "react-dom";
import "./ContenedorDePagina.css";
import PaginaPrueba from "../pages/PaginaPrueba";
import PaginaMenuNoticias from "../pages/noticias/PaginaMenuNoticias";
import PaginaLogin from "../pages/login/PaginaLogin";
import PageCosa1 from "../pages/PageCosa1";
import Usuario from "../models/Usuario";
import UserLogo from "../img/user-logo.png";

//Parámetros
interface Props {
  usuarioSesion: Usuario;
  setUsuarioSesion: Dispatch<SetStateAction<Usuario>>;
}

//Contenedor de paginas
const ContenedorDePaginas: React.FC<Props> = (props) => {
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
      case "Cosa1":
        return <PageCosa1 />;
      default:
        return <PaginaPrueba />;
    }
  };

  //Componentes de login
  const ComponentesDeLogin = () => {
    // Sesión iniciada ?
    if (props.usuarioSesion.isConectado) {
      return (
        <>
          {/* Boton */}
          <IonButton
            className="letrasDeBarra"
            id="secciones-sesion"
            color={"light"}
          >
            15240863@uagro.mx
          </IonButton>

          {/* Imagen */}
          <IonItem>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
          </IonItem>

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
                <IonLabel>Cerrar sesión</IonLabel>
              </IonItem>
            </IonContent>
          </IonPopover>
        </>
      );
    } else {
      //Sesión no iniciada
      return (
        <>
          {/* Boton de acceder */}
          <IonButton className="letrasDeBarra" id="open-modal" expand="block">
            Acceder
          </IonButton>

          {/* Imagen */}
          <IonItem>
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>
          </IonItem>
        </>
      );
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
            <ComponentesDeLogin />
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

export default ContenedorDePaginas;
