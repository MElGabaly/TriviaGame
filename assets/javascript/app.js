


// Counters
var correctanswer = 0;
var wronganswer = 0;

// Options and Answers



$(document).ready(function () {


    $("#submit").click(function () {

        var radioVList = [$("input[name='inlineRadioOptions1']:checked").val(), $("input[name='inlineRadioOptions2']:checked").val(), $("input[name='inlineRadioOptions3']:checked").val(), $("input[name='inlineRadioOptions4']:checked").val(), $("input[name='inlineRadioOptions5']:checked").val()]
        var Answer = ["option3", "option3", "option2", "option1", "option2"]

        for (i = 0; i < radioVList.length; i++)
            console.log(radioVList[i])
        var radioValue = radioVList[i];
        var answerValue = Answer[i];
        if (radioValue === answerValue) {
            correctanswer++
        }
        else if (radioValue === "undefined"){
            wronganswer++
        }
        else {
            wronganswer++
        }
        console.log(correctanswer)
        console.log(wronganswer)
    })



});

