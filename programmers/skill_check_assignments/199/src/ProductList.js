export default function ProductList({ $target, initialState } ) {
    this.state = initialState;

    const $productList = document.createElement('ul');
    $target.appendChild($productList);

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        console.log(this.state)

        if( !this.state ) {
            return
        }

        console.log('??')

        $productList.innerHtml = `
            ${this.state.map(Product =>
            `
                <li class="Product">
                    <img src="${Product.imageUrl}"/>
                    <div class="Product__info">
                        <div class="${Product.name}"></div>
                        <div class="${Product.price}">~</div>
                    </div>
                </li>
                `
        ).join()}`;
    }

    this.render();
}