/*
Mad Libs Project
 */
function madLib()
{
    const words = [];
    words.push(document.getElementById('input1').value);
    words.push(document.getElementById('input2').value);
    words.push(document.getElementById('input3').value);
    words.push(document.getElementById('input4').value);
    words.push(document.getElementById('input5').value);
    words.push(document.getElementById('input6').value);
    words.push(document.getElementById('input7').value);
    words.push(document.getElementById('input8').value);
    words.push(document.getElementById('input9').value);
    words.push(document.getElementById('input10').value);
    words.push(document.getElementById('input11').value);

    document.getElementById('generate').innerHTML ="Medical science has discovered that smoking cigarettes causes " + words[0].bold() + ". It is also bad for your " +
        words[1].bold() + " and causes pain in your " + words[2].bold() + ". When your mice and dogs were exposed to " + words[3].bold()
        + " cigarette smoke, they developed " + words[4].bold() + " disease. Tobacco companies put charcoal " + words[5].bold()
        + " on the ends of cigarettes, but they still spend millions of " + words[6].bold() + " advertising their " + words[7].bold()
        + " product. If you smoke cigarettes, the tobacco will leave all kinds of tar and " + words[8].bold() + " in your lungs. This will make you cough and say, "
        + words[9].bold() + "! Don't smoke cigarettes. Remember, only " + words[10].bold() + " smoke.";
}

/*Temperature Bug Project*/
function temperatureBug()
{
    var score = Number(document.project1.f1.value);
    if (score >= 200)
    {
        return "move somewhere else"
    }
    else if (score >= 76)
    {
        return 'summer'
    }
    else if (score >= 69)
    {
        return 'spring'
    }
    else if (score >= 45)
    {
        return 'autumn'
    }
    else if (score >= 10)
    {
        return 'winter'
    }

}

/*
Calorie Counter Project
*/
function calorieCounter()
{
    var activity = document.project2.activity.value;
    activity = activity.toLowerCase();
    var time = Number(document.project2.input1.value) ;
    if (activity === "running")
    {
        return 7 * time;
    }
    else if (activity === "skating")
    {
        return 9 * time;
    }
    else if (activity === "vacuuming")
    {
        return 3 * time;
    }
    else if (activity === "biking")
    {
        return 10 * time;
    }
    else if (activity === "trampolining")
    {
        return 4 * time;
    }
}
function dropDown()
{
    var activity = document.getElementById('activities').value;
    if (activity === "running")
    {
        return "running";
    }
    else if (activity === "skating")
    {
        return "skating";
    }
    else if (activity === "vacuuming")
    {
        return "vacuuming";
    }
    else if (activity === "biking")
    {
        return "biking";
    }
    else if (activity === "trampolining")
    {
        return "trampolining";
    }
}

/*
Assign Grade Project
*/
function assignGrade()
{
    var score = Number(document.project3.num1.value);
    if (score >= 90)
    {
        return 'A'
    }
    else if (score >= 80)
    {
        return 'B'
    }
    else if (score >= 70)
    {
        return 'C'
    }
    else if (score >= 60)
    {
        return 'D'
    }
    else if (score >= 0)
    {
        return 'F'
    }
}

