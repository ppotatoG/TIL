# 1주차 예제 (symbol, Set, Map)

```js
const fruit = [
  {
    name: '사과',
    count: 45,
    address: '수원'
  },
  {
    name: '포도',
    count: 60,
    address: '서울'
  },
  {
    name: '오렌지',
    count: 15,
    address: '대구'
  }
];

스크립트 안에 있는 데이터를 활용하신뒤 금주에 배운 스크립트
기술중 1가지는 꼭 사용하여 아래 이미지와 같이 document에 출력 부탁드립니다.

사과,배,오렌지는  기존에 가지고 있는 물량에서 하루에 10개씩 30일을 수확한 값입니다.
주소지 또한 기존에 있는 주소지에서 샘플이미지에 있는 주소지로 변경부탁드립니다.

(순수 javasript 외  jquery가 더 편하신분들은 사용하셔도 무관합니다.단 금주에 배운 스크립트중 1가지 기술은 꼭 사용부탁드립니다.)

결과물은 각자의 폴더에 넣어 push 부탁드립니다. :)

```

### 일반적인 방법
```js
const day = 10;
const month = 30;
const changeAddress = (val) => {
  if(val === '수원') return '부산';
  else if(val === '서울') return '강원도';
  else if(val === '대구') return '제주도';
  else return val;
};

fruit.forEach((val) => {
  const sum = (day * month) + val.count;
  console.log(`${val.name} ${sum}개 ${changeAddress(val.address)}에서 수확했습니다.`);
});
```


### Symbol

```js
const day = Symbol.for('10');
const month = Symbol.for('30');
const changeAddress = (val) => {
  if(val === '수원') return '부산';
  else if(val === '서울') return '강원도';
  else if(val === '대구') return '제주도';
  else return val;
};

fruit.forEach((val) => {
    const sum = Number(Symbol.keyFor(day)) * Number(Symbol.keyFor(month)) + val.count;
    console.log(`${val.name} ${sum}개 ${changeAddress(val.address)}에서 수확했습니다.`);
});
```

### Set 
```js
const date = new Set();
date.add(10);
date.add(30);

const changeAddress = (val) => {
  if(val === '수원') return '부산';
  else if(val === '서울') return '강원도';
  else if(val === '대구') return '제주도';
  else return val;
};

fruit.forEach((val) => {
  const sum = (Array.from(date).reduce((a, b) => a * b)) + val.count;
  console.log(`${val.name} ${sum}개 ${changeAddress(val.address)}에서 수확했습니다.`);
});
```

### Map
```js
const date = new Map();
date.set('day', 10);
date.set('month', 30);

const changeAddress = (val) => {
  if(val === '수원') return '부산';
  else if(val === '서울') return '강원도';
  else if(val === '대구') return '제주도';
  else return val;
};

fruit.forEach((val) => {
  const sum = (date.get('day') * date.get('month')) + val.count;
  console.log(`${val.name} ${sum}개 ${changeAddress(val.address)}에서 수확했습니다.`);
});
```