const goalsGrid = document.querySelector('#goal-grid')

fetch('contentrain/Goals/Goals.json').then(response => response.json())
    .then(data => {

        goalsGrid.innerHTML += `<li>${data[0].title}<br /> ${data[0].description}</li>`

        console.log(data)
    })


