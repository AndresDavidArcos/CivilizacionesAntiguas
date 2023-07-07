import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/PaginaPrincipal.css";
import AvatarChip from "./AvatarChip";

{/** este componente muestra información general sobre la civilización Azteca: historia, datos curiosos y videos */}
const PaginaPrincipal = () => {

  const navigate = useNavigate();

  {/** redirigie al menú de selección */}
  const handleMenu = () => {
    navigate("/menuSelection");
  };

  {/** redirige al login */}
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div style={{ position: "fixed", top: "50px", left: "700px", width: "100", height:"100" }}>
        <AvatarChip />
      </div>
      <div>
        {/** estos botones son para indicar al usuario lo que ha visitado y pueda regresar
         * a cualquiera.
         */}
        <button className="breadCrumb" onClick={handleLogin}>
          Login
        </button>
        {/** aquí se carga el icono de ayuda y se le añade un escucha */}
      </div>
      <div className="App">
        <div className="container">
          <div className="left-section">
            <header>
              <h1>Bienvenido(a) a la Civilización Azteca</h1>
            </header>
            <img
              src={process.env.PUBLIC_URL + "/imagenes/introduccion.jpeg"}
              alt="Introducción"
              style={{
                width: "580px",
                height: "400px",
              }}
            />
            {/** una breve introducción del proyecto */}
            <p>
              Aquí encontrarás información importante de la cultura Azteca como
              su historia y datos curiosos. También tienes un espacio para
              sumergirte en su arte, agricultura, arquitectura y escuchar sus
              instrumentos de una forma poco común pero muy inmersiva, solo
              debes darle click a Ver modelos.
            </p>
            <p>
              Espero que disfrutes este viaje de saberes por la civilización
              Azteca
            </p>
          </div>

          <div className="left-section">
            <img
              src={process.env.PUBLIC_URL + "/imagenes/historia.jpeg"}
              alt="Historia Azteca"
              style={{
                width: "580px",
                height: "400px",
              }}
            />
          </div>

          <div className="right-section">
            <div className="section">
              <h2>Historia de la civilización Azteca</h2>
              <p>
                El imperio Azteca fue una de las unidades políticas más
                importantes de la América precolombina. Gracias a una alianza
                político-militar, los aztecas impusieron su civilización entre
                los siglos XIV y XVI. Dominaron el centro y sur del actual
                México, e incluso parte de Guatemala, llegando a abarcar un
                territorio de alrededor de 300.000 km². Su cultura y economía
                fueron muy prósperas: se desarrollaron avanzadas técnicas
                agrícolas, se fomentó la industria textil y minera, se
                estableció un floreciente comercio de alimentos, artesanía y
                esclavos y se levantaron singulares construcciones
                arquitectónicas como las pirámides escalonadas. Además de cobrar
                tributos a los pueblos sometidos, obtenían prisioneros para
                realizar sacrificios humanos y así recibir el favor de los
                dioses. El fin de los aztecas llegó con la conquista española.
                Varios pueblos indígenas se aliaron con Hernán Cortés, que tomó
                la ciudad de Tenochtitlán el 12 de agosto de 1521, derrocando a
                Cuauhtémoc, el último de los emperadores aztecas.
              </p>
            </div>

            <div className="section">
              <h2>Datos curiosos de la civilización</h2>
              <img
                src={process.env.PUBLIC_URL + "/imagenes/datos-curiosos.jpeg"}
                alt="Datos Curiosos"
                style={{
                  width: "580px",
                  height: "400px",
                }}
              />
              <h3> 1. Salud e higiene </h3>
              <p>
                Katherine Ashenburg, una profesora, periodista e investigadora
                que publicó un libro llamado “The Dirt on Clean”, donde asegura
                que los Azteca limpiaban sus calles todos los días. Construyeron
                baños públicos en distintas zonas y los transportaban los
                desechos humanos en canoas para usarlos como fertilizantes.
                Además de que llegaban a bañarse hasta 3 veces al día.
              </p>
              <h3> 2. Cultura y poder de los aztecas </h3>
              <p>
                Un imperio sin piedad, los aztecas usaban un sistema de tributo,
                cuando conquistaron todas las ciudades que se encontraban
                alrededor de Tenochtitlán, y demandaban personas para ser
                sacrificadas pública y cruelmente con la finalidad de honrar a
                los dioses. Era considerada una civilización que no mostraba
                piedad con sus enemigos.
              </p>
              <h3> 3. Religión de los Aztecas </h3>
              <p>
                {" "}
                Eran politeístas, adoraban a varios dioses que gobernaban
                ciertas actividades como la agricultura, la guerra, el sol y la
                luna. Su forma de honrarlos era a través de sacrificios humanos,
                pues consideraban que esta era la única forma de calmar su ira
                cuando se enojaban.
              </p>
            </div>
          </div>
        </div>
        <button className="sticky-button" onClick={handleMenu}>
          Ver los tópicos
        </button>
      </div>
    </>
  );
};

export default PaginaPrincipal;
