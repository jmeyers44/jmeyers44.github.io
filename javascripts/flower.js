$( document ).ready(function() {
    console.log( "ready!" );
});

// select video element
var vid = document.getElementById('v0');

// pause video on load
vid.pause();
 
// pause video on document scroll (stops autoplay once scroll started)
$('#vid-container').onscroll = function(){
    vid.pause();
};

// refresh video frames on interval for smoother playback
// dividing the totalTime scrubTime calculation by 25 determines 
// how many frames will be covered in the span of a 'normal' scroll
// the lower the number, the more frames will be covered in a scroll
setInterval(function(){
    var totalTime = 290
    var scrubTimeSelect = $('#vid-container-2').position();
    var scrubTime = scrubTimeSelect.top
    vid.currentTime = eval(totalTime + "-" + scrubTime) /25;
}, 40);