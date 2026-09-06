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
  assert.match(result.stdout, /1503 verified counted placements/);
});

test('distribution baseline separates works, representations, placements, releases and ownership', () => {
  const data = load('data/distribution.json');
  assert.deepEqual(data.publisher, { name: 'SHAR Production', website: 'https://sharprod.com/' });
  assert.equal(data.incremental_spend_rub, 0);
  assert.equal(data.counts.verified_counted_placements, 1503);
  assert.equal(data.counts.gap_to_minimum, 0);
  assert.equal(data.works.length, 441);
  assert.equal(data.representations.length, 882);
  assert.equal(data.placements.length, 927);
  for (const key of ['works', 'representations', 'placements', 'releases', 'link_observations']) assert.ok(Array.isArray(data[key]), key);
  const placement = data.placements.find(item => item.placement_id === 'shar.placement.tool-factory.github');
  assert.ok(placement);
  assert.equal(placement.status, 'PUBLISHED_VERIFIED');
  assert.equal(placement.ownership_group, 'SHARProduction');
  assert.equal(placement.release_id, 'shar.release.tool-factory.1.1.0');
  const explorer = data.placements.find(item => item.placement_id === 'shar.placement.validation-error-explorer.hf-space');
  assert.ok(explorer);
  assert.equal(explorer.status, 'PUBLISHED_VERIFIED');
  assert.equal(explorer.release_id, 'shar.release.validation-error-explorer.1.0.0');
  const evidenceRecords = data.placements.find(item => item.placement_id === 'shar.placement.production-evidence-records.huggingface');
  assert.ok(evidenceRecords);
  assert.equal(evidenceRecords.status, 'PUBLISHED_VERIFIED');
  assert.equal(evidenceRecords.release_id, 'shar.release.production-evidence-records.1.0.0');
  const workflows = data.placements.find(item => item.placement_id === 'shar.placement.production-verification-workflows.huggingface');
  assert.ok(workflows);
  assert.equal(workflows.status, 'PUBLISHED_VERIFIED');
  assert.equal(workflows.release_id, 'shar.release.production-verification-workflows.1.0.0');
  const conformance = data.placements.find(item => item.placement_id === 'shar.placement.production-conformance-catalog.huggingface');
  assert.ok(conformance);
  assert.equal(conformance.status, 'PUBLISHED_VERIFIED');
  assert.equal(conformance.release_id, 'shar.release.production-conformance-catalog.1.0.0');
  const scorecards = data.placements.find(item => item.placement_id === 'shar.placement.production-readiness-scorecards.huggingface');
  assert.ok(scorecards);
  assert.equal(scorecards.status, 'PUBLISHED_VERIFIED');
  assert.equal(scorecards.release_id, 'shar.release.production-readiness-scorecards.1.0.0');
  const indexing = data.placements.find(item => item.placement_id === 'shar.placement.production-indexing-observatory.huggingface');
  assert.ok(indexing);
  assert.equal(indexing.status, 'PUBLISHED_VERIFIED');
  assert.equal(indexing.release_id, 'shar.release.production-indexing-observatory.1.0.0');
  const matrices = data.placements.find(item => item.placement_id === 'shar.placement.production-option-matrices.huggingface');
  assert.ok(matrices);
  assert.equal(matrices.status, 'PUBLISHED_VERIFIED');
  assert.equal(matrices.release_id, 'shar.release.production-option-matrices.1.0.0');
  const risks = data.placements.find(item => item.placement_id === 'shar.placement.production-risk-simulators.huggingface');
  assert.ok(risks);
  assert.equal(risks.status, 'PUBLISHED_VERIFIED');
  assert.equal(risks.release_id, 'shar.release.production-risk-simulators.1.0.0');
  const capacity = data.placements.find(item => item.placement_id === 'shar.placement.production-capacity-planners.huggingface');
  assert.ok(capacity);
  assert.equal(capacity.status, 'PUBLISHED_VERIFIED');
  assert.equal(capacity.release_id, 'shar.release.production-capacity-planners.1.0.0');
  const glossary = data.placements.find(item => item.placement_id === 'shar.placement.production-glossary.huggingface');
  assert.ok(glossary);
  assert.equal(glossary.status, 'PUBLISHED_VERIFIED');
  assert.equal(glossary.release_id, 'shar.release.production-glossary.1.0.0');
  const troubleshooting = data.placements.find(item => item.placement_id === 'shar.placement.production-troubleshooting-library.huggingface');
  assert.ok(troubleshooting);
  assert.equal(troubleshooting.status, 'PUBLISHED_VERIFIED');
  assert.equal(troubleshooting.release_id, 'shar.release.production-troubleshooting-library.1.0.0');
  const checklists = data.placements.find(item => item.placement_id === 'shar.placement.production-qc-checklists.huggingface');
  assert.ok(checklists);
  assert.equal(checklists.status, 'PUBLISHED_VERIFIED');
  assert.equal(checklists.release_id, 'shar.release.production-qc-checklists.1.0.0');
  const gates = data.placements.find(item => item.placement_id === 'shar.placement.production-acceptance-gates.huggingface');
  assert.ok(gates);
  assert.equal(gates.status, 'PUBLISHED_VERIFIED');
  assert.equal(gates.release_id, 'shar.release.production-acceptance-gates.1.0.0');
  const entityGraph = data.placements.filter(item => item.placement_id.startsWith('shar.placement.entity-knowledge-graph.'));
  assert.equal(entityGraph.length, 6);
  for (const item of entityGraph) assert.equal(item.status, 'PUBLISHED_VERIFIED');
  assert.deepEqual([...new Set(entityGraph.map(item => item.release_id))].sort(), ['shar.release.entity-knowledge-graph.1.0.0', 'shar.release.entity-knowledge-graph.1.1.0']);
  assert.equal(data.counts.indexnow_accepted_url_submissions, 510);
});

test('distribution schema gates verified placement evidence', () => {
  const schema = load('schema/distribution-registry.schema.json');
  assert.equal(schema.title, 'SHAR Production Distribution Registry Extension');
  assert.equal(schema.properties.publisher.properties.name.const, 'SHAR Production');
  assert.equal(schema.properties.incremental_spend_rub.const, 0);
  const required = schema.properties.placements.items.required;
  for (const field of ['work_ids', 'placement_id', 'release_id', 'ownership_group', 'public_url', 'status', 'verification']) assert.ok(required.includes(field));
});




