const headersAPI = {
  'x-api-key':
    'live_1iHhXivqsGGVrJwI9JNoFKO8swLkhG5BDvN0F7OKreIl96Mr8IN5hW1GLC3wrwKQ',
  'content-type': 'application/json',
};

const URL = 'https://api.thecatapi.com/v1';

function processJSON(response) {
  return response.json();
}

function fetchBreeds() {
  return fetch(`${URL}/breeds`, { headers: headersAPI }).then(processJSON);
}

function fetchCatPicture(breedId) {
  return fetch(`${URL}/images/search?breed_ids=${breedId}`, {
    headers: headersAPI,
  }).then(processJSON);
}

function fetchCatByBreed(breedId) {
  return fetch(`${URL}/breeds/${breedId}`, {
    headers: headersAPI,
  }).then(processJSON);
}

export default { fetchBreeds, fetchCatPicture, fetchCatByBreed };
