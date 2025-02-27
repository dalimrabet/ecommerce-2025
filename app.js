const express= require('express')
const mongoose= require('mongoose')
const dotenv=require('dotenv')
const cors=require("cors")
dotenv.config()
const app=express()
app.use(express.json())
const chatbotRouter=require("./routes/chatbot.route")
const CategorieRouter=require("./routes/categorie.route")
const ScategorieRouter=require("./routes/scategorie.route")
const ArticleRouter=require("./routes/article.route")

const article = require('./models/article')

// connexion a la base de donné
mongoose.connect(process.env.DATABASECLOUD)
.then(()=>{console.log("connexion a la base de donné reussie")})
.catch((error)=>{console.log("impossible de connecté a la base de donné",error)
    process.exit()
})
app.get('/',(req,res)=>{
    res.send("bienvenue dans notre site")
})
app.use("/api/chat",chatbotRouter)
app.use("/api/categories",CategorieRouter)
app.use("/api/scategories",ScategorieRouter)
app.use("/api/article",ArticleRouter)
app.listen(process.env.PORT,()=>{
    console.log(`serveur is listen sur port ${process.env.PORT}`)
})
module.exports= app;
