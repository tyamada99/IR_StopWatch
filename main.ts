input.onButtonPressed(Button.A, function () {
    if (setting2 == 0) {
        basic.clearScreen()
        runnning = 0
        setting2 = 1
    } else {
        basic.clearScreen()
        setting2 = 0
    }
})
function setting () {
    input2 = pins.analogReadPin(AnalogPin.P0)
    serial.writeValue("x", input2)
    led.plotBarGraph(
    input2,
    1000
    )
}
let タイム = 0
let スタート時刻 = 0
let input2 = 0
let setting2 = 0
let runnning = 0
runnning = 0
setting2 = 0
// センサーが安定するまで待機
basic.pause(1000)
basic.forever(function () {
    if (setting2 == 0) {
        if (pins.analogReadPin(AnalogPin.P0) < 500) {
            if (runnning == 0) {
                スタート時刻 = control.millis()
                runnning = 1
                basic.showString("S")
                // チャタリング防止
                basic.pause(100)
            } else {
                タイム = (control.millis() - スタート時刻) / 1000
                basic.clearScreen()
                basic.showNumber(タイム)
                runnning = 0
            }
        }
    } else {
        setting()
    }
})
