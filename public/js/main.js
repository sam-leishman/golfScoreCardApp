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
    .then((data) => printInfo(data));
// */

function getCourse(courseId) {
    return fetch(`https://golf-courses-api.herokuapp.com/courses/${courseId}`)
        .then((response) => response.json());
}