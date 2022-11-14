var body = $response.body
var curDate = new Date();
var dd = new Date(curDate.getTime() - 24 * 60 * 60 * 1000);
var cc = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 2);
var bb = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 3);
var aa = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 4);
var ee = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 5);
var ff = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 6);
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
            "hscjsj": dd.getFullYear() + "-" + getMonth(dd.getMonth()) + "-" + dd.getDate() + " 09:55:21",
            "sourceSys": null,
            "hsjcjg": "阴性",
            "dataSource": "1",
            "hsjcsj": dd.getFullYear() + "-" + getMonth(dd.getMonth()) + "-" + dd.getDate() + " 20:15:36",
            "isDelete": "**华",
            "createTime": dd.getFullYear() + getMonth(dd.getMonth()) + dd.getDate() + "4322",
            "isValid": "3426**********6475",
            "hscjjgmc": "洋河民德小学",
            "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
            "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
        },
        {
            "id": "84017728ECD54F5395C94F314F361B56",
            "hsjcjgmc": "庐江县人民医院东区",
            "hscjsj": cc.getFullYear() + "-" + getMonth(cc.getMonth()) + "-" + cc.getDate() + " 10:10:21",
            "sourceSys": null,
            "hsjcjg": "阴性",
            "dataSource": "1",
            "hsjcsj": cc.getFullYear() + "-" + getMonth(cc.getMonth()) + "-" + cc.getDate() + " 20:32:22",
            "isDelete": "**华",
            "createTime": cc.getFullYear() + getMonth(cc.getMonth()) + cc.getDate() + "0016",
            "isValid": "3426**********6475",
            "hscjjgmc" : "洋河民德小学",
            "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
            "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
        },
        {
            "id": "602CB954747122D60350C09EED420D10",
            "hsjcjgmc": "庐江县人民医院东区",
            "hscjsj": bb.getFullYear() + "-" + getMonth(bb.getMonth()) + "-" + bb.getDate() + " 10:01:37",
            "sourceSys": null,
            "hsjcjg": "阴性",
            "dataSource": "1",
            "hsjcsj": bb.getFullYear() + "-" + getMonth(bb.getMonth()) + "-" + bb.getDate() + " 20:15:32",
            "isDelete": "**华",
            "createTime": bb.getFullYear() + getMonth(bb.getMonth()) + bb.getDate() + "4203",
            "isValid": "3426**********6475",
            "hscjjgmc" : "洋河民德小学",
            "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
            "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
        },
        {
            "id" : "AAACB74678E6C06FDB8E5333074E7DBE",
            "hsjcjgmc": "庐江县人民医院东区",
            "hscjsj": aa.getFullYear() + "-" + getMonth(aa.getMonth()) + "-" + aa.getDate() + " 08:53:21",
            "sourceSys": null,
            "hsjcjg": "阴性",
            "dataSource": "1",
            "hsjcsj": aa.getFullYear() + "-" + getMonth(aa.getMonth()) + "-" + aa.getDate() + " 20:46:03",
            "isDelete": "**华",
            "createTime": aa.getFullYear() + getMonth(aa.getMonth()) + aa.getDate() + "3506",
            "isValid": "3426**********6475",
            "hscjjgmc" : "洋河民德小学",
            "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
            "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
        },
        {
            "id": "1710DB56E14DA0F7C9CF5FA0AE0B839E",
            "hsjcjgmc": "庐江县人民医院东区",
            "hscjsj": ee.getFullYear() + "-" + getMonth(ee.getMonth()) + "-" + ee.getDate() + " 09:22:30",
            "sourceSys": null,
            "hsjcjg": "阴性",
            "dataSource": "1",
            "hsjcsj": ee.getFullYear() + "-" + getMonth(ee.getMonth()) + "-" + ee.getDate() + " 20:09:37",
            "isDelete": "**华",
            "createTime": ee.getFullYear() + getMonth(ee.getMonth()) + ee.getDate() + "2512",
            "isValid": "3426**********6475",
            "hscjjgmc" : "洋河民德小学",
            "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
            "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
        },
        {
            "id": "1710DB56E14DA0F7C9CF5FA0AE0B839F",
            "hsjcjgmc": "庐江县人民医院东区",
            "hscjsj": ff.getFullYear() + "-" + getMonth(ff.getMonth()) + "-" + ff.getDate() + " 09:12:33",
            "sourceSys": null,
            "hsjcjg": "阴性",
            "dataSource": "1",
            "hsjcsj": ff.getFullYear() + "-" + getMonth(ff.getMonth()) + "-" + ff.getDate() + " 20:18:26",
            "isDelete": "**华",
            "createTime": ff.getFullYear() + getMonth(ff.getMonth()) + ff.getDate() + "3638",
            "isValid": "3426**********6475",
            "hscjjgmc" : "洋河民德小学",
            "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
            "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
        }
    ]
    $done({body: JSON.stringify(obj)})
} else {
    $done({})
}