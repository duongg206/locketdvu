/***********************************************
> deleteHeader by YangDvu
***********************************************/	

const version = 'V1.0.3';

function deleteHeader(headers, name) {
    var lower = name.toLowerCase();
    for (var k in headers) {
        if (k.toLowerCase() === lower) {
            delete headers[k];
        }
    }
}

var modifiedHeaders = $request.headers || {};
deleteHeader(modifiedHeaders, "X-RevenueCat-ETag");
deleteHeader(modifiedHeaders, "x-revenuecat-etag");
deleteHeader(modifiedHeaders, "If-None-Match");
deleteHeader(modifiedHeaders, "if-none-match");

$done({ headers: modifiedHeaders });
