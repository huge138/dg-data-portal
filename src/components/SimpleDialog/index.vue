<template>
  <el-dialog
    v-model="visible"
    title="简单对话框"
    width="500px"
    :before-close="handleClose"
  >
    <el-form :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" placeholder="请输入邮箱" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input
          v-model="form.description"
          type="textarea"
          :rows="3"
          placeholder="请输入描述"
        />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { ElMessage } from 'element-plus'

interface Props {
  modelValue: boolean
}

interface FormData {
  username: string
  email: string
  description: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const visible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const form = ref<FormData>({
  username: '',
  email: '',
  description: ''
})

const handleClose = () => {
  visible.value = false
}

const handleSubmit = () => {
  if (!form.value.username) {
    ElMessage.warning('请输入用户名')
    return
  }
  if (!form.value.email) {
    ElMessage.warning('请输入邮箱')
    return
  }

  ElMessage.success('提交成功！')
  console.log('表单数据:', form.value)

  // 重置表单
  form.value = {
    username: '',
    email: '',
    description: ''
  }

  handleClose()
}

// 监听对话框关闭，重置表单
watch(visible, (newVal) => {
  if (!newVal) {
    form.value = {
      username: '',
      email: '',
      description: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>
