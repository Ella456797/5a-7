input.onButtonPressed(Button.A, function () {
    mode += 0
})
input.onButtonPressed(Button.B, function () {
    mode += 1
})
let mode = 0
basic.showIcon(IconNames.Heart)
basic.showNumber(pins.analogReadPin(AnalogPin.P1))
basic.forever(function () {
    if (mode == 0) {
        basic.showNumber(pins.digitalReadPin(DigitalPin.P1))
    } else {
        pins.analogWritePin(AnalogPin.P1, 1023)
    }
})
