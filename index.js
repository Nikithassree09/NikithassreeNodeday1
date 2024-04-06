const fs=require('fs')

//fs.writeFileSync('05-04-2024-21-37',"05-04-2024,21:37")
//fs.writeFileSync('05-04-2024-21-41',"05-04-2024,21:41")
//fs.writeFileSync('05-04-2024-21-48',"05-04-2024,21:48")
//fs.writeFileSync('05-04-2024-21-49',"05-04-2024,21:49")
//fs.writeFileSync('05-04-2024-21-51',"05-04-2024,21:51")
//fs.writeFileSync('05-04-2024-21-54',"05-04-2024,21:54")
//fs.writeFileSync('05-04-2024-21-57',"05-04-2024,21:57")
//fs.writeFileSync('05-04-2024-22-00',"05-04-2024,22:00")
//fs.writeFileSync('05-04-2024-22-03',"05-04-2024,22:03")
//fs.writeFileSync('05-04-2024-22-05',"05-04-2024,22:05")

const express=require('express')
const app=express()
const PORT=8000;
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("05-04-2024,21:37,05-04-2024,21:41,05-04-2024,21:48,05-04-2024,21:49,05-04-2024,21:51,05-04-2024,21:54,05-04-2024,21:57,05-04-2024,22:00,05-04-2024,22:03,05-04-2024,22:05")
})

app.listen(PORT,()=>{
    console.log("Server Started",PORT)
})
app.post('/task',async(req,res)=>{
    //console.log(req.body)
    res.send(req.body)
})
