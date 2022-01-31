import { app } from "./controller/app";

app.get("/", (req, res)=>{
    res.send("Hello from Express")
})