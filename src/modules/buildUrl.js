export default options => {
  let base = 'https://api.instagram.com/v1',
    endpoint,
    url

  switch (options.get) {
    case 'popular':
      endpoint = 'media/popular'
      break
    case 'tagged':
      if (!options.tagName) {
        throw new Error("No tag name specified. Use the 'tagName' option.")
      }
      endpoint = `tags/${options.tagName}/media/recent`
      break
    case 'location':
      if (!options.locationId) {
        throw new Error("No location specified. Use the 'locationId' option.")
      }
      endpoint = `locations/${options.locationId}/media/recent`
      break
    case 'user':
      if (!options.userId) {
        throw new Error("No user specified. Use the 'userId' option.")
      }
      endpoint = `users/${options.userId}/media/recent`
      break
    default:
      throw new Error(`Invalid option for get: ${options.get}.`)
  }

  url = `${base}/${endpoint}`

  if (options.accessToken != null) {
    url = `${url}?access_token=${options.accessToken}`
  } else {
    url = `${url}?client_id=${options.clientId}`
  }

  if (options.limit != null) {
    url = `${url}&count=${options.limit}`
  }

  return url
}
