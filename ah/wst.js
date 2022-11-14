var body = $response.body
var url = $request.url
var curDate = new Date();
var dd = new Date(curDate.getTime() - 24 * 60 * 60 * 1000);
if (body) {
    var obj = JSON.parse($response.body)
    obj.data.hsInfo = {
        "hsTime" : 24,
        "hsjg": "阴性",
        "hsDate": dd.getFullYear() + "-" + (dd.getMonth() + 1) + "-" + dd.getDate() + " 20:15:36",
    }
    $done({body: JSON.stringify(obj)})
} else {
    $done({})
}