import Vue from 'vue/dist/vue.esm.browser'

import Component from '../src/index.js'

export default new Vue({
  el: '#app',
  render(h) {
    return h(Component);
  },
});
