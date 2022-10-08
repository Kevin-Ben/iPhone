var body = $response.body
var curDate = new Date();
var bb = new Date(curDate.getTime() - 24 * 60 * 60 * 1000);
var aa = new Date(curDate.getTime() - 24 * 60 * 60 * 1000);
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
            "hsjcjgmc": "庐江县人民医院",
            "hscjsj": bb.getFullYear() + "-" + getMonth(dd.getMonth()) + "-" + bb.getDate() + " 05:55:21",
            "sourceSys": null,
            "hsjcjg": "阴性",
            "dataSource": "1",
            "hsjcsj": bb.getFullYear() + "-" + getMonth(bb.getMonth()) + "-" + bb.getDate() + " 11:15:36",
            "isDelete": "**华",
            "createTime": bb.getFullYear() + getMonth(bb.getMonth()) + bb.getDate() + "4322",
            "isValid": "3426**********6475",
            "hscjjgmc": "浮山高速道口",
            "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
            "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
        },
        {
            "id": "84017728ECD54F5395C94F314F361B56",
            "hsjcjgmc": "上海中检医学检验所（气膜）",
            "hscjsj": null,
            "sourceSys": null,
            "hsjcjg": "阴性",
            "dataSource": "1",
            "hsjcsj": aa.getFullYear() + "-" + getMonth(aa.getMonth()) + "-" + aa.getDate() + " 06:54:22",
            "isDelete": "**华",
            "createTime": aa.getFullYear() + getMonth(aa.getMonth()) + aa.getDate() + "0016",
            "isValid": "3426**********6475",
            "hscjjgmc": null,
            "name": "7c8501ec43a2aeeb723ad1d8c1d8d31c",
            "idCardNo": "6da2b1b222a2cd52dd814bbbde31fd9eaf9a289f3ed77c26690e24097a2ed75e"
        }

    ]
    $done({body: JSON.stringify(obj)})
} else {
    $done({})
}