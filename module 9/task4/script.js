const testTextField = document.querySelector('#testTextField');

testTextField.addEventListener('click', function(event) {
    res = prompt("Test", '');
    this.textContent = res;
    event.preventDefault();

})