// Select the 'next' and 'prev' buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Event listener for the 'next' button
next.addEventListener('click', function() {
    // Select all items in the slide
    let items = document.querySelectorAll('.item');
    // Move the first item to the end of the slide
    document.querySelector('.slide').appendChild(items[0]);
});

// Event listener for the 'prev' button
prev.addEventListener('click', function() {
    // Select all items in the slide
    let items = document.querySelectorAll('.item');
    // Move the last item to the beginning of the slide
    document.querySelector('.slide').prepend(items[items.length - 1]);
});