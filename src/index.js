import config from './config-APP_TARGET.js';
function component() {
    console.log('Hello from: ' + config.title);
    let element = document.createElement('div');

    element.innerHTML = 'Hello from' + config.title;
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
