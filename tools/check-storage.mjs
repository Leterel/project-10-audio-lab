import {spawnSync} from 'node:child_process';
const run=(args,input)=>{const r=spawnSync('git',args,{input,encoding:'utf8',windowsHide:true,maxBuffer:32*1024*1024});if(r.status!==0)throw Error('Git storage inspection failed');return r.stdout;};
const records=run(['ls-files','--stage','-z']).split('\0').filter(Boolean).map(row=>{const m=row.match(/^\d+ ([0-9a-f]+) \d\t(.*)$/s);if(!m)throw Error('Invalid index record');return {oid:m[1],path:m[2]};});
const sizes=run(['cat-file','--batch-check=%(objectname) %(objecttype) %(objectsize)'],records.map(r=>r.oid).join('\n')+'\n').trim().split('\n');
const files=records.map((r,i)=>({...r,bytes:Number(sizes[i].split(' ')[2])}));const needsReview=files.filter(f=>f.bytes>10*1024*1024);console.log(JSON.stringify({scope:'tracked/index objects only',files:files.length,trackedBytes:files.reduce((s,f)=>s+f.bytes,0),largest:files.sort((a,b)=>b.bytes-a.bytes).slice(0,5),needsReview},null,2));if(needsReview.length)process.exitCode=1;
