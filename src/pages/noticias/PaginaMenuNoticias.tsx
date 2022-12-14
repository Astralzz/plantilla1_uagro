import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonNavLink,
  IonSearchbar,
  IonText,
  IonTextarea,
  IonTitle,
  useIonLoading,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { getListaNoticias, getListaNoticiasPorNombre } from "./ApiNoticias";
import Noticia from "./Noticia";
import PaginaNoticia from "./PaginaNoticia";

//Opciones de la fecha
const OPCIONES_FECHA = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

//Pagina de noticias
const PaginaMenuNoticias: React.FC = () => {
  //Noticias
  const [listaNoticias, setNoticias] = useState<Noticia[]>([]);
  const [textBuscar, setTextBuscar] = useState<string>("");

  //Effect al cargar
  useEffect(() => {
    //Buscamos
    buscarNoticias();
  }, []);

  //Effect al cargar
  useEffect(() => {
    //Buscamos
    buscarNoticias();
  }, [textBuscar]);

  //Buscar noticias
  const buscarNoticias = async () => {
    let res = [];
    const noResultados = 3;

    //Buscamos lista completa
    if (textBuscar === "") {
      res = await getListaNoticias(noResultados);

      //Comprobamos
      if (res === undefined || res === null || res.status > 399) {
        setNoticias([]);
      }
    } /*Buscamos por nombre del input buscar*/ else {
      res = await getListaNoticiasPorNombre(textBuscar);

      //Comprobamos
      if (res === undefined || res === null || res.status > 399) {
        setNoticias([]);
      }
    }

    setNoticias(res);
  };

  return (
    <>
      {/* Buscar noticia */}
      <IonSearchbar
        onIonChange={(e) => setTextBuscar(String(e.detail.value))}
        placeholder="Buscar noticia"
      ></IonSearchbar>

      {/* Ponemos la lista de las noticias */}
      {listaNoticias.map((not) => {
        return (
          <IonCard key={not.id}>
            <IonCardHeader>
              {/* Titulo */}
              <IonCardTitle>{not.titulo}</IonCardTitle>
              {/* Fecha */}
              <IonCardSubtitle>
                {new Date(not.fecha).toLocaleDateString("es-ES", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </IonCardSubtitle>
            </IonCardHeader>
            {/* Boton de entrar */}
            <IonNavLink
              routerDirection="forward"
              component={() => <PaginaNoticia noticia={not} />}
            >
              <IonButton fill="clear">Ver</IonButton>
            </IonNavLink>
          </IonCard>
        );
      })}
    </>
  );
};

export default PaginaMenuNoticias;
