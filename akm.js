var body = $response.body
var url = $request.url
var curDate = new Date();
var dd = new Date(curDate.getTime() - 24 * 60 * 60 * 1000);
var cc = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 2);
var bb = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 4);
var aa = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 6);
var resp = {
    "flag": true,
    "data": {
        "hsList": [
            {
                "id": "33AFCF9FB4C34D59BFDB424D375C111A",
                "hsjcjgmc": "庐江县人民医院东区",
                "hscjsj": dd.getFullYear() + "-" + dd.getMonth() + "-" + dd.getDate() + " 08:58:36",
                "sourceSys": null,
                "hsjcjg": "阴性",
                "dataSource": "1",
                "hsjcsj": dd.getFullYear() + "-" + dd.getMonth() + "-" + dd.getDate() + " 20:28:11",
                "isDelete": "**华",
                "createTime": dd.getFullYear() + dd.getMonth() + dd.getDate() + "4322",
                "isValid": "3426**********6475",
                "hscjjgmc": "泥河镇便民核酸采集点",
                "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
                "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
            },
            {
                "id": "F91B4FEFF67118DC4CAF8AA98786500C",
                "hsjcjgmc": "庐江县人民医院东区",
                "hscjsj": cc.getFullYear() + "-" + cc.getMonth() + "-" + cc.getDate() + " 09:15:10",
                "sourceSys": null,
                "hsjcjg": "阴性",
                "dataSource": "1",
                "hsjcsj": cc.getFullYear() + "-" + cc.getMonth() + "-" + cc.getDate() + " 20:13:16",
                "isDelete": "**华",
                "createTime": dd.getFullYear() + dd.getMonth() + dd.getDate + "0117",
                "isValid": "3426**********6475",
                "hscjjgmc": "泥河镇便民核酸采集点",
                "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
                "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
            },
            {
                "id": "1710DB56E14DA0F7C9CF5FA0AE0B839E",
                "hsjcjgmc": "庐江县人民医院东区",
                "hscjsj": bb.getFullYear() + "-" + bb.getMonth() + "-" + bb.getDate() + " 08:15:17",
                "sourceSys": null,
                "hsjcjg": "阴性",
                "dataSource": "1",
                "hsjcsj": bb.getFullYear() + "-" + bb.getMonth() + "-" + bb.getDate() + " 19:45:31",
                "isDelete": "**华",
                "createTime": bb.getFullYear() + bb.getMonth() + bb.getDate() + "0016",
                "isValid": "3426**********6475",
                "hscjjgmc": "泥河镇便民核酸采集点",
                "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
                "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
            },
            {
                "id": "84017728ECD54F5395C94F314F361B56",
                "hsjcjgmc": "庐江县人民医院东区",
                "hscjsj": aa.getFullYear() + "-" + aa.getMonth() + "-" + aa.getDate() + " 10:20:42",
                "sourceSys": null,
                "hsjcjg": "阴性",
                "dataSource": "1",
                "hsjcsj": aa.getFullYear() + "-" + aa.getMonth() + "-" + aa.getDate() + " 20:19:22",
                "isDelete": "**华",
                "createTime": aa.getFullYear() + aa.getMonth() + aa.getDate() + "0016",
                "isValid": "3426**********6475",
                "hscjjgmc": "泥河镇便民核酸采集点",
                "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
                "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
            }
        ],
        "hsFlag": true
    },
    "errMsg": "success",
    "errCode": "-1"
}

if (resp) {
    $done({body: JSON.stringify(resp)})
} else {
    $done({})
}