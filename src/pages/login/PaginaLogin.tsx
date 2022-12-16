import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonActionSheet,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";

interface props {
  Modal: any;
}

//Pagina de prueba
const PaginaLogin: React.FC<props> = (p) => {
  function dismiss() {
    p.Modal.current?.dismiss();
  }

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Modal</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismiss()}>Close</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>You will be prompted when closing this modal.</p>
      </IonContent>
    </>
  );
};

export default PaginaLogin;
