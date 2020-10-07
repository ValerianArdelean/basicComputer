var button = document.getElementById('button')
button.onclick = function (e) {
  var first = parseFloat(prompt('insert the first elem of u math opp'))
  var second = parseFloat(prompt('insert the second elem of u math opp'))
  var sign = prompt('insert the mathemathical sign')
  if (sign=='+') {
    alert(first+second)
  } else if (sign == '-') {
    alert(first-second)
  } else if (sign == '*') {
    alert(first*second)
  } else if (sign == '/') {
    alert(first/second)
  }
}
