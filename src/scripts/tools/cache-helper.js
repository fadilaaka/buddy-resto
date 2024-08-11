import CONFIG from '../data/config'

const CacheHelper = {
  async cachingAppShell (requests) {
    const cache = await this._openCache()
    await cache.addAll(requests)
    const asset = [
      ...requests,
      'https://code.jquery.com/jquery-3.5.1.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      'https://fonts.googleapis.com/css2?family=Merienda&display=swap',
      'https://fonts.googleapis.com/css2?family=Lato&display=swap',
      'https://fonts.googleapis.com/css2?family=Acme&display=swap'
    ]
    await cache.addAll(asset)
  },

  async deleteOldCache () {
    const cacheNames = await caches.keys()
    cacheNames
      .filter((name) => name !== CONFIG.CACHE_NAME)
      .map((filteredName) => caches.delete(filteredName))
  },

  async revalidateCache (request) {
    const response = await caches.match(request)

    if (response) {
      this._fetchRequest(request)
      return response
    }
    return this._fetchRequest(request)
  },

  async _openCache () {
    return caches.open(CONFIG.CACHE_NAME)
  },

  async _fetchRequest (request) {
    const response = await fetch(request)

    if (!response || response.status !== 200) {
      return response
    }
    await this._addCache(request)
    return response
  },

  async _addCache (request) {
    const cache = await this._openCache()
    cache.add(request)
  }
}

export default CacheHelper
