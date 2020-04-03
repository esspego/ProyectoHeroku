/* 
function changeLocation(){
  let ciudad = document.getElementById('provincia').value
  getWhether(ciudad)
}
function printHTML(response){
  document.querySelector('.heading').innerHTML= response.weather[0].description.toUpperCase()
  document.querySelector('.location').innerHTML= response.name 
  document.querySelector('.temp-value').innerHTML= Math.round(response.main.temp)
  document.querySelector('.humidity').innerHTML= response.main.humidity
  document.querySelector('.wind-speed').innerHTML= response.wind.speed
}

async function getWhether(ciudad){

  try{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=sp&appid=3408896f1d019f9845f9f0726d4dab41`
    let request = await fetch (url);
    let response = await request.json();
    console.log(response);
    printHTML(response)
     
    return response;
  }
  catch (error){
    console.log(`ERROR: ${error.stack}`);
  }
}
getWhether("Málaga, es")  
document.getElementById('provincia').addEventListener('change', changeLocation) 
  */

document.getElementById('provincia').addEventListener('change', getWhether) 

async function getWhether(ciudad){

  try{
    let ciudad = document.getElementById('provincia').value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=sp&appid=3408896f1d019f9845f9f0726d4dab41`
    let request = await fetch (url);
    let response = await request.json();
    console.log(response);
    document.querySelector('.heading').innerHTML= response.weather[0].description.toUpperCase()
    document.querySelector('.location').innerHTML= response.name 
    document.querySelector('.temp-value').innerHTML= Math.round(response.main.temp)
    document.querySelector('.humidity').innerHTML= response.main.humidity
    document.querySelector('.wind-speed').innerHTML= response.wind.speed
      
      
    return response;
  }
  catch (error){
    console.log(`ERROR: ${error.stack}`);
  }
}
getWhether()  
 
