const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();

const displayCountries = (countries) => {
  console.log(countries);
  const countryDiv = document.getElementById("countries");
  countries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");

    div.innerHTML = `
        <h3>${country.name.official}</h3>
        <p>${country.capital}</p>
        <button onclick = "loadCountryDetail('${country.name.official}')">Details</button>

    `;
    // const h3 = document.createElement("h3");
    // h3.innerText = country.name.official;
    // div.appendChild(h3);
    // const p = document.createElement("p");
    // p.innerText = country.capital;
    // div.appendChild(p);
    countryDiv.appendChild(div);
  });
};

const loadCountryDetail = (name) => {
  console.log(name);
};
