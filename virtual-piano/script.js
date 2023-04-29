const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
const audio = document.querySelector('audio');


function playAudio() {
    audio.currentTime = 0;
    audio.play();
  }
function stopAudio() {
    
    audio.pause();
  }
const startSound = (event) => {
    event.target.classList.add('piano-key-active');
    if (event.target.classList.contains('piano-key') ) {
        const note = event.target.dataset.note;
        audio.src = `assets/audio/${note}.mp3`;  
        playAudio();
    }
  }
    const stoptSound = (event) => {
    event.target.classList.remove('piano-key-active');
    }


const startCorrespondOver = (event) => {
    event.target.classList.add('piano-key-active');
    if (event.target.classList.contains('piano-key') ) {
        const note = event.target.dataset.note;
        audio.src = `assets/audio/${note}.mp3`;  
        playAudio();
       
    }
    pianoKeys.forEach((elem) => {
        elem.addEventListener('mouseover', startSound)
        elem.addEventListener('mouseout', stoptSound)
    });
}
const stopCorrespondOver = () => {
  
    pianoKeys.forEach((elem) => {
        elem.classList.remove('piano-key-active');
        elem.removeEventListener('mouseover',startSound)
        elem.removeEventListener('mouseout', stoptSound)
    });
}

piano.addEventListener('mousedown', startCorrespondOver, false);
piano.addEventListener('mouseup', stopCorrespondOver);

const buttonSwitchLetters = document.querySelector('.btn-letters');
const buttonSwitchNones = document.querySelector('.btn-notes');

buttonSwitchLetters.addEventListener('click', function ()  {
    buttonSwitchNones.classList.remove('btn-active');
   buttonSwitchLetters.classList.add('btn-active');
   for ( var i = 0; i < pianoKeys.length; i++){
    pianoKeys[i].classList.add('piano-key-letter');
}
   
});
buttonSwitchNones.addEventListener('click', function ()  {
    buttonSwitchLetters.classList.remove('btn-active')
    buttonSwitchNones.classList.add('btn-active')
    for ( var i = 0; i < pianoKeys.length; i++){
        pianoKeys[i].classList.remove('piano-key-letter');
    }
});

document.querySelector('.fullscreen').addEventListener('click', toggleScreen);

function toggleScreen() {
    console.dir(document.fullscreenElement);
    if(!document.fullscreenElement){
        document.documentElement.requestFullscreen();
    }else{
        if(document.fullscreenEnabled){
            document.exitFullscreen();
        }
    }
}

const a = window.addEventListener( 'keyup', function (event){
   for(var j = 0; j < pianoKeys.length; j++){
    pianoKeys[j].classList.remove('piano-key-active');
   }
   
}
);

window.addEventListener( 'keydown', function (event){
    
    if (event.code === 'KeyD'){
        audio.src = `assets/audio/c.mp3`;
        playAudio()
        pianoKeys[0].classList.add('piano-key-active');
    }
   
});
window.addEventListener( 'keydown', function (event){
   if (event.code === 'KeyF'){
        audio.src = `assets/audio/d.mp3`;
       playAudio()
       pianoKeys[1].classList.add('piano-key-active');
   }
});
window.addEventListener( 'keydown', function (event){
   if (event.code === 'KeyG'){
        audio.src = `assets/audio/e.mp3`;
       playAudio()
       pianoKeys[2].classList.add('piano-key-active');
   }
});
window.addEventListener( 'keydown', function (event){
   if (event.code === 'KeyH'){
        audio.src = `assets/audio/f.mp3`;
       playAudio()
       pianoKeys[3].classList.add('piano-key-active');
   }
});
window.addEventListener( 'keydown', function (event){
   if (event.code === 'KeyJ'){
        audio.src = `assets/audio/g.mp3`;
       playAudio()
       pianoKeys[4].classList.add('piano-key-active');
   }
});
window.addEventListener( 'keydown', function (event){
   if (event.code === 'KeyK'){
        audio.src = `assets/audio/a.mp3`;
       playAudio()
       pianoKeys[5].classList.add('piano-key-active');
   }
});
window.addEventListener( 'keydown', function (event){
   if (event.code === 'KeyL'){
        audio.src = `assets/audio/b.mp3`;
       playAudio()
       pianoKeys[6].classList.add('piano-key-active');
   }
});
window.addEventListener( 'keydown', function (event){
   if (event.code === 'KeyR'){
        audio.src = `assets/audio/c♯.mp3`;
       playAudio()
       pianoKeys[7].classList.add('piano-key-active');
   }
});
window.addEventListener( 'keydown', function (event){
   if (event.code === 'KeyT'){
        audio.src = `assets/audio/d♯.mp3`;
       playAudio()
       pianoKeys[8].classList.add('piano-key-active');
   }
});
window.addEventListener( 'keydown', function (event){
   if (event.code === 'KeyU'){
        audio.src = `assets/audio/f♯.mp3`;
       playAudio()
       pianoKeys[10].classList.add('piano-key-active');
   }
});
window.addEventListener( 'keydown', function (event){
   if (event.code === 'KeyI'){
        audio.src = `assets/audio/g♯.mp3`;
       playAudio()
       pianoKeys[11].classList.add('piano-key-active');
   }
});
window.addEventListener( 'keydown', function (event){
   if (event.code === 'KeyO'){
        audio.src = `assets/audio/a♯.mp3`;
       playAudio()
       pianoKeys[12].classList.add('piano-key-active');
   }
});

