import { pets } from "../data/pets.js";
function getHash() {
  console.log(window.location);
  const hash = window.location.hash.replace("#", "");
  return Number(hash);
}
function ErrorBanner() {
  return `<hgroup>
    <h2>Pet Id Not Found</h2>
    <p>Look again,this pet id is not present in the db.Go to home.</p>
    </hgroup>`;
}
function vaccinesList(vaccine) {
  return `<li>${vaccine}</li>`;
}
function PetDetails(details) {
  return `<article>
    <hgroup>
       <h1>${details.breed}</h1>
       <p>${details.type}</p>
    </hgroup>
    <p>${details.details}</p>
    <footer>
    <h3>Vaccines</h3>
    <p>${details.vaccines.map(vaccinesList).join("")}</p>
    <a href="/">Back</a>
    </footer>
    </article>`;
}
export default function render() {
  const petId = getHash();

  function isPetWithId(pet) {
    return pet.id === petId;
  }
  const pet = pets.find(isPetWithId);
  if (!pet) {
    document.getElementById("app").innerHTML = ErrorBanner();
    return;
  }
  const petDetails = PetDetails(pet);
  document.getElementById("app").innerHTML = petDetails;
}
