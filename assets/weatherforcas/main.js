var input = document.querySelector('.input')
var iconWeather = document.querySelector('.icon-weather')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var temperature= document.querySelector('.temperature')
var weatherBox = document.querySelector('.weather-box')
var changeBackGround = document.querySelector('body')
var vision = document.querySelector('.vision span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
async function addvalue( changeApi) {
var link = `http://api.weatherapi.com/v1/current.json?key=4aaae8ec5e9940ce94b32213221609&q=${changeApi}&aqi=no`
let data = await fetch(link)

.then(function(res) {
    return res.json ()
})
 
 console.log(data)
 country.innerText = data.location.country
 city.innerText = data.location.name
 iconWeather.innerHTML = `<img src="${data.current.condition.icon}" alt="">`
 let temp = temperature.innerText = data.current.temp_c
 weatherBox.innerText = data.current.condition.text
wind.innerText = data.current.wind_kph + 'kph'
vision.innerText = data.current.vis_km + 'km'
sun.innerText = data.current.uv


 if(temp < 26){
   changeBackGround.setAttribute('class', 'warm')
 }
 if(temp < 20){
    changeBackGround.setAttribute('class', 'cold')
 }
 if(temp > 26){
    changeBackGround.setAttribute('class', 'hot')
 }
}
input.addEventListener('keypress', function(e){
    if(e.code === 'Enter') {
        let changeApi = input.value.trim()
        addvalue(changeApi)
        input.value = ''
    }
})
addvalue('ha noi')
