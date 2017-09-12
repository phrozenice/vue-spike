##Error Reproduction

1. First Compile works fine with the `spike watch` command
2. Make a change to the `<template>` block in the `vue/components/app.vue` file
3. Spike will pick up the change then emit the following error

```
undefined:1
var disposed = false
^

SyntaxError: Unexpected token v in JSON at position 0
    at Object.parse (native)
    at processedFiles.forEach (C:\apps\vue-integration\node_modules\spike-core\lib\plugin.js:73:18)
    at Array.forEach (native)
    at Compiler.compiler.plugin (C:\apps\vue-integration\node_modules\spike-core\lib\plugin.js:53:22)
    at Compiler.applyPluginsAsyncSeries (C:\apps\vue-integration\node_modules\tapable\lib\Tapable.js:206:13)
    at Compiler.emitAssets (C:\apps\vue-integration\node_modules\webpack\lib\Compiler.js:358:8)
    at onCompiled (C:\apps\vue-integration\node_modules\webpack\lib\Compiler.js:57:19)
    at applyPluginsAsync.err (C:\apps\vue-integration\node_modules\webpack\lib\Compiler.js:520:14)
    at next (C:\apps\vue-integration\node_modules\tapable\lib\Tapable.js:202:11)
    at Compiler.<anonymous> (C:\apps\vue-integration\node_modules\webpack\lib\CachePlugin.js:62:5) 
```