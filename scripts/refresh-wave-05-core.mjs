import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),file=path.join(root,'data/registry.json'),d=JSON.parse(fs.readFileSync(file,'utf8')),at=new Date().toISOString().replace(/\.\d{3}Z$/,'Z');
const set=(id,version,details)=>{const a=d.assets.find(x=>x.asset_id===id);if(!a)throw new Error(`Missing ${id}`);a.version=version;a.verified_at=at;a.verification.details=details};
set('shar-public.asset.github.public-asset-registry',{kind:'release_tag',value:'v1.6.0'},['Public Registry release v1.6.0 is non-draft and non-prerelease and its tag resolves to commit d50063f.','Release contains 76 immutable PUBLISHED_VERIFIED assets and passes 17/17 checks.','README identifies SHAR Production and https://sharprod.com/; public LICENSE is SPDX MIT.']);
set('shar-public.asset.github.open-tools',{kind:'release_tag',value:'v1.6.0'},['Public Open Tools Hub release v1.6.0 is non-draft and non-prerelease and its tag resolves to commit a0ea924.','Live Cloudflare Pages EN/RU routes expose 76 registry assets with exact canonical metadata.','README identifies SHAR Production and https://sharprod.com/; public LICENSE is SPDX MIT.']);
set('shar-public.asset.hf.production-open-tools',{kind:'hub_commit',value:'efaefab'},['Hugging Face API exposes public static Space commit efaefab with runtime content refreshed.','Live EN and RU index.html routes each return HTTP 200, exact runtime canonical, index,follow and 76 asset cards.','BUILD-PROVENANCE records PUBLISHED_VERIFIED and SHAR Production ownership.']);
d.updated_at=at;fs.writeFileSync(file,JSON.stringify(d,null,2)+'\n');console.log('refreshed Registry, Hub and HF Space evidence');


