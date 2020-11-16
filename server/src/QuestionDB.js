module.exports = (mongoose) => {
    const QuestionSchema = new mongoose.Schema({
      name: String,
      answerName: String,
      answer: [{text:String}]  
    });
const questionModel = mongoose.model("questionmarken", QuestionSchema);

const questionPost = require("./model");

async function getQuestions(){
    try {
        return await questionModel.find();
      } catch (error) {
        console.error("getQuestion:", error.message);
        return {};
      }
}
async function getQuestion(id) {
  try {
    return await questionModel.findById(id);
  } catch (error) {
    console.error("getQuestion:", error.message);
    return {};
  }
}
async function newCreateQuestion(name){
  let question = new questionModel({
    name: name,
    answer:[]
  });
  return question.save()
}

async function newCreateAnswer(answer, getquestionId){
  const question = await getQuestion(getquestionId);
  let createAnswer={
    text: answer
  };
  question.answer.push(createAnswer);
  return question.save()
};

async function getAnswer(id){
  try {
      return await questionModel.findById(id);
    } catch (error) {
      console.error("getanswer:", error.message);
      return {};
    }
}


  async function createKitten(text) {
    let kitten = new kittenModel({name: text});
    return kitten.save();
  }

  async function addComment(req,res) {
    const body = req.body


    questionPost.findOne({ _id: req.params.id }, (error, question) => {
      
      question.name = body.name
        question.question = body.question
        question
        question
            .save()
            .then(() => {
                return res.status(200).json({
                    //success: true,
                    id: question._id,
                 
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                
                })
            })
    })
};
//old code
  async function createQuestion (req,res) {
    const body = req.body

    
    if (!body) {
        return res.status(400).json({
            success: false,
            //error: 'no question',
        })
    }

    const question = new questionPost(body)
    if (!question) {
        return res.status(400).json({ success: false, error: err })
    }
   
    question
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: question._id,
                message: 'question created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'question not not created!',
            })
        })
}






    
    return{
    getAnswer,
    getQuestion,
    getQuestions,
    addComment,
    newCreateAnswer,
    newCreateQuestion,
    
    createQuestion
    
}    
}
