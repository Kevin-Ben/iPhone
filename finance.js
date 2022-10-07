var body = $response.body

if (body) {
    var obj = {
        "$SysResult$": {
            "$SysCode$": "500",
            "$Content$": "{\"ErrCode\":\"200\",\"ErrMsg\":\"\",\"InterfaceName\":\"\",\"Result\":{\"sumFinance\":683000.68,\"listFinance\":[{\"AccountNo\":\"j5WWE7OT5d2C2imXWNMkci8wVBL3mV6dEMGFbwjcMeo_\",\"EndAccNo\":\"\",\"FinanceCode\":\"ZY030101\",\"FinanceName\":\"中银理财惠享天天进阶版B\",\"FinanceType\":\"H A1\",\"CurrencyID\":\"10\",\"Balance\":683000.68,\"EndDate\":\"2120-01-19\",\"ActNbr\":\"4087000B6T\",\"RipAct\":\"87\",\"PositionGains\":753.34,\"YieldType\":\"D\",\"GainsType\":\"A\",\"RateFlag\":\"0\",\"NewSys\":true,\"OnTheWay\":false,\"IsShowGainAmt\":\"Y\",\"OpenDateRemark\":\"今日可赎\",\"SumBalance\":683000.68}]}}"
        }
    }
    $done({body: JSON.stringify(obj)})
} else {
    $done({})
}