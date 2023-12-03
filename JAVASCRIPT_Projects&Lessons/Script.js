// Get a reference to the button element by its id
const changeTextButton = document.getElementById('changeTextButton');

// Add a click event listener to the button
changeTextButton.addEventListener('click', function () {
    // Change the text of the <h1> element
    const header = document.querySelector('h1');
    header.textContent = 'Text changed by clicking the button!';
});
