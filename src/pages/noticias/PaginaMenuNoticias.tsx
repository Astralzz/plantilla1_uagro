import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonText,
  IonTextarea,
  useIonLoading,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { getListaNoticias } from "./ApiNoticias";
import Noticia from "./Noticia";

//Pagina de noticias
const PaginaMenuNoticias: React.FC = () => {
  //Noticias
  const [listaNoticias, setNoticias] = useState<Noticia[]>([]);

  //Effect
  useEffect(() => {
    //Buscamos
    buscarNoticias();
  }, []);

  //Buscar noticias
  const buscarNoticias = async () => {
    //Buscamos
    const res = await getListaNoticias();

    //Comprobamos
    if (res === undefined || res === null || res.status > 399) {
      setNoticias([]);
    }

    setNoticias(res);
  };

  //Ver noticia
  const verNoticia = () => {
    
  }

  return (
    <IonContent>
      {/* Ponemos las noticias */}
      {listaNoticias.map((noticia) => {
        return (
          <IonCard key={noticia.id}>
            <IonCardHeader>
              {/* Titulo */}
              <IonCardTitle>{noticia.titulo}</IonCardTitle>
              {/* Fecha */}
              <IonCardSubtitle>{noticia.fecha}</IonCardSubtitle>
            </IonCardHeader>
            {/* Boton de entrar */}
            <IonButton fill="clear">Ver</IonButton>
          </IonCard>
        );
      })}
    </IonContent>
  );
};

export default PaginaMenuNoticias;
