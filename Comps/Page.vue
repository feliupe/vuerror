<template>

<Layout>

    <div slot="content">

        <tree :n='3' :treeData='treeData'/>

    </div>

</layout>

</template>

<script>

import Tree from './Tree'
import Layout from './Layout'

export default {

    components: {Tree, Layout},

    data () {
        return {
            treeData: {}
        }
    },

    mounted () {
        this.treeData = {}
    }
}
</script>