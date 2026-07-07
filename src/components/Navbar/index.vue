<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- 左侧：Logo 和导航 -->
      <div class="navbar-left">
        <!-- 汉堡菜单 -->
        <el-icon class="menu-icon" :size="20">
          <Menu />
        </el-icon>

        <!-- Logo -->
        <router-link to="/" class="logo">
          <img src="/logo.png" alt="能力平台" class="logo-image" />
          <!-- <span class="logo-text">能力平台</span> -->
        </router-link>

        <!-- 导航菜单 -->
        <nav class="nav-menu">
          <a href="#" class="nav-item">大模型</a>
          <a href="#" class="nav-item">产品</a>
          <a href="#" class="nav-item">解决方案</a>
          <router-link to="/ai-toolbox" class="nav-item">AI创作工具</router-link>
        </nav>
      </div>

      <!-- 右侧：搜索、图标、用户 -->
      <div class="navbar-right">
        <!-- 搜索框 -->
        <div class="search-box">
          <el-icon class="search-icon" :size="16">
            <Search />
          </el-icon>
          <input type="text" placeholder="抽卡师" class="search-input" />
        </div>

        <!-- 图标组 -->
        <div class="icon-group">
          <el-icon class="icon-btn" :size="20">
            <Bell />
          </el-icon>
          <el-icon class="icon-btn" :size="20">
            <Notification />
          </el-icon>
          <el-icon class="icon-btn" :size="20">
            <MessageBox />
          </el-icon>
        </div>

        <!-- 文字链接 -->
        <div class="text-links">
          <a href="#" class="text-link">文档</a>
          <a href="#" class="text-link">控制台</a>
        </div>

        <!-- 用户头像下拉菜单 -->
        <el-dropdown trigger="click" @command="handleCommand">
          <div class="user-avatar">
            <img :src="currentAvatar" alt="User" class="avatar-image" />
            <span class="user-name">admin</span>
            <el-icon class="arrow-icon" :size="12">
              <ArrowDown />
            </el-icon>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="profile">
                <el-icon><User /></el-icon>
                <span>个人信息</span>
              </el-dropdown-item>
              <el-dropdown-item command="settings">
                <el-icon><Setting /></el-icon>
                <span>账户设置</span>
              </el-dropdown-item>
              <el-dropdown-item command="security">
                <el-icon><Lock /></el-icon>
                <span>安全中心</span>
              </el-dropdown-item>
              <el-dropdown-item divided command="avatar">
                <el-icon><Picture /></el-icon>
                <span>更换头像</span>
              </el-dropdown-item>
              <el-dropdown-item divided command="logout">
                <el-icon><SwitchButton /></el-icon>
                <span>退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <!-- 头像选择对话框 -->
        <el-dialog v-model="avatarDialogVisible" title="选择头像" width="600px">
          <div class="avatar-grid">
            <div
              v-for="(avatar, index) in avatarList"
              :key="index"
              class="avatar-option"
              :class="{ active: currentAvatar === avatar }"
              @click="selectAvatar(avatar)"
            >
              <img :src="avatar" :alt="`头像 ${index + 1}`" />
              <div class="check-icon" v-if="currentAvatar === avatar">
                <el-icon><Check /></el-icon>
              </div>
            </div>
          </div>
          <template #footer>
            <el-button @click="avatarDialogVisible = false">取消</el-button>
            <el-button type="primary" @click="confirmAvatar">确认</el-button>
          </template>
        </el-dialog>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Menu,
  Search,
  Bell,
  Notification,
  MessageBox,
  ArrowDown,
  User,
  Setting,
  Lock,
  Picture,
  SwitchButton,
  Check
} from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

// 头像列表 - 使用免费的头像API
const avatarList = ref([
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Princess',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Whiskers',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Midnight',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Buddy',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Max',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Daisy',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Rocky',
  'https://api.dicebear.com/7.x/avataaars/svg?seed=Bailey'
])

const currentAvatar = ref(avatarList.value[0])
const avatarDialogVisible = ref(false)
const tempAvatar = ref('')

const handleCommand = (command: string) => {
  switch (command) {
    case 'profile':
      ElMessage.info('跳转到个人信息页面')
      break
    case 'settings':
      ElMessage.info('跳转到账户设置页面')
      break
    case 'security':
      ElMessage.info('跳转到安全中心页面')
      break
    case 'avatar':
      avatarDialogVisible.value = true
      tempAvatar.value = currentAvatar.value
      break
    case 'logout':
      ElMessage.success('退出登录成功')
      break
  }
}

const selectAvatar = (avatar: string) => {
  tempAvatar.value = avatar
}

const confirmAvatar = () => {
  currentAvatar.value = tempAvatar.value
  avatarDialogVisible.value = false
  ElMessage.success('头像更换成功')
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 64px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 1000;

  .navbar-container {
    max-width: 1920px;
    height: 100%;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-left {
    display: flex;
    align-items: center;
    gap: 24px;
    flex: 1;

    .menu-icon {
      color: #1f2937;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: #ff6a00;
      }
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }

      .logo-image {
        width: 24px;
        height: 24px;
      }

      .logo-text {
        font-size: 16px;
        font-weight: 600;
        color: #1f2937;
      }
    }

    .nav-menu {
      display: flex;
      align-items: center;
      gap: 32px;
      margin-left: 16px;

      .nav-item {
        font-size: 14px;
        color: #4b5563;
        text-decoration: none;
        white-space: nowrap;
        transition: color 0.2s;
        position: relative;
        padding: 4px 0;

        &:hover {
          color: #ff6a00;
        }

        &.router-link-exact-active,
        &.active {
          color: #ff6a00;
          font-weight: 500;

          &::after {
            content: '';
            position: absolute;
            bottom: -20px;
            left: 0;
            right: 0;
            height: 2px;
            background: #ff6a00;
            border-radius: 1px;
          }
        }
      }
    }
  }

  .navbar-right {
    display: flex;
    align-items: center;
    gap: 16px;

    .search-box {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      background: #f3f4f6;
      border-radius: 6px;
      min-width: 200px;

      .search-icon {
        color: #9ca3af;
      }

      .search-input {
        flex: 1;
        border: none;
        background: transparent;
        outline: none;
        font-size: 14px;
        color: #1f2937;

        &::placeholder {
          color: #9ca3af;
        }
      }
    }

    .icon-group {
      display: flex;
      align-items: center;
      gap: 12px;

      .icon-btn {
        color: #4b5563;
        cursor: pointer;
        transition: color 0.2s;

        &:hover {
          color: #ff6a00;
        }
      }
    }

    .text-links {
      display: flex;
      align-items: center;
      gap: 16px;
      padding-left: 16px;
      border-left: 1px solid #e5e7eb;

      .text-link {
        font-size: 14px;
        color: #4b5563;
        text-decoration: none;
        white-space: nowrap;
        transition: color 0.2s;

        &:hover {
          color: #ff6a00;
        }
      }
    }

    .user-avatar {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 12px;
      border-radius: 20px;
      cursor: pointer;
      transition: background 0.2s;

      &:hover {
        background: #f3f4f6;
      }

      .avatar-image {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        background: #f3f4f6;
      }

      .user-name {
        font-size: 14px;
        color: #1f2937;
      }

      .arrow-icon {
        color: #9ca3af;
        transition: transform 0.2s;
      }
    }
  }
}

// 头像选择对话框样式
.avatar-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 20px 0;

  .avatar-option {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    border: 3px solid transparent;
    transition: all 0.2s;

    &:hover {
      border-color: #ff6a00;
      transform: scale(1.05);
    }

    &.active {
      border-color: #ff6a00;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background: #f3f4f6;
    }

    .check-icon {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 24px;
      height: 24px;
      background: #ff6a00;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
  }
}

// Element Plus 下拉菜单样式覆盖
:deep(.el-dropdown-menu__item) {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;

  .el-icon {
    color: #6b7280;
  }

  &:hover .el-icon {
    color: #ff6a00;
  }
}

// 响应式设计
@media (max-width: 1200px) {
  .navbar {
    .navbar-left {
      .nav-menu {
        gap: 20px;
      }
    }

    .navbar-right {
      .text-links {
        display: none;
      }
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    .navbar-left {
      .nav-menu {
        display: none;
      }
    }

    .navbar-right {
      .search-box {
        min-width: 120px;
      }

      .icon-group {
        display: none;
      }
    }
  }
}
</style>
