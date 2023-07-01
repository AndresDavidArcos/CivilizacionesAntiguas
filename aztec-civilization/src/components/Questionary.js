import React, { useEffect } from 'react';

const Questionnaires = () => {
    const baseUrl = "https://civilizaciones-antiguas.vercel.app/api/";
    //   const baseUrl = "http://localhost:4000/api/";

  useEffect(() => {
    const fetchQuestionnaires = async () => {
      try {
        const response = await fetch(baseUrl+'questionaire/getAll'); 
        const data = await response.json();
        console.log(data);
      }catch(error){
        console.error('Error:', error);
      }
    };

    fetchQuestionnaires();
  }, []);

  return <div>Questionnaires</div>;
};

export default Questionnaires;
