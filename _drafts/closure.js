var setKeyPress = function (callback) {
  document.onkeypress = callback
}

var initialize = function () {
  var black = false

  document.onclick = function () {
    black = !black
    document.body.style.backgroundColor = black ? '#000000' : 'transparent'
  }

  var displayValOfBlack = function () {
    console.log(black)
  }

  setKeyPress(displayValOfBlack)
}

initialize()
