/**
 * s2A   
 * 
 * Samuel Martos Carmet
 * 
 * R  rojo           0
 * 
 * A  amarillo    1
 * 
 * V  verde        2
 */
input.onButtonPressed(Button.A, function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
    while (true) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
pins.digitalWritePin(DigitalPin.P0, 1)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
