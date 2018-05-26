// let $ = require("jQuery") ;
 $(document).ready(function () {
    let unanswered = 0;
    let correct = 0;
    let incorrect = 0;
    let dataMapArray = [];
    let dataMap = new Map();
     let fileContent = readTextFile('../data/TriviaQuestions.txt')
    console.log(fileContent);

    dataMap.set("mapIndex", 1)
    dataMap.set("question", "What is the common term for a list of things a person would like to do before they die?");
    dataMap.set("answer", "Bucket list");
    dataMap.set("bogus answers", ["Memoir", "Bucket list", "Tidy up", "Biography"]);
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 2)
    dataMap.set("question", "“Hey Boo Boo, let’s go get us a pic-a-nic basket!”, is a famous line often said by which cartoon character?");
    dataMap.set("answer", "Yogi Bear");
    dataMap.set("bogus answers", ["Yogi Bear", "Woody Woodpecker", "Popeye", "Batman"]);
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 3)
    dataMap.set("question", "What does the muppet Oscar the Grouch live in?");
    dataMap.set("answer", "A trash can");
    dataMap.set("bogus answers", ["Dog house", "Mailbox", "A trash can", "Tree"]);
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 4)
    dataMap.set("question", "Stratus, Cirrus and Cumulus are types of what?");
    dataMap.set("answer", "Clouds");
    dataMap.set("bogus answers", ["Tornados", "Weather patterns", "Types of hail", "Clouds"]);
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 5)
    dataMap.set("question", "Who was the first woman to be inducted into the Rock and Roll Hall of Fame?");
    dataMap.set("answer", "Aretha Franklin");
    dataMap.set("bogus answers", ["Donna Summers", "Tina Turner", "Aretha Franklin", "Madonna"]);
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 6)
    dataMap.set("question", "The 1927 New York Yankees batting order, including Babe Ruth and Lou Gehrig, was known by what nickname?");
    dataMap.set("answer", "Murderer’s Row");
    dataMap.set("bogus answers", ["Murderer’s Row", "The Nialators", "The Cleaners", "Terminators"]);
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 7)
    dataMap.set("question", "Jamón ibérico is a type of cured ham that is traditionally produced by which two neighboring countries?");
    dataMap.set("answer", "Spain and Portugal");
    dataMap.set("bogus answers", ["Brazil and Bolivia", "Spain and Portugal", "Russia and Mongolia", "France and Germany"]);
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 8)
    dataMap.set("question", "Dendrophobia is the fear of what?");
    dataMap.set("answer", "Trees");
    dataMap.set("bogus answers", ["Snakes", "Spiders", "Hurting someone's feelings", "Trees"]);
    dataMapArray.push(dataMap);

    dataMap = new Map()
    dataMap.set("mapIndex", 9)
    dataMap.set("question", "Head and Shoulders is a brand of shampoo that claims to deal with what common chronic scalp condition?");
    dataMap.set("answer", "Dandruff");
    dataMap.set("bogus answers", ["Split ends", "Dandruff", "Psoriasis", "Lice"]);
    dataMapArray.push(dataMap);

    let numberOfAnswered = [];
    let timerHandle;
    let questionNumber = 0;

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
            ansDiv.attr("href", "#").attr("correctAnswer", dataMapArray[questionNumber].get("answer"));
            ansDiv.text(dataMapArray[questionNumber].get("bogus answers")[i]);
            ansDiv.addClass("answer");
            $("#qAndAId").append(ansDiv).end();
        }
        $("#timerId").removeClass("timerOff").addClass("timerOn");
        timerHandle = countDown("timerId", 30000, "Times up!", shutDownQuestion);
        questionNumber++;
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
                newDiv.text("Correct!");
                $("#qAndAId").empty();
                $("#qAndAId").append(newDiv);
            }
            else {
                incorrect++;
                let newDiv = $("<div>");
                newDiv.addClass("question")
                newDiv.text("Wrong!");
                $("#qAndAId").empty();
                $("#qAndAId").append(newDiv);
                let ansDiv = $("<div>");
                ansDiv.addClass("question");
                ansDiv.text("The correct answer is: " + guess.attr("correctAnswer"));
                $("#qAndAId").append(ansDiv).end();
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

        }
        if (questionNumber === dataMapArray.length) {
            processResults();
            questionNumber = 0
        }
        else {
            setTimeout(setUpQues, 2000);
        }
    }

    function processResults() {

        // for(let i = 0; i < dataMapArray.length; i++) {
        //     if(dataMapArray[i].get("guess") === "") {
        //         unanswered++;
        //     }
        //     else {
        //         if(dataMapArray[i].get("guess") === dataMapArray[i].get("answer")) {
        //             correct++;
        //         }
        //         else {
        //             incorrect++;
        //         }
        //     }
        // }
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

    // function putFormInList(button) {        
    //     let isInList = false;
    //     let form = button.parent();
    //     form.attr("answer", button.attr("answer"));
    //     for(let i = 0; i < numberOfAnswered.length; i++) {
    //         if(numberOfAnswered[i].attr("index") === form.attr("index")) {
    //             numberOfAnswered[i] = form;
    //             isInList = true;
    //         }
    //     }
    //     if(isInList === false) {
    //         numberOfAnswered.push(form);            
    //     }   
    //     updateMaps(button);
    // }

    // function updateMaps(button) {
    //     for(let i = 0; i < dataMapArray.length; i++) {
    //         if(dataMapArray[i].get("mapIndex").toString() === button.attr("mapIndex")) {
    //             dataMapArray[i].set("guess", button.attr("guess"));               
    //         }   
    //     }
    // }

    $(document).on("click", ".start", function () {
        $("#startDivId").empty();
        setUpGame();
    });

    $(document).on("click", ".answer", function () {
        revealAnswer($(this));

        // putFormInList($(this));
        // if(numberOfAnswered.length === dataMapArray.length) {
        //     shutDownGame();
        // }
    });
    
});
