scanPdf (params) {
  let out = params
  out.templateId = this.state.templateId || 1
  // this.props.fetchPdfUrl(out)
  // let path = Utils.url('/leo/1.0/scm/purchaseTrade/preview') + ('&data=' + encodeURIComponent(JSON.stringify(out)))
  let path = 'http://cdn.mozilla.net/pdfjs/tracemonkey.pdf'
  location.href = path
  // let path = Utils.url('/leo/1.0/scm/purchaseTrade/preview') + ('&data=' + encodeURIComponent(JSON.stringify(params)))
  var script = document.createElement('script')
  script.src = '//cdn.bootcss.com/pdf.js/1.9.566/pdf.js'
  document.body.appendChild(script)
  script.onload = () => {
    console.log('onload')
    // this.sendAjax(url)
    location.href = path
    return
    location.href = 'http://lhc-image.oss-cn-beijing.aliyuncs.com/XD-GY-WL-201700032.pdf'
  }
  // location.href = Utils.url('/leo/1.0/scm/purchaseTrade/preview') + (`&templateId=${out.templateId}&tradeNo=${out.tradeNo}`)
}
loadWorker (url) {
  var script = document.createElement('script')
  // script.src = '//cdn.bootcss.com/pdf.js/1.9.640/pdf.worker.min.js'
  script.src = '//cdn.bootcss.com/pdf.js/1.9.566/pdf_viewer.js'
  // console.log('aaa')
  document.body.appendChild(script)
  script.onload = () => {
    console.log('onload')
    this.sendAjax(url)
  }
}

sendAjax (url) {
  let _this = this
  var oReq = new window.XMLHttpRequest()
  oReq.open('GET', url, true)
  oReq.responseType = 'arraybuffer'
  oReq.overrideMimeType('application/pdf; charset = x-user-defined')
  oReq.onload = function (oEvent) {
    // var blob = new Blob([oReq.response], {type: 'application/pdf'})
    console.log(oEvent)
    var arrayBuffer = oReq.response
    console.log(arrayBuffer)
    console.log(oEvent.currentTarget.response)
    // var arrayBuffer = oEvent.currentTarget.response
    if (arrayBuffer) {
      var byteArray = new Uint8Array(arrayBuffer)

      console.log(byteArray)
      // for (var i = 0, len = byteArray.length; i < len; i++) {
        // do something with each byte in the array
        // _this.showPdf(arrayBuffer)
      // }
      _this.showPdf(byteArray)
    }
  }
  oReq.send(null)
}
showPdf (data) {
  var url = data
  // PDFJS.cMapUrl = '//cdn.bootcss.com/pdf.js/1.9.566/pdf_viewer.js'
  PDFJS.workerSrc = '//cdn.bootcss.com/pdf.js/1.9.566/pdf.worker.min.js'
  PDFJS.getDocument(url).then((pdf) => {
    pdf.getPage(1).then((page) => {
      var scale = 1
      var viewport = page.getViewport(scale)
      var canvas = document.getElementById('pdf-canvas')
      var context = canvas.getContext('2d')
      canvas.height = viewport.height
      canvas.width = viewport.width
      var renderContext = {
        canvasContext: context,
        viewport: viewport
      }
      page.render(renderContext)
    })
  })
}