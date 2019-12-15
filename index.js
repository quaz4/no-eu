const getIP = require('ipware')().get_ip;
const geolite2 = require('geolite2');
const maxmind = require('maxmind');
const eu = require("./eu-members");

const lookup = maxmind.openSync(geolite2.paths.country);

module.exports = function(callback) {
    return function(req, res, next) {        
        try {
            let ip = getIP(req).clientIp;
            let location = lookup.get(ip).country.iso_code;

            if(eu.includes(location)) {
                // Reject request
                return callback(req, res, location);
            } else {
                // Accept request
                next();
            }
        } catch (error) {
            if (error instanceof TypeError) {
                next();
            } else {
                console.error(error);
            }
        }

    }
}
