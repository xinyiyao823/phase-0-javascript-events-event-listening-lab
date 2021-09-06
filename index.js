function addingEventListener() { //define function to handle event for input
    const input = document.getElementById('input'); // first grab element by id "input" and save it in variable
    input.addEventListener('click', function() { // add event listener to listen for "click", and pass in callback fx
    alert('I was clicked!'); //then display "i was clicked!" 
}); 
}

addingEventListener(); //invoke the function again to activate event listener
