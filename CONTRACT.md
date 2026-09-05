# Registry contract

`data/registry.json` is the sole canonical source. Generated Markdown must never be edited as source.

## Immutable identity

`asset_id` names the conceptual asset and remains unchanged across host moves, repository commits, dataset revisions and status changes. A replacement with a materially different purpose receives a new ID. `version` identifies the exact checked representation and is expected to change.

## Evidence gates

`PUBLISHED_VERIFIED` requires all of: exact HTTPS URL, checked owner, checked content or function, checked version, a UTC verification time, a PASS outcome and human-readable evidence details. PARTIAL, FAIL and UNASSESSED outcomes cannot carry that status. `SUBMITTED` records an externally visible placement whose full acceptance remains unsupported; it is not publication verification.

`MEASURED` requires a documented observation and does not imply causality. No record in this release claims search indexing, citations, external adoption, model training, traffic or business impact.

## Discovery scope

Discovery queried the public GitHub provider API for `Ares3333333`, the Hugging Face dataset API for `SHARProduction`, and direct public HTTP/protocol endpoints. Inclusion then required explicit SHAR Production identity. This avoids assigning unrelated personal repositories to the brand.
