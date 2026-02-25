let tempc = 0
let tempF = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(tempc)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(tempF)
})
basic.forever(function () {
    tempc = input.temperature()
    tempF = tempc * 1.8
    tempF = tempF + 32
})
