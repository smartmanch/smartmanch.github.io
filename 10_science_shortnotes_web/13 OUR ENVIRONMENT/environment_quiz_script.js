// environment_quiz_script.js

// **********************************************
// 1. पुनरीक्षण के लिए 30 प्रश्नोत्तर (SAQs)
// **********************************************
const reviewQuestions = [
    // --- 20 एक लाइन के उत्तरों वाले प्रश्न (VSA) ---
    { "type": "एक-लाइन", "question": "पर्यावरण का क्या अर्थ है?", "answer": "वह सभी चीजें जो हमें घेरे रहती हैं, जिसमें सभी जैविक एवं अजैविक घटक शामिल हैं।" },
    { "type": "एक-लाइन", "question": "पारितंत्र (Ecosystem) किन घटकों से मिलकर बनता है?", "answer": "जैविक (Biotic) और अजैविक (Abiotic) घटकों के पारस्परिक मेल से।" },
    { "type": "एक-लाइन", "question": "आहार श्रृंखला में उत्पादक कौन होते हैं?", "answer": "सभी हरे पौधे और कुछ शैवाल।" },
    { "type": "एक-लाइन", "question": "एक पोषण स्तर से दूसरे पोषण स्तर तक कितनी ऊर्जा स्थानांतरित होती है?", "answer": "लगभग 10 प्रतिशत (10% नियम)।" },
    { "type": "एक-लाइन", "question": "आहार श्रृंखला में ऊर्जा का प्रवाह कैसा होता है?", "answer": "एकदिशीय (एक ही दिशा में)।" },
    { "type": "एक-लाइन", "question": "ओजोन परत वायुमंडल की किस परत में पाई जाती है?", "answer": "समतापमंडल (Stratosphere)।" },
    { "type": "एक-लाइन", "question": "ओजोन $\\left(O_3\\right)$ अणु किसके द्वारा बनते हैं?", "answer": "उच्च ऊर्जा वाली पराबैंगनी विकिरण से टूटे हुए ऑक्सीजन $\\left(O\\right)$ परमाणु का ऑक्सीजन अणु $\\left(O_2\\right)$ से जुड़ने पर।" },
    { "type": "एक-लाइन", "question": "ओजोन परत को हानि पहुँचाने वाला मुख्य रसायन कौन सा है?", "answer": "क्लोरोफ्लोरोकार्बन (CFC)।" },
    { "type": "एक-लाइन", "question": "पराबैंगनी विकिरणों से मनुष्यों को होने वाला एक मुख्य रोग?", "answer": "त्वचा का कैंसर।" },
    { "type": "एक-लाइन", "question": "जैव निम्नीकरणीय पदार्थ का एक उदाहरण दीजिए।", "answer": "फल तथा सब्जियों के छिलके / सूती कपड़ा / कागज।" },
    { "type": "एक-लाइन", "question": "अजैव निम्नीकरण पदार्थ का एक उदाहरण दीजिए।", "answer": "प्लास्टिक / पॉलिथीन / धातु / संश्लिष्ट रेशे।" },
    { "type": "एक-लाइन", "question": "सूक्ष्मजीव सभी पदार्थों का अपघटन क्यों नहीं कर सकते?", "answer": "क्योंकि एंजाइम अपनी क्रिया में विशिष्ट होते हैं (सिर्फ जैव निम्नीकरणीय पदार्थों के लिए)।" },
    { "type": "एक-लाइन", "question": "पारितंत्र में अपघटकों की क्या भूमिका है?", "answer": "मृत जीवों और अपशिष्ट का अपघटन करके पोषक तत्वों को मिट्टी में वापस मिलाना।" },
    { "type": "एक-लाइन", "question": "सर्वाहारी जीव किस प्रकार के उपभोक्ता होते हैं?", "answer": "प्राथमिक (शाकाहारी) और द्वितीयक (मांसाहारी) दोनों तरह के।" },
    { "type": "एक-लाइन", "question": "'आहार जाल' किसका प्रतिनिधित्व करता है?", "answer": "अनेक आहार श्रृंखलाओं के जटिल और परस्पर जुड़े हुए नेटवर्क का।" },
    { "type": "एक-लाइन", "question": "'कम्पोस्टिंग' क्या है?", "answer": "जैविक कचरे को गड्ढे में भरकर खाद में परिवर्तित करने की प्रक्रिया।" },
    { "type": "एक-लाइन", "question": "अपशिष्ट निपटान की एक बड़ी समस्या जो मानव गतिविधियों के कारण होती है?", "answer": "ओजोन परत का ह्रास और कचरे का निपटान।" },
    { "type": "एक-लाइन", "question": "वे चक्र जिनमें अनिवार्य पोषक तत्व एक रूप से दूसरे रूप में बदलते हैं, क्या कहलाते हैं?", "answer": "जैव-भौगोलिक रासायनिक चक्रण।" },
    { "type": "एक-लाइन", "question": "यदि घास को टिड्डा खाए और टिड्डे को मेंढक, तो मेंढक कौन सा उपभोक्ता है?", "answer": "तृतीयक उपभोक्ता (द्वितीयक मांसाहारी)।" },
    { "type": "एक-लाइन", "question": "एक तालाब किस प्रकार के पारितंत्र का उदाहरण है?", "answer": "प्राकृतिक जलीय पारितंत्र।" },

    // --- 10 दो से तीन लाइन के उत्तरों वाले प्रश्न (SA) ---
    { "type": "दो-तीन लाइन", "question": "जैव-आवर्द्धन क्या है और यह क्यों हानिकारक है?", "answer": "अजैव निम्नीकरण रसायनों का आहार श्रृंखला के प्रत्येक पोषण स्तर पर उत्तरोत्तर बढ़ती सांद्रता में संचित होना जैव-आवर्द्धन कहलाता है। यह हानिकारक है क्योंकि उच्चतम स्तर पर इनकी मात्रा बहुत अधिक हो जाती है, जैसे मानवों में, जिससे स्वास्थ्य समस्याएँ होती हैं।" },
    { "type": "दो-तीन लाइन", "question": "ओजोन परत के निर्माण और क्षति को संक्षेप में समझाइए।", "answer": "निर्माण: $\\mathrm{O}_2$ का UV प्रकाश से $\\mathrm{O}+\\mathrm{O}$ में टूटना, फिर $\\mathrm{O}$ का $\\mathrm{O}_2$ से मिलकर $\\mathrm{O}_3$ (ओजोन) बनाना। क्षति: CFC जैसे रसायन समतापमंडल में पहुँचकर $\\mathrm{O}_3$ अणुओं को तोड़कर $\\mathrm{O}_2$ में बदल देते हैं, जिससे परत पतली हो जाती है।" },
    { "type": "दो-तीन लाइन", "question": "अजैव निम्नीकरण अपशिष्ट पर्यावरण के लिए बड़ी समस्या क्यों हैं?", "answer": "क्योंकि सूक्ष्मजीव इन्हें अपघटित नहीं कर पाते, इसलिए ये पर्यावरण (मिट्टी और जल) में लंबे समय तक बने रहते हैं, जिससे प्रदूषण और जैव-आवर्द्धन होता है। इनका निपटान मुश्किल होता है।" },
    { "type": "दो-तीन लाइन", "question": "कचरा प्रबंधन के लिए किन्हीं दो विधियों का वर्णन करें।", "answer": "1. **पुनः चक्रण:** प्लास्टिक, धातु जैसे अजैव निम्नीकरण पदार्थों को पिघलाकर या संसाधित करके नए उत्पाद बनाना। 2. **कम्पोस्टिंग:** जैविक कचरे (सब्जी के छिलके, पत्तियाँ) को खाद गड्डे में डालकर अपघटन द्वारा खाद में परिवर्तित करना।" },
    { "type": "दो-तीन लाइन", "question": "आहार श्रृंखला में ऊर्जा का स्तर उत्तरोत्तर क्यों घटता जाता है?", "answer": "प्रत्येक स्तर पर ऊर्जा का 90% भाग जीवों द्वारा जैविक कार्यों में उपयोग किया जाता है और ऊष्मा के रूप में वातावरण में लुप्त हो जाता है। इसलिए, अगले स्तर के लिए केवल 10% ऊर्जा ही बचती है।" },
    { "type": "दो-तीन लाइन", "question": "पारितंत्र में अपघटकों की अनुपस्थिति के दो परिणाम क्या होंगे?", "answer": "1. मृत और अपशिष्ट पदार्थों का ढेर लग जाएगा, जिससे प्रदूषण होगा। 2. मिट्टी में पोषक तत्वों (जैसे कार्बन, नाइट्रोजन) का चक्रण रुक जाएगा, जिससे पौधों के विकास के लिए पोषक तत्वों की कमी हो जाएगी।" },
    { "type": "दो-तीन लाइन", "question": "जैव निम्नीकरणीय पदार्थ किसे कहते हैं और ये अजैव निम्नीकरण से कैसे भिन्न हैं?", "answer": "जैव निम्नीकरणीय पदार्थ वे हैं जो सूक्ष्मजीवों द्वारा एंजाइम की सहायता से छोटे घटकों में बदल जाते हैं (जैसे कागज, लकड़ी)। अजैव निम्नीकरण वे हैं जो अपघटित नहीं होते (जैसे प्लास्टिक, धातु)।" },
    { "type": "दो-तीन लाइन", "question": "जैविक और अजैविक घटक मिलकर पारितंत्र का निर्माण कैसे करते हैं?", "answer": "जैविक घटक (पौधे, जीव) अजैविक घटकों (पानी, हवा, मिट्टी, सूर्य का प्रकाश) का उपयोग जीवन प्रक्रिया के लिए करते हैं। वे भोजन और ऊर्जा के लिए एक-दूसरे पर निर्भर रहते हैं, जिससे एक संतुलित तंत्र (पारितंत्र) बनता है।" },
    { "type": "दो-तीन लाइन", "question": "तीन 'R' की अवधारणा को समझाइए।", "answer": "3R का मतलब है **कम उपयोग** (Reduce-वस्तुओं की खपत कम करना), **पुनः उपयोग** (Reuse-वस्तुओं को फेंकने के बजाय दोबारा उपयोग करना), और **पुनः चक्रण** (Recycle-कचरे से नई वस्तुएं बनाना)।" },
    { "type": "दो-तीन लाइन", "question": "यदि सभी उत्पादक पारितंत्र से हटा दिए जाएं तो क्या होगा?", "answer": "उत्पादक ऊर्जा का प्राथमिक स्रोत हैं। यदि वे हट जाएंगे, तो प्राथमिक उपभोक्ताओं (शाकाहारियों) के लिए भोजन समाप्त हो जाएगा, जिससे पूरी आहार श्रृंखला टूट जाएगी और अंततः सभी उच्च उपभोक्ता (मांसाहारी, सर्वाहारी) भी मर जाएंगे।" }
];


// **********************************************
// 2. 25 बहुविकल्पीय क्विज प्रश्न (MCQs)
// **********************************************
const quizQuestions = [
    {
        "questionNumber": 1,
        "question": "पारितंत्र में सभी हरे पौधे और शैवाल को क्या कहा जाता है?",
        "answerOptions": [
            { "text": "प्राथमिक उपभोक्ता", "isCorrect": false, "rationale": "प्राथमिक उपभोक्ता पौधों को खाते हैं।" },
            { "text": "उत्पादक", "isCorrect": true, "rationale": "हरे पौधे सूर्य के प्रकाश से भोजन बनाते हैं, इसलिए वे उत्पादक हैं।" },
            { "text": "अपघटक", "isCorrect": false, "rationale": "अपघटक मृत पदार्थों को तोड़ते हैं।" },
            { "text": "द्वितीयक उपभोक्ता", "isCorrect": false, "rationale": "द्वितीयक उपभोक्ता प्राथमिक उपभोक्ताओं को खाते हैं।" }
        ]
    },
    {
        "questionNumber": 2,
        "question": "आहार श्रृंखला में ऊर्जा का प्रवाह कैसा होता है?",
        "answerOptions": [
            { "text": "बहुदिशीय (कई दिशाओं में)", "isCorrect": false, "rationale": "ऊर्जा प्रवाह एक दिशा में ही होता है।" },
            { "text": "एकदिशीय (एक ही दिशा में)", "isCorrect": true, "rationale": "ऊर्जा केवल उत्पादक से उपभोक्ता की ओर जाती है, वापस नहीं आती।" },
            { "text": "चक्रीय (चक्रवाती)", "isCorrect": false, "rationale": "पदार्थ चक्रीय होते हैं, ऊर्जा नहीं।" },
            { "text": "अनियमित", "isCorrect": false, "rationale": "यह एक व्यवस्थित प्रक्रिया है।" }
        ]
    },
    {
        "questionNumber": 3,
        "question": "एक पोषण स्तर से दूसरे पोषण स्तर तक औसत ऊर्जा स्थानांतरण कितना होता है?",
        "answerOptions": [
            { "text": "100 प्रतिशत", "isCorrect": false, "rationale": "इतनी ऊर्जा कभी स्थानांतरित नहीं होती।" },
            { "text": "50 प्रतिशत", "isCorrect": false, "rationale": "यह बहुत अधिक है।" },
            { "text": "10 प्रतिशत", "isCorrect": true, "rationale": "इसे 10% नियम कहा जाता है।" },
            { "text": "1 प्रतिशत", "isCorrect": false, "rationale": "सूर्य से पौधों को केवल 1% ऊर्जा मिलती है, लेकिन पोषण स्तर के बीच 10%।" }
        ]
    },
    {
        "questionNumber": 4,
        "question": "निम्नलिखित में से कौन सा अजैव निम्नीकरण पदार्थ है?",
        "answerOptions": [
            { "text": "सूती कपड़ा", "isCorrect": false, "rationale": "यह जैव निम्नीकरणीय है।" },
            { "text": "कागज", "isCorrect": false, "rationale": "यह जैव निम्नीकरणीय है।" },
            { "text": "प्लास्टिक के खिलौने", "isCorrect": true, "rationale": "प्लास्टिक अजैव निम्नीकरण है, क्योंकि सूक्ष्मजीव इसे अपघटित नहीं कर पाते।" },
            { "text": "फल के छिलके", "isCorrect": false, "rationale": "यह जैव निम्नीकरणीय है।" }
        ]
    },
    {
        "questionNumber": 5,
        "question": "ओजोन परत वायुमंडल के किस भाग में पाई जाती है?",
        "answerOptions": [
            { "text": "क्षोभमंडल", "isCorrect": false, "rationale": "यह सबसे निचली परत है।" },
            { "text": "समतापमंडल", "isCorrect": true, "rationale": "ओजोन परत समतापमंडल में पाई जाती है और $\\mathrm{UV}$ किरणों को अवशोषित करती है।" },
            { "text": "मध्यमंडल", "isCorrect": false, "rationale": "यह समतापमंडल से ऊपर है।" },
            { "text": "बाह्यमंडल", "isCorrect": false, "rationale": "यह सबसे बाहरी परत है।" }
        ]
    },
    {
        "questionNumber": 6,
        "question": "ओजोन $\\left(\mathrm{O}_3\\right)$ परत को हानि पहुँचाने वाला मुख्य रसायन कौन सा है?",
        "answerOptions": [
            { "text": "कार्बन डाइऑक्साइड $\\left(\mathrm{CO}_2\\right)$", "isCorrect": false, "rationale": "यह ग्रीनहाउस गैस है।" },
            { "text": "सल्फर डाइऑक्साइड $\\left(\mathrm{SO}_2\\right)$", "isCorrect": false, "rationale": "यह अम्लीय वर्षा का कारण बनता है।" },
            { "text": "क्लोरोफ्लोरोकार्बन $\\left(\mathrm{CFCs}\\right)$", "isCorrect": true, "rationale": "CFCs ओजोन अणुओं को तोड़ते हैं।" },
            { "text": "नाइट्रोजन $\\left(\mathrm{N}_2\\right)$", "isCorrect": false, "rationale": "यह वायुमंडल का मुख्य घटक है।" }
        ]
    },
    {
        "questionNumber": 7,
        "question": "पारितंत्र में अपघटकों (जैसे बैक्टीरिया, कवक) की मुख्य भूमिका क्या है?",
        "answerOptions": [
            { "text": "केवल भोजन का उत्पादन करना।", "isCorrect": false, "rationale": "यह उत्पादकों का कार्य है।" },
            { "text": "ऊर्जा का संग्रहण करना।", "isCorrect": false, "rationale": "यह भी मुख्य कार्य नहीं है।" },
            { "text": "पोषक तत्वों का चक्रण और पुनर्चक्रण करना।", "isCorrect": true, "rationale": "वे मृत जीवों को अपघटित कर पोषक तत्वों को मिट्टी में मिलाते हैं।" },
            { "text": "सूर्य के प्रकाश को अवशोषित करना।", "isCorrect": false, "rationale": "यह उत्पादकों का कार्य है।" }
        ]
    },
    {
        "questionNumber": 8,
        "question": "पराबैंगनी विकिरणों के उच्च स्तर के कारण मनुष्यों में होने वाला संभावित रोग कौन सा है?",
        "answerOptions": [
            { "text": "हैजा", "isCorrect": false, "rationale": "यह जलजनित रोग है।" },
            { "text": "त्वचा का कैंसर", "isCorrect": true, "rationale": "पराबैंगनी किरणें त्वचा को सीधे नुकसान पहुंचाती हैं।" },
            { "text": "मधुमेह", "isCorrect": false, "rationale": "यह हार्मोनल रोग है।" },
            { "text": "निमोनिया", "isCorrect": false, "rationale": "यह श्वसन संबंधी रोग है।" }
        ]
    },
    {
        "questionNumber": 9,
        "question": "वह प्रक्रिया जिसके द्वारा हानिकारक रसायन आहार श्रृंखला के उच्च पोषण स्तरों में संचित होते जाते हैं, कहलाती है:",
        "answerOptions": [
            { "text": "पोषण चक्रण", "isCorrect": false, "rationale": "यह पोषक तत्वों का चक्रण है।" },
            { "text": "जैव-आवर्द्धन (Biomagnification)", "isCorrect": true, "rationale": "यह अजैव निम्नीकरण रसायनों के संचय को दर्शाता है।" },
            { "text": "आहार जाल", "isCorrect": false, "rationale": "यह कई श्रृंखलाओं का नेटवर्क है।" },
            { "text": "उत्पादन", "isCorrect": false, "rationale": "यह भोजन बनाने की प्रक्रिया है।" }
        ]
    },
    {
        "questionNumber": 10,
        "question": "एक तालाब किस प्रकार के पारितंत्र का उदाहरण है?",
        "answerOptions": [
            { "text": "कृत्रिम जलीय पारितंत्र", "isCorrect": false, "rationale": "कृत्रिम पारितंत्र मानव निर्मित होते हैं, जैसे एक्वेरियम।" },
            { "text": "प्राकृतिक स्थलीय पारितंत्र", "isCorrect": false, "rationale": "तालाब जलीय है, स्थलीय नहीं।" },
            { "text": "प्राकृतिक जलीय पारितंत्र", "isCorrect": true, "rationale": "तालाब प्रकृति में मौजूद है और एक जलीय पारितंत्र है।" },
            { "text": "मानव निर्मित मरुस्थल", "isCorrect": false, "rationale": "यह गलत है।" }
        ]
    },
    {
        "questionNumber": 11,
        "question": "निम्नलिखित में से कौन सा 3R (कचरा प्रबंधन) की अवधारणा में शामिल नहीं है?",
        "answerOptions": [
            { "text": "पुनः उपयोग (Reuse)", "isCorrect": false, "rationale": "यह शामिल है।" },
            { "text": "पुनः चक्रण (Recycle)", "isCorrect": false, "rationale": "यह शामिल है।" },
            { "text": "पुनः निर्माण (Rebuild)", "isCorrect": true, "rationale": "Reduce (कम उपयोग), Reuse (पुनः उपयोग) और Recycle (पुनः चक्रण) ही 3R हैं।" },
            { "text": "कम उपयोग (Reduce)", "isCorrect": false, "rationale": "यह शामिल है।" }
        ]
    },
    {
        "questionNumber": 12,
        "question": "आहार श्रृंखला में उच्चतम ऊर्जा संचय कहाँ होता है?",
        "answerOptions": [
            { "text": "प्राथमिक उपभोक्ता", "isCorrect": false, "rationale": "उत्पादक सबसे अधिक संचय करते हैं।" },
            { "text": "द्वितीयक उपभोक्ता", "isCorrect": false, "rationale": "इनमें कम संचय होता है।" },
            { "text": "उत्पादक", "isCorrect": true, "rationale": "उत्पादक सीधे सूर्य से ऊर्जा प्राप्त करते हैं और इसमें सबसे अधिक ऊर्जा होती है।" },
            { "text": "अपघटक", "isCorrect": false, "rationale": "इनमें सबसे कम ऊर्जा होती है।" }
        ]
    },
    {
        "questionNumber": 13,
        "question": "ओजोन अणु $\\left(\mathrm{O}_3\\right)$ बनाने के लिए किस अणु का उपयोग होता है?",
        "answerOptions": [
            { "text": "नाइट्रोजन $\\left(\mathrm{N}_2\\right)$", "isCorrect": false, "rationale": "ओजोन ऑक्सीजन से बनता है।" },
            { "text": "एक ऑक्सीजन अणु $\\left(\mathrm{O}_2\\right)$", "isCorrect": true, "rationale": "सूर्य का प्रकाश $\\mathrm{O}_2$ को तोड़ता है, और $\\mathrm{O}$ परमाणु दूसरे $\\mathrm{O}_2$ से जुड़कर $\\mathrm{O}_3$ बनाता है।" },
            { "text": "कार्बन मोनोऑक्साइड $\\left(\mathrm{CO}\\right)$", "isCorrect": false, "rationale": "इससे ओजोन नहीं बनता।" },
            { "text": "जलवाष्प $\\left(\mathrm{H}_2\mathrm{O}\\right)$", "isCorrect": false, "rationale": "इससे ओजोन नहीं बनता।" }
        ]
    },
    {
        "questionNumber": 14,
        "question": "जैव निम्नीकरणीय पदार्थ किसे कहते हैं?",
        "answerOptions": [
            { "text": "जो केवल उच्च तापमान पर जलते हैं।", "isCorrect": false, "rationale": "यह परिभाषा नहीं है।" },
            { "text": "जो अपघटित नहीं होते।", "isCorrect": false, "rationale": "यह अजैव निम्नीकरण है।" },
            { "text": "जो सूक्ष्मजीवों द्वारा अपघटित हो जाते हैं।", "isCorrect": true, "rationale": "जैव निम्नीकरणीय पदार्थ सूक्ष्मजीवों द्वारा तोड़ दिए जाते हैं।" },
            { "text": "जो केवल जल में घुल जाते हैं।", "isCorrect": false, "rationale": "यह परिभाषा नहीं है।" }
        ]
    },
    {
        "questionNumber": 15,
        "question": "कचरा प्रबंधन की वह विधि जिसमें जैविक कचरे को गड्ढे में भरकर खाद में बदला जाता है?",
        "answerOptions": [
            { "text": "पुनः चक्रण", "isCorrect": false, "rationale": "पुनः चक्रण धातु और प्लास्टिक के लिए है।" },
            { "text": "सीवेज उपचार", "isCorrect": false, "rationale": "यह नाली के पानी के लिए है।" },
            { "text": "कम्पोस्टिंग", "isCorrect": true, "rationale": "कम्पोस्टिंग जैविक कचरे से खाद बनाने की प्रक्रिया है।" },
            { "text": "कूड़ा भराव क्षेत्र", "isCorrect": false, "rationale": "यह निचले क्षेत्रों में कचरा दबाने की विधि है।" }
        ]
    },
    {
        "questionNumber": 16,
        "question": "पारितंत्र के अजैविक घटकों में शामिल हैं:",
        "answerOptions": [
            { "text": "केवल पौधे और जंतु", "isCorrect": false, "rationale": "ये जैविक घटक हैं।" },
            { "text": "मिट्टी, तापमान और हवा", "isCorrect": true, "rationale": "ये सभी निर्जीव (अजैविक) घटक हैं।" },
            { "text": "बैक्टीरिया और कवक", "isCorrect": false, "rationale": "ये जैविक अपघटक हैं।" },
            { "text": "उत्पादक और उपभोक्ता", "isCorrect": false, "rationale": "ये जैविक घटक हैं।" }
        ]
    },
    {
        "questionNumber": 17,
        "question": "यदि किसी आहार श्रृंखला में उत्पादक स्तर पर 50000 जूल ऊर्जा उपलब्ध है, तो तृतीयक उपभोक्ता को कितनी ऊर्जा मिलेगी?",
        "answerOptions": [
            { "text": "5000 जूल", "isCorrect": false, "rationale": "यह प्राथमिक उपभोक्ता को मिलेगी।" },
            { "text": "500 जूल", "isCorrect": false, "rationale": "यह द्वितीयक उपभोक्ता को मिलेगी।" },
            { "text": "50 जूल", "isCorrect": true, "rationale": "उत्पादक $\\rightarrow$ प्राथमिक $\\rightarrow$ द्वितीयक $\\rightarrow$ तृतीयक: $50000 \\rightarrow 5000 \\rightarrow 500 \\rightarrow 50$ (10% नियम)।" },
            { "text": "5 जूल", "isCorrect": false, "rationale": "यह चतुर्थक उपभोक्ता को मिलेगी।" }
        ]
    },
    {
        "questionNumber": 18,
        "question": "जैव-आवर्द्धन का सबसे अधिक खतरा किसे है?",
        "answerOptions": [
            { "text": "उत्पादकों को", "isCorrect": false, "rationale": "इनमें सांद्रता कम होती है।" },
            { "text": "प्राथमिक उपभोक्ताओं को", "isCorrect": false, "rationale": "इनमें सांद्रता उच्च उपभोक्ताओं से कम होती है।" },
            { "text": "द्वितीयक उपभोक्ताओं को", "isCorrect": false, "rationale": "इनमें सांद्रता उच्चतम उपभोक्ताओं से कम होती है।" },
            { "text": "उच्चतम पोषण स्तर के जीवों को", "isCorrect": true, "rationale": "जैव-आवर्द्धन के कारण हानिकारक रसायनों की सांद्रता उच्चतम स्तर पर सबसे अधिक होती है।" }
        ]
    },
    {
        "questionNumber": 19,
        "question": "जैव-भौगोलिक रासायनिक चक्रण में किसका प्रवाह शामिल है?",
        "answerOptions": [
            { "text": "केवल ऊर्जा का।", "isCorrect": false, "rationale": "ऊर्जा का नहीं, तत्वों का।" },
            { "text": "केवल तापमान का।", "isCorrect": false, "rationale": "तापमान चक्रण नहीं होता।" },
            { "text": "अनिवार्य पोषक तत्व (जैसे नाइट्रोजन, कार्बन, जल) का।", "isCorrect": true, "rationale": "ये तत्व एक रूप से दूसरे रूप में बदलते रहते हैं।" },
            { "text": "केवल प्रकाश का।", "isCorrect": false, "rationale": "प्रकाश चक्रण नहीं होता।" }
        ]
    },
    {
        "questionNumber": 20,
        "question": "यदि किसी आहार श्रृंखला से सभी अपघटकों को हटा दिया जाए, तो मुख्य परिणाम क्या होगा?",
        "answerOptions": [
            { "text": "उत्पादकों की संख्या तेजी से बढ़ेगी।", "isCorrect": false, "rationale": "पोषक तत्वों की कमी से उत्पादक भी प्रभावित होंगे।" },
            { "text": "पोषक तत्वों का चक्रण रुक जाएगा।", "isCorrect": true, "rationale": "अपघटक ही पोषक तत्वों को वापस मिट्टी में मिलाते हैं।" },
            { "text": "ऊर्जा का प्रवाह द्विदिशीय हो जाएगा।", "isCorrect": false, "rationale": "ऊर्जा का प्रवाह हमेशा एकदिशीय रहता है।" },
            { "text": "पर्यावरण में केवल अजैविक घटक बचेंगे।", "isCorrect": false, "rationale": "जैविक घटक भी होंगे, पर वे मरते रहेंगे।" }
        ]
    },
    {
        "questionNumber": 21,
        "question": "पर्यावरण में हो रही गिरावट और समस्याओं का कारण क्या है?",
        "answerOptions": [
            { "text": "केवल प्राकृतिक आपदाएँ।", "isCorrect": false, "rationale": "मानवीय गतिविधियाँ भी बड़ा कारण हैं।" },
            { "text": "मानव की गतिविधियाँ।", "isCorrect": true, "rationale": "ओजोन ह्रास और कचरे का निपटान मानव गतिविधियों के कारण होते हैं।" },
            { "text": "केवल वन्यजीवों की संख्या में वृद्धि।", "isCorrect": false, "rationale": "यह कारण नहीं है।" },
            { "text": "केवल अजैविक घटकों का कम होना।", "isCorrect": false, "rationale": "यह कारण नहीं है।" }
        ]
    },
    {
        "questionNumber": 22,
        "question": "वह जीव जो पौधों (उत्पादकों) और जंतुओं (उपभोक्ताओं) दोनों को खाते हैं, कहलाते हैं:",
        "answerOptions": [
            { "text": "शाकाहारी", "isCorrect": false, "rationale": "केवल पौधे खाते हैं।" },
            { "text": "मांसाहारी", "isCorrect": false, "rationale": "केवल मांस खाते हैं।" },
            { "text": "सर्वाहारी", "isCorrect": true, "rationale": "वे पौधे और मांस दोनों खाते हैं।" },
            { "text": "अपघटक", "isCorrect": false, "rationale": "ये मृत पदार्थों को खाते हैं।" }
        ]
    },
    {
        "questionNumber": 23,
        "question": "यदि घास को खरगोश खाए और खरगोश को लोमड़ी, तो लोमड़ी किस पोषण स्तर पर है?",
        "answerOptions": [
            { "text": "उत्पादक", "isCorrect": false, "rationale": "उत्पादक पौधे होते हैं।" },
            { "text": "प्राथमिक उपभोक्ता", "isCorrect": false, "rationale": "खरगोश प्राथमिक उपभोक्ता है।" },
            { "text": "द्वितीयक उपभोक्ता", "isCorrect": true, "rationale": "लोमड़ी खरगोश (प्राथमिक उपभोक्ता) को खाती है।" },
            { "text": "तृतीयक उपभोक्ता", "isCorrect": false, "rationale": "तृतीयक उपभोक्ता द्वितीयक उपभोक्ता को खाते हैं।" }
        ]
    },
    {
        "questionNumber": 24,
        "question": "ओजोन परत की क्षति को कम करने के लिए किस प्रोटोकॉल पर सहमति बनी?",
        "answerOptions": [
            { "text": "क्योटो प्रोटोकॉल", "isCorrect": false, "rationale": "यह ग्रीनहाउस गैसों को कम करने के लिए है।" },
            { "text": "मॉन्ट्रियल प्रोटोकॉल", "isCorrect": true, "rationale": "यह CFCs और ओजोन परत को हानि पहुँचाने वाले अन्य पदार्थों को नियंत्रित करने के लिए है।" },
            { "text": "पेरिस समझौता", "isCorrect": false, "rationale": "यह जलवायु परिवर्तन से संबंधित है।" },
            { "text": "विश्व व्यापार समझौता", "isCorrect": false, "rationale": "यह व्यापार से संबंधित है।" }
        ]
    },
    {
        "questionNumber": 25,
        "question": "अजैव निम्नीकरण अपशिष्टों के निपटान के लिए कौन सी विधि सबसे उपयुक्त है?",
        "answerOptions": [
            { "text": "खुले में जलाना", "isCorrect": false, "rationale": "इससे प्रदूषण होता है।" },
            { "text": "कम्पोस्टिंग", "isCorrect": false, "rationale": "यह केवल जैविक कचरे के लिए है।" },
            { "text": "पुनः चक्रण (Recycling)", "isCorrect": true, "rationale": "पुनः चक्रण अजैव निम्नीकरण पदार्थों (जैसे प्लास्टिक, धातु) के प्रबंधन के लिए सबसे उपयुक्त है।" },
            { "text": "सीवेज उपचार", "isCorrect": false, "rationale": "यह नाली के पानी के लिए है।" }
    }
];

// ग्लोबल वेरिएबल्स, फंक्शन
let currentQuestionIndex = 0;
let totalScore = 0;
let hasAnsweredCurrentQuestion = false;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const scoreDisplay = document.getElementById('current-score');
const qNumDisplay = document.getElementById('current-question-number');
const totalQDisplay = document.getElementById('total-questions');
const feedbackMessage = document.getElementById('feedback-message');

const startScreen = document.getElementById('start-screen');
const reviewScreen = document.getElementById('review-screen');
const reviewContent = document.getElementById('review-content');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const markSheet = document.getElementById('mark-sheet');

let studentName = "";
let studentClass = "";
let studentRoll = "";

// Fisher-Yates (Knuth) Shuffle Algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 1. पुनरीक्षण स्क्रीन दिखाने का फंक्शन (त्रुटि सुधार के साथ)
function showReviewScreen() {
    const nameInput = document.getElementById('student-name');
    const classInput = document.getElementById('student-class');
    const rollInput = document.getElementById('student-roll');

    // मानों को ट्रिम (Trim) करके अतिरिक्त खाली स्थान हटाना
    studentName = nameInput.value.trim();
    studentClass = classInput.value.trim();
    studentRoll = rollInput.value.trim();

    let allFieldsFilled = true;

    // पिछले एरर हाइलाइट्स को हटाना
    nameInput.classList.remove('error-highlight');
    classInput.classList.remove('error-highlight');
    rollInput.classList.remove('error-highlight');
    
    // ❌ नए चेक: खाली फ़ील्ड की जांच करना और हाइलाइट करना ❌
    if (!studentName) {
        nameInput.classList.add('error-highlight');
        allFieldsFilled = false;
    }
    if (!studentClass) {
        classInput.classList.add('error-highlight');
        allFieldsFilled = false;
    }
    if (!studentRoll) {
        rollInput.classList.add('error-highlight');
        allFieldsFilled = false;
    }

    if (!allFieldsFilled) {
        // यदि कोई फ़ील्ड खाली है, तो चेतावनी दें और यहीं रुक जाएँ (return)
        alert("कृपया क्विज शुरू करने से पहले अपना नाम, कक्षा और रोल नंबर भरें। खाली फ़ील्ड अब लाल रंग से हाइलाइट हो गए हैं।");
        return; // यह सुनिश्चित करता है कि पेज आगे नहीं बढ़ेगा
    }

    // यदि सब कुछ ठीक है, तो स्क्रीन बदलें
    startScreen.style.display = 'none';
    reviewScreen.style.display = 'block';

    reviewContent.innerHTML = '';
    
    // 20 एक लाइन वाले प्रश्न लोड करना
    reviewContent.innerHTML += '<h4>⭐ 20 एक-लाइन उत्तर वाले प्रश्न</h4>';
    reviewQuestions.filter(q => q.type === 'एक-लाइन').forEach((item, index) => {
        reviewContent.innerHTML += `
            <div class="qa-item">
                <p><strong>${index + 1}. प्रश्न:</strong> ${item.question}</p>
                <p style="color: #1b5e20;"><strong>उत्तर:</strong> ${item.answer}</p>
            </div>
        `;
    });
    
    // 10 दो-तीन लाइन वाले प्रश्न लोड करना
    reviewContent.innerHTML += '<h4>⭐ 10 दो-से-तीन-लाइन उत्तर वाले प्रश्न</h4>';
    reviewQuestions.filter(q => q.type === 'दो-तीन लाइन').forEach((item, index) => {
        reviewContent.innerHTML += `
            <div class="qa-item">
                <p><strong>${index + 1 + 20}. प्रश्न:</strong> ${item.question}</p>
                <p style="color: #1b5e20;"><strong>उत्तर:</strong> ${item.answer}</p>
            </div>
        `;
    });
}


// 2. MCQ क्विज शुरू करने का फंक्शन 
function startMCQQuiz() {
    reviewScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    
    shuffleArray(quizQuestions); 

    totalQDisplay.textContent = quizQuestions.length; 

    loadQuestion(currentQuestionIndex);
}

// 3. प्रश्न लोड करने का मुख्य फंक्शन
function loadQuestion(index) {
    if (index >= quizQuestions.length) {
        showResults();
        return;
    }

    hasAnsweredCurrentQuestion = false;
    nextButton.style.display = 'none';
    feedbackMessage.innerHTML = '';
    
    const currentQuestion = quizQuestions[index];
    
    shuffleArray(currentQuestion.answerOptions); 
    
    qNumDisplay.textContent = index + 1;
    questionText.innerHTML = `${index + 1}. ${currentQuestion.question}`;
    
    optionsContainer.innerHTML = '';
    currentQuestion.answerOptions.forEach((option) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.innerHTML = option.text;
        
        optionDiv.onclick = () => checkAnswer(optionDiv, option.isCorrect, option.rationale);
        
        optionsContainer.appendChild(optionDiv);
    });
}


// 4. उत्तर जांचने का फंक्शन (2 अंक नियम) 
function checkAnswer(selectedElement, isCorrect, rationale) {
    if (hasAnsweredCurrentQuestion) {
        return; 
    }
    
    hasAnsweredCurrentQuestion = true;
    
    Array.from(optionsContainer.children).forEach(option => {
        option.onclick = null;
    });

    if (isCorrect) {
        selectedElement.classList.add('correct');
        totalScore += 2; // सही उत्तर के लिए 2 अंक
        scoreDisplay.textContent = totalScore;
        feedbackMessage.innerHTML = `<span class="correct">✅ सही उत्तर! (+2 अंक)</span>`;
    } else {
        selectedElement.classList.add('incorrect');
        // गलत उत्तर पर 0 अंक
        feedbackMessage.innerHTML = `<span class="incorrect">❌ गलत उत्तर। (+0 अंक)</span>`;
        highlightCorrectAnswer();
    }

    // व्याख्या (Rationale) दिखाएँ
    feedbackMessage.innerHTML += `<p style="margin-top: 5px;"><strong>व्याख्या:</strong> ${rationale}</p>`;

    // अगले प्रश्न का बटन दिखाएँ
    nextButton.style.display = 'block';
}


// 5. सही उत्तर को हाइलाइट करने का फंक्शन 
function highlightCorrectAnswer() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const options = optionsContainer.children;
    
    let correctText = currentQuestion.answerOptions.find(opt => opt.isCorrect).text;

    Array.from(options).forEach(optionDiv => {
        if (optionDiv.innerHTML.trim() === correctText) { 
             if (!optionDiv.classList.contains('correct')) { 
                optionDiv.classList.add('correct');
                optionDiv.style.opacity = '0.7'; 
                optionDiv.innerHTML += `<span style="float: right; margin-left: 10px;">(सही उत्तर)</span>`;
             }
        }
    });
}


// 6. अगले प्रश्न पर जाने का फंक्शन
function loadNextQuestion() {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
}


// 7. परिणाम दिखाने का फंक्शन 
function showResults() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    
    const totalQuestions = quizQuestions.length;
    const maxScore = totalQuestions * 2;
    const percentage = (totalScore / maxScore) * 100;
    
    let grade;
    if (percentage >= 90) grade = "A+ (अति उत्कृष्ट) 🏆";
    else if (percentage >= 80) grade = "A (उत्कृष्ट) 👍";
    else if (percentage >= 70) grade = "B+ (बहुत अच्छा) 😊";
    else if (percentage >= 60) grade = "B (अच्छा) 🙂";
    else grade = "C (सुधार की आवश्यकता) 😟";
    
    markSheet.innerHTML = `
        <p><strong>विद्यार्थी का नाम:</strong> ${studentName}</p>
        <p><strong>कक्षा:</strong> ${studentClass}</p>
        <p><strong>रोल नंबर:</strong> ${studentRoll}</p>
        <hr>
        <p><strong>कुल प्रश्न:</strong> ${totalQuestions}</p>
        <p><strong>प्राप्त कुल अंक:</strong> <strong style="font-size: 1.5em; color: #1b5e20;">${totalScore}</strong> (अधिकतम ${maxScore})</p>
        <p><strong>प्रतिशत:</strong> ${percentage.toFixed(2)}%</p>
        <hr>
        <p><strong>ग्रेड:</strong> <strong style="font-size: 1.3em; color: #dc3545;">${grade}</strong></p>
    `;
}