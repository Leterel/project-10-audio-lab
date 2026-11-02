# Speicher und Medien

Code, kleine eigene Patterns, Metadaten und Tests gehören in Git. Generierte
WAVs, große Samples, Render-Videos, Datensätze, Caches und gepackte Builds bleiben
außerhalb der gewöhnlichen Git-Historie. Die Ignore-Regeln wurden entsprechend
ergänzt; bereits vorhandene Dateien oder Historie werden nicht entfernt.

`npm run check:storage` prüft die versionierten/indexierten Objekte vor einem Push.
Unsere lokale Prüfschwelle ist 10 MiB je Datei. Größere Dateien benötigen eine
bewusste Speicherentscheidung; diese konservative Schwelle ist keine GitHub-Grenze.

GitHub warnt derzeit ab mehr als 50 MiB und blockiert reguläre Git-Dateien über
100 MiB. Quellen: [GitHub-Dokumentation](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github).
Downloads großer fertiger Builds können als Releases verteilt werden. Git LFS
ist eine Option für wirklich benötigte versionierte Binärdateien, wird aber erst
nach Mengen-/Budgetprüfung eingerichtet. Kein bezahltes Speicherpaket aktiviert.

Samples benötigen zusätzlich belegte Nutzungs-/Weitergaberechte. Ein zukünftiges
Sample-Verzeichnis kann Metadaten wie öffentliche Quelle, Urheber, Lizenz,
Dateigröße und Prüfsumme erfassen. Keine privaten oder signierten Downloadlinks,
Zugangsdaten oder ungeprüft fremde Sample-Pakete in Git aufnehmen.
