import React, {} from 'react';
import Addcomment from "../components/addCommnt"

function QuestionPage(props) {
  const id = props.id;
  //find the id from the url with param or use this det med url giver
    const data = props.getQuestion(id);

    //now send it further
    //const questions = data.find(questions =>questions._id ===id);
    const listofAnswers = data.answer.map(comment =>
      <li key={comment._id}>{comment.text}</li>
    );

return(
    <>
    <h1 className="text-center questionHeader">Question: {data.name}</h1>
    <p>answers:<li>{listofAnswers}</li></p>
   <Addcomment path="/" addComment={props.addComment} id={data._id}></Addcomment>
    </>
);
}
export default QuestionPage;