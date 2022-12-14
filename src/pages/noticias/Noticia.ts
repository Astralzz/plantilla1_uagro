//Interface de noticia
interface Noticia {
  id: number;
  titulo: string;
  informacion: string;
  fecha: string;
  ruta_img: string | null;
}

export default Noticia;
