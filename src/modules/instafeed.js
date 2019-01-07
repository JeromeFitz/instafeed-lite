import buildUrl from './buildUrl'
import getData from './getData'

export default options => {
  let url = null,
    data = {}

  if (typeof options.accessToken !== 'string' && !options.url) {
    throw new Error('Missing accessToken.')
  }

  if (typeof document !== 'undefined' && document !== null) {
    url = options.url || buildUrl(options)
    data = getData(url)
  }

  return data
}
