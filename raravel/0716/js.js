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

function solution(obj){
    let el = document.createElement(obj.element);

    for(key in obj.options){
        el.setAttribute(key, obj.options[key]);
    }

    if(el.innerHTML == '' && obj.options.afterCreate !== undefined) {
        return null;
    } else{
        document.body.appendChild(el);
        el.innerHTML = obj.html ;
    } 
}

solution(el01)
solution(el02)
solution(el03)

// test.textContent='dd'