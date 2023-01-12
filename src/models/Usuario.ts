//Usuario
interface Usuario {
  id: number;
  nombre: null | string;
  matricula: null | string;
  apellido_paterno: null | string;
  apellido_materno: null | string;
  email: null | string;
  ruta_img?: null | string;
  telefono?: null | string;
  isDocente: boolean;
  isConectado: boolean;
}

export default Usuario;
