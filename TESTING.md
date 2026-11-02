# Tests und Reproduzierbarkeit — Audio Lab

## Voraussetzungen
Node 22+; für einzelne externe Audio-Werkzeuge deren eigene Installation separat prüfen.

## Befehle
```text
npm test
npm run check:storage
```

Start/Build: npm start; http://127.0.0.1:8870 öffnen; Rastergarten über den sichtbaren Link.

## Tatsächlicher Befund vom 02.11.2026
3 Tests und Browserintegration bestanden; alle neun importierten Originaldateien und beide ursprünglichen Commit-Ketten geprüft. Kein physischer MIDI-/Hardware-/Hörtest.

Bei fehlenden Paketen/Hardware/Betriebssystemen ist das Ergebnis „nicht ausgeführt“, kein Pass. Plattformnachweise aus älteren Detailberichten gelten nur für die dort genannten Versionen. Android-Automatisierung ausschließlich mit expliziter emulator-Seriennummer und bestätigtem ro.kernel.qemu=1. Physische Geräte, persönliche Medien und Produktionskonten sind keine Testfixtures.

## Vor Merge
`git diff --check` ausführen; relevante Funktionstests wiederholen, wenn Codeänderungen ihren Befund entwerten. Speicherdaten/alte Versionen erhalten. Fehlende externe Abnahmen in HANDOFF.md benennen.
