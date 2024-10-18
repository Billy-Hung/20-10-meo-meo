const goodButton = document.getElementById('good');
const badButton = document.getElementById('bad');
const responseParagraph = document.getElementById('response');

goodButton.addEventListener('click', () => {
    responseParagraph.textContent = 'I love you';
});

badButton.addEventListener('click', () => {
    responseParagraph.textContent = "It's okay you have me";
});

for (let i = 0; i < 10; i++) {
    const heart = document.createElement('span');
    heart.textContent = '❤️';
    heart.className = 'heart';
    document.body.appendChild(heart);
}