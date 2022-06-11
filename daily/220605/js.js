(() => {
    const player = {
        audio: new Audio(),
        curTrack: 0,
        music : {
            url : [
                "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/2.mp3",
                "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/1.mp3",
                "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/3.mp3",
                "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/4.mp3",
                "https://raw.githubusercontent.com/himalayasingh/music-player-1/master/music/5.mp3"
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
            if (curIdx > this.music.url.length) curIdx %= this.music.url.length;
            if (curIdx === this.music.url.length) curIdx = 0;

            document.querySelector('.track__title').innerHTML = this.music.trackNames[curIdx];

            this.audio.src = this.music.url[curIdx];
            this.play()
            console.log(curIdx)
        },
        setTime : function setTime(curTime, endTime) {
            console.log(curTime, endTime);

            const startEl = document.querySelector('.track__start');
            const endEl = document.querySelector('.track__end');

            const timeline = document.querySelector('.track__line-bar');
            timeline.style.width = `${(curTime / endTime) * 100}%`;
        },
        play: function play() {
            if(this.audio.paused) {
                this.audio.play().then(() => {
                    document.querySelector('.audioPlay i').classList = 'fa fa-pause';
                })
                .catch((error) => {
                    console.log(error);
                });
            }
            else {
                this.audio.pause();
                document.querySelector('.audioPlay i').classList = 'fa fa-play';
            }
        },
        init : function init() {
            this.audio.pause();
            this.setTrack(0);
        }
    };

    const audioPlay = document.querySelector('.audioPlay');
    audioPlay.addEventListener('click', e => player.play(e));

    const prevAudio = document.querySelector('.prevAudio');
    prevAudio.addEventListener('click', () => {
        player.curTrack --;
        player.setTrack(player.curTrack);
    });

    const nextAudio = document.querySelector('.nextAudio');
    nextAudio.addEventListener('click', () => {
        player.curTrack ++;
        player.setTrack(player.curTrack);
    });

    function addDays(date, days) {
        const clone = new Date(date);
        clone.setDate(date.getDate() + days)
        return clone;
    }

    player.audio.addEventListener('timeupdate', (e) => {
        const durationCur = Math.ceil((player.audio.currentTime / 60) * 100);
        const durationEnd = Math.ceil((player.audio.duration / 60) * 100);

        console.log(addDays(new Date(2022), durationCur))

        player.setTime(durationCur ,durationEnd);
    });

    player.init();
})();
