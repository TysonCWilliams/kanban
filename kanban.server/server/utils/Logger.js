function log(type, content) {
  if (process.env.NODE_ENV === 'dev') {
    // eslint-disable-next-line no-console
    console[type](...content)
  } else {
    // TODO SEND LOGS TO EXTERNAL SERVICE
  }
}

export const logger = {
  log() {
    log('log', arguments)
  },
  error() {
    log('error', arguments)
  },
  warn() {
    log('warn', arguments)
  },
  assert() {
    log('assert', arguments)
  },
  trace() {
    log('trace', arguments)
  }
}
