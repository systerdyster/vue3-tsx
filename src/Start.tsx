import { defineComponent, h } from 'vue';
import { TestWorld } from '__components/TestWorld';

export const Start = defineComponent({
    setup() {
        return () => h(
            <div>
                <TestWorld message='Test' />
            </div>
        )
    }
})