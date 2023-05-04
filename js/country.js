const loadCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => displayCountry(data));
}
loadCountries();
const displayCountry = (countries) => {
  const countriesDiv = document.getElementById('countries');
  countries.forEach(country => {
    const div = document.createElement('div');
    div.innerHTML = 
      `<div
        <div class="card lg:card-body card-compact w-96 shadow-xl px-2 mx-auto my-5 rounded-lg bg-emerald-50 md:w-80 sm:w-48">
          <h2 class="card-title text-xl font-bold inline-block h-14">
            <span class=""> Country: </span>
            <span class="text-zinc-800"> ${country.name.common} </span>
          </h2>
          <figure>
            <img class="rounded-xl h-40 w-96" src=${country.flags.png} alt="Country Image" />
          </figure>
          <div class="card-actions justify-center mb-5">
            <a href="#my-modal-2" class="mt-5 btn btn-accent bg-sky-200 text-black" onclick="loadCountryByName('${country.name.common}')">Show Details</a>
            <div id="my-modal-2" class="modal" >
              <div class="modal-box">
                <div id="country-detail">
                </div>
              </div>
            </div>
          </div>
       </div>
      `;
  countriesDiv.appendChild(div);
  })
} 
const loadCountryByName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
  .then(response => response.json())
  .then(data => displayCountryDetail(data));
}
const displayCountryDetail = (country) => {
  const countryDiv = document.getElementById('country-detail');
  countryDiv.innerHTML = 
  `<div>
      <h2 class="text-2xl font-bold text-center text-dark mb-2">DETAIL INFORMATIONS <br> ${country[0].name.common}</h2>
      <figure>
      <img class="rounded-xl h-40 w-96" src=${country[0].flags.png} alt="Country Image" />
      </figure>
      <p class="py-4">Continents: ${country[0].continents}</p>           
      <p class="py-4">Region: ${country[0].region}</p>
      <p class="py-4">Capital: ${country[0].capital}</p>
      <p class="py-4">Population: ${country[0].population}</p>
      <div class="modal-action">
      <a href="#" class="btn">Close</a>
      </div>
   </div>
  `;
}