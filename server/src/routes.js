//const QuestionDB = require("./QuestionDB");

module.exports = (QuestionDB) => {
  const express = require("express");
  const router = express.Router();
  
  /**** Routes ****/
  router.get('/questions', async (req, res) => {
    const questions = await QuestionDB.getQuestions();
    res.json(questions);
  });

  router.get('/questions/:id', async (req, res) => {
    const question = await QuestionDB.getQuestion(req.params.id);
    res.json(question);
  });
  router.post("/questions", async (req, res) =>{
    const addname = req.body.name;
    const addquestion = req.params.id;
    const question = await QuestionDB.newCreateQuestion(addname,addquestion);
    res.json(question);
  });
  router.post("/questions/:id/addanswers", async (req,res) =>{
    const addanswer = req.body.text;
    const getquestionId = req.params.id;
    const question = await QuestionDB.newCreateAnswer(addanswer,getquestionId);
    res.json(question);
  });



  return router
}