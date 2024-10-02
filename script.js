let currentQuestion = 0;
let filteredQuestions = [];
let correctAnswers = 0;
let incorrectAnswers = 0;
let questionAnswered = false;

// Salva il contenuto originale di 'quizContainer'
const originalQuizContainerContent = document.getElementById('quizContainer').innerHTML;

function selectModule(moduleNumber) {
    // Nascondi altre sezioni
    document.getElementById('infoSection').style.display = 'none';

    // Ripristina il contenuto originale di 'quizContainer'
    document.getElementById('quizContainer').innerHTML = originalQuizContainerContent;

    // Riassegna gli event handler
    assignEventHandlers();

    let start = 0, end = 0;
    if (moduleNumber === 1) { start = 1; end = 34; }
    else if (moduleNumber === 2) { start = 35; end = 68; }
    else if (moduleNumber === 3) { start = 69; end = 132; }
    else if (moduleNumber === 4) { start = 133; end = 158; }
    else if (moduleNumber === 5) { start = 159; end = 243; }
    else if (moduleNumber === 6) { start = 244; end = 349; }
    else if (moduleNumber === 7) { start = 350; end = 410; }
    else if (moduleNumber === 8) { start = 411; end = 426; }

    filteredQuestions = questions.filter(q => q.number >= start && q.number <= end);

    if (filteredQuestions.length === 0) {
        alert('Non ci sono domande disponibili per questo modulo.');
        returnToModuleSelection();
        return;
    }

    currentQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    questionAnswered = false;

    document.getElementById('moduleSelection').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';

    // Resetta la visualizzazione del contatore
    document.getElementById('correctCount').innerHTML = '<span class="icon-correct">✔</span> 0';
    document.getElementById('incorrectCount').innerHTML = '<span class="icon-incorrect">✖</span> 0';

    // Resetta la barra di progresso
    document.getElementById('progress').style.width = '0%';

    loadQuestion();
}

function assignEventHandlers() {
    // Riassegna gli event handler per le opzioni di risposta
    document.getElementById('answer_a').onclick = function() { checkAnswer('a'); };
    document.getElementById('answer_b').onclick = function() { checkAnswer('b'); };
    document.getElementById('answer_c').onclick = function() { checkAnswer('c'); };

    // Riassegna l'event handler per il pulsante 'Successiva'
    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.onclick = nextQuestion;
    }
}

function loadQuestion() {
    if (filteredQuestions.length === 0) {
        document.getElementById('quizContainer').innerHTML = '<p>Nessuna domanda disponibile per questo modulo.</p><button onclick="returnToModuleSelection()">Torna alla Scelta del Modulo</button>';
        return;
    }

    document.getElementById('questionText').innerHTML = filteredQuestions[currentQuestion].question;
    document.getElementById('label_a').innerText = filteredQuestions[currentQuestion].answers.a;
    document.getElementById('label_b').innerText = filteredQuestions[currentQuestion].answers.b;
    document.getElementById('label_c').innerText = filteredQuestions[currentQuestion].answers.c;
    document.getElementById('feedback').innerText = '';
    document.getElementById('nextButton').style.display = 'none';

    // Resetta gli stili precedenti
    document.getElementById('label_a').classList.remove('correct', 'incorrect', 'disabled');
    document.getElementById('label_b').classList.remove('correct', 'incorrect', 'disabled');
    document.getElementById('label_c').classList.remove('correct', 'incorrect', 'disabled');

    // Resetta i radio button
    document.getElementById('answer_a').checked = false;
    document.getElementById('answer_b').checked = false;
    document.getElementById('answer_c').checked = false;

    // Abilita le opzioni di risposta
    document.getElementById('answer_a').disabled = false;
    document.getElementById('answer_b').disabled = false;
    document.getElementById('answer_c').disabled = false;

    questionAnswered = false;

    // Aggiorna la barra di progresso
    let progressPercentage = ((currentQuestion) / filteredQuestions.length) * 100;
    document.getElementById('progress').style.width = progressPercentage + '%';
}

function checkAnswer(selectedValue) {
    if (questionAnswered) {
        return; // Evita che la risposta venga registrata più di una volta
    }
    questionAnswered = true;

    const correctAnswer = filteredQuestions[currentQuestion].correctAnswer;
    if (selectedValue === correctAnswer) {
        document.getElementById('label_' + correctAnswer).classList.add('correct');
        correctAnswers++;
    } else {
        document.getElementById('label_' + selectedValue).classList.add('incorrect');
        document.getElementById('label_' + correctAnswer).classList.add('correct');
        incorrectAnswers++;
    }
    document.getElementById('nextButton').style.display = 'inline';

    // Disabilita le opzioni di risposta
    document.getElementById('answer_a').disabled = true;
    document.getElementById('answer_b').disabled = true;
    document.getElementById('answer_c').disabled = true;

    // Aggiungi la classe 'disabled' ai label
    document.getElementById('label_a').classList.add('disabled');
    document.getElementById('label_b').classList.add('disabled');
    document.getElementById('label_c').classList.add('disabled');

    // Aggiorna il contatore
    document.getElementById('correctCount').innerHTML = '<span class="icon-correct">✔</span> ' + correctAnswers;
    document.getElementById('incorrectCount').innerHTML = '<span class="icon-incorrect">✖</span> ' + incorrectAnswers;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < filteredQuestions.length) {
        loadQuestion();
    } else {
        // Aggiorna la barra di progresso al 100%
        document.getElementById('progress').style.width = '100%';

        let resultMessage = '<h2>Modulo completato!</h2>';
        resultMessage += '<p><span class="icon-correct">✔</span> Risposte Corrette: ' + correctAnswers + '</p>';
        resultMessage += '<p><span class="icon-incorrect">✖</span> Risposte Errate: ' + incorrectAnswers + '</p>';

        let scorePercentage = (correctAnswers / filteredQuestions.length) * 100;
        resultMessage += '<p>Punteggio: ' + scorePercentage.toFixed(2) + '%</p>';

        if (scorePercentage === 100) {
            resultMessage += '<p>Complimenti! Hai risposto correttamente a tutte le domande!</p>';
        } else if (scorePercentage >= 70) {
            resultMessage += '<p>Ottimo lavoro! Hai superato il modulo con un buon punteggio.</p>';
        } else {
            resultMessage += '<p>Puoi fare di meglio. Riprova per migliorare il tuo punteggio.</p>';
        }

        resultMessage += '<button onclick="returnToModuleSelection()">Torna alla Scelta del Modulo</button>';
        document.getElementById('quizContainer').innerHTML = resultMessage;
    }
}

function returnToModuleSelection() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('infoSection').style.display = 'none';
    document.getElementById('moduleSelection').style.display = 'block';

    // Ripristina il contenuto originale di 'quizContainer' e riassegna gli event handler
    document.getElementById('quizContainer').innerHTML = originalQuizContainerContent;
    assignEventHandlers();
}

function showInfo() {
    document.getElementById('moduleSelection').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('infoSection').style.display = 'block';
}
