var body = $response.body
var url = $request.url
var curDate = new Date();
var dd = new Date(curDate.getTime() - 24 * 60 * 60 * 1000);
var resp = {
    "flag": true,
    "data": {
        "hsInfo": {
            "hsjg": "阴性",
            "hsDate": dd.getFullYear() + "-" + (dd.getMonth() + 1) + "-" + dd.getDate() + " 20:28:11",
        },
        "over": "1",
        "ymType": "5601",
        "isJq": "",
        "date": "2021-12-23 09:24:11",
        "flag": "1",
        "num": "2"
    },
    "errMsg": "success",
    "errCode": "-1"
}

if (resp) {
    $done({body: JSON.stringify(resp)})
} else {
    $done({})
}