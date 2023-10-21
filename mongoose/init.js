const mongoose = require('mongoose')
import chalk from 'chalk';
mongoose.connect(process.env.mongoose).then(
        console.log(chalk.yellow('[DATABASE]') + chalk.green(' Connected Successfully'))
)