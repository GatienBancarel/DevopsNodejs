import { callbackify } from "util";

var level = require('level')

export class MetricsDB {

    public static db = level("Metrics")

	public static insert(metric:number, id: string) {
	   MetricsDB.db.put( id+ (new Date().getTime()), metric, function (err) {
            if (err) return console.log('insertion fail', err) // some kind of I/O error
            else console.log(id+ (new Date().getTime()))
        })
    }

    public static delete(id: string, callback: () => void) {
	    MetricsDB.db.del( id, function (err) {
            if (err) return console.log('delete fail', err) // some kind of I/O error
            callback()
        })
    }

    public static get(id: string, callback: (listMetrics: any) => void) {
        console.log("get metrics...")
        var listMetrics = []
        var option = {start: id, end: id+"~"}
        var readStream = MetricsDB.db.createReadStream(option);
        readStream
        .on('data', function(data) {
                listMetrics.push(data)
                console.log(data.key + " = " + data.value)
        })
        .on('end', function() {
            callback(listMetrics)
        })
    }

}