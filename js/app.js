// load data 
const loadData = () => {
    // url
    const url = `https://restcountries.com/v3.1/all`;
    // fetch
    fetch(url)
    .then(res => res.json())
    .then(data => setDataToLocalStorage(data))
}
loadData();
// set data to local storage
const setDataToLocalStorage = (data) => {
    // set data
    const setData = localStorage.setItem('countries', JSON.stringify(data));
    // call get data function
    getDataFromLocalStorage();
}
// get data from local storage
const getDataFromLocalStorage = () => {
    // get data
    const getData = localStorage.getItem('countries');
    // parse data
    const data = JSON.parse(getData);
    // call displayData function and share data
    displayData(data);
}
// display data
const displayData = (data) => {
    // container
    const container = document.getElementById('container');
    // foreach
    data?.forEach(country => {
        // create div
        const div = document.createElement('div');
        // innerHTML
        div.innerHTML = `
            <!-- card -->
            <div class="card">
                <!-- flags container -->
                <div class="flags-container">
                    <!-- flag -->
                    <img src="${country.flags.png}" class="flag" alt="">
                    <!-- arms flag -->
                    <img src="${country.coatOfArms.svg}" id="arms-flag" alt="">
                </div>    
                <div class="info">
                    <div>
                        <!-- country name -->
                        <h2>${country.name.common}</h2>
                        <!-- capital -->
                        <h3>Capital: ${country.capital}</h3>
                        <!-- independent -->
                        <h3>
                            <span>Independent: ${country.independent}</span>
                        </h3>
                    </div>
                    <!-- map -->
                    <div>
                        <!-- google map -->
                        <button class="btn" onclick="location.href='${country.maps.googleMaps}'">
                            <img src="icons/google-map.svg" alt="">
                            <span>Google Map</span>
                        </button>
                        <br>
                        <!-- street map -->
                        <button class="btn" onclick="location.href='${country.maps.openStreetMaps}'">
                            <img src="icons/street-map.svg" alt="">
                            <span>Street Map</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
        // container.appendChild
        container.appendChild(div);
    });
}