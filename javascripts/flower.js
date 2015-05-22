$( document ).ready(function() {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/images/flower-slow-bloom-4k.mp4', true);
  xhr.responseType = 'blob';

  xhr.onload = function(e) {
    if (this.status == 200) {
      // Note: .response instead of .responseText
      var blob = this.response;
      var vid_url = URL.createObjectURL(blob);
      $('video').attr('src',vid_url)
      var video = $('video');
      video[0].onload = function(){
        debugger;
        URL.revokeObjectURL(vid_url)
      }
      video[0].play()
    }
  };

  xhr.send();
    console.log( "ready!" );
});

   // code here


// select video element
// var selectVid = document.getElementById('v0');
//convert to blob
// var vid = document.getElementById('v0');





// var blob = new Blob([document.getElementById('v0')]);
// var obj_url = window.URL.createObjectURL(blob);
// $('source').attr('src',obj_url)
var vid = document.getElementById('v0');



// // // pause video on load
vid.pause();
 
// // // pause video on document scroll (stops autoplay once scroll started)
$('#vid-container').onscroll = function(){
    vid.pause();
};

// // // refresh video frames on interval for smoother playback
// // // dividing the totalTime scrubTime calculation by 25 determines 
// // // how many frames will be covered in the span of a 'normal' scroll
// // // the lower the number, the more frames will be covered in a scroll
setInterval(function(){
    var totalTime = 290
    var scrubTimeSelect = $('#vid-container-2').position();
    var scrubTime = scrubTimeSelect.top
    vid.currentTime = eval(totalTime+ " " + "-" + " " + scrubTime) /25;
}, 40);

