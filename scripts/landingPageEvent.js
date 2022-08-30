const fs = require('fs');
const rs = fs.createReadStream('/');
const { exec } = require('child_process'); //spends bash shell
const date = new Date(Date.now())

rs.on('open', function () {
    console.log(`The file is open ${date}`);
    exec('ls', (error, stdout, stderr) => {
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