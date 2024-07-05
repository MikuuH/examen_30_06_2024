import gsap from gsap
import barba from './node_modules/@barba/core/dist/barba.umd.js';

// инициализация barba.js с анимацией от gsap
barba.init({
    transitions: [{
        name: 'custom-transition',
        sync: true,
        leave(data) {
            // Анимация ухода
            return gsap.to(data.current.container.querySelector('.container-book'), {
                opacity: 0,
                scale: 0.8,
                duration: 0.5
            });
        },
        enter(data) {
            // Анимация входа
            return gsap.from(data.next.container.querySelector('.container-book'), {
                opacity: 0,
                scale: 1.2,
                duration: 0.5
            });
        }
    }]
});
