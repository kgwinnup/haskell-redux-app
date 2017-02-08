
import jquery from 'jquery';

export function JSON_POST (uri, data, fn) {
    return dispatch => {
        jquery.ajax({
            type: "POST",
            url: uri,
            data: JSON.stringify(data),
            success: function(d) {
                dispatch(fn(d));
            },
            dataType: "json"
        });
    }
}

export function GET_JSON (uri, fn) {
    return dispatch => {
        jquery.ajax({
            type: "GET",
            url: uri,
            success: function(d) {
                dispatch(fn(d));
            }
        });
    }
}

export function GET_COOKIE(name) {
    const cookies = document.cookie.split(';');
    var retCookies = {};
    for(var i in cookies) {
        const parts = cookies[i].split('=');
        if (parts.length == 2) {
            const parts2 = parts[1].split('|');
            if (parts2.length == 2) {
                retCookies[parts[0].trim()] = parts2[0].trim();
            }
        }
    }

    return (name in retCookies) ? retCookies[name] : null;
}


