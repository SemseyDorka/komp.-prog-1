var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
  {
      question: "Mikor született Mária Terézia?",
      a: "1723",
      b: "1720",
      c: "1717",
      answer: "C"
    },
  {
      question: "Hány évig uralkodott?",
      a: "40",
      b: "49",
      c: "28",
      answer: "A"
    },
  {
      question: "Melyik dokumentummal biztosította III.Károly a Habsburg-ház nőági örökösödését?",
      a: "Magna Charta Libertatum",
      b: "Ratio Educationis",
      c: "Pragmatica Sanctio",
      answer: "C"
    },
  {
      question: "Ki volt Mária Terázia férje?",
      a: "V. Vilmos",
      b: "I.Ferenc",
      c: "VIII. Hemrik",
      answer: "B"
    },
    {
      question: "Mikor fogadta el a magyar országgyűlés a Pragmatica Sanctio-t?",
      a: "Az 1722/23-es országgyűlésen",
      b:"Az 1711/12-es országgyűlésen",
      c:"Nem fogadták el",
      answer: "A"
    },
    {
      question: "Mennyi katonával támogatta Magyarország Mária Teréziát az osztrák örökösödési háborúban?",
      a: "15 ezer fővel",
      b:"25 ezer fővel",
      c: "35 ezer fővel",
      answer: "C"
    },
    {
      question: "Hány gyermeke született házasságából?",
      a: "3",
      b: "11",
      c: "16",
      answer: "C"
    },
    {
      question: "Melyik gyermeke lett később francia királyné?",
      a: "Mária Antónia",
      b: "Mária Erzsébet",
      c: "Mária Amália",
      answer:"A"
    },
    {
      question:"Melyik évben adta ki Mária Terézia az első Ratio Educationis-t?",
      a: "1789",
      b:"1777",
      c:"1806",
      answer:"B"
    },
    {
      question: "Milyen történelmi jelentősége volt ennek a rendeletnek?",
      a:"Ekkor valósult meg először, hogy az állam szabályozta az oktatásügyet.",
      b:"Ez volt Mária terézia első rendelete.",
      c:"Ez a rendelet nagyobb mozgásteret biztosított az egyháznak.",
      answer:"A"
    }

  ];

function get(x){
  return document.getElementById(x);
}


function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>"+correct+" jó válasz a  "+questions.length+"-ből</h2>";
    get("test_status").innerHTML = "Kvíz vége";
    kep=get("kep")
    kep.innerHTML+="<img src='swag.jpg'  class='img-circle' id='swag'>";
    correct = 0;
    return false;
  }

  get("test_status").innerHTML = (pos+1)+". kérdés a "+questions.length+"-ből";
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;

  
  test.innerHTML = "<h3>"+question+"</h3>";


  test.innerHTML += "<label> <input type='radio'  name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio'  name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio'  name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Válasz elküldése</button>";
}

function checkAnswer(){

  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }

  if(choice == questions[pos].answer){

    correct++;
  }

  pos++;

  renderQuestion();
}

window.addEventListener("load", renderQuestion);