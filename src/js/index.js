const goalsGrid = document.querySelector('#goal-grid')

fetch('contentrain/Goals/Goals.json').then(response => response.json())
    .then(data => {
        for (let item of data) {
            console.log(item.cover)
            // goalsGrid.innerHTML += `<li style="background-image:url('${data[0].cover}');"></li>`
        }

    })


