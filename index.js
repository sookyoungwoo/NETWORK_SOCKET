//기본설정
const express = require("express")
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()
/*
//정적 파일 불러오기
app.use(express.static(__dirname + "/public"));

//라우터 정의
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

//서버 실행
app.listen(PORT, () => {
    console.log('Listen : ${PORT}');
});*/

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/data', (req, res) => {
    var context = [
        {'a' : 'Hello', 'b':'World'},
        {'a' : 'javascript', 'b':'is...'},
        {'a' : 'web', 'b':'is...'}
    ]
    res.render('data.ejs', {'data' : context }, (err, html) =>{
        if(err){
            console.log(err)
        }
        res.end(html)
    })
})

app.get('/contact', (req,res) => {
    res.render('contact.ejs',
    {
        'name':'juliahn', 'mail':'teacher006@bssm.hs.kr'
    },
    (err, html)=>{
        if(err){
            console.log(err)
        }
        res.end(html)
    })
})

app.listen( 3000, () => {
    console.log('listening on 3000')
})