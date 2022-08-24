export default class {
    constructor() {
        document.title = "list";
    }
    async getHtml() {
        return `
            <div class="ProductListPage">
                <h1>상품목록</h1>
                <ul>
                    <li class="Product">
                        <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png">
                        <div class="Product__info">
                            <div>커피잔</div>
                            <div>10,000원~</div>
                        </div>
                    </li>
                </ul>
            </div>
        `;
    }
}