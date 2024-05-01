import express, { Static } from 'express';
const app=express();

app.use(Static('public'))

app.listen(4000,()=>{
    console.log('server is started');
})