input.onButtonPressed(Button.A, function () {
    emergency_veichles = 1
    if (emergency_veichles == 1) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
})
let emergency_veichles = 0
radio.setGroup(832673)
basic.forever(function () {
	
})
