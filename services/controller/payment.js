// const request = require('request-promise')
//const conf = require('../config')
// const util = require('../util/util')
const window   = require('svgdom')
// your font directory
.setFontDir('./fonts')
// map the font-family to the file
.setFontFamilyMappings({'Arial': 'arial.ttf'})
// you can preload your fonts to avoid the loading delay
// when the font is used the first time
.preloadFonts()

const SVG      = require('svg.js')(window)
const document = window.document
const attrs = {
  bg: {
    color: '#ddd'
  },
  text: {
    paddingLeft: 6,
    paddingTop: 3.5
  }
}
const svgs = {
  eth: `<path fill="#fff" style="transform:scale(0.7) translate(6px,4px)" d="M6,19.5l-6-8.6l6,3.6l6-3.6L6,19.5z M6,13.5L0,9.8L6,0l6,9.8L6,13.5z"/>`
}

module.exports = {
  create: async function(ctx, next) {
    const query = ctx.request.query
    const symbol = ctx.params.symbol
    const amount = ctx.params.amount * 1
    const str = ctx.params.text
    // const color = ctx.params.text
    const style = query.style || 'default'
    // create svg.js instance
    const draw = SVG(document.documentElement)

    if (/github/i.test(style)) {
      // use svg.js as normal
      let text = draw.text(str).fill('white')
      text.font({
        family: 'Arial',
        size: 12
      })
      text.build(true).move(20 + attrs.text.paddingLeft, attrs.text.paddingTop)
      let textBox = text.bbox()
      let iconRect = draw.rect(20, 20).fill('#4b4b4b')
      let rightRect = draw.rect(textBox.width + 18, 20).fill('red').move(20, 0)
      draw.svg(svgs.eth)

      text.before(iconRect)
      text.before(rightRect)

      ctx.status = 200
      ctx.body = draw.svg()
    } else {
      ctx.status = 200
      ctx.body = 'bitapp payment button'
    }
  }
}