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
            name: "Abra",
            image: "images/abra.png",
            choices: ["Abra", "Tentacool", "Ho-Oh", "Farfetch"],
            answer: 1
        },
        {
            name: "Deoxys",
            image: "images/deoxys.png",
            choices: ["Delfox", "Espeon", "Kangaskgan", "Deoxys"],
            answer: 4
        },
        {
            name: "FarFetch",
            image: "images/farfetch.jpg",
            choices: ["Kangaskgan", "Fartfetch", "Slowpoke", "Zapdos"],
            answer: 2
        },
        {
            name: "Golem",
            image: "images/golem.jpg",
            choices: ["Meowth", "Jirachi", "Golem", "Glalie"],
            answer: 3
        },
        {
            name: "Haunter",
            image: "images/haunter.jpg",
            choices: ["Haunter", "Ghastly", "Ho-Oh", "Charmander"],
            answer: 1
        },
        {
            name: "Ho-Oh",
            image: "images/Ho-Oh.jpg",
            choices: ["Zapdos", "Ho-Oh", "Pidgey", "Articuno"],
            answer: 2
        },
        {
            name: "Jigglypuff",
            image: "images/jigglypuff.png",
            choices: ["Ja'qhar", "Jirachi", "Clefairy", "Jigglypuff"],
            answer: 4
        },
        {
            name: "Kangaskhan",
            image: "images/Kangaskhan.png",
            choices: ["Delfox", "Kangaskgan", "Slowpoke", "Farfetch"],
            answer: 2
        },
        {
            name: "Mankey",
            image: "images/mankey.png",
            choices: ["Mankey", "Jirachi", "Ekans", "Tentacool"],
            answer: 1
        },
        {
            name: "Meowth",
            image: "images/meowth.jpg",
            choices: ["Tentacool", "Mew", "Meowth", "Onix"],
            answer: 3
        },
        {
            name: "Onix",
            image: "images/onix.jpg",
            choices: ["Tentacool", "Onix", "Golem", "Glalie"],
            answer: 2
        },
        {
            name: "Pidgey",
            image: "images/pidgey.png",
            choices: ["Pikachu", "Articuno", "Deoxys", "Pidgey"],
            answer: 4
        },
        {
            name: "Poliwag",
            image: "images/poliwag.png",
            choices: ["Slowpoke", "Abra", "Poliwag", "Mankey"],
            answer: 3
        },
        {
            name: "Slowpoke",
            image: "images/slowpoke.png",
            choices: ["Slowpoke", "Meowth", "Mew", "Delfox"],
            answer: 1
        },
        {
            name: "Snorlax",
            image: "images/snorlax.jpg",
            choices: ["Golem", "Glalie", "Poliwag", "Snorlax"],
            answer: 4
        },
        {
            name: "Tentacool",
            image: "images/tentacool.png",
            choices: ["Kangaskgan", "Tentacool", "Abra", "Fartfetch"],
            answer: 2
        },
        {
            name: "Zapdos",
            image: "images/zapdos.jpg",
            choices: ["Articuno", "Jirachi", "Deoxys", "Zapdos"],
            answer: 4
        },

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

        //getting choices
        var option1 = rand.choices[0];
        var option2 = rand.choices[1];
        var option3 = rand.choices[2];
        var option4 = rand.choices[3];

        //check console for checking purposes
        console.log("\n");
        console.log("---Answer---");
        console.log("The Answer is: " + answer);
        console.log("---Choices---");
        console.log("The first choice is: " + option1 + " || " + "1");
        console.log("The Second choice is: " + option2 + " || " + "2");
        console.log("The Third choice is: " + option3 + " || " + "3");
        console.log("The Fourth choice is: " + option4 + " || " + "4");
        console.log("\n");

        //click function 
        $(".option").click(function () {

            //grabbing the value from index.html
            var correct = (this.value);

            //comparing to see if the user clicks the right answer
            if (answer == correct) {
                restart();
            } else {
                console.log("Wrong Answer");
            }
        });
    };

    //restarts the game
    function restart() {
        //reloads the page
        window.location.reload();
    };

    //starts the game
    function startQuestions() {
        outputImage();
        displayChoices();
        correctChoice();
    };

    startQuestions();


});
