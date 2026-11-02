# Audio Lab — private Code-/Trash-Werkstatt

Früher `project-10-sonic-pi`. Auf ausdrücklichen Wunsch vom 02.11.2026 privat
und in `project-10-audio-lab` umbenannt. Die GitHub-Repository-ID bleibt erhalten.
Hier werden eigene Audio-Code-Skizzen, Live-Performance-Ideen, Tracker-Patterns,
Wissen und Dokumentation gesammelt. Kein Fork der kompletten Sonic-Pi-Anwendung.

## Sofort nutzbar: eigener Mini-Tracker

Node.js 22+; keine npm-Pakete installieren:

```powershell
npm start
# http://127.0.0.1:8870 öffnen
npm test
npm run render -- default build/mein-erster-trash.wav
```

Im Browser Pattern-JSON direkt bearbeiten, starten/stoppen, JSON sichern/laden
und WAV rendern. Der CLI-Renderer erzeugt aus demselben Produktionscode eine
Mono-PCM-WAV. Vorhandene Zieldateien werden nicht überschrieben. Es werden eigene
synthetische Wellenformen verwendet; keine fremden Samples oder Aufnahmen.
Tabwechsel stoppt die Wiedergabe. Der Browser-Prototyp ist kein DAW-Ersatz:
keine samplegenaue Änderung laufender Patterns, MIDI-Hardware, Audioaufnahme,
ASIO-Konfiguration oder professionelle Bühnensicherheitszusage.

## Reihenfolge nach deinem Auftrag

1. Direkt von Codex/ChatGPT/Claude bearbeitbarer Textcode und eigener Tracker.
2. Tracker als eigener, hoch priorisierter Bereich: Patterns, Konvertierung und
   später einzeln isolierte Engines/Tools.
3. Sonic Pi, SuperCollider, REAPER-Skripte und browserbasierte Live-Coding-Werkzeuge.
4. Pure Data und Max/MSP samt zusätzlichem Host-/GUI-Setup.
5. Später lokale Qwen-/andere Agenten mit begrenzten isolierten Werkzeugen.

Windows zuerst. Der Node-Kern ist plattformneutral geschrieben; separate
Abnahmen auf macOS und Linux stehen aus. Werkzeuge mit mehr Installation und
Frickelei werden dokumentiert und erst anschließend integriert.

## Sammlung

- `examples/sonic-pi/trash-loop.rb`: eigene Live-Loop-Skizze für Sonic Pi.
- `examples/supercollider/trash-pulse.scd`: eigene Synthese-Skizze.
- `docs/TOOLS.md`: Tool-/Tracker-Katalog mit Integrationsstatus und Primärquellen.
- `docs/AGENT-ISOLATION.md`: konkrete Grenzen für spätere lokale Agenten.
- `docs/HARDWARE.md`: Raspberry Pi, zwei Arduinos, genannte Sensorkits und die
  Zielplattformen Windows/macOS/Linux; Angaben noch nicht am Gerät verifiziert.

Die externen Hosts und Beispielskizzen wurden hier nicht in ihren jeweiligen
Programmen ausgeführt. Die Kernprüfungen betreffen unseren eigenen Tracker,
WAV-Daten und Browserabläufe. Keine Software, Modelle oder Treiber automatisch
installiert. Kein autonomer Agent aktiviert. Keine Zugangsdaten in dieses Repo.

## Privat bleiben

Die neue Privatvorgabe ersetzt für dieses Projekt den früheren allgemeinen
Open-Source-Auftrag. Keine automatische öffentliche Veröffentlichung und keine
privaten Experimente in andere öffentliche Repositories kopieren. GitLab erst
nach verifizierter privater Zielanlage beschreiben. Aufnahmen/Exporte bleiben
standardmäßig außerhalb von Git. Neue Dateiformate/Engines einzeln testen,
anstatt universelle Tracker-Unterstützung zu behaupten.
