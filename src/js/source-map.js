const rawSourceMap = {
    version: 3,
    file: 'canvas-bundle.js',
    names: ['bar', 'baz', 'n'],
    sources: ['canvas.js'],
    sourceRoot: './js/',
    mappings: 'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA'
};

const whatever = await SourceMapConsumer.with(rawSourceMap, null, consumer => {

    console.log(consumer.sources);
    // [ 'http://example.com/www/js/one.js',
    //   'http://example.com/www/js/two.js' ]

    console.log(consumer.originalPositionFor({
        line: 2,
        column: 28
    }));
    // { source: 'http://example.com/www/js/two.js',
    //   line: 2,
    //   column: 10,
    //   name: 'n' }

    console.log(consumer.generatedPositionFor({
        source: './js/canvas.js',
        line: 2,
        column: 10
    }));
    // { line: 2, column: 28 }

    consumer.eachMapping(function (m) {
        // ...
    });

    return computeWhatever();
});