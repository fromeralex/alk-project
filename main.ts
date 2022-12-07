let strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1300) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        strip.clear()
        strip.show()
    }
})

