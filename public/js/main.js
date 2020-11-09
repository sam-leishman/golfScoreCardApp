const foxHollowCourse = document.querySelector('[data-fox-hollow]')
const thanksgivingPointCourse = document.querySelector('[data-thanksgiving-point]')
const spanishOaksCourse = document.querySelector('[data-spanish-oaks]')
const player1 = document.querySelector('[data-player1-name]')
const player2 = document.querySelector('[data-player2-name]')
const player3 = document.querySelector('[data-player3-name]')
const player4 = document.querySelector('[data-player4-name]')
const teebox = document.querySelector('[data-teebox]')
const numberOfHoles = document.querySelector('[data-number-of-holes]')
const submitParamsButton = document.querySelector('[data-submit-params-button]')



/*
const httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        const courses = JSON.parse(httpRequest.responseText)
        console.log(courses);
    }
}
httpRequest.open('GET', 'https://golf-courses-api.herokuapp.com/courses', true);
httpRequest.send();
*/

// /*
// Grabs the courses
let coursesPromise = fetch('https://golf-courses-api.herokuapp.com/courses')
    .then((response) => response.json());
coursesPromise
    .then((data) => console.log(data));
// */

function getCourse(courseId) {
    return fetch(`https://golf-courses-api.herokuapp.com/courses/${courseId}`)
        .then((response) => response.json())
        .then((data) => console.log(data.data));
}

function writeCard(courseId) {
    cards.forEach(card => {
        let cardHtml = `
            <div>
                <img src="${card.image}">
            </div>
        `;
        document.getElementById('asdf').innerHTML += cardHtml;
    });
}

foxHollowCourse.addEventListener('click', () => {
    document.getElementById('writtenPage').innerHTML = enterInfoPageHtml;
    // window.location = './enterinfo.html'
    getCourse(18300);
})
thanksgivingPointCourse.addEventListener('click', () => {
    document.getElementById('writtenPage').innerHTML = enterInfoPageHtml;
    // window.location = './enterinfo.html'
    getCourse(11819);
})
spanishOaksCourse.addEventListener('click', () => {
    document.getElementById('writtenPage').innerHTML = enterInfoPageHtml;
    // window.location = './enterinfo.html'
    getCourse(19002);
})

submitParamsButton.addEventListener('click', () => {
    window.location = './index.html'
})