


// Counters
var correctanswer = 0;
var wronganswer = 0;
var unanswered = 0;
var downloadTimer;
var clockRunning = false;

// Options and Answers



$(document).ready(function () {

    $('.GameQuestion').hide()
    $('.start').show()
    $('.results').hide()


    // Game ending

    $("#submit").click(endgame)
    $('.start').click(start)
    $('#restart').click(restart)







    // Game Function
    function endgame() {

        var radioVList = [$("input[name='inlineRadioOptions1']:checked").val(), $("input[name='inlineRadioOptions2']:checked").val(), $("input[name='inlineRadioOptions3']:checked").val(), $("input[name='inlineRadioOptions4']:checked").val(), $("input[name='inlineRadioOptions5']:checked").val()]
        var Answer = ["option3", "option3", "option2", "option1", "option2"]

        for (i = 0; i < radioVList.length; i++) {
            console.log(radioVList[i])
            var radioValue = radioVList[i];
            var answerValue = Answer[i];
            if (radioValue === answerValue) {
                correctanswer++
            }
            else if (radioValue === undefined) {
                unanswered++
            }
            else {
                wronganswer++
            }

        }

        clearInterval(downloadTimer)
        clockRunning = false;
        $('.GameQuestion').hide()
        $('.results').show()
        $('#answers-right').html("Number of Correct Answers = " + correctanswer)
        $('#answers-wrong').html("Number of Wrong Answers = " + wronganswer)
        $('#unanswered').html("Number of unanswered questions = " + unanswered)

    }

    // start button
    function start() {
        $('.start').hide()
        $('.GameQuestion').show()
        if (!clockRunning) {
            downloadTimer = setInterval(count, 1000);
            clockRunning = true;
          }
    }

    // timer 
    var timeleft = 25;
    function count() {
        $('#display').html(timeleft + " seconds remaining")
        console.log(timeleft + " seconds remaining")
        timeleft -= 1;
        if (timeleft < 0) {
            clearInterval(downloadTimer);
            endgame()
        }
    }


    //restart
    function restart() {
        location.reload();
    }



});

