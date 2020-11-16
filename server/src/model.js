const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const QuestionSchema = new Schema({
    name: String,
    question : String,
    answerName: String,
    Answer: []  
  });


// Model
const QuestionPost = mongoose.model('BlogPosdt', QuestionSchema);

module.exports =  QuestionPost;
