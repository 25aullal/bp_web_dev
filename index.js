function getRandomDog() {
    fetch("https://dog.ceo/api/breeds/image/random").then((res) => {
        console.log(res);
        console.log(res.json());
        return res.json();
    }).then((data) => {
        console.log(data);
        document.querySelector("#dog-image").src = data.message;

    })
}

function getSpecificFog() {
    fetch("https://dog.ceo/api/${breed}/image/random").then((res) => {
        console.log(res);
        console.log(res.json());
        return res.json();
    }).then((data) => {
        console.log(data);
        document.querySelector("#dog-image").src = data.message;

    })
}