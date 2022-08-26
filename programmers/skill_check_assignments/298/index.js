const $Suggestion = document.querySelector('.Suggestion');
const $Suggestion_ul = document.querySelector('.Suggestion ul');

const $input = document.querySelector('input');

let languages = [];

$input.addEventListener('keyup', (e) => {
    const value = e.target.value;
    const key = e.key;
    if (
        key === 'Enter'
        || key === 'ArrowUp'
        || key === 'ArrowDown'
    ) {
        arrowKeyEvent(key, value);
    } else {
        getLanguages(value).then(res => renderNodes(res, value));
    }
});

const getLanguages = (value) => {
    const url = `https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev`;

    return new Promise((resolve, reject) =>
        fetch(`${url}/languages?keyword=${value}`)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error))
    );
};


const renderNodes = (res, value) => {
    $Suggestion_ul.innerHTML = '';
    languages = res;

    console.log(languages.length)
    languages.length ? $Suggestion.style.display = 'block' : $Suggestion.style.display = 'none' ;

    if (!res.error) {
        res.forEach((language, idx) => {
            const $li = document.createElement('li');
            if (idx === 0) $li.className = 'Suggestion__item--selected';
            $li.innerHTML = `${language}`

            $Suggestion_ul.appendChild($li)
        });
    }
};

let keyCount = 0;
const arrowKeyEvent = (keyType, value) => {
    const $SuggestionLists = document.querySelectorAll('.Suggestion ul li');
    const languagesLength = languages.length;

    if (keyType === 'Enter') {
        chooseLanguage($SuggestionLists[keyCount]);
        return false;
    } else if (keyType === 'ArrowUp') {
        keyCount--;
        if (keyCount < 0) {
            keyCount += languagesLength;
        }
    } else if (keyType === 'ArrowDown') {
        keyCount++;
        if (keyCount > languagesLength - 1) {
            keyCount -= languagesLength;
        }
    }

    $SuggestionLists.forEach((el, idx) => {
        el.classList.remove('Suggestion__item--selected');
        if (idx === keyCount) el.classList.add('Suggestion__item--selected');
    })
};

let chooseLanguages = [];
const $SelectedLanguage_Ul = document.querySelector('.SelectedLanguage ul');

const chooseLanguage = (el) => {
    const curLang = el.innerText;
    $SelectedLanguage_Ul.innerHTML = '';

    alert(curLang);
    chooseLanguages.push(curLang)

    renderChooseLanguage(chooseLanguages);
}

const renderChooseLanguage = (chooseLanguages) => {
    chooseLanguages.forEach((el, idx, arr) => {
        if (
            arr.length <= 4
            || idx >= arr.length - 4 && idx <= arr.length - 1
        ) {
            const $li = document.createElement('li');
            $li.innerHTML = `${el}`

            $SelectedLanguage_Ul.appendChild($li);

            localStorage.setItem(idx, el);
        }
    })
}

(() => {
    window.addEventListener('click', (e) => {
        if (
            e.target.nodeName === 'LI'
            && e.target.parentNode.parentNode.className === 'Suggestion'
        ) {
            chooseLanguage(e.target)
        }
    })

    if(localStorage) {
        renderChooseLanguage(Object.values(localStorage));
        chooseLanguages = Object.values(localStorage);
    }
})()