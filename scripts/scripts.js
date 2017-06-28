$(function() {

    // DECLARE VARIABLES
    var pictures;
    var pickedPictures;
    var playedPictures;

    // DECLARE ARRAY VARIABLES
    var currentCards=[];
    var chosenCard = [];
    var playedCards = []
    var playedPictures = [];
    var pair1 = [], pair2 = [], pair3 = [], pair4 = [], pair5 = [], pair6 = [], pair7 = [], pair8 = [], pair9 = [];


//    =======================================================
//        WORKING BELOW
//    =======================================================

    // DEBUGGING PURPOSES
    console.log(pictures);
    console.log(pickedPictures);
    console.log(playedPictures);
    console.log(pictures);

    function gameBoard() {

        // Alphabet Images
        var pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9;
        pic1 = 'images/alphabet/a.png';
        pic2 = 'images/alphabet/b.png';
        pic3 = 'images/alphabet/c.png';
        pic4 = 'images/alphabet/d.png';
        pic5 = 'images/alphabet/e.png';
        pic6 = 'images/alphabet/f.png';
        pic7 = 'images/alphabet/x.png';
        pic8 = 'images/alphabet/y.png';
        pic9 = 'images/alphabet/z.png';
        var randomCards = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];

        // Super Hero Images
        var pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18;
        pic10 = 'images/superHeros/batMan.png';
        pic11 = 'images/superHeros/superMan.png';
        pic12 = 'images/superHeros/ironMan.png';
        pic13 = 'images/superHeros/wonderWoman.png';
        pic14 = 'images/superHeros/hulk.png';
        pic15 = 'images/superHeros/spiderMan.png';
        pic16 = 'images/superHeros/captainAmerica.png';
        pic17 = 'images/superHeros/flash.png';
        pic18 = 'images/superHeros/greenLantern.png';
        var superHeros = [pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18,pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18];

        // Animal Set 1 Images
        var pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27;
        pic19 = 'images/animalsSetOne/aligator.jpg';
        pic20 = 'images/animalsSetOne/camel.jpg';
        pic21 = 'images/animalsSetOne/hippo.jpg';
        pic22 = 'images/animalsSetOne/lion.jpg';
        pic23 = 'images/animalsSetOne/monkey.jpg';
        pic24 = 'images/animalsSetOne/mouse.jpg';
        pic25 = 'images/animalsSetOne/rabbit.jpg';
        pic26 = 'images/animalsSetOne/rhino.jpg';
        pic27 = 'images/animalsSetOne/turtle.jpg';
        var animalSet1 = [pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27];

        // Animal Set 1 Images
        var pic28, pic29, pic30, pic31, pic32, pic33, pic34, pic35, pic36;
        pic28 = 'images/animalsSetOne/bull.jpg';
        pic29 = 'images/animalsSetOne/cat.jpg';
        pic30 = 'images/animalsSetOne/cow.jpg';
        pic31 = 'images/animalsSetOne/dog.jpg';
        pic32 = 'images/animalsSetOne/donkey.jpg';
        pic33 = 'images/animalsSetOne/pig.jpg';
        pic34 = 'images/animalsSetOne/rabbit.jpg';
        pic35 = 'images/animalsSetOne/sheep.jpg';
        pic36 = 'images/animalsSetOne/turtle.jpg';
        var animalSet2 = [pic28, pic29, pic30, pic31, pic32, pic33, pic34, pic35, pic36, pic28, pic29, pic30, pic31, pic32, pic33, pic34, pic35, pic36];

        // PICK A RANDOM IMAGE SET TO DISPLAY TO THE SCREEN
        pictures = [randomCards, superHeros, animalSet1, animalSet2];
        pickedPictures = Math.floor(Math.random() * pictures.length);
        playedPictures = pictures[pickedPictures];

        // PICK A RANDOM PICTURE FOR card#1
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card1').html('<img>');
        $('#card1 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#2
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card2').html('<img>');
        $('#card2 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#3
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card3').html('<img>');
        $('#card3 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#4
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card4').html('<img>');
        $('#card4 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#5
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card5').html('<img>');
        $('#card5 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#6
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card6').html('<img>');
        $('#card6 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#7
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card7').html('<img>');
        $('#card7 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#8
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card8').html('<img>');
        $('#card8 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        //  PICK A RANDOM PICTURE FOR card#9
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card9').html('<img>');
        $('#card9 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#10
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card10').html('<img>');
        $('#card10 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#11
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card11').html('<img>');
        $('#card11 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#12
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card12').html('<img>');
        $('#card12 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#13
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card13').html('<img>');
        $('#card13 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#14
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card14').html('<img>');
        $('#card14 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#15
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card15').html('<img>');
        $('#card15 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#16
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card16').html('<img>');
        $('#card16 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#17
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card17').html('<img>');
        $('#card17 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES

        // PICK A RANDOM PICTURE FOR card#18
        var randomPic = Math.floor(Math.random() * playedPictures.length) + 1;
        $('#card18').html('<img>');
        $('#card18 img').attr('src', playedPictures[randomPic-1]);
        playedPictures.splice((randomPic-1), 1);
        // console.log(randomPic);     // DEBUGGING PURPOSES
        // console.log(pictures);      // DEBUGGING PURPOSES

    } // END OF GAME BOARD FUNCTION

//    =======================================================
//        WORKING ABOVE
//    =======================================================
//    ===================================================
//        ===================================
//        =============================



    // INITIALIZE THE FUNCTION THAT GENERATES THE IMAGES TO THE GAME BOARD
    gameBoard();


//    console.log(pictures);

    $('.cards').click(function() {

        var currentButton = $(this).attr('id');
        var currentSelection = $(this).children().attr('src');
        var currentCard = $(this).children();
        chosenCard.push(currentCard);
        playedCards.push(currentButton);
        currentCards.push(currentSelection);

        // ROTATE BUTTON TO SHOW IMAGE
        $(this).addClass('rotate').removeClass('rotateAgain');

        // ROTATE IMAGE TO SHOW
        setTimeout(function() {
            $(currentCard).fadeIn(1000).addClass('imgShow').removeClass('imgHide');
        },600);

        // DEVELOPMENT PURPOSES
        console.log(playedCards);
        console.log(chosenCard);
        console.log(currentSelection);

        // CHECK IF THE FLIPPED CARDS MATCH
        while(currentCards.length === 2) {

            $('button').prop('disabled', true);
//            $('button').attr('disabled');
//            $('button').disabled = true;

            if(currentCards[0] === currentCards[1]) {

                playedPictures.push(chosenCard);
                console.log(playedPictures);
//                alert(playedPictures);
                playedCards.length = 0;
                currentCards.length = 0;
                chosenCard.length = 0;
                break;
            } else if(currentCards[0] !== currentCards[1]) {
                setTimeout(function() {

//                    $('button').disabled = true;

                    // FLIP THE BUTTON CONTAINERS FOR THE IMAGES
                    var card = '';
                    for(var x=0; x <= playedCards.length; x++) {
                        card = '#' + playedCards[x];
                        $(card).removeClass('rotate').addClass('.rotateAgain');
                    }
                    // HIDE THE PICTURES THAT DON'T MATCH
                    var img = '';
                    for(var x=0; x <= chosenCard.length; x++) {
                        img = chosenCard[x];
                        $(img).removeClass('imgShow').addClass('imgHide');//.hide(1000);
                    }

                    playedCards.length = 0;
                    currentCards.length = 0;
                    chosenCard.length = 0;
                }, 2000);
                break;
            };
        };

        setTimeout(function() {
            $('button').prop('disabled', false);
        }, 5000);

//        $('button').disabled = false;


        setTimeout(function() {
            if(playedPictures.length === 9) {
                alert('Congratulations player you have found all the pairs!')
                $('button').click(function() { return false;})
                    //.prop('disabled', true);//.removeClass('imgShow rotate');

            } else {
                return;
            }
        }, 3000);


    }); // END OF CARD CLICK FUNCTION

    // RESET THE GAME
    $('#reset').click(function() {
        $('.cards').removeClass('rotate');
        $('img').removeClass('imgShow');
        chosenCard = [];
        playedCards = []
        pair1 = [], pair2 = [], pair3 = [], pair4 = [], pair5 = [], pair6 = [], pair7 = [], pair8 = [], pair9 = [];

        gameBoard();
    }); // END OF RESET CLICK FUNCTION

}); // END OF SCRIPT
