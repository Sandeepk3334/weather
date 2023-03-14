const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// const homeFile = fs.readFileSync('index.html','utf-8');

app.get('/',function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=new%20delhi&appid=8427fdfb7d983800e0939ba1931bbd90&units=metric";

    https.get(url,function(response){
        response.on('data',function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const city = weatherData.name;
            const country_code = weatherData.sys.country;
            const feels_like = weatherData.main.feels_like;
            const pressure = weatherData.main.pressure;
            const wind = weatherData.wind.speed;
            const humidity = weatherData.main.humidity;
            const icon = weatherData.weather[0].icon;
            const iconURL = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";
        res.render("display", { temperature: temp , description : desc , cityName:city , Country:country_code , feelsLike:feels_like , Pressure:pressure, windSpeed:wind , Humidity:humidity , icon_pic:iconURL });
    })
    
    
})
})



app.listen(3000,function(){
    console.log('server is running at port 3000')
})



// app.post("/",function(req,res){

//     const city = req.body.cityName;

//     const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=8427fdfb7d983800e0939ba1931bbd90&units=metric";

//     https.get(url,function(response){
//         console.log(response.statusCode);
//         response.on('data',function(data){
//             const weatherData = JSON.parse(data);
//             const temp = weatherData.main.temp;
//             const desc = weatherData.weather[0].description;
//             const icon = weatherData.weather[0].icon;
//             const imageUrl = "http://openweathermap.org/img/wn/" +icon + "@2x.png";

//             res.write("<h1>The Tempertaure in "+city+" is " + temp + " degree celcius.</h1>");
//             res.write("<h2>The weather is currently " + desc + "</h2>");
//             res.write("<img src="+imageUrl+">");
//             res.send();
//         })
//     })
// })