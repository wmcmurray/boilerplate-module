import('../dist/index.js').then((module) => {
  window.myModule = module.default;
  console.log('Module loaded :', module.default);
});
