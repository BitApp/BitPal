const window = require('svgdom')
// your font directory
.setFontDir('./fonts')
// map the font-family to the file
.setFontFamilyMappings({'Arial': 'arial.ttf', 'DejaVuSans':'DejaVuSans.ttf', 'Verdana':'verdana.ttf', 'sans-serif':'sansserif.ttf'})
// you can preload your fonts to avoid the loading delay
// when the font is used the first time
.preloadFonts()

// const { convert } = require('convert-svg-to-png')
const SVG      = require('svg.js')(window)
const document = window.document

const attrs = {
  fontFamily: 'Verdana,DejaVuSans,sans-serif,Arial',
  bg: {
    icon: '#4b4b4b',
    eth:'#828384',
    bch:'#f5933e',
    unknown:'#999'
  },
  text: {
    paddingLeft: 8,
    paddingTop: 2.4
  }
}
const svgs = {
  unknown: `<path fill="#fff" style="transform:scale(0.7) translate(6px,4px);width:20px" d="M18.9,11.7c0.1-0.6,0.2-1.2,0.2-1.8c0-0.9-0.1-1.8-0.4-2.6C19.8,6.3,20.3,5.4,20,5c-0.3-0.4-1.2-0.4-2.5-0.1
  c-0.9,0.2-2,0.6-3.2,1.1l-0.8-1.3c0.9-0.5,1.8-0.9,2.7-1.3c-1.6-1.6-3.9-2.6-6.4-2.6c-5.1,0-9.2,4.1-9.2,9.2
  c0,0.7,0.1,1.5,0.3,2.2c1.3-0.9,2.7-1.8,4.2-2.8L4.9,8.8c0.1-0.3,0.3-0.7,0.5-1L4,5.6C5.1,5,6.4,5.2,7.2,6c0,0,0,0,0,0
  c1.7-1,3.7-0.9,5.2,0c0,0,0,0,0,0c0,1.8-0.9,3.6-2.6,4.5c0,0,0,0,0,0c-0.6,0.3-1.1,0.5-1.7,0.6l0,0c0.6,0.1,1.2,0.1,1.8-0.1
  c0,0.9-0.4,1.9-1.3,2.4l-1.3-2.2c-0.4,0-0.7,0-1.1-0.1l-0.3-0.5c-1.8,1.2-3.3,2.4-4.3,3.3c-1.2,1.1-1.7,2-1.4,2.5
  c0.3,0.5,1.4,0.4,3.1-0.1c1,1,2.3,1.8,3.6,2.3c0.9,0.3,1.9,0.5,2.9,0.5C14.3,19.1,18.1,15.9,18.9,11.7z"/>`,
  eth: `<path fill="#fff" style="transform:scale(0.7) translate(6px,4px);width:20px" d="M10,19.5l-6-8.6l6,3.6l6-3.6L10,19.5z M10,13.5L4,9.8L10,0l6,9.8L10,13.5z"/>`,
  bch: `<path fill="#fff" style="transform:scale(0.7) translate(6px,4px);width:20px" d="M7.891,2.66L6.627,0l-1.65,0.826l1.239,2.608c-0.431,0.222-0.867,0.457-1.3,0.691L3.661,1.484L2.014,2.307l1.273,2.612
	C3.13,5.153,3.025,5.225,2.8,5.361C2.65,5.451,1.717,5.906,0,6.727l0.874,1.731c0,0,1.199-0.646,1.19-0.613
	c0.664-0.342,1.072-0.072,1.301,0.225l1.53,3.034c-0.071-0.148,0.646,1.271,2.149,4.263c0.075,0.221,0.118,0.614-0.345,0.854
	c0.03,0.008-1.192,0.613-1.192,0.613l0.65,2.104l2.134-1.099c0.397-0.203,0.624-0.324,1.009-0.52L10.609,20l1.683-0.82l-1.306-2.677
	c0.455-0.222,0.898-0.426,1.323-0.645l1.291,2.646l1.631-0.796l-1.294-2.653c2.677-1.575,4.381-3.423,3.329-6.105
	c-0.846-2.161-2.289-2.575-4.041-2.142c0.709-0.968,0.878-2.117,0.03-3.45C12.065,1.519,10.1,1.754,7.891,2.66L7.891,2.66z
	 M13.903,10.28c1.016,2.013-2.586,3.578-3.696,4.151l-1.799-3.569C9.519,10.29,12.843,8.181,13.903,10.28z M10.601,5.638
	c0.923,1.832-2.092,3.114-3.017,3.59L5.951,5.992C6.876,5.516,9.637,3.728,10.601,5.638z"/>`
}

module.exports = {
  create: async function(ctx, next) {
    const query = ctx.request.query
    const symbol = (ctx.params.symbol || query.symbol || 'unknown').toLowerCase()
    const amount = (ctx.params.amount || query.amount) * 1
    const str = ctx.params.text || query.text || 'unknown'
    const color = query.color
    const style = (ctx.params.style || query.style) || 'default'
    // create svg.js instance
    const draw = SVG(document.documentElement)
    draw.clear()

    if (/^github\.flat$/i.test(style)) {
      // use svg.js as normal
      let text = draw.text(str).fill('white')
      text.font({
        family: attrs.fontFamily,
        size: 12
      })
      text.build(true).move(24 + attrs.text.paddingLeft, attrs.text.paddingTop)
      let textShadow = draw.text(str).fill('black')
      textShadow.font({
        family: attrs.fontFamily,
        size: 12
      }).opacity(0.25)
      textShadow.build(true).move(24 + attrs.text.paddingLeft + 1, attrs.text.paddingTop + 1)

      let textBox = text.bbox()
      let iconRect = draw.rect(24, 20).fill(attrs.bg.icon)
      let rightRect = draw.rect(textBox.width + 18, 20).fill(color || attrs.bg[symbol] || attrs.bg.icon).move(24, 0)
      draw.svg(svgs[symbol])

      text.before(iconRect)
      text.before(rightRect)
      text.before(textShadow)
      textShadow.before(iconRect)
      textShadow.before(rightRect)

      draw.width(iconRect.bbox().width + rightRect.bbox().width).height(20)

      ctx.status = 200
      ctx.type = 'image/svg+xml;charset=utf-8;'
      ctx.body = draw.svg()

    } else if (/^github\.classic$/i.test(style) || /^github$/i.test(style)) {
      let text = draw.text(str).fill('white')
      text.font({
        family: attrs.fontFamily,
        size: 12
      })
      text.build(true).move(24 + attrs.text.paddingLeft, attrs.text.paddingTop)
      let textShadow = draw.text(str).fill('black')
      textShadow.font({
        family: attrs.fontFamily,
        size: 12
      }).opacity(0.25)
      textShadow.build(true).move(24 + attrs.text.paddingLeft + 1, attrs.text.paddingTop + 1)
      let textBox = text.bbox()
      let iconRect = draw.rect(24, 20).fill(attrs.bg.icon)
      let rightRect = draw.rect(textBox.width + 18, 20).fill(color || attrs.bg[symbol] || attrs.bg.icon).move(24, 0)
      let hightlight = draw.gradient('linear', function(stop) {
        stop.at({ offset: 0, color: '#eee', opacity: 0.1 })
        stop.at({ offset: 1, opacity: 0.1 })
      })
      hightlight.from(0, 0).to(0, 1)
      draw.rect(iconRect.bbox().width + rightRect.bbox().width, 20).fill(hightlight)
      draw.svg(svgs[symbol])

      text.before(iconRect)
      text.before(rightRect)
      text.before(textShadow)
      textShadow.before(iconRect)
      textShadow.before(rightRect)

      draw.width(iconRect.bbox().width + rightRect.bbox().width).height(20)

      var ellipse = draw.rect(iconRect.bbox().width + rightRect.bbox().width, 20).radius(4).fill('#fff')

      var mask = draw.mask().add(ellipse)
      iconRect.maskWith(mask)
      rightRect.maskWith(mask)

      ctx.status = 200
      ctx.type = 'image/svg+xml;charset=utf-8;'

      //const png = await convert(draw.svg());
      // ctx.set('Content-Type', 'image/png');
      ctx.body = draw.svg()

    } else {
      ctx.status = 200
      ctx.body = 'bitapp payment button'
    }
  }
}