const mongoose = require('mongoose')
import chalk from 'chalk';
mongoose.connect(process.env.mongoose).then( (err) => {
    if (!err) {
        console.log(chalk.yellow('[DATABASE]') + chalk.green(' Connected Successfully'))
    } else {
        console.log(chalk.yellow('[DATABASE]') + chalk.red(' Connection Failed'))
    }
}
)