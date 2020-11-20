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

        $('#player1Row td:last-child').attr('id', 'p1Total')
        $('#player1Row td:last-child').css('font-weight', 'bold')
        $('#player2Row td:last-child').attr('id', 'p2Total')
        $('#player2Row td:last-child').css('font-weight', 'bold')
        $('#player3Row td:last-child').attr('id', 'p3Total')
        $('#player3Row td:last-child').css('font-weight', 'bold')
        $('#player4Row td:last-child').attr('id', 'p4Total')
        $('#player4Row td:last-child').css('font-weight', 'bold')
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
                <td></td>
                <td class="totalCell"></td>
            </tr>
            <tr id="player1Row2" class="playerRow">
                <td id="player1Name2">player1</td>
                <td id="p1h10"></td>
                <td id="p1h11"></td>
                <td id="p1h12"></td>
                <td id="p1h13"></td>
                <td id="p1h14"></td>
                <td id="p1h15"></td>
                <td id="p1h16"></td>
                <td id="p1h17"></td>
                <td id="p1h18"></td>
                <td class="noEdit" id="p1In"></td>
                <td class="totalCell"></td>
            </tr>
            <tr id="player2Row2" class="playerRow">
                <td id="player2Name2">player2</td>
                <td id="p2h10"></td>
                <td id="p2h11"></td>
                <td id="p2h12"></td>
                <td id="p2h13"></td>
                <td id="p2h14"></td>
                <td id="p2h15"></td>
                <td id="p2h16"></td>
                <td id="p2h17"></td>
                <td id="p2h18"></td>
                <td class="noEdit" id="p2In"></td>
                <td class="totalCell"></td>
            </tr>
            <tr id="player3Row2" class="playerRow">
                <td id="player3Name2">player3</td>
                <td id="p3h10"></td>
                <td id="p3h11"></td>
                <td id="p3h12"></td>
                <td id="p3h13"></td>
                <td id="p3h14"></td>
                <td id="p3h15"></td>
                <td id="p3h16"></td>
                <td id="p3h17"></td>
                <td id="p3h18"></td>
                <td class="noEdit" id="p3In"></td>
                <td class="totalCell"></td>
            </tr>
            <tr id="player4Row2" class="playerRow">
                <td id="player4Name2">player4</td>
                <td id="p4h10"></td>
                <td id="p4h11"></td>
                <td id="p4h12"></td>
                <td id="p4h13"></td>
                <td id="p4h14"></td>
                <td id="p4h15"></td>
                <td id="p4h16"></td>
                <td id="p4h17"></td>
                <td id="p4h18"></td>
                <td class="noEdit" id="p4In"></td>
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

        $('#player1Row2 td:last-child').attr('id', 'p1Total')
        $('#player1Row2 td:last-child').css('font-weight', 'bold')
        $('#player2Row2 td:last-child').attr('id', 'p2Total')
        $('#player2Row2 td:last-child').css('font-weight', 'bold')
        $('#player3Row2 td:last-child').attr('id', 'p3Total')
        $('#player3Row2 td:last-child').css('font-weight', 'bold')
        $('#player4Row2 td:last-child').attr('id', 'p4Total')
        $('#player4Row2 td:last-child').css('font-weight', 'bold')

        $('#player1Row2 td:nth-last-child(2)').css('font-weight', 'bold')
        $('#player2Row2 td:nth-last-child(2)').css('font-weight', 'bold')
        $('#player3Row2 td:nth-last-child(2)').css('font-weight', 'bold')
        $('#player4Row2 td:nth-last-child(2)').css('font-weight', 'bold')

        $('#player1Row td:last-child').attr('id', 'p1Out')
        $('#player1Row td:last-child').css('font-weight', 'bold')
        $('#player2Row td:last-child').attr('id', 'p2Out')
        $('#player2Row td:last-child').css('font-weight', 'bold')
        $('#player3Row td:last-child').attr('id', 'p3Out')
        $('#player3Row td:last-child').css('font-weight', 'bold')
        $('#player4Row td:last-child').attr('id', 'p4Out')
        $('#player4Row td:last-child').css('font-weight', 'bold')


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

            let outYards = 0;
            let outPar = 0;
            let inYards = 0;
            let inPar = 0;

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
            }
            document.getElementById('totalYards').innerText = totalYards;
            document.getElementById('totalPar').innerText = totalPar;

            // Finds the OUT totals
            for (let i = 0; i < 9; i++) {
                const currentHole = data.data.holes[i];
                const holeTeebox = currentHole.teeBoxes[teeboxIndex];
                const holePar = holeTeebox.par;
                const holeYards = holeTeebox.yards;

                outYards += holeYards;
                outPar += holePar;
            }

            // Finds the IN totals
            for (let i = 9; i < 18; i++) {
                const currentHole = data.data.holes[i];
                const holeTeebox = currentHole.teeBoxes[teeboxIndex];
                const holePar = holeTeebox.par;
                const holeYards = holeTeebox.yards;

                inYards += holeYards;
                inPar += holePar;
            }

            // Applies OUT/IN totals
            if (numberOfHoles == 18) {
                document.getElementById('outYards').innerText = outYards;
                document.getElementById('outPar').innerText = outPar;
                document.getElementById('inYards').innerText = inYards;
                document.getElementById('inPar').innerText = inPar;
            }
            // const teeColor = data.data.holes[0].teeboxes[teeboxIndex].teeHexColor
            // document.getElementById('cardTeeboxes').style.backgroundColor = teeColor;
        })
}


function totalPlayers() {
    let howManyHoles = 0;
    if (selectedHoles.value == 9) {
        howManyHoles = 9
    } else if (selectedHoles.value == 18) {
        howManyHoles = 18
    }

    // Test to find letters entered
    let test;
    if (player1Name.value != '') {
        for (let i = 0; i < howManyHoles; i++) {
            const currentScore = $(`#p1h${i + 1}`).html();
            if (/[^0-9]/.test(currentScore)) {
                test = true;
                break;
            } else {
                test = false;
            }
        }
    }

    if (test) {
        $('.playerRow .totalCell').text('');
        $('#scorecard').append('<h6 class="error-text">Only numbers are accepted</h6>')
    } else {
        $('.error-text').remove();
        // Finds total scores
        if (player1Name.value != '') {
            let player1Total = 0;
            for (let i = 0; i < howManyHoles; i++) {
                const currentScore = $(`#p1h${i + 1}`).html();
                player1Total += Number(currentScore);
            }
            document.getElementById('p1Total').innerText = player1Total;
        }
        if (player2Name.value != '') {
            let player2Total = 0;
            for (let i = 0; i < howManyHoles; i++) {
                const currentScore = $(`#p2h${i + 1}`).html();
                player2Total += Number(currentScore);
            }
            document.getElementById('p2Total').innerText = player2Total;
        }
        if (player3Name.value != '') {
            let player3Total = 0;
            for (let i = 0; i < howManyHoles; i++) {
                const currentScore = $(`#p3h${i + 1}`).html();
                player3Total += Number(currentScore);
            }
            document.getElementById('p3Total').innerText = player3Total;
        }
        if (player4Name.value != '') {
            let player4Total = 0;
            for (let i = 0; i < howManyHoles; i++) {
                const currentScore = $(`#p4h${i + 1}`).html();
                player4Total += Number(currentScore);
            }
            document.getElementById('p4Total').innerText = player4Total;
        }

        if (howManyHoles == 18) {
            // Finds out scores
            if (player1Name.value != '') {
                let player1Out = 0;
                for (let i = 0; i < 9; i++) {
                    const currentScore = $(`#p1h${i + 1}`).html();
                    player1Out += Number(currentScore);
                }
                document.getElementById('p1Out').innerText = player1Out;
            }
            if (player2Name.value != '') {
                let player2Out = 0;
                for (let i = 0; i < 9; i++) {
                    const currentScore = $(`#p2h${i + 1}`).html();
                    player2Out += Number(currentScore);
                }
                document.getElementById('p2Out').innerText = player2Out;
            }
            if (player3Name.value != '') {
                let player3Out = 0;
                for (let i = 0; i < 9; i++) {
                    const currentScore = $(`#p3h${i + 1}`).html();
                    player3Out += Number(currentScore);
                }
                document.getElementById('p3Out').innerText = player3Out;
            }
            if (player4Name.value != '') {
                let player4Out = 0;
                for (let i = 0; i < 9; i++) {
                    const currentScore = $(`#p4h${i + 1}`).html();
                    player4Out += Number(currentScore);
                }
                document.getElementById('p4Out').innerText = player4Out;
            }

            // Finds in scores
            if (player1Name.value != '') {
                let player1In = 0;
                for (let i = 9; i < 18; i++) {
                    const currentScore = $(`#p1h${i + 1}`).html();
                    player1In += Number(currentScore);
                }
                document.getElementById('p1In').innerText = player1In;
            }
            if (player2Name.value != '') {
                let player2In = 0;
                for (let i = 9; i < 18; i++) {
                    const currentScore = $(`#p2h${i + 1}`).html();
                    player2In += Number(currentScore);
                }
                document.getElementById('p2In').innerText = player2In;
            }
            if (player3Name.value != '') {
                let player3In = 0;
                for (let i = 9; i < 18; i++) {
                    const currentScore = $(`#p3h${i + 1}`).html();
                    player3In += Number(currentScore);
                }
                document.getElementById('p3In').innerText = player3In;
            }
            if (player4Name.value != '') {
                let player4In = 0;
                for (let i = 9; i < 18; i++) {
                    const currentScore = $(`#p4h${i + 1}`).html();
                    player4In += Number(currentScore);
                }
                document.getElementById('p4In').innerText = player4In;
            }
        }
    }
}


submitParamsButton.addEventListener('click', () => {

    if (player1Name.value == '' && player2Name.value == '' && player3Name.value == '' && player4Name.value == '') {
        console.log('No players entered??!1?!!1!')
    } else if (selectedCourse.value == '' || selectedTeebox.value == '' || selectedHoles.value == '') {
        console.log('Must select a course, teebox, and hole!!!1!! >:(')
    } else {

        let numberHoles = 0; // Passed into populateCard()
        if (selectedHoles.value == 9) {
            numberHoles = 9
        } else if (selectedHoles.value == 18) {
            numberHoles = 18
        }

        checkHoles();
        populateCard(selectedTeebox.value, numberHoles);
    
        // Enters names passed in as players
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

        // Contenteditable cells except for name and totals
        $('.playerRow td').attr('contenteditable', 'true')
        $('.playerRow td:first-child').attr('contenteditable', 'false')
        $('.playerRow td:last-child').attr('contenteditable', 'false')
        $('.noEdit').attr('contenteditable', 'false')
        
        // Adds submit button to total scores
        $('#pageContent').append('<button class="finish-button" onclick="totalPlayers()">Finish</button>')

        // Removes enter info area
        document.getElementById('preGameMessage').innerText = '';
        document.getElementById('entireEnterParams').innerHTML = '';
    }
})