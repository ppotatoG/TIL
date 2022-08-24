export default function ProductList({ $target, initialState } ) {
    const $productList = document.createElement('ul');
    $target.appendChild($productList);

    this.state = initialState;

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        console.log(this)
        if( !this.state ) {
            return
        }

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