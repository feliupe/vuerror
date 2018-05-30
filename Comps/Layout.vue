<template>
    <div>

        <slot name="content"></slot>

        <message/>

    </div>
</template>

<script>

import Message from './Message'

export default {

    components: {
        Message
    }
}
</script>
