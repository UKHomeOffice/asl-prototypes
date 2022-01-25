attachKeyupListenerToInputElements();

function attachKeyupListenerToInputElements(){
    var inputs = document.querySelectorAll('textarea');
    for (var i = 0; i < inputs.length; i += 1) {
        inputs[i].addEventListener("keyup", keyupHandler);
    }
    function keyupHandler() {
        console.log('Key up');

    }
};
