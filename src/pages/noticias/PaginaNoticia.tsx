import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonTabBar,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import React from "react";
import Noticia from "./Noticia";

//props
interface props {
  noticia: Noticia;
}

//Pagina de noticias
const PaginaNoticia: React.FC<props> = (p) => {
  return (
    <IonContent class="ion-padding">
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>{p.noticia.titulo}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonTitle>{p.noticia.titulo}</IonTitle>
        <IonText>{p.noticia.informacion}</IonText>
      </IonContent>

      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton>
          <IonBackButton defaultHref="home" />
        </IonFabButton>
      </IonFab>
    </IonContent>
  );
};

export default PaginaNoticia;
