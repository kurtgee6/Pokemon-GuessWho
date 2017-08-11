var rand;
var emptyImageArr;

$(document).ready(function () {

    //charactersList array with multiple objects inside//
    var characterList = [

        {
            name: "Pikachu",
            image: "images/pikachu.jpg",
            choices: ["Squirtle", "Charizard", "Mew", "Pikachu"],
            answer: 4
        },

        {
            name: "Mew",
            image: "images/mew.jpg",
            choices: ["Charizard", "Mew", "Glalie", "Delfox"],
            answer: 2
        },

        {
            name: "Umbreon",
            image: "images/Espeon.jpg",
            choices: ["Umbreon", "Charizard", "Jirachi", "Squirtle"],
            answer: 1
        },

        {
            name: "Glalie",
            image: "images/Glalie.png",
            choices: ["Mew", "Squirtle", "Umbreon", "Glalie"],
            answer: 4
        },

        {
            name: "Delfox",
            image: "images/delfox.png",
            choices: ["Jirachi", "Charizard", "Delfox", "Squirtle"],
            answer: 3
        },

        {
            name: "Squirtle",
            image: "images/squrtle.png",
            choices: ["Umbreon", "Charizard", "Squirtle", "Mew"],
            answer: 3
        },

        {
            name: "Charizard",
            image: "images/Charizard.jpg",
            choices: ["Charizard", "Pikachu", "Glalie", "Delfox"],
            answer: 1
        },

        {
            name: "Jirachi",
            image: "images/jirachi.png",
            choices: ["Delfox", "Jirachi", "Mew", "Squirtle"],
            answer: 2
        }
    ];

    function startQuestions() {
        outputImage();
        displayChoices();
        correctChoice();
    };


    //display random images onto the HTML
    function outputImage() {

        emptyImageArr = [];

        //for loop that pushes characterList.images into empty ImageArr
        for (i = 0; i < characterList.length; i++) {
            emptyImageArr.push(characterList[i]);
        };

        //grabs random array that contains information object from emptyImageArr
        rand = emptyImageArr[Math.floor(Math.random() * emptyImageArr.length)];

        //displays image in HTML using JQuery
        $("#image").attr("src", rand.image);


    };


    //display choices that are within random object
    function displayChoices() {

        //displays onto the HTML
        $(".name1").text(rand.choices[0]);
        $(".name2").text(rand.choices[1]);
        $(".name3").text(rand.choices[2]);
        $(".name4").text(rand.choices[3]);

    };


    function correctChoice() {
        //getting answer
        var answer = rand.answer;
        var option1 = rand.choices[0];
        var option2 = rand.choices[1];
        var option3 = rand.choices[2];
        var option4 = rand.choices[3];

        console.log("\n");
        console.log("---Answer---");
        console.log("The Answer is: " + answer);
        console.log("---Choices---");
        console.log("The first choice is: " + option1 + " || " + "1");
        console.log("The Second choice is: " + option2 + " || " + "2");
        console.log("The Third choice is: " + option3 + " || " + "3");
        console.log("The Fourth choice is: " + option4 + " || " + "4");
        console.log("\n");

        $(".option").click(function () {

            var correct = (this.value);

            if (answer == correct) {
                restart();
            } else {
                console.log("Wrong Answer");
            }
        });
    };


    function restart() {
        window.location.reload();
    };

    function startQuestions() {
        outputImage();
        displayChoices();
        correctChoice();
    };

    startQuestions();


});
