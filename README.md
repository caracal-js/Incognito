# Incognito
Access the world wide web

# Setup
```
git clone https://github.com/caracal-js/Incognito.git
cd Incognito
git submodule update --init
```

# Ultraviolet
Ultraviolet's bare server by default is set to Incognito's official bare server (https://incog.dev/bare/)

Change the bare server in `uv/uv.config.js` to whatever bare server you have.

Folder prefixes in `uv.sw.js` and `uv.config.js` will have to be changed to where `uv/` is located

`/uv.sw.js` --> `/uv/uv.sw.js`

# Games
Games are not included by default due to the extremely large size of them. 

```
git clone https://github.com/caracal-js/gfiles.git source
```
