input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
input.onButtonPressed(Button.A, function () {
    music.playTone(165, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(165, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(165, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(220, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(220, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(165, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(165, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(165, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(156, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(131, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(131, music.beat(BeatFraction.Whole))
    basic.pause(100)
    music.playTone(131, music.beat(BeatFraction.Whole))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("heske logo ze?")
    music.playMelody("D F E D C5 A G D ", 75)
})
input.onButtonPressed(Button.B, function () {
    basic.pause(1000)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
music.setVolume(255)
basic.showLeds(`
    . . . . .
    . . # # .
    . # . . .
    # . . . #
    # # # # .
    `)
basic.pause(500)
basic.clearScreen()
basic.pause(500)
basic.showString("dobry den")
