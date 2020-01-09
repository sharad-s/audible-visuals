var app = app || {};
var source;
var buffer;
var analyser;

var currentFile;

window.onload = function() {
  app.init();
  // console.log('audio loader connected');

  window.addEventListener('drop', onDrop, false);
  window.addEventListener('dragover', onDrag, false);

  function onDrag(e) {
    e.stopPropagation();
    e.preventDefault();
    $('#notification').velocity('fadeOut', { duration: 150 });
    return false;
  }

  function onDrop(e) {
    e.stopPropagation();
    e.preventDefault();
    var droppedFiles = e.dataTransfer.files;
    var currentFile = droppedFiles[0];
    initiateAudio(currentFile); // initiates audio from the dropped file
    setupAudioHandlers();
  }

  function initiateAudio(data) {
    teardown()
    app.audio = document.createElement('audio'); // creates an html audio element
    app.audio.src = URL.createObjectURL(data); // sets the audio source to the dropped file
    app.audio.autoplay = true;
    // app.audio.play();
    document.body.appendChild(app.audio);
    app.ctx = new (window.AudioContext || window.webkitAudioContext)(); // creates audioNode
    source = app.ctx.createMediaElementSource(app.audio); // creates audio source
    analyser = app.ctx.createAnalyser(); // creates analyserNode
    source.connect(app.ctx.destination); // connects the audioNode to the audioDestinationNode (computer speakers)
    source.connect(analyser); // connects the analyser node to the audioNode and the audioDestinationNode
    app.animate();
  }

  function setupAudioHandlers() {
    app.audio.addEventListener('play', () => {
      // alert("play")
      console.log('PLAY event');
    });

    app.audio.addEventListener('ended', () => {
      // alert("play")
      console.log('ENDED event');
      app.audio.play()
    });
  }

  function teardown() {
    if (app.audio) {
      app.audio.remove();
      window.cancelAnimationFrame(app.animationFrame);
    }
  }
};
