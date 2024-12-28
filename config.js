const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: 'DARK-SHUTER-MD=mU51mR5a#-B0ulKQaoIgzc_TOEwyg0PhdkDfwOG9rKCHU_xbpAuc',
GITHUB_AUTH_TOKEN: '9MWHi7RpP8mmJ30wSkvE1wDyN0Wuez48s9Wn', //"ghp_ " මෙම කොටස ඉවත් කර token එක දාන්න.
GITHUB_USER_NAME: 'DasunMax970',

};
