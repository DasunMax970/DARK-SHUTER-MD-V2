const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: 'DARK-SHUTER-MD=OF8ADCDA#Vt340WjwrcUYyHGseq8qLm3LsYUEODAurCUPcMF-Cv8',
GITHUB_AUTH_TOKEN: 'gOXIpTaGulhB87g4E9metbO5PXE6hV3GexyO', //"ghp_ " මෙම කොටස ඉවත් කර token එක දාන්න.
GITHUB_USER_NAME: 'DasunMax970',

};
