const express= require('express');
const router= express.Router();
const path= require('path');
const fs= require('fs');


router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'../','views','login.html'));

});

router.post('/',(req, res) => {
    fs.readFile('messages.txt',(err,data)=>{
        if(err)
        { 
          console.log(err);
          data= "Anandy u have no friend";
        }
        res.send(`${data} <form action="/message" method="post" onsubmit="document.getElementById('uname').value=localStorage.getItem('uname')">
        <input type="hidden" id="uname" name="uname" ><br>
        Message:<input type="text" id="message" name="message"> 
        <button type="submit">Login</button> 
        </form>`) 
    })
     
})
router.get('/',(req, res) => {
    fs.readFile('messages.txt',(err,data)=>{
        if(err)
        { 
          console.log(err);
          data= "Anandy u have no friend";
        }
        res.send(`${data} <form action="/message" method="post" onsubmit="document.getElementById('uname').value=localStorage.getItem('uname')">
        <input type="hidden" id="uname" name="uname" ><br>
        Message:<input type="text" id="message" name="message"> 
        <button type="submit">Login</button> 
        </form>`)
    })
     
})

router.post('/message',(req, res) =>{
    //console.log(req.body);
    const uname= req.body.uname;
    const message= req.body.message;
    const str= `${uname}: ${message} `;

    fs.writeFile('messages.txt',str,{flag:'a'},(error)=>{
        if(error) 
          console.log(error);
        else
            res.redirect('/');
    })

    
})

router.use('/contact_us',(req, res)=>{
    res.sendFile(path.join(__dirname, '../','views','contactus.html'));
})

router.use('/success',(req, res)=>{
    res.sendFile(path.join(__dirname, '../','views','success.html'));
})



router.use('/',(req,res)=>{
    res.send(`404 THIS NOT FOUND`);
})

module.exports=router;