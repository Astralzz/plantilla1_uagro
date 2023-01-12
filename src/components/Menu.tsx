import {
  IonAccordionGroup,
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
  IonAccordion,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import logoUagro from "../img/logo-uagro-blanco.png";
import {
  calendarOutline,
  calendarSharp,
  homeOutline,
  homeSharp,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  newspaperOutline,
  newspaperSharp,
  navigate,
  settingsSharp,
  settingsOutline,
  airplane,
  fileTrayStackedOutline,
  earOutline,
  folderOpenOutline,
  handRightOutline,
  manOutline,
  checkmarkOutline,
  documentsOutline,
  cafeOutline,
  eyedropOutline,
  fitnessOutline,
  fileTrayOutline,
  businessOutline,
  ribbonOutline,
  walkOutline,
  maleFemaleOutline,
  openOutline,
  peopleOutline,
  peopleCircleOutline,
  bodyOutline,
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
    IconoIos: homeOutline,
    IconoAndroid: homeSharp,
  },
  {
    Titulo: "Noticias",
    url: "/uagro/Noticias",
    IconoIos: newspaperOutline,
    IconoAndroid: newspaperSharp,
  },
  {
    Titulo: "Eventos",
    url: "/uagro/Eventos",
    IconoIos: calendarOutline,
    IconoAndroid: calendarSharp,
  },
  {
    Titulo: "Ajustes",
    url: "/uagro/Ajustes",
    IconoIos: settingsOutline,
    IconoAndroid: settingsSharp,
  },
];

interface paginaDelMenuDesplegable {
  IconoIos: string;
  IconoAndroid: string;
  Titulo: string;
  subMenus: paginaDelMenu[];
}

interface paginaDelMenuDesplegable2 {
  IconoIos: string;
  IconoAndroid: string;
  Titulo: string;
  subMenus: paginaDelMenu[];
}

interface paginaDelMenuDesplegable3 {
  IconoIos: string;
  IconoAndroid: string;
  Titulo: string;
  subMenus: paginaDelMenu[];
}

interface paginaDelMenuDesplegable4 {
  IconoIos: string;
  IconoAndroid: string;
  Titulo: string;
  subMenus: paginaDelMenu[];
}
interface paginaDelMenuDesplegable5 {
  IconoIos: string;
  IconoAndroid: string;
  Titulo: string;
  subMenus: paginaDelMenu[];
}

// Lista de las paginas
const listaDePaginasDesplegable: paginaDelMenuDesplegable[] = [
  {
    Titulo: "cosa",
    IconoIos: airplane,
    IconoAndroid: airplane,
    subMenus: [
      {
        Titulo: "cosa 2",
        url: "/uagro/Cosa1",
        IconoIos: airplane,
        IconoAndroid: airplane,
      },
      {
        Titulo: "cosa 2",
        url: "hgbygf",
        IconoIos: airplane,
        IconoAndroid: airplane,
      },
    ],
  },
];

const listaDePaginasDesplegable2: paginaDelMenuDesplegable2[] = [
  {
    Titulo: "Servicios Académicos",
    IconoIos: fileTrayStackedOutline,
    IconoAndroid: fileTrayStackedOutline,
    subMenus: [
      {
        Titulo: "Kardex",
        url: "/uagro/Cosa2",
        IconoIos: fileTrayStackedOutline,
        IconoAndroid: fileTrayStackedOutline,
      },
      {
        Titulo: "Tutorías",
        url: "hgbygf",
        IconoIos: earOutline,
        IconoAndroid: earOutline,
      },
      {
        Titulo: "Tramites",
        url: "hgbygf",
        IconoIos: folderOpenOutline,
        IconoAndroid: folderOpenOutline,
      },
      {
        Titulo: "Captura de Calificaciones",
        url: "hgbygf",
        IconoIos: handRightOutline,
        IconoAndroid: handRightOutline,
      },
      {
        Titulo: "Derechos Laborales",
        url: "hgbygf",
        IconoIos: manOutline,
        IconoAndroid: manOutline,
      },
      {
        Titulo: "Seguridad Social",
        url: "hgbygf",
        IconoIos: checkmarkOutline,
        IconoAndroid: checkmarkOutline,
      },
      {
        Titulo: "Requisitos Tramites y Servicios",
        url: "hgbygf",
        IconoIos: documentsOutline,
        IconoAndroid: documentsOutline,
      },
    ],
  },
];
//Menu desplegable3
const listaDePaginasDesplegable3: paginaDelMenuDesplegable3[] = [
  {
    Titulo: "Servicios Universitarios",
    IconoIos: fileTrayOutline,
    IconoAndroid: fileTrayOutline,
    subMenus: [
      {
        Titulo: "Comedores",
        url: "/uagro/Cosa2",
        IconoIos: cafeOutline,
        IconoAndroid: cafeOutline,
      },
      {
        Titulo: "Laboratorios",
        url: "hgbygf",
        IconoIos: eyedropOutline,
        IconoAndroid: eyedropOutline,
      },
      {
        Titulo: "Servicios Médicos",
        url: "hgbygf",
        IconoIos: fitnessOutline,
        IconoAndroid: fitnessOutline,
      },
      
  
    ],
  },
];

//Menu desplegable4
const listaDePaginasDesplegable4: paginaDelMenuDesplegable4[] = [
  {
    Titulo: "Servicios Estudiantes",
    IconoIos: fileTrayOutline,
    IconoAndroid: fileTrayOutline,
    subMenus: [
      {
        Titulo: "Casa de Estudiantes",
        url: "/uagro/Cosa2",
        IconoIos: businessOutline,
        IconoAndroid: businessOutline,
      },
      {
        Titulo: "Becas",
        url: "hgbygf",
        IconoIos: ribbonOutline,
        IconoAndroid: ribbonOutline,
      },
      {
        Titulo: "Movilidad",
        url: "hgbygf",
        IconoIos: walkOutline,
        IconoAndroid: walkOutline,
      },
      
  
    ],
  },
];

//Menu desplegable5
const listaDePaginasDesplegable5: paginaDelMenuDesplegable5[] = [
  {
    Titulo: "Servicios a la comunidad",
    IconoIos: fileTrayOutline,
    IconoAndroid: fileTrayOutline,
    subMenus: [
      {
        Titulo: "Igualdad",
        url: "/uagro/Cosa2",
        IconoIos: maleFemaleOutline,
        IconoAndroid: maleFemaleOutline,
      },
      {
        Titulo: "Diversidad",
        url: "hgbygf",
        IconoIos: peopleOutline,
        IconoAndroid: peopleOutline,
      },
      {
        Titulo: "Multicultularidad",
        url: "hgbygf",
        IconoIos: peopleCircleOutline,
        IconoAndroid: peopleCircleOutline,
      },
      {
        Titulo: "Discapacidad",
        url: "hgbygf",
        IconoIos: bodyOutline,
        IconoAndroid: bodyOutline,
      },
  
    ],
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
  {
    titulo: "Ubicación",
    icono: navigate,
    url: "https://www.google.com.mx/maps/preview",
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
          {/* Menus desplegables */}{" "}
          <IonAccordionGroup id="acordeones-menu">
            {listaDePaginasDesplegable.map((menuDesplegable, index) => {
              return (
                <IonAccordion key={index} value={menuDesplegable.Titulo}>
                  <IonItem slot="header">
                    <IonLabel>{menuDesplegable.Titulo}</IonLabel>
                    <IonIcon
                      slot="start"
                      ios={menuDesplegable.IconoIos}
                      md={menuDesplegable.IconoAndroid}
                    />
                  </IonItem>
                  {menuDesplegable.subMenus.map((subMenu, j) => {
                    return (
                      <div key={j} slot="content">
                        <IonItem
                          className={
                            location.pathname === subMenu.url ? "selected" : ""
                          }
                          routerLink={subMenu.url}
                          routerDirection="none"
                          lines="none"
                          detail={false}
                        >
                          <IonLabel>{subMenu.Titulo}</IonLabel>
                          <IonIcon
                            slot="start"
                            ios={subMenu.IconoIos}
                            md={subMenu.IconoAndroid}
                          />
                        </IonItem>
                      </div>
                    );
                  })}
                </IonAccordion>
              );
            })}
          </IonAccordionGroup>
          <IonAccordionGroup id="acordeones-menu">
            {listaDePaginasDesplegable2.map((menuDesplegable2, index) => {
              return (
                <IonAccordion key={index} value={menuDesplegable2.Titulo}>
                  <IonItem slot="header">
                    <IonLabel>{menuDesplegable2.Titulo}</IonLabel>
                    <IonIcon
                      slot="start"
                      ios={menuDesplegable2.IconoIos}
                      md={menuDesplegable2.IconoAndroid}
                    />
                  </IonItem>
                  {menuDesplegable2.subMenus.map((subMenu, j) => {
                    return (
                      <div key={j} slot="content">
                        <IonItem
                          className={
                            location.pathname === subMenu.url ? "selected" : ""
                          }
                          routerLink={subMenu.url}
                          routerDirection="none"
                          lines="none"
                          detail={false}
                        >
                          <IonLabel>{subMenu.Titulo}</IonLabel>
                          <IonIcon
                            slot="start"
                            ios={subMenu.IconoIos}
                            md={subMenu.IconoAndroid}
                          />
                        </IonItem>
                      </div>
                    );
                  })}
                </IonAccordion>
              );
            })}
          </IonAccordionGroup>

          <IonAccordionGroup id="acordeones-menu">
            {listaDePaginasDesplegable3.map((menuDesplegable3, index) => {
              return (
                <IonAccordion key={index} value={menuDesplegable3.Titulo}>
                  <IonItem slot="header">
                    <IonLabel>{menuDesplegable3.Titulo}</IonLabel>
                    <IonIcon
                      slot="start"
                      ios={menuDesplegable3.IconoIos}
                      md={menuDesplegable3.IconoAndroid}
                    />
                  </IonItem>
                  {menuDesplegable3.subMenus.map((subMenu, j) => {
                    return (
                      <div key={j} slot="content">
                        <IonItem
                          className={
                            location.pathname === subMenu.url ? "selected" : ""
                          }
                          routerLink={subMenu.url}
                          routerDirection="none"
                          lines="none"
                          detail={false}
                        >
                          <IonLabel>{subMenu.Titulo}</IonLabel>
                          <IonIcon
                            slot="start"
                            ios={subMenu.IconoIos}
                            md={subMenu.IconoAndroid}
                          />
                        </IonItem>
                      </div>
                    );
                  })}
                </IonAccordion>
              );
            })}
          </IonAccordionGroup>

          <IonAccordionGroup id="acordeones-menu">
            {listaDePaginasDesplegable4.map((menuDesplegable4, index) => {
              return (
                <IonAccordion key={index} value={menuDesplegable4.Titulo}>
                  <IonItem slot="header">
                    <IonLabel>{menuDesplegable4.Titulo}</IonLabel>
                    <IonIcon
                      slot="start"
                      ios={menuDesplegable4.IconoIos}
                      md={menuDesplegable4.IconoAndroid}
                    />
                  </IonItem>
                  {menuDesplegable4.subMenus.map((subMenu, j) => {
                    return (
                      <div key={j} slot="content">
                        <IonItem
                          className={
                            location.pathname === subMenu.url ? "selected" : ""
                          }
                          routerLink={subMenu.url}
                          routerDirection="none"
                          lines="none"
                          detail={false}
                        >
                          <IonLabel>{subMenu.Titulo}</IonLabel>
                          <IonIcon
                            slot="start"
                            ios={subMenu.IconoIos}
                            md={subMenu.IconoAndroid}
                          />
                        </IonItem>
                      </div>
                    );
                  })}
                </IonAccordion>
              );
            })}
          </IonAccordionGroup>

          <IonAccordionGroup id="acordeones-menu">
            {listaDePaginasDesplegable5.map((menuDesplegable5, index) => {
              return (
                <IonAccordion key={index} value={menuDesplegable5.Titulo}>
                  <IonItem slot="header">
                    <IonLabel>{menuDesplegable5.Titulo}</IonLabel>
                    <IonIcon
                      slot="start"
                      ios={menuDesplegable5.IconoIos}
                      md={menuDesplegable5.IconoAndroid}
                    />
                  </IonItem>
                  {menuDesplegable5.subMenus.map((subMenu, j) => {
                    return (
                      <div key={j} slot="content">
                        <IonItem
                          className={
                            location.pathname === subMenu.url ? "selected" : ""
                          }
                          routerLink={subMenu.url}
                          routerDirection="none"
                          lines="none"
                          detail={false}
                        >
                          <IonLabel>{subMenu.Titulo}</IonLabel>
                          <IonIcon
                            slot="start"
                            ios={subMenu.IconoIos}
                            md={subMenu.IconoAndroid}
                          />
                        </IonItem>
                      </div>
                    );
                  })}
                </IonAccordion>
              );
            })}
          </IonAccordionGroup>





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
