import fetch from 'isomorphic-unfetch'

export default async url => {
  // @todo try/catch
  return await fetch(url).then(res => res.json())
}
