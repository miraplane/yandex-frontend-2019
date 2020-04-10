let adventureItem = document.querySelector('.adventure');
let adventureCounter = 0;

let newState = {
    title: undefined,
    adventures: [],
    observe: true
};
let lastAdventure = document.querySelector('.adventure');

const intersectionObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.intersectionRatio > 0)) {
        fetch(`/api/adventures?offset=${adventureCounter}`)
            .then(res => res.json())
            .then(data => {
                intersectionObserver.unobserve(lastAdventure);
                newState.adventures = data.adventures;
                history.pushState(newState, null, `/adventures`);

                if (data.adventures.length !== 0) {
                    addAdventures(data.adventures);
                    lastAdventure = document.querySelector('.adventure-item:last-of-type');
                    intersectionObserver.observe(lastAdventure);
                }
            })
            .catch(createErrorBox)

    }
});
intersectionObserver.observe(lastAdventure);

history.pushState({}, null, `/`);
window.onpopstate = showContent;


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
        lastAdventure = document.querySelector('.adventure-item:last-of-type');
        intersectionObserver.observe(lastAdventure);
    }
}

function createLink(className, href, content) {
    let link = document.createElement('a');
    link.classList.add(className);
    link.setAttribute('href', href);
    link.textContent = content;

    return link;
}

function createImg(src) {
    let img = document.createElement('img');
    img.setAttribute('src', src);

    return img;
}

function createSpan(className, content) {
    let span = document.createElement('span');
    span.classList.add(className);
    span.textContent = content;

    return span;
}

function createHashtagBox(className, content) {
    let box = document.createElement('div');
    box.classList.add(className);
    box.textContent = '#' + content;

    return box;
}

function addHashtags(hashtags) {
    let ul = document.createElement('ul');
    ul.classList.add('hashtags');
    for (let hashtag of hashtags) {
        let newHashtag = document.createElement('li');
        newHashtag.classList.add('hashtags-item');

        newHashtag.textContent = '#' + hashtag.title;
        newHashtag.setAttribute('onclick', `goToHashtagPage('${hashtag.title}', '${hashtag.link}')`);

        ul.appendChild(newHashtag);
    }

    return ul;
}

function clearAdventuresList() {
    adventureCounter = 0;
    document.body.removeChild(adventureItem);

    adventureItem = document.createElement('ul');
    adventureItem.classList.add('.adventure');
    document.body.appendChild(adventureItem);
}

function deleteHashTagBox() {
    document.body.querySelectorAll('.select-hashtag').forEach(n => n.remove());
}

function createHashtagPage(title) {
    deleteHashTagBox();
    let selectHashtag = createHashtagBox('select-hashtag', title);
    document.body.appendChild(selectHashtag);

    clearAdventuresList()
}

function goToHashtagPage(title, link) {
    intersectionObserver.unobserve(lastAdventure);
    createHashtagPage(title);
    newState = {
        title: title,
        adventures: [],
        observe: false
    };

    fetch(`/api/adventures/${link}`)
        .then(res => res.json())
        .then(data => {
            newState.adventures = data.adventures;
            history.pushState(newState, null, `/adventures/${link}`);

            if (data.adventures.length !== 0) {
                addAdventures(data.adventures);
            }
        })
        .catch(createErrorBox);


}

function createAdventure(data) {
    let newAdventure = document.createElement('li');
    newAdventure.classList.add('adventure-item');
    let imgLink = createLink(
        'adventure-item-img',
        '/api/adventures/start/' + data.id,
        ''
    );
    imgLink.appendChild(createImg(data.img));
    newAdventure.appendChild(imgLink);
    newAdventure.appendChild(createLink(
        'adventure-item-title',
        '/api/adventures/start/' + data.id,
        data.title)
    );
    newAdventure.appendChild(createSpan(
        'adventure-item-content',
        data.content)
    );
    newAdventure.appendChild(addHashtags(data.hashtags));

    return newAdventure;
}

function addAdventures(adventures) {
    for (let adventure of adventures) {
        adventureItem.appendChild(createAdventure(adventure));
        adventureCounter += 1;
    }
}

function createErrorBox() {
    let errorBox = document.createElement('div');
    errorBox.classList.add('loading-error');
    errorBox.textContent = 'Не удалось загрузить приключения. Пожалуйста, повтрите попытку позже';

    adventureItem.appendChild(errorBox);
    intersectionObserver.unobserve(lastAdventure);
}
