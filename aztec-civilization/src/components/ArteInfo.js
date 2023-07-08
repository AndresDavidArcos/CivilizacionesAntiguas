import React from 'react';
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../styles/ArteInfo.css";

{/** este componente es el encargado de mostrar todo el enfoque
de instrumentos */}
const ArteInfo = () => {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const useHandleNavigateArte = () => {
    navigate('/arte');
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleInicio = () => {
    navigate("/pagina-principal");
  };

  const handleMenu = () => {
    navigate('/menuSelection');
  };

  const handleArteOInstrumentos = () => {
    navigate('/arte-instrumentos');
  };

  const handlePagina = () => {
    navigate('/pagina-principal');
  }

  return (
    <>
      <div>
        {/** se carga la imagen de instrumentos  */}
        <img
          src={process.env.PUBLIC_URL + "/imagenes/arte-intro.jpg"}
          alt="Imagen"
          style={{
            width: "580px",
            height: "750px",
            position: "fixed",
            top: "0px",
            right: "0px",
          }}
        />
      </div>
      <div>
        {/** aquí se carga el icono de ayuda y se le añade un escucha */}
        <img
          src={process.env.PUBLIC_URL + "/imagenes/ayuda.png"}
          alt="Imagen"
          style={{
            width: "30px",
            height: "30px",
            position: "fixed",
            top: "0px",
            right: "0px",
          }}
          onClick={handleOpen}
        />
        {/** aqui se muestran las intrucciones al dar click en ayuda */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="instrucciones">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Intrucciones
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Para visualizar el arte de la civilización azteca, de 
              clic en el boton "Click aquí para entrar a la exposición".
            </Typography>
            <Button
              variant="contained"
              size="small"
              className="boton"
              style={{
                position: "absolute",
                top: "137px",
                left: "50px",
                background: "red",
              }}
              onClick={() => setOpen(false)}
            >
              Cerrar
            </Button>
          </Box>
        </Modal>
      </div>

      {/** aquí se escribe toda la información del arte */}
      <div className="content_row" style={{background: "linear-gradient(135deg, #FF9B00, #1c3344"}}>
        <div className="content_column" id="column_right">
          <div className="title">¡Arte de la civilización azteca!</div>
          <div className="intro" data-testid="intro-element">
          Los aztecas, una antigua civilización mesoamericana, dejaron un legado artístico que nos
          transporta a través del tiempo y nos revela su profundo entendimiento del mundo y sus creencias.
          En esta sección, exploraremos los diversos aspectos del arte azteca, desde su arquitectura
          imponente hasta sus intrincadas esculturas, cerámicas, pinturas y textiles. Descubriremos cómo
          cada forma de expresión artística jugó un papel crucial en la vida de los aztecas, ya sea en el
          ámbito religioso, político o cotidiano.
          </div>
          <div className="body">
            <div>
              <p>
                <b>Objetos religiosos.</b> En las ceremonias y rituales aztecas, se utilizaban objetos 
                religiosos como altares, estelas, incensarios, vasijas ceremoniales y figurillas rituales. 
                Los altares eran estructuras sagradas utilizadas para realizar ofrendas y rituales, mientras 
                que las estelas eran piedras talladas con inscripciones y representaciones de deidades. Los 
                incensarios se empleaban para quemar copal durante los rituales y se consideraban ofrendas 
                sagradas. Las vasijas ceremoniales se usaban para contener líquidos sagrados y realizar 
                libaciones, y las figurillas rituales representaban deidades y seres sobrenaturales. Estos 
                objetos tenían un propósito ritual y simbólico, y eran fundamentales en la conexión entre los 
                seres humanos y los dioses en la cultura azteca.
              </p>
            </div>
            <div>
              <p>
                <b>Joyería.</b> Las joyas aztecas eran elaboradas con metales preciosos y piedras semipreciosas, 
                como oro, plata, turquesa y jade. Los aztecas dominaban la orfebrería y creaban collares, pulseras, 
                anillos y pectorales con diseños intrincados y símbolos relacionados con su religión y cosmovisión. 
                Estas joyas eran apreciadas tanto por su belleza estética como por su significado cultural y 
                espiritual en la sociedad azteca.
              </p>
            </div>
            <div>
              <p>
                <b>Textilería.</b> El arte del tejido y los textiles aztecas destacaba por su técnica de telar 
                de cintura, el uso de materiales como el algodón y la fibra de maguey, y los diseños simbólicos 
                que representaban la naturaleza y la religión. Estos textiles eran utilizados en prendas de 
                vestir, mantas y tocados ceremoniales, desempeñando un papel fundamental en la vida diaria y 
                las prácticas rituales de la cultura azteca.
              </p>
            </div>
            <div>
              <p>
                <b>Pintura.</b> Principalmente encontradas en códices y murales, el arte de la pintura en la 
                cultura azteca fue una forma de expresión altamente desarrollada y significativa. Los aztecas 
                utilizaron la pintura para plasmar su visión del mundo, su historia, sus creencias religiosas 
                y su conexión con la naturaleza.
              </p>
              <p>
                Los códices eran libros plegables que contaban historias y conocimientos importantes para los 
                aztecas. Por ejemplo el Códice Borgia y el Códice Magliabechiano.
              </p>
            </div>
            <div>
              <p>
                <b>Ceramica.</b> La cerámica azteca se caracterizó por su amplia variedad de formas y estilos. 
                Se crearon cántaros, platos, vasijas y figurillas, que combinaban propósitos utilitarios y 
                estéticos. La cerámica se decoraba con diseños vibrantes y detallados, representando deidades, 
                animales y motivos naturales. Estos diseños reflejaban la cosmovisión y la conexión de los 
                aztecas con la naturaleza. La cerámica azteca era apreciada tanto por su función práctica como 
                por su belleza artística, y es considerada un legado cultural importante en la actualidad.
              </p>
            </div>
            <div>
              <p>
                <b>Escultura.</b> La escultura azteca se caracterizó por su estilo realista y detalles 
                elaborados. Las esculturas representaban dioses y diosas aztecas, así como figuras de 
                gobernantes y guerreros. Destacan obras como la escultura de Coatlicue, Huitzilopochtli y 
                Coyolxauhqui. Estas esculturas reflejaban la importancia de los dioses en la religión azteca y 
                honraban a líderes y héroes. La atención al detalle y la habilidad técnica se aprecian en cada 
                escultura, realizadas en diversos materiales como piedra, jade y madera. Estas obras maestras 
                son testimonios de la rica tradición artística y espiritual de los aztecas.
              </p>
            </div>
            <div>
              <p>
                <b>Arquitectura.</b> La arquitectura azteca se destacó por sus templos piramidales y 
                palacios. Los templos eran construcciones monumentales en forma de pirámide escalonada, 
                dedicados a las deidades aztecas. Estaban construidos con piedra y adobe, con una plataforma 
                superpuesta y un santuario en la cima. Los palacios eran residencias y centros 
                administrativos de la élite gobernante, construidos con adobe, piedra y madera.
              </p>
            </div>
          </div>
        </div>
        {/** este es el botón que permite ingresar al modelo de arte */}
        <div className="content_column" id="column_right">
          <button className="boton" onClick={useHandleNavigateArte}>
            Click aquí para entrar a la exposición
          </button>
        </div>
      </div>
    </>
  );
};

export default ArteInfo;
