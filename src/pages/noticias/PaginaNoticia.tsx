import {
  IonBackButton,
  IonButton,
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
import "./EstiloNoticia.css";

//props
interface props {
  noticia: Noticia;
}

//Pagina de noticias
const PaginaNoticia: React.FC<props> = (p) => {
  return (
    <IonContent class="ion-padding">
      <IonContent class="PaginaNoticia">
        <IonHeader translucent={true}>
          <IonText>
            <h1>{p.noticia.titulo}</h1>
          </IonText>
          <p>
            <IonText>{p.noticia.informacion}</IonText>
          </p>
        </IonHeader>
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
