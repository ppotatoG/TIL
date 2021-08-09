const nameLabel = document.querySelector('label[for=user-name]');
const regex = /^[가-힣]{2,}/;

nameLabel.addEventListener('change', (e) => {
    const value = e.target.value;

    if(value.match(regex)) console.log(value + ' ' + true);
    else console.log(value + ' ' + false);
})