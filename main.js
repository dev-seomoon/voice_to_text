const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    e.target.innerText = "Listening...";
    e.target.classList.add('listening');
})

const Recognition = new webkitSpeechRecognition();
Recognition.lang = 'ko-KR';