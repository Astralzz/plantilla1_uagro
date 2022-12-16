import {
  IonAccordion,
  IonAccordionGroup,
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonMenuButton,
  IonModal,
  IonNote,
  IonPage,
  IonPopover,
  IonSearchbar,
  IonText,
  IonTitle,
  IonToolbar,
  ScrollDetail,
} from "@ionic/react";
import { useParams } from "react-router";
import React, { createRef, useRef, useState } from "react";
import ReactDOM from "react-dom";
import "./PaginaPrueba.css";
import { helpCircle, personCircle, warning } from "ionicons/icons";

//Pagina de prueba
const PaginaPrueba: React.FC = () => {
  //Referencia de el scroll
  const contentRef = createRef<HTMLIonContentElement>();

  // Componentes del modal
  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  // Poner el scroll abajo
  function scrollAbajo() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the bottom instead of instantly
    contentRef.current?.scrollToBottom(500);
  }
  // Poner el scroll arriba
  function scrollArriba() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    contentRef.current?.scrollToTop(500);
  }

  // ---------- SECCIÓN DE VALIDAR EMAIL
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === "") return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };

  return (
    // Contenido
    <IonContent ref={contentRef} id="colorFondoPagina" className="ion-padding">
      {/* Titulo */}
      <IonTitle color={"dark"}>Titulo de ejemplo</IonTitle>

      {/* Email */}
      <IonItem
        fill="solid"
        className={`${isValid && "ion-valid"} ${
          isValid === false && "ion-invalid"
        } ${isTouched && "ion-touched"}`}
      >
        <IonLabel position="floating">Email</IonLabel>
        <IonInput
          type="email"
          onIonInput={(event) => validate(event)}
          onIonBlur={() => markTouched()}
        ></IonInput>
        <IonNote slot="helper">Enter a valid email</IonNote>
        <IonNote slot="error">Invalid email</IonNote>
      </IonItem>

      {/* Barra de ejemplo */}
      <IonToolbar>
        <IonButtons slot="secondary">
          <IonButton fill="solid">
            <IonIcon slot="start" icon={personCircle}></IonIcon>
            Contact
          </IonButton>
        </IonButtons>
        <IonButtons slot="primary">
          <IonButton fill="solid">
            Help
            <IonIcon slot="end" icon={helpCircle}></IonIcon>
          </IonButton>
        </IonButtons>
        <IonTitle>Solid Buttons</IonTitle>
      </IonToolbar>

      {/* Bucar calendario */}
      <IonButton id="popover-button">Open Menu</IonButton>
      <IonPopover trigger="popover-button" dismissOnSelect={false}>
        <IonContent>
          <IonDatetime></IonDatetime>
        </IonContent>
      </IonPopover>

      {/* input de ejemplo */}
      <IonItem counter={true}>
        <IonLabel position="floating">Default Counter</IonLabel>
        <IonInput maxlength={20}></IonInput>
      </IonItem>

      {/* Ejemplo de item deslizable */}
      <IonItemSliding>
        <IonItem>
          <IonLabel>Sliding Item with End Options</IonLabel>
        </IonItem>

        <IonItemOptions>
          <IonItemOption>Favorite</IonItemOption>
          <IonItemOption color="danger">Delete</IonItemOption>
        </IonItemOptions>
      </IonItemSliding>

      {/* Acordeón de ejemplo */}
      <IonAccordionGroup>
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonLabel>First Accordion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            First Content
          </div>
        </IonAccordion>
        <IonAccordion value="second">
          <IonItem slot="header" color="light">
            <IonLabel>Second Accordion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Second Content
          </div>
        </IonAccordion>
        <IonAccordion value="third">
          <IonItem slot="header" color="light">
            <IonLabel>Third Accordion</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            Third Content
          </div>
        </IonAccordion>
      </IonAccordionGroup>

      {/* Buscar datos */}
      <IonSearchbar
        id="open-modal"
        animated={true}
        placeholder="Animated"
      ></IonSearchbar>

      {/* Boton de bajar */}
      <IonButton expand="block" onClick={scrollAbajo}>
        Bajar scroll
      </IonButton>

      {/* Calendario */}
      <IonDatetime></IonDatetime>

      {/* Texto ion */}
      <IonText color="warning">
        {/* Icono de advertencia */}
        <IonIcon icon={warning}></IonIcon>
      </IonText>

      {/* Texto de ejemplo */}
      <IonText color="dark">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed
          tellus nec mauris auctor dignissim fermentum in risus. Sed nec
          convallis sapien, id tincidunt enim. Mauris ornare eleifend nunc id
          mattis. Fusce augue diam, sagittis nec posuere at, consectetur tempor
          lectus. Nulla at lectus eget mauris iaculis malesuada mollis sed
          neque. Curabitur et risus tristique, malesuada mauris finibus,
          elementum massa. Proin lacinia mauris quis ligula blandit ullamcorper.
          Donec ut posuere lorem. In volutpat magna vitae tellus posuere
          pulvinar. Nam varius ligula justo, nec placerat lacus pharetra ac.
          Aenean massa orci, tristique in nisl ut, aliquet consectetur libero.
          Etiam luctus placerat vulputate. Aliquam ipsum massa, porttitor at
          mollis ut, pretium sit amet mi. In neque mauris, placerat et neque
          vel, tempor interdum dolor. Suspendisse gravida malesuada tellus, vel
          dapibus nisl dignissim vel. Cras ut nulla sit amet erat malesuada
          euismod vel a nulla.
        </p>
        <p>
          Phasellus sit amet iaculis odio, eget feugiat erat. Etiam sit amet
          turpis sit amet massa viverra maximus. Aenean venenatis porttitor
          pharetra. Fusce vulputate urna purus, vel efficitur mauris auctor non.
          Etiam libero odio, sodales in velit a, faucibus venenatis erat. Ut
          convallis sit amet urna in ultrices. Cras neque est, vehicula sed
          lorem ac, placerat commodo elit. Praesent turpis metus, elementum eget
          iaculis ac, elementum in odio. Nunc et elit faucibus, condimentum
          mauris consequat, ornare dolor. Sed ac lectus a est blandit tempor.
          Etiam lobortis tristique maximus.
        </p>
        <p>
          Quisque tempus porttitor massa, vel condimentum risus finibus a.
          Aliquam viverra maximus odio, id ornare justo tristique ac. Mauris
          euismod arcu eget neque sagittis rutrum. Ut vehicula porta lacus nec
          lobortis. Vestibulum et elit ultrices, lacinia metus in, lobortis est.
          Vivamus nisi justo, venenatis sit amet arcu ac, congue faucibus justo.
          Duis volutpat posuere enim, vel sagittis elit dictum et. Sed et congue
          mauris. Nam venenatis venenatis risus, ac condimentum neque sagittis
          sed. In eget nulla ultricies urna sollicitudin posuere. Aenean
          sagittis congue mauris. Proin nec libero mi. In hac habitasse platea
          dictumst. Praesent nunc nulla, dictum id molestie sed, pretium vitae
          turpis.
        </p>
        <p>
          Pellentesque vitae dapibus lacus. Nullam suscipit ornare risus quis
          ullamcorper. Nullam feugiat, sapien et sodales fermentum, risus ligula
          semper risus, id efficitur ligula augue id diam. Suspendisse lobortis
          est sit amet quam facilisis, ut vestibulum nunc dignissim. Donec at
          vestibulum magna. Maecenas maximus pretium metus. Phasellus congue
          sapien vel odio imperdiet, nec mollis odio euismod. Sed vel eros ut
          sapien accumsan condimentum vehicula vitae lectus. Donec sed efficitur
          lorem. Aenean tristique mi libero, eleifend tincidunt libero finibus
          at. Mauris condimentum fermentum rutrum.
        </p>
        <p>
          Nulla tristique ultricies suscipit. Donec non ornare elit. Vivamus id
          pretium mauris, nec sagittis leo. Fusce mattis eget est id
          sollicitudin. Suspendisse dictum sem magna, in imperdiet metus
          suscipit et. Suspendisse enim enim, venenatis et orci eu, suscipit
          congue lacus. Praesent vel ligula non eros tempor interdum. Proin
          justo orci, ultricies vitae diam sed, semper consectetur ligula.
          Aenean finibus ante velit, nec efficitur libero cursus cursus. Duis mi
          nunc, imperdiet sed condimentum vel, porttitor ut lacus. Quisque dui
          ipsum, vehicula sed vestibulum id, semper vel libero. Suspendisse
          tincidunt mollis condimentum. Nulla facilisi. Etiam neque nisl,
          egestas nec iaculis sed, tristique faucibus sem. Sed mollis dui quis
          ligula cursus rutrum.
        </p>
      </IonText>
      {/* Boton de subir */}
      <IonButton expand="block" onClick={scrollArriba}>
        Subir scroll
      </IonButton>

      {/* Modal */}
      <IonModal id="example-modal" ref={modal} trigger="open-modal">
        <IonContent>
          <IonToolbar>
            <IonTitle>Modal</IonTitle>
            <IonButtons slot="end">
              <IonButton color="dark" onClick={() => dismiss()}>
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonList>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://i.pravatar.cc/300?u=b" />
              </IonAvatar>
              <IonLabel>
                <h2>Connor Smith</h2>
                <p>Sales Rep</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://i.pravatar.cc/300?u=a" />
              </IonAvatar>
              <IonLabel>
                <h2>Daniel Smith</h2>
                <p>Product Designer</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://i.pravatar.cc/300?u=d" />
              </IonAvatar>
              <IonLabel>
                <h2>Greg Smith</h2>
                <p>Director of Operations</p>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <IonImg src="https://i.pravatar.cc/300?u=e" />
              </IonAvatar>
              <IonLabel>
                <h2>Zoey Smith</h2>
                <p>CEO</p>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonModal>
    </IonContent>
  );
};

export default PaginaPrueba;
