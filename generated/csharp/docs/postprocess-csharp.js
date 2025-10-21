const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../src/It.FattureInCloud.Sdk/Model/EventType.cs');
const receiptFilePath = path.resolve(__dirname, '../src/It.FattureInCloud.Sdk/Model/ReceiptPreCreateInfo.cs');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Errore durante la lettura del file:', err);
        process.exit(1);
    }

    const updatedData = data.replace(/ItFattureincloudWebhooks/g, '');

    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
        if (err) {
            console.error('Errore durante la scrittura del file:', err);
            process.exit(1);
        }

        console.log('Sostituzione completata con successo!');
    });
});

fs.readFile(receiptFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Errore durante la lettura del file ReceiptPreCreateInfo.cs:', err);
        process.exit(1);
    }

    const updatedData = data.replace(/Dictionary<string, int>> /g, 'Dictionary<string, Dictionary<string, int>>> ');

    fs.writeFile(receiptFilePath, updatedData, 'utf8', (err) => {
        if (err) {
            console.error('Errore durante la scrittura del file ReceiptPreCreateInfo.cs:', err);
            process.exit(1);
        }

        console.log('Sostituzione completata con successo per ReceiptPreCreateInfo.cs!');
    });
});