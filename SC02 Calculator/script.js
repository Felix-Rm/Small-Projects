var resultInDisp = false
var last = ""
var angles = 'DEG'
var erg = document.getElementsByName('out')[0]
// console.log(erg);


console.log("<----------Start---------->");
console.log();

function ergebnis() {
  last = erg.value
  // solve term and track the time it took
  console.time("this solve took")
  var result = solve(erg.value)
  console.timeEnd("this solve took")
  console.log()

  //test if an error accured and format output
  if ((" " + result).length > 10) {
    result *= 1
    result = result.toPrecision(10)
  }
  if (isNaN(result)) {
    result = "ERROR"
  }
  if (result == "") {
    result = "0"
  }
  // display the result
  erg.value = result
  resultInDisp = true
}



function addToString(x) {
  var add = ""
  var term = erg.value
  var sterm = term.split(' ')

  x.innerText == '+' ? add += ' ' : 0
  x.innerText == '-' ? add += ' ' : 0
  x.innerText == 'x' ? add += ' ' : 0
  x.innerText == '/' ? add += ' ' : 0
  x.innerText == '^' ? add += ' ' : 0
  x.innerText == ')' ? add += ' ' : 0

  add += x.innerText

  x.innerText == '(' ? add += ' ' : 0
  x.innerText == '+' ? add += ' ' : 0
  x.innerText == 'x' ? add += ' ' : 0
  x.innerText == '/' ? add += ' ' : 0
  x.innerText == '^' ? add += ' ' : 0

  if (x.innerText == '-' && !(term.length == 0 || !isNum(sterm[sterm.length - 1]))) {
    add += ' '
  }


  // continue typing after result if its an operation and not a number
  if (resultInDisp && isNum(x.innerText)) {
    erg.value = ""
  }
  if (isNum(sterm[sterm.length - 1]) && x.innerText == '(') {
    erg.value += " x "
  }

  resultInDisp = false

  // display the term
  erg.value += add
}


function addToStringEXP(x) {

  if (resultInDisp && isNum(x.innerText)) {
    erg.value = ""
  }
  resultInDisp = false

  var add = ""
  var sterm = erg.value.split(' ')
  switch (x.innerHTML) {
    case 'x²':
      add = " ^ 2"
      break;
    case 'x³':
      add = " ^ 3"
      break;
    case '%':
      ergebnis()
      erg.value += " x 0.01"
      ergebnis()
      break;
    case '10^x':
      var n = ""
      for (var i = 0; i < sterm.length - 1; i++) {
        n += sterm[i] + " "
      }
      erg.value = n + "10 ^ " + sterm[sterm.length - 1]
      break;
    case '1/x':
      var n = ""
      for (var i = 0; i < sterm.length - 1; i++) {
        n += sterm[i] + " "
      }
      erg.value = n + "1 / " + sterm[sterm.length - 1]
      break;
    case '√':
      if (isNum(sterm[sterm.length - 1])) {
        add += " x "
      }
      add += "sqrt "
      break;
    case '∛':
      if (isNum(sterm[sterm.length - 1])) {
        add += " x "
      }
      add += "cbrt "
      break;
    case 'Ln':
      if (isNum(sterm[sterm.length - 1])) {
        add += " x "
      }
      add += "ln "
      break;
    case 'log<sub>10</sub>':
      if (isNum(sterm[sterm.length - 1])) {
        add += " x "
      }
      add += "ln10 "
      break;
    case 'x!':
      add += " ! "
      break;
    case 'sin':
      if (isNum(sterm[sterm.length - 1])) {
        add += " x "
      }
      add += "sin "
      break;
    case 'cos':
      if (isNum(sterm[sterm.length - 1])) {
        add += " x "
      }
      add += "cos "
      break;
    case 'tan':
      if (isNum(sterm[sterm.length - 1])) {
        add += " x "
      }
      add += "tan "
      break;
    case 'Rnd':
      add += "rnd"
      break;
    case 'EE':
      add += " EE "
      break;
    case 'π':
      add += "π"
      break;
    case 'e':
      add += "e"
      break;
    default:
      console.log(x.innerHTML);
  }

  erg.value += add
}





function isNum(x) {
  return (parseFloat(x) >= 0);
}

function C() {
  erg.value = ''
}

function A(x) {
  if (angles == 'DEG') {
    angles = 'RAD'
    x.parentElement.className = 'act'
  } else {
    angles = 'DEG'
    x.parentElement.className = 'exp'
  }
}

function M(x) {
  if (x.parentElement.className == 'act') {
    x.parentElement.className = 'spc'
    document.getElementById('exp').style["-webkit-transform"] = "translate(0%,-100%)"
    document.getElementById('exp').style.opacity = 0;
    document.getElementById('exp').style.background = '#000'
    var w = document.getElementsByClassName('exp')
    for (var i = 0; i < w.length; i++) {
      w[i].children[0].style.width = '2px'
    }
  } else {
    x.parentElement.className = 'act'
    document.getElementById('exp').style["-webkit-transform"] = "translate(-100%,-100%)"
    document.getElementById('exp').style.opacity = 1;
    document.getElementById('exp').style.background = '#444'
    var w = document.getElementsByClassName('exp')
    for (var i = 0; i < w.length; i++) {
      w[i].children[0].style.width = '60px'
    }
  }
}