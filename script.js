var powersOfTwo = [1, 2, 4, 8, 16, 32];

function change(index) {
  var buttonID = "button" + index;
  var textID = "text" + index;
  var button = document.getElementById(buttonID);
  var added = document.getElementById(textID);
  if (button.value == 0) {
    button.value = "1";
    added.innerHTML = powersOfTwo[index];
  } else {
    button.value = "0";
    added.innerHTML = "0";
  }
  add();
  updateBinary();
}

function add() {
  var sum = 0;
  for (var i = 0; i < 6; i++) {
    var id = "text" + i;
    sum += parseInt(document.getElementById(id).innerHTML);
  }
  document.getElementById("total").innerHTML = sum;
}

function updateBinary() {
  var text = "";
  for (var i = 5; i >= 0; i--) {
    var id = "button" + i;
    text += document.getElementById(id).value;
  }
  document.getElementById("binarynumber").innerHTML = text;
}