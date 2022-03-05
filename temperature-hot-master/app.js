const API_KEY = `1e85ea722080a9279731254d0930b019
`;

const searchTemperature = () => {
  const city = document.getElementById ('city-name').value 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  // console.log(url);
  fetch(url)
  .then(res => res.json())
  .then( data => displayTemparature(data));

}

const innerText = (id,text) =>{
   document.getElementById(id).innerText = text;


}
const displayTemparature = temparature => {
  innerText ('city', temparature.name);
  innerText ('tempt' , temparature.main.temp);
  innerText ('condition', temparature.weather[0].main)
  console.log(temparature);

  // set wrather icon 
   const url = ` http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`
   const iconImage = document.getElementById('weather-icon')
   iconImage.setAttribute ('src', url);
} 