export default class {
    constructor() {
        document.title = "home";
    }
    async getHtml() {
        return `
            <h1>This is home Page</h1>
        `;
    }
}