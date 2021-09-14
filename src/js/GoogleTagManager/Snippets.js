// // import warn from './utils/warn'

// /* eslint-disable */
// // https://developers.google.com/tag-manager/quickstart

// const Snippets = {
//   tags: function ({ id, events, dataLayer, dataLayerName, preview, auth }) {
//     const gtm_auth = `&gtm_auth=${auth}`
//     const gtm_preview = `&gtm_preview=${preview}`

//     // if (!id) warn('GTM Id is required')

//     /*
//     const iframe = `
//       <iframe src="//www.googletagmanager.com/ns.html?id=${id}${gtm_auth}${gtm_preview}&gtm_cookies_win=x"
//         height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>`
//     */
//     const iframe = null;

//     /*
//     const script = `
//       (function(w,d,s,l,i){w[l]=w[l]||[];
//         w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', ${JSON.stringify(events).slice(1, -1)}});
//         var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
//         j.async=true;j.src='//www.googletagmanager.com/gtag/js?id='+i+dl;
//         f.parentNode.insertBefore(j,f);
//       })(window,document,'script','${dataLayerName}','${id}');`
//     */
//     const script = `
//       window.dataLayer = window.dataLayer || [];
//       function gtag(){dataLayer.push(arguments);}
//       gtag('js', new Date());
//       gtag('config', '${id}');`

//     const srcScript = `https://www.googletagmanager.com/gtag/js?id=${id}`;

//     const dataLayerVar = this.dataLayer(dataLayer, dataLayerName)

//     return {
//       iframe,
//       script,
//       dataLayerVar,
//       srcScript,
//     }
//   },
//   dataLayer: function (dataLayer, dataLayerName) {
//     return `
//       window.${dataLayerName} = window.${dataLayerName} || [];
//       window.${dataLayerName}.push(${JSON.stringify(dataLayer)})`
//   }
// }

// module.exports = Snippets

// /* eslint-enable */
