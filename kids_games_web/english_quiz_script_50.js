// NEW SCHOOL NAME
const SCHOOL_NAME = "Government Senior Secondary School Sainipura, Nawalgarh, Jhunjhunu";

const questions = [
    // 50 NEW English Antonym Questions (Same as before)
    { word: "Arrive", options: ["Come", "Depart", "Stay", "Reach"], answer: 1 },
    { word: "Buy", options: ["Shop", "Sell", "Purchase", "Trade"], answer: 1 },
    { word: "Clean", options: ["Neat", "Dirty", "Wash", "Tidy"], answer: 1 },
    { word: "Cruel", options: ["Harsh", "Kind", "Mean", "Brutal"], answer: 1 },
    { word: "Danger", options: ["Risk", "Threat", "Safety", "Peril"], answer: 2 },
    { word: "Early", options: ["Fast", "Late", "Soon", "Quickly"], answer: 1 },
    { word: "Far", options: ["Distant", "Near", "Abroad", "Away"], answer: 1 },
    { word: "First", options: ["Start", "Initial", "Last", "Begin"], answer: 2 },
    { word: "Foreign", options: ["Alien", "Domestic", "Strange", "Exotic"], answer: 1 },
    { word: "Guest", options: ["Visitor", "Host", "Invitee", "Stranger"], answer: 1 },
    { word: "Guilty", options: ["Accused", "Innocent", "Blamed", "Faulty"], answer: 1 },
    { word: "Import", options: ["Bring in", "Export", "Ship", "Trade"], answer: 1 },
    { word: "Increase", options: ["Grow", "Raise", "Decrease", "Expand"], answer: 2 },
    { word: "Junior", options: ["Young", "Senior", "Lower", "Small"], answer: 1 },
    { word: "Knowledge", options: ["Facts", "Ignorance", "Learning", "Wisdom"], answer: 1 },
    { word: "Laugh", options: ["Smile", "Cry", "Chuckle", "Joke"], answer: 1 },
    { word: "Major", options: ["Big", "Minor", "Chief", "Large"], answer: 1 },
    { word: "Majority", options: ["Most", "Bulk", "Minority", "Many"], answer: 2 },
    { word: "Possible", options: ["Feasible", "Impossible", "Likely", "Practical"], answer: 1 },
    { word: "Presence", options: ["Being", "Existence", "Absence", "Here"], answer: 2 },
    { word: "Private", options: ["Personal", "Secret", "Public", "Individual"], answer: 2 },
    { word: "Success", options: ["Achievement", "Failure", "Victory", "Win"], answer: 1 },
    { word: "Victory", options: ["Triumph", "Defeat", "Win", "Glory"], answer: 1 },
    { word: "Advance", options: ["Proceed", "Retreat", "Move", "Forward"], answer: 1 },
    { word: "Artificial", options: ["Man-made", "Fake", "Natural", "Synthetic"], answer: 2 },
    { word: "Attach", options: ["Join", "Detach", "Fix", "Connect"], answer: 1 },
    { word: "Brave", options: ["Bold", "Courageous", "Cowardly", "Fearless"], answer: 2 },
    { word: "Catch", options: ["Grasp", "Miss", "Hold", "Seize"], answer: 1 },
    { word: "Clever", "options": ["Smart", "Genius", "Stupid", "Bright"], answer: 2 },
    { word: "Common", options: ["Normal", "Rare", "Usual", "General"], answer: 1 },
    { word: "Contract", options: ["Shrink", "Expand", "Reduce", "Compress"], answer: 1 },
    { word: "Create", options: ["Invent", "Build", "Destroy", "Make"], answer: 2 },
    { word: "Demand", options: ["Need", "Ask", "Supply", "Request"], answer: 2 },
    { word: "Divide", options: ["Separate", "Split", "Unite", "Break"], answer: 2 },
    { word: "Dull", options: ["Boring", "Sharp", "Flat", "Blunt"], answer: 1 },
    { word: "Fiction", options: ["Tale", "Fantasy", "Fact", "Story"], answer: 2 },
    { word: "Generous", options: ["Giving", "Kind", "Selfish", "Liberal"], answer: 2 },
    { word: "Hope", options: ["Wish", "Despair", "Dream", "Expectation"], answer: 1 },
    { word: "Inner", options: ["Inside", "Internal", "Outer", "Middle"], answer: 2 },
    { word: "Justice", options: ["Fairness", "Right", "Injustice", "Law"], answer: 2 },
    { word: "Known", options: ["Famous", "Familiar", "Unknown", "Recognized"], answer: 2 },
    { word: "Legal", options: ["Lawful", "Permitted", "Illegal", "Valid"], answer: 2 },
    { word: "Maximum", options: ["Highest", "Most", "Minimum", "Top"], answer: 2 },
    { word: "Negative", options: ["Bad", "Positive", "Minus", "Pessimistic"], answer: 1 },
    { word: "Permanent", options: ["Lasting", "Fixed", "Temporary", "Forever"], answer: 2 },
    { word: "Solid", options: ["Hard", "Firm", "Liquid", "Dense"], answer: 2 },
    { word: "Single", options: ["One", "Married", "Individual", "Alone"], answer: 1 },
    { word: "Vertical", options: ["Upright", "Straight", "Horizontal", "Perpendicular"], answer: 2 },
    { word: "Repay", options: ["Return", "Lend", "Settle", "Give back"], answer: 1 },
    { word: "Loud", options: ["Noisy", "Quiet", "Strong", "Audible"], answer: 1 }
];

let currentQuestionIndex = 0;
let totalCoins = 0;
let studentName = "";
let studentClass = "";
let clickCount = 0; 
let coinAwarded = false; 

// Antonyms List for Review Screen (Word, Antonym, Hindi Meaning of Word, Hindi Meaning of Antonym)
const wordList = [
    ["Arrive", "Depart", "पहुंचना", "जाना/प्रस्थान करना"], 
    ["Buy", "Sell", "खरीदना", "बेचना"], 
    ["Clean", "Dirty", "साफ़", "गंदा"], 
    ["Cruel", "Kind", "क्रूर", "दयालु"], 
    ["Danger", "Safety", "खतरा", "सुरक्षा"], 
    ["Early", "Late", "जल्दी", "देरी से"], 
    ["Far", "Near", "दूर", "नजदीक"], 
    ["First", "Last", "पहला", "आखिरी"], 
    ["Foreign", "Domestic", "विदेशी", "घरेलू"], 
    ["Guest", "Host", "मेहमान", "मेज़बान"], 
    ["Guilty", "Innocent", "दोषी", "निर्दोष"], 
    ["Import", "Export", "आयात", "निर्यात"], 
    ["Increase", "Decrease", "बढ़ाना", "घटाना"], 
    ["Junior", "Senior", "कनिष्ठ", "वरिष्ठ"], 
    ["Knowledge", "Ignorance", "ज्ञान", "अज्ञान"], 
    ["Laugh", "Cry", "हँसना", "रोना"], 
    ["Major", "Minor", "मुख्य/बड़ा", "छोटा/अमुख्य"], 
    ["Majority", "Minority", "बहुमत", "अल्पमत"], 
    ["Possible", "Impossible", "संभव", "असंभव"], 
    ["Presence", "Absence", "उपस्थिति", "अनुपस्थिति"], 
    ["Private", "Public", "निजी", "सार्वजनिक"], 
    ["Success", "Failure", "सफलता", "विफलता"], 
    ["Victory", "Defeat", "जीत", "हार"], 
    ["Advance", "Retreat", "आगे बढ़ना", "पीछे हटना"], 
    ["Artificial", "Natural", "कृत्रिम", "प्राकृतिक"], 
    ["Attach", "Detach", "जोड़ना", "अलग करना"], 
    ["Brave", "Cowardly", "बहादुर", "कायर"], 
    ["Catch", "Miss", "पकड़ना", "छोड़ना/चूकना"], 
    ["Clever", "Stupid", "चतुर", "मूर्ख"], 
    ["Common", "Rare", "सामान्य", "दुर्लभ"], 
    ["Contract", "Expand", "सिकुड़ना", "फैलना"], 
    ["Create", "Destroy", "बनाना", "नष्ट करना"], 
    ["Demand", "Supply", "मांग", "आपूर्ति"], 
    ["Divide", "Unite", "बाँटना", "एकजुट करना"], 
    ["Dull", "Sharp", "सुस्त/अस्पष्ट", "तेज/नुकीला"], 
    ["Fiction", "Fact", "कल्पना", "तथ्य"], 
    ["Generous", "Selfish", "उदार", "स्वार्थी"], 
    ["Hope", "Despair", "आशा", "निराशा"], 
    ["Inner", "Outer", "आंतरिक", "बाहरी"], 
    ["Justice", "Injustice", "न्याय", "अन्याय"], 
    ["Known", "Unknown", "ज्ञात", "अज्ञात"], 
    ["Legal", "Illegal", "कानूनी", "अवैध"], 
    ["Maximum", "Minimum", "अधिकतम", "न्यूनतम"], 
    ["Negative", "Positive", "नकारात्मक", "सकारात्मक"], 
    ["Permanent", "Temporary", "स्थायी", "अस्थायी"], 
    ["Solid", "Liquid", "ठोस", "तरल"], 
    ["Single", "Married", "अविवाहित", "विवाहित"], 
    ["Vertical", "Horizontal", "ऊर्ध्वाधर", "क्षैतिज"], 
    ["Repay", "Lend", "चुकाना", "उधार देना"], 
    ["Loud", "Quiet", "तेज आवाज़", "शांत"]
];

// ########## Screen Control Functions ##########

function updateCoinDisplay() {
    document.querySelector('#current-score span').textContent = totalCoins;
}

function showList() {
    studentName = document.getElementById('student-name').value.trim();
    studentClass = document.getElementById('student-class').value.trim();

    if (studentName === "" || studentClass === "") {
        alert("Please fill in your Name and Class.");
        return;
    }

    const table = document.getElementById('word-list-table');
    table.innerHTML = `
        <tr>
            <th>No.</th>
            <th>Word (Hindi Meaning)</th>
            <th>Antonym (Hindi Meaning)</th>
        </tr>
    `;
    wordList.forEach((item, index) => {
        const row = table.insertRow();
        row.insertCell().textContent = index + 1;
        // Word (Hindi Meaning)
        row.insertCell().innerHTML = `<strong>${item[0]}</strong> (${item[2]})`;
        // Antonym (Hindi Meaning)
        row.insertCell().innerHTML = `<strong>${item[1]}</strong> (${item[3]})`;
    });

    document.getElementById('info-screen').style.display = 'none';
    document.getElementById('list-screen').style.display = 'block';
}

function startQuiz() {
    document.getElementById('list-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    updateCoinDisplay();
    loadNextQuestion();
}

function finishQuiz() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    generateMarkSheet();
}

/**
 * Increments the question index and loads the next question.
 */
function handleNextQuestion() {
    currentQuestionIndex++;
    loadNextQuestion();
}

// ########## Quiz Logic (Same as before) ##########

function loadNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        finishQuiz();
        return;
    }

    clickCount = 0;
    coinAwarded = false; 
    document.getElementById('next-button').style.display = 'none';
    const quizArea = document.getElementById('quiz-area');
    quizArea.innerHTML = ''; 
    
    const feedbackDiv = document.getElementById('quiz-screen').querySelector('#feedback-message');
    if (feedbackDiv) feedbackDiv.innerHTML = '';

    const qData = questions[currentQuestionIndex];
    
    const html = `
        <div class="question-box">
            <h3>Question ${currentQuestionIndex + 1}: Choose the correct antonym for **${qData.word}**.</h3>
            <div id="feedback-message" style="margin-bottom: 10px;"></div>
            ${qData.options.map((option, index) => `
                <div class="option" data-index="${index}" onclick="handleOptionClick(this, ${index})">${String.fromCharCode(65 + index)}. ${option}</div>
            `).join('')}
        </div>
    `;
    quizArea.innerHTML = html;
}

function handleOptionClick(element, optionIndex) {
    if (document.getElementById('next-button').style.display !== 'none') {
        return; 
    }

    const qData = questions[currentQuestionIndex];
    const isCorrect = (optionIndex === qData.answer);
    const feedbackElement = document.getElementById('feedback-message');
    
    clickCount++;

    if (isCorrect) {
        element.classList.add('correct');
        
        if (clickCount === 1) {
            totalCoins += 2;
            coinAwarded = true;
            feedbackElement.innerHTML = `<span style="color: #28a745; font-weight: bold;">**Excellent!** This is correct on your first attempt. You earned 2 coins! 🌟</span>`;
        } else if (clickCount > 1 && !coinAwarded) {
            feedbackElement.innerHTML = `<span style="color: #28a745;">This is the correct answer, but you didn't earn coins because it was not your first click.</span>`;
        }
        
        document.querySelectorAll('.option').forEach(opt => opt.onclick = null);
        document.getElementById('next-button').style.display = 'block';
        updateCoinDisplay();

    } else {
        element.classList.add('incorrect');
        
        if (clickCount === 1) {
            coinAwarded = false; 
            feedbackElement.innerHTML = `<span style="color: #dc3545; font-weight: bold;">**Incorrect!** No coins awarded for this question. ❌</span>`;
            
            document.querySelectorAll('.option').forEach(opt => opt.onclick = null);
            document.querySelector(`.option[data-index="${qData.answer}"]`).onclick = function() {
                handleOptionClick(this, qData.answer);
            };
        } else {
            feedbackElement.innerHTML = `<span style="color: #dc3545;">Still incorrect. No coins will be awarded. ❌</span>`;
            element.onclick = null; 
        }
    }
}

// ########## Generate Mark Sheet (Same as before) ##########

function generateMarkSheet() {
    const totalQuestions = questions.length;
    const maxCoins = totalQuestions * 2;
    
    const percentage = (totalCoins / maxCoins) * 100;
    
    let grade;
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B+";
    else if (percentage >= 60) grade = "B";
    else grade = "C";

    const markSheetDiv = document.getElementById('mark-sheet');
    markSheetDiv.innerHTML = `
        <p><strong>School Name:</strong> ${SCHOOL_NAME}</p>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Class:</strong> ${studentClass}</p>
        <hr>
        <p><strong>Total Questions:</strong> ${totalQuestions}</p>
        <p><strong>Maximum Coins:</strong> ${maxCoins}</p>
        <p><strong>Total Coins Earned:</strong> <strong style="font-size: 24px;">${totalCoins}</strong></p>
        <p><strong>Percentage (Based on Coins):</strong> <strong>${percentage.toFixed(2)}%</strong></p>
        <p><strong>Grade:</strong> <strong style="font-size: 28px; color: ${percentage >= 80 ? '#28a745' : '#ff4500'};">${grade}</strong></p>
    `;
}