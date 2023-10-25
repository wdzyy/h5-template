import { login } from '@/apis/user'
import { useUserStore } from '@/stores/modules/user'

export default defineComponent({
  props: {
    msg: {
      type: [String, Number],
      default: 'Hello JSX',
    },
  },

  // 写法一
  /* setup(props) {
    onMounted(() => {
      console.log('mounted', props.msg)
    })
    const name = ref(props.msg)
    const handleClick = () => {
      name.value = 'hello jsx'
    }
    return () => <>
      <div onClick={handleClick}>{props.msg}---{name.value}</div>
    </>
  }, */

  // 写法二
  setup(props) {
    onMounted(() => {
      console.log('mounted', props.msg)
      login({
        account: '18311223344',
        password: 'e10adc3949ba59abbe56e057f20f883e',
      }).then((res) => {
        console.log(res, 'res11')
        useUserStore().setToken(res.data)
      })
    })

    const name = ref(props.msg)
    const handleClick = () => {
      name.value = 'hello jsx'
    }
    return { msg: props.msg, handleClick, name }
  },
  render() {
    return <div onClick={this.handleClick}>{this.msg}---{this.name}</div>
  },
})
