def on_forever():
    if input.light_level() < 80:
        pins.servo_write_pin(AnalogPin.P1, 180)
    else:
        pins.servo_write_pin(AnalogPin.P1, 0)
    if input.button_is_pressed(Button.A):
        music._play_default_background(music.built_in_playable_melody(Melodies.DADADADUM),
            music.PlaybackMode.UNTIL_DONE)
    if input.button_is_pressed(Button.B):
        pins.digital_write_pin(DigitalPin.P2, 1)
        basic.pause(200)
        pins.digital_write_pin(DigitalPin.P2, 0)
        basic.pause(200)
        pins.digital_write_pin(DigitalPin.P2, 1)
        basic.pause(200)
        pins.digital_write_pin(DigitalPin.P2, 0)
        basic.pause(200)
        pins.digital_write_pin(DigitalPin.P2, 1)
        basic.pause(200)
        pins.digital_write_pin(DigitalPin.P2, 0)
        basic.pause(200)
basic.forever(on_forever)
