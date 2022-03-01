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
        const truth1 = document.getElementById('truth1');
        const truth2 = document.getElementById('truth2');
        lie.classList.toggle('lie-text');
        console.log(truth1);
        console.log(truth2);
        truth1.classList.toggle('truth-text');
        truth2.classList.toggle('truth-text');
        if (lieButton.innerHTML === 'Show Me The Lie...') {
            lieButton.innerHTML = 'Hide the Lie!';
        } else {
            lieButton.innerHTML = 'Show Me The Lie...';
        }
        
    });

