// /* eslint-disable */
// import Snippets from './Snippets'

// const TagManager = {
//   dataScript: function (dataLayer) {
//     const script = document.createElement('script')
//     script.innerHTML = dataLayer
//     return script
//   },
//   gtm: function (args) {
//     const snippets = Snippets.tags(args)

//     const noScript = () => {
//       const noscript = document.createElement('noscript')
//       noscript.innerHTML = snippets.iframe
//       return noscript
//     }

//     const script = () => {
//       const script = document.createElement('script')
//       script.innerHTML = snippets.script
//       return script
//     }

//     const scriptLoad = () => {
//       // const options = {
//       //   src: snippets.srcScript,
//       //   async: '',
//       // };
//       // const script = document.createElement('script', options);
//       const script = document.createElement('script');
//       script.setAttribute('async', '');
//       script.src = snippets.srcScript;
//       return script;
//     }

//     const dataScript = this.dataScript(snippets.dataLayerVar)

//     return {
//       noScript,
//       script,
//       dataScript,
//       scriptLoad
//     }
//   },
//   initialize: function ({ gtmId, events = {}, dataLayer, dataLayerName = 'dataLayer', auth = '', preview = '' }) {
//     const gtm = this.gtm({
//       id: gtmId,
//       events: events,
//       dataLayer: dataLayer || undefined,
//       dataLayerName: dataLayerName,
//       auth,
//       preview
//     })
//     if (dataLayer) document.head.appendChild(gtm.dataScript)
//     document.head.appendChild(gtm.scriptLoad())
//     document.head.appendChild(gtm.script())
//     document.body.appendChild(gtm.noScript())
//   },
//   dataLayer: function ({dataLayer, dataLayerName = 'dataLayer'}) {
//     const snippets = Snippets.dataLayer(dataLayer, dataLayerName)
//     const dataScript = this.dataScript(snippets)
//     document.head.appendChild(dataScript)
//   }
// }

// module.exports = TagManager

// /* eslint-enable */
