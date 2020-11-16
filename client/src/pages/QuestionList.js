import React, {} from 'react';
import { Link } from '@reach/router';
import AddQuestion from '../components/AddQuestion';

function QuestionList(props) {
  let questions = props.questions;

  let mapFunction = getid =>
    <Link to={`/questions/${getid._id}`} key={getid._id}>
      <li>{getid.name}</li>  
    </Link>;
    let questionList = questions.map(mapFunction);
    return (
      <div className="background-blue">
        <h1>Question Liist</h1>
        <li key={questions._id}>{questionList}</li>

              <AddQuestion path="/questions" addQuestion={props.addQuestion} ></AddQuestion> 
      </div>
    );
  }
  
  export default QuestionList;
  