const dog = {
    name : "멍멍이",
	sound : "멍멍",
	say : function say() {
        console.log(this);
        console.log(this.sound);
	}
};

const button = document.querySelector('p');
button.addEventListener('click', dog.say);

(() => {
    dog.say();
})()