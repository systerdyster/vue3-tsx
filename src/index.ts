// import './styles/index.css';
import { createApp } from 'vue';
import router from './business/routes';

class Boostrap {
    constructor() {
        this.init();
    }

    private init = async () => {
        this.mount();
    };

    private mount = () => {
        const app = createApp({});

        //Global Functions
        app.use(router);
        app.mount('#app');
    };
}

new Boostrap();
