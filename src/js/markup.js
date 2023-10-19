import getRefs from './get-refs';

const refs = getRefs();

// page elements styles
function preparePageStyles() {
  refs.body.style.fontFamily = 'arial';
  refs.body.style.fontSize = '15px';
  refs.catInfo.style.paddingTop = '15px';
  refs.catInfo.style.display = 'flex';
  refs.catInfo.style.gap = '10px';
  refs.catInfo.style.alignItems = 'top';
  refs.catInfo.style.maxWidth = '900px';
  refs.loader.style.fontWeight = '700';
  refs.error.style.fontWeight = '700';
  refs.error.style.color = '#ff0000';
}

// show/hide loader/error functions & select element
function hideLoader() {
  refs.loader.setAttribute('hidden', true);
}

function hideError() {
  refs.error.setAttribute('hidden', true);
}

function hideSelect() {
  refs.breedSelect.setAttribute('hidden', true);
}

function showLoader() {
  refs.loader.removeAttribute('hidden');
}

function showError() {
  refs.error.removeAttribute('hidden');
}

function showSelect() {
  hideLoader();
  refs.breedSelect.removeAttribute('hidden');
}

// page elements render functions
function createSelect(cats) {
  refs.breedSelect.insertAdjacentHTML('afterbegin', createSelectPlaceholder);
  refs.breedSelect.insertAdjacentHTML('beforeend', createSelectOptions(cats));

  refs.breedSelect.selectedIndex = 0;
}

function createSelectPlaceholder() {
  return `<option disabled hidden>...select a breed...</option>`;
}

function createSelectOptions(cats) {
  return cats
    .map(cat => `<option value="${cat.id}">${cat.name}</option>`)
    .join('');
}

function createCatPicture(cat) {
  return refs.catInfo.insertAdjacentHTML(
    'afterbegin',
    `<img src="${cat[0].url}" alt="" style="max-width: 400px; max-height: 350px" />`
  );
}

function createCatInfo(cat) {
  return refs.catInfo.insertAdjacentHTML(
    'beforeend',
    `<div><h1 style="font-size:25px; font-weight: 700; margin: 0px">${cat.name}</h1><p>${cat.description}</p><p><span style="font-weight: 700">Temperament: </span>${cat.temperament}</p></div>`
  );
}

export default {
  preparePageStyles,
  hideLoader,
  hideError,
  hideSelect,
  showLoader,
  showError,
  showSelect,
  createSelect,
  createCatPicture,
  createCatInfo,
};
