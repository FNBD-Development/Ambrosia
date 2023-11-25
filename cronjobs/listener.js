const ua = require('../mongoose/schema/uptime_array')
const md = require('../mongoose/schema/monitor_data')
const dayjs = require('dayjs')
const nodecron = require('node-cron')
const User = require("../mongoose/schema/user");
const cronxchange = require('../utilities/cronchange')
const axios = require("axios")
import chalk from "chalk"

console.log(chalk.blueBright("[CRON]") + chalk.green("Loaded"));
async function monitorService() {
   const asd = await md.find()
   asd.forEach( async (element) => {
      const A = await md.findOne({ name: element.name })
      nodecron.schedule(`${cronxchange(A.intrvl)}`, async () => {
         const start = Date.now()
         axios.get("https://"+element.monitorurl).then( async(response, error) => {
            console.log(chalk.blueBright("[WatchDawg]") + chalk.white(" Pinged "+ element.name+ " Successfully, no issues"));
               const end = Date.now()
               var conditions = { name: element.name };
               var update = { uptime: element.uptime + 1, currentStatus: true };
              await md.updateOne(conditions, update)
              await ua.updateOne({ name: element.name },
                  {
                     $push: { data: { status: true, ping:  end - start, unix: Date.now() } }
                  })
               const mdd = await md.findOne({ name: element.name })
               if (mdd.cert_check == true) {
                  const cert = response.request.connection.getPeerCertificate();
                  const validity = cert.validity;
                  const validUntil = new Date(validity.notAfter);
                  md.updateOne({ name: element.name }, {
                     cert_expires: dayjs(validUntil).format("MM/DD/YYYY")
                  })

                  if (dayjs(validUntil).diff(dayjs(), 'day') <= 5) {
                     User.forEach((elem) => {
                        User.updateOne(
                           { name: elem.username },
                           { $push: { inbox: { type: "warn", discription: `${element.names}'s certificate expires in 5 days` } } }
                        );
                     })
                     // create transporter object with smtp server details
                     const hconfigs = require('../mongoose/schema/hostconfigurations.js')

                     if (mdd.cert_check == true) {
                        const transporter = nodemailer.createTransport({
                           host: hconfigs[0].smtp_host,
                           port: hconfigs[0].smtp_port,
                           auth: {
                              user: hconfigs[0].smtp_user,
                              pass: hconfigs[0].smtp_pasw
                           }
                        });
                        User.forEach((elem) => {
                           transporter.sendMail({
                              from: `notifier@${process.env.FQDN.toString().replace("https://", "").replace("http://", "")}`,
                              to: elem.email,
                              subject: `${element.name}'s, domain is going to expire in 5 days`,
                           })
                        });
                     }
                  }
               }
            
         }).catch( (error) => {
            if (error.response) {
               var conditions = { name: element.name };
               var update = { downtime: element.downtime + 1, currentStatus: false };
               md.updateOne(conditions, update)
               ua.updateOne({ name: element.name },
                  {
                     $push: { data: { status: false, ping: 0, unix: Date.now()} }
                  })
            } 
         })
      })
   });
}

monitorService()