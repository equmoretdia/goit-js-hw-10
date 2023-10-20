import getRefs from './get-refs';
import API from './cat-api';
import markup from './markup';

const refs = getRefs();

function completeSelect() {
  markup.showLoader();
  API.fetchBreeds()
    .then(markup.createSelect)
    .catch(error => {
      console.log(error);
      markup.showError();
    })
    .finally(markup.showSelect);
}

function getCatByBreed() {
  markup.hideError();
  markup.showLoader();
  const breedId = refs.breedSelect.value;
  console.log(breedId);
  refs.catInfo.innerHTML = '';
  API.fetchCatPicture(breedId)
    .then(markup.createCatPicture)
    .catch(error => {
      console.log(error);
      markup.showError();
    })
    .finally(markup.hideLoader);
  API.fetchCatByBreed(breedId)
    .then(markup.createCatInfo)
    .catch(error => {
      console.log(error);
      markup.showError();
    })
    .finally(markup.hideLoader);
}

markup.preparePageStyles();
markup.hideError();
markup.hideSelect();

completeSelect();

refs.breedSelect.addEventListener('change', getCatByBreed);
