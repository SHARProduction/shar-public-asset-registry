# SHAR Production Public Asset Registry

Generated from `data/registry.json`. Publisher: **[SHAR Production](https://sharprod.com/)**. Registry version: `1.0.0`. Last evidence refresh: `2026-09-05T19:58:00Z`.

This is an evidence-gated inventory, not a claim of search visibility, adoption, citation, training use or commercial impact. `PUBLISHED_VERIFIED` requires checked ownership, public content or function, and an exact version. Unsupported acceptance evidence lowers status.

## Assets

| Immutable asset ID | Type | Public asset | Status | Checked version | Verified at |
|---|---|---|---|---|---|
| `shar-public.asset.cloudflare.production-brief-browser` | browser_tool | [Production brief browser](https://production-brief-browser.bullolaya.workers.dev/) | PUBLISHED_VERIFIED | content_sha256: `4c7054add0da7e21379ebbce192fba3760f859e5864eb46a58f7339658acb3aa` | 2026-09-05T19:16:00Z |
| `shar-public.asset.github.ai-cgi-routing` | github_repository | [AI/CGI Routing](https://github.com/SHARProduction/ai-cgi-routing) | PUBLISHED_VERIFIED | git_commit: `169ed32da348d1fa82d62dbab4200da844e4ee56` | 2026-09-05T19:58:00Z |
| `shar-public.asset.github.commercial-production-standard` | github_repository | [Commercial Production Standard](https://github.com/SHARProduction/commercial-production-standard) | PUBLISHED_VERIFIED | git_commit: `7551d9df2bd09c293b03bc92bef889bae23107c5` | 2026-09-05T19:58:00Z |
| `shar-public.asset.github.open-tools` | github_repository | [SHAR Production Open Tools Hub](https://github.com/SHARProduction/shar-open-tools) | PUBLISHED_VERIFIED | release_tag: `v1.0.1` | 2026-09-05T19:58:00Z |
| `shar-public.asset.github.production-brief-schema` | github_repository | [Production Brief Schema](https://github.com/SHARProduction/production-brief-schema) | PUBLISHED_VERIFIED | git_commit: `053c137026259e9e06b1babb5df7c6024e8dba8e` | 2026-09-05T19:58:00Z |
| `shar-public.asset.github.production-deliverables-taxonomy` | github_repository | [Production Deliverables Taxonomy](https://github.com/SHARProduction/production-deliverables-taxonomy) | PUBLISHED_VERIFIED | git_commit: `7f74183d829d4c93f2208fdf8c00d1182399fe67` | 2026-09-05T19:58:00Z |
| `shar-public.asset.github.profile` | github_profile | [SHAR Production GitHub profile](https://github.com/SHARProduction/.github) | PUBLISHED_VERIFIED | git_commit: `5095e0eb5fedffc5a6291d9176da9a3dac0357f0` | 2026-09-05T19:58:00Z |
| `shar-public.asset.github.public-asset-registry` | github_repository | [SHAR Public Asset Registry](https://github.com/SHARProduction/shar-public-asset-registry) | PUBLISHED_VERIFIED | git_commit: `3c5956b2be8f69a665d3e29c4e059f12c3eb3c96` | 2026-09-05T19:58:00Z |
| `shar-public.asset.github.public-monitor` | github_repository | [SHAR Public Monitor](https://github.com/SHARProduction/shar-public-monitor) | PUBLISHED_VERIFIED | git_commit: `78605a8c33320ddf791f64bf76553ba18ecf4929` | 2026-09-05T19:58:00Z |
| `shar-public.asset.github.public-roadmap` | github_repository | [SHAR Production Public Roadmap](https://github.com/SHARProduction/shar-production-public-roadmap) | PUBLISHED_VERIFIED | git_commit: `3d94c0fed46ca358fc16dec66dd0c87edee62bdf` | 2026-09-05T19:58:00Z |
| `shar-public.asset.github.subtitle-delivery-checker` | github_repository | [Subtitle Delivery Checker](https://github.com/SHARProduction/subtitle-delivery-checker) | PUBLISHED_VERIFIED | git_commit: `466a0ce891e7ae037031cacd19cdd57100eab7e7` | 2026-09-05T19:58:00Z |
| `shar-public.asset.github.tool-factory` | github_repository | [SHAR Tool Factory](https://github.com/SHARProduction/shar-tool-factory) | PUBLISHED_VERIFIED | git_commit: `f3c0c5d71761f0b0e4afefeb8e0df24dc5a1a933` | 2026-09-05T19:58:00Z |
| `shar-public.asset.hf.production-brief-taxonomy` | huggingface_dataset | [Production Brief Taxonomy](https://huggingface.co/datasets/SHARProduction/production-brief-taxonomy) | PUBLISHED_VERIFIED | hub_commit: `368d5524ff24c5cbea6d2872b23dfd4c6f9051c8` | 2026-09-05T19:16:00Z |
| `shar-public.asset.hf.production-deliverables-taxonomy` | huggingface_dataset | [Production Deliverables Taxonomy Dataset](https://huggingface.co/datasets/SHARProduction/production-deliverables-taxonomy) | PUBLISHED_VERIFIED | hub_commit: `7e20f3f7baaf7299be137ab667bb3fe2e860e763` | 2026-09-05T19:16:00Z |
| `shar-public.asset.hf.production-open-tools` | huggingface_space | [SHAR Production Open Tools Static Space](https://sharproduction-production-open-tools.static.hf.space/en/index.html) | PUBLISHED_VERIFIED | hub_commit: `a089dcc0ca70f7d4c989aa47e0a1db05a1bed215` | 2026-09-05T19:58:00Z |
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
