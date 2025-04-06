let postAudio; 
let isReading = false; 


function toggleReadAloud() {
  const articleContent = document.getElementById('blogPost').innerText;
  const volumeIcon = document.getElementById('volumeIcon');

  if ('speechSynthesis' in window) {  
    if (!isReading) {
      
      postAudio = new SpeechSynthesisUtterance(articleContent); 
      postAudio.lang = 'en-US';  
      postAudio.rate = 1;        
      postAudio.pitch = 1;       

      speechSynthesis.speak(postAudio);
      isReading = true; 

      volumeIcon.classList.remove('fa-volume-up');
      volumeIcon.classList.add('fa-volume-mute');

      readAloudBtn.title = "Click again to stop";
    } else {
      
      speechSynthesis.cancel();  
      isReading = false; 

      
      volumeIcon.classList.remove('fa-volume-mute');
      volumeIcon.classList.add('fa-volume-up');

      readAloudBtn.title = "Click here to read aloud";
    }
  } else {
    alert('Sorry, your browser does not support text-to-speech!');
  }
}

document.getElementById('readAloudBtn').addEventListener('click', toggleReadAloud);

