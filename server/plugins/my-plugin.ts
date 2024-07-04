export default defineNitroPlugin(nitro => {
  nitro.hooks.hook('render:html', html => {
    html.head.push(`<script src="/js/common.js"></script>`);
  });
});
