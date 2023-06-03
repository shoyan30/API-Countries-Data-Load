const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(Response => Response.json())
    .then(data => displayCountries(data))

}
const displayCountries = countries =>{
    // console.log(countries);

    const CountriesHtml = countries.map(country => getCountryHtml(country))

    const container = document.getElementById('countries');

    container.innerHTML = CountriesHtml.join(' ');
    //console.log(CountriesHtml);
}
// original system
//const getCountryHtml = country =>{
    
    // return`
    // <div class = "country">
    //     <h2>${country.name.common}</h2>
    //     <img src="${country.flags.png}">
    // </div>
    // `
//distructuring option-1
    // const {name, flags} = country;
    // return`
    //     <div class = "country">
    //         <h2>${name.common}</h2>
    //         <img src="${flags.png}">
    //     </div>
    // `
//distructuring option-2
const getCountryHtml = ({name, flags, area, region}) =>{
    
    return`
        <div class = "country">
            <h1>${name.common}</h1>
            <P>Area: ${area}</>
            <P>Containent: ${region}</>
            <img src="${flags.png}">
        </div>
    `
}
loadCountries();