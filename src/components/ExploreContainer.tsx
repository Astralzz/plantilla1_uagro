import "./ExploreContainer.css";
import React from "react";
import ReactDOM from "react-dom";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Ejemplo{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          Ejemplo de pagina
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
