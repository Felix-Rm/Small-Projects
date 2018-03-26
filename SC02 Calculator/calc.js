function solve(t) {
  // split string into elements an remove empty ones to prevent errors
  var e = t.split(' ')
  for (var i = 0; i < e.length; i++) {
    if (e[i] == "") {
      e.splice(i, 1)
    }
  }

  // new indentation for this solve
  console.group("solve:")
  console.log("--> IN: " + t);

  // variables to prevent crashes
  var found = true
  var count = 0

  // operations like sqrt
  while (found && count < 10000) {
    found = false
    for (var i = 0; i < e.length; i++) {
      if (e[i] == 'rnd') {
        e[i] = Math.random()
        found = true
      }
      if (e[i] == 'π') {
        e[i] = Math.PI
        found = true
      }
      if (e[i] == 'e') {
        e[i] = Math.E
        found = true
      }
    }
    count++
  }
  //reset counters for crash preventing
  count = 0
  found = true

  // brackets
  while (found && count < 10000) {
    found = false
    for (var i = 0; i < e.length; i++) {
      if (e[i] == '(') {
        // find 2 coresponding brackets
        var i1 = i
        var i2 = 0
        var match = 0
        for (var j = i + 1; j < e.length; j++) {
          if (e[j] == '(') {
            match++
          }
          if (e[j] == ')' && match == 0) {
            i2 = j
            break;
          } else if (e[j] == ')') {
            match--
          }
        }

        // format elements to a string
        var part = ""
        for (var j = i1 + 1; j < i2; j++) {
          part += e[j] + " "
        }

        // remove trailing or leading spaces and delete elements in the brackets
        part = part.trim()
        e.splice(i + 1, i2 - i1)

        // solve new term and put it in the array
        e[i] = solve(part.trim())

        // log result and break
        console.log(e);
        found = true
      }
    }
    count++
  }
  //reset counters for crash preventing
  count = 0
  found = true

  // operations like sqrt
  while (found && count < 10000) {
    found = false
    for (var i = 0; i < e.length; i++) {
      if (e[i] == 'sqrt') {
        e[i] = Math.sqrt(e[i + 1])
        e.splice(i + 1, 1)
        found = true
      }

      if (e[i] == 'cbrt') {
        e[i] = Math.cbrt(e[i + 1])
        e.splice(i + 1, 1)
        found = true
      }

      if (e[i] == 'ln') {
        e[i] = Math.log(e[i + 1])
        e.splice(i + 1, 1)
        found = true
      }

      if (e[i] == 'ln10') {
        e[i] = Math.log10(e[i + 1])
        e.splice(i + 1, 1)
        found = true
      }

      if (e[i] == '!') {
        e[i] = factorial(e[i - 1])
        e.splice(i - 1, 1)
        found = true
      }

      if (e[i] == 'sin') {
        e[i] = angles == 'DEG' ? Math.sin(degreesToRadians(e[i + 1])) : Math.sin(e[i + 1])
        e.splice(i + 1, 1)
        found = true
      }

      if (e[i] == 'cos') {
        e[i] = angles == 'DEG' ? Math.cos(degreesToRadians(e[i + 1])) : Math.cos(e[i + 1])
        e.splice(i + 1, 1)
        found = true
      }

      if (e[i] == 'tan') {
        e[i] = angles == 'DEG' ? Math.tan(degreesToRadians(e[i + 1])) : Math.tan(e[i + 1])
        e.splice(i + 1, 1)
        found = true
      }

      if (e[i] == 'EE') {
        e[i - 1] = e[i - 1] * Math.pow(10, e[i + 1])
        e.splice(i, 2)
        found = true
      }
    }
    count++
  }
  //reset counters for crash preventing
  count = 0
  found = true


  // power
  while (found && count < 10000) {
    found = false
    for (var i = 0; i < e.length; i++) {
      if (e[i] == '^') {
        var z1 = e[i - 1]
        var z2 = e[i + 1]
        e.splice(i, 2)
        e[i - 1] = Math.pow(z1, z2)
        console.log(e);
        found = true
      }
    }
    count++
  }
  //reset counters for crash preventing
  count = 0
  found = true

  // multiply
  while (found && count < 10000) {
    found = false
    for (var i = 0; i < e.length; i++) {
      if (e[i] == 'x') {
        var z1 = e[i - 1]
        var z2 = e[i + 1]
        e.splice(i, 2)
        e[i - 1] = z1 * z2
        console.log(e);
        found = true
      }
    }
    count++
  }
  //reset counters for crash preventing
  count = 0
  found = true

  // divide
  while (found && count < 10000) {
    found = false
    for (var i = 0; i < e.length; i++) {
      if (e[i] == '/') {
        var z1 = e[i - 1]
        var z2 = e[i + 1]
        e.splice(i, 2)
        e[i - 1] = z1 / z2
        console.log(e);
        found = true
      }
    }
    count++
  }
  //reset counters for crash preventing
  count = 0
  found = true

  // add
  while (found && count < 10000) {
    found = false
    for (var i = 0; i < e.length; i++) {
      if (e[i] == '+') {
        var z1 = e[i - 1]
        var z2 = e[i + 1]
        e.splice(i, 2)
        e[i - 1] = z1 * 1 + z2 * 1
        console.log(e);
        found = true
      }
    }
    count++
  }
  //reset counters for crash preventing
  count = 0
  found = true

  // subtract
  while (found && count < 10000) {
    found = false
    for (var i = 0; i < e.length; i++) {
      if (e[i] == '-') {
        var z1 = e[i - 1]
        var z2 = e[i + 1]
        e.splice(i, 2)
        e[i - 1] = z1 * 1 - z2 * 1
        console.log(e);
        found = true
      }
    }
    count++
  }
  //reset counters for crash preventing
  count = 0
  found = true


  // log result of this solve and end the indentation
  console.log("<-- OUT: " + e[0]);
  console.groupEnd()
  return e[0];
}

function degreesToRadians(x) {
  return x * Math.PI / 180
}

function radiansToDegrees(x) {
  return x * 180 / Math.PI
}

function factorial(x) {
  if (x > 1) {
    return x * factorial(x - 1)
  } else {
    return 1
  }
}