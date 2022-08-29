const fs = require('fs');
const rs = fs.createReadStream('/');
const { exec } = require('child_process'); //spends bash shell


rs.on('open', function () {
    console.log('The file is open');
    exec('nodemon index.js ', (error, stdout, stderr) => {
    if (error) {
        console.error(`error: ${error.message}`);
        return;
    }

    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout:\n${stdout}`);
    });

});