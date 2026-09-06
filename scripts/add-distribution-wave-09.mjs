import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const targetPath=path.join(root,'data/distribution.json');
const wavePath=path.resolve(root,'../distribution-wave-09/distribution/wave.json');
const target=JSON.parse(fs.readFileSync(targetPath,'utf8'));
const wave=JSON.parse(fs.readFileSync(wavePath,'utf8'));
const ensureAbsent=(rows,key,value)=>{if(rows.some(row=>row[key]===value))throw new Error(`${value} already exists`)};
for(const work of wave.works)ensureAbsent(target.works,'work_id',work.work_id);
for(const representation of wave.representations)ensureAbsent(target.representations,'representation_id',representation.representation_id);
for(const placement of wave.placements)ensureAbsent(target.placements,'placement_id',placement.placement_id);
ensureAbsent(target.releases,'release_id',wave.release.release_id);
target.works.push(...wave.works.map(work=>({work_id:work.work_id,title:work.title.en,title_ru:work.title.ru,kind:'interactive_validation_explorer',license:work.license})));
target.representations.push(...wave.representations);
target.releases.push({...wave.release,work_ids:wave.works.map(work=>work.work_id)});
target.placements.push(...wave.placements.map(placement=>({...placement,release_id:wave.release.release_id,counted_in_baseline:true})));
for(const placement of wave.placements){
  const suffix=placement.placement_id.replace('shar.placement.','').replaceAll('.','-');
  target.link_observations.push({link_observation_id:`shar.link.${suffix}.website`,source_url:placement.public_url,target_url:'https://sharprod.com/',observed_at:placement.verified_at,ownership_group:placement.ownership_group,independent:false});
}
Object.assign(target.counts,{
  verified_counted_placements:730,
  gap_to_minimum:770,
  github_public_repositories:142,
  hugging_face_static_spaces:2,
  localized_validation_error_explorer_pages:2,
  validation_error_explorer_repository_placements:1,
  validation_error_explorer_space_placements:1
});
target.updated_at=[target.updated_at,...wave.placements.map(row=>row.verified_at)].filter(Boolean).sort().at(-1);
target.counting_note='Verified rollup: 580 phase-1 + 12 integration recipes + 12 conformance suites + 12 compatibility research + 22 data contracts + 22 reference corpora + 22 workflow recipes + 22 media conformance + 22 validation benchmarks + 4 validation error explorer placements. Registry records, navigation pages and releases are not counted again.';
fs.writeFileSync(targetPath,JSON.stringify(target,null,2)+'\n');
console.log(`merged ${wave.release.release_id}: ${target.counts.verified_counted_placements} verified placements`);
