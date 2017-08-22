// counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    
    // move a request to the counter endpoint
    
    // capture the response ansd start it in a variable
   
    //render the variable in the correct span
    alert('I am inside button');
    counter = counter + 1;
    var span = document.getElementById('counter');
    span.innerHTML = counter.toString();
};
