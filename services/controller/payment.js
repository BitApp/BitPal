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
require('svg.filter.js')
const document = window.document

const attrs = {
  fontFamily: 'Verdana,DejaVuSans,sans-serif,Arial',
  bg: {
    icon: '#4b4b4b',
    eth:'#555555',
    bch:'#ff7900',
    unknown:'#999'
  },
  textGithub: {
    paddingLeft: 8,
    paddingTop: 2.4
  },
  textDefault: {
    paddingLeft: 10,
    paddingTop: 11
  }
}
const svgs = {
  unknown: `<path fill="#fff" style="transform:scale(0.7) translate(6px,4px);width:20px" d="M18.9,11.7c0.1-0.6,0.2-1.2,0.2-1.8c0-0.9-0.1-1.8-0.4-2.6C19.8,6.3,20.3,5.4,20,5c-0.3-0.4-1.2-0.4-2.5-0.1
  c-0.9,0.2-2,0.6-3.2,1.1l-0.8-1.3c0.9-0.5,1.8-0.9,2.7-1.3c-1.6-1.6-3.9-2.6-6.4-2.6c-5.1,0-9.2,4.1-9.2,9.2
  c0,0.7,0.1,1.5,0.3,2.2c1.3-0.9,2.7-1.8,4.2-2.8L4.9,8.8c0.1-0.3,0.3-0.7,0.5-1L4,5.6C5.1,5,6.4,5.2,7.2,6c0,0,0,0,0,0
  c1.7-1,3.7-0.9,5.2,0c0,0,0,0,0,0c0,1.8-0.9,3.6-2.6,4.5c0,0,0,0,0,0c-0.6,0.3-1.1,0.5-1.7,0.6l0,0c0.6,0.1,1.2,0.1,1.8-0.1
  c0,0.9-0.4,1.9-1.3,2.4l-1.3-2.2c-0.4,0-0.7,0-1.1-0.1l-0.3-0.5c-1.8,1.2-3.3,2.4-4.3,3.3c-1.2,1.1-1.7,2-1.4,2.5
  c0.3,0.5,1.4,0.4,3.1-0.1c1,1,2.3,1.8,3.6,2.3c0.9,0.3,1.9,0.5,2.9,0.5C14.3,19.1,18.1,15.9,18.9,11.7z"/>`,
  ethGithub: `<path fill="#fff" style="transform:scale(0.7) translate(6px,4px);width:20px" d="M10,19.5l-6-8.6l6,3.6l6-3.6L10,19.5z M10,13.5L4,9.8L10,0l6,9.8L10,13.5z"/>`,
  bchGithub: `<path fill="#fff" style="transform:scale(0.7) translate(7px,4px);width:20px" d="M7.891,2.66L6.627,0l-1.65,0.826l1.239,2.608c-0.431,0.222-0.867,0.457-1.3,0.691L3.661,1.484L2.014,2.307l1.273,2.612
	C3.13,5.153,3.025,5.225,2.8,5.361C2.65,5.451,1.717,5.906,0,6.727l0.874,1.731c0,0,1.199-0.646,1.19-0.613
	c0.664-0.342,1.072-0.072,1.301,0.225l1.53,3.034c-0.071-0.148,0.646,1.271,2.149,4.263c0.075,0.221,0.118,0.614-0.345,0.854
	c0.03,0.008-1.192,0.613-1.192,0.613l0.65,2.104l2.134-1.099c0.397-0.203,0.624-0.324,1.009-0.52L10.609,20l1.683-0.82l-1.306-2.677
	c0.455-0.222,0.898-0.426,1.323-0.645l1.291,2.646l1.631-0.796l-1.294-2.653c2.677-1.575,4.381-3.423,3.329-6.105
	c-0.846-2.161-2.289-2.575-4.041-2.142c0.709-0.968,0.878-2.117,0.03-3.45C12.065,1.519,10.1,1.754,7.891,2.66L7.891,2.66z
	 M13.903,10.28c1.016,2.013-2.586,3.578-3.696,4.151l-1.799-3.569C9.519,10.29,12.843,8.181,13.903,10.28z M10.601,5.638
  c0.923,1.832-2.092,3.114-3.017,3.59L5.951,5.992C6.876,5.516,9.637,3.728,10.601,5.638z"/>`,
  ethDefault:`
    <style type="text/css">
    .st0{fill:url(#Triangle-2_1_);}
    .st1{fill:url(#Triangle-2_2_);}
    .st2{fill:url(#Triangle_1_);}
    .st3{fill:url(#Triangle_2_);}
    .st4{fill:url(#Triangle_3_);}
    .st5{fill:url(#Triangle_4_);}
    </style>
    <g id="ETH" style="transform:scale(1.1) translate(12px,11px);width:40px">
    <g transform="translate(13.000000, 10.000000)">
        <linearGradient id="Triangle-2_1_" gradientUnits="userSpaceOnUse" x1="-12.3304" y1="11.4739" x2="-12.3304" y2="12.3991" gradientTransform="matrix(13.6047 0 0 -8.063 164.4451 96.2901)">
        <stop  offset="0" style="stop-color:#490DB1"/>
        <stop  offset="1" style="stop-color:#2A1860"/>
      </linearGradient>
      <polygon id="Triangle-2" class="st0" points="-3.3,-3.7 3.2,0.2 -3.3,4 -9.8,0.2 		"/>
      
        <linearGradient id="Triangle-2_2_" gradientUnits="userSpaceOnUse" x1="-12.3298" y1="11.5623" x2="-12.3298" y2="12.3185" gradientTransform="matrix(13.6047 0 0 -8.063 164.2561 97.2062)">
        <stop  offset="0" style="stop-color:#8A8A8A"/>
        <stop  offset="1" style="stop-color:#868686"/>
      </linearGradient>
      <polygon id="Triangle-2_5_" class="st1" points="-3.5,-2.8 3,1.1 -3.5,4.9 -10,1.1 		"/>
      
        <linearGradient id="Triangle_1_" gradientUnits="userSpaceOnUse" x1="-13.1396" y1="10.8252" x2="-13.1396" y2="11.7504" gradientTransform="matrix(6.8023 0 0 -14.6589 82.817 162.2484)">
        <stop  offset="0" style="stop-color:#F3F3F3"/>
        <stop  offset="1" style="stop-color:#E1E1E1"/>
      </linearGradient>
      <polygon id="Triangle" class="st2" points="-3.3,-10 -3.3,4 -9.8,0.2 		"/>
      
        <linearGradient id="Triangle_2_" gradientUnits="userSpaceOnUse" x1="-12.7022" y1="9.2491" x2="-13.6257" y2="9.2491" gradientTransform="matrix(6.8023 0 0 9.3451 89.4304 -80.9069)">
        <stop  offset="0" style="stop-color:#DEDEDE"/>
        <stop  offset="1" style="stop-color:#979797"/>
      </linearGradient>
      <polygon id="Triangle_11_" class="st3" points="-3.5,10 3,1.1 -3.5,4.9 		"/>
      
        <linearGradient id="Triangle_3_" gradientUnits="userSpaceOnUse" x1="-9.8616" y1="8.8026" x2="-9.8616" y2="9.7042" gradientTransform="matrix(-6.8023 0 0 9.3451 -73.8257 -80.9069)">
        <stop  offset="0" style="stop-color:#E0E0E0"/>
        <stop  offset="1" style="stop-color:#CDCDCD"/>
      </linearGradient>
      <polygon id="Triangle_10_" class="st4" points="-3.5,10 -10,1.1 -3.5,4.9 		"/>
      
        <linearGradient id="Triangle_4_" gradientUnits="userSpaceOnUse" x1="-10.2626" y1="11.2717" x2="-9.3392" y2="11.2717" gradientTransform="matrix(-6.8023 0 0 -14.6589 -66.8344 162.2484)">
        <stop  offset="0" style="stop-color:#D9D9D9"/>
        <stop  offset="1" style="stop-color:#A7A7A7"/>
      </linearGradient>
      <polygon id="Triangle_9_" class="st5" points="-3.3,-10 -3.3,4 3.2,0.2 		"/>
    </g>
    </g>`,
  bchDefault:`<path fill="#fff" style="transform:scale(1.1) translate(12px,11px);width:40px" d="M7.891,2.66L6.627,0l-1.65,0.826l1.239,2.608c-0.431,0.222-0.867,0.457-1.3,0.691L3.661,1.484L2.014,2.307l1.273,2.612
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
    const address = ctx.params.address || query.address
    const amount = (ctx.params.amount || query.amount) * 1
    const str = ctx.params.text || query.text || 'unknown'
    const color = query.color
    const style = (ctx.params.style || query.style) || 'default'
    // create svg.js instance
    const draw = SVG(document.documentElement)
    draw.clear()
    let link = draw.link('https://payment.bitapp.net/install').target('_blank')
    const hash = {
      'eth': 1e18,
      'bch': 1e8
    }
    link.attr('onclick', 
    `if(window.bitapp){
      bitapp.wallet.requestPay('', '${symbol.toLowerCase()}', '${amount * hash[symbol]}', '${address}', ${null}, '', '${str}')
      return false
    }`)

    if (/^github\.flat$/i.test(style)) {
      // use svg.js as normal
      let text = link.text(str).fill('white')
      text.font({
        family: attrs.fontFamily,
        size: 12
      })
      text.move(24 + attrs.textGithub.paddingLeft, attrs.textGithub.paddingTop)
      let textShadow = link.text(str).fill('black')
      textShadow.font({
        family: attrs.fontFamily,
        size: 12
      }).opacity(0.25)
      textShadow.move(24 + attrs.textGithub.paddingLeft + 1, attrs.textGithub.paddingTop + 1)

      let textBox = text.bbox()
      let iconRect = link.rect(24, 20).fill(attrs.bg.icon)
      let rightRect = link.rect(textBox.width + 18, 20).fill(color || attrs.bg[symbol] || attrs.bg.icon).move(24, 0)
      link.svg(svgs[symbol+'Github'])

      text.before(rightRect)
      text.before(textShadow)
      textShadow.before(iconRect)
      textShadow.before(rightRect)

      draw.width(iconRect.bbox().width + rightRect.bbox().width).height(20)

      ctx.status = 200
      ctx.type = 'image/svg+xml;charset=utf-8;'
      ctx.body = draw.svg()

    } else if (/^github\.classic$/i.test(style) || /^github$/i.test(style)) {
      let text = link.text(str).fill('white')
      text.font({
        family: attrs.fontFamily,
        size: 12
      })
      text.move(24 + attrs.textGithub.paddingLeft, attrs.textGithub.paddingTop)
      let textShadow = link.text(str).fill('black')
      textShadow.font({
        family: attrs.fontFamily,
        size: 12
      }).opacity(0.25)
      textShadow.move(24 + attrs.textGithub.paddingLeft + 1, attrs.textGithub.paddingTop + 1)
      let textBox = text.bbox()
      let iconRect = link.rect(24, 20).fill(attrs.bg.icon)
      let rightRect = link.rect(textBox.width + 18, 20).fill(color || attrs.bg[symbol] || attrs.bg.icon).move(24, 0)
      let hightlight = link.gradient('linear', function(stop) {
        stop.at({ offset: 0, color: '#eee', opacity: 0.1 })
        stop.at({ offset: 1, opacity: 0.1 })
      })
      hightlight.from(0, 0).to(0, 1)
      link.rect(iconRect.bbox().width + rightRect.bbox().width, 20).fill(hightlight)
      link.svg(svgs[symbol+'Github'])

      text.before(rightRect)
      text.before(textShadow)
      textShadow.before(iconRect)
      textShadow.before(rightRect)

      draw.width(iconRect.bbox().width + rightRect.bbox().width).height(20)

      var ellipse = draw.rect(iconRect.bbox().width + rightRect.bbox().width, 20).radius(4).fill('#fff')

      var clip = draw.clip().add(ellipse)
      link.clipWith(clip)

      ctx.status = 200
      ctx.type = 'image/svg+xml;charset=utf-8;'
      ctx.body = draw.svg()

    } else if(/^default\.flat$/i.test(style)) {
        const shadowOffset = 4
        // 默认按钮样式
        let text = link.text(str).fill('#333')
        text.font({
          family: attrs.fontFamily,
          size: 14
        })
        text.move(40 + shadowOffset + attrs.textDefault.paddingLeft, attrs.textDefault.paddingTop + shadowOffset)
        let textBox = text.bbox()
        let iconRect = link.rect(40, 40).fill(attrs.bg[symbol]).move(shadowOffset, shadowOffset)
        let rightRect = link.rect(textBox.width + 23, 40).fill(color || 'white').move(40 + shadowOffset, shadowOffset)
        link.svg(svgs[symbol+'Default'])
  
        let showdowRect = draw.rect(iconRect.bbox().width + rightRect.bbox().width, 40).move(shadowOffset, shadowOffset).fill('#333333').opacity(0.2)
        showdowRect.filter(add=>{
         add.offset(0, 1).in(add.sourceAlpha).gaussianBlur(2)
        })
        
        text.before(rightRect)
        showdowRect.back()
  
        draw.width(iconRect.bbox().width + rightRect.bbox().width + shadowOffset * 2).height(40 + shadowOffset * 2)
        var ellipse = draw.rect(iconRect.bbox().width + rightRect.bbox().width, 40).move(shadowOffset, shadowOffset)
  
        var clip = draw.clip().add(ellipse)
        link.clipWith(clip)
  
        var shadowBox = draw.rect(iconRect.bbox().width + rightRect.bbox().width + shadowOffset * 2, 40 + shadowOffset * 2)
        showdowRect.clipWith(draw.clip().add(shadowBox))
  
        ctx.status = 200
        ctx.type = 'image/svg+xml;charset=utf-8;'
        ctx.body = draw.svg()
    } else {
      const shadowOffset = 4
      // 默认按钮样式
      let text = link.text(str).fill('#333')
      text.font({
        family: attrs.fontFamily,
        size: 14
      })
      text.move(40 + shadowOffset + attrs.textDefault.paddingLeft, attrs.textDefault.paddingTop + shadowOffset)
      let textBox = text.bbox()
      let iconRect = link.rect(40, 40).fill(attrs.bg[symbol]).move(shadowOffset, shadowOffset)
      let rightRect = link.rect(textBox.width + 23, 40).fill(color || 'white').move(40 + shadowOffset, shadowOffset)
      link.svg(svgs[symbol+'Default'])

      let showdowRect = draw.rect(iconRect.bbox().width + rightRect.bbox().width, 40).move(shadowOffset, shadowOffset).fill('#333333').opacity(0.2)
      showdowRect.filter(add=>{
       add.offset(0, 1).in(add.sourceAlpha).gaussianBlur(2)
      })
      
      text.before(rightRect)
      showdowRect.back()

      draw.width(iconRect.bbox().width + rightRect.bbox().width + shadowOffset * 2).height(40 + shadowOffset * 2)
      var ellipse = draw.rect(iconRect.bbox().width + rightRect.bbox().width, 40).radius(4).move(shadowOffset, shadowOffset)

      var clip = draw.clip().add(ellipse)
      link.clipWith(clip)

      var shadowBox = draw.rect(iconRect.bbox().width + rightRect.bbox().width + shadowOffset * 2, 40 + shadowOffset * 2).radius(4)
      showdowRect.clipWith(draw.clip().add(shadowBox))

      ctx.status = 200
      //ctx.type = 'image/svg+xml;charset=utf-8;'
      ctx.body = draw.svg()
    }
  }
}