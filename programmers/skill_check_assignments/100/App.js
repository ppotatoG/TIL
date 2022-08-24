const Root = JSON.parse('[{"id":"1","name":"노란고양이","type":"DIRECTORY","filePath":null,"parent":null},{"id":"3","name":"까만고양이","type":"DIRECTORY","filePath":null,"parent":null},{"id":"10","name":"고등어무늬 고양이","type":"DIRECTORY","filePath":null,"parent":null},{"id":"13","name":"삼색이 고양이","type":"DIRECTORY","filePath":null,"parent":null},{"id":"14","name":"회색고양이","type":"DIRECTORY","filePath":null,"parent":null},{"id":"20","name":"하얀고양이","type":"DIRECTORY","filePath":"/images/20201218_002047.jpg","parent":null}]');
const childRoot = {
    Root1 : JSON.parse('[{"id":"5","name":"2021/04","type":"DIRECTORY","filePath":null,"parent":{"id":"1"}},{"id":"19","name":"물 마시는 사진","type":"FILE","filePath":"/images/a2i.jpg","parent":{"id":"1"}}]'),
    Root3 : JSON.parse('[{"id":"6","name":"2021/04","type":"DIRECTORY","filePath":null,"parent":{"id":"3"}}]'),
    Root10 : JSON.parse('[{"id":"11","name":"고등어친구1","type":"FILE","filePath":"/images/2b0.jpg","parent":{"id":"10"}},{"id":"12","name":"고등어친구2","type":"FILE","filePath":"/images/_rWrxmDVv.png","parent":{"id":"10"}}]'),
    Root13 : JSON.parse('[{"id":"15","name":"2021","type":"DIRECTORY","filePath":null,"parent":{"id":"13"}}]'),
    Root14 : JSON.parse('[{"id":"18","name":"회색친구","type":"FILE","filePath":"/images/U5nc2yre6.jpg","parent":{"id":"14"}}]'),
    Root20 : JSON.parse('[{"id":"22","name":"흰둥이","type":"FILE","filePath":"/images/v0-TjU-1H.jpg","parent":{"id":"20"}}]')
}

// element
const App = document.querySelector('main.app');
const Nodes = document.querySelector('.Nodes');
const Breadcrumb = document.querySelector('.Breadcrumb');

const mainRender = () => {
    Root.map( data => {
        const Node = document.createElement('div');
        Node.className = 'Node';
        Node.innerHTML = `<div>DIRECTORY img</div><p>${data.name}</p>`
        Node.dataset.id = data.id;

        Nodes.appendChild(Node);
        return '';
    });

    App.appendChild(Nodes);
};

const directoryRender = ( target ) => {
    const curIdx = target.dataset.id;
    const curData = childRoot[`Root${curIdx}`];

    Nodes.innerHTML = '';

    const $prev = document.createElement('div');
    $prev.innerHTML = `<div>이전으로</div>`;
    Nodes.appendChild($prev);

    const $curName = document.createElement('div');
    $curName.innerHTML = `<div>${Root.find(v => v.id === curIdx).name}</div>`
    Breadcrumb.appendChild($curName);

    curData.map( data => {
        const Node = document.createElement('div');
        Node.className = 'Node';
        Node.innerHTML = `<div>${data.type} img</div><p>${data.name}</p>`

        Nodes.appendChild(Node);

        console.log(data.name)
        return '';
    });
}

(() => {
    mainRender();

    const Node = document.querySelectorAll('.Node');
    Node.forEach(item => {
        item.addEventListener('click', (e) => directoryRender(e.target));
    })
})();

// const $app = document.querySelector('main.app');
//
// let state = {
//     items: ['item1', 'item2', 'item3', 'item4']
// }
//
// const render = () => {
//     const {items} = state;
//
//     $app.innerHTML = `
//         <ul>
//               ${items.map(item => `<li>${item}</li>`).join('')}
//         </ul>
//         <button id="append">추가</button>
//   `;
//     document.querySelector('#append').addEventListener('click', () => {
//         setState({items: [...items, `item${items.length + 1}`]})
//     })
// }
//
// const setState = (newState) => {
//     state = {...state, ...newState};
//     render();
// }
//
// render();
//
// // https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_1-%E1%84%80%E1%85%B5%E1%84%82%E1%85%B3%E1%86%BC-%E1%84%8E%E1%85%AE%E1%84%80%E1%85%A1