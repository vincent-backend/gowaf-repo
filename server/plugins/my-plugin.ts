
export default defineNitroPlugin(nitro => {
  nitro.hooks.hook('render:html', (html, { event }) => {
    const { node: { req } } = event;
    const userAgent = req.headers['user-agent']
    const isMobile = Boolean(
      userAgent ? userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      ) : false
    );
    // html.head.push(`<script src="/js/common.js"></script>`);
    html.head.push(`<script>
      window.isMobile = ${isMobile}
      </script>`);
  });
});
