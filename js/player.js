$(function(){
    // AJ only one audio stream at a time
    $("audio").on("play", function() {
        $("audio").not(this).each(function(index, audio) {
            audio.pause();
        });
    });
});
