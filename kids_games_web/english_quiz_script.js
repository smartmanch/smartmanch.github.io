const questions = [
    // 25 English Antonym Questions (Same as before)
    { word: "Happy", options: ["Glad", "Sad", "Joyful", "Nice"], answer: 1 },
    { word: "Big", options: ["Huge", "Small", "Large", "Great"], answer: 1 },
    { word: "Fast", options: ["Quick", "Slow", "Speedy", "Rapid"], answer: 1 },
    { word: "Hot", options: ["Warm", "Cold", "Boiling", "Sunny"], answer: 1 },
    { word: "Up", options: ["Above", "Down", "Over", "High"], answer: 1 },
    { word: "In", options: ["Enter", "Inside", "Out", "Into"], answer: 2 },
    { word: "Light", options: ["Bright", "Sun", "Dark", "Heavy"], answer: 2 },
    { word: "Day", options: ["Evening", "Noon", "Night", "Morning"], answer: 2 },
    { word: "Open", options: ["Start", "Shut", "Unlock", "Unfold"], answer: 1 },
    { word: "Rich", options: ["Wealthy", "Poor", "Posh", "King"], answer: 1 },
    { word: "Hard", options: ["Difficult", "Soft", "Rock", "Strong"], answer: 1 },
    { word: "New", options: ["Fresh", "Old", "Modern", "Current"], answer: 1 },
    { word: "Give", options: ["Offer", "Donate", "Take", "Return"], answer: 2 },
    { word: "Always", options: ["Often", "Never", "Sometimes", "Rarely"], answer: 1 },
    { word: "Accept", options: ["Agree", "Refuse", "Allow", "Receive"], answer: 1 },
    { word: "Entrance", options: ["Door", "Exit", "Entry", "Access"], answer: 1 },
    { word: "Empty", options: ["Hollow", "Full", "Blank", "Vacant"], answer: 1 },
    { word: "Friend", options: ["Mate", "Enemy", "Rival", "Partner"], answer: 1 },
    { word: "Quiet", options: ["Silent", "Calm", "Loud", "Peaceful"], answer: 2 },
    { word: "Smooth", options: ["Sleek", "Soft", "Rough", "Even"], answer: 2 },
    { word: "Tired", options: ["Sleepy", "Weak", "Exhausted", "Energetic"], answer: 3 },
    { word: "Wise", options: ["Clever", "Intelligent", "Foolish", "Smart"], answer: 2 },
    { word: "True", options: ["Right", "False", "Correct", "Real"], answer: 1 },
    { word: "High", options: ["Tall", "Above", "Low", "Deep"], answer: 2 },
    { word: "Lend", options: ["Give", "Borrow", "Loan", "Pay"], answer: 1 }
];

let currentQuestionIndex = 0;
let totalCoins = 0;
let studentName = "";
let studentClass = "";
let clickCount = 0; 
let coinAwarded = false; 

// Antonyms List for Review Screen (Word, Antonym, Hindi Meaning of Word, Hindi Meaning of Antonym)
const wordList = [
    ["Happy", "Sad", "खुश", "दुखी"],
    ["Big", "Small", "बड़ा", "छोटा"],
    ["Fast", "Slow", "तेज़", "धीमा"],
    ["Hot", "Cold", "गर्म", "ठंडा"],
    ["Up", "Down", "ऊपर", "नीचे"],
    ["In", "Out", "अंदर", "बाहर"],
    ["Light", "Dark", "प्रकाश/उजाला", "अँधेरा"],
    ["Day", "Night", "दिन", "रात"],
    ["Open", "Shut", "खोलना", "बंद करना"],
    ["Rich", "Poor", "अमीर", "गरीब"],
    ["Hard", "Soft", "कठोर", "मुलायम/नरम"],
    ["New", "Old", "नया", "पुराना"],
    ["Give", "Take", "देना", "लेना"],
    ["Always", "Never", "हमेशा", "कभी नहीं"],
    ["Accept", "Refuse", "स्वीकार करना", "मना करना"],
    ["Entrance", "Exit", "प्रवेश", "निकास"],
    ["Empty", "Full", "खाली", "भरा हुआ"],
    ["Friend", "Enemy", "दोस्त", "दुश्मन"],
    ["Quiet", "Loud", "शांत", "शोरगुल वाला"],
    ["Smooth", "Rough", "चिकना", "खुरदरा"],
    ["Tired", "Energetic", "थका हुआ", "ऊर्जावान"],
    ["Wise", "Foolish", "बुद्धिमान", "मूर्ख"],
    ["True", "False", "सत्य", "असत्य"],
    ["High", "Low", "ऊँचा", "नीचा"],
    ["Lend", "Borrow", "उधार देना", "उधार लेना"]
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

// ########## Quiz Logic ##########

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
    
    // Clear feedback message before loading new question
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
            // Rule 1: 2 coins for the first correct click
            totalCoins += 2;
            coinAwarded = true;
            feedbackElement.innerHTML = `<span style="color: #28a745; font-weight: bold;">**Excellent!** This is correct on your first attempt. You earned 2 coins! 🌟</span>`;
        } else if (clickCount > 1 && !coinAwarded) {
            // Correct click after an incorrect first click (no coins)
            feedbackElement.innerHTML = `<span style="color: #28a745;">This is the correct answer, but you didn't earn coins because it was not your first click.</span>`;
        }
        
        // Question is resolved
        document.querySelectorAll('.option').forEach(opt => opt.onclick = null);
        document.getElementById('next-button').style.display = 'block';
        updateCoinDisplay();

    } else {
        // Incorrect answer
        element.classList.add('incorrect');
        
        if (clickCount === 1) {
            // Rule 2: First click is wrong (coins are blocked for this question)
            coinAwarded = false; 
            feedbackElement.innerHTML = `<span style="color: #dc3545; font-weight: bold;">**Incorrect!** No coins awarded for this question. ❌</span>`;
            
            // Allow clicking only the correct option now (to proceed)
            document.querySelectorAll('.option').forEach(opt => opt.onclick = null);
            document.querySelector(`.option[data-index="${qData.answer}"]`).onclick = function() {
                handleOptionClick(this, qData.answer);
            };
        } else {
            // Any incorrect click after the first one
            feedbackElement.innerHTML = `<span style="color: #dc3545;">Still incorrect. No coins will be awarded. ❌</span>`;
            element.onclick = null; 
        }
    }
}

// ########## Generate Mark Sheet ##########

function generateMarkSheet() {
    const totalQuestions = questions.length;
    const maxCoins = totalQuestions * 2;
    const SCHOOL_NAME = "Sainipura Government Higher Secondary School, Nawalgarh, Jhunjhunu";
    
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