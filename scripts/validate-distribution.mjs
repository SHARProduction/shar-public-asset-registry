import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'data/distribution.json'), 'utf8'));
const errors = [];
const add = (ok, message) => { if (!ok) errors.push(message); };
const unique = (rows, key) => {
  const ids = new Set();
  for (const row of rows) { add(typeof row[key] === 'string' && row[key].length > 0, `missing ${key}`); add(!ids.has(row[key]), `duplicate ${key}: ${row[key]}`); ids.add(row[key]); }
  return ids;
};

add(data.publisher?.name === 'SHAR Production' && data.publisher?.website === 'https://sharprod.com/', 'publisher mismatch');
add(data.incremental_spend_rub === 0, 'incremental spend must be zero');
add(data.counts?.verified_counted_placements === 1404, 'verified baseline must be 1404');
add(data.counts?.gap_to_minimum === data.counts.minimum_target - data.counts.verified_counted_placements, 'target gap mismatch');
const works = unique(data.works, 'work_id');
const representations = unique(data.representations, 'representation_id');
const releases = unique(data.releases, 'release_id');
unique(data.placements, 'placement_id');
unique(data.link_observations, 'link_observation_id');
for (const row of data.representations) add(works.has(row.work_id), `${row.representation_id} has unknown work`);
for (const row of data.releases) for (const id of row.work_ids ?? (row.work_id ? [row.work_id] : [])) add(works.has(id), `${row.release_id} has unknown work ${id}`);
for (const row of data.placements) {
  add(Array.isArray(row.work_ids) && row.work_ids.length > 0, `${row.placement_id} has no work IDs`);
  for (const id of row.work_ids ?? []) add(works.has(id), `${row.placement_id} has unknown work ${id}`);
  add(releases.has(row.release_id), `${row.placement_id} has unknown release`);
  for (const id of row.representation_ids ?? []) add(representations.has(id), `${row.placement_id} has unknown representation ${id}`);
  if (row.status === 'PUBLISHED_VERIFIED') {
    add(row.verification?.http_status === 200, `${row.placement_id} requires HTTP 200`);
    for (const field of ['content_checked', 'function_checked', 'owner_checked', 'version_checked']) add(row.verification?.[field] === true, `${row.placement_id} missing ${field}`);
  }
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`valid SHAR_PUBLIC_DISTRIBUTION_REGISTRY: ${data.counts.verified_counted_placements} verified counted placements, ${data.placements.length} detailed reconciled placement records`);


