// Eigene Skizze, im SuperCollider-Editor ausführen; Hosttest steht aus.
// Audio bewusst im Host starten; der Pegel ist absichtlich niedrig.
(
s.waitForBoot({
    ~trash = {
        var clock = Impulse.kr(132 / 60 * 4);
        var note = Demand.kr(clock, 0, Dseq([48, 55, 51, 58], inf));
        var envelope = Decay2.kr(clock, 0.005, 0.12);
        Pan2.ar(SinOsc.ar(note.midicps) * envelope * 0.06);
    }.play;
});
)
// Zum Stoppen separat ausführen:
// ~trash.free;
