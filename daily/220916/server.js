var submitImg = [];
var preview = document.querySelector('.preview');
var attachButton = document.querySelector('.attach_button');

function readImage(input) {
    if(submitImg.length >= 4) {
        alert('4444')
    }

    if (input.files && input.files[0]) {
        var fileReader = new FileReader();

        fileReader.onload = function (e) {
            var renderImg =  e.target.result;

            var div = document.createElement('div');
            div.style.backgroundImage = 'url("' + renderImg + '")';
            div.className = 'preview__item';
            div.dataset.attachIdx = submitImg.length;

            var a = document.createElement('a');
            a.className = 'cancel';
            a.onclick = function attachCancel(e) {
                var parent = e.target.parentElement;

                parent.remove();
                submitImg.splice(parent.attachIdx, 1);

                if(submitImg.length === 3) {
                    var label = document.createElement('label');
                    label.className = 'preview__item attach_button';
                    label.htmlFor = 'attach';

                    preview.appendChild(label);
                }
            };

            preview.insertBefore(div, attachButton);
            div.appendChild(a);

            submitImg.push(renderImg);

            if(submitImg.length === 4) {
                attachButton.remove();
            }
        };

        fileReader.readAsDataURL(input.files[0]);
    }
}

$('input#attach').on('change', function(e) {
    readImage(e.target);
});
