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
let allCoursesPromise = fetch('https://golf-courses-api.herokuapp.com/courses')
    .then((response) => response.json());
allCoursesPromise
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
    let html = `<option></option>`;
    courses.forEach(course => {
        html += `
            <option value="${course.id}">${course.name}</option>
        `;
    });
    document.getElementById('courses').innerHTML = html;
}

function checkHoles() {
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
                <th>Yards</th>
                <td id="yards10"></td>
                <td id="yards11"></td>
                <td id="yards12"></td>
                <td id="yards13"></td>
                <td id="yards14"></td>
                <td id="yards15"></td>
                <td id="yards16"></td>
                <td id="yards17"></td>
                <td id="yards18"></td>
                <td></td>
                <td class="totalCell"></td>
            </tr>
            <tr>
                <th>Handicap</th>
                <td id="hcp10"></td>
                <td id="hcp11"></td>
                <td id="hcp12"></td>
                <td id="hcp13"></td>
                <td id="hcp14"></td>
                <td id="hcp15"></td>
                <td id="hcp16"></td>
                <td id="hcp17"></td>
                <td id="hcp18"></td>
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
                <td id="par10"></td>
                <td id="par11"></td>
                <td id="par12"></td>
                <td id="par13"></td>
                <td id="par14"></td>
                <td id="par15"></td>
                <td id="par16"></td>
                <td id="par17"></td>
                <td id="par18"></td>
                <td></td>
                <td class="totalCell"></td>
            </tr>
        </table>
        `;
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
}

function populateTeeboxes(teeboxes) {
    let teeboxHtml = `<option></option>`;
    teeboxes.forEach((teebox, index) => {
        teeboxHtml += `
            <option value="${index}">${teebox.teeType}</option>
        `;
    })
    // console.log(teeboxes[0].par) // Par
    document.getElementById('teeboxes').innerHTML = teeboxHtml;
}

function populateCard(teeboxIndex, numberOfHoles) {
    coursePromise
        .then((data) => {
            console.log(numberOfHoles)
            for (let i = 0; i < numberOfHoles; i++) {
                const currentHole = data.data.holes[i];
                const holeTeebox = currentHole.teeBoxes[teeboxIndex];
                console.log(holeTeebox)
                const holePar = holeTeebox.par;
                const holeYards = holeTeebox.yards;
                const holeHcp = holeTeebox.hcp;
                document.getElementById(`par${currentHole.hole}`).innerText = holePar;
                document.getElementById(`yards${currentHole.hole}`).innerText = holeYards;
                document.getElementById(`hcp${currentHole.hole}`).innerText = holeHcp;
            }
            console.log("Here: ", data.data.holes, teeboxIndex)
            // const teeColor = data.data.holes[0].teeboxes[teeboxIndex].teeHexColor
            // document.getElementById('cardTeeboxes').style.backgroundColor = teeColor;
        })
}

submitParamsButton.addEventListener('click', () => {

    if (player1Name.value == '' && player2Name.value == '' && player3Name.value == '' && player4Name.value == '') {
        console.log('No players entered??!1?!!1!')
    } else {

        let numberHoles = 0;
        if (selectedHoles.value == 9) {
            numberHoles = 9
        } else if (selectedHoles.value == 18) {
            numberHoles = 18
        }

        checkHoles();
        populateCard(selectedTeebox.value, numberHoles);
    
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