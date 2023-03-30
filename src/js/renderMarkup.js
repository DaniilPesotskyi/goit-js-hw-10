function renderCountryListMarkup(data) {
    return data.map(({name, flags}) => `
    <li class="country-list-item">
        <img class="country-list-img" src='${flags.svg}' alt='${flags.alt}'>${name.official}
    </li>
    `).join('')
}

function renderCountryCardMarkup(data) {
    return data.map(({name, capital, population, languages, flags}) => `
    <div class="country-card-main">
        <img class="country-card-img" src='${flags.svg}' alt='${flags.alt}'>
        <h1 class="country-card-name">${name.official}</h1>
    </div>
    <ul class="country-data-list">
        <li class="country-data-item"><span class="country-data-param">Capital:</span><span class="country-data-value">${capital}</span></li>
        <li class="country-data-item"><span class="country-data-param">Population:</span><span class="country-data-value">${population}</span></li>
        <li class="country-data-item"><span class="country-data-param">Languages:</span><span class="country-data-value">${Object.values(languages)}</span></li>
    </ul>`
    )
}

export {renderCountryListMarkup, renderCountryCardMarkup}