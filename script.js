//Texto

const textInput = document.getElementById('text-input');
const contador = document.getElementById('char-counter');
const maxLength = 50;

textInput.addEventListener('input', function() {
    const currentLength = this.value.length;
    const remaining = maxLength - currentLength;

    contador.textContent = `${currentLength}/${maxLength} caracteres`;
});

//Cores