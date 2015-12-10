var roulette = (function() {

    // Private Variables

    var wheel = [];
    var recordedSpins = [];

    var totalSpins = 0;

    var countRed = 0;
    var countBlack = 0;
    var countGreen = 0;

    function init() {
        // American Roulette
        wheel.push(
            {number: "1", color: "red"},
            {number: "2", color: "black"},
            {number: "3", color: "red"},
            {number: "4", color: "black"},
            {number: "5", color: "red"},
            {number: "6", color: "black"},
            {number: "7", color: "red"},
            {number: "8", color: "black"},
            {number: "9", color: "red"},
            {number: "10", color: "black"},
            {number: "11", color: "black"},
            {number: "12", color: "red"},
            {number: "13", color: "black"},
            {number: "14", color: "red"},
            {number: "15", color: "black"},
            {number: "16", color: "red"},
            {number: "17", color: "black"},
            {number: "18", color: "red"},
            {number: "19", color: "red"},
            {number: "20", color: "black"},
            {number: "21", color: "red"},
            {number: "22", color: "black"},
            {number: "23", color: "red"},
            {number: "24", color: "black"},
            {number: "25", color: "red"},
            {number: "26", color: "black"},
            {number: "27", color: "red"},
            {number: "28", color: "black"},
            {number: "29", color: "black"},
            {number: "30", color: "red"},
            {number: "31", color: "black"},
            {number: "32", color: "red"},
            {number: "33", color: "black"},
            {number: "34", color: "red"},
            {number: "35", color: "black"},
            {number: "36", color: "red"},
            {number: "0", color: "green"},
            {number: "00", color: "green"}
        );
    }

    function spin() {
        var randomNumber = Math.floor((Math.random() * 38));
        addSpinToRecord(wheel[randomNumber]);
        updateUICurrentSpin(wheel[randomNumber]);


    }

    function updateUICurrentSpin(spin) {
        document.getElementById("current-spin-number").innerHTML = spin.number;
        document.getElementById("current-spin-color").innerHTML = spin.color;
        document.getElementById("count-black").innerHTML = countBlack;
        document.getElementById("count-red").innerHTML = countRed;
        document.getElementById("count-green").innerHTML = countGreen;
        document.getElementById("probability-black").innerHTML = (countBlack/totalSpins).toFixed(2);
        document.getElementById("probability-red").innerHTML = (countRed/totalSpins).toFixed(2);
        document.getElementById("probability-green").innerHTML = (countGreen/totalSpins).toFixed(2);
        var node = null;
        var style = null;

        if (spin.color == "red") {

            node = document.getElementById("current-spin-color");
            style = node.style;
            style.backgroundColor = "red";
            style.color = "black";

        } else if (spin.color == "black") {

            node = document.getElementById("current-spin-color");
            style = node.style;
            style.backgroundColor = "black";
            style.color ="red";
        }
        document.getElementById("spins").innerHTML = totalSpins;
    }

    function addSpinToRecord(spin) {
        recordedSpins.push(spin);
        totalSpins++;

        if (spin.color == "red") {
            countRed++;
        }

        if (spin.color == "black") {
            countBlack++;
        }

        if (spin.color == "green") {
            countGreen++;
        }
    }

    return {
        setup: init,
        spin: spin,
        recordedSpins: recordedSpins
    };

})();

roulette.setup();

var timer = setInterval(function(){
    roulette.spin();
}, 10);


// eventually i'll build a carpet that shows the red black spread

(function() {

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

//Background
context.fillStyle = "#000";
context.fillRect(0, 0, canvas.width, canvas.height);
//Pixels
context.fillStyle = "#ff3300";
context.fillRect(0, 0, 1, 1);
context.fillRect(1, 0, 1, 1);
})();

