$(document).ready(
    function () {
        //add all event listener (clicks, etc.)

        $(".alphabet img").click(playGame);
        $("#newGame").click(restartGame);

        //any other functions (calculate trip, roll die, etc.)

        //WHAT FUNCTION DO THESE GO IN IF I REFERENCE THE VARIABLES IN OTHER FUNCTIONS

        //array of a dozen random words
        var randomWords = ["PLANET","GIRAFFE","SPEAKER","TELEPHONE","TELEVISION","REQUIREMENTS","STUDENTS"
            ,"CEREMONY","MEDITATION","RECTANGLE","ARGENTINA","ROLLERBLADE"]
        //calculate random number 0-11
        var randomNum = Math.floor(Math.random() * 12);
        var wordOfTheGame = randomWords[randomNum];
        var dashes = [];
        var numLives = 6;
        showWord();

        function showWord()
        {
            for(var letter of wordOfTheGame)
            {
                dashes.push("-");
            }
            $("#dashes").text(dashes.join(" "));
        }
        function playGame()
        {
                var clickedLetter = $(this).attr("value");
                if(wordOfTheGame.includes(clickedLetter))
                {
                    for(var i=0; i<wordOfTheGame.length; i++)
                    {
                        if(wordOfTheGame[i] === clickedLetter)
                        {
                            dashes[i] = clickedLetter;
                        }
                    }
                    $("#dashes").text(dashes.join(" "));
                }
                else
                {
                    numLives -= 1;
                    $("#endGame").text(`Wrong letter you have ${numLives} left`);
                }
                if(numLives === 0)
                {
                    $("#endGame").text(`Game over you died - The word was ${wordOfTheGame}`);

                }
                if(dashes.indexOf("-") === -1)
                {
                    $("#endGame").text("You won!");
                }
                $("#chosenLetters").append(clickedLetter);
        }
        function restartGame()
        {
            numLives = 6;
            randomNum = Math.floor(Math.random() * 12);
            wordOfTheGame = randomWords[randomNum];
            dashes = [];
            $("#endGame").text(" ");
            $("#chosenLetters").text(" ");
            showWord();
        }

    }
);