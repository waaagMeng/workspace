<template>
    <div class="look-two">{{msg}}
        <div class="go-one" @click='goOne'>去Look1</div>
    </div>
</template>

<script>
export default {
    name: 'LookTwo',
    data () {
        return {
            msg: '瞅你咋地！'
        }
    },
    methods: {
        goOne () {
            this.$router.push({ name: 'LookOne',param: {id:123}})
        }
    },
    beforeRouteEnter (to, from, next) {
        console.log(from,to)
        next()
    },
    beforeRouteLeave (to, from, next) {
        console.log(from,to)
        next()
    }
}
</script>
