function myfunction() {
    let textInput = document.querySelector('input').value;
    let utterance = new SpeechSynthesisUtterance(textInput);

    window.speechSynthesis.speak(utterance);
}
// function myfunction() {
//     var msg = new SpeechSynthesisUtterance();
//     var voices = window.speechSynthesis.getVoices("input");
//     msg.voice = voices[10]; // Note: some voices don't support altering params
//     msg.voiceURI = 'native';
//     msg.volume = 1; // 0 to 1
//     msg.rate = 1; // 0.1 to 10
//     msg.pitch = 2; //0 to 2
//     msg.text = 'input';
//     msg.lang = 'en-US';

//     speechSynthesis.speak(msg);
// }