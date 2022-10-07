var body = $response.body
var curDate = new Date();
var ee = new Date(curDate.getTime() - 24 * 60 * 60 * 1000);
var dd = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 2);
var cc = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 4);
var bb = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 6);
var aa = new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * 8);

var treeMap = [
    {
        "test_orgname": "上海中检医学检验所（气膜）",
        "sample_date": "15:08:50",
        "collect_date": "18:06:21",
        "report_date": "20:28:11",
    },
    {
        "test_orgname": "上海中检医学检验所（气膜）",
        "sample_date": "09:17:03",
        "collect_date": "11:54:53",
        "report_date": "16:00:42",
    },
    {
        "test_orgname": "上海中检医学检验所（气膜）",
        "sample_date": "09:22:15",
        "collect_date": "11:56:47",
        "report_date": "16:15:03",
    },
    {
        "test_orgname": "上海中检医学检验所（气膜）",
        "sample_date": "16:03:08",
        "collect_date": "18:11:05",
        "report_date": "20:18:12",
    },
    {
        "test_orgname": "上海解码医学检验所（气膜实验室）",
        "sample_date": "15:36:25",
        "collect_date": "18:09:02",
        "report_date": "20:32:15",
    }
]

var tpl = {
    "nat_result_name": "阴性",
    "check_project": "核酸",
    "sample_type_name": "咽拭子",
    "sample_date": "",
    "nat_result": "1",
    "test_orgname": "",
    "collect_date": "",
    "card_type_name": "身份证",
    "collect_mode": "1",
    "sample_orgname": "",
    "name": "陈德华",
    "report_date": ""
}

var data = []

var i = 0

for (k in treeMap) {
    i = k + 1
    data[k] = tpl
    data[k]["test_orgname"] = treeMap[k]["test_orgname"]
    data[k]["sample_date"] = showLocalTime(new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * i), treeMap[k]["sample_date"])
    data[k]["collect_date"] = showLocalTime(new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * i), treeMap[k]["collect_date"])
    data[k]["report_date"] = showLocalTime(new Date(curDate.getTime() - 24 * 60 * 60 * 1000 * i), treeMap[k]["report_date"])
}

function showLocalTime(date, time) {

    if (date.getMonth() < 12) {
        return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + time
    }

    return date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + time

}

if (body) {
    var obj = JSON.parse($response.body)
    obj.data = data
    // obj.data = [
    //     {
    //         "nat_result_name": "阴性",
    //         "check_project": "核酸",
    //         "sample_type_name": "咽拭子",
    //         "sample_date": showLocalTime(ee, "15:08:50"),
    //         "nat_result": "1",
    //         "test_orgname": "上海中检医学检验所（气膜）",
    //         "collect_date": showLocalTime(ee, "18:06:21"),
    //         "card_type_name": "身份证",
    //         "collect_mode": "1",
    //         "sample_orgname": "",
    //         "name": "陈德华",
    //         "report_date": showLocalTime(ee, "20:28:11")
    //     },
    //     {
    //         "nat_result_name": "阴性",
    //         "check_project": "核酸",
    //         "sample_type_name": "咽拭子",
    //         "sample_date": showLocalTime(dd, "09:17:03"),
    //         "nat_result": "1",
    //         "test_orgname": "上海中检医学检验所（气膜）",
    //         "collect_date": showLocalTime(dd, "11:54:53"),
    //         "card_type_name": "身份证",
    //         "collect_mode": "10",
    //         "sample_orgname": "",
    //         "name": "陈德华",
    //         "report_date": showLocalTime(dd, "16:00:42")
    //     },
    //     {
    //         "nat_result_name": "阴性",
    //         "check_project": "核酸",
    //         "sample_type_name": "咽拭子",
    //         "sample_date": showLocalTime(cc, "09:20:54"),
    //         "nat_result": "1",
    //         "test_orgname": "上海中检医学检验所（气膜）",
    //         "collect_date": showLocalTime(cc, "11:50:27"),
    //         "card_type_name": "身份证",
    //         "collect_mode": "10",
    //         "sample_orgname": "",
    //         "name": "陈德华",
    //         "report_date": showLocalTime(cc, "15:10:16")
    //     },
    //     {
    //         "nat_result_name": "阴性",
    //         "check_project": "核酸",
    //         "sample_type_name": "咽拭子",
    //         "sample_date": showLocalTime(bb, "09:35:05"),
    //         "nat_result": "1",
    //         "test_orgname": "上海中检医学检验所（气膜）",
    //         "collect_date": showLocalTime(bb, "11:55:32"),
    //         "card_type_name": "身份证",
    //         "collect_mode": "10",
    //         "sample_orgname": "",
    //         "name": "陈德华",
    //         "report_date": showLocalTime(bb, "15:35:22")
    //     },
    //     {
    //         "nat_result_name": "阴性",
    //         "check_project": "核酸",
    //         "sample_type_name": "咽拭子",
    //         "sample_date": showLocalTime(aa, "10:12:36"),
    //         "nat_result": "1",
    //         "test_orgname": "上海中检医学检验所（气膜）",
    //         "collect_date": showLocalTime(aa, "11:42:32"),
    //         "card_type_name": "身份证",
    //         "collect_mode": "10",
    //         "sample_orgname": "",
    //         "name": "陈德华",
    //         "report_date": showLocalTime(aa, "16:08:36")
    //     }
    // ]
    $done({body: JSON.stringify(obj)})
} else {
    $done({})
}
