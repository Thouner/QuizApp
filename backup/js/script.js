let questions = [{
        'question': 'Wie viele Streifen sind auf der US-Flagge?',
        'answer1': '12',
        'answer2': '13',
        'answer3': '14',
        'answer4': '15',
        'rightAnswer': 2,
        'wrongAnswer': [1, 4]
    },
    {
        'question': 'Welches Land hat die meisten Inseln in der Welt?',
        'answer1': 'Norwegen',
        'answer2': 'Finnland',
        'answer3': 'Schweden',
        'answer4': 'Kanada',
        'rightAnswer': 3,
        'wrongAnswer': [1, 2]
    },
    {
        'question': 'Nenne die meistverkaufte Buchreihe des 21. Jahrhunderts?',
        'answer1': 'James Bond',
        'answer2': 'Star Wars',
        'answer3': 'Fifty Shades of Grey',
        'answer4': 'Harry Potter',
        'rightAnswer': 4,
        'wrongAnswer': [2, 3]
    },
    {
        'question': 'Welcher Künstler hat die Decke der Sixtinischen Kapelle in Rom gemalt?',
        'answer1': 'Michelangelo Buonarroti',
        'answer2': 'Vincent van Gogh',
        'answer3': 'Leonardo da Vinci',
        'answer4': 'Pablo Picasso',
        'rightAnswer': 1,
        'wrongAnswer': [2, 4]
    },
    {
        'question': 'Was ereignete sich am 21. Juli 1969?',
        'answer1': 'Apollo 11 landete auf dem Mond',
        'answer2': 'Willy Brandt wird Bundeskanzler',
        'answer3': 'Richard Nixon wird Präsident der USA',
        'answer4': 'Apollo 12 landet auf dem Mond',
        'rightAnswer': 1,
        'wrongAnswer': [3, 4]
    },
    {
        'question': 'Wie viele Tasten hat ein klassisches Klavier?',
        'answer1': '85',
        'answer2': '86',
        'answer3': '87',
        'answer4': '88',
        'rightAnswer': 4,
        'wrongAnswer': [1, 3]
    },
    {
        'question': 'Aus welcher Stadt kommen die Beatles?',
        'answer1': 'Leeds',
        'answer2': 'London',
        'answer3': 'Liverpool',
        'answer4': 'Leicester',
        'rightAnswer': 3,
        'wrongAnswer': [1, 2]
    },
    {
        'question': 'Wann wurde Netflix gegründet?',
        'answer1': '1997',
        'answer2': '2001',
        'answer3': '2005',
        'answer4': '2009',
        'rightAnswer': 1,
        'wrongAnswer': [2, 4]
    },
    {
        'question': 'Welches ist das kleinste Land der Welt?',
        'answer1': 'San Marino',
        'answer2': 'Vatikanstadt',
        'answer3': 'Monaco',
        'answer4': 'Liechtenstein',
        'rightAnswer': 2,
        'wrongAnswer': [3, 4]
    },
    {
        'question': 'Wo fanden die ersten modernen Olympischen Spiele statt?',
        'answer1': 'St. Louis',
        'answer2': 'Paris',
        'answer3': 'Athen',
        'answer4': 'London',
        'rightAnswer': 3,
        'wrongAnswer': [1, 4]
    }
];

let backgroundcount = 0;
let quizcount = 0;
let correntChooseAnswer = 0;
let fithyfithy = true;
let google = true;
let rightAudio = new Audio('sound/rightsound.mp3');
let wrondAudio = new Audio('sound/wrongsound.mp3');


function headerRender() {
    let countbackground = 'widthbg-' + backgroundcount * 10;
    document.getElementById('navbarIdContainer').innerHTML = headerRenderText(countbackground);
    if (backgroundcount === 0) {
        document.getElementById('quizCounter').classList.add('d-none')
    } else {
        document.getElementById('quizCounter').classList.remove('d-none')
    }
}


function headerRenderText(countbackground) {
    return /* html */ `
    <nav class="navbar navbar-light b-color-blue nav-maincontainer">
        <div class="nav-container ${countbackground}">
            <a onclick="beginnRender()" class="navbar-brand" href="#">
                <div><img src="icon/question.png" alt="" width="30" height="24" class="d-inline-block align-text-top">QuizApp</div>
            </a>
        </div>
        <div id="quizCounter" class="countquiz">${backgroundcount} / 10</div>
    </nav>
`;
}


function earthRender() {
    document.getElementById('earthIdContainer').innerHTML = /* html */ `
    <div class="around-container">
        <section>
            <div class="earth"></div>
            <div class="circle">
                <span style="--i:1;">Q</span>
                <span style="--i:2;">u</span>
                <span style="--i:3;">i</span>
                <span style="--i:4;">z</span>
                <span style="--i:5;">A</span>
                <span style="--i:6;">p</span>
                <span style="--i:7;">p</span>
                <span style="--i:8;">-</span>
                <span style="--i:9;">A</span>
                <span style="--i:10;">r</span>
                <span style="--i:11;">o</span>
                <span style="--i:12;">u</span>
                <span style="--i:13;">n</span>
                <span style="--i:14;">d</span>
                <span style="--i:15;">-</span>
                <span style="--i:16;">T</span>
                <span style="--i:17;">h</span>
                <span style="--i:18;">e</span>
                <span style="--i:19;">-</span>
                <span style="--i:20;">E</span>
                <span style="--i:21;">a</span>
                <span style="--i:22;">r</span>
                <span style="--i:23;">t</span>
                <span style="--i:24;">h</span>
                <span style="--i:25;">-</span>
            </div>
        </section>
    </div>
    `;
}


function beginnRender() {
    backgroundcount = 0;
    quizcount = 0;
    document.getElementById('questionIdContainer').innerHTML = beginnRenderText()
    headerRender();
}


function beginnRenderText() {
    return /* html */ `
    <div class="question-container d-flex j-center-a-center">
        <div class="card beginn-card" style="width: 18rem;">
            <img src="icon/question.png" class="card-img-top" alt="...">
            <div class="card-body beginn-container">
                <h5 class="card-title">Wollen wir </h5>
                <button onclick="startGame()" href="#" class="btn btn-primary">Beginnen?</button>
            </div>
        </div>
    </div>
`;
}


function startGame() {
    backgroundcount = 1;
    correntChooseAnswer = 0;
    questionRender();
    headerRender();
}


function questionRender() {
    document.getElementById('questionIdContainer').innerHTML = /* html */ `
    <div class="d-flex j-center">
        <div class="mainquestion-container">
            <div class="question-container">
            <div class="card question-card">
                <div class="card-body question-box p-relativ">
                    <span>${questions[quizcount]['question']}</span>
                    <div class="arrow">
                        <img  onclick="openJoker()"  src="icon/arrow down.png" alt="">
                        <div class="jokercontainer">
                            <button id="jokerId1" class="d-none" type="button" onclick="getValue()"><img src="icon/google.png" alt="..."></button>
                            <button id="jokerId2" class="d-none" type="button" onclick="get5050()"><b>50:50</b></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row row-cols-1 row-cols-md-2 g-4 ">
                <div id="colA" class="col ">
                    <div class="mycard a-answer">
                        <div id="answerBox1" onclick="chooseAnswer(1)" class="mycard-body border-outset-blue ">
                            <h5 id="hId1" class="card-title">Antwort A</h5>
                            <p id="pId1" class="card-text">${questions[quizcount]['answer1']}</p>
                        </div>
                    </div>
                </div>
                <div id="colB" class="col ">
                    <div class="mycard b-answer">
                        <div id="answerBox2" onclick="chooseAnswer(2)" class="mycard-body border-outset-blue ">
                            <h5 id="hId2" class="card-title">Antwort B</h5>
                            <p id="pId2" class="card-text">${questions[quizcount]['answer2']}</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="mycard c-answer">
                        <div id="answerBox3" onclick="chooseAnswer(3)" class="mycard-body border-outset-blue">
                            <h5 id="hId3" class="card-title">Antwort C</h5>
                            <p id="pId3" class="card-text">${questions[quizcount]['answer3']}</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="mycard d-answer">
                        <div id="answerBox4" onclick="chooseAnswer(4)" class="mycard-body border-outset-blue">
                            <h5 id="hId4" class="card-title">Antwort D</h5>
                            <p id="pId4" class="card-text">${questions[quizcount]['answer4']}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}


function nextQuestion() {
    quizcount = quizcount + 1;
    backgroundcount = backgroundcount + 1;
    if (quizcount === 10) {
        endOfGame();
    } else {
        questionRender();
        headerRender();
    }
}


function chooseAnswer(number) {
    let answerid = 'answerBox' + number;
    let correntAnswer = 'answerBox' + questions[quizcount]['rightAnswer'];
    document.getElementById(answerid).classList.remove('border-outset-blue');
    if (questions[quizcount]['rightAnswer'] == number) {
        rightAnswer(answerid);
    } else {
        wrongAnswer(answerid);
    }
    selectRightAnswer(correntAnswer);
}


function selectRightAnswer(correntAnswer) {
    document.getElementById(correntAnswer).classList.add('b-color-green');
    document.getElementById(correntAnswer).classList.add('color-white');
    document.getElementById(correntAnswer).classList.add('textshadowblack');
    setTimeout(nextQuestion, 1500);
}


function rightAnswer(answerid) {
    document.getElementById(answerid).classList.add('border-outset-green');
    correntChooseAnswer = correntChooseAnswer + 1;
    rightAudio.volume = 0.3;
    rightAudio.play();
}


function wrongAnswer(answerid) {
    document.getElementById(answerid).classList.add('border-outset-red');
    wrondAudio.volume = 0.1;
    wrondAudio.play();
}


function endOfGame() {
    document.getElementById('questionIdContainer').innerHTML = /* html */ `
    <div class="question-container d-flex j-center-a-center">
            <div class="card beginn-card" style="width: 18rem;">
                <img src="icon/question.png" class="card-img-top" alt="...">
                <div class="card-body beginn-container">
                    <h5 class="card-title">Du hast ${correntChooseAnswer} Richtige Antworten</h5>
                    <button onclick="startGame()" href="#" class="btn btn-primary">Nochmal?</button>
                </div>
            </div>
        </div>
    `;
    quizcount = 0;
}


function openJoker() {
    document.getElementById('jokerId1').classList.toggle('d-none');
    document.getElementById('jokerId2').classList.toggle('d-none');
    document.getElementById('colA').classList.toggle('zindex-1');
    document.getElementById('colB').classList.toggle('zindex-1');
}


function getValue() {
    if (google === true) {
        let myWindow;
        myWindow = window.open("http://www.google.com?query=" + questions[quizcount]['question'], "_blank");
        closeJoker();
    } else { alert('schon benutzt!') }
    google = false;
}


function get5050() {
    if (fithyfithy === true) {
        let number1 = questions[quizcount]['wrongAnswer'][0] + '';
        let wrong1 = 'pId' + number1;
        let number2 = questions[quizcount]['wrongAnswer'][1] + '';
        let wrong2 = 'pId' + number2;
        document.getElementById(wrong1).classList.add('d-none');
        document.getElementById(wrong2).classList.add('d-none');
        closeJoker();
    } else { alert('schon benutzt!') }
    fithyfithy = false;
}


function closeJoker() {
    document.getElementById('colA').classList.remove('zindex-1');
    document.getElementById('colB').classList.remove('zindex-1');
    document.getElementById('jokerId1').classList.add('d-none');
    document.getElementById('jokerId2').classList.add('d-none');
}