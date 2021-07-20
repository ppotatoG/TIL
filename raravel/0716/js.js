const el01 = {
    element: "button",
    options: {
        "id": "btn",
        "name": "btn-name",
        "class": "btn btn-primary",
        "style": "width: 150px; height: 50px;",
        "onclick": (evt) => {
                console.log(evt.target);
        }
    },
    html: 'BUTTON'
}
const el02 = {
    element: "a",
    options: {
        "href": "https://naver.com",
        "target": "_blank"
    },
    html: '<span style="color: green;">naver link</span>'
}
const el03 = {
    element: "input",
    options: {
    "type": "text",
    "id": "input-text",
    "afterCreate": (element) => {
            element.val = "input value";
            element.addEventListener('click', console.log);
            return null;
        }
    }
}

function solution(el, opt, html){
    let createEl = document.createElement(el);

    for(key in opt){
        createEl.setAttribute(key, opt[key]);
    }

    // console.log(html)

    if( !html ) {
        return null;
    } else{
        createEl.innerHTML = html ;
        return createEl;
    }
}

solution(el01.element, el01.options, el01.html)
solution(el02.element, el02.options, el02.html)
solution(el03.element, el03.options, el03.html)

console.log(solution(el01.element, el01.options, el01.html))
console.log(solution(el02.element, el02.options, el02.html))
console.log(solution(el03.element, el03.options, el03.html))
