(() => {
    const audio = new Audio();

    const audioPlayer = {
        curTrack: 0,
        audio : {
            trackUrl : [
                "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3",
                "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3",
                "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/3.mp3",
                "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3",
                "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/5.mp3"
            ],
            albums : [
                "Dawn",
                "Me & You",
                "Electro Boy",
                "Home",
                "Proxy (Original Mix)"
            ],
            trackNames : [
                "Skylike - Dawn",
                "Alex Skrindo - Me & You",
                "Kaaze - Electro Boy",
                "Jordan Schor - Home",
                "Martin Garrix - Proxy"
            ]
        },
        setTrack: function(curIdx) {
            audio.src = audioPlayer.audio.trackUrl[curIdx]
        },
        setTime : function (startTime, endTime) {
            const start = document.querySelector('.track__start');
            const end = document.querySelector('.track__end');

            start.innerHTML = startTime;
            end.innerHTML = endTime;
        },
        init : function init() {
            console.log(this);
            audioPlayer.setTrack(0);
        }
    }

    // audio.src = audioPlayer.audio.trackUrl[0];

    const playBtn = document.querySelector('.trigger_btn');
    playBtn.addEventListener('click', (e) => {
        console.dir(audio.duration / 60)
        console.log(e.target.classList);
        audio.play();
    });

    audio.addEventListener('timeupdate', (e) => {
        // console.log(e);
    });

    audioPlayer.init();
})();
