import React, { useState, useEffect } from 'react';
import { useUserData } from '../contexts/user';

const RetroDialog = () => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const { user } = useUserData();

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      let username = user.data.nombre;
      let fullText = `¡Bienvenido ${username} a una aventura por el imperio Azteca! Puedes moverte usando las teclas W (adelante), A (izquierda), S (atras), D (derecha) ESPACIO (saltar).
      Salta hacia uno de los cuadros para adentrarte en alguno de los niveles.\n
      Pulsa enter para cerrarme y desliza la rueda del raton para abrir los ajustes de sonido.
      `;
      setDisplayText(fullText);
    }else{
      let username = "invitado";
      let fullText = `¡Bienvenido ${username} a una aventura por el imperio Azteca! Puedes moverte usando las teclas W (adelante), A (izquierda), S (atras), D (derecha) ESPACIO (saltar).
      Salta hacia uno de los cuadros para adentrarte en alguno de los niveles.
      Pulsa enter para cerrarme y desliza la rueda del raton para abrir los ajustes de sonido.
      `;
      setDisplayText(fullText);
    }
  }, [user]);

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      setIsVisible(false);
    }
  });

  if (!isVisible) {
    return null;
  }

  return (
    <div className="retro-dialog">
      <div className="dialog-box">{displayText}</div>
    </div>
  );
};

export default RetroDialog;
