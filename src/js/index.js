const goalsGrid = document.querySelector('#goal-grid')
const dialog = document.querySelector('#dialog')

fetch('contentrain/Goals/Goals.json').then(response => response.json())
    .then(data => {
        for (let item of data) {
            goalsGrid.innerHTML += `<li><img src="${item.cover}" alt="" /></li>`
        }
        goalsGrid.innerHTML += `<li id="no-goal"></li>`
    })


