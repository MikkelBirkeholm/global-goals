const goalsGrid = document.querySelector('#goal-grid')
const dialog = document.querySelector('#dialog')
const slider = document.querySelector('#slider')
const title = document.querySelector('#title')
const description = document.querySelector('#description')
const blazeTrack = document.querySelector('.blaze-track')
const blazer = document.querySelector('.blaze-slider')
const blazePagination = document.querySelector('.blaze-pagination')
let customSlider = null;
let allGoals;
let goalsData;



fetch('contentrain/Goals/Goals.json').then(response => response.json())
    .then(data => {
        goalsData = data

        for (let [i, item] of data.entries()) {
            goalsGrid.innerHTML += `<li class="goal" id="${i}" data-subgoals="${item.subgoals}"><img src="${item.cover}" alt="" /></li>`

        }
        goalsGrid.innerHTML += `<li id="no-goal"></li>`
        getGoals()



        for (let goal of allGoals) {
            goal.addEventListener('click', (e) => {
                let index = e.currentTarget.id
                blazePagination.innerHTML = ''
                blazeTrack.innerHTML = ''
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
