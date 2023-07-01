import React, { useEffect } from 'react';

const Questionnaires = () => {
    const baseUrl = "https://civilizaciones-antiguas.vercel.app/api/";
    //   const baseUrl = "http://localhost:4000/api/";

  useEffect(() => {
    const fetchQuestionnaires = async () => {
      try {
        console.log("Preparando data")
        const response = await fetch(baseUrl+'questionaire/getAll'); 
        console.log("Obteniendo data")

        const data = await response.json();
        console.log("Data: ", data);
      }catch(error){
        console.error('Error:', error);
      }
    };

    fetchQuestionnaires();
  }, []);

  return <div>Questionnaires</div>;
};

export default Questionnaires;
