// import functions

// grab DOM elements
const animalButton = document.getElementById('favorite-animal-btn');
const animal = document.getElementById('animalDiv');
const lieButton = document.getElementById('the-lie-btn');
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
        const lie = document.getElementById('lie');
        lie.classList.toggle('lie-text');
        const truth = document.querySelectorAll('.truth');
        truth[0].classList.toggle('truth-text');
        truth[1].classList.toggle('truth-text');
        if (lieButton.innerHTML === 'Show Me The Lie...') {
            lieButton.innerHTML = 'Hide the Lie!';
        } else {
            lieButton.innerHTML = 'Show Me The Lie...';
        }
        
    });

