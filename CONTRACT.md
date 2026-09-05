# Registry contract

`data/registry.json` is the sole canonical source. Generated Markdown must never be edited as source.

## Immutable identity

`asset_id` names the conceptual asset and remains unchanged across host moves, repository commits, dataset revisions and status changes. A replacement with a materially different purpose receives a new ID. `version` identifies the exact checked representation and is expected to change.

## Evidence gates

`PUBLISHED_VERIFIED` requires all of: exact HTTPS URL, checked owner, checked content or function, checked version, a UTC verification time, a PASS outcome and human-readable evidence details. PARTIAL, FAIL and UNASSESSED outcomes cannot carry that status. `SUBMITTED` records an externally visible placement whose full acceptance remains unsupported; it is not publication verification.

`MEASURED` requires a documented observation and does not imply causality. No record in this release claims search indexing, citations, external adoption, model training, traffic or business impact.

## Discovery scope

Current discovery queries the public GitHub organization API for `SHARProduction`, the Hugging Face APIs for the same namespace, and direct public HTTP/protocol endpoints. Inclusion requires explicit SHAR Production identity. This avoids assigning unrelated repositories to the brand.

After organization transfer, GitHub repository evidence is resolved under `SHARProduction`. A conceptual asset keeps its immutable `asset_id` when its provider namespace changes. Release-backed assets may use `release_tag`; the evidence details must also record the commit resolved by that tag. A Hugging Face static Space is registered at the exact live page that passes its indexability and content checks, while service-root behavior is recorded separately.
