export default {
  install(app, options) {
    app.config.globalProperties[options.pluginName || '$fetch'] = (
      url,
      options
    ) => {
      return fetch(url, options).then((res) => res.json())
    }
  },
}
