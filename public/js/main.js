const foxHollowCourse = document.querySelector('[data-fox-hollow]')
const thanksgivingPointCourse = document.querySelector('[data-thanksgiving-point]')
const spanishOaksCourse = document.querySelector('[data-spanish-oaks]')



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

foxHollowCourse.addEventListener('click', e => {
    getCourse(18300);
    window.location = './index.html'
})
thanksgivingPointCourse.addEventListener('click', e => {
    getCourse(11819);
    window.location = './index.html'
})
spanishOaksCourse.addEventListener('click', e => {
    getCourse(19002);
    window.location = './index.html'
})