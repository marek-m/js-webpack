import _ from 'lodash';
import './style.scss';
import config from './config-APP_TARGET.js';
function component() {
    console.log('Hello from: ' + config.title);
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello from', config.title], ' ');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
