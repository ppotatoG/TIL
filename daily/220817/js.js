const fileInput = document.querySelector('#file');
const preview = document.querySelector('.preview');
const attachButton = document.querySelector('label[for=file]');

const attachImg = [];

const filePreview = (input) => {
    if(attachImg.length >= 4) {
        alert('3333');
        return false;
    }

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            attachImg.push(e.target.result);

            const img = document.createElement('img');
            img.src = `${e.target.result}`;
            preview.appendChild(img)

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