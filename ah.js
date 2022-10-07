var body = $response.body
var url = $request.url
var resp={
  "flag" : true,
  "data" : {
    "hsInfo" : {
      "hsjg" : "阴性",
      "hsDate" : "2022-10-07 00:53:41"
    },
    "over" : "1",
    "ymType" : "5601",
    "isJq" : "",
    "date" : "2021-12-23 09:24:11",
    "flag" : "1",
    "num" : "2"
  },
  "errMsg" : "success",
  "errCode" : "-1"
}

if (resp) {
  $done({ body: JSON.stringify(resp) })
} else {
  $done({})
}

//if (body) {
//  var obj = JSON.parse($resp)
//  obj.blockTypeData = {}
//  $done({ body: JSON.stringify(obj) })
//} else {
//  $done({})
//}