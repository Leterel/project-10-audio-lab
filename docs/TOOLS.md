# Audio-Code- und Tracker-Katalog

Startsammlung, keine vollständige Liste aller Tracker. Integrationsstatus ist
entscheidend: Ein Link oder ein Beispiel bedeutet nicht, dass ein Host installiert,
konfiguriert, kostenlos lizenziert oder getestet ist.

| Bereich | Werkzeug/Format | Priorität und aktueller Stand |
|---|---|---|
| Eigener Tracker | JSON + JavaScript + PCM-WAV | Zuerst: implementiert, Node-Kerntests und CLI-Render. |
| Live Code | [Sonic Pi](https://sonic-pi.net/tutorial-09.html) | Hoch: eigene `.rb`-Skizze; Hosttest offen. |
| Synthese | [SuperCollider](https://doc.sccode.org/Classes/SinOsc.html) | Hoch: eigene `.scd`-Skizze; Hosttest offen. |
| DAW-Code | [REAPER/ReaScript](https://www.reaper.fm/sdk/reascript/reascript.php) | Hoch: Lua/EEL2/Python und JSFX als späterer eigener Bereich. Noch kein Audio-Lab-Hosttest. |
| Tracker | [Renoise](https://docs.renoise.com/wiki/Scripting) | Hoher Tracker-Backlog: Lua-Werkzeuge und native Songs einzeln untersuchen. Keine Lizenz/Installation beschafft. |
| Tracker | [OpenMPT](https://openmpt.org/) | Hoher Tracker-Backlog: MOD/XM/IT/MPTM einzeln vorbereiten; noch kein Import/Export implementiert. |
| Tracker | [Furnace](https://github.com/tildearrow/furnace) | Hoher Tracker-Backlog: Engine/Formate isoliert evaluieren; nicht installiert. |
| Tracker | [MilkyTracker](https://milkytracker.org/) | Sammlung/Backlog; keine getestete Integration. |
| Tracker | [Schism Tracker](https://schismtracker.org/) | Sammlung/Backlog; keine getestete Integration. |
| Tracker | [SunVox](https://warmplace.ru/soft/sunvox/) | Sammlung/Backlog; Modul-/Projektintegration später prüfen. |
| Tracker | [DefleMask](https://www.deflemask.com/) | Sammlung/Backlog; keine Software oder Lizenz gekauft. |
| Patches | [Pure Data](https://puredata.info/docs/manuals) | Nach den direkt codebaren Kernwerkzeugen: textbasierte `.pd`-Dateien, Host-/Objektprüfung noch offen. |
| Patches | [Max/MSP](https://support.cycling74.com/hc/en-us/articles/360050778313-Standalones-and-sharing-your-code-with-others) | Nachrangiges Host-Setup: `.maxpat`-Sammlung später, keine Lizenz gekauft. |

Die Priorität ist aus dem Nutzerauftrag abgeleitet, keine Messung von Toolqualität.
Externe Musik, Samples, Projekte oder Marken werden nicht kopiert. Formatkonverter
müssen pro Format mit echten minimalen Fixtures und Roundtrip-Prüfung entstehen.
