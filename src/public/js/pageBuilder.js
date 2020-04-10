const API_ADVENTURES = '/api/adventures';
const API_ADVENTURES_START = '/api/adventures/start';
const ADVENTURES = '/adventures';

const CLASS_ADVENTURE = 'adventure';
const CLASS_ADVENTURE_ITEM = 'adventure-item';
const CLASS_SELECT_HASHTAG = 'select-hashtag';

let adventureItem = document.querySelector('.adventure');
let adventureCounter = 0;

let newState = {
    title: undefined,
    adventures: [],
    observe: true
};
let lastAdventure = document.querySelector(`.${CLASS_ADVENTURE}`);

const intersectionObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.intersectionRatio > 0)) {
        fetch(`${API_ADVENTURES}?offset=${adventureCounter}`)
            .then(res => res.json())
            .then(data => {
                intersectionObserver.unobserve(lastAdventure);
                newState.adventures = data.adventures;
                history.pushState(newState, null, ADVENTURES);

                if (data.adventures.length !== 0) {
                    addAdventures(data.adventures);
                    adventureCounter += data.adventures.length;

                    lastAdventure = document.querySelector(`.${CLASS_ADVENTURE_ITEM}:last-of-type`);
                    intersectionObserver.observe(lastAdventure);
                }
            })
            .catch(createErrorBox);

    }
});
intersectionObserver.observe(lastAdventure);

history.pushState({}, null, '/');
window.onpopstate = history.onpushstate = showContent;


function showContent(event) {
    deleteHashTagBox();
    clearAdventuresList();

    if (event.state.title) {
        createHashtagPage(event.state.title);
    }
    if (event.state.adventures) {
        addAdventures(event.state.adventures);
    }
    if (event.state.observe) {
        lastAdventure = document.querySelector((`.${CLASS_ADVENTURE_ITEM}:last-of-type`));
        intersectionObserver.observe(lastAdventure);
    }
}

function createLink(className, href, content) {
    const link = document.createElement('a');
    link.classList.add(className);
    link.setAttribute('href', href);
    link.textContent = content;

    return link;
}

function createImg(src) {
    const img = document.createElement('img');
    img.setAttribute('src', src);

    return img;
}

function createSpan(className, content) {
    const span = document.createElement('span');
    span.classList.add(className);
    span.textContent = content;

    return span;
}

function createHashtagBox(className, content) {
    const box = document.createElement('div');
    box.classList.add(className);
    box.textContent = `#${content}`;

    return box;
}

function addHashtags(hashtags) {
    const ul = document.createElement('ul');
    ul.classList.add('hashtags');
    for (let hashtag of hashtags) {
        const newHashtag = document.createElement('li');
        newHashtag.classList.add('hashtags-item');

        newHashtag.textContent = `#${hashtag.title}`;
        newHashtag.setAttribute('onclick', `goToHashtagPage('${hashtag.title}', '${hashtag.link}')`);

        ul.appendChild(newHashtag);
    }

    return ul;
}

function clearAdventuresList() {
    adventureCounter = 0;
    document.body.removeChild(adventureItem);

    adventureItem = document.createElement('ul');
    adventureItem.classList.add(`${CLASS_ADVENTURE}`);
    document.body.appendChild(adventureItem);
}

function deleteHashTagBox() {
    document.body.querySelectorAll(`.${CLASS_SELECT_HASHTAG}`).forEach(n => n.remove());
}

function createHashtagPage(title) {
    deleteHashTagBox();
    const selectHashtag = createHashtagBox(CLASS_SELECT_HASHTAG, title);
    document.body.appendChild(selectHashtag);

    clearAdventuresList();
}

function goToHashtagPage(title, link) {
    intersectionObserver.unobserve(lastAdventure);
    createHashtagPage(title);
    newState = {
        title: title,
        adventures: [],
        observe: false
    };

    fetch(`${API_ADVENTURES}/${link}`)
        .then(res => res.json())
        .then(data => {
            newState.adventures = data.adventures;
            history.pushState(newState, null, `${ADVENTURES}/${link}`);

            if (data.adventures.length !== 0) {
                addAdventures(data.adventures);
            }
        })
        .catch(createErrorBox);

}

function createAdventure(data) {
    const newAdventure = document.createElement('li');
    newAdventure.classList.add(CLASS_ADVENTURE_ITEM);
    const imgLink = createLink(
        'adventure-item-img',
        `${API_ADVENTURES_START}/${data.id}`,
        ''
    );
    imgLink.appendChild(createImg(data.img));
    newAdventure.appendChild(imgLink);
    newAdventure.appendChild(createLink(
        'adventure-item-title',
        `${API_ADVENTURES_START}/${data.id}`,
        data.title
    ));
    newAdventure.appendChild(createSpan(
        'adventure-item-content',
        data.content
    ));
    newAdventure.appendChild(addHashtags(data.hashtags));

    return newAdventure;
}

function addAdventures(adventures) {
    for (let adventure of adventures) {
        adventureItem.appendChild(createAdventure(adventure));
    }
}

function createErrorBox() {
    const errorBox = document.createElement('div');
    errorBox.classList.add('loading-error');
    errorBox.textContent = 'Не удалось загрузить приключения. Пожалуйста, повтрите попытку позже';

    adventureItem.appendChild(errorBox);
    intersectionObserver.unobserve(lastAdventure);
}
