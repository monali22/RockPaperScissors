function rps (choice) {
    console.log(choice);
    var humanchoice, botchoice;
    humanchoice = choice.id;
    botchoice = numTochoice(ranDNum());
     results = decideWinner(humanchoice, botchoice);
     console.log(results);
    message = finalMessage(results);
    rpsFrontEnd(choice.id,botchoice, message);
}

function ranDNum() {
    return Math.floor(Math.random() * 3);
}

function numTochoice(number) {
    return ['rock','paper','scissors'][number];
}

function decideWinner(humanchoice, botchoice)  {
 var rpsDatabase = {
     'rock' : {'rock': 0.5, 'paper' : 0, 'scissors' : 1},
     'paper': {'rock': 1, 'paper' : 0.5, 'scissors' : 0},
     'scissors' : {'rock': 0, 'paper' : 1, 'scissors' : 0.5}
 }
 var yourScore = rpsDatabase[humanchoice][botchoice];
 var botScore = rpsDatabase[botchoice][humanchoice];

 return [yourScore,botScore];
}

function finalMessage([yourScore,botScore]) {
    if(yourScore == 0) {
        return {'messgae' : 'You Lost !', 'color' : 'red'};
    }
    else if (yourScore == 0.5) {
        return {'messgae' : 'You Tied !', 'color' : 'yellow'};
    }
    else {
        return {'messgae' : 'You Won !', 'color' : 'green'};
    }
}

function rpsFrontEnd(cid, botchoice, message) {
    var imageDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var resultDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='"+ imageDatabase[cid] + "' height = 150, width = 150, style = 'box-shadow:0px 10px 50px rgba(37,50,233,1)'>";
    botDiv.innerHTML = "<img src='"+ imageDatabase[botchoice] + "' height = 150, width = 150, style = 'box-shadow:0px 10px 50px rgba(243,38,24,1)'>";
    resultDiv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size:60px; padding: 30px'>" + message['messgae'] + "</h1>";
    document.getElementById('flex-cont').appendChild(humanDiv);
    document.getElementById('flex-cont').appendChild(resultDiv);
    document.getElementById('flex-cont').appendChild(botDiv);
}