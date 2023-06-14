import chalk from 'chalk'

const log = console.log
const error = (...args) => log(chalk.red('[ERROR]', ...args))
const success = (...args) => log(chalk.green('[SUCCESS]', ...args))
const warning = (...args) => log(chalk.yellow('[WARNING]', ...args))
const info = (...args) => log(chalk.blue('[INFO]', ...args))


export default { log, error, success, warning, info }