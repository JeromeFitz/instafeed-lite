import invariant from 'invariant'

import buildUrl from './modules/buildUrl'
import instafeed from './modules/instafeed'

export default async params => {
  const defaults = {
    accessToken: null,
    clientId: null,
    get: 'user', // location, popular, tagged, user
    limit: 60, // Max
    locationId: null,
    resolution: 'thumbnail', // thumbnail, low_resolution, standard_resolution
    sortBy: 'none', // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random,
    tagName: null,
    userId: null,
  }

  invariant(
    typeof params === 'object',
    'You must pass an Object of options to the instafeed-lite function',
  )

  const options = Object.assign(defaults, params)
  return instafeed(options)
}

export { buildUrl }
