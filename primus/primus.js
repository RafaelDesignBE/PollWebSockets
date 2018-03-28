exports.kickstart = function(server){
    console.log('👌');

    const Primus = require('primus');
    let primus = new Primus(server, {/*options*/});

    primus.on('connection', function(spark){
        console.log("Spark connected ✨");

        spark.on('data', function(data){
            primus.write(data);
        });
    });
}