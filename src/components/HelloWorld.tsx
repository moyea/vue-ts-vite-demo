import { defineComponent } from "vue";

export default defineComponent({
 name: "HelloWorld-tsx",
 props: {
  msg: String
 },
 setup(props) {
    return ()=> <h2>{props.msg}</h2>
 }
})