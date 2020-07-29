

## Repro steps

Check out this repo

Optional, use the docker box
```docker-compose up```
```docker exec -it preact_error_npm_1 bash```


Install the stuff
```npm install```

build the stuff
```npm run build:dev```


Observe the error.
```
Uncaught TypeError: Cannot read property '__H' of undefined
    at v (index.js:96)
    at _ (index.js:202)
    at Object.h [as useRef] (index.js:177)
    at useSound (index.ts:18)
    at Module../tsx/sound_button.tsx (sound_button.tsx:16)
    at __webpack_require__ (bootstrap:63)
    at Module../tsx/bootstrap.tsx (bootstrap.tsx:1)
    at __webpack_require__ (bootstrap:63)
    at Object.0 (sound_button.tsx:24)
    at __webpack_require__ (bootstrap:63)
```
