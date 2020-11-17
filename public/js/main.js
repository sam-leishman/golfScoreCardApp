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

const selectedCourse = document.getElementById('courses')
const selectedTeebox = document.getElementById('teeboxes')
const selectedHoles = document.getElementById('holes')



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

submitParamsButton.addEventListener('click', () => {
    // document.getElementById('writtenPage').innerHTML = cardPageHtml;
    // window.location = './card.html'
    if (selectedCourse.value == 'foxHollow') {
        console.log('fox')
    }
    if (selectedCourse.value == 'thanksgivingPoint') {
        console.log('thank')
    }
    if (selectedCourse.value == 'spanishOaks') {
        console.log('spain')
    }

    if (selectedTeebox.value == 'black') {
        console.log('black')
    }
    if (selectedTeebox.value == 'blue') {
        console.log('blue')
    }
    if (selectedTeebox.value == 'white') {
        console.log('white')
    }
    if (selectedTeebox.value == 'red') {
        console.log('red')
    }

    if (selectedHoles.value == '9') {
        console.log('nine')
    }
    if (selectedHoles.value == '18') {
        console.log('eighteen')
    }
})

// getCourse(18300);
// getCourse(11819);
// getCourse(19002);