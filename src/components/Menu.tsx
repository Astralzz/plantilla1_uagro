import {
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonThumbnail,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import logoUagro from "../img/logo-uagro-blanco.png";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoWhatsapp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";
import "./Menu.css";

// Pagina del menu
interface paginaDelMenu {
  url: string;
  IconoIos: string;
  IconoAndroid: string;
  Titulo: string;
}

// Lista de las paginas
const listaDePaginas: paginaDelMenu[] = [
  {
    Titulo: "Inicio",
    url: "/uagro/Inicio",
    IconoIos: mailOutline,
    IconoAndroid: mailSharp,
  },
  {
    Titulo: "Noticias",
    url: "/uagro/Noticias",
    IconoIos: paperPlaneOutline,
    IconoAndroid: paperPlaneSharp,
  },
  {
    Titulo: "Eventos",
    url: "/uagro/Eventos",
    IconoIos: heartOutline,
    IconoAndroid: heartSharp,
  },
];

// Contacto
interface contacto {
  titulo: string;
  icono: string;
  url: string;
}

//Contactos de la pagina
const contactos: contacto[] = [
  {
    titulo: "Facebook",
    icono: logoFacebook,
    url: "https://www.facebook.com/UAGro.MX.Oficial/",
  },
  {
    titulo: "Twitter",
    icono: logoTwitter,
    url: "https://twitter.com/uagro_mx?lang=es",
  },
  {
    titulo: "Instagram",
    icono: logoInstagram,
    url: "https://www.instagram.com/uagro_mx/?hl=es",
  },
];

//Menu principal
const Menu: React.FC = () => {
  // Localización
  const location = useLocation();

  return (
    // Menu Ionic
    <IonMenu contentId="main" type="overlay">
      {/* Contenedor ionic */}
      <IonContent>
        {/* Lista ionic */}
        <IonList id="menu-list">
          {/* Titulo */}
          {/* <IonListHeader>Uagro</IonListHeader> */}

          {/* Logo de la uagro */}
          <IonImg src={logoUagro} id="logoUagro" alt="Logo de la Uagro" />

          {/* Subtitulo */}
          <IonNote>Universidad Autónoma de Guerrero</IonNote>
          {/* Recorremos con map */}
          {listaDePaginas.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                {/* Item ionic */}
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  {/* Icono */}
                  <IonIcon
                    slot="start"
                    ios={appPage.IconoIos}
                    md={appPage.IconoAndroid}
                  />
                  <IonLabel>{appPage.Titulo}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* Parte de las redes sociales */}
        <IonList id="etiquetas-list">
          {/* Titulo */}
          <IonListHeader>Nuestras redes sociales: </IonListHeader>
          {/* Etiquetas */}
          {contactos.map((cont, index) => (
            <IonItem lines="none" key={index}>
              {/* Icono */}
              <IonIcon slot="start" ios={cont.icono} md={cont.icono} />
              {/* Cadena de texto */}
              <IonLabel>
                {/* URL */}
                <a href={cont.url}>{cont.titulo}</a>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
