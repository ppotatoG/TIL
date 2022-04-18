# SA demo box 배열로 앨리먼트 만들기

```js
const boxData = [
    {'data-sa': 'fade'},
    {'data-sa': 'from-right'},
    {'data-sa': 'from-top'},
    {'data-sa': 'from-bottom'},
    {'data-sa': 'from-left'},
    {'data-sa': 'flip-right'},
    {'data-sa': 'flip-top'},
    {'data-sa': 'flip-bottom'},
    {'data-sa': 'flip-left'},
    {'data-sa': 'scale'},
    {
        'data-sa': 'from-top',
        'data-sa-duration': '2500'
    },
    {
        'data-sa': 'from-bottom',
        'data-sa-delay': '1000'
    },
    {
        'data-sa': 'flip-left',
        'data-sa-once': 'false',
        'data-sa-offset': '50vw'
    },
    {
        'data-sa': 'scale',
        'data-sa-offset': '500',
        'data-sa-duration': '5000'
    },
    {
        'data-sa': 'fade',
        'data-sa-duration': '1500',
        'data-sa-delay': '500'
    },
];
```


```js
const creatdBoxs = () => {
    const boxWrap = document.querySelector('#box_wrap');

    boxData.forEach((data) => {
        const boxDataLists = Object.entries({...data});

        const div = document.createElement('div');

        const pre = document.createElement('pre');
        boxDataLists.map((boxDataList) => {
            pre.innerHTML += `${boxDataList[0]}="${boxDataList[1]}"\n`;
        })
        
        div.appendChild(pre);

        boxWrap.appendChild(div);
    });
};
```

**dataset 넣는 부분이 문제**

1. /-/ 삭제 후, 
2. /-/바로 뒤 문자 한개를 대문자로 바꿔줘야 함

사실 그냥 2번째 문자 삭제하고 3번째 문자 대문자로 바꿔주면 되지만

정규식을 통해 멋지게 바꾸고싶다


```js
const creatdBoxs = () => {
    // boxData = []

    // box담을 wrap
    const boxWrap = document.querySelector('#box_wrap');

    // data로 forEach, map은 한계가 있어서 forEach 사용
    boxData.forEach((data) => {
        // 오브젝트 풀어서 배열로 변환
        const boxDataLists = Object.entries({...data});

        // div.box
        const div = document.createElement('div');
        div.classList.add('box');

        // 데이터 map으로 돌기
        boxDataLists.map((boxDataList) => {
            // data- 부분삭제
            let dataName = boxDataList[0].slice(5);

            // 삭제하고도 -가 남아있으면 실행
            if((/-/).test(dataName)) {
                // -를 기준으로 잘라줌, 문자열 => 배열
                dataName = dataName.split('-');

                // sa + 대쉬바로 뒤로 오는 첫 글자 대문자 + 첫글자 뒤 모든 나머지 문자
                dataName = dataName[0] + dataName[1][0].toUpperCase() + dataName[1].slice(1);
            }

            // 배열의 첫번째 값 = value
            const dataValue = boxDataList[1];

            // div dataset에 추가
            div.dataset[dataName] = dataValue;
        })
        
        // div.box > pre
        const pre = document.createElement('pre');
        // map 사용으로 innerHtml에 글자 담아줌
        boxDataLists.map((boxDataList) => {
            pre.innerHTML += `${boxDataList[0]}="${boxDataList[1]}"\n`;
        })
        
        // div에 pre 추가
        div.appendChild(pre);

        // boxWrap에 div 추가
        boxWrap.appendChild(div);
    });
};
```