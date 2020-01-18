const allBlocks = document.querySelectorAll('.block');
allBlocks.forEach(block => {
    block.addEventListener('click', (event) => {
        allBlocks.forEach(block => {
            block.style.order = "0";
        });
        event.target.style.order = "-1";
    });
    let pos = 10;
    block.style.position = "relative";
    block.addEventListener('mousedown', (event) => {
        pos++;
        event.target.style.left = pos + 'px';
    });
});

