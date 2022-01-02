const devAPIUrl = "http://localhost:3000"
const devWSUrl = "http://localhost:3000"

const prodAPIUrl = "http://localhost:3000";
const prodWSUrl = "http://localhost:3000";

const getAPIUrl = (testing = true) => {
    return testing ? devAPIUrl : prodAPIUrl;
};

const getWSUrl = (testing = true) => {
    return testing ? devWSUrl : prodWSUrl;
};

const mapAPIPublicKey = "pk.eyJ1IjoiaW1tb3J0YWxsb3JkIiwiYSI6ImNreHZzNTltdDI0NzIycHA0eXU1bGxvem0ifQ.UDSWw-Zps_HHRpC0kbPSrA";
// const mapAPIPublicKey = "";

module.exports = {
    getAPIUrl,
    getWSUrl,
    mapAPIPublicKey
};