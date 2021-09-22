function Getrandomletter () {
    if (Math.randomBoolean()) {
        return String.fromCharCode(randint(65, 90))
    } else {
        return String.fromCharCode(randint(97, 122))
    }
}
function getrandomNumber () {
    return String.fromCharCode(randint(48, 57))
}
input.onButtonPressed(Button.A, function () {
    cijfers += 1
    basic.showNumber(cijfers)
})
input.onButtonPressed(Button.AB, function () {
    if (Isinputvald(cijfers, letters)) {
        basic.showString("" + (Getrandomletter()))
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(370, music.beat(BeatFraction.Double))
    }
})
function Isinputvald (NumberOfDigits: number, NumberOfLetters: number) {
    isvalid = true
    if (NumberOfDigits < 2 || (NumberOfLetters < 4 || NumberOfDigits + NumberOfDigits < 8)) {
        isvalid = false
    }
    return isvalid
}
input.onButtonPressed(Button.B, function () {
    letters += 1
    basic.showNumber(letters)
})
let isvalid = false
let letters = 0
let cijfers = 0
cijfers = 0
letters = 0
