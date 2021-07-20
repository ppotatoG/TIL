const el01 = {
    element: "button",
    options: {
        "id": "btn",
        "name": "btn-name",
        "class": "btn btn-primary",
        "data": {
            "idx": 1,
        },
        "style": "width: 150px; height: 50px;",
        "onclick": (evt) => {
                console.log(evt.target);
            }
        }
    }
const el02 = {
    element: "a",
    options: {
        "href": "https://naver.com",
        "target": "_blank"
    }
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
        el.setAttribute(key, obj.options[key])
    }

    document.body.appendChild(el)
}
solution(el01)
solution(el02)
solution(el03)