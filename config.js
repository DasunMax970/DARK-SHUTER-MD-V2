const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: 'DARK-SHUTER-MD=WY8V1BYK#XDpPoDF79D80sSTGX5iZ0cLAVrPeUr-dbHU-82qhxvA',
GITHUB_AUTH_TOKEN: 'Jhs8hjpOdvByrNOeaWYEJHSj707mCb1JGoTx', //"ghp_ " මෙම කොටස ඉවත් කර token එක දාන්න.
GITHUB_USER_NAME: 'DasunMax970',

};
