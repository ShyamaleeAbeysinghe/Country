
let tblCountries = document.getElementById("tblCountries");

let tableBody = `      <tr>
            <th><h1>Name</h1></th>
            
            <th><h1>Flag Image</h1></th>
        </tr>` ;



fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{

    data.forEach(element => {

        tableBody+=`<tr>
                        <td>
                        <h3>${element.name.common}</h3><br>
                        <h7>* Official Name : ${element.name.official}</h7><br>
                        <h7>* Population : ${element.population}</h7><br>
                        <h7>* Capital of country : ${element.capital}</h7><br>
                        <h7>* About Contry : ${element.flags.alt}</h7><br>
                        <a href="${element.maps.googleMaps}">Map</a><br>
                        </td>
                       
                        <td><img src="${element.flags.png}" alt=""></td>
                    </tr>`
        console.log(element.name.common);
    });

    tblCountries.innerHTML=tableBody;
})