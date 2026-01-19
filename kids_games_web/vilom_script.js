const questions = [
    // 25 विलोम शब्द प्रश्न
    { word: "आरंभ", options: ["शुरुआत", "मध्य", "अंत", "प्रारंभ"], answer: 2 },
    { word: "सजीव", options: ["निर्जीव", "जीवित", "प्राणी", "जानवर"], answer: 0 },
    { word: "अल्प", options: ["थोड़ा", "अधिक", "कम", "बहुत"], answer: 1 },
    { word: "आकर्षण", options: ["सुंदरता", "विकर्षण", "केंद्र", "प्रभावी"], answer: 1 },
    { word: "स्वतंत्र", options: ["आज़ादी", "परतंत्र", "बंधन", "खुला"], answer: 1 },
    { word: "सुगंध", options: ["खुशबू", "दुर्गंध", "महक", "इत्र"], answer: 1 },
    { word: "आकाश", options: ["गगन", "सितारा", "धरती", "नभ"], answer: 2 },
    { word: "अंदर", options: ["भीतर", "बाहर", "नीचे", "ऊपर"], answer: 1 },
    { word: "अपना", options: ["खुद", "हमारा", "पराया", "स्वयं"], answer: 2 },
    { word: "गुण", options: ["खूबी", "दोष", "विशेषता", "अच्छाई"], answer: 1 },
    { word: "ठंडा", options: ["बर्फ", "शीतल", "गरम", "पानी"], answer: 2 },
    { word: "न्याय", options: ["अन्याय", "कानून", "फैसला", "सही"], answer: 0 },
    { word: "लाभ", options: ["मुनाफ़ा", "हानि", "फायदा", "नफा"], answer: 1 },
    { word: "सरल", options: ["सीधा", "कठिन", "आसान", "कोमल"], answer: 1 },
    { word: "वीर", options: ["बहादुर", "निडर", "कायर", "साहसी"], answer: 2 },
    { word: "शत्रु", options: ["दुश्मन", "वैरी", "मित्र", "विरोधी"], answer: 2 },
    { word: "हानि", options: ["घटा", "लाभ", "नुकसान", "घाटा"], answer: 1 },
    { word: "सुबह", options: ["दिन", "सवेरा", "शाम", "रात"], answer: 2 },
    { word: "सफेद", options: ["उजला", "श्वेत", "काला", "धवल"], answer: 2 },
    { word: "सीधा", options: ["उल्टा", "तिरछा", "सरल", "टेढ़ा"], answer: 0 },
    { word: "नया", options: ["नवीन", "ताज़ा", "पुराना", "नूतन"], answer: 2 },
    { word: "छोटा", options: ["लघु", "बड़ा", "संक्षिप्त", "कम"], answer: 1 },
    { word: "अमीर", options: ["धनवान", "धनी", "गरीब", "मालदार"], answer: 2 },
    { word: "सच", options: ["झूठ", "सत्य", "वास्तविक", "ठीक"], answer: 0 },
    { word: "आशा", options: ["निराशा", "उम्मीद", "भरोसा", "इच्छा"], answer: 0 }
];

let currentQuestionIndex = 0;
let totalCoins = 0;
let studentName = "";
let studentClass = "";
let clickCount = 0; 
let coinAwarded = false; 

// 25 विलोम शब्दों की सूची (प्रीव्यू के लिए)
const wordList = [
    ["आरंभ", "अंत"], ["सजीव", "निर्जीव"], ["अल्प", "अधिक"], 
    ["आकर्षण", "विकर्षण"], ["स्वतंत्र", "परतंत्र"], ["सुगंध", "दुर्गंध"], 
    ["आकाश", "धरती"], ["अंदर", "बाहर"], ["अपना", "पराया"], 
    ["गुण", "दोष"], ["ठंडा", "गरम"], ["न्याय", "अन्याय"], 
    ["लाभ", "हानि"], ["सरल", "कठिन"], ["वीर", "कायर"], 
    ["शत्रु", "मित्र"], ["हानि", "लाभ"], ["सुबह", "शाम"], 
    ["सफेद", "काला"], ["सीधा", "उल्टा"], ["नया", "पुराना"], 
    ["छोटा", "बड़ा"], ["अमीर", "गरीब"], ["सच", "झूठ"], 
    ["आशा", "निराशा"]
];

// ########## स्क्रीन नियंत्रण फ़ंक्शन ##########

function updateCoinDisplay() {
    document.querySelector('#current-score span').textContent = totalCoins;
}

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
            <th>विलोम शब्द</th>
        </tr>
    `;
    wordList.forEach((item, index) => {
        const row = table.insertRow();
        row.insertCell().textContent = index + 1;
        row.insertCell().textContent = item[0];
        row.insertCell().textContent = item[1];
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
 * प्रश्न सूचकांक को बढ़ाता है और अगला प्रश्न लोड करता है।
 * यह फ़ंक्शन "अगला प्रश्न" बटन के क्लिक पर कॉल होता है।
 */
function handleNextQuestion() {
    currentQuestionIndex++;
    loadNextQuestion();
}

// ########## क्विज लॉजिक ##########

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
    
    // फ़ीडबैक मैसेज को लोड करने से पहले साफ करें
    const feedbackDiv = document.getElementById('quiz-screen').querySelector('#feedback-message');
    if (feedbackDiv) feedbackDiv.innerHTML = '';

    const qData = questions[currentQuestionIndex];
    
    const html = `
        <div class="question-box">
            <h3>प्रश्न ${currentQuestionIndex + 1}: **${qData.word}** का सही विलोम चुनें।</h3>
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
            // नियम 1: केवल प्रथम क्लिक सही होने पर 2 कोइन
            totalCoins += 2;
            coinAwarded = true;
            feedbackElement.innerHTML = `<span style="color: #28a745; font-weight: bold;">**शाबाश!** यह प्रथम क्लिक पर सही जवाब है। आपको 2 कोइन मिले। 🌟</span>`;
        } else if (clickCount > 1 && !coinAwarded) {
            // गलत प्रथम क्लिक के बाद सही क्लिक (कोइन नहीं)
            feedbackElement.innerHTML = `<span style="color: #28a745;">यह सही जवाब है, लेकिन आपको कोइन नहीं मिले क्योंकि यह आपका प्रथम क्लिक नहीं था।</span>`;
        }
        
        // प्रश्न हल हो गया
        document.querySelectorAll('.option').forEach(opt => opt.onclick = null);
        document.getElementById('next-button').style.display = 'block';
        updateCoinDisplay();

    } else {
        // जवाब गलत होने पर
        element.classList.add('incorrect');
        
        if (clickCount === 1) {
            // नियम 2: प्रथम क्लिक गलत होने पर
            coinAwarded = false; 
            feedbackElement.innerHTML = `<span style="color: #dc3545; font-weight: bold;">**आपका जवाब गलत है।** कोई कोइन नहीं मिला। ❌</span>`;
            
            // अब बच्चे को केवल सही विकल्प पर क्लिक करने दें (पर कोइन नहीं मिलेंगे)
            document.querySelectorAll('.option').forEach(opt => opt.onclick = null);
            document.querySelector(`.option[data-index="${qData.answer}"]`).onclick = function() {
                handleOptionClick(this, qData.answer);
            };
        } else {
            // प्रथम क्लिक गलत होने के बाद कोई भी अन्य गलत क्लिक
            feedbackElement.innerHTML = `<span style="color: #dc3545;">यह जवाब भी गलत है। कोई कोइन नहीं मिलेगा। ❌</span>`;
            element.onclick = null; // इस विकल्प को दोबारा क्लिक करने से रोकें
        }
    }
}

// ########## मार्कशीट जनरेट करना ##########

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
        <p><strong>ग्रेड:</strong> <strong style="font-size: 28px; color: ${percentage >= 80 ? '#28a745' : '#cc0066'};">${grade}</strong></p>
    `;
}