//add static methods here

class Formatter {

  static capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(sentence) {
    let exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let sentenceArr = sentence.split(' ')
    let mapSentence = []

    let newSentence = sentenceArr.map(word => {
      if (exception.includes(word)) {
        mapSentence.push(word.toLowerCase())
      } else {
        mapSentence.push(word.slice(0, 1).toUpperCase() + word.slice(1))
      }
    })
    let firstWord = mapSentence[0].slice(0, 1).toUpperCase() + mapSentence[0].slice(1)
    mapSentence.splice(0, 1, firstWord)
    return mapSentence.join(' ')
  }

}