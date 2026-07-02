<template>
  <div class="home-container">
    <el-card class="main-card">
      <template #header>
        <div class="card-header">
          <span>数据门户系统</span>
        </div>
      </template>

      <div class="content">
        <el-button type="primary" @click="openDialog" :icon="ChatDotRound">
          打开对话框
        </el-button>
      </div>
    </el-card>

    <!-- 对话框组件 -->
    <SimpleDialog v-model="dialogVisible" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ChatDotRound } from '@element-plus/icons-vue'
import SimpleDialog from '@/components/SimpleDialog/index.vue'

const dialogVisible = ref(false)

const openDialog = () => {
  dialogVisible.value = true
}
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

  .main-card {
    width: 600px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 18px;
      font-weight: bold;
    }

    .content {
      display: flex;
      justify-content: center;
      padding: 40px 0;
    }
  }
}
</style>
