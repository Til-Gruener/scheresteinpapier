input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Auswahl += 1
    if (Auswahl == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (Auswahl == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (Auswahl == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (Auswahl == 0) {
        Auswahl = 0
    }
})
let Auswahl = 0
Auswahl = 0
basic.forever(function () {
	
})
