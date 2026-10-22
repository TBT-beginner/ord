const http=require('http'),fs=require('fs'),path=require('path');
// / → index.html (English), /de → de.html (German); other files in this folder (manifest, icons) as they are
const TYPES={'.html':'text/html; charset=utf-8','.webmanifest':'application/manifest+json','.png':'image/png','.js':'text/javascript'};
http.createServer((q,r)=>{const u=q.url.split('?')[0];let name=/^\/de(\.html)?$/.test(u)?'de.html':u==='/'||u==='/index.html'?'index.html':path.basename(u);
if(!fs.existsSync(path.join(__dirname,name))||name==='serve.js')name='index.html';
r.writeHead(200,{'Content-Type':TYPES[path.extname(name)]||'application/octet-stream','Cache-Control':'no-store'});r.end(fs.readFileSync(path.join(__dirname,name)));}).listen(process.env.PORT||5179);
