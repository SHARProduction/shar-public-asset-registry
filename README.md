# SHAR Production Public Asset Registry

Generated from `data/registry.json`. Publisher: **[SHAR Production](https://sharprod.com/)**. Registry version: `1.0.0`. Last evidence refresh: `2026-09-05T19:16:00Z`.

This is an evidence-gated inventory, not a claim of search visibility, adoption, citation, training use or commercial impact. `PUBLISHED_VERIFIED` requires checked ownership, public content or function, and an exact version. Unsupported acceptance evidence lowers status.

## Assets

| Immutable asset ID | Type | Public asset | Status | Checked version | Verified at |
|---|---|---|---|---|---|
| `shar-public.asset.cloudflare.production-brief-browser` | browser_tool | [Production brief browser](https://production-brief-browser.bullolaya.workers.dev/) | PUBLISHED_VERIFIED | content_sha256: `4c7054add0da7e21379ebbce192fba3760f859e5864eb46a58f7339658acb3aa` | 2026-09-05T19:16:00Z |
| `shar-public.asset.github.ai-cgi-routing` | github_repository | [AI/CGI Routing](https://github.com/Ares3333333/ai-cgi-routing) | PUBLISHED_VERIFIED | git_commit: `169ed32da348d1fa82d62dbab4200da844e4ee56` | 2026-09-05T19:16:00Z |
| `shar-public.asset.github.commercial-production-standard` | github_repository | [Commercial Production Standard](https://github.com/Ares3333333/commercial-production-standard) | PUBLISHED_VERIFIED | git_commit: `7551d9df2bd09c293b03bc92bef889bae23107c5` | 2026-09-05T19:16:00Z |
| `shar-public.asset.github.production-brief-schema` | github_repository | [Production Brief Schema](https://github.com/Ares3333333/production-brief-schema) | PUBLISHED_VERIFIED | git_commit: `053c137026259e9e06b1babb5df7c6024e8dba8e` | 2026-09-05T19:16:00Z |
| `shar-public.asset.github.production-deliverables-taxonomy` | github_repository | [Production Deliverables Taxonomy](https://github.com/Ares3333333/production-deliverables-taxonomy) | PUBLISHED_VERIFIED | git_commit: `7f74183d829d4c93f2208fdf8c00d1182399fe67` | 2026-09-05T19:16:00Z |
| `shar-public.asset.github.profile` | github_profile | [SHAR Production GitHub profile](https://github.com/Ares3333333/Ares3333333) | PUBLISHED_VERIFIED | git_commit: `5adf64fd4f8b13ee2804e2d21fbf80497fdae619` | 2026-09-05T19:16:00Z |
| `shar-public.asset.github.public-monitor` | github_repository | [SHAR Public Monitor](https://github.com/Ares3333333/shar-public-monitor) | SUBMITTED | git_commit: `f6fc1e9dd1e8ba255b0deef11d21e0be3ddb8e5e` | 2026-09-05T19:16:00Z |
| `shar-public.asset.github.public-roadmap` | github_repository | [SHAR Production Public Roadmap](https://github.com/Ares3333333/shar-production-public-roadmap) | PUBLISHED_VERIFIED | git_commit: `3d94c0fed46ca358fc16dec66dd0c87edee62bdf` | 2026-09-05T19:16:00Z |
| `shar-public.asset.github.subtitle-delivery-checker` | github_repository | [Subtitle Delivery Checker](https://github.com/Ares3333333/subtitle-delivery-checker) | PUBLISHED_VERIFIED | git_commit: `466a0ce891e7ae037031cacd19cdd57100eab7e7` | 2026-09-05T19:16:00Z |
| `shar-public.asset.hf.production-brief-taxonomy` | huggingface_dataset | [Production Brief Taxonomy](https://huggingface.co/datasets/SHARProduction/production-brief-taxonomy) | PUBLISHED_VERIFIED | hub_commit: `368d5524ff24c5cbea6d2872b23dfd4c6f9051c8` | 2026-09-05T19:16:00Z |
| `shar-public.asset.hf.production-deliverables-taxonomy` | huggingface_dataset | [Production Deliverables Taxonomy Dataset](https://huggingface.co/datasets/SHARProduction/production-deliverables-taxonomy) | PUBLISHED_VERIFIED | hub_commit: `7e20f3f7baaf7299be137ab667bb3fe2e860e763` | 2026-09-05T19:16:00Z |
| `shar-public.asset.mcp.public-knowledge` | mcp_service | [SHAR Public Knowledge MCP](https://mcp.sharprod.com/public) | PUBLISHED_VERIFIED | semantic: `0.1.0` | 2026-09-05T19:16:00Z |
| `shar-public.asset.web.sharprod-home` | website | [SHAR Production website](https://sharprod.com/) | PUBLISHED_VERIFIED | content_sha256: `5e5f72be6baac730649f4bc0616379d0bf277824e98933383eb21faf3bf7d28e` | 2026-09-05T19:16:00Z |

## Scope

Included:
- Current public surfaces explicitly branded as SHAR Production or using the SHARProduction namespace.
- GitHub repositories whose public metadata identifies SHAR Production and links to https://sharprod.com/.
- Public Hugging Face datasets in the SHARProduction namespace.

Excluded:
- Other public repositories under the same personal GitHub account without verified SHAR Production identity.
- Individual website pages, case pages and generated files that belong to the canonical website asset.
- Local-only drafts and source packages not publicly deployed.
- Search-engine appearance, citations, usage or impact without direct evidence.

## Use

`npm run validate` validates the canonical JSON. `npm run generate` regenerates this file and `STATUS.md`.
