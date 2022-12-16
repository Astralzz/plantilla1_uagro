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
  IonModal,
  IonNav,
  IonPage,
  IonPopover,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonActionSheet,
} from "@ionic/react";
import { useParams } from "react-router";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./ContenedorDePagina.css";
import PaginaPrueba from "../pages/PaginaPrueba";
import PaginaMenuNoticias from "../pages/noticias/PaginaMenuNoticias";
import { personCircle } from "ionicons/icons";
import PaginaLogin from "../pages/login/PaginaLogin";

//Contenedor de paginas
const ContenedorDePagina: React.FC = () => {
  //Obtenemos el titulo de la pagina por la url
  const { name: nombreUrl } = useParams<{ name: string }>();
  //Sección del modal
  const page = useRef(null);
  const modal = useRef<HTMLIonModalElement>(null);
  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);
  const [present] = useIonActionSheet();

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function canDismiss() {
    return new Promise<boolean>((resolve, reject) => {
      present({
        header: "Are you sure?",
        buttons: [
          {
            text: "Yes",
            role: "confirm",
          },
          {
            text: "No",
            role: "cancel",
          },
        ],
        onWillDismiss: (ev) => {
          if (ev.detail.role === "confirm") {
            resolve(true);
          } else {
            reject();
          }
        },
      });
    });
  }

  const isLogin = false;

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

  //Componentes de login
  const ComponetesDeLogin = () => {
    // Sesión iniciada ?
    if (isLogin) {
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
                <IonLabel>Cambiar cuenta</IonLabel>
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

          {/* Modal */}
          <IonModal
            ref={modal}
            trigger="open-modal"
            canDismiss={canDismiss}
            presentingElement={presentingElement!}
          >
            <PaginaLogin Modal={modal} />
          </IonModal>
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
            <ComponetesDeLogin />
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
