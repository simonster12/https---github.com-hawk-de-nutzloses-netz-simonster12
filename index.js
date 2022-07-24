

const frogs = document.querySelectorAll('.frog');
const frontFrogs = document.querySelectorAll('.frog.front');
const backFrogs = document.querySelectorAll('.frog.back');

frogs.forEach(frog => {
	frog.addEventListener('click', () => playNote(frog));
	
});




document.addEventListener('keydown', e => {
    const key = e.key;
   // const frontKeyIndex = FRONT_KEYS.indexOf(key);
   // const backKeyIndex = BACK_KEYS.indexOf(key);

    // if (frontKeyIndex > -1) playNote(frontFrogs[frontKeyIndex]);
    // if (backKeyIndex > -1) playNote(backFrogs[backKeyIndex]);


// WHOLE TONES


    if (e.key === 'y') {
		const frog = document.querySelector('#C-note');
		if (!frog) {
			throw new Error(`Element not found, ${e.key}`);
		}
		playNote(frog);
	}

    if (e.key === 'x') {
		const frog = document.querySelector('#D-note');
		if (!frog) {
			throw new Error(`Element not found, ${e.key}`);
		}
		playNote(frog);
	}

    if (e.key === 'c') {
		const frog = document.querySelector('#E-note');
		if (!frog) {
			throw new Error(`Element not found, ${e.key}`);
		}
		playNote(frog);
	}

    if (e.key === 'v') {
		const frog = document.querySelector('#F-note');
		if (!frog) {
			throw new Error(`Element not found, ${e.key}`);
		}
		playNote(frog);
	}

    if (e.key === 'b') {
		const frog = document.querySelector('#G-note');
		if (!frog) {
			throw new Error(`Element not found, ${e.key}`);
		}
		playNote(frog);
	}

    if (e.key === 'n') {
		const frog = document.querySelector('#A-note');
		if (!frog) {
			throw new Error(`Element not found, ${e.key}`);
		}
		playNote(frog);
	}

    if (e.key === 'm') {
		const frog = document.querySelector('#H-note');
		if (!frog) {
			throw new Error(`Element not found, ${e.key}`);
		}
		playNote(frog);
	}

    if (e.key === ',') {
		const frog = document.querySelector('#C1-note');
		if (!frog) {
			throw new Error(`Element not found, ${e.key}`);
		}
		playNote(frog);
	}

    //HALF NOTES

    if (e.key === 's') {
		const frog = document.querySelector('#Db-note');
		if (!frog) {
			throw new Error(`Element not found, ${e.key}`);
		}
		playNote(frog);
	}

    if (e.key === 'd') {
		const frog = document.querySelector('#Eb-note');
		if (!frog) {
			throw new Error(`Element not found, ${e.key}`);
		}
		playNote(frog);
	}

    if (e.key === 'g') {
		const frog = document.querySelector('#Gb-note');
		if (!frog) {
			throw new Error(`Element not found, ${e.key}`);
		}
		playNote(frog);
	}

    if (e.key === 'h') {
		const frog = document.querySelector('#Ab-note');
		if (!frog) {
			throw new Error(`Element not found, ${e.key}`);
		}
		playNote(frog);
	}

    if (e.key === 'j') {
		const frog = document.querySelector('#Bb-note');
		if (!frog) {
			throw new Error(`Element not found, ${e.key}`);
		}
		playNote(frog);
	}
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
