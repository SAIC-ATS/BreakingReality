if (location.protocol != 'https:') {
   location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
  }
  function requestT () {

      if (typeof(DeviceMotionEvent) !== 'undefined' && typeof(DeviceMotionEvent.requestPermission) === 'function') {
          alert('enter');
          DeviceMotionEvent.requestPermission()
          .then(response => {
          alert('resp'+ response);
            if (response == 'granted') {
              window.addEventListener('devicemotion', (e) => {
                // do something with e
              })
            }
          })
      .catch(console.error)
      }else {
          alert('DeviceMotionEvent is not defined');
      }
  }
  document.getElementById('enterxr').onclick = requestT;
