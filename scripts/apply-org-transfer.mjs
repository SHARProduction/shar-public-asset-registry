import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),file=path.join(root,'data/registry.json');
const d=JSON.parse(fs.readFileSync(file,'utf8')),at='2026-09-05T19:58:00Z',review='2026-10-05';
const commits={
 'ai-cgi-routing':'169ed32da348d1fa82d62dbab4200da844e4ee56',
 'commercial-production-standard':'7551d9df2bd09c293b03bc92bef889bae23107c5',
 'production-brief-schema':'053c137026259e9e06b1babb5df7c6024e8dba8e',
 'production-deliverables-taxonomy':'7f74183d829d4c93f2208fdf8c00d1182399fe67',
 'shar-production-public-roadmap':'3d94c0fed46ca358fc16dec66dd0c87edee62bdf',
 'shar-public-monitor':'78605a8c33320ddf791f64bf76553ba18ecf4929',
 'subtitle-delivery-checker':'466a0ce891e7ae037031cacd19cdd57100eab7e7'
};
for(const a of d.assets){
 const old='https://github.com/Ares3333333/',slug=a.public_url.startsWith(old)?a.public_url.slice(old.length):null;
 if(slug&&commits[slug]){
  const url=`https://github.com/SHARProduction/${slug}`;
  Object.assign(a,{namespace:`SHARProduction/${slug}`,public_url:url,canonical_url:url,version:{kind:'git_commit',value:commits[slug]},license:'MIT',status:'PUBLISHED_VERIFIED',evidence_class:'PROVIDER_API_CHECK',verified_at:at,verification_method:'GitHub public organization repository, default-branch commit, README and LICENSE APIs',verification:{outcome:'PASS',http_status:200,content_checked:true,function_checked:true,owner_checked:true,version_checked:true,details:[`GitHub API returned public SHARProduction/${slug} at exact default-branch commit ${commits[slug]}.`,'README identifies SHAR Production and links to https://sharprod.com/.','Public LICENSE is detected as SPDX MIT.']},notes:[],next_review:review});
 }
}
const profile=d.assets.find(a=>a.asset_id==='shar-public.asset.github.profile');
Object.assign(profile,{namespace:'SHARProduction/.github',public_url:'https://github.com/SHARProduction/.github',canonical_url:'https://github.com/SHARProduction/.github',version:{kind:'git_commit',value:'5095e0eb5fedffc5a6291d9176da9a3dac0357f0'},license:'MIT',status:'PUBLISHED_VERIFIED',evidence_class:'PROVIDER_API_CHECK',verified_at:at,verification_method:'GitHub organization repository, profile/README and LICENSE APIs',verification:{outcome:'PASS',http_status:200,content_checked:true,function_checked:true,owner_checked:true,version_checked:true,details:['Public SHARProduction/.github repository returned exact main commit 5095e0eb5fedffc5a6291d9176da9a3dac0357f0.','profile/README.md identifies SHAR Production and links to https://sharprod.com/.','Public LICENSE is detected as SPDX MIT.']},content_summary:'Public GitHub organization profile and contribution policies for SHAR Production.',notes:[],next_review:review});
const base=(asset_id,asset_type,title,title_ru,provider,namespace,url,version,summary,details,license='MIT')=>({asset_id,asset_type,title,title_ru,owner:'SHAR Production',brand:{name:'SHAR Production',website:'https://sharprod.com/'},provider,namespace,public_url:url,canonical_url:url,version,visibility:'public',license,status:'PUBLISHED_VERIFIED',evidence_class:provider==='Hugging Face'?'LIVE_HTTP_CHECK':'PROVIDER_API_CHECK',verified_at:at,verification_method:provider==='Hugging Face'?'Hugging Face Space API plus live static HTML inspection':'GitHub repository, commit, README, LICENSE and release APIs',verification:{outcome:'PASS',http_status:200,content_checked:true,function_checked:true,owner_checked:true,version_checked:true,details},languages:['ru','en'],relationships:[{relation:'links_to',target:'shar-public.asset.web.sharprod-home'}],content_summary:summary,notes:[],next_review:review});
const additions=[
 base('shar-public.asset.github.public-asset-registry','github_repository','SHAR Public Asset Registry','Публичный реестр активов SHAR','GitHub','SHARProduction/shar-public-asset-registry','https://github.com/SHARProduction/shar-public-asset-registry',{kind:'git_commit',value:'3c5956b2be8f69a665d3e29c4e059f12c3eb3c96'},'Evidence-gated public inventory of SHAR Production assets.',['Public organization repository and main commit 3c5956b2be8f69a665d3e29c4e059f12c3eb3c96 verified.','README identifies SHAR Production and https://sharprod.com/.','Public LICENSE is SPDX MIT.']),
 base('shar-public.asset.github.tool-factory','github_repository','SHAR Tool Factory','Фабрика инструментов SHAR','GitHub','SHARProduction/shar-tool-factory','https://github.com/SHARProduction/shar-tool-factory',{kind:'git_commit',value:'f3c0c5d71761f0b0e4afefeb8e0df24dc5a1a933'},'Deterministic generator for bilingual public SHAR Production tools.',['Public organization repository and main commit f3c0c5d71761f0b0e4afefeb8e0df24dc5a1a933 verified.','README identifies SHAR Production and https://sharprod.com/.','Public LICENSE is SPDX MIT.']),
 base('shar-public.asset.github.open-tools','github_repository','SHAR Production Open Tools Hub','Каталог открытых инструментов SHAR Production','GitHub','SHARProduction/shar-open-tools','https://github.com/SHARProduction/shar-open-tools',{kind:'release_tag',value:'v1.0.1'},'Versioned browser-first hub for open SHAR Production utilities.',['Public organization repository main commit f71485545cdb482a0e56cc1df7a050d98a647a1b verified.','Release v1.0.1 is public, non-draft and non-prerelease; its tag resolves to the checked main commit.','README identifies SHAR Production and https://sharprod.com/; public LICENSE is SPDX MIT.']),
 base('shar-public.asset.hf.production-open-tools','huggingface_space','SHAR Production Open Tools Static Space','Статический Space открытых инструментов SHAR Production','Hugging Face','SHARProduction/production-open-tools','https://sharproduction-production-open-tools.static.hf.space/en/index.html',{kind:'hub_commit',value:'a089dcc0ca70f7d4c989aa47e0a1db05a1bed215'},'Static Hugging Face deployment of the bilingual SHAR Production open tools hub.',['Hugging Face API reports a public, ungated, enabled static Space at commit a089dcc0ca70f7d4c989aa47e0a1db05a1bed215 with runtime stage RUNNING.','Live EN page returned HTTP 200 and contains SHAR Production branding, canonical, hreflang, index,follow robots and SoftwareApplication JSON-LD.','The Space root returns HTTP 200 with a meta refresh and noindex,follow; the registered public URL is the indexable EN page.'])
];
for(const a of additions){const i=d.assets.findIndex(x=>x.asset_id===a.asset_id);if(i>=0)d.assets[i]=a;else d.assets.push(a)}
d.assets.sort((a,b)=>a.asset_id.localeCompare(b.asset_id));d.updated_at=at;
fs.writeFileSync(file,JSON.stringify(d,null,2)+'\n');
console.log(`applied organization transfer evidence to ${d.assets.length} assets`);
