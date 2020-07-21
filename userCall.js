 var apiutil  = require('./apiUtil');

// users/lookup.json?screen_name=ratclick,kliooskshfu
// lookup users from array
exports.findUsers = (query) => {
    var params = {
        ...query
    };
    return apiutil.getCall('users/lookup.json', params);
};

exports.findFriends = (query) => {
    var params = {
        ...query
    };
    return apiutil.getCall('friends/list.json', params);
};
