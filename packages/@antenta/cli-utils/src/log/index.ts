import log from 'npmlog'

log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info'

log.heading = 'antenta-cli'

log.addLevel('success', 2000, { fg: 'green', bold: true })
log.addLevel('notice', 2000, { bg: 'black', fg: 'blue' })

export default log