import { defineComponent } from 'vue'

export default defineComponent({
  name: "{{name}}",
  setup (props, context) {
    return () => (
      <div class="{{rootCls}}">
        {{name}} component working;
      </div>
    )
  }
})