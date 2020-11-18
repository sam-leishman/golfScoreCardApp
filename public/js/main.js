const submitParamsButton = document.querySelector('[data-submit-params-button]')

const selectedCourse = document.getElementById('courses')
const selectedTeebox = document.getElementById('teeboxes')
const selectedHoles = document.getElementById('holes')
const player1Name = document.getElementById('player1Input')
const player2Name = document.getElementById('player2Input')
const player3Name = document.getElementById('player3Input')
const player4Name = document.getElementById('player4Input')



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
    .then((data) => populateCourses(data.courses));
// */

let coursePromise;

function getCourse(courseId) {
    coursePromise = fetch(`https://golf-courses-api.herokuapp.com/courses/${courseId}`)
        .then((response) => response.json());
    coursePromise
        .then((data) => populateTeeboxes(data.data.holes[0].teeBoxes));
    return coursePromise;
}

function populateCourses(courses) {
    let html = '';
    courses.forEach(course => {
        html += `
            <option value="${course.id}">${course.name}</option>
        `;
    });
    document.getElementById('courses').innerHTML = html;
}

function populateTeeboxes(teeboxes) {
    let teeboxHtml = '';
    teeboxes.forEach((teebox, index) => {
        teeboxHtml += `
            <option value="${index}">${teebox.teeType}</option>
        `;
    })
    document.getElementById('teeboxes').innerHTML = teeboxHtml;
}

function populatePar(teeboxIndex) {
    coursePromise
        .then((data) => {
            console.log("Here: ", data, teeboxIndex)
        })
}

submitParamsButton.addEventListener('click', () => {

    let teeNumber = 0;

    if (player1Name.value == '' && player2Name.value == '' && player3Name.value == '' && player4Name.value == '') {
        console.log('No players entered??!1?!!1!')
    } else {

        if (selectedTeebox.value == 'black') {
            console.log('black')
            document.getElementById('cardTeeboxes').innerHTML = `
                <th>Black</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            `
            document.getElementById('cardTeeboxes').classList.add('black');
            teeNumber = 0;
        }
        if (selectedTeebox.value == 'blue') {
            console.log('blue')
            document.getElementById('cardTeeboxes').innerHTML = `
                <th>Blue</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            `
            document.getElementById('cardTeeboxes').classList.add('blue');
            teeNumber = 1;
        }
        if (selectedTeebox.value == 'white') {
            console.log('white')
            document.getElementById('cardTeeboxes').innerHTML = `
                <th>White</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            `
            document.getElementById('cardTeeboxes').classList.add('white');
            teeNumber = 2;
        }
        if (selectedTeebox.value == 'red') {
            console.log('red')
            document.getElementById('cardTeeboxes').innerHTML = `
                <th>Red</th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            `
            document.getElementById('cardTeeboxes').classList.add('red');
            teeNumber = 3;
        }

        if (selectedCourse.value == 'foxHollow') {
            console.log('fox')
            getCourse(18300)
            let par1 = getPar(18300, 1, teeNumber);
            document.getElementById('par1').innerText = par1;
            document.getElementById('courseName').innerText = 'Fox Hollow';
        }
        if (selectedCourse.value == 'thanksgivingPoint') {
            console.log('thank')
            getCourse(11819)
            document.getElementById('courseName').innerText = 'Thanksgiving Point';
        }
        if (selectedCourse.value == 'spanishOaks') {
            console.log('spain')
            getCourse(19002)
            document.getElementById('courseName').innerText = 'Spanish Oaks';
        }
    
        if (selectedHoles.value == '9') {
            console.log('nine')
            $('#topRow').append('<td class="totalCell">TOTAL</td>')
            $('#uptonine > tbody > tr:not(#topRow)').append('<td class="totalCell"></td>')
        }
        if (selectedHoles.value == '18') {
            console.log('eighteen')
            document.getElementById('scorecard').innerHTML += `
            <table id="uptoeighteen">
                <tr>
                    <th>Hole</th>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>IN</td>
                    <!-- If 18 holes are chosen -->
                    <td class="totalCell">TOTAL</td>
                </tr>
                <tr id="cardTeeboxes2">
                    <th>Color</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="totalCell"></td>
                </tr>
                <tr>
                    <th>Handicap</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="totalCell"></td>
                </tr>
                <tr id="player1Row2">
                    <td id="player1Name2">player1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="totalCell"></td>
                </tr>
                <tr id="player2Row2">
                    <td id="player2Name2">player2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="totalCell"></td>
                </tr>
                <tr id="player3Row2">
                    <td id="player3Name2">player3</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="totalCell"></td>
                </tr>
                <tr id="player4Row2">
                    <td id="player4Name2">player4</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="totalCell"></td>
                </tr>
                <tr>
                    <th>Par</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="totalCell"></td>
                </tr>
            </table>
            `;
            if (selectedTeebox.value == 'black') {
                console.log('black')
                document.getElementById('cardTeeboxes2').innerHTML = `
                    <th>Black</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="totalCell"></td>
                `
                document.getElementById('cardTeeboxes2').classList.add('black');
        
            }
            if (selectedTeebox.value == 'blue') {
                console.log('blue')
                document.getElementById('cardTeeboxes2').innerHTML = `
                    <th>Blue</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="totalCell"></td>
                `
                document.getElementById('cardTeeboxes2').classList.add('blue');
            }
            if (selectedTeebox.value == 'white') {
                console.log('white')
                document.getElementById('cardTeeboxes2').innerHTML = `
                    <th>White</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="totalCell"></td>
                `
                document.getElementById('cardTeeboxes2').classList.add('white');
            }
            if (selectedTeebox.value == 'red') {
                console.log('red')
                document.getElementById('cardTeeboxes2').innerHTML = `
                    <th>Red</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="totalCell"></td>
                `
                document.getElementById('cardTeeboxes2').classList.add('red');
            }

            if (player1Name.value != '') {
                document.getElementById('player1Name2').innerText = player1Name.value;
            } else {
                $('#player1Row2').remove();
            }
            if (player2Name.value != '') {
                document.getElementById('player2Name2').innerText = player2Name.value;
            } else {
                $('#player2Row2').remove();
            }
            if (player3Name.value != '') {
                document.getElementById('player3Name2').innerText = player3Name.value;
            } else {
                $('#player3Row2').remove();
            }
            if (player4Name.value != '') {
                document.getElementById('player4Name2').innerText = player4Name.value;
            } else {
                $('#player4Row2').remove();
            }
        }
    
        if (player1Name.value != '') {
            document.getElementById('player1Name').innerText = player1Name.value;
        } else {
            $('#player1Row').remove();
        }
        if (player2Name.value != '') {
            document.getElementById('player2Name').innerText = player2Name.value;
        } else {
            $('#player2Row').remove();
        }
        if (player3Name.value != '') {
            document.getElementById('player3Name').innerText = player3Name.value;
        } else {
            $('#player3Row').remove();
        }
        if (player4Name.value != '') {
            document.getElementById('player4Name').innerText = player4Name.value;
        } else {
            $('#player4Row').remove();
        }
        
        document.getElementById('preGameMessage').innerText = '';
        document.getElementById('entireEnterParams').innerHTML = '';
    }
})