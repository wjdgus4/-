function 거리구하기 () {
    pins.setPull(DigitalPin.P2, PinPullMode.PullNone)
    pins.digitalWritePin(DigitalPin.P2, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P2, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P2, 0)
    거리 = pins.pulseIn(DigitalPin.P0, PulseValue.High)
    거리 = 거리 / 58
}
let 거리 = 0
거리 = 0
basic.forever(function () {
    거리구하기()
    basic.showNumber(거리)
    basic.pause(100)
})
