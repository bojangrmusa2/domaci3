import {useState} from "react";

function Weather () {
    let [city, setCity] = useState('');
    let [country, setCountry] = useState('');
    let [temperature, setTemperature] = useState('');
let [cities, setCities] = useState([]);

function addCity() {
    if (city === '' || country === '' || temperature === '') {
        alert('Morate uneti sve podatke')
        return;
    }
    let newCity = [{
        city: city,
        country: country,
        temperature: temperature
    }]
    setCities (currentCities =>[...currentCities, ...newCity]);
}

    return (
        <>
            <div className="text-center my-5">
                <h1>Weather App</h1>
            </div>
        <div>
            <input onInput={(e)=>{setCity(e.currentTarget.value)}} type="text" placeholder="Unesi ime grada" className="form-control"/>
            <input onInput={(e)=>{setCountry(e.currentTarget.value)}} type="text" placeholder="Unesi ime drzave" className="form-control my-3  "/>
            <input onInput={(e)=>{setTemperature(e.currentTarget.value)}} type="number" placeholder="Unesi temperaturu" className="form-control"/>
        </div>
        <div className="mt-3 ">
            <button onClick={addCity} className="btn btn-primary">Add</button>
            <button onClick={()=>setCities([])} className="btn btn-danger" >Delete</button>
        </div>

                {cities.map((city=>(
                    <div className="card mt-3">
                        <div className="card-body">
                            <h2>City: {city.city}</h2>
                            <h4>Country: {city.country}</h4>
                            <h3>Temperature: {city.temperature}</h3>
                        </div>
                    </div>

                )))}

        </>
    )
}

export default Weather;