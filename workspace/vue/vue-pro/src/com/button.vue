<template>
    <button :class="'i-button-size' + size " :disabled="disabled" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
function oneOf(value,validList) {
    for(let i = 0; i<validList.length;i++) {
        if(value === validList[i]) {
            return true
        }
    }
    return false  //结束的意思 不是抛一个false
}
import bus from '@/bus/bus'
export default {
    data() {
        return {
            msg:'我是button'
        }
    },
    methods: {
        handleClick(event) {
            // console.log(event)
            // console.log('123')
            // this.$emit('onclick',this.msg)
            bus.$emit('todo',this.msg)
        }
    },
    props:{
        size: {
            validator (value) {  //校验一下 传来的参数是否符合我有的
                return oneOf(value,['small','large','default'])
            },
            default: 'default'
        },
        disabled:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
    button{
        border-radius: 5px;
        cursor: pointer;
        outline: none;
    }
    .i-button-sizelarge{
        padding: 8px;
    }
    .i-button-sizesmall{
        padding: 4px;
    }
</style>
