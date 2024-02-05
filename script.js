var request =  new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json ")             
request.send();
request.onload = function(){
var res = JSON.parse(request.response);
console.log(res);

//a) countries form asia continent/region
var result_asia = res.filter((ele)=>ele.region == "Asia");
console.log(result_asia)
var country_names = res.map((ele)=>ele.name);
console.log(country_names)

//b) countries with population less than 2 lacs
var country = res.filter((ele)=>ele.population < 200000)
console.log(country)
var capitals = country.map((ele)=>ele.capital);
console.log(capitals)

//c)name, capital, flag using foreach
res.forEach((country) => {
    if(country.name && country.capital && country.flags) {
        console.log("Name:", country.name.common);
        console.log("Capital:", country.capital[0]);
        console.log("Flag:", country.flags.svg);
    }
});

//d) total population using reduce
var total = res.reduce((acc,country) => acc + (country.population || 0),0)
console.log(total)

//e) countries using us dollar as currency
//var usdollarcountries = res.filter((country) => country.currencies && country.currencies.USD)
//console.log(usdollarcountries)

var usdollarcountries = res.filter((country) => country.currencies && country.currencies.find(currencies => currencies.code === "USD"));
console.log(usdollarcountries);



}

