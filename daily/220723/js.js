const input = document.querySelector('input');

input.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        addList(input.value);
        addLs(input.value);
        input.value = '';
    }
})

const ul = document.querySelector('ul');

const addList = (text) => {
    const li = document.createElement('li');
    li.innerText = text;

    ul.appendChild(li);
}

const addLs = (text) => {
    const lsNum = localStorage.length;
    localStorage.setItem(`${lsNum}`, text);
}

(() => {
    const sort = Object.entries(localStorage).sort((a, b) => a[0] - b[0]);
    Object.values(sort).forEach(item => {
        addList(item[1])
    });
})();