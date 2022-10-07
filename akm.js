var body = $response.body
var curDate = new Date();
var dd = new Date(curDate.getTime() - 24 * 60 * 60 * 1000);
var cc = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 2);
var bb = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 4);
var aa = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 6);
var ee = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 8);
if (body) {
    function getMonth(month) {
        if (month < 12) {
            month = month + 1;
        }
        return month
    }

    var obj = JSON.parse($response.body)
    obj.data.hsFlag = true
    obj.data.hsList = [
        {
            "id": "33AFCF9FB4C34D59BFDB424D375C111A",
            "hsjcjgmc": "庐江县人民医院东区",
            "hscjsj": dd.getFullYear() + "-" + getMonth(dd.getMonth()) + "-" + dd.getDate() + " 08:58:36",
            "sourceSys": null,
            "hsjcjg": "阴性",
            "dataSource": "1",
            "hsjcsj": dd.getFullYear() + "-" + getMonth(dd.getMonth()) + "-" + dd.getDate() + " 20:28:11",
            "isDelete": "**华",
            "createTime": dd.getFullYear() + getMonth(dd.getMonth()) + dd.getDate() + "4322",
            "isValid": "3426**********6475",
            "hscjjgmc": "泥河镇便民核酸采集点",
            "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
            "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
        },
        {
            "id": "F91B4FEFF67118DC4CAF8AA98786500C",
            "hsjcjgmc": "庐江县人民医院东区",
            "hscjsj": cc.getFullYear() + "-" + getMonth(cc.getMonth()) + "-" + cc.getDate() + " 09:15:10",
            "sourceSys": null,
            "hsjcjg": "阴性",
            "dataSource": "1",
            "hsjcsj": cc.getFullYear() + "-" + getMonth(cc.getMonth()) + "-" + cc.getDate() + " 20:13:16",
            "isDelete": "**华",
            "createTime": dd.getFullYear() + getMonth(cc.getMonth()) + dd.getDate + "0117",
            "isValid": "3426**********6475",
            "hscjjgmc": "泥河镇便民核酸采集点",
            "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
            "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
        },
        {
            "id": "1710DB56E14DA0F7C9CF5FA0AE0B839E",
            "hsjcjgmc": "庐江县人民医院东区",
            "hscjsj": bb.getFullYear() + "-" + getMonth(bb.getMonth()) + "-" + bb.getDate() + " 08:15:17",
            "sourceSys": null,
            "hsjcjg": "阴性",
            "dataSource": "1",
            "hsjcsj": bb.getFullYear() + "-" + getMonth(bb.getMonth()) + "-" + bb.getDate() + " 19:45:31",
            "isDelete": "**华",
            "createTime": bb.getFullYear() + getMonth(bb.getMonth()) + bb.getDate() + "0016",
            "isValid": "3426**********6475",
            "hscjjgmc": "泥河镇便民核酸采集点",
            "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
            "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
        },
        {
            "id": "84017728ECD54F5395C94F314F361B56",
            "hsjcjgmc": "庐江县人民医院东区",
            "hscjsj": aa.getFullYear() + "-" + getMonth(aa.getMonth()) + "-" + aa.getDate() + " 10:20:42",
            "sourceSys": null,
            "hsjcjg": "阴性",
            "dataSource": "1",
            "hsjcsj": aa.getFullYear() + "-" + getMonth(aa.getMonth()) + "-" + aa.getDate() + " 20:19:22",
            "isDelete": "**华",
            "createTime": aa.getFullYear() + getMonth(aa.getMonth()) + aa.getDate() + "0016",
            "isValid": "3426**********6475",
            "hscjjgmc": "泥河镇便民核酸采集点",
            "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
            "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
        },
        {
            "id": "602CB954747122D60350C09EED420D10",
            "hsjcjgmc": "庐江县人民医院东区",
            "hscjsj": ee.getFullYear() + "-" + getMonth(ee.getMonth()) + "-" + ee.getDate() + " 08:32:17",
            "sourceSys": null,
            "hsjcjg": "阴性",
            "dataSource": "1",
            "hsjcsj": ee.getFullYear() + "-" + getMonth(ee.getMonth()) + "-" + ee.getDate() + " 19:52:32",
            "isDelete": "**华",
            "createTime": ee.getFullYear() + getMonth(ee.getMonth()) + ee.getDate() + "0016",
            "isValid": "3426**********6475",
            "hscjjgmc": "泥河镇便民核酸采集点",
            "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
            "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
        }

    ]
    $done({body: JSON.stringify(obj)})
} else {
    $done({})
}