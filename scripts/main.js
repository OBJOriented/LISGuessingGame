var x;
const guessButton = document.getElementById("guess");
  const pickButton = document.getElementById("pick");
  const qTitle = document.getElementById("q");
  const finalButon= document.getElementById("final");
  const disclaimerTitle= document.getElementById("disclaimer");
  var choice;
  var q;
  var userAns;
  const asked = [];
  const john = {fName:"Professor John Robinson", doctor:"false", family:"true", age:"false", pilot:"false", military:"false", human:"true", female:"false", musical:"false", male:"true"};
  const maureen = {fName:"Dr. Maureen Robinson", doctor:"true", family:"true", age:"false", pilot:"false", military:"false", human:"true", female:"true", musical:"false", male:"false"};
  const don = {fName:"Major Don West", doctor:"false", family:"false", age:"false", pilot:"true", military:"true", human:"true", female:"false", musical:"false", male:"true"};
  const judy = {fName:"Judy Robinson", doctor:"false", family:"true", age:"false", pilot:"false", military:"false", human:"true", female:"true", musical:"false", male:"false"};
  const penny = {fName:"Penny Robinson", doctor:"false", family:"true", age:"true", pilot:"false", military:"false", human:"true", female:"true", musical:"false", male:"false"};
  const will = {fName:"Will Robinson", doctor:"false", family:"true", age:"true", pilot:"false", military:"false", human:"true", female:"false", musical:"true", male:"true"};
  const smith = {fName:"Dr. Zachary Smith", doctor:"true", family:"false", age:"false", pilot:"false", military:"true", human:"true", female:"false", musical:"false", male:"true"};
  const b9 = {fName:"Robot B9", doctor:"false", family:"false", age:"false", pilot:"false", military:"false", human:"false", female:"false", musical:"true", male:"true"};
  const tucker = {fName:"Captain Alonso P. Tucker", doctor:"false", family:"false", age:"false", pilot:"true", military:"false", human:"true", female:"false", musical:"false", male:"true"};
  const athena = {fName:"Athena the Lorelei", doctor:"false", family:"false", age:"false", pilot:"false", military:"false", human:"false", female:"true", musical:"false", male:"false"};
  const nobody = {fName:"Mr. Nobody", doctor:"false", family:"false", age:"false", pilot:"false", military:"false", human:"false", female:"false", musical:"false", male:"true"};
  const morbus = {fName:"Morbus", doctor:"false", family:"false", age:"false", pilot:"false", military:"false", human:"false", female:"false", musical:"false", male:"true"};
  const antiDon = {fName:"Anti-Matter Don West", doctor:"false", family:"false", age:"false", pilot:"false", military:"false", human:"true", female:"false", musical:"false", male:"true"};
  const hamish = {fName:"Hamish Rhu Glamis", doctor:"false", family:"false", age:"false", pilot:"false", military:"false", human:"true", female:"false", musical:"true", male:"true"};
  var people = [john,maureen,don,judy,penny,will,smith,b9,tucker,athena,nobody,morbus,antiDon,hamish];
  var shortcut;


function guessDisplay() {

  document.querySelector("#disclaimer").textContent = "You get five questions.";

  guessButton.remove();
    pickButton.remove();

    document.querySelector("#hint").textContent = "Click a character to guess early.";

    x =
    document.createElement("form");
    x.setAttribute("id", "question");

    var y =
    document.createElement("select");
    y.setAttribute("id", "questions");

    var y1 =
    document.createElement("option");
    y1.setAttribute("id", "doctor");
    y1.text = " Is this person a doctor? ";
    var y2 =
    document.createElement("option");
    y2.setAttribute("id", "family");
    y2.text = " Is this a member of the Robinson family? ";
    var y3 =
    document.createElement("option");
    y3.setAttribute("id", "age");
    y3.text = " Is this person a child? ";
    var y4 = 
    document.createElement("option");
    y4.setAttribute("id", "pilot");
    y4.text = " Is this person a pilot? ";
    var y5 = 
    document.createElement("option");
    y5.setAttribute("id", "military");
    y5.text = " Is this person a member of the military? ";
    var y6 = 
    document.createElement("option");
    y6.setAttribute("id", "human");
    y6.text = " Is this person human? ";
    var y7 = 
    document.createElement("option");
    y7.setAttribute("id", "female");
    y7.text = " Is this person female? ";
    var y8 = 
    document.createElement("option");
    y8.setAttribute("id", "instrument");
    y8.text = " Does this person play a musical instrument? ";
    var y9 = 
    document.createElement("option");
    y9.setAttribute("id", "male");
    y9.text = " Is this person male? ";

      var xy = document.createElement("INPUT");
      xy.setAttribute("type", "button");
      xy.setAttribute("onclick", "moves()");
      xy.setAttribute("value", "submit");


    document.body.appendChild(x);
    document.getElementById("question").appendChild(y);
    document.getElementById("questions").appendChild(y1);
    document.getElementById("questions").appendChild(y2);
    document.getElementById("questions").appendChild(y3);
    document.getElementById("questions").appendChild(y4);
    document.getElementById("questions").appendChild(y5);
    document.getElementById("questions").appendChild(y6);
    document.getElementById("questions").appendChild(y7);
    document.getElementById("questions").appendChild(y8);
    document.getElementById("questions").appendChild(y9);
    document.getElementById("question").appendChild(xy);

    choice = people[Math.floor(Math.random()*people.length)];
    
    
      const magicHandle = function() {
        shortcut=(this.id);
        endgame();
      }
      document.getElementById('johnPic').onclick = magicHandle;
      document.getElementById('maureenPic').onclick = magicHandle;
      document.getElementById('donPic').onclick = magicHandle;
      document.getElementById('judyPic').onclick = magicHandle;
      document.getElementById('pennyPic').onclick = magicHandle;
      document.getElementById('willPic').onclick = magicHandle;
      document.getElementById('smithPic').onclick = magicHandle;
      document.getElementById('b9Pic').onclick = magicHandle;
      document.getElementById('tuckerPic').onclick = magicHandle;
      document.getElementById('athenaPic').onclick = magicHandle;
      document.getElementById('nobodyPic').onclick = magicHandle;
      document.getElementById('morbusPic').onclick = magicHandle;
      document.getElementById('antidonPic').onclick = magicHandle;
      document.getElementById('hamishPic').onclick = magicHandle;


     
}

function moves() {
  q = document.getElementById("questions").value;
  asked.push(q);
  answer();
  if (asked.length >= 5) {
    forceGuess();
  }
}

function answer() {

  if (q == "Is this person a doctor?") {
    if (choice.doctor == "true") {
    document.querySelector("#q").textContent = "Yes, this person is a doctor!";
    return;
  }
  else {
    document.querySelector("#q").textContent = "No, this person is not a doctor.";
    return;
  }
}
   if (q == "Is this a member of the Robinson family?") {
    if (choice.family == "true") {
    document.querySelector("#q").textContent = "Yes, this person is a member of the Robinson family!";
    return;
  }
  else {
    document.querySelector("#q").textContent = "No, this person is not a member of the Robinson family.";
    return;
  }
}
if (q == "Is this person a child?") {
  if (choice.age == "true") {
  document.querySelector("#q").textContent = "Yes, this person is a child!";
  return;
}
else {
  document.querySelector("#q").textContent = "No, this person is not a child.";
  return;
}
}
if (q == "Is this person a pilot?") {
  if (choice.pilot == "true") {
  document.querySelector("#q").textContent = "Yes, this person is a pilot!";
  return;
}
else {
  document.querySelector("#q").textContent = "No, this person is not a pilot.";
  return;
}
}
if (q == "Is this person a member of the military?") {
  if (choice.military == "true") {
  document.querySelector("#q").textContent = "Yes, this person is a member of the military!";
  return;
}
else {
  document.querySelector("#q").textContent = "No, this person is not a member of the military.";
  return;
}
}
if (q == "Is this person human?") {
  if (choice.human == "true") {
  document.querySelector("#q").textContent = "Yes, this person is a human!";
  return;
}
else {
  document.querySelector("#q").textContent = "No, this person is not a human.";
  return;
}
}
if (q == "Is this person female?") {
  if (choice.female == "true") {
  document.querySelector("#q").textContent = "Yes, this person is female!";
  return;
}
else {
  document.querySelector("#q").textContent = "No, this person is not female.";
  return;
}
}
if (q == "Does this person play a musical instrument?") {
  if (choice.musical == "true") {
  document.querySelector("#q").textContent = "Yes, this person plays a musical instrument!";
  return;
}
else {
  document.querySelector("#q").textContent = "No, this person does not play a musical instrument.";
  return;
}
}
if (q == "Is this person male?") {
  if (choice.male == "true") {
  document.querySelector("#q").textContent = "Yes, this person is male!";
  return;
}
else {
  document.querySelector("#q").textContent = "No, this person is not male.";
  return;
}
}

  
}

function forceGuess() {
  x.remove();
  document.querySelector("#final").textContent = "You asked: " + asked + " Who is your final guess?";
  
  var s =
      document.createElement("form");
      s.setAttribute("id", "character");
  
      var t =
      document.createElement("select");
      t.setAttribute("id", "selector");
  
      var t1 =
      document.createElement("option");
      t1.setAttribute("id", "john");
      t1.text = "Professor John Robinson";
      var t2 =
      document.createElement("option");
      t2.setAttribute("id", "maureen");
      t2.text = "Dr. Maureen Robinson";
      var t3 =
      document.createElement("option");
      t3.setAttribute("id", "don");
      t3.text = "Major Don West";
      var t4 = 
      document.createElement("option");
      t4.setAttribute("id", "judy");
      t4.text = "Judy Robinson";
      var t5 = 
      document.createElement("option");
      t5.setAttribute("id", "penny");
      t5.text = "Penny Robinson";
      var t6 = 
      document.createElement("option");
      t6.setAttribute("id", "will");
      t6.text = "Will Robinson";
      var t7 = 
      document.createElement("option");
      t7.setAttribute("id", "smith");
      t7.text = "Dr. Zachary Smith";
      var t8 = 
      document.createElement("option");
      t8.setAttribute("id", "robot");
      t8.text = "Robot B9";
      var t9 = 
      document.createElement("option");
      t9.setAttribute("id", "tucker");
      t9.text = "Captain Alonso P. Tucker";
      var t10 = 
      document.createElement("option");
      t10.setAttribute("id", "athena");
      t10.text = "Athena the Lorelei";
      var t11 = 
      document.createElement("option");
      t11.setAttribute("id", "nobody");
      t11.text = "Mr. Nobody";
      var t12 = 
      document.createElement("option");
      t12.setAttribute("id", "morbus");
      t12.text = "Morbus";
      var t13 = 
      document.createElement("option");
      t13.setAttribute("id", "antiDon");
      t13.text = "Anti-Matter Don West";
      var t14 = 
      document.createElement("option");
      t14.setAttribute("id", "hamish");
      t14.text = "Hamish Rhu Glamis";

      var u = document.createElement("INPUT");
      u.setAttribute("type", "button");
      u.setAttribute("onclick", "endgame()");
      u.setAttribute("value", "submit");
  
  
      document.body.appendChild(s);
      document.getElementById("character").appendChild(t);
      document.getElementById("selector").appendChild(t1);
      document.getElementById("selector").appendChild(t2);
      document.getElementById("selector").appendChild(t3);
      document.getElementById("selector").appendChild(t4);
      document.getElementById("selector").appendChild(t5);
      document.getElementById("selector").appendChild(t6);
      document.getElementById("selector").appendChild(t7);
      document.getElementById("selector").appendChild(t8);
      document.getElementById("selector").appendChild(t9);
      document.getElementById("selector").appendChild(t10);
      document.getElementById("selector").appendChild(t11);
      document.getElementById("selector").appendChild(t13);
      document.getElementById("selector").appendChild(t14);
      document.getElementById("character").appendChild(u);


}

function endgame() {

  if (document.getElementById("selector") === null) {
    if (shortcut === "johnPic") {
      userAns = "Professor John Robinson";
    }
    if (shortcut === "maureenPic") {
      userAns = "Dr. Maureen Robinson";
    }
    if (shortcut === "donPic") {
      userAns = "Major Don West";
    }
    if (shortcut === "judyPic") {
      userAns = "Judy Robinson";
    }
    if (shortcut === "pennyPic") {
      userAns = "Penny Robinson";
    }
    if (shortcut === "willPic") {
      userAns = "Will Robinson";
    }
    if (shortcut === "smithPic") {
      userAns = "Dr. Zachary Smith";
    }
    if (shortcut === "b9Pic") {
      userAns = "Robot B9";
    }
    if (shortcut === "tuckerPic") {
      userAns = "Captain Alonso P. Tucker";
    }
    if (shortcut === "athenaPic") {
      userAns = "Athena the Lorelei";
    }
    if (shortcut === "nobodyPic") {
      userAns = "Mr. Nobody";
    }
    if (shortcut === "morbusPic") {
      userAns = "Morbus";
    }
    if (shortcut === "antidonPic") {
      userAns = "Anti-Matter Don West";
    }
    if (shortcut === "hamishPic") {
      userAns = "Hamish Rhu Glamis";
    }
    questionForm = document.getElementById("question");
    questionForm.remove();
  }

  if (document.getElementById("selector") !==  null) {
    userAns = document.getElementById("selector").value;
  }


  if (document.getElementById("character") !== null) {
    let characterForm = document.getElementById("character");
    characterForm.remove();
  }

if (userAns == "Professor John Robinson") {
  if (choice ==john) {
  document.querySelector("#results").textContent = "You were right, it was " + choice.fName + "!!! Refresh the page to play again.";
  return;
}
else {
  document.querySelector("#results").textContent = "Sorry, the correct answer was " + choice.fName + ". Refresh the page to play again.";
  return;
}
}

if (userAns == "Dr. Maureen Robinson") {
  if (choice ==maureen) {
  document.querySelector("#results").textContent = "You were right, it was " + choice.fName + "!!! Refresh the page to play again.";
  return;
}
else {
  document.querySelector("#results").textContent = "Sorry, the correct answer was " + choice.fName + ". Refresh the page to play again.";
  return;
}
}

if (userAns == "Major Don West") {
  if (choice ==don) {
  document.querySelector("#results").textContent = "You were right, it was " + choice.fName + "!!! Refresh the page to play again.";
  return;
}
else {
  document.querySelector("#results").textContent = "Sorry, the correct answer was " + choice.fName + ". Refresh the page to play again.";
  return;
}
}

if (userAns == "Judy Robinson") {
  if (choice ==judy) {
  document.querySelector("#results").textContent = "You were right, it was " + choice.fName + "!!! Refresh the page to play again.";
  return;
}
else {
  document.querySelector("#results").textContent = "Sorry, the correct answer was " + choice.fName + ". Refresh the page to play again.";
  return;
}
}

if (userAns == "Penny Robinson") {
  if (choice ==penny) {
  document.querySelector("#results").textContent = "You were right, it was " + choice.fName + "!!! Refresh the page to play again.";
  return;
}
else {
  document.querySelector("#results").textContent = "Sorry, the correct answer was " + choice.fName + ". Refresh the page to play again.";
  return;
}
}

if (userAns == "Will Robinson") {
  if (choice ==will) {
  document.querySelector("#results").textContent = "You were right, it was " + choice.fName + "!!! Refresh the page to play again.";
  return;
}
else {
  document.querySelector("#results").textContent = "Sorry, the correct answer was " + choice.fName + ". Refresh the page to play again.";
  return;
}
}

if (userAns == "Dr. Zachary Smith") {
  if (choice ==smith) {
  document.querySelector("#results").textContent = "You were right, it was " + choice.fName + "!!! Refresh the page to play again.";
  return;
}
else {
  document.querySelector("#results").textContent = "Sorry, the correct answer was " + choice.fName + ". Refresh the page to play again.";
  return;
}
}

if (userAns == "Robot B9") {
  if (choice ==b9) {
  document.querySelector("#results").textContent = "You were right, it was " + choice.fName + "!!! Refresh the page to play again.";
  return;
}
else {
  document.querySelector("#results").textContent = "Sorry, the correct answer was " + choice.fName + ". Refresh the page to play again.";
  return;
}
}

if (userAns == "Captain Alonso P. Tucker") {
  if (choice ==tucker) {
  document.querySelector("#results").textContent = "You were right, it was " + choice.fName + "!!! Refresh the page to play again.";
  return;
}
else {
  document.querySelector("#results").textContent = "Sorry, the correct answer was " + choice.fName + ". Refresh the page to play again.";
  return;
}
}
if (userAns == "Athena the Lorelei") {
  if (choice ==athena) {
  document.querySelector("#results").textContent = "You were right, it was " + choice.fName + "!!! Refresh the page to play again.";
  return;
}
else {
  document.querySelector("#results").textContent = "Sorry, the correct answer was " + choice.fName + ". Refresh the page to play again.";
  return;
}
}
if (userAns == "Mr. Nobody") {
  if (choice ==nobody) {
  document.querySelector("#results").textContent = "You were right, it was " + choice.fName + "!!! Refresh the page to play again.";
  return;
}
else {
  document.querySelector("#results").textContent = "Sorry, the correct answer was " + choice.fName + ". Refresh the page to play again.";
  return;
}
}
if (userAns == "Morbus") {
  if (choice ==morbus) {
  document.querySelector("#results").textContent = "You were right, it was " + choice.fName + "!!! Refresh the page to play again.";
  return;
}
else {
  document.querySelector("#results").textContent = "Sorry, the correct answer was " + choice.fName + ". Refresh the page to play again.";
  return;
}
}
if (userAns == "Anti-Matter Don West") {
  if (choice ==antiDon) {
  document.querySelector("#results").textContent = "You were right, it was " + choice.fName + "!!! Refresh the page to play again.";
  return;
}
else {
  document.querySelector("#results").textContent = "Sorry, the correct answer was " + choice.fName + ". Refresh the page to play again.";
  return;
}
}
if (userAns == "Hamish Rhu Glamis") {
  if (choice ==hamish) {
  document.querySelector("#results").textContent = "You were right, it was " + choice.fName + "!!! Refresh the page to play again.";
  return;
}
else {
  document.querySelector("#results").textContent = "Sorry, the correct answer was " + choice.fName + ". Refresh the page to play again.";
  return;
}
}
}

var l;
var rawPVC;
var playerVComputer;
var currQ;
var ComputerGuess;
const Cq1Value = {vlu:0, question:"Is this person a doctor?"};
const Cq2Value = {vlu:0, question:"Is this a member of the Robinson family?"};
const Cq3Value = {vlu:0, question:"Is this person a child?"};
const Cq4Value = {vlu:0, question:"Is this person a pilot?"};
const Cq5Value = {vlu:0, question:"Is this person a member of the military?"};
const Cq6Value = {vlu:0, question:"Is this person human?"};
const Cq7Value = {vlu:0, question:"Is this person female?"};
const Cq8Value = {vlu:0, question:"Does this person play a musical instrument?"};
const Cq9Value = {vlu:0, question:"Is this person male?"};
var QQueue = [Cq1Value,Cq2Value,Cq3Value,Cq4Value,Cq5Value,Cq6Value,Cq7Value,Cq8Value,Cq9Value];


function pickDisplay() {

  document.querySelector("#disclaimer").textContent = "Pick a character. The AI also only gets 5 questions.";


  guessButton.remove();
  pickButton.remove();

  l =
  document.createElement("form");
      l.setAttribute("id", "pickCharacter");
  
      var t =
      document.createElement("select");
      t.setAttribute("id", "characterOption");
  
      var t1 =
      document.createElement("option");
      t1.setAttribute("id", "john");
      t1.text = "Professor John Robinson";
      var t2 =
      document.createElement("option");
      t2.setAttribute("id", "maureen");
      t2.text = "Dr. Maureen Robinson";
      var t3 =
      document.createElement("option");
      t3.setAttribute("id", "don");
      t3.text = "Major Don West";
      var t4 = 
      document.createElement("option");
      t4.setAttribute("id", "judy");
      t4.text = "Judy Robinson";
      var t5 = 
      document.createElement("option");
      t5.setAttribute("id", "penny");
      t5.text = "Penny Robinson";
      var t6 = 
      document.createElement("option");
      t6.setAttribute("id", "will");
      t6.text = "Will Robinson";
      var t7 = 
      document.createElement("option");
      t7.setAttribute("id", "smith");
      t7.text = "Dr. Zachary Smith";
      var t8 = 
      document.createElement("option");
      t8.setAttribute("id", "robot");
      t8.text = "Robot B9";
      var t9 = 
      document.createElement("option");
      t9.setAttribute("id", "tucker");
      t9.text = "Captain Alonso P. Tucker";
      var t10 = 
      document.createElement("option");
      t10.setAttribute("id", "athena");
      t10.text = "Athena the Lorelei";
      var t11 = 
      document.createElement("option");
      t11.setAttribute("id", "nobody");
      t11.text = "Mr. Nobody";
      var t12 = 
      document.createElement("option");
      t12.setAttribute("id", "morbus");
      t12.text = "Morbus";
      var t13 = 
      document.createElement("option");
      t13.setAttribute("id", "antiDon");
      t13.text = "Anti-Matter Don West";
      var t14 = 
      document.createElement("option");
      t14.setAttribute("id", "hamish");
      t14.text = "Hamish Rhu Glamis";

      var u = document.createElement("INPUT");
      u.setAttribute("type", "button");
      u.setAttribute("onclick", "playerMoves()");
      u.setAttribute("value", "submit");
  
  
      document.body.appendChild(l);
      document.getElementById("pickCharacter").appendChild(t);
      document.getElementById("characterOption").appendChild(t1);
      document.getElementById("characterOption").appendChild(t2);
      document.getElementById("characterOption").appendChild(t3);
      document.getElementById("characterOption").appendChild(t4);
      document.getElementById("characterOption").appendChild(t5);
      document.getElementById("characterOption").appendChild(t6);
      document.getElementById("characterOption").appendChild(t7);
      document.getElementById("characterOption").appendChild(t8);
      document.getElementById("characterOption").appendChild(t9);
      document.getElementById("characterOption").appendChild(t10);
      document.getElementById("characterOption").appendChild(t11);
      document.getElementById("characterOption").appendChild(t13);
      document.getElementById("characterOption").appendChild(t14);
      document.getElementById("pickCharacter").appendChild(u);

  }

  function playerMoves() {
    rawPVC = document.getElementById("characterOption").value;
    if (rawPVC === john.fName) {
      playerVComputer = john;
    }
    if (rawPVC === maureen.fName) {
      playerVComputer = maureen;
    }
    if (rawPVC === don.fName) {
      playerVComputer = don;
    }
    if (rawPVC === judy.fName) {
      playerVComputer = judy;
    }
    if (rawPVC === penny.fName) {
      playerVComputer = penny;
    }
    if (rawPVC === will.fName) {
      playerVComputer = will;
    }
    if (rawPVC === smith.fName) {
      playerVComputer = smith;
    }
    if (rawPVC === b9.fName) {
      playerVComputer = b9;
    }
    if (rawPVC === tucker.fName) {
      playerVComputer = tucker;
    }
    if (rawPVC === athena.fName) {
      playerVComputer = athena;
    }
    if (rawPVC === nobody.fName) {
      playerVComputer = nobody;
    }
    if (rawPVC === morbus.fName) {
      playerVComputer = morbus;
    }
    if (rawPVC === antiDon.fName) {
      playerVComputer = antiDon;
    }
    if (rawPVC === hamish.fName) {
      playerVComputer = hamish;
    }
    cTurn();
  }

  function cTurn() {

    disclaimerTitle.remove();

    const oldSub = document.getElementById("pickCharacter");

    oldSub.remove();

    values();

    currQ = QQueue.reduce((prev, current) => (+prev.vlu > +current.vlu) ? prev : current)
    
    document.querySelector("#q").textContent = "The Computer is asking: " + currQ.question;

    if (currQ.question === "Is this person a doctor?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq1Value);

      if (playerVComputer.doctor === "true") {

      people = remover(people, john);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);

        
        document.querySelector("#final").textContent = "Yes, this person is a doctor!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a doctor.";
        people = remover(people, smith);
      people = remover(people, maureen);

      }
    }

    if (currQ.question === "Is this a member of the Robinson family?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq2Value);

      if (playerVComputer.family === "true") {

      people = remover(people, don);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a member of the Robinson family!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a member of the Robinson family.";
        people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      }
    }

    if (currQ.question === "Is this person a child?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq3Value);

      if (playerVComputer.age === "true") {

      people = remover(people, john);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, maureen);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a child!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a child.";
        people = remover(people, will);
      people = remover(people, penny);
      }
    }

    if (currQ.question === "Is this person a pilot?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq4Value);
      
      if (playerVComputer.pilot === "true") {

      people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a pilot!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a pilot.";
        people = remover(people, don);
      people = remover(people, tucker);
      }
    }

    if (currQ.question === "Is this person a member of the military?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq5Value);

      if (playerVComputer.military === "true") {

      people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, tucker);
      people = remover(people, b9);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a member of the military!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a member of the military.";
        people = remover(people, smith);
      people = remover(people, don);
      }
    }

    if (currQ.question === "Is this person human?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq6Value);

      if (playerVComputer.human === "true") {
        people = remover(people, b9);
        people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      
      document.querySelector("#final").textContent = "Yes, this person is human!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not human.";
        people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, tucker);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      }
    }

    if (currQ.question === "Is this person female?") {
      
      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    QQueue = remover(QQueue, Cq7Value);
    QQueue = remover(QQueue, Cq9Value);

      if (playerVComputer.female === "true") {

      people = remover(people, john);
      people = remover(people, don);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is female!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not female.";
        people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, athena);
      }
    }

    if (currQ.question === "Does this person play a musical instrument?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    QQueue = remover(QQueue, Cq8Value);

      if (playerVComputer.musical === "true") {

      people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, smith);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      document.querySelector("#final").textContent = "Yes, this person plays a musical instrument!";

      } else {
        document.querySelector("#final").textContent = "No, this person does not play a musical instrument.";
        people = remover(people, will);
      people = remover(people, b9);
      people = remover(people, hamish);

      }
    }

    if (currQ.question === "Is this person male?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    QQueue = remover(QQueue, Cq9Value);
      QQueue = remover(QQueue, Cq7Value);
    
      if (playerVComputer.male === "true") {

      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, athena);
      document.querySelector("#final").textContent = "Yes, this person is male!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not male.";
        people = remover(people, john);
      people = remover(people, don);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      }
    }

    var nB =
      document.createElement("button");
      nB.setAttribute("id", "next");
      nB.setAttribute("onclick", "cTurn1()");
      nB.textContent = "Next Question";
      document.body.appendChild(nB);
  }

  function cTurn1() {

    const nextButton = document.getElementById("next");

    nextButton.remove();

    values();

    currQ = QQueue.reduce((prev, current) => (+prev.vlu > +current.vlu) ? prev : current)
    
    document.querySelector("#q").textContent = "The Computer is asking: " + currQ.question;

    if (currQ.question === "Is this person a doctor?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq1Value);

      if (playerVComputer.doctor === "true") {

      people = remover(people, john);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);

        
        document.querySelector("#final").textContent = "Yes, this person is a doctor!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a doctor.";
        people = remover(people, smith);
      people = remover(people, maureen);

      }
    }

    if (currQ.question === "Is this a member of the Robinson family?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq2Value);

      if (playerVComputer.family === "true") {

      people = remover(people, don);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a member of the Robinson family!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a member of the Robinson family.";
        people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      }
    }

    if (currQ.question === "Is this person a child?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq3Value);

      if (playerVComputer.age === "true") {

      people = remover(people, john);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, maureen);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a child!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a child.";
        people = remover(people, will);
      people = remover(people, penny);
      }
    }

    if (currQ.question === "Is this person a pilot?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq4Value);
      
      if (playerVComputer.pilot === "true") {

      people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a pilot!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a pilot.";
        people = remover(people, don);
      people = remover(people, tucker);
      }
    }

    if (currQ.question === "Is this person a member of the military?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq5Value);

      if (playerVComputer.military === "true") {

      people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, tucker);
      people = remover(people, b9);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a member of the military!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a member of the military.";
        people = remover(people, smith);
      people = remover(people, don);
      }
    }

    if (currQ.question === "Is this person human?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq6Value);

      if (playerVComputer.human === "true") {
        people = remover(people, b9);
        people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      
      document.querySelector("#final").textContent = "Yes, this person is human!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not human.";
        people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, tucker);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      }
    }

    if (currQ.question === "Is this person female?") {
      
      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    QQueue = remover(QQueue, Cq7Value);
    QQueue = remover(QQueue, Cq9Value);

      if (playerVComputer.female === "true") {

      people = remover(people, john);
      people = remover(people, don);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is female!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not female.";
        people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, athena);
      }
    }

    if (currQ.question === "Does this person play a musical instrument?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    QQueue = remover(QQueue, Cq8Value);

      if (playerVComputer.musical === "true") {

      people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, smith);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      document.querySelector("#final").textContent = "Yes, this person plays a musical instrument!";

      } else {
        document.querySelector("#final").textContent = "No, this person does not play a musical instrument.";
        people = remover(people, will);
      people = remover(people, b9);
      people = remover(people, hamish);

      }
    }

    if (currQ.question === "Is this person male?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    QQueue = remover(QQueue, Cq9Value);
      QQueue = remover(QQueue, Cq7Value);
    
      if (playerVComputer.male === "true") {

      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, athena);
      document.querySelector("#final").textContent = "Yes, this person is male!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not male.";
        people = remover(people, john);
      people = remover(people, don);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      }
    }


    var nB =
      document.createElement("button");
      nB.setAttribute("id", "next");
      nB.setAttribute("onclick", "cTurn2()");
      nB.textContent = "Next Question";
      document.body.appendChild(nB);
  }

  function cTurn2() {

    const nextButton = document.getElementById("next");

    nextButton.remove();

    values();

    currQ = QQueue.reduce((prev, current) => (+prev.vlu > +current.vlu) ? prev : current)
    
    document.querySelector("#q").textContent = "The Computer is asking: " + currQ.question;

    if (currQ.question === "Is this person a doctor?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq1Value);

      if (playerVComputer.doctor === "true") {

      people = remover(people, john);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);

        
        document.querySelector("#final").textContent = "Yes, this person is a doctor!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a doctor.";
        people = remover(people, smith);
      people = remover(people, maureen);

      }
    }

    if (currQ.question === "Is this a member of the Robinson family?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq2Value);

      if (playerVComputer.family === "true") {

      people = remover(people, don);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a member of the Robinson family!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a member of the Robinson family.";
        people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      }
    }

    if (currQ.question === "Is this person a child?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq3Value);

      if (playerVComputer.age === "true") {

      people = remover(people, john);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, maureen);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a child!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a child.";
        people = remover(people, will);
      people = remover(people, penny);
      }
    }

    if (currQ.question === "Is this person a pilot?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq4Value);
      
      if (playerVComputer.pilot === "true") {

      people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a pilot!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a pilot.";
        people = remover(people, don);
      people = remover(people, tucker);
      }
    }

    if (currQ.question === "Is this person a member of the military?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq5Value);

      if (playerVComputer.military === "true") {

      people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, tucker);
      people = remover(people, b9);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a member of the military!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a member of the military.";
        people = remover(people, smith);
      people = remover(people, don);
      }
    }

    if (currQ.question === "Is this person human?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq6Value);

      if (playerVComputer.human === "true") {
        people = remover(people, b9);
        people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      
      document.querySelector("#final").textContent = "Yes, this person is human!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not human.";
        people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, tucker);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      }
    }

    if (currQ.question === "Is this person female?") {
      
      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    QQueue = remover(QQueue, Cq7Value);
    QQueue = remover(QQueue, Cq9Value);

      if (playerVComputer.female === "true") {

      people = remover(people, john);
      people = remover(people, don);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is female!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not female.";
        people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, athena);
      }
    }

    if (currQ.question === "Does this person play a musical instrument?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    QQueue = remover(QQueue, Cq8Value);

      if (playerVComputer.musical === "true") {

      people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, smith);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      document.querySelector("#final").textContent = "Yes, this person plays a musical instrument!";

      } else {
        document.querySelector("#final").textContent = "No, this person does not play a musical instrument.";
        people = remover(people, will);
      people = remover(people, b9);
      people = remover(people, hamish);

      }
    }

    if (currQ.question === "Is this person male?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    QQueue = remover(QQueue, Cq9Value);
      QQueue = remover(QQueue, Cq7Value);
    
      if (playerVComputer.male === "true") {

      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, athena);
      document.querySelector("#final").textContent = "Yes, this person is male!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not male.";
        people = remover(people, john);
      people = remover(people, don);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      }
    }


    var nB =
      document.createElement("button");
      nB.setAttribute("id", "next");
      nB.setAttribute("onclick", "cTurn3()");
      nB.textContent = "Next Question";
      document.body.appendChild(nB);
  }

  function cTurn3() {

    const nextButton = document.getElementById("next");

    nextButton.remove();

    values();

    currQ = QQueue.reduce((prev, current) => (+prev.vlu > +current.vlu) ? prev : current)
    
    document.querySelector("#q").textContent = "The Computer is asking: " + currQ.question;

    if (currQ.question === "Is this person a doctor?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq1Value);

      if (playerVComputer.doctor === "true") {

      people = remover(people, john);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);

        
        document.querySelector("#final").textContent = "Yes, this person is a doctor!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a doctor.";
        people = remover(people, smith);
      people = remover(people, maureen);

      }
    }

    if (currQ.question === "Is this a member of the Robinson family?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq2Value);

      if (playerVComputer.family === "true") {

      people = remover(people, don);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a member of the Robinson family!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a member of the Robinson family.";
        people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      }
    }

    if (currQ.question === "Is this person a child?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq3Value);

      if (playerVComputer.age === "true") {

      people = remover(people, john);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, maureen);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a child!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a child.";
        people = remover(people, will);
      people = remover(people, penny);
      }
    }

    if (currQ.question === "Is this person a pilot?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq4Value);
      
      if (playerVComputer.pilot === "true") {

      people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a pilot!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a pilot.";
        people = remover(people, don);
      people = remover(people, tucker);
      }
    }

    if (currQ.question === "Is this person a member of the military?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq5Value);

      if (playerVComputer.military === "true") {

      people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, tucker);
      people = remover(people, b9);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a member of the military!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a member of the military.";
        people = remover(people, smith);
      people = remover(people, don);
      }
    }

    if (currQ.question === "Is this person human?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq6Value);

      if (playerVComputer.human === "true") {
        people = remover(people, b9);
        people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      
      document.querySelector("#final").textContent = "Yes, this person is human!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not human.";
        people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, tucker);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      }
    }

    if (currQ.question === "Is this person female?") {
      
      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    QQueue = remover(QQueue, Cq7Value);
    QQueue = remover(QQueue, Cq9Value);

      if (playerVComputer.female === "true") {

      people = remover(people, john);
      people = remover(people, don);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is female!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not female.";
        people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, athena);
      }
    }

    if (currQ.question === "Does this person play a musical instrument?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    QQueue = remover(QQueue, Cq8Value);

      if (playerVComputer.musical === "true") {

      people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, smith);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      document.querySelector("#final").textContent = "Yes, this person plays a musical instrument!";

      } else {
        document.querySelector("#final").textContent = "No, this person does not play a musical instrument.";
        people = remover(people, will);
      people = remover(people, b9);
      people = remover(people, hamish);

      }
    }

    if (currQ.question === "Is this person male?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    QQueue = remover(QQueue, Cq9Value);
      QQueue = remover(QQueue, Cq7Value);
    
      if (playerVComputer.male === "true") {

      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, athena);
      document.querySelector("#final").textContent = "Yes, this person is male!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not male.";
        people = remover(people, john);
      people = remover(people, don);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      }
    }


    var nB =
      document.createElement("button");
      nB.setAttribute("id", "next");
      nB.setAttribute("onclick", "cTurn4()");
      nB.textContent = "Next Question";
      document.body.appendChild(nB);
  }

  function cTurn4() {

    const nextButton = document.getElementById("next");

    nextButton.remove();

    values();

    currQ = QQueue.reduce((prev, current) => (+prev.vlu > +current.vlu) ? prev : current)
    
    document.querySelector("#q").textContent = "The Computer is asking: " + currQ.question;

    if (currQ.question === "Is this person a doctor?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq1Value);

      if (playerVComputer.doctor === "true") {

      people = remover(people, john);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);

        
        document.querySelector("#final").textContent = "Yes, this person is a doctor!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a doctor.";
        people = remover(people, smith);
      people = remover(people, maureen);

      }
    }

    if (currQ.question === "Is this a member of the Robinson family?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq2Value);

      if (playerVComputer.family === "true") {

      people = remover(people, don);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a member of the Robinson family!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a member of the Robinson family.";
        people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      }
    }

    if (currQ.question === "Is this person a child?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq3Value);

      if (playerVComputer.age === "true") {

      people = remover(people, john);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, maureen);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a child!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a child.";
        people = remover(people, will);
      people = remover(people, penny);
      }
    }

    if (currQ.question === "Is this person a pilot?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq4Value);
      
      if (playerVComputer.pilot === "true") {

      people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a pilot!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a pilot.";
        people = remover(people, don);
      people = remover(people, tucker);
      }
    }

    if (currQ.question === "Is this person a member of the military?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq5Value);

      if (playerVComputer.military === "true") {

      people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, tucker);
      people = remover(people, b9);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is a member of the military!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not a member of the military.";
        people = remover(people, smith);
      people = remover(people, don);
      }
    }

    if (currQ.question === "Is this person human?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

      QQueue = remover(QQueue, Cq6Value);

      if (playerVComputer.human === "true") {
        people = remover(people, b9);
        people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      
      document.querySelector("#final").textContent = "Yes, this person is human!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not human.";
        people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, tucker);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      }
    }

    if (currQ.question === "Is this person female?") {
      
      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    QQueue = remover(QQueue, Cq7Value);
    QQueue = remover(QQueue, Cq9Value);

      if (playerVComputer.female === "true") {

      people = remover(people, john);
      people = remover(people, don);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      document.querySelector("#final").textContent = "Yes, this person is female!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not female.";
        people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, athena);
      }
    }

    if (currQ.question === "Does this person play a musical instrument?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    QQueue = remover(QQueue, Cq8Value);

      if (playerVComputer.musical === "true") {

      people = remover(people, john);
      people = remover(people, maureen);
      people = remover(people, don);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, smith);
      people = remover(people, tucker);
      people = remover(people, athena);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      document.querySelector("#final").textContent = "Yes, this person plays a musical instrument!";

      } else {
        document.querySelector("#final").textContent = "No, this person does not play a musical instrument.";
        people = remover(people, will);
      people = remover(people, b9);
      people = remover(people, hamish);

      }
    }

    if (currQ.question === "Is this person male?") {

      function remover (arr, value) { 
    
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    QQueue = remover(QQueue, Cq9Value);
      QQueue = remover(QQueue, Cq7Value);
    
      if (playerVComputer.male === "true") {

      people = remover(people, maureen);
      people = remover(people, judy);
      people = remover(people, penny);
      people = remover(people, athena);
      document.querySelector("#final").textContent = "Yes, this person is male!";

      } else {
        document.querySelector("#final").textContent = "No, this person is not male.";
        people = remover(people, john);
      people = remover(people, don);
      people = remover(people, will);
      people = remover(people, smith);
      people = remover(people, b9);
      people = remover(people, tucker);
      people = remover(people, nobody);
      people = remover(people, morbus);
      people = remover(people, antiDon);
      people = remover(people, hamish);
      }
    }

    var nB =
      document.createElement("button");
      nB.setAttribute("id", "next");
      nB.setAttribute("onclick", "computerEndgame()");
      nB.textContent = "Final Guess";
      document.body.appendChild(nB);

  }

  function computerEndgame() {
    let eggplant = document.getElementById("next");
    eggplant.remove();
    qTitle.remove();
    finalButon.remove();


    ComputerGuess = people[0].fName;

    if (ComputerGuess === playerVComputer.fName) {



    document.querySelector("#results").textContent = "The computer guessed: " + ComputerGuess + ", and you selected: " + playerVComputer.fName + ". The computer was right!" + " Refresh the page to play again";
    }
    else {
    document.querySelector("#results").textContent = "The computer guessed: " + ComputerGuess + ", and you selected: " + playerVComputer.fName + ". The computer was wrong." + " Refresh the page to play again";
    }
  }

  function values() {
    
    const Tid = "true";
    const Fid = "false";
    const docCount = people.filter((obj) => obj.doctor === Tid).length;
    const famCount = people.filter((obj) => obj.family === Tid).length;
    const ageCount = people.filter((obj) => obj.age === Tid).length;
    const pilotCount = people.filter((obj) => obj.pilot === Tid).length;
    const miliCount = people.filter((obj) => obj.military === Tid).length;
    const humCount = people.filter((obj) => obj.human === Fid).length;
    const femCount = people.filter((obj) => obj.female === Tid).length;
    const musicCount = people.filter((obj) => obj.musical === Tid).length;
    const maleCount = people.filter((obj) => obj.male === Fid).length;

    Cq1Value.vlu = docCount;
    Cq2Value.vlu = famCount;
    Cq3Value.vlu = ageCount;
    Cq4Value.vlu = pilotCount;
    Cq5Value.vlu = miliCount;
    Cq6Value.vlu = humCount;
    Cq7Value.vlu = femCount;
    Cq8Value.vlu = musicCount;
    Cq9Value.vlu = maleCount;
  }





/*document.querySelector("#debugger").textContent = "This is not a bug!";*/