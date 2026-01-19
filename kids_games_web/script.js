const questions = [
    { word: "आग", options: ["अनल", "मेघ", "अग्नि", "कानन"], answers: [0, 2] },
    { word: "पानी", options: ["नदी", "जल", "हवा", "नीर"], answers: [1, 3] },
    { word: "हवा", options: ["पवन", "जंगल", "आग", "वायु"], answers: [0, 3] },
    { word: "सूर्य", options: ["कमल", "चंदा", "रवि", "दिनकर"], answers: [2, 3] },
    { word: "चाँद", options: ["प्रभात", "शशि", "इंदु", "दिवाकर"], answers: [1, 2] },
    { word: "धरती", options: ["आसमान", "पृथ्वी", "धरा", "पर्वत"], answers: [1, 2] },
    { word: "पेड़", options: ["डाली", "पत्ता", "वृक्ष", "तरु"], answers: [2, 3] },
    { word: "फूल", options: ["फल", "डाली", "पुष्प", "सुमन"], answers: [2, 3] },
    { word: "माता", options: ["पिता", "बेटा", "माँ", "जननी"], answers: [2, 3] },
    { word: "पिता", options: ["तात", "दादी", "नाना", "जनक"], answers: [0, 3] },
    { word: "घर", options: ["सड़क", "दुकान", "गृह", "सदन"], answers: [2, 3] },
    { word: "आकाश", options: ["पानी", "नभ", "धरती", "गगन"], answers: [1, 3] },
    { word: "समुद्र", options: ["नदी", "सागर", "झील", "सिन्धु"], answers: [1, 3] },
    { word: "राजा", options: ["रानी", "सेवक", "नृप", "नरेश"], answers: [2, 3] },
    { word: "रात", options: ["भोर", "दिन", "रात्रि", "निशा"], answers: [2, 3] },
    { word: "दिन", options: ["अमावस", "रात", "दिवस", "वार"], answers: [2, 3] },
    { word: "हाथी", options: ["घोड़ा", "ऊँट", "गज", "दंती"], answers: [2, 3] },
    { word: "पक्षी", options: ["मछली", "गाय", "खग", "विहग"], answers: [2, 3] },
    { word: "ईश्वर", options: ["दैत्य", "इंसान", "प्रभु", "भगवान"], answers: [2, 3] },
    { word: "कपड़ा", options: ["भोजन", "वस्त्र", "घर", "पट"], answers: [1, 3] },
    { word: "कमल", options: ["गुलाब", "पंकज", "चमेली", "नीरज"], answers: [1, 3] },
    { word: "शरीर", options: ["आत्मा", "मन", "देह", "काया"], answers: [2, 3] },
    { word: "दोस्त", options: ["दुश्मन", "भाई", "मित्र", "सखा"], answers: [2, 3] },
    { word: "किताब", options: ["कलम", "कागज", "पुस्तक", "पोथी"], answers: [2, 3] },
    { word: "आँख", options: ["कान", "नाक", "नयन", "लोचन"], answers: [2, 3] }
];

let currentQuestionIndex = 0;
let totalCoins = 0;
let studentName = "";
let studentClass = "";

// 25 पर्यायवाची शब्दों की सूची (HTML में भरने के लिए)
const wordList = [
    ["आग", "अग्नि", "अनल"], ["पानी", "जल", "नीर"], ["हवा", "पवन", "वायु"], 
    ["सूर्य", "रवि", "दिनकर"], ["चाँद", "शशि", "इंदु"], ["धरती", "पृथ्वी", "धरा"], 
    ["पेड़", "वृक्ष", "तरु"], ["फूल", "पुष्प", "सुमन"], ["माता", "माँ", "जननी"], 
    ["पिता", "तात", "जनक"], ["घर", "गृह", "सदन"], ["आकाश", "नभ", "गगन"],
    ["समुद्र", "सागर", "सिन्धु"], ["राजा", "नृप", "नरेश"], ["रात", "रात्रि", "निशा"],
    ["दिन", "दिवस", "वार"], ["हाथी", "गज", "दंती"], ["पक्षी", "खग", "विहग"],
    ["ईश्वर", "प्रभु", "भगवान"], ["कपड़ा", "वस्त्र", "पट"], ["कमल", "पंकज", "नीरज"],
    ["शरीर", "देह", "काया"], ["दोस्त", "मित्र", "सखा"], ["किताब", "पुस्तक", "पोथी"],
    ["आँख", "नयन", "लोचन"]
];

// कोइन नियम ट्रैकिंग के लिए
let selectedOptions = []; // बच्चे द्वारा चुने गए विकल्प (इंडेक्स)
let clickCount = 0; // एक प्रश्न में क्लिक की संख्या

// ########## स्क्रीन नियंत्रण फ़ंक्शन ##########

function showList() {
    studentName = document.getElementById('student-name').value.trim();
    studentClass = document.getElementById('student-class').value.trim();

    if (studentName === "" || studentClass === "") {
        alert("कृपया अपना नाम और कक्षा भरें।");
        return;
    }

    // सूची टेबल भरना
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
    document.getElementById('next-button').style.display = 'none';
    const quizArea = document.getElementById('quiz-area');
    quizArea.innerHTML = ''; // पिछली सामग्री साफ़ करें

    const qData = questions[currentQuestionIndex];
    
    const html = `
        <div class="question-box">
            <h3>प्रश्न ${currentQuestionIndex + 1}: **${qData.word}** के दो सही पर्यायवाची चुनें।</h3>
            ${qData.options.map((option, index) => `
                <div class="option" data-index="${index}" onclick="handleOptionClick(this, ${index})">${String.fromCharCode(65 + index)}. ${option}</div>
            `).join('')}
        </div>
    `;
    quizArea.innerHTML = html;
}

function handleOptionClick(element, optionIndex) {
    if (clickCount >= 3 || document.getElementById('next-button').style.display !== 'none') {
        return; // 3 क्लिक हो चुके हैं या उत्तर जाँच हो चुकी है
    }

    clickCount++;
    
    // विकल्प को चिह्नित करें
    if (selectedOptions.includes(optionIndex)) {
        // अगर पहले से चुना है तो कुछ न करें
        return;
    }

    selectedOptions.push(optionIndex);
    element.classList.add('selected');

    if (selectedOptions.length === 2 || clickCount === 3) {
        // दो विकल्प चुने गए हैं या 3 क्लिक पूरे हो चुके हैं, उत्तर जाँचें
        checkAnswer();
    }
}

function checkAnswer() {
    const qData = questions[currentQuestionIndex];
    const correctAnswers = qData.answers;
    let correctClicks = 0;

    // सही उत्तरों की संख्या
    selectedOptions.forEach(index => {
        if (correctAnswers.includes(index)) {
            correctClicks++;
        }
    });

    // कोइन आवंटन
    let earnedCoins = 0;
    
    if (correctClicks === 2) {
        if (clickCount === 2) {
            // प्रथम दो क्लिक सही
            earnedCoins = 2;
        } else if (clickCount === 3) {
            // दो सही उत्तर 3 क्लिक में मिले
            earnedCoins = 1;
        }
    } else if (correctClicks === 1 && clickCount <= 3) {
        // एक ही सही मिला (0 कोइन)
        earnedCoins = 0;
    }

    totalCoins += earnedCoins;
    
    // परिणाम और रंग दिखाना
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        const index = parseInt(opt.getAttribute('data-index'));
        opt.onclick = null; // क्लिक डिसेबल करें
        if (correctAnswers.includes(index)) {
            opt.classList.add('correct');
        } else if (selectedOptions.includes(index)) {
            // गलत उत्तर जो बच्चे ने चुना
            opt.classList.add('incorrect');
        }
    });

    // अगले प्रश्न के लिए बटन दिखाएँ
    document.getElementById('next-button').style.display = 'block';
    
    // बच्चे को फीडबैक दें
    const feedback = earnedCoins > 0 ? 
        `✅ सही! आपको ${earnedCoins} कोइन मिले।` : 
        `❌ गलत! सही पर्यायवाची: ${qData.options[correctAnswers[0]]}, ${qData.options[correctAnswers[1]]}`;
    
    const feedbackElement = document.createElement('p');
    feedbackElement.innerHTML = `<strong>परिणाम:</strong> ${feedback}`;
    document.getElementById('quiz-area').appendChild(feedbackElement);
    
    currentQuestionIndex++;
}

// ########## मार्कशीट जनरेट करना ##########

function generateMarkSheet() {
    const totalQuestions = questions.length;
    const maxCoins = totalQuestions * 2;
    const correctQuestions = questions.filter((q, index) => {
        // यह यहाँ जटिल होगा क्योंकि कोइन नियम अलग है।
        // सरलता के लिए, हम मान लेते हैं कि 1 या 2 कोइन मिलने पर प्रश्न 'सही' माना जाएगा।
        // (यदि आप सटीक गणना चाहते हैं, तो प्रत्येक प्रश्न के लिए कोइन अलग से ट्रैक करना होगा।)
        // अभी हम केवल कुल कोइन दिखा रहे हैं।
        return true; 
    }).length;

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