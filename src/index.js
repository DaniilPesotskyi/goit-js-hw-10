import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {fetchCountries} from './js/fetchCountries';
import {renderCountryListMarkup, renderCountryCardMarkup} from './js/renderMarkup'
import {refs} from './js/searchRefs';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY))

function onInput(e) {
    const searchQuery = e.target.value.trim()
    clearCountryMarkup()
    if(searchQuery === '') {
        clearCountryMarkup()
        return
    }

    fetchCountries(searchQuery).then(data => {
        if(data.length > 10) {
            Notify.info('Too many matches found. Please enter a more specific name.');
        }
        
        if(data.length >= 2 && data.length <= 10) {
            refs.countryList.insertAdjacentHTML('beforeend', renderCountryListMarkup(data))
        }

        if(data.length === 1) {
            refs.countryList.insertAdjacentHTML('beforeend', renderCountryCardMarkup(data))
        }

    }).catch(() => {
        Notify.failure('Oops, there is no country with that name');
    })
}

function clearCountryMarkup() {
    refs.countryInfo.innerHTML = ''
    refs.countryList.innerHTML = ''
}
