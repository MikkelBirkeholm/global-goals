let tiles = document.querySelectorAll('.tile')

let initNum = anime.random(1, 17)
tiles.forEach(tile => {
    tile.style.backgroundColor = `var(--vm-${initNum})`
});

function tileColor() {
    let randomNum = anime.random(1, 17)
    let randomAlt = anime.random(0, 17)
    let colorNum = `var(--vm-${randomNum})`

    anime({
        autoplay: true,
        targets: '.tile',
        backgroundColor: colorNum,
        easing: 'linear',
        duration: 3500,
        delay: anime.stagger(200, { grid: [6, 3], from: randomAlt }),
        complete: function () {
            tileColor()
        }
    })


}

tileColor()

