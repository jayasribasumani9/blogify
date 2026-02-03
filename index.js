const express=require('express');
const app= express();
const accquirer= require('./src/routes/postRoutes');

app.use('/api/v1/post',accquirer);

const PORT=3000;

app.listen(PORT,()=>{
    console.log("Server listening");
})