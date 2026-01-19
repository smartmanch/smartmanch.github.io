const questions = [
    // 25 और नए शब्द
    { word: "अंधेरा", options: ["तम", "प्रकाश", "तिमिर", "सूरज"], answers: [0, 2] },
    { word: "आदर", options: ["सम्मान", "अनादर", "सत्कार", "दुत्कार"], answers: [0, 2] },
    { word: "किनारा", options: ["तट", "बीच", "कगार", "पानी"], answers: [0, 2] },
    { word: "कृपा", options: ["दया", "क्रोध", "मेहरबानी", "शत्रुता"], answers: [0, 2] },
    { word: "गणेश", options: ["गजानन", "शिव", "लंबोदर", "विष्णु"], answers: [0, 2] },
    { word: "नदी", options: ["सरिता", "सागर", "तटिनी", "पहाड़"], answers: [0, 2] },
    { word: "नौका", options: ["नाव", "जहाज", "किश्ती", "तरुणी"], answers: [0, 2] },
    { word: "पत्थर", options: ["पहाड़", "पाषाण", "अश्म", "जल"], answers: [1, 2] },
    { word: "पवन", options: ["वायु", "हवा", "अग्नि", "नीर"], answers: [0, 1] },
    { word: "बाण", options: ["तीर", "तलवार", "शर", "धनुष"], answers: [0, 2] },
    { word: "बिजली", options: ["दामिनी", "बादल", "चपला", "वर्षा"], answers: [0, 2] },
    { word: "भंवरा", options: ["मधुप", "मक्खी", "भ्रमर", "कोयल"], answers: [0, 2] },
    { word: "मछली", options: ["मीन", "पक्षी", "मकर", "हाथी"], answers: [0, 2] },
    { word: "मेघ", options: ["बादल", "सागर", "घन", "नदी"], answers: [0, 2] },
    { word: "युद्ध", options: ["लड़ाई", "शांति", "संग्राम", "विश्राम"], answers: [0, 2] },
    { word: "लक्ष्मी", options: ["कमला", "पार्वती", "रमा", "सरस्वती"], answers: [0, 2] },
    { word: "वायु", options: ["हवा", "अनिल", "आग", "पानी"], answers: [0, 1] },
    { word: "शत्रु", options: ["अरि", "मित्र", "दुश्मन", "दोस्त"], answers: [0, 2] },
    { word: "सिंह", options: ["शेर", "वनराज", "हाथी", "भालू"], answers: [0, 1] },
    { word: "सुंदर", options: ["मनोहर", "कुरूप", "रमणीय", "अप्रिय"], answers: [0, 2] },
    { word: "स्वर्ग", options: ["देवलोक", "धरती", "सुरलोक", "पाताल"], answers: [0, 2] },
    { word: "हाथी", options: ["करी", "गधा", "गज", "घोड़ा"], answers: [0, 2] },
    { word: "किनारा", options: ["तट", "नदी", "कूल", "झील"], answers: [0, 2] },
    { word: "विष्णु", options: ["नारायण", "शिव", "केशव", "ब्रह्मा"], answers: [0, 2] },
    { word: "अध्यापक", options: ["गुरु", "छात्र", "शिक्षक", "शिष्य"], answers: [0, 2] }
];

let currentQuestionIndex = 0;
let totalCoins = 0;
let studentName = "";
let studentClass = "";

const wordList = [
    ["अंधेरा", "तम", "तिमिर"], ["आदर", "सम्मान", "सत्कार"], ["किनारा", "तट", "कगार"],
    ["कृपा", "दया", "मेहरबानी"], ["गणेश", "गजानन", "लंबोदर"], ["नदी", "सरिता", "तटिनी"],
    ["नौका", "नाव", "किश्ती"], ["पत्थर", "पाषाण", "अश्म"], ["पवन", "वायु", "हवा"],
    ["बाण", "तीर", "शर"], ["बिजली", "दामिनी", "चपला"], ["भंवरा", "मधुप", "भ्रमर"],
    ["मछली", "मीन", "मकर"], ["मेघ", "बादल", "घन"], ["युद्ध", "लड़ाई", "संग्राम"],
    ["लक्ष्मी", "कमला", "रमा"], ["वायु", "हवा", "अनिल"], ["शत्रु", "अरि", "दुश्मन"],
    ["सिंह", "शेर", "वनराज"], ["सुंदर", "मनोहर", "रमणीय"], ["स्वर्ग", "देवलोक", "सुरलोक"],
    ["हाथी", "करी", "गज"], ["किनारा", "तट", "कूल"], ["विष्णु", "नारायण", "केशव"],
    ["अध्यापक", "गुरु", "शिक्षक"]
];

let selectedOptions = []; 
let clickCount = 0; 
let clickHistory = []; 

// कोइन डिस्प्ले अपडेट फ़ंक्शन
function updateCoinDisplay() {
    document.querySelector('#current-score span').textContent = totalCoins;
}

// ########## स्क्रीन नियंत्रण फ़ंक्शन (पिछले कोड की तरह) ##########

function showList() {
    studentName = document.getElementById('student-name').value.trim();
    studentClass = document.getElementById('student-class').value.trim();

    if (studentName === "" || studentClass === "") {
        alert("कृपया अपना नाम और कक्षा भरें।");
        return;
    }

    const table = document.getElementById('word-list-table');
    table.innerHTML = `
        <tr>
            <th>क्रम</th>
            <th>शब्द</th>
            <th>पर्यायवाची - 1</th>
            <th>पर्यायवाची - 2</th>
        </tr>
    `;
    wordList.forEach((item, index) => {
        const row = table.insertRow();
        row.insertCell().textContent = index + 1;
        row.insertCell().textContent = item[0];
        row.insertCell().textContent = item[1];
        row.insertCell().textContent = item[2];
    });

    document.getElementById('info-screen').style.display = 'none';
    document.getElementById('list-screen').style.display = 'block';
}

function startQuiz() {
    document.getElementById('list-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    updateCoinDisplay(); // स्कोर 0 से शुरू करें
    loadNextQuestion();
}

function finishQuiz() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    generateMarkSheet();
}

// ########## क्विज लॉजिक ##########

function loadNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        finishQuiz();
        return;
    }

    selectedOptions = [];
    clickCount = 0;
    clickHistory = [];
    document.getElementById('next-button').style.display = 'none';
    const quizArea = document.getElementById('quiz-area');
    quizArea.innerHTML = ''; 

    const qData = questions[currentQuestionIndex];
    
    const html = `
        <div class="question-box">
            <h3>प्रश्न ${currentQuestionIndex + 1}: **${qData.word}** के दो सही पर्यायवाची चुनें।</h3>
            <div id="feedback-message" style="margin-bottom: 10px; font-weight: bold;"></div>
            ${qData.options.map((option, index) => `
                <div class="option" data-index="${index}" onclick="handleOptionClick(this, ${index})">${String.fromCharCode(65 + index)}. ${option}</div>
            `).join('')}
        </div>
    `;
    quizArea.innerHTML = html;
}

function handleOptionClick(element, optionIndex) {
    if (clickCount >= 3 || document.getElementById('next-button').style.display !== 'none') {
        return; 
    }

    if (selectedOptions.includes(optionIndex)) {
        return;
    }

    const qData = questions[currentQuestionIndex];
    const isCorrect = qData.answers.includes(optionIndex);

    clickCount++;
    selectedOptions.push(optionIndex);
    clickHistory.push(isCorrect); 
    
    element.classList.add('selected');

    if (selectedOptions.length === 2 || clickCount === 3) {
        checkAnswer();
    }
}

function checkAnswer() {
    const qData = questions[currentQuestionIndex];
    const correctAnswers = qData.answers;
    
    // # कोइन गणना
    let earnedCoins = 0;
    
    if (clickHistory.length >= 2) {
        const c1 = clickHistory[0];
        const c2 = clickHistory[1];
        
        // 1. प्रथम दो क्लिक सही = 2 कोइन
        if (c1 && c2) {
            earnedCoins = 2;
        } 
        
        // 2. 3 क्लिक में दो सही विकल्प (एक गलत के साथ) = 1 कोइन
        else if (clickHistory.length === 3) {
            const totalCorrect = clickHistory.filter(c => c).length;
            
            // प्रथम क्लिक सही दूसरा गलत तीसरा सही
            // प्रथम क्लिक गलत द्वितीय क्लिक सही,तीसरा क्लिक सही
            if (totalCorrect === 2) {
                 earnedCoins = 1;
            }
        }
    }
    
    // 3. प्रथम 2 क्लिक गलत के बाद सही क्लिक पर कोई कोइन नही मिले। (यह लॉजिक ऊपर कवर है)
    
    totalCoins += earnedCoins;
    
    // # डिस्प्ले अपडेट
    updateCoinDisplay(); // <--- यह लाइन स्कोर तुरंत अपडेट करती है!
    
    // # फीडबैक और रंग दिखाना
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        const index = parseInt(opt.getAttribute('data-index'));
        opt.onclick = null; 

        if (correctAnswers.includes(index)) {
            opt.classList.add('correct');
        } else if (selectedOptions.includes(index)) {
            opt.classList.add('incorrect');
        }
    });

    // बच्चे को फीडबैक
    let feedbackText;
    if (earnedCoins === 2) {
        feedbackText = `शानदार! आपको 2 कोइन मिले। 🌟`;
    } else if (earnedCoins === 1) {
        feedbackText = `अच्छा प्रयास! आपको 1 कोइन मिला। ✨`;
    } else {
        feedbackText = `अगले प्रश्न में और बेहतर करें। ❌`;
    }

    const feedbackElement = document.getElementById('feedback-message');
    feedbackElement.innerHTML = `<strong>परिणाम:</strong> ${feedbackText}`;
    
    document.getElementById('next-button').style.display = 'block';
    
    currentQuestionIndex++;
}

// ########## मार्कशीट जनरेट करना (पिछले कोड की तरह) ##########

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
        <p><strong>विद्यालय का नाम:</strong> राजकीय उच्च माध्यमिक विद्यालय सैनीपुरा, नवलगढ़, झुंझुनूं</p>
        <p><strong>बच्चे का नाम:</strong> ${studentName}</p>
        <p><strong>कक्षा:</strong> ${studentClass}</p>
        <hr>
        <p><strong>कुल प्रश्न:</strong> ${totalQuestions}</p>
        <p><strong>अधिकतम कोइन:</strong> ${maxCoins}</p>
        <p><strong>कुल प्राप्त कोइन:</strong> <strong style="font-size: 24px;">${totalCoins}</strong></p>
        <p><strong>प्रतिशत (कोइन के आधार पर):</strong> <strong>${percentage.toFixed(2)}%</strong></p>
        <p><strong>ग्रेड:</strong> <strong style="font-size: 28px; color: ${percentage >= 80 ? '#28a745' : '#ffc107'};">${grade}</strong></p>
    `;
}