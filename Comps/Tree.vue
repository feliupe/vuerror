<template>

      <div>
          Number {{n}}

          <tree v-if='n >0' :n='n - 1' />

      </div>

</template>

<script>

export default {
    name: 'tree',
    props: {
        n: {
            type: Number
        },
        treeData: {
            type: Object
        }
    },

    data () {
        return {
            internalTreeData: {}
        }
    },

    created () {
        this.internalTreeData = this.treeData
    }
}
</script>