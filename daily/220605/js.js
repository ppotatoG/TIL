(() => {
    const audio = new Audio();
    const player = {
        curTrack: 0,
        audioPlayer : {
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
        setTrack: function setTrack(curIdx) {
            audio.src = this.audio.trackUrl[curIdx];
        },
        setTime : function setTime(curTime, endTime) {
            console.log(curTime, endTime);

            const start = document.querySelector('.track__start');
            const end = document.querySelector('.track__end');
            const timeline = document.querySelector('.track__line-bar');

            timeline.style.width = `${(curTime / endTime) * 100}%`;
        },
        play: function play(e) {
            if(audio.paused) {
                audio.play().then(() => {
                    e.target.classList = 'fa fa-pause';
                    document.querySelector('marquee ').start();
                })
                .catch((error) => {
                    console.log(error);
                });
            }
            else {
                audio.pause();
                e.target.classList = 'fa fa-play';
                document.querySelector('marquee ').stop();
            }
        },
        init : function init() {
            player.setTrack(0);
            console.log(this);
            console.dir(audio);
            document.querySelector('marquee ').stop();
        }
    };

    const playBtn = document.querySelector('.trigger_btn');
    playBtn.addEventListener('click', e => player.play(e));

    audio.addEventListener('timeupdate', (e) => {
        const durationCur = Math.ceil((audio.currentTime / 60) * 100);
        const durationEnd = Math.ceil((audio.duration / 60) * 100);

        player.setTime(durationCur ,durationEnd);
    });

    player.init();
})();
