var btoa = str => Buffer.from(str).toString('base64'),
    atob = str => Buffer.from(str, 'base64').toString('utf-8');

require('http').createServer((req, res) => /^(GET)/.test(req.method) ? req.on('data', data => req.body = data.toString('utf-8')).on('end', () => {

    req.query = Object.fromEntries(new URLSearchParams(req.url.split('?').slice(1).join('?')));
    
    if (req.query.url) {
        req.query.url =  atob(decodeURIComponent(req.query.url)).match(/^http(s?):\/\//) ||  atob(decodeURIComponent(req.query.url)).includes('.') && !atob(decodeURIComponent(req.query.url)).startsWith(' ') ? atob(decodeURIComponent(req.query.url)) : `https://www.google.com/search?q=${encodeURIComponent(atob(decodeURIComponent(req.query.url)))}`;
        res.setHeader("Set-Cookie", "__incog_prox=1; Path=/");
        switch(req.query.type) {
            case 'ap': default:
                res.writeHead(301, {Location: `/web/_${btoa(req.query.url.split('/').splice(0, 3).join('/'))}_/${req.query.url.split('/').splice(3).join('/')}`});
            break;
            case 'sp':
                res.setHeader("Set-Cookie", [ "__incog_prox=1; Path=/;", "gateway=sp; Path=/;" ]);
                res.writeHead(301, {Location: `/serviceurl=${encodeURIComponent(req.query.url.split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''))}`});
            break;
        };
        return res.end('');
    } else res.end('')
}) : res.end('Method not allowed!')).listen(8181);
