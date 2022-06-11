const player = {
    audio : new Audio(),
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
    curTrack : 0,
    setTrack : function setTrack(curIdx) {
        const musicLength = this.music.url.length;

        if (curIdx > musicLength) {
            curIdx %= musicLength;
        }
        else if (curIdx < 0) {
            curIdx += musicLength;
        }
        else if (curIdx === musicLength) {
            curIdx = 0;
        }

        this.curTrack = curIdx;

        document.querySelector('.track__title').innerHTML =
            this.music.trackNames[curIdx];

        this.audio.src = this.music.url[curIdx];
        this.setTime(this.audio.currentTime ,this.audio.duration);
    },
    setTime : function setTime(curTime, endTime) {
        const startEl = document.querySelector('.track__start');
        startEl.innerHTML = this.countTime(curTime);

        setTimeout(() => {
            const endEl = document.querySelector('.track__end');
            endEl.innerHTML = this.countTime(this.audio.duration);
        }, 500);

        const timeline = document.querySelector('.track__line-bar');
        timeline.style.width = `${(curTime / endTime) * 100}%`;
    },
    countTime : function countTime(duration){
        let minutes = Math.floor((duration / 60) % 60);
        let seconds = Math.floor(duration % 60);

        minutes = minutes < 10 ? `0${minutes}` : minutes;
        seconds = seconds < 10 ? `0${seconds}` : seconds;

        return !duration ? '00:00' : `${minutes}:${seconds}`;
    },
    prevAudio : function prevAudio() {
        this.curTrack --;
        this.setTrack(this.curTrack);
    },
    nextAudio : function prevAudio() {
        this.curTrack ++;
        this.setTrack(this.curTrack);
    },
    play : function play() {
        if(this.audio.paused) {
            this.audio.play().then(() => {
                document.querySelector('.audioPlay i').classList = 'fa fa-pause';
            }).catch(error => console.log(error));
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

(() => {
    player.init();

    document
        .querySelector('.audioPlay')
        .addEventListener('click', e => player.play(e));

    const prevAudio = document.querySelector('.prevAudio');
    prevAudio.addEventListener('click', () => player.prevAudio());

    const nextAudio = document.querySelector('.nextAudio');
    nextAudio.addEventListener('click', () => player.nextAudio());

    player.audio.addEventListener('timeupdate', (e) => {
        player.setTime(player.audio.currentTime ,player.audio.duration);
    });
})();
