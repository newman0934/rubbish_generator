//require express
const express = require("express")
const app = express()
const port = 3000

//require express-handlebars
const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}))
app.set("view engine", "handlebars")

//require handlebars
const handlebars = require("handlebars")

//註冊一個handlebars的helper function
handlebars.registerHelper("ifEquals", function (job1, job2, options) {
    console.log(job1,job2)
    return job1 == job2 ? options.fn(this) : options.inverse(this);
});

//require body-parser
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended: true
}))


///require rubbish_generator.js
const generatedRubbish = require("./rubbish_generator.js")

app.use(express.static("public"))

const jobs = 
{
  "results":[
    {
      "name": "engineer",
      "img": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5668/angry-developer.jpg"
    },
    {
      "name": "designer",
      "img": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5667/angry-designer.jpg"
    },
    {
      "name": "entrepreneur",
      "img": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5669/angry-founder.jpg"
    }
  ]
}



//產生畫面
app.get("/", (req, res) => {


    res.render("index",{jobs:jobs.results})
})

//產生點擊產生幹話後的畫面
app.post("/", (req, res) => {
    const options = req.body

    const rubbish = generatedRubbish(options)
    res.render("index", {
        rubbish: rubbish,
        options: options,
        jobs:jobs.results
    })
})

//監聽並啟動伺服器
app.listen(port, () => {
    console.log(`listening rubbish_generator`)
})