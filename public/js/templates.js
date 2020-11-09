// COURSES PAGE ==========
let coursesPageHtml = `
    <div class="container-fluid">
        <div class="row">
            <div class="header col-12">
                <h2>Golf App</h2>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="courses col-12 p-0">
                <h1>Choose a Course</h1>
                <div data-fox-hollow class="course fox-hollow">
                    <h3>Fox Hollow</h3>
                </div>
                <div data-thanksgiving-point class="course thanksgiving-point">
                    <h3>Thanksgiving Point</h3>
                </div>
                <div data-spanish-oaks class="course spanish-oaks">
                    <h3>Spanish Oaks</h3>
                </div>
            </div>
        </div>
    </div>
`;
// =======================

// ENTERINFO PAGE ==========
let enterInfoPageHtml = `
    <div class="container-fluid">
        <div class="row">
            <div class="header col-12">
                <a href="./courses.html">&#8592;</a>
                <h2>Golf App</h2>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="courses col-12 p-0">
                <h1 class="enter-params">Enter your parameters</h1>
                <div class="select-wrap">
                    <label for="teeboxes">Choose your teebox:</label>
                    <select data-teebox name="teeboxes" id="teeboxes">
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="white">White</option>
                        <option value="red">Red</option>
                    </select>
                </div>
                <div class="select-wrap">
                    <label for="holes">How many holes?:</label>
                    <select data-number-of-holes name="holes" id="holes">
                        <option value="9">9</option>
                        <option value="18">18</option>
                    </select>
                </div>
                <div class="select-wrap">
                    <label>Player:</label>
                    <input data-player1-name type="text">
                </div>
                <div class="select-wrap">
                    <label>Player:</label>
                    <input data-player2-name type="text">
                </div>
                <div class="select-wrap">
                    <label>Player:</label>
                    <input data-player3-name type="text">
                </div>
                <div class="select-wrap">
                    <label>Player:</label>
                    <input data-player4-name type="text">
                </div>
                <div>
                    <button data-submit-params-button class="submit-params" type="submit">Submit</button>
                </div>
            </div>
        </div>
    </div>
`;
// =========================

// INDEX PAGE ==========
let indexPageHtml = `
    <div class="container-fluid">
        <div class="row">
            <div class="header col-12">
                <a href="./courses.html">&#8592;</a>
                <h2>Golf App</h2>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="scorecard col-12 p-0">
                <table class="uptonine">
                    <tr>
                        <th>Hole</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>OUT</td>
                        <!-- If only 9 holes are chosen -->
                        <!-- <td>TOTAL</td> -->
                    </tr>
                    <tr class="black">
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
                    </tr>
                    <tr class="blue">
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
                    </tr>
                    <tr class="white">
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
                    </tr>
                    <tr class="red">
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
                    </tr>
                    <tr>
                        <td id="player1Name">player1</td>
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
                    </tr>
                    <tr>
                        <td id="player2Name">player2</td>
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
                    </tr>
                    <tr>
                        <td id="player3Name">player3</td>
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
                    </tr>
                    <tr>
                        <td id="player4Name">player4</td>
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
                    </tr>
                </table>

                <table class="uptoeighteen">
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
                        <td>TOTAL</td>
                    </tr>
                    <tr class="black">
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
                        <td></td>
                    </tr>
                    <tr class="blue">
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
                        <td></td>
                    </tr>
                    <tr class="white">
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
                        <td></td>
                    </tr>
                    <tr class="red">
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
                        <td></td>
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
                        <td></td>
                    </tr>
                    <tr>
                        <td id="player1Name">player1</td>
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
                        <td></td>
                    </tr>
                    <tr>
                        <td id="player2Name">player2</td>
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
                        <td></td>
                    </tr>
                    <tr>
                        <td id="player3Name">player3</td>
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
                        <td></td>
                    </tr>
                    <tr>
                        <td id="player4Name">player4</td>
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
                        <td></td>
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
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
`;
// ====================