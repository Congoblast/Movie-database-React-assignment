import React, {useState} from 'react';

const API_URL = process.env.REACT_APP_API;

const AddQuestion = () => {

    const [name, setName] = useState();

    async function addQuestion(name) {
        console.log(name);
        const newQuestion = {
          name: name, }   
        const url =`${API_URL}/questions` ;
        const response = await fetch(url, {
          method: 'POST', 
          headers: { 'Content-Type': 'application/json',},
          body: JSON.stringify(newQuestion),
        });
        const data = await response.json();
        console.log(data);
        //window.location.reload();

      }
    return (
        <>
        <div className="container">
        <div className="Row">          
        <div className="Col"> 

        <h1 className="text-center QuestionHeader">Add question</h1>
        
        </div>
        </div>
        <div className="row">    
        <div className="text-center txtbox">
            <p className="text-center">ask your question here</p>    
        <textarea style={{width:"470px", height:"170px"}} type="text" value={name} onChange={(event) => setName(event.target.value)}/>
        <button class="btn btn-primary" onClick={() => addQuestion(name)}>Add Comment</button>
        </div>
        </div>


            </div>
      </>
    );
  }
  
  export default AddQuestion;
  