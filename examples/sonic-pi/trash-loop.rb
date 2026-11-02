# Eigene Skizze. In Sonic Pi einfügen, erst dort bewusst starten.
# Stop: Sonic-Pi-Stop-Schaltfläche. Keine Dateien oder Netzwerke verwenden.
use_bpm 132
use_random_seed 44

live_loop :rost_bass do
  use_synth :fm
  play [36, 36, 43, 39].tick, release: 0.12, amp: 0.18
  sleep 0.5
end

live_loop :plastik_antwort do
  use_synth :pulse
  play [60, 67, 63, 70].choose, release: 0.05, amp: 0.06
  sleep [0.25, 0.5, 0.75].choose
end
