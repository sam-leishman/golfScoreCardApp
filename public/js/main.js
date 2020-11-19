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
    let html = `<option value=""></option>`;
    courses.forEach(course => {
        html += `
            <option value="${course.id}">${course.name}</option>
        `;
    });
    document.getElementById('courses').innerHTML = html;
}

function checkHoles() {
    if (selectedHoles.value == '9') {
        // removes OUT column ===============
        $('#topRow td:last-child').remove();
        $('#cardTeeboxes td:last-child').remove();
        $('#handicapRow td:last-child').remove();
        $('.playerRow td:last-child').remove();
        $('#parRow td:last-child').remove();
        // ==================================

        $('#topRow').append('<td class="totalCell"><b>TOTAL</b></td>')
        $('#uptonine > tbody > tr:not(#topRow)').append('<td class="totalCell"></td>')
        $('#cardTeeboxes td:last-child').attr('id', 'totalYards') // Gives ID of totalYards to the cell in the total column
        $('#parRow td:last-child').attr('id', 'totalPar')
        $('#handicapRow td:last-child').attr('id', 'totalHcp')
    }
    if (selectedHoles.value == '18') {
        document.getElementById('scorecard').innerHTML += `
        <table id="uptoeighteen">
            <tr>
                <th>Hole</th>
                <td><b>10</b></td>
                <td><b>11</b></td>
                <td><b>12</b></td>
                <td><b>13</b></td>
                <td><b>14</b></td>
                <td><b>15</b></td>
                <td><b>16</b></td>
                <td><b>17</b></td>
                <td><b>18</b></td>
                <td><b>IN</b></td>
                <!-- If 18 holes are chosen -->
                <td class="totalCell"><b>TOTAL</b></td>
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
                <td id="inYards"></td>
                <td class="totalCell"></td>
            </tr>
            <tr id="handicapRow2">
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
                <td id="inHcp"></td>
                <td class="totalCell"></td>
            </tr>
            <tr id="player1Row2" class="playerRow">
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
            <tr id="player2Row2" class="playerRow">
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
            <tr id="player3Row2" class="playerRow">
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
            <tr id="player4Row2" class="playerRow">
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
            <tr id="parRow2">
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
                <td id="inPar"></td>
                <td class="totalCell"></td>
            </tr>
        </table>
        `;

        $('#cardTeeboxes2 td:last-child').attr('id', 'totalYards') // Gives ID of totalYards to the cell in the total column
        $('#parRow2 td:last-child').attr('id', 'totalPar')
        $('#handicapRow2 td:last-child').attr('id', 'totalHcp')


        if (player1Name.value != '') {
            document.getElementById('player1Name2').innerText = player1Name.value;
            document.getElementById('player1Row2').style.color = 'blue';
        } else {
            $('#player1Row2').remove();
        }
        if (player2Name.value != '') {
            document.getElementById('player2Name2').innerText = player2Name.value;
            document.getElementById('player2Row2').style.color = 'blue';
        } else {
            $('#player2Row2').remove();
        }
        if (player3Name.value != '') {
            document.getElementById('player3Name2').innerText = player3Name.value;
            document.getElementById('player3Row2').style.color = 'blue';
        } else {
            $('#player3Row2').remove();
        }
        if (player4Name.value != '') {
            document.getElementById('player4Name2').innerText = player4Name.value;
            document.getElementById('player4Row2').style.color = 'blue';
        } else {
            $('#player4Row2').remove();
        }
    }
}

function populateTeeboxes(teeboxes) {
    let teeboxHtml = `<option value=""></option>`;
    teeboxes.forEach((teebox, index) => {
        teeboxHtml += `
            <option value="${index}">${teebox.teeType}</option>
        `;
    })
    document.getElementById('teeboxes').innerHTML = teeboxHtml;
}

function populateCard(teeboxIndex, numberOfHoles) {
    coursePromise
        .then((data) => {

            let totalYards = 0;
            let totalPar = 0;
            let totalHcp = 0;

            let outYards = 0;
            let outPar = 0;
            let outHcp = 0;
            let inYards = 0;
            let inPar = 0;
            let inHcp = 0;

            for (let i = 0; i < numberOfHoles; i++) {
                const currentHole = data.data.holes[i];
                const holeTeebox = currentHole.teeBoxes[teeboxIndex];
                const holePar = holeTeebox.par;
                const holeYards = holeTeebox.yards;
                const holeHcp = holeTeebox.hcp;
                document.getElementById(`par${currentHole.hole}`).innerText = holePar;
                document.getElementById(`yards${currentHole.hole}`).innerText = holeYards;
                document.getElementById(`hcp${currentHole.hole}`).innerText = holeHcp;

                totalYards += holeYards;
                totalPar += holePar;
                totalHcp += holeHcp;
            }
            document.getElementById('totalYards').innerText = totalYards;
            document.getElementById('totalPar').innerText = totalPar;
            document.getElementById('totalHcp').innerText = totalHcp;

            // Finds the OUT totals
            for (let i = 0; i < 9; i++) {
                const currentHole = data.data.holes[i];
                const holeTeebox = currentHole.teeBoxes[teeboxIndex];
                const holePar = holeTeebox.par;
                const holeYards = holeTeebox.yards;
                const holeHcp = holeTeebox.hcp;

                outYards += holeYards;
                outPar += holePar;
                outHcp += holeHcp;
            }

            // Finds the IN totals
            for (let i = 9; i < 18; i++) {
                const currentHole = data.data.holes[i];
                const holeTeebox = currentHole.teeBoxes[teeboxIndex];
                const holePar = holeTeebox.par;
                const holeYards = holeTeebox.yards;
                const holeHcp = holeTeebox.hcp;

                inYards += holeYards;
                inPar += holePar;
                inHcp += holeHcp;
            }

            // Applies OUT/IN totals
            if (numberOfHoles == 18) {
                document.getElementById('outYards').innerText = outYards;
                document.getElementById('outPar').innerText = outPar;
                document.getElementById('outHcp').innerText = outHcp;
                document.getElementById('inYards').innerText = inYards;
                document.getElementById('inPar').innerText = inPar;
                document.getElementById('inHcp').innerText = inHcp;
            }
            // const teeColor = data.data.holes[0].teeboxes[teeboxIndex].teeHexColor
            // document.getElementById('cardTeeboxes').style.backgroundColor = teeColor;
        })
}

submitParamsButton.addEventListener('click', () => {

    if (player1Name.value == '' && player2Name.value == '' && player3Name.value == '' && player4Name.value == '') {
        console.log('No players entered??!1?!!1!')
    } else if (selectedCourse.value == '' || selectedTeebox.value == '' || selectedHoles.value == '') {
        console.log('Must select a course, teebox, and hole!!!1!! >:(')
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
            document.getElementById('player1Row').style.color = 'blue';
        } else {
            $('#player1Row').remove();
        }
        if (player2Name.value != '') {
            document.getElementById('player2Name').innerText = player2Name.value;
            document.getElementById('player2Row').style.color = 'blue';
        } else {
            $('#player2Row').remove();
        }
        if (player3Name.value != '') {
            document.getElementById('player3Name').innerText = player3Name.value;
            document.getElementById('player3Row').style.color = 'blue';
        } else {
            $('#player3Row').remove();
        }
        if (player4Name.value != '') {
            document.getElementById('player4Name').innerText = player4Name.value;
            document.getElementById('player4Row').style.color = 'blue';
        } else {
            $('#player4Row').remove();
        }
        
        document.getElementById('preGameMessage').innerText = '';
        document.getElementById('entireEnterParams').innerHTML = '';
    }
})