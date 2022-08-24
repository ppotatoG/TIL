const getRoot = JSON.parse('[{"id":"1","name":"노란고양이","type":"DIRECTORY","filePath":null,"parent":null},{"id":"3","name":"까만고양이","type":"DIRECTORY","filePath":null,"parent":null},{"id":"10","name":"고등어무늬 고양이","type":"DIRECTORY","filePath":null,"parent":null},{"id":"13","name":"삼색이 고양이","type":"DIRECTORY","filePath":null,"parent":null},{"id":"14","name":"회색고양이","type":"DIRECTORY","filePath":null,"parent":null},{"id":"20","name":"하얀고양이","type":"DIRECTORY","filePath":"/images/20201218_002047.jpg","parent":null}]');

// element
const Breadcrumb = document.querySelector('.Breadcrumb');
const App = document.querySelector('main.app');

const mainRender = () => {
    const Nodes = document.createElement('div');
    Nodes.className = 'Nodes';

    getRoot.map( data => {
        const Node = document.createElement('div');
        Node.className = 'Node';
        Node.innerHTML = `<div>DIRECTORY img</div><p>${data.name}</p>`
        Nodes.appendChild(Node);

        console.log(data)
        return '';
    } )

    App.appendChild(Nodes);
};

(() => {
    mainRender();
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