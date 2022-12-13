fetch("src/other/artikler.json").then(response => response.json())
    .then(data => { console.log(data[0].text)  })

    