const {createServer} = require('http');
const {parse} = require('url');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = false; // Production mode
const app = next({dev, dir: __dirname});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        createServer(async (req, res) => {
            try {
                const parsedUrl = parse(req.url, true);
                await handle(req, res, parsedUrl);
            } catch (err) {
                console.error('Error:', err);
                res.statusCode = 500;
                res.end('Internal Server Error');
            }
        }).listen(port, () => {
            console.log(`> Ready on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error('Next.js startup error:', err);
        process.exit(1);
    });