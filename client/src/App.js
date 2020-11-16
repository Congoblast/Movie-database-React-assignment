import React, {useEffect, useState} from 'react';
import {Router} from '@reach/router';
import QuestionList from './pages/QuestionList';
import QuestionPage from './pages/QuestionPage';
import "./cssb/css/bootstrap.css";
import "./styles.css";
const API_URL = process.env.REACT_APP_API;
function App() {
  const [question, setData] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const url = `${API_URL}/questions`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, [question]); 

  function getQuestion(id){
    const con = question.find(qId => qId._id === id);
    return con;
  }

  async function addComment(text, getquestionId) {
    const newcomments ={
      text:text,
    }
    const url = `${API_URL}/questions/${getquestionId}/addanswers`;
    const response = await fetch(url, {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newcomments),
    });
    const data = await response.json()
    console.log(data)
            //window.location.reload();

  }
  return (
    <>
  <Router>
    <QuestionList path="/" questions={question}>{question._id}</QuestionList>
    <QuestionPage path="/questions/:id" addComment={addComment} getQuestion={getQuestion} ></QuestionPage>
    </Router>

    </>
  );
}

export default App;
