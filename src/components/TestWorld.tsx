import { defineComponent, h } from 'vue'

export const TestWorld = defineComponent({
    props: {
        message: String
    },

    setup(props) {
        return () => h(
            <div>TestWorldz! {props.message}</div>
        )
    }
})