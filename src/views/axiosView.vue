<script setup>
import { getUserInfo } from '@/api';

let test = ref('初始数据');
let userId = 1;
const postFun = async () => {
  test.value = await getUserInfo(userId);
  userId += 1;
};
</script>

<template>
  <div>
    <h2>网络请求proxy测试</h2>
    <p>{{ test }}</p>
    <button @click="postFun">发起请求</button>
  </div>
</template>

<style lang="less" scoped></style>
