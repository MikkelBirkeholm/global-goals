const goalsGrid = document.querySelector('#goal-grid')
const dialog = document.querySelector('#dialog')
const slider = document.querySelector('#slider')
const title = document.querySelector('#title')
const description = document.querySelector('#description')
const blazeTrack = document.querySelector('.blaze-track')
const blazer = document.querySelector('.blaze-slider')
const blazePagination = document.querySelector('.blaze-pagination')
const activeBtn = document.querySelector('.active')
const blazePrev = document.querySelector('.prev')
const blazeNext = document.querySelector('.next')
let customSlider = null;
let allGoals;
let noGoal;
let goalsData;

fetch('contentrain/Goals/Goals.json').then(response => response.json())
    .then(data => {
        goalsData = data

        for (let [i, item] of data.entries()) {
            goalsGrid.innerHTML += `<li class="goal" id="${i}" data-subgoals="${item.subgoals}"><img src="${item.cover}" alt="" /></li>`

        }
        goalsGrid.innerHTML += `<li id="no-goal"><img src="src/assets/LOGOER/Global-Goals.png"></li>`
        getGoals()
        noGoal = document.querySelector('#no-goal')

        noGoal.onclick = () => {
            anime({
                autoplay: true,
                targets: '.goal',
                scale: ['0.1', '1.2', '1'],
                translateY: [anime.stagger(15, { grid: [6, 3], from: anime.random(1, 18) }), 0],
                delay: anime.stagger(200, { grid: [6, 3], from: anime.random(1, 18) })
            })
        }

        for (let goal of allGoals) {
            goal.addEventListener('click', (e) => {
                let index = e.currentTarget.id
                blazePagination.innerHTML = ''
                blazePrev.style.color = goalsData[index].color
                blazeNext.style.color = goalsData[index].color
                blazeTrack.innerHTML = ''
                document.documentElement.style.setProperty('--paginationBtn', goalsData[index].color)
                title.innerText = goalsData[index].title
                description.innerText = goalsData[index].description
                let subgoalsArray = goalsData[index].subgoals
                for (let img of subgoalsArray) {
                    blazeTrack.innerHTML += `<div class="slide" style="background-image:url('${img}');"></div>`
                }
                initBlaze()
                dialog.showModal()
            })
        }

    })

function getGoals() {
    allGoals = document.querySelectorAll('.goal')
}



function initBlaze() {
    customSlider = new BlazeSlider(blazer, {
        all: {
            enableAutoplay: true,
            autoplayInterval: 3000,
            transitionDuration: 500,
            transitionTimingFunction: 'ease',
            enablePagination: true,
            stopAutoplayOnInteraction: true,
            slidesToShow: 1
        }
    })
    customSlider
}

dialog.addEventListener('click', (event) => {
    if (event.target.nodeName === 'DIALOG') {
        dialog.close();
        customSlider.destroy()
    }
});




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


// video scrubber
const video = document.querySelector('#video');

window.addEventListener('scroll', function () {
    video.currentTime = window.scrollY / 150
});
