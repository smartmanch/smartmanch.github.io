const questions = [
    // 25 नए शब्द और उनके विकल्प/उत्तर
    { word: "वन", options: ["घर", "कानन", "जंगल", "पानी"], answers: [1, 2] },
    { word: "पक्षी", options: ["कमल", "अंडज", "द्विज", "सागर"], answers: [1, 2] },
    { word: "बादल", options: ["मेघ", "पवन", "जलद", "बिजली"], answers: [0, 2] },
    { word: "कमल", options: ["पंकज", "जलज", "हवा", "पत्थर"], answers: [0, 1] },
    { word: "ईश्वर", options: ["प्रभु", "स्वामी", "दैत्य", "मनुष्य"], answers: [0, 1] },
    { word: "अमृत", options: ["सुधा", "विष", "अमी", "जल"], answers: [0, 2] },
    { word: "शरीर", options: ["वपु", "काया", "आत्मा", "दिन"], answers: [0, 1] },
    { word: "कपड़ा", options: ["वस्त्र", "अंबर", "आभूषण", "पैर"], answers: [0, 1] },
    { word: "गधा", options: ["खर", "हाथी", "गर्दभ", "घोड़ा"], answers: [0, 2] },
    { word: "सर्प", options: ["साँप", "पक्षी", "नाग", "शेर"], answers: [0, 2] },
    { word: "तलवार", options: ["असि", "कृपाण", "धनुष", "तीर"], answers: [0, 1] },
    { word: "पुत्र", options: ["सुत", "बेटा", "पुत्री", "भाई"], answers: [0, 1] },
    { word: "पुत्री", options: ["तनया", "पुत्र", "सुता", "माता"], answers: [0, 2] },
    { word: "गंगा", options: ["भागीरथी", "यमुना", "देव नदी", "सरस्वती"], answers: [0, 2] },
    { word: "किसान", options: ["खेतिहर", "शिक्षक", "कृषक", "व्यापारी"], answers: [0, 2] },
    { word: "रात", options: ["निशा", "तम", "दिन", "रजनी"], answers: [0, 3] },
    { word: "प्रकाश", options: ["उजाला", "अंधेरा", "ज्योति", "छाया"], answers: [0, 2] },
    { word: "शत्रु", options: ["मित्र", "अरि", "वैरी", "दोस्त"], answers: [1, 2] },
    { word: "घर", options: ["निकेतन", "आवास", "जंगल", "गुफा"], answers: [0, 1] },
    { word: "हाथ", options: ["कर", "मुख", "हस्त", "पैर"], answers: [0, 2] },
    { word: "फूल", options: ["कुसुम", "पुष्प", "कली", "पत्ती"], answers: [0, 1] },
    { word: "घोड़ा", options: ["हय", "हाथी", "अश्व", "गधा"], answers: [0, 2] },
    { word: "पहाड़", options: ["गिरि", "नदी", "शैल", "सागर"], answers: [0, 2] },
    { word: "जल", options: ["पानी", "वारि", "पवन", "आग"], answers: [0, 1] },
    { word: "सोना", options: ["स्वर्ण", "रजत", "कंचन", "लोहा"], answers: [0, 2] }
];

let currentQuestionIndex = 0;
let totalCoins = 0;
let studentName = "";
let studentClass = "";

// 25 पर्यायवाची शब्दों की सूची
const wordList = [
    ["वन", "कानन", "जंगल"], ["पक्षी", "अंडज", "द्विज"], ["बादल", "मेघ", "जलद"],
    ["कमल", "पंकज", "जलज"], ["ईश्वर", "प्रभु", "स्वामी"], ["अमृत", "सुधा", "अमी"],
    ["शरीर", "वपु", "काया"], ["कपड़ा", "वस्त्र", "अंबर"], ["गधा", "खर", "गर्दभ"],
    ["सर्प", "साँप", "नाग"], ["तलवार", "असि", "कृपाण"], ["पुत्र", "सुत", "बेटा"],
    ["पुत्री", "तनया", "सुता"], ["गंगा", "भागीरथी", "देव नदी"], ["किसान", "खेतिहर", "कृषक"],
    ["रात", "निशा", "रजनी"], ["प्रकाश", "उजाला", "ज्योति"], ["शत्रु", "अरि", "वैरी"],
    ["घर", "निकेतन", "आवास"], ["हाथ", "कर", "हस्त"], ["फूल", "कुसुम", "पुष्प"],
    ["घोड़ा", "हय", "अश्व"], ["पहाड़", "गिरि", "शैल"], ["जल", "पानी", "वारि"],
    ["सोना", "स्वर्ण", "कंचन"]
];

// कोइन नियम ट्रैकिंग के लिए
let selectedOptions = []; 
let clickCount = 0; 
let clickHistory = []; // [true/false, true/false, true/false] सही/गलत का इतिहास

// ########## स्क्रीन नियंत्रण फ़ंक्शन ##########

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

    // हर नए प्रश्न के लिए रीसेट करें
    selectedOptions = [];
    clickCount = 0;
    clickHistory = []; // नया: क्लिक इतिहास रीसेट
    document.getElementById('next-button').style.display = 'none';
    const quizArea = document.getElementById('quiz-area');
    quizArea.innerHTML = ''; // पिछली सामग्री साफ़ करें

    const qData = questions[currentQuestionIndex];
    
    const html = `
        <div class="question-box">
            <h3>प्रश्न ${currentQuestionIndex + 1}: **${qData.word}** के दो सही पर्यायवाची चुनें।</h3>
            <div id="feedback-message" style="margin-bottom: 10px; font-weight: bold; color: #007bff; display: none;"></div>
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
    clickHistory.push(isCorrect); // नया: सही/गलत को इतिहास में जोड़ें
    
    element.classList.add('selected');

    if (selectedOptions.length === 2 || clickCount === 3) {
        // दो विकल्प चुने गए हैं या 3 क्लिक पूरे हो चुके हैं, उत्तर जाँचें
        checkAnswer();
    }
}

function checkAnswer() {
    const qData = questions[currentQuestionIndex];
    const correctAnswers = qData.answers;
    
    // # नया: कोइन गणना कोइन नियम के अनुसार
    let earnedCoins = 0;
    
    if (clickHistory.length >= 2) {
        const c1 = clickHistory[0];
        const c2 = clickHistory[1];
        
        // प्रथम दो क्लिक सही = 2 कोइन
        if (c1 && c2) {
            earnedCoins = 2;
        } 
        
        // प्रथम गलत, द्वितीय सही, तृतीय सही = 1 कोइन (यदि 3 क्लिक हुए हों)
        // प्रथम सही, द्वितीय गलत, तृतीय सही = 1 कोइन (यदि 3 क्लिक हुए हों)
        else if (clickHistory.length === 3) {
            const c3 = clickHistory[2];
            
            if ((!c1 && c2 && c3) || (c1 && !c2 && c3)) {
                // यह सुनिश्चित करता है कि बच्चे ने 3 क्लिक में दो सही विकल्प चुन लिए हैं
                // (2 सही *और* 1 गलत के साथ)
                const totalCorrect = clickHistory.filter(c => c).length;
                if(totalCorrect === 2){
                     earnedCoins = 1;
                }
            }
        }
    }
    
    // प्रथम 2 क्लिक गलत के बाद सही क्लिक पर कोई कोइन नहीं (यह already 0 रहेगा)
    // क्योंकि यदि c1 और c2 दोनों गलत हैं, तो अगले 'if' ब्लॉक में प्रवेश नहीं होगा।

    totalCoins += earnedCoins;
    
    // # फीडबैक और रंग दिखाना (कोइन नहीं दिखाना)
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

    // बच्चे को सामान्य फीडबैक
    const feedbackText = earnedCoins > 0 ? 
        "✅ आपका उत्तर दर्ज कर लिया गया है। अगले प्रश्न पर बढ़ें।" : 
        "❌ उत्तर दर्ज कर लिया गया है। अगले प्रश्न पर बढ़ें।";
        
    const feedbackElement = document.getElementById('feedback-message');
    feedbackElement.innerHTML = `<strong>परिणाम:</strong> ${feedbackText}`;
    feedbackElement.style.display = 'block';

    document.getElementById('next-button').style.display = 'block';
    
    currentQuestionIndex++;
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
        <p><strong>ग्रेड:</strong> <strong style="font-size: 28px; color: ${percentage >= 80 ? '#28a745' : '#ffc107'};">${grade}</strong></p>
    `;
}