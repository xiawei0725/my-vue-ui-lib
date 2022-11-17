import Button from './components/button/';

import {version} from '../package.json';
const components = {
    Button
};

const install = function (Vue) {
    if (install.installed) return;
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key]);
    })
    install.installed = true
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    version,
    install,
    Button
}

