const btnGenerate = document.querySelector('button');
const userContainerEl = document.querySelector('.random-user-container');

const generateUser = async () => {
    const data = await fetch('https://randomuser.me/api/');
    const user = await data.json();

    while (userContainerEl.firstChild) {
        userContainerEl.firstChild.remove();
    };

    const createSpan = (title, value) => {
        const span = document.createElement('span');
        const li = document.createElement('li');
        span.innerText = title;
        li.innerText = value;
        span.append(li)
        return span;
    };

    const img = document.createElement('img');
    img.src = user.results[0].picture.thumbnail;

    const container = document.createElement('ul');
    const name = createSpan('Name:', `${user.results[0].name.first} ${user.results[0].name.last}`);
    const email = createSpan('Email:', user.results[0].email);
    const phone = createSpan('Phone:', user.results[0].phone);
    const location = createSpan('Location:', `${user.results[0].location.city}, ${user.results[0].location.country}`);
    const age = createSpan('Age:', user.results[0].dob.age);


    container.append(name, email, phone, location, age);
    userContainerEl.append(img, container);
};

btnGenerate.addEventListener('click', generateUser)