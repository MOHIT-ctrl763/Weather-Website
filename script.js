let input = document.querySelector("input")
let Search = document.querySelector(".Search")
let CityName = document.querySelector("#City")
let Temprature = document.querySelector(".temp")
let Humidity = document.querySelector("#humidity")
let Windspeed = document.querySelector("#wind")
let condition = document.querySelector(".condition")
let img = document.querySelector(".img")
let imgsrc =  "https:openweathermap.org/img/wn/10d@2x.png"
let apikey = "d1845658f92b31c64bd94f06f7188c9c"
let url = "https://api.openweathermap.org/data/2.5/weather?q="
async function data(url,cityName,apikey) {
    let data = await fetch(`${url}${cityName}&appid=${apikey}`)
    let data2 = await data.json()
    return data2
}
Search.addEventListener("click",()=>{
    data(url,input.value,apikey).then((data)=>{
        CityName.innerText = data.name
        Temprature.innerText = parseInt(data.main.temp-273.15) + "°C"
        Humidity.innerText = parseInt(data.main.humidity) + "%"
        Windspeed.innerText = Math.ceil(data.wind.speed) + "km/h"
        condition.innerText = data.weather[0].description 
        let icon = data.weather[0].icon
        img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

        


    })
    input.value = ""
})
input.addEventListener("keypress" ,(e)=>{
  if(e.key === "Enter"){
     Search.click()
  }
})
