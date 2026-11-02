# Lokale Agenten: vorbereitetes Konzept, noch nicht aktiviert

Gewünscht: später ein lokales Modell wie Qwen als kreativer Helfer. Modellwahl,
Hardwarebedarf und konkrete Runtime sind noch nicht entschieden. Der eigene
Tracker benötigt heute kein Modell und keine externen Dienste.

Ein Projektordner, Browser-Tab oder Git-Branch allein ist keine OS-Sandbox.
Der derzeitige CLI-Renderer ist ein normaler lokaler Node-Prozess. Der Browser
evaluiert keine eingegebenen JavaScript-Befehle: Er validiert begrenztes JSON.

## Geplante echte Werkzeuggrenze

1. Modell/Controller von Werkzeugausführung trennen. Der Controller darf einen
   begrenzten Auftrag formulieren, nicht beliebige Host-Shellbefehle ausführen.
2. Pro Auftrag einen frischen isolierten Runner verwenden. Nur ein eigener
   Eingabeordner lesbar, ein eigener Exportordner schreibbar. Kein Home-Verzeichnis,
   Credential Manager, SSH-Schlüssel, Browserprofil oder andere Projektordner.
3. Netzwerk im Werkzeugrunner sperren. CPU, RAM, Prozesszahl und Laufzeit begrenzen;
   kein privilegierter Container, kein Docker-Socket und keine Host-Geräte.
4. Textpatches vor Übernahme prüfen. Erzeugte WAV/JSON-Dateien auf Größe/Format
   prüfen. Änderungen erst nach Tests committen, keine automatische Veröffentlichung.
5. Inferenzzugriff auf ein lokales Modell separat planen. Ein Modellendpunkt gibt
   dem Runner keine allgemeine Netzwerk- oder Dateisystemberechtigung.

Docker/VM-/Sandbox-Konfiguration muss auf dem jeweiligen Betriebssystem geprüft
werden, bevor sie als Schutzgrenze gilt. Aktuell wurde weder ein Containerimage
geladen noch ein Agent mit Werkzeugzugriff gestartet. Keine Isolation behauptet,
die nicht tatsächlich eingerichtet und getestet wurde.
