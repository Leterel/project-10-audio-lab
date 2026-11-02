export const DEFAULT_PATTERN={version:1,title:'Mülltonnen-Rave',bpm:132,bars:4,tracks:[
 {name:'Sub-Karton',wave:'sine',gain:.18,steps:[36,null,null,null,36,null,43,null,36,null,null,null,39,null,43,null]},
 {name:'Rost-Säge',wave:'square',gain:.06,steps:[60,null,67,null,63,null,70,null,60,null,67,null,58,null,63,null]},
 {name:'Plastik-Hut',wave:'noise',gain:.05,steps:[72,null,72,null,72,72,72,null,72,null,72,null,72,72,72,72]}
]};
export function validatePattern(value){
 if(!value||value.version!==1||typeof value.title!=='string'||value.title.length<1||value.title.length>80)throw Error('Titel/Version ungültig.');
 if(!Number.isInteger(value.bpm)||value.bpm<60||value.bpm>240||!Number.isInteger(value.bars)||value.bars<1||value.bars>16)throw Error('Tempo 60–240, Takte 1–16.');
 if(!Array.isArray(value.tracks)||value.tracks.length<1||value.tracks.length>8)throw Error('1–8 Spuren erforderlich.');
 const tracks=value.tracks.map(t=>{if(!t||typeof t.name!=='string'||t.name.length>40||!['sine','square','triangle','noise'].includes(t.wave)||!Number.isFinite(t.gain)||t.gain<0||t.gain>.25||!Array.isArray(t.steps)||t.steps.length!==16||t.steps.some(n=>n!==null&&(!Number.isInteger(n)||n<36||n>84)))throw Error('Spur ungültig: 16 Schritte, MIDI 36–84 oder null, Pegel 0–0,25.');return {name:t.name,wave:t.wave,gain:t.gain,steps:[...t.steps]};});
 return {version:1,title:value.title,bpm:value.bpm,bars:value.bars,tracks};
}
export function renderPattern(input,sampleRate=22050){
 const pattern=validatePattern(input);if(![22050,44100,48000].includes(sampleRate))throw Error('Abtastrate nicht unterstützt.');
 const step=60/pattern.bpm/4,duration=pattern.bars*16*step,pcm=new Float32Array(Math.ceil(duration*sampleRate));
 let seed=0x12345678;const noise=()=>{seed^=seed<<13;seed^=seed>>>17;seed^=seed<<5;return (seed>>>0)/2147483648-1;};
 for(const track of pattern.tracks)for(let index=0;index<pattern.bars*16;index++){
  const note=track.steps[index%16];if(note===null)continue;const start=Math.round(index*step*sampleRate),length=Math.min(Math.floor(step*.9*sampleRate),pcm.length-start),hz=440*2**((note-69)/12);
  for(let i=0;i<length;i++){const t=i/sampleRate,phase=(hz*t)%1;let value=track.wave==='sine'?Math.sin(phase*2*Math.PI):track.wave==='square'?(phase<.5?1:-1):track.wave==='triangle'?1-4*Math.abs(phase-.5):noise();const envelope=Math.min(1,t/.004)*Math.max(0,1-i/length)**(track.wave==='noise'?4:1);pcm[start+i]+=value*track.gain*envelope;}
 }
 for(let i=0;i<pcm.length;i++)pcm[i]=Math.tanh(pcm[i])*.7;
 return {pattern,pcm,sampleRate,duration:pcm.length/sampleRate};
}
export function encodeWav({pcm,sampleRate}){
 const bytes=new Uint8Array(44+pcm.length*2),view=new DataView(bytes.buffer);const text=(offset,s)=>{for(let i=0;i<s.length;i++)bytes[offset+i]=s.charCodeAt(i);};
 text(0,'RIFF');view.setUint32(4,36+pcm.length*2,true);text(8,'WAVEfmt ');view.setUint32(16,16,true);view.setUint16(20,1,true);view.setUint16(22,1,true);view.setUint32(24,sampleRate,true);view.setUint32(28,sampleRate*2,true);view.setUint16(32,2,true);view.setUint16(34,16,true);text(36,'data');view.setUint32(40,pcm.length*2,true);
 for(let i=0;i<pcm.length;i++)view.setInt16(44+i*2,Math.round(Math.max(-1,Math.min(1,pcm[i]))*32767),true);return bytes;
}
