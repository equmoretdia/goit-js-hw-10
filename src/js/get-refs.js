export default function getRefs() {
  return {
    body: document.querySelector('body'),
    breedSelect: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
  };
}
