// let $ = require("jQuery") ;
$(document).ready(function () {
    let unanswered = 0;
    let correct = 0;
    let incorrect = 0;
    let dataMapArray = [];
    let dataMap = new Map();
    let backgroundCount = 0;
    //  let fileContent = readTextFile('../data/TriviaQuestions.txt')
    // console.log(fileContent);

    dataMap.set("mapIndex", 1)
    dataMap.set("question", "Who was struck blind on the road to Damascus?");
    dataMap.set("answer", "Saul");
    dataMap.set("bogus answers", ["Philip", "Peter", "Saul", "Elymas"]);
    dataMap.set("reference", "Acts 9:3-8");
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 2)
    dataMap.set("question", "On what hill was Jesus crucified?");
    dataMap.set("answer", "Golgotha");
    dataMap.set("bogus answers", ["Golgotha", "Sinai", "Horeb", "Ararat"]);
    dataMap.set("reference", "John 19:17");

    dataMap = new Map()
    dataMap.set("mapIndex", 3)
    dataMap.set("question", "What was Peter profession?");
    dataMap.set("answer", "Fisherman");
    dataMap.set("bogus answers", ["Tanner", "Tentmaker", "Carpenter", "Fisherman"]);
    dataMap.set("reference", "Matthew 4:18");
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 4)
    dataMap.set("question", "Who slew Goliath?");
    dataMap.set("answer", "David");
    dataMap.set("bogus answers", ["Daniel", "David", "Joshua", "Jonathan"]);
    dataMap.set("reference", "I Samuel 17");
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 5)
    dataMap.set("question", "Of what were John the Baptist’s clothes made?");
    dataMap.set("answer", "Camel’s hair");
    dataMap.set("bogus answers", ["Sheep’s Wool", "Woven Flax", "Silk", "Camel’s hair"]);
    dataMap.set("reference", "Mark 1:6");
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 6)
    dataMap.set("question", "Who is the oldest man in the Bible?");
    dataMap.set("answer", "Methuselah");
    dataMap.set("bogus answers", ["Methuselah", "Mephibosheth", "Malachi", "Melchizedek"]);
    dataMap.set("reference", "Genesis 5:27");
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 7)
    dataMap.set("question", "For what charge was Daniel thrown into lion’s den?");
    dataMap.set("answer", "Praying to God");
    dataMap.set("bogus answers", ["Not eating the King’s food", "Praying to God", "Because He was an Israelite", "Not bowing before the King’s golden image"]);
    dataMap.set("reference", "Daniel 6:6-16");
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 8)
    dataMap.set("question", "What does Jesus say not to cast before swine?");
    dataMap.set("answer", "Pearls");
    dataMap.set("bogus answers", ["Coins", "Rubies", "Diamond", "Pearls"]);
    dataMap.set("reference", "Matthew 7:6");
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 9)
    dataMap.set("question", "How long did Jesus fast in the wilderness?");
    dataMap.set("answer", "40 days");
    dataMap.set("bogus answers", ["40 days", "3 days", "4 weeks", "30 days"]);
    dataMap.set("reference", "Luke 4:2");
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 10)
    dataMap.set("question", "On which day did God create man?");
    dataMap.set("answer", "6");
    dataMap.set("bogus answers", ["5", "6", "4", "7"]);
    dataMap.set("reference", "Genesis 1:26-31");
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 11)
    dataMap.set("question", "Who traded his birthright for a bowl of lentil stew?");
    dataMap.set("answer", "Esau");
    dataMap.set("bogus answers", ["Ehud", "Ezra", "Esau", "Enoch"]);
    dataMap.set("reference", "Genesis 25:29-34");
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 12)
    dataMap.set("question", "How many people were saved in the ark?");
    dataMap.set("answer", "8");
    dataMap.set("bogus answers", ["1", "8", "12", "7"]);
    dataMap.set("reference", "I Peter 3:20");
    dataMapArray.push(dataMap);    

    let numberOfAnswered = [];
    let timerHandle;
    let questionNumber = 0;
    let questionGroup = 9;

    function setUpGame() {
        unanswered = 0;
        correct = 0;
        incorrect = 0;
        setUpQues()
    }

    function setUpQues() {

        //numberOfAnswered = [];
        $("#gameContainerDiv").removeClass("dimGameContainerDiv");
        $("#qAndAId").empty();
        let newDiv = $("<div>");
        newDiv.addClass("question");
        newDiv.text(dataMapArray[questionNumber].get("question"));
        newDiv.attr("id", "questionDiv").attr("answer", dataMapArray[questionNumber].get("answer"));
        $("#qAndAId").append(newDiv).end();
        for (let i = 0; i < dataMapArray[questionNumber].get("bogus answers").length; i++) {
            let ansDiv = $("<a>");
            ansDiv.attr("href", "#").attr("correctAnswer", dataMapArray[questionNumber].get("answer")).attr("reference", dataMapArray[questionNumber].get("reference"));
            ansDiv.text(dataMapArray[questionNumber].get("bogus answers")[i]);
            ansDiv.addClass("answer");
            $("#qAndAId").append(ansDiv).end();
        }
        $("#timerId").removeClass("timerOff").addClass("timerOn");
        timerHandle = countDown("timerId", 20000, "Times up!", shutDownQuestion);
        //$("body").css("background-image", "url('assets/images/bibleBackground" + backgroundCount + ".jpg')");
        backgroundCount++;
        if(backgroundCount > 6) backgroundCount = 1;
        switch (backgroundCount) {
            case 1:
            $("body").css("background-image", "url('assets/images/bibleBackground1.jpg')");
            break;
            case 2:
            $("body").css("background-image", "url('assets/images/bibleBackground2.jpg')");
            break;
            case 3:
            $("body").css("background-image", "url('assets/images/bibleBackground3.jpg')");
            break;
            case 4:
            $("body").css("background-image", "url('assets/images/bibleBackground4.jpg')");
            break;
            case 5:
            $("body").css("background-image", "url('assets/images/bibleBackground5.jpg')");
            break;
            case 6:
            $("body").css("background-image", "url('assets/images/bibleBackground6.jpg')");
            break;
        }        
    }

    function shutDownQuestion() {
        revealAnswer(null);
    }

    function revealAnswer(guess) {
        clearInterval(timerHandle);
        let reactionText = "";
        if (guess !== null) {
            if (guess.text() === guess.attr("correctAnswer")) {
                correct++;
                let newDiv = $("<div>");
                newDiv.addClass("question")
                newDiv.text("Correct! " + guess.attr("reference"));
                $("#qAndAId").empty();
                $("#qAndAId").append(newDiv);
                appendPic();
            }
            else {
                incorrect++;
                let newDiv = $("<div>");
                newDiv.addClass("question")
                newDiv.text("Whoops!");
                $("#qAndAId").empty();
                $("#qAndAId").append(newDiv);
                let ansDiv = $("<div>");
                ansDiv.addClass("question");
                ansDiv.text("The correct answer is: " + guess.attr("correctAnswer") + " " + guess.attr("reference"));
                $("#qAndAId").append(ansDiv).end();
                appendPic();
            }
        }
        else {
            unanswered++;
            let newDiv = $("<div>");
            newDiv.addClass("question")
            newDiv.text("Out of Time!");
            let ans = $("#questionDiv").attr("answer")  //need to get answer before emptying out div.
            $("#qAndAId").empty();
            $("#qAndAId").append(newDiv);
            let ansDiv = $("<div>");
            ansDiv.addClass("question");
            ansDiv.text("The correct answer is: " + ans);
            $("#qAndAId").append(ansDiv).end();
            appendPic();

        }
        if (questionNumber === questionGroup) {
            setTimeout(processResults, 3000);
            questionGroup = questionGroup + 10;
        }
        else {
            setTimeout(setUpQues, 3000);
        }
        questionNumber++;
        if (questionNumber === dataMapArray.length) {
            questionNumber = 0;
            questionGroup = 0;
        }
    }

    function appendPic() {
        let picNum = numberGenerator(1, 50);
        let newImg = $("<img>");
        newImg.attr("src", "assets/images/giphy" + picNum + ".gif").addClass("imgPic");
        newImg.addClass("imgGif");
        let newDiv = $("<div>");
        newDiv.addClass("imgDiv");
        newDiv.append(newImg).end();
        $("#qAndAId").append(newDiv).end();
    }

    function processResults() {
        $("#qAndAId").empty();
        let message = $("<p>");
        message.addClass("question");
        $("#qAndAId").append(message).end();
        message.text("Final Results");
        let newCorrect = $("<p>");
        newCorrect.addClass("question");
        newCorrect.text("Correct Answers: " + correct);
        $("#qAndAId").append(newCorrect).end();
        let newInCorrect = $("<p>");
        newInCorrect.addClass("question");
        newInCorrect.text("Incorrect Answers: " + incorrect);
        $("#qAndAId").append(newInCorrect).end();
        let newUnanswered = $("<p>");
        newUnanswered.addClass("question");
        newUnanswered.text("Unanswered: " + unanswered);
        $("#qAndAId").append(newUnanswered).end();
        let newRestart = $("<button>");
        newRestart.addClass("start");
        newRestart.text("Restart");
        let newRestartDiv = $("<div>");
        newRestartDiv.addClass("startDiv");
        newRestartDiv.append(newRestart).end();
        $("#qAndAId").append(newRestartDiv).end();
    }

    $(document).on("click", ".start", function () {
        $("#startDivId").empty();
        setUpGame();
    });

    $(document).on("click", ".answer", function () {
        revealAnswer($(this));
    });
});
