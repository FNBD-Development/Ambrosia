const mongoose = require('mongoose')
const chalk = require('chalk')
mongoose.connect(process.env.mongoose).then(
 console.log(chalk.yellow('[DATABASE]') + chalk.green('Connected Successfully'))
)