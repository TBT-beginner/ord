const http=require('http'),fs=require('fs'),path=require('path');
// / → index.html (English), /de.html → German version
http.createServer((q,r)=>{const name=/^\/de(\.html)?$/.test(q.url.split('?')[0])?'de.html':'index.html';const f=path.join(__dirname,name);r.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});r.end(fs.readFileSync(f));}).listen(process.env.PORT||5179);
