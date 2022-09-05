const API_KEY = `3d344962112d49a990c3129a4d782d1c`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const setInnerTextById = (id, Text) => {
    const temp = document.getElementById(id);
    temp.innerText = Text;
}
const displayTemperature = data => {
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = data.main.temp;
    setInnerTextById('temperature', data.main.temp)
    setInnerTextById('condition', data.weather[0].main)
    console.log(data.weather[0].main);
}


document.getElementById('btn-search').addEventListener('click', function() {
    const field = document.getElementById('search-field');
    const fieldValue = field.value;
    document.getElementById('city').innerText = fieldValue;
    loadTemperature(fieldValue)
})

loadTemperature('dhaka')