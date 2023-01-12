import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import React, { useState } from "react";
import Menu from "../components/Menu";
import ContenedorDePaginas from "../components/ContenedorDePaginas";
import Usuario from "../models/Usuario";

// Control de las rutas
const PageRoutesApp: React.FC = () => {
  //Usuario principal
  const [usuarioSesion, setUsuarioSesion] = useState<Usuario>({
    id: 0,
    nombre: null,
    matricula: null,
    apellido_paterno: null,
    apellido_materno: null,
    email: null,
    isDocente: false,
    isConectado: false,
  });

  //Contenedor
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        {/* Menu principal izquierdo */}
        <Menu />
        <IonRouterOutlet id="main">
          {/*Pagina por defecto*/}
          <Route path="/" exact={true}>
            <Redirect to="/uagro/inicio" />
          </Route>
          {/* Paginas del menu */}
          <Route path="/uagro/:name" exact={true}>
            {/* Pagina por defecto */}
            <ContenedorDePaginas
              usuarioSesion={usuarioSesion}
              setUsuarioSesion={setUsuarioSesion}
            />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default PageRoutesApp;
