const textarea=document.querySelector('.text')
const btn=document.querySelector('.mybtn')


let voices=[]
let voiceSelect=document.querySelector('select')

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices()
    speech.voice=voices[0];

    voices.forEach((voice,i)=>(voiceSelect.options[i]=new Option(voice.name,i)));
}
 
voiceSelect.addEventListener('change',()=>{
    speech.voice=voices[voiceSelect.value]
})


let speech= new SpeechSynthesisUtterance()

btn.addEventListener('click',()=>{
    speech.text=textarea.value
    window.speechSynthesis.speak(speech)
})