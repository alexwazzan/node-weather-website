const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/debef9f02feb7eadfcd778c874d03f44/' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Error: ' + body.error, undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability * 100 + '% chance of rain. The high and low temperatures of today are ' + body.daily.data[0].temperatureHigh + ' and ' + body.daily.data[0].temperatureLow + ' degrees, respectively.')
        }
    })
}

module.exports = forecast