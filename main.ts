basic.forever(function () {
    if (input.lightLevel() < 200) {
        radio.sendNumber(0)
        pins.servoWritePin(AnalogPin.P1, 180)
    } else {
        pins.servoWritePin(AnalogPin.P1, 0)
    }
    if (input.buttonIsPressed(Button.A)) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
    }
    if (input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
    }
})
