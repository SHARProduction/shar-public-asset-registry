import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const load = file => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));

test('distribution extension validates inside the canonical Asset Registry', () => {
  const result = spawnSync(process.execPath, ['scripts/validate-distribution.mjs'], { cwd: root, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /682 verified counted placements/);
});

test('distribution baseline separates works, representations, placements, releases and ownership', () => {
  const data = load('data/distribution.json');
  assert.deepEqual(data.publisher, { name: 'SHAR Production', website: 'https://sharprod.com/' });
  assert.equal(data.incremental_spend_rub, 0);
  assert.equal(data.counts.verified_counted_placements, 682);
  assert.equal(data.counts.gap_to_minimum, 818);
  assert.equal(data.works.length, 46);
  assert.equal(data.representations.length, 92);
  assert.equal(data.placements.length, 103);
  for (const key of ['works', 'representations', 'placements', 'releases', 'link_observations']) assert.ok(Array.isArray(data[key]), key);
  const placement = data.placements.find(item => item.placement_id === 'shar.placement.tool-factory.github');
  assert.ok(placement);
  assert.equal(placement.status, 'PUBLISHED_VERIFIED');
  assert.equal(placement.ownership_group, 'SHARProduction');
  assert.equal(placement.release_id, 'shar.release.tool-factory.1.1.0');
});

test('distribution schema gates verified placement evidence', () => {
  const schema = load('schema/distribution-registry.schema.json');
  assert.equal(schema.title, 'SHAR Production Distribution Registry Extension');
  assert.equal(schema.properties.publisher.properties.name.const, 'SHAR Production');
  assert.equal(schema.properties.incremental_spend_rub.const, 0);
  const required = schema.properties.placements.items.required;
  for (const field of ['work_ids', 'placement_id', 'release_id', 'ownership_group', 'public_url', 'status', 'verification']) assert.ok(required.includes(field));
});
