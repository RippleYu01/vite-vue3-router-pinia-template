<script setup>
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore()
const add = () => {
    console.log('触发！！')
    counter.addCount()
}
const getUser = () =>{
    counter.upCount()
}
</script>

<template>
    <div>
        <h2>Pinia测试</h2>
        <p>{{ counter.count }}</p>
        <p>{{ counter.doubleCount }}</p>
        <div v-for="item in counter.userData" key="item.id">
            <p>{{ item.name }}</p>
        </div>
        <button @click="add">叠加</button>
        <button @click="getUser">获取用户</button>
    </div>
</template>


<style lang="less" scoped></style>