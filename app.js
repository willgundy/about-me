// import functions

// grab DOM elements
const animalButton = document.getElementById('favorite-animal-btn');
const animal = document.getElementById('animalDiv');
const lieButton = document.getElementById('the-lie-btn');
const theLie = document.getElementById('lieText');
const lies = document.getElementsByClassName('lie');
const truths = document.getElementsByClassName('truth');
// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
animalButton.addEventListener('click',
    () => {
        animal.classList.toggle('hidden');
    });

lieButton.addEventListener('click',
    () => {
        theLie.classList.remove('hidden');
        lies.classList.add('lies-text');
        truths.classList.add("truth-text");
    });

