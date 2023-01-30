import { createApp } from 'vue'
import './style.css'

import { Start } from './Start';

class Boostrap {
    constructor() {
        this.init();
    }

    private init = async () => {
        this.mount();
    }

    private mount = () => {
        const app = createApp(Start);

        //Global Functions
        app.mount('#app');
    }
}

new Boostrap();