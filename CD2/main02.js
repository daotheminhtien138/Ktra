function questionCount() {
    const totalQuestions = 2;
    for (let i = 0; i < totalQuestions; i++) {
        var answers = document.getElementsByName(`question_${i+1}`);
        if (answers.length == 0) continue; 
        var random = Math.floor(Math.random() * answers.length);
        //Xóa câu trả lời
        answers.forEach(option => {
            option.checked = false; 
        });
        //Chọn lại
        answers[random].checked = true; 
    }
}
document.getElementById('btn').onclick = questionCount;
