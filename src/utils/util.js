// Get the cookie value by the key.
export function getCookie(key, raw) {
    if (typeof key !== 'string' || !key) return null;
    key = '(?:^|; )' + escapeRe(key) + '(?:=([^;]*?))?(?:;|$)';
    let reKey = new RegExp(key);
    let res = reKey.exec(document.cookie);
    return res !== null ? (raw ? res[1] : decodeURIComponent(res[1])) : null;
}



export function setCookie(key, value, raw, opts) {
    if (raw !== true) {
        opts = raw;
        raw = false;
    }
    opts = opts ? convert(opts) : convert({});
    let cookie = key + '=' + (raw ? value : encodeURIComponent(value)) + opts;
    document.cookie = cookie;
}
