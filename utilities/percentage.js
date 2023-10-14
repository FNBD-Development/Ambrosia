import { uptime } from "process";

const math = require('mathjs')
const UptimeArray = require("../mongoose/schema/uptime_array.js")
const MonitorData = require('../mongoose/schema/monitor_data.js')

//                 Array Looks                //
//  [ {time: "Unix TimeStamp", status: "Online/Offline", ping: start-end},{time: "Unix TimeStamp", status: "Online/Offline", ping: start-end}, ]
//  
function uptime_calc(name) {
    const names = name
    UptimeArray.find({ name: names }, (err, monitorData) => {
        if (err) {
            console.error('error:', err);
        } else {
            const onlineEntries = monitorData.filter(entry => entry.status === "Online");
            const offlineEntries = monitorData.filter(entry => entry.status === "Offline");
            const isOnline = onlineEntries.length
            const isOffline = offlineEntries.length
            MonitorData.find({ name: names }, (err, MD) => {
             if (err) { 
                console.error('error:', err);
             } else {
                const percentage = (MD.uptime / MD.downtime * 100)
                return percentage
             }
            })
        }
      });
}

module.export = uptime_calc