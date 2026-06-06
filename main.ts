input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    runnning = 0
})
let タイム = 0
let 経過時間 = 0
let スタート時刻 = 0
let runnning = 0
runnning = 0
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 500) {
        if (runnning == 0) {
            スタート時刻 = control.millis()
            runnning = 1
            basic.showString("S")
            basic.pause(500)
        } else {
            経過時間 = control.millis() - スタート時刻
            タイム = Math.round(経過時間 / 10) / 100
            basic.clearScreen()
            basic.showNumber(タイム)
            basic.pause(1000)
            runnning = 0
        }
    }
})
