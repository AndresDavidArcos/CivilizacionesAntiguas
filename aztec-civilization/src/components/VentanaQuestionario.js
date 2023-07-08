import React, { useRef } from "react";
import { Center, Html } from "@react-three/drei"
import "../styles/Questionario.css";
import { useUserData } from '../contexts/user';
import { useMenuSelectionData } from "../contexts/menuSelection";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Questionario = () => {

    const { pointerLocked, setPointerLocked } = useMenuSelectionData()

    const baseUrl = "http://localhost:4000/api/";

    var preguntaActual = 0;
    var quiz = 0;
    var aciertos = 0;
    var fallos = 0;
    var preguntas = [];
    var data = [];

    var { user } = useUserData();

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ocultar = () => {
        document.querySelector('.modalQ').style.display = 'none';
        document.getElementById('volverCamara').style.display = 'flex';
        setPointerLocked(true)
    }

    const verificarCorrecta = async (respuesta) => {
        if (respuesta == preguntas[preguntaActual].respuestaCorrecta) {
            mostrarResultado(true);
            aciertos++;
        }
        else {
            mostrarResultado(false);
            fallos++;
        }

        console.log("Aciertos: " + aciertos + " Fallos: " + fallos)

        await delay(2000);
        console.log()

        preguntaActual++;
        if (preguntaActual == preguntas.length) {
            preguntaActual = 0;
            document.getElementById('preguntas').style.display = 'none';
            document.getElementById('resultado').style.display = 'none';
            mostrarFinal();
        } else {
            document.getElementById('preguntas').style.display = 'block';
            document.getElementById('resultado').style.display = 'none';
            mostrarPreguntas();
        }
    }

    const mostrarResultado = async (state) => {
        if (state == true) {
            document.getElementById('imagenResultado').src = process.env.PUBLIC_URL + "/imagenes/respuestaCorrecta.png";
            document.getElementById('textoResultado').innerText = '¡RESPUESTA CORRECTA!';
        } else {
            document.getElementById('imagenResultado').src = process.env.PUBLIC_URL + "/imagenes/respuestaIncorrecta.png";
            document.getElementById('textoResultado').innerText = 'RESPUESTA INCORRECTA';
        }

        document.getElementById('preguntas').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
    }

    const mostrarFinal = async () => {
        var porcentaje = ((aciertos / preguntas.length) * 100).toFixed(0);

        document.getElementById('aciertos').innerText = 'Has acertado ' + aciertos + ' de ' + preguntas.length + ' preguntas';
        // document.getElementById('fallos').innerText = 'Respuestas incorrectas: ' + fallos;

        if (porcentaje >= 70) {
            document.getElementById('imagenFinal').src = process.env.PUBLIC_URL + "/imagenes/aztecaGano.png";
            document.getElementById('porcentaje').innerText = '¡Aprobaste este questionario! obtuviste un ' + porcentaje + '%';
            if (Object.keys(user).length !== 0) {
                await fetch(`${baseUrl}questionaire/update/${user.data.nombre}/${data[quiz].nombre}/${true}`, {
                    method: 'PUT',
                })
            }
        } else {
            document.getElementById('imagenFinal').src = process.env.PUBLIC_URL + "/imagenes/aztecaPerdio.png";
            document.getElementById('porcentaje').innerText = 'Reprobaste este questionario, obtuviste un ' + porcentaje + '%';
            if (Object.keys(user).length !== 0) {
                await fetch(`${baseUrl}questionaire/update/${user.data.nombre}/${data[quiz].nombre}/${false}`, {
                    method: 'PUT',
                })
            }
        }

        document.getElementById('final').style.display = 'block';
    }

    const volverInicio = () => {
        document.getElementById('final').style.display = 'none';
        document.getElementById('topicos').style.display = 'block';
    }

    const mostrarPreguntas = () => {
        document.getElementById('pregunta').innerHTML = preguntas[preguntaActual].pregunta;
        document.getElementById('opcion1').innerHTML = preguntas[preguntaActual].respuestas[0];
        document.getElementById('opcion2').innerHTML = preguntas[preguntaActual].respuestas[1];
        document.getElementById('opcion3').innerHTML = preguntas[preguntaActual].respuestas[2];
        document.getElementById('opcion4').innerHTML = preguntas[preguntaActual].respuestas[3];
    }

    const seleccionarTema = async (tema) => {
        const response = await fetch(baseUrl + 'questionaire/getAll');
        data = await response.json();

        switch (tema) {
            case 'agricultura':
                console.log("Agricultura")
                preguntas = data.filter((d) => d.nombre === 'agricultura')[0]['preguntasRespuestas'];
                quiz = data.findIndex((d) => d.nombre === 'agricultura');
                document.getElementById('textoTemaEvaluar').innerText = 'Questionario de Agricultura';
                break;
            case 'instrumentos':
                console.log("Instrumentos")
                preguntas = data.filter((d) => d.nombre === 'Instrumentos')[0]['preguntasRespuestas'];
                quiz = data.findIndex((d) => d.nombre === 'Instrumentos');
                document.getElementById('textoTemaEvaluar').innerText = 'Questionario de Instrumentos';
                break;
            case 'arte':
                console.log("Arte")
                preguntas = data.filter((d) => d.nombre === 'Arte')[0]['preguntasRespuestas'];
                quiz = data.findIndex((d) => d.nombre === 'Arte');
                document.getElementById('textoTemaEvaluar').innerText = 'Questionario de Arte';
                break;
            case 'arquitectura':
                console.log("Arquitectura")
                preguntas = data.filter((d) => d.nombre === 'arquitectura')[0]['preguntasRespuestas'];
                quiz = data.findIndex((d) => d.nombre === 'Arquitectura');
                document.getElementById('textoTemaEvaluar').innerText = 'Questionario de Arquitectura';
                break;
            default:
                break;
        }

        const quizBuenos = Object.keys(user).length !== 0 ? user.data.evaluaciones[quiz].aciertos : 0;
        const quizMalos = Object.keys(user).length !== 0 ? user.data.evaluaciones[quiz].fallos : 0;

        document.getElementById('aciertosQuiz').innerText = '¡Has superado este quiz: \n' + quizBuenos + ' veces!';
        document.getElementById('fallosQuiz').innerText = 'Has fallado este quiz: \n' + quizMalos + ' veces';

        aciertos = 0;
        fallos = 0;

        console.log(data)

        mostrarPreguntas();

        document.getElementById('topicos').style.display = 'none';
        document.getElementById('puntajes').style.display = 'block';
        await delay(3000);
        document.getElementById('puntajes').style.display = 'none';
        document.getElementById('preguntas').style.display = 'block';
    }

    console.log(user)

    return (
        <div id='modal' className="modalQ" style={{zIndex: '4'}}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box className="instruccionesQ">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Intrucciones
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Aquí podrás evaluar tus conocimientos sobre lo visto en nuestra aplicación.
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Primero deberás seleccionar un tópico para evaluar. Te dirá cuantas veces has superado el quiz y cuantas veces lo has fallado. 0 en ambas en caso de estar como invitado.
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Después irás respondiendo las preguntas, si aciertas se te mostrará un mensaje de respuesta correcta, de lo contrario se te mostrará un mensaje de respuesta incorrecta.
                    </Typography>
                    <Button
                        variant="contained"
                        size="small"
                        className="boton"
                        style={{
                            position: "relative",
                            // top: "400px",
                            // left: "500px",
                            background: "red",
                        }}
                        onClick={() => setOpen(false)}
                    >
                        Cerrar
                    </Button>
                </Box>
            </Modal>
            <link href="https://fonts.cdnfonts.com/css/ambystoma-mexicanum" rel="stylesheet"></link>
            <div className="modal-contentQ">
                <div className='topDiv'>
                    <img
                        src={process.env.PUBLIC_URL + "/imagenes/ayuda.png"}
                        alt="Imagen"
                        style={{
                            width: "50px",
                            height: "50px",
                            background: 'transparent',
                            clipPath: 'circle(50%)',
                            borderRadius: '50%',
                            border: '3px solid black',
                            // border: '4px solid #000',
                            cursor: 'pointer',
                            // position: "fixed",
                            // top: "0px",
                            // right: "0px",
                        }}
                        onClick={handleOpen}

                    />
                    <h1 className="usuario">{Object.keys(user).length !== 0 ? user.data.nombre : 'Inicia sesión para guardar progreso'}</h1>

                    <button className="buttonCerrar" onClick={ocultar}>
                        <span className="close">&times;</span>
                    </button>
                </div>

                <div id='topicos' className='divContainer'>
                    <h1 className="textoEvaluar">Selecciona el tópico para evaluarte</h1>
                    <div className='temas'>
                        <button className='optionButtom' style={{ backgroundSize: '110%', backgroundImage: 'url(../../imagenes/agricultura.jpg)' }} onClick={() => { seleccionarTema('agricultura') }}>Agricultura </button>
                        <button className='optionButtom' style={{ backgroundImage: 'url(../../imagenes/instrumentos.jpg)' }} onClick={() => { seleccionarTema('instrumentos') }}>Instrumentos</button>
                        <button className='optionButtom' style={{ backgroundImage: 'url(../../imagenes/arte.jpg)' }} onClick={() => { seleccionarTema('arte') }}>Arte</button>
                        <button className='optionButtom' style={{ backgroundImage: 'url(../../imagenes/estadioTlachtli.png)' }} onClick={() => { seleccionarTema('arquitectura') }}>Arquitectura</button>
                    </div>
                </div>

                <div id='puntajes' className='puntajes'>
                    <div style={{ width: '100%' }}>
                        <h1 id='textoTemaEvaluar' className='textoTemaEvaluar'>Tema: </h1>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <p id='aciertosQuiz' className='aciertosQuiz'>Aciertos: </p>
                        <p id='fallosQuiz' className='fallosQuiz'>Fallos: </p>
                    </div>
                </div>

                <div id='preguntas' className='preguntas'>
                    <h1 className="pregunta" id='pregunta'>Pregunta</h1>
                    <div className='opciones'>
                        <button id='opcion1' className='opcionRespuesta' onClick={() => { verificarCorrecta(document.getElementById('opcion1').innerHTML) }}>Opción1</button>
                        <button id='opcion2' className='opcionRespuesta' onClick={() => { verificarCorrecta(document.getElementById('opcion2').innerHTML) }}>Opción2</button>
                        <button id='opcion3' className='opcionRespuesta' onClick={() => { verificarCorrecta(document.getElementById('opcion3').innerHTML) }}>Opción3</button>
                        <button id='opcion4' className='opcionRespuesta' onClick={() => { verificarCorrecta(document.getElementById('opcion4').innerHTML) }}>Opción4</button>
                    </div>
                </div>

                <div id="resultado" className='resultado'>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img id="imagenResultado" className="imagenResultado" src="" alt=""></img>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }} >
                        <h1 id="textoResultado">Resultado</h1>
                    </div>
                </div>

                <div id='final' className='final'>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '60%' }}>
                            <h1 style={{ height: '30%' }} id='aciertos'>Aciertos: </h1>
                            {/* <h1 id='fallos'>Fallos: </h1> */}

                            <h1 style={{ height: '30%' }} id='porcentaje'>Porcentaje: </h1>
                        </div>

                        <div style={{ width: '40%' }}>
                            <img id='imagenFinal' className='imagenFinal' src={process.env.PUBLIC_URL + "/imagenes/resultado.png"} alt=""></img>
                        </div>
                    </div>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <button id='volverInicio' className="buttonCerrarQ" onClick={volverInicio}>Volver al inicio de los quices</button>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Questionario;
