export default function datetimeParser(datetimestr){
    // 2019-11-27T01:32:23.023Z
    let to_month = {
        "01" : "Jan",
        "02" : "Feb",
        "03" : "Mar",
        "04" : "Apr",
        "05" : "May",
        "06" : "Jun",
        "07" : "Jul",
        "08" : "Aug",
        "09" : "Sep",
        "10" : "Oct",
        "11" : "Nov",
        "12" : "Dec"
    }
    let month = datetimestr.slice(5,7)
    let day = datetimestr.slice(8,10)
    return to_month[month] + " " + day
};