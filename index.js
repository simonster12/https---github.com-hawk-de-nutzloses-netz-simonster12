const FRONT_KEYS = ['y', 'x', 'c', 'v', 'b', 'n', 'm', ','];
const BACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const frogs = document.querySelectorAll('.frog');
const frontFrogs = document.querySelectorAll('.frog.front');
const backFrogs = document.querySelectorAll('.frog.back');

frogs.forEach(frog => {
    frog.addEventListener('click', () => playNote(frog));
});

document.addEventListener('keydown', e => {
    const key = e.key;
    const frontKeyIndex = FRONT_KEYS.indexOf(key);
    const backKeyIndex = BACK_KEYS.indexOf(key);

    if (frontKeyIndex > -1) playNote(frontFrogs[frontKeyIndex]);
    if (backKeyIndex > -1) playNote(backFrogs[backKeyIndex]);
});

function playNote(frog) {
    const noteAudio = document.getElementById(frog.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    frog.classList.add('active');
    noteAudio.addEventListener('ended', () => {
        frog.classList.remove('active')}
    );
};