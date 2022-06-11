# 멀티미디어 홈페이지 만들기

## [html details](https://developer.mozilla.org/ko/docs/Web/HTML/Element/details)

자주 쓰이는 토글박스를 js 없이 사용 가능한 앨리먼트

좌측 메뉴에 사용

<details class="nav-item" open>
    <summary class="ico-wrap">magazine<i class="ico arrow"></i></summary>
<p>2021.04</p>
    <p>2021.06</p>
    <p>2021.08</p>
    <p>2021.10</p>
    <p>2021.12</p>
    <p>2022.02</p>
    <p>2022.04</p>
    <p>2022.06</p>
</details>

```html
<details class="nav-item" open>
    <summary class="ico-wrap">magazine<i class="ico arrow"></i></summary>
    <a href="#;">2021.04</a>
    <a href="#;">2021.06</a>
    <a href="#;">2021.08</a>
    <a href="#;">2021.10</a>
    <a href="#;">2021.12</a>
    <a href="#;">2022.02</a>
    <a href="#;">2022.04</a>
    <a href="#;">2022.06</a>
</details>
```

## [css position: sticky](https://developer.mozilla.org/ko/docs/Web/CSS/position)

`position: sticky;`를 사용하여 좌측 메뉴 고정

```css
.nav {
    position: sticky;
    top: 0;
    max-height: 100vh;
}
```

## [new Audio()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)

`new Audio()`객체를 사용하여 컨텐츠 우상단 mp3 플레이어 제작

`player`객체 선언하여 내부적으로 변수 및 함수 사용

```js
const player = {
    audio: new Audio(), // new Audio() 객체 생성
    music: {}, // audio 객체에 담길 audio src 및 이름,
    curTrack: 0, // 재생될 audio의 index
    setTrack : {}, // curTrack계산 및 curTrack에 따라 음악 세팅
    setTime : {}, // 현재 트랙 audio에 따라 시간 세팅
    countTime : {}, // 시간 계산 함수
    prevAudio : {}, // 이전 재생 버튼 이벤트
    nextAudio : {}, // 다음 재생 버튼 이벤트
    play : {}, // 재생 이벤트
    init : {} // domload 시 실행될 초기화 함수
}
```

### setTrack()
`curTrack`계산 및 `curTrack`에 따라 음악 세팅

1. 파라미터 값을 적절한 값으로 세팅
2. 변경된 값 `this.curTrack`에 저장
3. `html element`에 현재 오디오 이름 세팅
4. `this.audio`의 src 변경
5. `this.audio.duation`의 경우, 상황에 따라 값을 가져오지 못하여 `setTimeout`으로 .5초 후 실행 <br> `this.audio` 시간을 담는 앨리먼트에 시간 세팅
```js
setTrack : function setTrack(curIdx) {
    const musicLength = this.music.url.length;

    // 1
    if (curIdx > musicLength) {
        curIdx %= musicLength;
    }
    else if (curIdx < 0) {
        curIdx += musicLength;
    }
    else if (curIdx === musicLength) {
        curIdx = 0;
    }

    // 2
    this.curTrack = curIdx;

    // 3
    document.querySelector('.track__title >span').innerHTML = this.music.trackNames[curIdx];

    // 4
    this.audio.src = this.music.url[curIdx];

    // 5
    setTimeout(() => {
        this.setTime(this.audio.currentTime, this.audio.duration);
    }, 500);

    document.querySelector('.track__title >span').classList.remove('play');
}
```

### setTime()
현재 트랙 `audio`에 따라 시간 세팅

1. 오디오 타임라인 바의 너비를 계산하여 적용 <br> `(현재 음악 시간 / 전체 음악 시간) * 100`
```js
setTime : function setTime(curTime, endTime) {
    const startEl = document.querySelector('.track__start');
    startEl.innerHTML = this.countTime(curTime);

    const endEl = document.querySelector('.track__end');
    endEl.innerHTML = this.countTime(this.audio.duration);

    // 1
    const timeline = document.querySelector('.track__line-bar');
    timeline.style.width = `${(curTime / endTime) * 100}%`;
}
```

### countTime
시간 계산 함수

1. 분 `반올림(전체 초 / 60)`
2. 초 `반올림(전체 초 % 60)`
3. 분 또는 초가 한자리일 때 앞에 문자열 '0' 추가
4. `setTrack()` 내 `setTimeout`에서 값을 제대로 못가져 왔을 때 '00:00' 반환

```js
countTime : function countTime(duration){
    // 1
    let minutes = Math.floor(duration / 60);
    
    // 2
    let seconds = Math.floor(duration % 60);

    // 3
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    // 4
    return !duration ? '00:00' : `${minutes}:${seconds}`;
}
```
### play()
`audio` 재생 이벤트

1. `this.audio`가 멈춤일 때
2. `audio.play`는 `Promise`를 반환, `Promise` 사용
3. `console.log`로 `error`반환
4. `audio`가 재생중일 때 멈춤
```js
play : function play() {
    // 1
    if(this.audio.paused) {
        
        // 2
        this.audio.play().then(() => {
            document.querySelector('.audioPlay i').classList = 'fa fa-pause';
            document.querySelector('.track__title >span').classList.add('play');
            document.querySelector('.track__title >span').classList.remove('paused');

            // 3
        }).catch(error => console.log(error));
    }
    
    // 5
    else {
        this.audio.pause();
        document.querySelector('.audioPlay i').classList = 'fa fa-play';
        document.querySelector('.track__title >span').classList.add('paused');
        document.querySelector('.track__title >span').classList.remove('play');
    }
}
```

### init()
`domload` 시 실행될 초기화 함수

```js
init : function init() {
    this.audio.pause();
    this.setTrack(0);
}
```

## (() => {})()
`domload`에 실행될 함수들

### player.init()
`player` 초기화

```js
player.init();
```

### player.play(e)
`play` 버튼 클릭 시 `player.play(e)`

```js
document
    .querySelector('.audioPlay')
    .addEventListener('click', e => player.play());
```

### player.prevAudio()
`prevAudio` 버튼 클릭 시 이전 노래 재생
```js
const prevAudio = document.querySelector('.prevAudio');
prevAudio.addEventListener('click', () => player.prevAudio());
```

### player.nextAudio()
`nextAudio` 버튼 클릭 시 다음 노래 재생
```js
const nextAudio = document.querySelector('.nextAudio');
nextAudio.addEventListener('click', () => player.nextAudio());
```

### timeupdate
`audio.play()`시 실행되는 eventListener

1. `현재 재생시간`과 `총 재생시간`이 동일 할 때 다음노래 재생

```js
player.audio.addEventListener('timeupdate', (e) => {
    player.setTime(player.audio.currentTime, player.audio.duration);

    // 1
    if(player.audio.currentTime === player.audio.duration) player.nextAudio();
});
```