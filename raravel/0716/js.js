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
function solution(obj){
    let el = document.createElement(obj.element);

    for(key in obj.options){
        el.setAttribute(key, obj.options[key])
    }

    document.body.appendChild(el)
}
solution(el01)
solution(el02)