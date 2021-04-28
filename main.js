const button = document.querySelector('button');
button.addEventListener('click', () => alert("Clicked"));

const Recognition = SpeechRecognition();
const recognition = new Recognition();
recognition.lang = 'ko-KR';