import UAParser from 'ua-parser-js'
import Fingerprint2 from 'fingerprintjs2'

export const getFingerprint = () => {
  return new Promise((res, rej) => {
    async function getHash() {
      const options = {
        excludes: {
          plugins: true,
          localStorage: true,
          adBlock: true,
          screenResolution: true,
          availableScreenResolution: true,
          enumerateDevices: true,
          pixelRatio: true,
          doNotTrack: true,
        },
        preprocessor: (key, value) => {
          if (key === 'userAgent') {
            const parser = new UAParser(value)
            return `${parser.getOS().name}::${parser.getBrowser().name}::${
              parser.getEngine().name
            }`
          }
          return value
        },
      }
      try {
        const components = await Fingerprint2.getPromise(options)
        const values = components.map((component) => component.value)
        console.log('fingerprint hash components', components)
        return String(Fingerprint2.x64hash128(values.join(''), 31))
      } catch (e) {
        rej(e)
      }
    }
    if (window.requestIdleCallback) {
      console.log('requestIdleCallback')
      requestIdleCallback(async () => res(await getHash()))
    } else {
      console.log('setTimeout')
      setTimeout(async () => res(await getHash()), 500)
    }
  })
}
