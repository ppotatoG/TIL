const nameLabel = document.querySelector('label[for=user-name]');
const regex = /^[가-힣]+$/;

nameLabel.addEventListener('change', (e) => {
    const value = e.target.value;

    if(value.match(regex) && value.length >= 2) console.log(value + ' ' + true);
    else console.log(value + ' ' + false);
})