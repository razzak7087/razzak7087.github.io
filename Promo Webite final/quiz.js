function checkAnswers()
{
    //make an array to store feedback on every question
    var feedback = [];
    //keep score
    var score=0;
//Question 1
    if (document.myQuiz.a1.value === 'Green')
    {
        score++;
        feedback.push('Question 1 is correct!')
    }
    else

    {
        feedback.push('No! The answer was Green')
    }

//Question 2
    var q2answer = document.myQuiz.a2.value.toLowerCase();
    if (q2answer === 'marcel')
    {
        score++;
        feedback.push('Question 2 is correct!')
    }
    else
    {
        feedback.push('No! The correct answer was Marcel')
    }

//Question 3
    if (document.myQuiz.a3A.checked === true && document.myQuiz.a3C.checked === true && document.myQuiz.a3D.checked === true)
    {
        if (document.myQuiz.a3B.checked || document.myQuiz.a3E.checked === true)
        {
            feedback.push("No! Question 3 was Lobster, Kiwi, and Peanuts");
        }
        else
        {
            score++;
            feedback.push("Question 3 is CORRECT!!!");
        }
    }
    else
    {
        feedback.push("No! Question 3 was Lobster, Kiwi, and Peanuts");
    }

//Question 4
    if (document.myQuiz.a4.value === '72')
    {
        score ++;
        feedback.push('Question 4 is correct!')
    }
    else
    {
        feedback.push('No! Question 4 was 72!')
    }

//Question 5
    if (document.myQuiz.a5.value === 'AM')
    {
        score++;
        feedback.push("Question 5 is correct!");
    }
    else
    {
        feedback.push("No! Question 5 was Alicia May Emory!")
    }

//Question 6
    var q6answer = document.myQuiz.a6.value.toLowerCase();
    if (q6answer === 'molly')
    {
        score++;
        feedback.push("Question 6 is correct!")
    }
    else
    {
        feedback.push("No! Question 6 was Molly!")
    }
//Question 7
    if (document.myQuiz.a7B.checked === true && document.myQuiz.a7D.checked === true)
    {
        if (document.myQuiz.a7A.checked || document.myQuiz.a7C.checked === true || document.myQuiz.a7E.checked === true)
        {
            feedback.push("No! Question 7 was Timothy and Michelle");
        }
        else
        {
            score++;
            feedback.push("Question 7 is CORRECT!!!");
        }
    }
    else
    {
        feedback.push("No! Question 7 was Timothy and Michelle");
    }

    document.getElementById("score").innerHTML = score.toString();
    document.getElementById("answer").innerHTML = feedback.join("<br>");


}