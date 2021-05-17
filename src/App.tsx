import { defineComponent } from "vue";
import HelloWorld from './components/HelloWorld.vue'
import HelloWorldTsx from './components/HelloWorld'

export default defineComponent({
 name: "App",
 setup() {
   return () => (
     <>
        <img alt="Vue logo" src="src/assets/logo.png"></img>
        <HelloWorldTsx msg="Hello tsx"/>
        <HelloWorld  msg="Welcome to Your Vue.js + TypeScript App"/>
     </>
   );
 },
 style: `
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
 `
});