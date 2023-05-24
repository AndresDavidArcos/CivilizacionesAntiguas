import React, { useState, useEffect } from 'react';
import { useUserData } from '../contexts/user';

const RetroDialog = () => {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const {user} = useUserData();
  useEffect(()=>{
    if(user){
      let username = user.data.nombre;  
      setText(`Biienvenido ${username} a una aventura por el imperio Azteca! Salta hacia uno de los cuadros para adentrarte en alguno de los niveles.`)   
    }
 }, [user])
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      setIsVisible(false)
    }
  });
  useEffect(() => {
    let currentIndex = 0;
    let intervalId;
      intervalId = setInterval(() => {

            setDisplayText(prevText => {
                return prevText + text[currentIndex]});

               currentIndex++;
        


        if (currentIndex === text.length-1) {
          clearInterval(intervalId);
        }
      }, 100);
    

    return () => clearInterval(intervalId);
  }, [text]);

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
