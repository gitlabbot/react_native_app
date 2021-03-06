// let env = require('../env')

export const generator = (mocker) => {
    if (typeof mocker.status === 'undefined' || typeof mocker.status === 'string' || mocker.status === 1 || (mocker.status >= 200 && mocker.status < 300)) {
      return Promise.resolve({
        request: {
          response: JSON.stringify(mocker)
        }
      })
    } else {
      return Promise.reject({
        response: {
          data: mocker
        }
      })
    }
  }

export const apiBaseURL = 'http://192.168.100.107:8081/'