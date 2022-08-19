import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  /* *
   * * $vuetify.breakpoint.mobile가 true가 되는 크기
   * */ 
  breakpoint: {
    mobileBreakpoint: 'xs'
  }
});
