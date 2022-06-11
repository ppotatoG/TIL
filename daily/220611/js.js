(() => {
    const audio = new Audio();
    const player = {
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

            audio.src = this.music.url[curIdx];
            this.play()
            console.log(curIdx)
        },
        setTime : function setTime(curTime, endTime) {
            console.log(curTime, endTime);

            const startEl = document.querySelector('.track__start');
            const endEl = document.querySelector('.track__end');

            // const countTime = (duration) => {
            //     let minute = 0;
            //     let second = 0;

            //     if(duration > 60) {
            //         minute++;
            //         second = 0;
            //     }

            //     return num.toString.length <= 1 ? 
            // }

            const timeline = document.querySelector('.track__line-bar');
            timeline.style.width = `${(curTime / endTime) * 100}%`;
        },
        play: function play() {
            if(audio.paused) {
                audio.play().then(() => {
                    document.querySelector('.audioPlay i').classList = 'fa fa-pause';
                })
                .catch((error) => {
                    console.log(error);
                });
            }
            else {
                audio.pause();
                document.querySelector('.audioPlay i').classList = 'fa fa-play';
            }
        },
        init : function init() {
            audio.pause();
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

    audio.addEventListener('timeupdate', (e) => {
        const durationCur = Math.ceil((audio.currentTime / 60) * 100);
        const durationEnd = Math.ceil((audio.duration / 60) * 100);

        console.log(addDays(new Date(2022), durationCur))

        player.setTime(durationCur ,durationEnd);
    });

    player.init();
})();
