<template>
  <div>
    <header-component></header-component>

    <section>
      <router-view></router-view>
    </section>

    <footer-component></footer-component>



  </div>
</template>

<script>
import {onBeforeMount} from "vue";

import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'


export default {
  name: 'DefaultTemplate',
  setup() {
    onBeforeMount(() => {
      document.body.classList.add('page')
      document.body.classList.add('dark')

      document.title = 'Curso EAD com Vue.js 3 - EspecializaTi'
    })
  },
  components: {
    HeaderComponent,
    FooterComponent,
  }
}
</script>