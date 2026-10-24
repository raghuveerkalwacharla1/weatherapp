const data=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
searchbtn.addEventListener("click",checkweather);
async function checkweather(){
     const cityName = data.value.trim();
    if (cityName === "") {
        alert("Please enter a city name");
        return;
    }
    let response=await fetch(`https://goweather.xyz/v2/weather/${cityName}`);
    let d1=await response.json();
    console.log("City entered:", cityName);
    console.log("Wind from API:", d1.wind);
    console.log("Full response:", d1);  
    document.querySelector('.city').textContent = cityName;
    document.querySelector('.temp').textContent = d1.temperature;
    document.querySelector('.wind').textContent = d1.wind;
    document.querySelector('.description').textContent = d1.description;
};