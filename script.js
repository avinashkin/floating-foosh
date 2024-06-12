console.log('Loaded');
localStorage.setItem('mode', 'free');

const pos = { x : 0, y : 0 };

document.addEventListener('mousemove', e => { saveCursorPosition(e.clientX, e.clientY); });

const saveCursorPosition = (x, y) => {
    pos.x = (x / window.innerWidth).toFixed(2);
    pos.y = (y / window.innerHeight).toFixed(2);
    document.documentElement.style.setProperty('--x', pos.x);
    document.documentElement.style.setProperty('--y', pos.y);
}

const switchMode = () => {
    const mode = localStorage.getItem('mode');
    const el = document.querySelectorAll(".eye");
    const btn = document.querySelector(".switch-btn");
    console.log(el);
    if (mode === 'free') {
        localStorage.setItem('mode', 'controlled');
        btn.innerHTML = 'Controlled';
        el[0].classList.replace('relaxed', 'controlled');
        el[1].classList.replace('relaxed', 'controlled');
    } else {
        localStorage.setItem('mode', 'free');
        btn.innerHTML = 'Relaxed';
        el[0].classList.add('relaxed');
        el[1].classList.add('relaxed');
    }
}



