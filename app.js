// import functions

// grab DOM elements
const animalButton = document.getElementById('favorite-animal-btn');
const animal = document.getElementById('animalDiv');
const lieButton = document.getElementById('the-lie-btn');
const theLie = document.getElementById('lieText');
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
        theLie.classList.toggle('hidden');
        const lie = document.getElementById('lie');
        //const truths = document.getElementsByClassName("truth");
        lie.classList.toggle('lie-text');
        //truths.classList.toggle('truth-text');
        if (lieButton.innerHTML === 'Show Me The Lie...') {
            lieButton.innerHTML = 'Hide the Lie!';
        } else {
            lieButton.innerHTML = 'Show Me The Lie...';
        }
        
    });

