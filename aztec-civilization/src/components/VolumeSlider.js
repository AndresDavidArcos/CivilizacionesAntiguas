import { useEffect, useRef, useState } from "react"
import soundOff from "../iconos/Sound off.png"
import soundOn from "../iconos/Sound on.png"
import aztecMusic from "../Music/menuAztecMusic.mp3"
import "../styles/volumeslider.css"
export default function VolumeSlider(){
    
    const [icon, setIcon] = useState("soundOn");
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(50);
    const [show, setShow] = useState(false)
    const handleWheel = (e) => {

        if (e.deltaY < 0) {
          // Deslizar hacia delante            
            setShow(true)
          
        } else {
          // Deslizar hacia atrás
            setShow(false)
          
        }
      };

    useEffect(() => {
        window.addEventListener("wheel", handleWheel);
    
        return () => {
          window.removeEventListener("wheel", handleWheel);
        };
      }, []);

    const handleVolume = (e) => {
        e.stopPropagation();
        let rangeVal = e.target.value 
        if(rangeVal === 0){
            setIcon("soundOff");
        }else{
            if(icon === "sounOff"){
                setIcon("soundOn")
            }
        }

        setVolume(rangeVal);
        audioRef.current.volume = rangeVal / 100;

    }

    const handleMute = (e) => {
        e.stopPropagation();
        if(icon === "soundOn"){
            setIcon("soundOff");
            audioRef.current.muted = true;
        }else{
            setIcon("soundOn")
            audioRef.current.muted = false;
        }
    }


    return (
        <div className={`wrapper ${show ? "" : "hidden"}`}>
          <img src={icon === "soundOn" ? soundOn : soundOff} id="icon" onClick={handleMute} />
          <input type="range" min="0" step="1" max="100" value={volume} onInput={handleVolume} />
          <span className="slide-value">{volume}</span>
          <audio src={aztecMusic} autoPlay loop ref={audioRef} />
        </div>
      );

    
}