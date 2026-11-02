export const BPM=112;
export const MELODY=[60,67,64,72,69,64,67,62,60,64,69,67,74,72,67,64];
export function position(seconds){const beat=Math.max(0,seconds)*BPM/60;return {beat,step:Math.floor(beat*2)%MELODY.length,phase:beat%1,bar:Math.floor(beat/4)};}
export function frequency(note){return 440*2**((note-69)/12);}
