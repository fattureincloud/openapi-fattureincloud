const fs = require('fs');
const path = require('path');

const files = [
    path.resolve(__dirname, '../generated/python/docs/EventType.md'),
    path.resolve(__dirname, '../generated/python/fattureincloud_python_sdk/models/event_type.py')
];

files.forEach((filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Errore durante la lettura del file ${filePath}:`, err);
            process.exit(1);
        }

        const updatedData = data.replace(/IT_DOT_FATTUREINCLOUD_DOT_WEBHOOKS_DOT_/g, '').replace(/_DOT_/g, '_');

        fs.writeFile(filePath, updatedData, 'utf8', (err) => {
            if (err) {
                console.error(`Errore durante la scrittura del file ${filePath}:`, err);
                process.exit(1);
            }

            console.log(`Sostituzione completata con successo per il file ${filePath}!`);
        });
    });
});
