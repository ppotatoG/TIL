const fileInput = document.querySelector('#file');
const preview = document.querySelector('.preview');
const attachButton = document.querySelector('label[for=file]');

const attachImg = [];

const filePreview = (input) => {
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            attachImg.push(e.target.result);

            const div = document.createElement('div');
            div.style.backgroundImage = `url(${e.target.result})`;

            preview.insertBefore(div, attachButton);

            if(attachImg.length === 4) {
                attachButton.remove();
            }
        }

        reader.readAsDataURL(input.files[0]);
    }
}
(() => {
    fileInput.addEventListener('change', (e) => {
        filePreview(e.target);
    })
})();