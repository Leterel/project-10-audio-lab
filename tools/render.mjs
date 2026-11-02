import {readFile,writeFile,mkdir,stat} from 'node:fs/promises';import {dirname} from 'node:path';import {DEFAULT_PATTERN,renderPattern,encodeWav} from '../tracker.mjs';
const [input,output]=process.argv.slice(2);if(!output||!output.toLowerCase().endsWith('.wav'))throw Error('node tools/render.mjs default|PATTERN.json NEUE-DATEI.wav');
let pattern=DEFAULT_PATTERN;if(input!=='default'){if((await stat(input)).size>65536)throw Error('Pattern maximal 64 KiB.');pattern=JSON.parse(await readFile(input,'utf8'));}
const rendered=renderPattern(pattern);await mkdir(dirname(output),{recursive:true});await writeFile(output,encodeWav(rendered),{flag:'wx'});console.log(JSON.stringify({output,duration:rendered.duration,sampleRate:rendered.sampleRate,tracks:rendered.pattern.tracks.length}));
