const express = require('express');
const port = 8000;
const path = require('path');
const db = require('./config/mongoose');
const Detail = require('./models/detail');
const app = express();
app.set('view engine' , 'ejs');
app.set('views', path.join(__dirname , 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


app.get('/' , function(request,response){
    Detail.find({}, function(err , details){
        if(err){
            console.log("Error in fetching detail from Database");
            return ;
        }
        return response.render('home', {
            expenses_details : details,
        })
    })
});

app.post('/create-detail' , function(request,response){
    let d=new Date();
    let date_=d.getDate();
    let month_=Number(d.getMonth()) +1 ;
    let year_=d.getFullYear();
    Detail.create({
        desc : request.body.desc,
        date : date_+ "-"+month_+"-"+year_,
        amount : request.body.amount,
    },function(err){
        if(err){
            console.log("Error in creating a detail !");
            return ; 
        }
        return response.redirect('back');
    })
});
app.get('/delete-detail/' , function(request,response){
    let id= request.query.id;
    Detail.findByIdAndDelete(id , function(err){
        if(err){
            console.log("Error in deleting a detail");
            return ; 
        }
        return response.redirect('back');
    });
});

app.listen(port , function(err){
    if(err){
        console.log('Error in starting the server!');
        return ;
    }
    console.log("Server is running on port : " ,port);
});