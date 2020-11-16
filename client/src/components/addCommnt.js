import React, { useState } from 'react';

function Addcomment(props) {
    const [comment, setComment] = useState();

    return (
        <>
        
        <div className="container">
        <div className="Row">          
        <div className="Col">
            <h1 className="text-center QuestionHeader">Add your answer: </h1>
            </div>
        </div>
        <div className="row">    
        <div className="text-center txtbox">

            <textarea style={{width:"470px", height:"170px"}} type="text" value={comment} onChange={(event) =>  setComment(event.target.value)} />
            <br />
            <button class="btn btn-primary"  onClick={() => props.addComment(comment, props.id)}>Add answer</button>
            </div>
        </div>
        </div>

        </>
    );
}

export default Addcomment;