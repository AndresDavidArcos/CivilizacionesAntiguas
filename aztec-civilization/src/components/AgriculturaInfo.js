import React from 'react';
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../styles/AgriculturaInfo.css";

{/** este componente es el encargado de mostrar todo el enfoque
de instrumentos */}
const AgriculturaInfo = () => {
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();

  const useHandleNavigate = () => {
    navigate('/agricultura');
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

  const handleMenu = () => {
    navigate('/menuSelection');
  };

  const handlePagina = () => {
    navigate('/pagina-principal');
  }

  return (
    <>
      <div>
        {/** se carga la imagen de instrumentos  */}
        <img
          src={process.env.PUBLIC_URL + "/imagenes/agriculturaInfo.jpg"}
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
        {/** estos botones son para indicar al usuario lo que ha visitado y pueda regresar
         * a cualquiera.
         */}
        <button className='breadCrumb' onClick={handlePagina}>Página principal</button>
        <button className='breadCrumb' onClick={handleLogin}>Login</button>
        <button className='breadCrumb' onClick={handleMenu}>Menú de selección</button>
        <button className='breadCrumbDisabled' >La agricultura azteca</button>
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
      <div className="content_row" style={{ background: "linear-gradient(135deg, #FF9B00, #1c3344"}}>
        <div className="content_column" id="column_left">
          <div className="title">¡Agricultura de la civilización azteca!</div>
          <div className="intro" data-testid="intro-element">
            La agricultura fue una actividad fundamental para la civilización azteca. Su sociedad dependía en 
            gran medida de los productos agrícolas para su subsistencia, economía y desarrollo. Los aztecas 
            reconocían la importancia de la tierra y la naturaleza, considerándolas sagradas y estableciendo 
            una estrecha relación entre la agricultura y su cosmovisión.
          </div>
          <div className="body">
            <div>
              <p>
                <b>Sistema agrícola.</b> Los aztecas desarrollaron un sistema agrícola avanzado y eficiente 
                que incluía técnicas como el cultivo en chinampas, plataformas flotantes en lagos y ríos, 
                que les permitían cultivar alimentos durante todo el año. También empleaban terrazas 
                escalonadas en las laderas de las montañas para aprovechar al máximo el terreno. La 
                irrigación desempeñaba un papel crucial, ya que diseñaron canales, acueductos y sistemas 
                de drenaje para llevar agua a los campos, controlar los niveles de humedad y evitar 
                inundaciones. En conjunto, estas prácticas agrícolas contribuyeron a la eficiencia y 
                productividad de la agricultura azteca.
              </p>
            </div>
            <div>
              <p>
                <b>Cultivos principales.</b> El maíz fue el cultivo más importante y la base de la dieta 
                azteca. Lo consideraban sagrado y lo utilizaban en diversas preparaciones culinarias. El 
                frijol, la calabaza y el chile eran otros cultivos esenciales que complementaban la 
                alimentación. También cultivaban amaranto, tomate, aguacate, cacao y una variedad de hierbas 
                y especias.
              </p>
            </div>
            <div>
              <p>
                <b>Herramientas y tecnología.</b> Los aztecas empleaban herramientas agrícolas como la coa 
                y el metate para preparar la tierra y procesar los alimentos. Además, desarrollaron 
                tecnologías como sistemas de riego con canales y acueductos, terrazas y sistemas de 
                drenaje para maximizar la productividad y evitar inundaciones en sus campos de cultivo.
              </p>
            </div>
            <div>
              <p>
                <b>Calendario agrícola.</b> Los aztecas tenían un calendario agrícola basado en el 
                conocimiento astronómico y los ciclos estacionales. Observaban cuidadosamente los astros y 
                adaptaban sus actividades agrícolas según las señales celestiales. Tenían festividades y 
                rituales relacionados con la siembra y la cosecha, donde honraban a los dioses de la 
                agricultura y buscaban su bendición para asegurar buenas cosechas.
              </p>
            </div>
            <div>
              <p>
                <b>Comercio agrícola.</b> El comercio agrícola era esencial para los aztecas, ya que les 
                permitía obtener productos que no estaban disponibles en su región. Establecieron mercados 
                y rutas comerciales donde intercambiaban alimentos y otros productos agrícolas con 
                diferentes regiones y culturas. Sus productos agrícolas eran altamente valorados y 
                utilizados como moneda de intercambio.
              </p>
            </div>
            <div>
              <p>
                <b>Impacto ambiental.</b> A pesar de su alta densidad poblacional, los aztecas lograron 
                desarrollar prácticas agrícolas sostenibles. Adaptaron sus técnicas agrícolas a los 
                diferentes entornos, aprovechando al máximo los recursos naturales disponibles. Además, 
                conservaron la biodiversidad agrícola, manteniendo variedades locales de cultivos y 
                promoviendo la policultura.
              </p>
            </div>
            <div>
              <p>
                <b>Legado y herencia.</b> La agricultura azteca dejó un legado duradero en la cultura 
                mexicana. Muchos de los cultivos nativos como el maíz, el frijol y el chile se siguen 
                cultivando y forman parte integral de la cocina mexicana actual. Los conocimientos 
                agrícolas y las prácticas desarrolladas por los aztecas continúan siendo valorados y 
                estudiados en la actualidad, ya que ofrecen lecciones importantes sobre la agricultura 
                sostenible y la adaptación al medio ambiente.
              </p>
            </div>
          </div>
        </div>
        {/** este es el botón que permite ingresar al modelo de arte */}
        <div className="content_column" id="column_right">
          <button className="boton" onClick={useHandleNavigate}>
            Click aquí para entrar a la exposición
          </button>
        </div>
      </div>
    </>
  );
};

export default AgriculturaInfo;
