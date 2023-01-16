# serverless-bin
ServerlessBin is a [Cloudflare Workers](https://workers.cloudflare.com) powered [hastebin server](https://hastebin.com).
It has the exact same endpoints and works perfectly with hastebin frontend.

For the most part, haste was used as a starting point for the static assets and the UI, whereas the
server code had to be mostly rewritten, as the Workers environment is not compatible with node.js
(or connect or connect middleware), redis, memcached, etc.

You can see a public instance of this running at
[paste.iloveopensource.dev](https://paste.iloveopensource.dev) or [paste.thearcadia.xyz](https://paste.thearcadia.xyz).

# Deployment
To deploy it to your own instance, do the following:
- Clone the repository
- Create a KV inside workers dashboard
- Deploy the page from the cloned repository
- Inside pages > your page > settings > functions add KV binding as FILES_KV -> Your KV
