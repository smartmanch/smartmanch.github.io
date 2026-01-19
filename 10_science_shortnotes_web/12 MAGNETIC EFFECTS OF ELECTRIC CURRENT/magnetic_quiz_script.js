// magnetic_quiz_script.js

// **********************************************
// 1. पुनरीक्षण के लिए 30 प्रश्नोत्तर (SAQs)
// **********************************************
const reviewQuestions = [
    // --- 20 एक लाइन के उत्तरों वाले प्रश्न (VSA) ---
    { "type": "एक-लाइन", "question": "चुम्बकीय क्षेत्र का SI मात्रक क्या है?", "answer": "टेस्ला (Tesla)।" },
    { "type": "एक-लाइन", "question": "चुम्बक के कितने ध्रुव होते हैं?", "answer": "दो (उत्तरी ध्रुव और दक्षिणी ध्रुव)।" },
    { "type": "एक-लाइन", "question": "स्वतंत्र रूप से लटकाई हुई चुम्बक किस दिशा में रुकती है?", "answer": "लगभग उत्तर-दक्षिण दिशा में।" },
    { "type": "एक-लाइन", "question": "चुम्बकीय क्षेत्र रेखाएँ चुम्बक के बाहर कहाँ से प्रकट होती हैं?", "answer": "उत्तरी ध्रुव से।" },
    { "type": "एक-लाइन", "question": "चुम्बकीय क्षेत्र रेखाएँ कहाँ पर विलीन हो जाती हैं?", "answer": "दक्षिणी ध्रुव पर।" },
    { "type": "एक-लाइन", "question": "वह नियम जो सीधे धारावाही चालक के चुम्बकीय क्षेत्र की दिशा बताता है?", "answer": "दक्षिण-हस्त अंगुष्ठ नियम।" },
    { "type": "एक-लाइन", "question": "वह युक्ति जो विद्युत ऊर्जा को यांत्रिक ऊर्जा में बदलती है?", "answer": "विद्युत मोटर।" },
    { "type": "एक-लाइन", "question": "वह युक्ति जो यांत्रिक ऊर्जा को विद्युत ऊर्जा में बदलती है?", "answer": "विद्युत जनित्र (जेनरेटर)।" },
    { "type": "एक-लाइन", "question": "विद्युत मोटर किस सिद्धांत पर कार्य करती है?", "answer": "चुम्बकीय क्षेत्र में रखे धारावाही चालक पर बल के सिद्धांत पर।" },
    { "type": "एक-लाइन", "question": "लघुपथन (शॉर्ट सर्किट) का मुख्य कारण क्या है?", "answer": "विद्युन्मय (लाइव) तार का उदासीन (न्यूट्रल) तार से सीधा संपर्क।" },
    { "type": "एक-लाइन", "question": "घरों में विद्युन्मय तार का रंग सामान्यतः क्या होता है?", "answer": "लाल।" },
    { "type": "एक-लाइन", "question": "घरों में उदासीन तार का रंग सामान्यतः क्या होता है?", "answer": "काला।" },
    { "type": "एक-लाइन", "question": "घरों में भूसंपर्क तार (अर्थ वायर) का रंग सामान्यतः क्या होता है?", "answer": "हरा।" },
    { "type": "एक-लाइन", "question": "फ्यूज तार का गलनांक कैसा होना चाहिए?", "answer": "निम्न (कम)।" },
    { "type": "एक-लाइन", "question": "वैद्युत चुम्बकीय प्रेरण की खोज किसने की थी?", "answer": "माइकल फैराडे ने।" },
    { "type": "एक-लाइन", "question": "वह नियम जो धारावाही चालक पर लगने वाले बल की दिशा बताता है?", "answer": "फ्लेमिंग का वामहस्त नियम।" },
    { "type": "एक-लाइन", "question": "वह नियम जो प्रेरित विद्युत धारा की दिशा बताता है?", "answer": "फ्लेमिंग का दक्षिण-हस्त नियम।" },
    { "type": "एक-लाइन", "question": "प्रत्यावर्ती धारा (AC) की आवृत्ति भारत में कितनी है?", "answer": "50 हर्ट्ज।" },
    { "type": "एक-लाइन", "question": "दिष्ट धारा (DC) की आवृत्ति कितनी होती है?", "answer": "शून्य।" },
    { "type": "एक-लाइन", "question": "विद्युत चुम्बक बनाने के लिए मुख्य रूप से किस पदार्थ का उपयोग किया जाता है?", "answer": "नर्म लोहा।" },

    // --- 10 दो से तीन लाइन के उत्तरों वाले प्रश्न (SA) ---
    { "type": "दो-तीन लाइन", "question": "चुम्बकीय क्षेत्र रेखाओं के कोई दो प्रमुख गुण लिखिए।", "answer": "1. ये उत्तरी ध्रुव से निकलकर दक्षिणी ध्रुव में प्रवेश करती हैं। 2. कोई भी दो क्षेत्र रेखाएँ एक-दूसरे को प्रतिच्छेद (काटती) नहीं करतीं।" },
    { "type": "दो-तीन लाइन", "question": "दक्षिण-हस्त अंगुष्ठ नियम क्या बताता है?", "answer": "यह नियम बताता है कि यदि आप दाहिने हाथ में धारावाही चालक को इस प्रकार पकड़ें कि अंगूठा विद्युत धारा की दिशा में हो, तो उँगलियाँ चुम्बकीय क्षेत्र रेखाओं की दिशा को दर्शाएँगी।" },
    { "type": "दो-तीन लाइन", "question": "फ्लेमिंग के वामहस्त नियम में अंगूठा, तर्जनी और मध्यमा क्या दर्शाते हैं?", "answer": "अंगूठा चालक पर लगने वाले बल (गति) की दिशा, तर्जनी चुम्बकीय क्षेत्र की दिशा और मध्यमा विद्युत धारा की दिशा दर्शाती है।" },
    { "type": "दो-तीन लाइन", "question": "चुम्बकीय क्षेत्र रेखाएँ एक-दूसरे को क्यों नहीं काटती हैं?", "answer": "यदि दो क्षेत्र रेखाएँ एक-दूसरे को काटती हैं, तो इसका अर्थ होगा कि कटान बिंदु पर दिक्सूचक की सूई दो दिशाएँ बताएगी, जो संभव नहीं है।" },
    { "type": "दो-तीन लाइन", "question": "परिनालिका किसे कहते हैं?", "answer": "पास-पास लिपटे हुए विद्युतरोधी ताँबे के तार की बेलनाकार आकृति की अनेक फेरों वाली कुंडली को परिनालिका कहते हैं।" },
    { "type": "दो-तीन लाइन", "question": "दिष्ट धारा (DC) और प्रत्यावर्ती धारा (AC) में मुख्य अंतर क्या है?", "answer": "DC हमेशा एक ही दिशा में प्रवाहित होती है, जबकि AC निश्चित समय अंतराल के बाद अपनी दिशा उलट देती है।" },
    { "type": "दो-तीन लाइन", "question": "भूसंपर्क तार (अर्थ वायर) का कार्य क्या है?", "answer": "यह सुरक्षा प्रदान करता है। यह उपकरण पर विद्युत धारा के रिसाव को सीधे भूमि में भेजकर उपयोगकर्ता को विद्युत आघात (शॉक) से बचाता है।" },
    { "type": "दो-तीन लाइन", "question": "अतिभारण (ओवरलोडिंग) कब होता है?", "answer": "जब परिपथ में अचानक से बहुत सारे विद्युत उपकरण एक साथ जोड़ दिए जाते हैं, तो परिपथ में धारा अत्यधिक बढ़ जाती है, जिसे अतिभारण कहते हैं।" },
    { "type": "दो-तीन लाइन", "question": "वैद्युत चुम्बकीय प्रेरण का सिद्धांत लिखिए।", "answer": "यह वह प्रक्रम है जिसके द्वारा किसी चालक के आस-पास के परिवर्ती चुम्बकीय क्षेत्र के कारण किसी अन्य चालक में विद्युत धारा प्रेरित होती है।" },
    { "type": "दो-तीन लाइन", "question": "विद्युत मोटर में विभक्त वलय (स्प्लिट रिंग) का कार्य क्या है?", "answer": "विभक्त वलय एक दिक्परिवर्तक (कम्यूटेटर) का कार्य करता है। यह परिपथ में धारा के प्रवाह की दिशा को प्रत्येक आधे घूर्णन के बाद उलट देता है, जिससे कुंडली लगातार एक ही दिशा में घूमती रहती है।" }
];


// **********************************************
// 2. 25 बहुविकल्पीय क्विज प्रश्न (MCQs)
// **********************************************
const quizQuestions = [
    {
        "questionNumber": 1,
        "question": "चुम्बकीय क्षेत्र का SI मात्रक क्या है?",
        "answerOptions": [
            { "text": "वोल्ट", "isCorrect": false, "rationale": "यह विभवांतर का मात्रक है।" },
            { "text": "टेस्ला", "isCorrect": true, "rationale": "टेस्ला वह मात्रक है जिसका उपयोग चुम्बकीय क्षेत्र की प्रबलता को मापने के लिए किया जाता है।" },
            { "text": "ओम", "isCorrect": false, "rationale": "यह प्रतिरोध का मात्रक है।" },
            { "text": "ऐम्पियर", "isCorrect": false, "rationale": "यह विद्युत धारा का मात्रक है।" }
        ]
    },
    {
        "questionNumber": 2,
        "question": "चुम्बक के कितने ध्रुव होते हैं?",
        "answerOptions": [
            { "text": "चार", "isCorrect": false, "rationale": "चुम्बक के केवल दो ही मुख्य ध्रुव होते हैं।" },
            { "text": "तीन", "isCorrect": false, "rationale": "चुम्बक में कोई तीसरा ध्रुव नहीं होता है।" },
            { "text": "एक", "isCorrect": false, "rationale": "चुम्बक को कितना भी काट लें, वह हमेशा दो ध्रुवों में बंटी रहती है।" },
            { "text": "दो", "isCorrect": true, "rationale": "चुम्बक में एक उत्तरी ध्रुव और एक दक्षिणी ध्रुव होता है।" }
        ]
    },
    {
        "questionNumber": 3,
        "question": "स्वतंत्र रूप से लटकाई हुई चुम्बक लगभग किस दिशा में रुकती है?",
        "answerOptions": [
            { "text": "पूर्व-पश्चिम", "isCorrect": false, "rationale": "यह पृथ्वी के चुम्बकीय क्षेत्र से संरेखित नहीं होती है।" },
            { "text": "उत्तर-दक्षिण", "isCorrect": true, "rationale": "चुम्बक का उत्तरी ध्रुव पृथ्वी के भौगोलिक उत्तर की ओर संकेत करता है।" },
            { "text": "दक्षिण-पश्चिम", "isCorrect": false, "rationale": "यह सही दिशा नहीं है।" },
            { "text": "उत्तर-पूर्व", "isCorrect": false, "rationale": "यह सही दिशा नहीं है।" }
        ]
    },
    {
        "questionNumber": 4,
        "question": "चुम्बकीय क्षेत्र रेखाएँ चुम्बक के बाहर किस ध्रुव से प्रकट होती हैं?",
        "answerOptions": [
            { "text": "दक्षिणी ध्रुव", "isCorrect": false, "rationale": "दक्षिणी ध्रुव पर रेखाएँ प्रवेश करती हैं।" },
            { "text": "उत्तरी ध्रुव", "isCorrect": true, "rationale": "परम्परागत रूप से, क्षेत्र रेखाएँ चुम्बक के बाहर उत्तरी ध्रुव से निकलती हैं।" },
            { "text": "मध्य भाग", "isCorrect": false, "rationale": "मध्य भाग में चुम्बकीय बल सबसे कम होता है।" },
            { "text": "किसी भी ध्रुव से", "isCorrect": false, "rationale": "दिशा निश्चित होती है।" }
        ]
    },
    {
        "questionNumber": 5,
        "question": "विद्युत धारावाही सीधे चालक के चारों ओर चुम्बकीय क्षेत्र की दिशा किस नियम से ज्ञात की जाती है?",
        "answerOptions": [
            { "text": "फ्लेमिंग का वामहस्त नियम", "isCorrect": false, "rationale": "यह बल की दिशा ज्ञात करने के लिए उपयोग होता है।" },
            { "text": "ओम का नियम", "isCorrect": false, "rationale": "यह धारा, विभवांतर और प्रतिरोध से संबंधित है।" },
            { "text": "दक्षिण-हस्त अंगुष्ठ नियम", "isCorrect": true, "rationale": "यह नियम धारा की दिशा और उसके कारण उत्पन्न चुम्बकीय क्षेत्र की दिशा में संबंध स्थापित करता है।" },
            { "text": "फ्लेमिंग का दक्षिण-हस्त नियम", "isCorrect": false, "rationale": "यह प्रेरित धारा की दिशा ज्ञात करने के लिए उपयोग होता है।" }
        ]
    },
    {
        "questionNumber": 6,
        "question": "वह युक्ति जो विद्युत ऊर्जा को यांत्रिक ऊर्जा में रूपांतरित करती है?",
        "answerOptions": [
            { "text": "जनित्र", "isCorrect": false, "rationale": "यह यांत्रिक ऊर्जा को विद्युत ऊर्जा में बदलता है।" },
            { "text": "विद्युत मोटर", "isCorrect": true, "rationale": "विद्युत मोटर विद्युत धारावाही चालक पर बल के सिद्धांत पर कार्य करती है और घुमाती है।" },
            { "text": "ट्रांसफार्मर", "isCorrect": false, "rationale": "यह वोल्टेज को बढ़ाता या घटाता है।" },
            { "text": "गैल्वेनोमीटर", "isCorrect": false, "rationale": "यह धारा की उपस्थिति को मापता है।" }
        ]
    },
    {
        "questionNumber": 7,
        "question": "वह युक्ति जो यांत्रिक ऊर्जा को विद्युत ऊर्जा में रूपांतरित करती है?",
        "answerOptions": [
            { "text": "विद्युत मोटर", "isCorrect": false, "rationale": "यह विद्युत ऊर्जा को यांत्रिक ऊर्जा में बदलती है।" },
            { "text": "विद्युत जनित्र", "isCorrect": true, "rationale": "विद्युत जनित्र वैद्युत चुम्बकीय प्रेरण के सिद्धांत पर कार्य करता है।" },
            { "text": "धारा नियंत्रक", "isCorrect": false, "rationale": "यह परिपथ में धारा को नियंत्रित करता है।" },
            { "text": "ट्रांसफार्मर", "isCorrect": false, "rationale": "यह वोल्टेज को बढ़ाता या घटाता है।" }
        ]
    },
    {
        "questionNumber": 8,
        "question": "विद्युत मोटर किस सिद्धांत पर कार्य करती है?",
        "answerOptions": [
            { "text": "वैद्युत चुम्बकीय प्रेरण", "isCorrect": false, "rationale": "यह जनित्र का सिद्धांत है।" },
            { "text": "चुम्बकीय क्षेत्र में रखे धारावाही चालक पर बल", "isCorrect": true, "rationale": "जब कोई धारावाही चालक चुम्बकीय क्षेत्र में रखा जाता है, तो उस पर बल लगता है, जिससे मोटर घूमती है।" },
            { "text": "जूल का तापन नियम", "isCorrect": false, "rationale": "यह ऊष्मा उत्पादन से संबंधित है।" },
            { "text": "प्रकाश का अपवर्तन", "isCorrect": false, "rationale": "यह प्रकाशिकी से संबंधित है।" }
        ]
    },
    {
        "questionNumber": 9,
        "question": "लघुपथन (शॉर्ट सर्किट) का मुख्य कारण क्या है?",
        "answerOptions": [
            { "text": "अत्यधिक प्रतिरोध", "isCorrect": false, "rationale": "लघुपथन में प्रतिरोध लगभग शून्य हो जाता है।" },
            { "text": "निम्न वोल्टेज", "isCorrect": false, "rationale": "निम्न वोल्टेज लघुपथन का कारण नहीं होता।" },
            { "text": "भूसंपर्क तार का टूटना", "isCorrect": false, "rationale": "यह लघुपथन का सीधा कारण नहीं है।" },
            { "text": "विद्युन्मय तार का उदासीन तार से सीधा संपर्क", "isCorrect": true, "rationale": "इस सीधे संपर्क से प्रतिरोध बहुत कम हो जाता है, जिससे धारा अत्यधिक बढ़ जाती है।" }
        ]
    },
    {
        "questionNumber": 10,
        "question": "घरों में उपयोग होने वाले विद्युन्मय (लाइव) तार का रंग सामान्यतः क्या होता है?",
        "answerOptions": [
            { "text": "काला", "isCorrect": false, "rationale": "यह उदासीन तार का रंग होता है।" },
            { "text": "लाल", "isCorrect": true, "rationale": "सुरक्षा नियमों के अनुसार, विद्युन्मय तार को लाल रंग का रोधन दिया जाता है।" },
            { "text": "हरा", "isCorrect": false, "rationale": "यह भूसंपर्क तार का रंग होता है।" },
            { "text": "पीला", "isCorrect": false, "rationale": "पीला तार उपयोग नहीं होता है।" }
        ]
    },
    {
        "questionNumber": 11,
        "question": "घरों में उपयोग होने वाले उदासीन (न्यूट्रल) तार का रंग सामान्यतः क्या होता है?",
        "answerOptions": [
            { "text": "लाल", "isCorrect": false, "rationale": "यह विद्युन्मय तार का रंग होता है।" },
            { "text": "हरा", "isCorrect": false, "rationale": "यह भूसंपर्क तार का रंग होता है।" },
            { "text": "काला", "isCorrect": true, "rationale": "सुरक्षा नियमों के अनुसार, उदासीन तार को काला रंग का रोधन दिया जाता है।" },
            { "text": "नीला", "isCorrect": false, "rationale": "नीला तार उपयोग नहीं होता है।" }
        ]
    },
    {
        "questionNumber": 12,
        "question": "घरों में उपयोग होने वाले भूसंपर्क (अर्थ वायर) तार का रंग सामान्यतः क्या होता है?",
        "answerOptions": [
            { "text": "लाल", "isCorrect": false, "rationale": "यह विद्युन्मय तार का रंग होता है।" },
            { "text": "हरा", "isCorrect": true, "rationale": "सुरक्षा नियमों के अनुसार, भूसंपर्क तार को हरा रंग का रोधन दिया जाता है।" },
            { "text": "काला", "isCorrect": false, "rationale": "यह उदासीन तार का रंग होता है।" },
            { "text": "पीला", "isCorrect": false, "rationale": "पीला तार उपयोग नहीं होता है।" }
        ]
    },
    {
        "questionNumber": 13,
        "question": "फ्यूज तार का गलनांक कैसा होना चाहिए?",
        "answerOptions": [
            { "text": "उच्च", "isCorrect": false, "rationale": "उच्च गलनांक होने पर यह अधिक धारा पर भी नहीं पिघलेगा।" },
            { "text": "निम्न", "isCorrect": true, "rationale": "कम गलनांक होने के कारण, अत्यधिक धारा प्रवाहित होने पर यह तुरंत पिघल जाता है और परिपथ को तोड़ देता है।" },
            { "text": "शून्य", "isCorrect": false, "rationale": "शून्य गलनांक संभव नहीं है।" },
            { "text": "मध्यम", "isCorrect": false, "rationale": "सुरक्षा के लिए इसे जानबूझकर निम्न रखा जाता है।" }
        ]
    },
    {
        "questionNumber": 14,
        "question": "वैद्युत चुम्बकीय प्रेरण (EMI) की खोज किसने की थी?",
        "answerOptions": [
            { "text": "हंस क्रिश्चियन ओर्स्टेड", "isCorrect": false, "rationale": "इन्होंने विद्युत धारा के चुम्बकीय प्रभाव की खोज की थी।" },
            { "text": "माइकल फैराडे", "isCorrect": true, "rationale": "माइकल फैराडे ने दिखाया कि चुम्बक और कुंडली के बीच सापेक्ष गति से धारा प्रेरित होती है।" },
            { "text": "आंद्रे-मैरी ऐम्पियर", "isCorrect": false, "rationale": "इन्होंने ऐम्पियर का परिपथीय नियम दिया था।" },
            { "text": "जेम्स क्लर्क मैक्सवेल", "isCorrect": false, "rationale": "इन्होंने विद्युत चुम्बकीय तरंगों के सिद्धांत दिए।" }
        ]
    },
    {
        "questionNumber": 15,
        "question": "प्रेरित विद्युत धारा की दिशा किस नियम से ज्ञात की जाती है?",
        "answerOptions": [
            { "text": "ओम का नियम", "isCorrect": false, "rationale": "यह प्रतिरोध से संबंधित है।" },
            { "text": "फ्लेमिंग का दक्षिण-हस्त नियम", "isCorrect": true, "rationale": "फ्लेमिंग का दक्षिण-हस्त नियम प्रेरित धारा की दिशा को बताता है जब कोई चालक चुम्बकीय क्षेत्र में गति करता है।" },
            { "text": "फ्लेमिंग का वामहस्त नियम", "isCorrect": false, "rationale": "यह बल की दिशा बताता है।" },
            { "text": "दक्षिण-हस्त अंगुष्ठ नियम", "isCorrect": false, "rationale": "यह धारा के कारण उत्पन्न क्षेत्र की दिशा बताता है।" }
        ]
    },
    {
        "questionNumber": 16,
        "question": "प्रत्यावर्ती धारा (AC) की आवृत्ति भारत में मानक रूप से कितनी है?",
        "answerOptions": [
            { "text": "$60 \\text{ हर्ट्ज}$", "isCorrect": false, "rationale": "यह यूएसए जैसे देशों में मानक आवृत्ति है।" },
            { "text": "$50 \\text{ हर्ट्ज}$", "isCorrect": true, "rationale": "भारत में घरों में उपयोग होने वाली प्रत्यावर्ती धारा की मानक आवृत्ति $50 \\text{ हर्ट्ज}$ है।" },
            { "text": "$100 \\text{ हर्ट्ज}$", "isCorrect": false, "rationale": "यह गलत है।" },
            { "text": "शून्य हर्ट्ज", "isCorrect": false, "rationale": "शून्य हर्ट्ज दिष्ट धारा (DC) की आवृत्ति होती है।" }
        ]
    },
    {
        "questionNumber": 17,
        "question": "विद्युत चुम्बक बनाने के लिए मुख्य रूप से किस पदार्थ का उपयोग किया जाता है?",
        "answerOptions": [
            { "text": "स्टील", "isCorrect": false, "rationale": "स्टील एक स्थायी चुम्बक बनाता है।" },
            { "text": "नर्म लोहा", "isCorrect": true, "rationale": "नर्म लोहा आसानी से चुम्बकित और विचुम्बकित हो जाता है, जो विद्युत चुम्बक के लिए आवश्यक है।" },
            { "text": "ताँबा", "isCorrect": false, "rationale": "ताँबा अचुम्बकीय होता है।" },
            { "text": "प्लास्टिक", "isCorrect": false, "rationale": "प्लास्टिक अचुम्बकीय और विद्युतरोधी होता है।" }
        ]
    },
    {
        "questionNumber": 18,
        "question": "चुम्बकीय क्षेत्र रेखाएँ एक-दूसरे को प्रतिच्छेद (काटती) क्यों नहीं हैं?",
        "answerOptions": [
            { "text": "क्योंकि वे बंद वक्र होती हैं।", "isCorrect": false, "rationale": "बंद वक्र होना उनका गुण है, प्रतिच्छेद न करने का कारण नहीं।" },
            { "text": "क्योंकि वे केवल चुम्बक के भीतर होती हैं।", "isCorrect": false, "rationale": "वे चुम्बक के बाहर और भीतर दोनों जगह होती हैं।" },
            { "text": "यदि वे काटेंगी, तो कटान बिंदु पर चुम्बकीय क्षेत्र की दो दिशाएँ संभव होंगी, जो संभव नहीं है।", "isCorrect": true, "rationale": "यदि दो क्षेत्र रेखाएँ एक-दूसरे को काटती हैं, तो इसका अर्थ होगा कि कटान बिंदु पर दिक्सूचक की सूई दो दिशाएँ बताएगी, जो संभव नहीं है।" },
            { "text": "क्योंकि वे केवल दक्षिणी ध्रुव पर केंद्रित होती हैं।", "isCorrect": false, "rationale": "वे उत्तरी ध्रुव से निकलकर दक्षिणी ध्रुव पर विलीन होती हैं।" }
        ]
    },
    {
        "questionNumber": 19,
        "question": "फ्लेमिंग के वामहस्त नियम में तर्जनी क्या दर्शाती है?",
        "answerOptions": [
            { "text": "चालक पर लगने वाला बल", "isCorrect": false, "rationale": "यह अंगूठा दर्शाता है।" },
            { "text": "चुम्बकीय क्षेत्र की दिशा", "isCorrect": true, "rationale": "फ्लेमिंग का वामहस्त नियम बल की दिशा ज्ञात करने के लिए उपयोग होता है, जिसमें तर्जनी चुम्बकीय क्षेत्र को दर्शाती है।" },
            { "text": "विद्युत धारा की दिशा", "isCorrect": false, "rationale": "यह मध्यमा दर्शाती है।" },
            { "text": "प्रेरित विद्युत धारा की दिशा", "isCorrect": false, "rationale": "यह दक्षिण-हस्त नियम से संबंधित है।" }
        ]
    },
    {
        "questionNumber": 20,
        "question": "फ्लेमिंग के वामहस्त नियम में अंगूठा क्या दर्शाता है?",
        "answerOptions": [
            { "text": "विद्युत धारा की दिशा", "isCorrect": false, "rationale": "यह मध्यमा दर्शाती है।" },
            { "text": "चुम्बकीय क्षेत्र की दिशा", "isCorrect": false, "rationale": "यह तर्जनी दर्शाती है।" },
            { "text": "चालक पर लगने वाले बल की दिशा", "isCorrect": true, "rationale": "वामहस्त नियम में अंगूठा बल या चालक की गति की दिशा को इंगित करता है।" },
            { "text": "प्रेरित धारा की दिशा", "isCorrect": false, "rationale": "यह दक्षिण-हस्त नियम से संबंधित है।" }
        ]
    },
    {
        "questionNumber": 21,
        "question": "परिनालिका (Solenoid) क्या होती है?",
        "answerOptions": [
            { "text": "एक सीधा ताँबे का तार", "isCorrect": false, "rationale": "यह केवल एक सरल चालक है।" },
            { "text": "कुंडली जिसमें लोहे की छड़ हो", "isCorrect": false, "rationale": "यह एक विद्युत चुम्बक है, परिनालिका नहीं।" },
            { "text": "पास-पास लिपटे हुए तार की बेलनाकार कुंडली", "isCorrect": true, "rationale": "परिनालिका पास-पास लिपटे हुए विद्युतरोधी ताँबे के तार की अनेक फेरों वाली बेलनाकार कुंडली होती है।" },
            { "text": "कुंडली का एक एकल फेरा", "isCorrect": false, "rationale": "परिनालिका में अनेक फेरे होते हैं।" }
        ]
    },
    {
        "questionNumber": 22,
        "question": "दिष्ट धारा (DC) और प्रत्यावर्ती धारा (AC) में मुख्य अंतर क्या है?",
        "answerOptions": [
            { "text": "AC की शक्ति DC से अधिक होती है।", "isCorrect": false, "rationale": "शक्ति दोनों की समान हो सकती है।" },
            { "text": "DC केवल एक दिशा में प्रवाहित होती है जबकि AC दिशा बदलती है।", "isCorrect": true, "rationale": "दिष्ट धारा एक ही दिशा में बहती है, जबकि प्रत्यावर्ती धारा निश्चित अंतराल पर अपनी दिशा को उलट देती है।" },
            { "text": "AC को आसानी से बैटरी में संग्रहित किया जा सकता है।", "isCorrect": false, "rationale": "DC को बैटरी में संग्रहित किया जाता है।" },
            { "text": "AC की आवृत्ति शून्य होती है।", "isCorrect": false, "rationale": "शून्य आवृत्ति DC की होती है।" }
        ]
    },
    {
        "questionNumber": 23,
        "question": "भूसंपर्क तार (अर्थ वायर) का मुख्य कार्य क्या है?",
        "answerOptions": [
            { "text": "केवल उपकरण को बिजली देना", "isCorrect": false, "rationale": "यह विद्युन्मय तार का कार्य है।" },
            { "text": "विद्युत धारा को नियंत्रित करना", "isCorrect": false, "rationale": "यह धारा नियंत्रक का कार्य है।" },
            { "text": "उपयोगकर्ता को विद्युत आघात (शॉक) से सुरक्षा प्रदान करना", "isCorrect": true, "rationale": "यह उपकरण के धात्विक आवरण पर विद्युत धारा के रिसाव को सीधे भूमि में भेजकर सुरक्षा सुनिश्चित करता है।" },
            { "text": "परिपथ में धारा बढ़ाना", "isCorrect": false, "rationale": "यह कार्य नहीं है।" }
        ]
    },
    {
        "questionNumber": 24,
        "question": "विद्युत मोटर में विभक्त वलय (स्प्लिट रिंग) का कार्य क्या है?",
        "answerOptions": [
            { "text": "चुम्बकीय क्षेत्र उत्पन्न करना", "isCorrect": false, "rationale": "यह तार की कुंडली का कार्य है।" },
            { "text": "बल की दिशा ज्ञात करना", "isCorrect": false, "rationale": "यह फ्लेमिंग के नियम का कार्य है।" },
            { "text": "दिक्परिवर्तक (धारा की दिशा उलटना) का कार्य करना", "isCorrect": true, "rationale": "विभक्त वलय प्रत्येक आधे घूर्णन के बाद कुंडली में धारा की दिशा को उलटकर घूर्णन को बनाए रखता है।" },
            { "text": "प्रतिरोध को नियंत्रित करना", "isCorrect": false, "rationale": "यह धारा नियंत्रक का कार्य है।" }
        ]
    },
    {
        "questionNumber": 25,
        "question": "दिष्ट धारा (DC) की आवृत्ति कितनी होती है?",
        "answerOptions": [
            { "text": "$50 \\text{ हर्ट्ज}$", "isCorrect": false, "rationale": "यह प्रत्यावर्ती धारा की मानक आवृत्ति है।" },
            { "text": "$60 \\text{ हर्ट्ज}$", "isCorrect": false, "rationale": "यह प्रत्यावर्ती धारा की मानक आवृत्ति है।" },
            { "text": "शून्य हर्ट्ज", "isCorrect": true, "rationale": "दिष्ट धारा एक ही दिशा में प्रवाहित होती है, अतः प्रति सेकंड दिशा बदलने की दर (आवृत्ति) शून्य होती है।" },
            { "text": "$100 \\text{ हर्ट्ज}$", "isCorrect": false, "rationale": "यह गलत है।" }
        ]
    }
];

// ग्लोबल वेरिएबल्स और HTML तत्वों को प्राप्त करना
let currentQuestionIndex = 0;
let totalScore = 0;
let questionAttempted = 0;
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


// **********************************************
// Fisher-Yates (Knuth) Shuffle Algorithm
// विकल्पों को यादृच्छिक करने के लिए 
// **********************************************
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// **********************************************
// 1. पुनरीक्षण स्क्रीन दिखाने का फंक्शन 
// **********************************************
function showReviewScreen() {
    studentName = document.getElementById('student-name').value.trim();
    studentClass = document.getElementById('student-class').value.trim();
    studentRoll = document.getElementById('student-roll').value.trim();

    if (!studentName || !studentClass || !studentRoll) {
        alert("कृपया अपना नाम, कक्षा और रोल नंबर भरें।");
        return;
    }

    startScreen.style.display = 'none';
    reviewScreen.style.display = 'block';

    reviewContent.innerHTML = '';
    
    // 20 एक लाइन वाले प्रश्न
    reviewContent.innerHTML += '<h4>⭐ 20 एक-लाइन उत्तर वाले प्रश्न</h4>';
    reviewQuestions.filter(q => q.type === 'एक-लाइन').forEach((item, index) => {
        reviewContent.innerHTML += `
            <div class="qa-item">
                <p><strong>${index + 1}. प्रश्न:</strong> ${item.question}</p>
                <p style="color: #004d40;"><strong>उत्तर:</strong> ${item.answer}</p>
            </div>
        `;
    });
    
    // 10 दो-तीन लाइन वाले प्रश्न
    reviewContent.innerHTML += '<h4>⭐ 10 दो-से-तीन-लाइन उत्तर वाले प्रश्न</h4>';
    reviewQuestions.filter(q => q.type === 'दो-तीन लाइन').forEach((item, index) => {
        reviewContent.innerHTML += `
            <div class="qa-item">
                <p><strong>${index + 1}. प्रश्न:</strong> ${item.question}</p>
                <p style="color: #004d40;"><strong>उत्तर:</strong> ${item.answer}</p>
            </div>
        `;
    });
}


// **********************************************
// 2. MCQ क्विज शुरू करने का फंक्शन 
// **********************************************
function startMCQQuiz() {
    reviewScreen.style.display = 'none';
    quizScreen.style.display = 'block';

    // कुल प्रश्नों की संख्या दिखाएँ (25)
    totalQDisplay.textContent = quizQuestions.length; 

    // पहला प्रश्न लोड करें
    loadQuestion(currentQuestionIndex);
}

// **********************************************
// 3. प्रश्न लोड करने का मुख्य फंक्शन
// **********************************************
function loadQuestion(index) {
    if (index >= quizQuestions.length) {
        showResults();
        return;
    }

    hasAnsweredCurrentQuestion = false;
    nextButton.style.display = 'none';
    feedbackMessage.innerHTML = '';
    
    const currentQuestion = quizQuestions[index];
    
    // **विकल्पों को यादृच्छिक करें**
    shuffleArray(currentQuestion.answerOptions); 
    
    qNumDisplay.textContent = index + 1;
    questionText.innerHTML = `${currentQuestion.questionNumber}. ${currentQuestion.question}`;
    
    optionsContainer.innerHTML = '';
    currentQuestion.answerOptions.forEach((option) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.innerHTML = option.text;
        
        // विकल्प पर क्लिक हैंडलर जोड़ें
        optionDiv.onclick = () => checkAnswer(optionDiv, option.isCorrect, option.rationale);
        
        optionsContainer.appendChild(optionDiv);
    });
}


// **********************************************
// 4. उत्तर जांचने का फंक्शन (2 अंक नियम) 
// **********************************************
function checkAnswer(selectedElement, isCorrect, rationale) {
    if (hasAnsweredCurrentQuestion) {
        return; 
    }
    
    hasAnsweredCurrentQuestion = true;
    questionAttempted++;
    
    // सभी विकल्पों पर क्लिक हटाएँ
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
        // सही विकल्प को भी हाइलाइट करें
        highlightCorrectAnswer();
    }

    // व्याख्या (Rationale) दिखाएँ
    feedbackMessage.innerHTML += `<p style="margin-top: 5px;"><strong>व्याख्या:</strong> ${rationale}</p>`;

    // अगले प्रश्न का बटन दिखाएँ
    nextButton.style.display = 'block';
}


// **********************************************
// 5. सही उत्तर को हाइलाइट करने का फंक्शन 
// **********************************************
function highlightCorrectAnswer() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const options = optionsContainer.children;
    
    // सही उत्तर का पता लगाएँ
    // हमें सही विकल्प का पता लगाने के लिए मूल quizQuestions एरे का उपयोग करना होगा
    let correctText = currentQuestion.answerOptions.find(opt => opt.isCorrect).text;

    // DOM में सही उत्तर को हाइलाइट करें
    Array.from(options).forEach(optionDiv => {
        // चूंकि विकल्प शफल हो चुके हैं, हम टेक्स्ट से मिलान करते हैं
        if (optionDiv.innerHTML.trim() === correctText) { 
             // सुनिश्चित करें कि यह पहले से ही 'correct' न हो 
             if (!optionDiv.classList.contains('correct')) { 
                optionDiv.classList.add('correct');
                optionDiv.style.opacity = '0.7'; 
                optionDiv.innerHTML += `<span style="float: right;">(सही उत्तर)</span>`;
             }
        }
    });
}


// **********************************************
// 6. अगले प्रश्न पर जाने का फंक्शन
// **********************************************
function loadNextQuestion() {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
}


// **********************************************
// 7. परिणाम दिखाने का फंक्शन 
// **********************************************
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
        <p><strong>प्राप्त कुल अंक:</strong> <strong style="font-size: 1.5em; color: #004d40;">${totalScore}</strong> (अधिकतम ${maxScore})</p>
        <p><strong>प्रतिशत:</strong> ${percentage.toFixed(2)}%</p>
        <hr>
        <p><strong>ग्रेड:</strong> <strong style="font-size: 1.3em; color: #dc3545;">${grade}</strong></p>
    `;
}