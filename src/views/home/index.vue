<template>
  <div class="home-wrapper">
    <Navbar />
    <div class="home-container">
      <div class="home-content">
        <!-- Left column -->
        <div class="left-column">
          <!-- Hero section -->
          <div class="hero-section">
            <h1 class="hero-title">更强模型、更新能力、<br />热门 AI 应用免费体验</h1>
            <el-button type="primary" class="cta-button" size="large" @click="handleCTA">
              立即免费体验
              <el-icon class="button-icon"><ArrowRight /></el-icon>
            </el-button>
          </div>

          <!-- Featured section -->
          <div class="featured-section">
            <div class="featured-header">
              <el-icon class="featured-icon"><MagicStick /></el-icon>
              <div class="featured-text">
                <h3 class="featured-title">Wan2.7-Tzi</h3>
                <p class="featured-subtitle">AI超题创作工具箱</p>
              </div>
            </div>
            <div class="featured-preview">
              <div class="preview-grid">
                <div class="preview-item"></div>
                <div class="preview-item"></div>
                <div class="preview-item"></div>
                <div class="preview-item"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right column -->
        <div class="right-column">
          <FeatureCard
            v-for="(feature, index) in features"
            :key="index"
            :icon="feature.icon"
            :title="feature.title"
            :subtitle="feature.subtitle"
            :description="feature.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, markRaw } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowRight, MagicStick, ChatDotRound, VideoCamera, Grid, Connection, TrendCharts } from '@element-plus/icons-vue'
import Navbar from '@/components/Navbar/index.vue'
import FeatureCard from '@/components/FeatureCard/index.vue'

const router = useRouter()

const features = ref([
  {
    icon: markRaw(ChatDotRound),
    title: '大语言模型',
    subtitle: '千问大模型 | 达到或超越SOTA水平',
    description: '最新千问 Qwen3.7 傲全多模态大模型，Vibe Coding更强，多模态识别更准'
  },
  {
    icon: markRaw(VideoCamera),
    title: 'AI创作工具',
    subtitle: '热门模型集成Top5 | 全流程视频制作能力',
    description: '文生图、图生图、实现智能视频制作'
  },
  {
    icon: markRaw(Grid),
    title: '智能建站',
    subtitle: '万小智 | 一键生成、秒解上线',
    description: '智能生成对话页面，配套建站建管理后台，开启即经营'
  },
  {
    icon: markRaw(Connection),
    title: 'AI 数据集成',
    subtitle: 'EventBridge | 多源接入、全链路打通',
    description: '零代码接入多源数据，一站式智能清洗转换，让 AI 轻松洞察你的业务数据'
  },
  {
    icon: markRaw(TrendCharts),
    title: '分析智能体',
    subtitle: '智能AI | 多维分析、深度洞察',
    description: '支持自然语言查询，数据看板、报表生成、一键建连'
  }
])

const handleCTA = () => {
  router.push('/ai-toolbox')
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  min-height: 100vh;
  background: #f9fafb;
}

.home-container {
  min-height: calc(100vh - 64px);
  padding: 60px 80px;
}

.home-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  max-width: 1400px;
  margin: 0 auto;
}

// Left column
.left-column {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.hero-section {
  background: #ffffff;
  border-radius: 16px;
  padding: 48px 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  .hero-title {
    font-size: 42px;
    font-weight: 700;
    line-height: 1.3;
    margin: 0 0 32px 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .cta-button {
    background: #3b82f6;
    border-color: #3b82f6;
    font-size: 16px;
    padding: 12px 32px;
    height: auto;
    border-radius: 8px;
    font-weight: 500;

    &:hover {
      background: #2563eb;
      border-color: #2563eb;
    }

    .button-icon {
      margin-left: 8px;
    }
  }
}

.featured-section {
  background: #ffffff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  .featured-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;

    .featured-icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-size: 20px;
    }

    .featured-text {
      flex: 1;

      .featured-title {
        font-size: 18px;
        font-weight: 600;
        color: #1f2937;
        margin: 0 0 4px 0;
      }

      .featured-subtitle {
        font-size: 14px;
        color: #667eea;
        margin: 0;
      }
    }
  }

  .featured-preview {
    background: linear-gradient(135deg, #e0e7ff 0%, #f3f4f6 100%);
    border-radius: 12px;
    padding: 24px;
    border: 1px solid #e5e7eb;

    .preview-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;

      .preview-item {
        aspect-ratio: 16/10;
        background: linear-gradient(135deg, #c7d2fe 0%, #ddd6fe 100%);
        border-radius: 8px;
        border: 1px solid rgba(102, 126, 234, 0.2);
        position: relative;
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(0deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
          background-size: 16px 16px;
        }
      }
    }
  }
}

// Right column
.right-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

// Responsive design
@media (max-width: 1200px) {
  .home-container {
    padding: 40px 40px;
  }

  .home-content {
    gap: 32px;
  }

  .hero-section {
    padding: 36px 32px;

    .hero-title {
      font-size: 36px;
    }
  }

  .featured-section {
    padding: 24px;
  }
}

@media (max-width: 768px) {
  .home-container {
    padding: 40px 20px;
  }

  .home-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .hero-section {
    padding: 32px 24px;

    .hero-title {
      font-size: 28px;
      margin-bottom: 24px;
    }

    .cta-button {
      width: 100%;
    }
  }

  .featured-section {
    .preview-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
