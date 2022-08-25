function renderNodes(nodes) {
    const $container = document.querySelector('.container');

    nodes.forEach(node => {
        const $node = document.createElement('div');

        $container.appendChild($node)
    })

}

function Nodes({ $app, initialState}) {
    this.state = initialState;

    this.$target = document.createElement('ul');
    $app.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        this.$target.innerHTML = this.state.nodes.map(node => {
            `<li>${node.name}</li>`;
        })
    };
}

function Breadcrumb({ $app, initialState }) {
    this.state = initialState;

    this.$target = document.createElement('nav');
    this.$target.className = 'Breadcrumb';
    $app.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    };

    this.render = () => {
        this.$target.innerHTML = `<div class="nav-item">root</div>${
            this.state.map(
                (node, index) => `<div class="nav-item" data-index="${index}">${node.name}</div>`
            )
        }`;
    }
}