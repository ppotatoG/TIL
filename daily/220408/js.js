(() => {
    const textArea = document.querySelector('textarea');
    const preview = document.querySelector('#preview');

    textArea.addEventListener('keyup', () => {
        setText(textArea.value)
    })

    const setText = (textValue) => {
        const maxTextLength = 100;
        preview.innerHTML = ('<p></p>').repeat(maxTextLength); 

        const textArr = textValue.split('');
        
        textArr.forEach((text, idx) => {
            preview.childNodes[idx].innerHTML = text;
        })   
    };
})()