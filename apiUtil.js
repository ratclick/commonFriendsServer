var axios = require('axios')
var config = require('./config')
var qs = require('qs')

// https://api.twitter.com/1.1/
const baseUrl = config.twitter.apiUrl;
let token = ''
if(process.env.token){
    token = process.env.token;
}else{
    token = config.twitter.token;
}


exports.getCall = (url, params) => {
    var target = baseUrl + url;
    var call = axios.create({
        headers: {
            Authorization: `Bearer ${token}`
        },
        paramsSerializer: (params) => {
            return qs.stringify(params, {arrayFormat: 'repeat'})
        }
    })
    return call.get(target, {params});
};
