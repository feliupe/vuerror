const { mount } = require('@vue/test-utils')
const Page = require('../Comps/Page').default

describe('Mock', () => {

    it('Mock', () => {
        const wrapper = mount(Page)
        // wrapper.vm.treeData = {}
        wrapper.vm.$forceUpdate()
    })
})
