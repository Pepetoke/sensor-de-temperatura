input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("ºC")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature() * (9 / 5) + 32)
    basic.showString("ºF")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() + 273.15)
    basic.showString("ºK")
})
