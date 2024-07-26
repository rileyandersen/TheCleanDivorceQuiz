const questions = [
    {
        question: "How long have you been feeling dissatisfied in the relationship?",
        answers: ["Less than 6 months", "6 months to 1 year", "1 to 2 years", "More than 2 years"],
        section: "Relationship Dissatisfaction"
    },
    {
        question: "How often do you and your spouse argue?",
        answers: ["Rarely", "Occasionally", "Frequently", "Constantly"],
        section: "Relationship Dissatisfaction"
    },
    {
        question: "Do you feel like you are being heard and respected by your spouse?",
        answers: ["Always", "Most of the time", "Sometimes", "Rarely"],
        section: "Relationship Dissatisfaction"
    },
    {
        question: "What have you done to try to improve the relationship?",
        answers: ["Communicated more openly", "Sought professional help", "Spent more quality time together", "Tried, but nothing seems to work"],
        section: "Efforts to Improve the Relationship"
    },
    {
        question: "Do you feel like there is still a chance to work things out?",
        answers: ["Yes, definitely", "Maybe, with effort", "Uncertain", "No, not really"],
        section: "Efforts to Improve the Relationship"
    },
    {
        question: "Are you willing to put in the effort to reconcile your differences?",
        answers: ["Yes, fully committed", "Yes, but unsure how", "Somewhat willing", "Not willing"],
        section: "Efforts to Improve the Relationship"
    },
    {
        question: "Are you able to communicate openly and honestly with your spouse?",
        answers: ["Yes, always", "Most of the time", "Sometimes", "Rarely"],
        section: "Communication and Trust"
    },
    {
        question: "Do you feel like there is a lack of trust in the relationship?",
        answers: ["No, we trust each other completely", "Some trust issues exist", "Significant trust issues", "Complete lack of trust"],
        section: "Communication and Trust"
    },
    {
        question: "Are there any unresolved issues between you and your spouse?",
        answers: ["None", "A few minor issues", "Several significant issues", "Many unresolved issues"],
        section: "Communication and Trust"
    },
    {
        question: "Do you feel controlled or isolated by your partner?",
        answers: ["Never", "Occasionally", "Frequently", "Always"],
        section: "Domestic Violence Screening"
    },
    {
        question: "Does your partner ever try to control you by threatening to hurt you or your family?",
        answers: ["Never", "Rarely", "Sometimes", "Often"],
        section: "Domestic Violence Screening"
    },
    {
        question: "Has anyone close to you ever threatened or hurt you?",
        answers: ["Never", "Once or twice", "A few times", "Frequently"],
        section: "Domestic Violence Screening"
    },
    {
        question: "Does your partner ever hit, kick, hurt, or threaten you?",
        answers: ["Never", "Rarely", "Sometimes", "Often"],
        section: "Domestic Violence Screening"
    },
    {
        question: "Do you feel like there is any chance you can still be happy in the marriage?",
        answers: ["Yes, definitely", "Possibly, with changes", "Uncertain", "No, not anymore"],
        section: "Decision to Divorce"
    },
    {
        question: "Have you talked to a trusted friend or family member about your marriage and your decision to divorce?",
        answers: ["Yes, and found it helpful", "Yes, but it didn't help", "No, but considering it", "No, and not planning to"],
        section: "Decision to Divorce"
    },
    {
        question: "Have you tried counseling to resolve marital issues?",
        answers: ["Yes, it was helpful", "Yes, but it didn't help", "No, but considering it", "No, and not planning to"],
        section: "Decision to Divorce"
    },
    {
        question: "Can you afford to go through with a divorce?",
        answers: ["Yes, I am financially prepared", "I think so, but unsure", "Not really, need more planning", "No, I cannot afford it"],
        section: "Post-Divorce Considerations"
    },
    {
        question: "Have you discussed your decision with your spouse?",
        answers: ["Yes, we both agree", "Yes, but we disagree", "Not yet, planning to", "No, and unsure how to"],
        section: "Post-Divorce Considerations"
    },
    {
        question: "Have you considered the effect of a divorce on the children?",
        answers: ["Yes, and have a plan", "Yes, but need more guidance", "Somewhat, but not in detail", "No, not yet"],
        section: "Post-Divorce Considerations"
    },
    {
        question: "Have you considered the best option for the children after separation?",
        answers: ["Yes, fully considered", "Somewhat considered", "Barely considered", "Not considered at all"],
        section: "Post-Divorce Considerations"
    },
    {
        question: "Have you considered the long-term implications of a divorce on your financial security?",
        answers: ["Yes, and have a plan", "Yes, but need more planning", "Somewhat, but not in detail", "No, not yet"],
        section: "Post-Divorce Considerations"
    },
    {
        question: "Have you considered the living arrangement options following separation?",
        answers: ["Yes, fully planned", "Yes, but need more options", "Somewhat considered", "Not considered at all"],
        section: "Post-Divorce Considerations"
    },
    {
        question: "Does your partner want a divorce as well or does he want to stay in the relationship?",
        answers: ["Wants a divorce", "Unsure, haven't discussed", "Wants to stay", "Completely opposed"],
        section: "Post-Divorce Considerations"
    },
    {
        question: "Does your partner involve your kids in adult issues, manipulate them, or make negative comments about you to them?",
        answers: ["Never", "Rarely", "Sometimes", "Often"],
        section: "Post-Divorce Considerations"
    },
    {
        question: "Is your partner refusing to cooperate, using intimidation, or threatening you?",
        answers: ["Never", "Rarely", "Sometimes", "Often"],
        section: "Post-Divorce Considerations"
    },
    {
        question: "Have you considered what documents and information you need to gather before initiating a divorce?",
        answers: ["Yes, fully prepared", "Somewhat prepared", "Barely started", "Not started at all"],
        section: "Post-Divorce Considerations"
    }
];

const imageUrls = [
            'https://i.pinimg.com/736x/18/36/5c/18365c5ebe02b5ac2fac228f60f2e864.jpg',
            'https://i.pinimg.com/736x/18/36/5c/18365c5ebe02b5ac2fac228f60f2e864.jpg',
            'https://i.pinimg.com/736x/33/5e/4c/335e4caed499f52d33a117c166715a1d.jpg',
            'https://i.pinimg.com/736x/33/5e/4c/335e4caed499f52d33a117c166715a1d.jpg',
            'https://i.pinimg.com/736x/ff/a6/e9/ffa6e9d7d296ce9ad45ff62b3a61d741.jpg',
            'https://i.pinimg.com/736x/ff/a6/e9/ffa6e9d7d296ce9ad45ff62b3a61d741.jpg',
            'https://i.pinimg.com/736x/ca/17/85/ca1785ef2e957e5bbbcf7c767eefc7e2.jpg',
            'https://i.pinimg.com/736x/ec/1b/16/ec1b1600f90eddcede9f865671e31fb6.jpg',
            'https://i.pinimg.com/736x/ee/db/22/eedb228b057279e3cabebfcef7ebbdf1.jpg',
            'https://i.pinimg.com/736x/ee/db/22/eedb228b057279e3cabebfcef7ebbdf1.jpg',
            'https://i.pinimg.com/736x/ee/b7/7f/eeb77fb88ceb4731b01bd394760cade1.jpg',
            'https://i.pinimg.com/736x/ee/b7/7f/eeb77fb88ceb4731b01bd394760cade1.jpg',
            'https://i.pinimg.com/736x/ee/b7/7f/eeb77fb88ceb4731b01bd394760cade1.jpg',
            'https://i.pinimg.com/736x/29/2a/87/292a877c6aad678dabac032fd80bdb72.jpg',
            'https://i.pinimg.com/736x/29/2a/87/292a877c6aad678dabac032fd80bdb72.jpg',
            'https://i.pinimg.com/736x/29/2a/87/292a877c6aad678dabac032fd80bdb72.jpg',
            'https://i.pinimg.com/736x/21/31/f3/2131f3d49a56527ff2915c8963dac83d.jpg',
            'https://i.pinimg.com/736x/21/31/f3/2131f3d49a56527ff2915c8963dac83d.jpg',
            'https://i.pinimg.com/736x/c9/ef/dc/c9efdc80f57ed7a7a4301680aeddfaab.jpg',
            'https://i.pinimg.com/736x/ef/46/fd/ef46fdbd80d6bb60157dcbdf5369dc8e.jpg',
            'https://i.pinimg.com/736x/cc/eb/fe/ccebfe971ef349f14df77a8b687a1a71.jpg',
            'https://i.pinimg.com/736x/cc/eb/fe/ccebfe971ef349f14df77a8b687a1a71.jpg',
            'https://i.pinimg.com/736x/cc/eb/fe/ccebfe971ef349f14df77a8b687a1a71.jpg',
            'https://i.pinimg.com/736x/16/e5/c3/16e5c36496b8f440f991217aae97ae78.jpg',
            'https://i.pinimg.com/736x/16/e5/c3/16e5c36496b8f440f991217aae97ae78.jpg',
            'https://i.pinimg.com/736x/73/c5/5c/73c55c10eed682c03727b39ef4075504.jpg'


        ];

let currentQuestionIndex = 0;
let responses = new Array(questions.length).fill(null);

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('prev-btn').addEventListener('click', prevQuestion);
    document.getElementById('skip-btn').addEventListener('click', skipQuestion);
});

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <h3 class="question">${questions[currentQuestionIndex].question}</h3>
        <ul class="options">
            ${questions[currentQuestionIndex].answers.map((answer, index) => 
                `<li class="option" ><input class="inputFor" type="radio"name="answer" value="${index}" id="answer${index}" ${responses[currentQuestionIndex] === index ? 'checked' : ''}><label for="answer${index}">${answer}</label></li>`
            ).join('')}
        </ul>
    `;
    updateImage();
}

function nextQuestion() {
    saveResponse();
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        displayResult();
    }
}

function prevQuestion() {
    saveResponse();
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function skipQuestion() {
    responses[currentQuestionIndex] = null;
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        displayResult();
    }
}

function saveResponse() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        responses[currentQuestionIndex] = parseInt(selectedAnswer.value);
    } else {
        responses[currentQuestionIndex] = null;
    }
}

function displayResult() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'block';
    const resultText = document.getElementById('result-text');

    const scores = calculateScores(responses);
    resultText.innerHTML = `
        <p>Caring Host: ${scores.caringHost.toFixed(2)}%</p>
        <p>Financial Burdens: ${scores.financialBurdens.toFixed(2)}%</p>
        <p>Emotional Turmoil: ${scores.emotionalTurmoil.toFixed(2)}%</p>
        <div class="relaventWrapper">
        <p><b>Here are some people with Similar Experiences</b></p>
    ` + relaventExperience()+"</div>" + `
    <a href='https://www.thecleandivorce.com/book-online' style='display: inline-block; padding: 10px 20px; background-color: #007BFF; color: white; text-align: center; text-decoration: none; border-radius: 5px;'>Free Consultation</a>
    <button id="share-result-btn" style="display: inline-block; padding: 10px 20px; background-color: #007BFF; color: white; text-align: center; text-decoration: none; border-radius: 5px;">Share Result</button>
    <h1 onClick='showRoadmap()'>Show My Roadmap</h1>`;

    document.getElementById('share-result-btn').addEventListener('click', sendEmail);

    document.getElementById('question-container').style.display = 'none';
    document.getElementById('navigation-container').style.display = 'none';
}

function showRoadmap(){
    const Roadmap = document.querySelector('.roadmapPage');
    Roadmap.classList.add('after');
}
function hideRoadmap(){
    const Roadmap = document.querySelector('.roadmapPage');
    Roadmap.classList.remove('after');
}
function sendEmail() {
    //const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    const scores = calculateScores(responses);
    const resultText = `
        Caring Host: ${scores.caringHost.toFixed(2)}%
        Financial Burdens: ${scores.financialBurdens.toFixed(2)}%
        Emotional Turmoil: ${scores.emotionalTurmoil.toFixed(2)}%
    `;

    const quizResults = questions.map((q, i) => `
        ${q.question}
        Answer: ${q.answers[responses[i]]}

    `).join('\n');

    const templateParams = {
        result: resultText,
        quiz_results: quizResults
    };

    emailjs.send('service_prwtw5b', 'template_knbxauk', templateParams)
        .then((response) => {
            alert('Successfully sent the email.');
        }, (error) => {
            alert('Failed to send email. Please try again.');
        });
}

function relaventExperience(){
    const scores = calculateScores(responses);
    if (scores.caringHost>scores.emotionalTurmoil && scores.caringHost>scores.financialBurdens){
        return("<p>Caring Host</p><ul><li>A caring host ensures guests feel welcomed and comfortable from the moment they arrive.</li><li>Attention to detail, such as clean spaces and thoughtful amenities, enhances the guest experience.</li><li>Personal touches, like remembering guests' preferences and special occasions, show genuine care.</li><li>Effective communication and prompt responses to requests or issues build trust and satisfaction.</li><li>Offering a warm, friendly demeanor and engaging with guests can create a memorable stay.</li></ul>")
    }
    else if(scores.emotionalTurmoil>scores.caringHost && scores.emotionalTurmoil>scores.financialBurdens){
        return("<p>Emotional host</p><ul><li>Divorce causes complex emotions like sadness, anger, fear, guilt, and relief.</li><li>Users often feel like failures, believing they couldn’t sustain their marriage, leading to a drop in self-esteem.</li><li>Societal stigma and fear of judgment from family and friends make it hard to seek help.</li><li>The process can be isolating, making individuals feel alone in their intense emotions and hesitant to reach out for support.</li></ul>")
    }
    else if(scores.financialBurdens>scores.caringHost && scores.financialBurdens>scores.emotionalTurmoil){
        return("<p>Finencial Burden</p><ul><li>Divorce brings financial challenges such as living expenses, legal fees, and reduced income.</li><li>Many feel the strain of stricter budgeting and handling new financial responsibilities.</li><li>Financial burdens may include setting up a new household, child support, alimony, and asset division.</li><li>Fear of an uncertain financial future can deter people from leaving an unhappy marriage.</li></ul>")
    }
}

function updateImage() {
    const imgWrapper = document.querySelector('.imgWrapper');
    const imageUrl = imageUrls[currentQuestionIndex % imageUrls.length];
    imgWrapper.style.backgroundImage = `url(${imageUrl})`;
    imgWrapper.style.animation = 'fadein 0.1s linear';
}

function calculateScores(responses) {
    let caringHost = 0, financialBurdens = 0, emotionalTurmoil = 0;
    const totalQuestions = responses.length;

    responses.forEach((response, index) => {
        if (response !== null) {
            switch (questions[index].section) {
                case "Relationship Dissatisfaction":
                    emotionalTurmoil += response;
                    break;
                case "Efforts to Improve the Relationship":
                    caringHost += response;
                    break;
                case "Communication and Trust":
                    emotionalTurmoil += response;
                    break;
                case "Domestic Violence Screening":
                    emotionalTurmoil += response;
                    break;
                case "Decision to Divorce":
                    financialBurdens += response;
                    break;
                case "Post-Divorce Considerations":
                    financialBurdens += response;
                    break;
            }
        }
    });
    

    return {
        caringHost: (caringHost / totalQuestions) * 100,
        financialBurdens: (financialBurdens / totalQuestions) * 100,
        emotionalTurmoil: (emotionalTurmoil / totalQuestions) * 100
    };
}