<template>
  <div class="ai-toolbox-wrapper">
    <Navbar />
    <div class="ai-toolbox-container">
      <div class="header">
        <h1 class="title">AI 创作工具箱</h1>
        <p class="subtitle">让 AI 接管繁琐的工作流，你只负责讲好故事。</p>
      </div>

    <div class="tools-section">
      <div class="section-header">
        <h2 class="section-title">AI 生成工具</h2>
        <p class="section-subtitle">生成内容可保存到 AI 工作台</p>
      </div>

      <div class="tools-grid">
        <!-- AI 剧本助理 -->
        <div class="tool-card">
          <div class="badge beta">Beta</div>
          <div class="tool-icon script-icon">📝</div>
          <h3 class="tool-title">AI 剧本助理</h3>
          <p class="tool-description">
            粘贴剧本、自动拆解场景、提取动作与对白，生成每个镜头的 AI 绘画 Prompt。
          </p>
        </div>

        <!-- 角色设定卡 -->
        <div class="tool-card">
          <div class="badge beta">Beta</div>
          <div class="tool-icon character-icon">🎭</div>
          <h3 class="tool-title">角色设定卡</h3>
          <p class="tool-description">
            输入角色描述，生成完整角色设定卡：外貌、性格、说话方式和 5 种表情 Prompt，解决 AI 一致性问题。
          </p>
        </div>

        <!-- Prompt 包生成器 -->
        <div class="tool-card">
          <div class="badge beta">Beta</div>
          <div class="tool-icon prompt-icon">⚡</div>
          <h3 class="tool-title">Prompt 包生成器</h3>
          <p class="tool-description">
            输入分镜描述，为每个镜头批量生成文生图、视频 Prompt、镜头运动描述和负面词，支持可灵 / Runway / MJ。
          </p>
        </div>

        <!-- 漫剧封面生成器 -->
        <div class="tool-card">
          <div class="badge new">New</div>
          <div class="tool-icon cover-icon">🎨</div>
          <h3 class="tool-title">漫剧封面生成器</h3>
          <p class="tool-description">
            选择风格预设，填写角色描述，一键生成专业漫剧封面图。支持 3:4 海报和 9:16 手机竖屏，可直接设为剧本市场封面。
          </p>
        </div>

        <!-- 首尾帧过渡生成器 -->
        <div class="tool-card">
          <div class="badge new">New</div>
          <div class="tool-icon transition-icon">🎬</div>
          <h3 class="tool-title">首尾帧过渡生成器</h3>
          <p class="tool-description">
            上传两张场景图，AI 自动生成丝滑过渡液铜烁镜头。适用于场景切换、时间跳跃等需要衔接的镜头，告别生硬剪辑。
          </p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar/index.vue'
// Future: Add navigation logic for each tool
</script>

<style lang="scss" scoped>
.ai-toolbox-wrapper {
  min-height: 100vh;
  background: #ffffff;
}

.ai-toolbox-container {
  min-height: calc(100vh - 64px);
  background: linear-gradient(180deg, #0f1419 0%, #1a1f2e 100%);
  padding: 60px 80px;
  color: #ffffff;

  .header {
    text-align: center;
    margin-bottom: 60px;

    .title {
      font-size: 48px;
      font-weight: 700;
      margin: 0 0 20px 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtitle {
      font-size: 20px;
      color: #8b92a7;
      margin: 0;
    }
  }

  .tools-section {
    max-width: 1400px;
    margin: 0 auto;

    .section-header {
      margin-bottom: 40px;

      .section-title {
        font-size: 24px;
        font-weight: 600;
        color: #667eea;
        margin: 0 0 8px 0;
      }

      .section-subtitle {
        font-size: 14px;
        color: #6b7280;
        margin: 0;
      }
    }

    .tools-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
      gap: 24px;

      .tool-card {
        position: relative;
        background: linear-gradient(135deg, #1e2530 0%, #252d3d 100%);
        border-radius: 16px;
        padding: 32px;
        transition: all 0.3s ease;
        border: 1px solid rgba(102, 126, 234, 0.1);
        cursor: pointer;

        &:hover {
          transform: translateY(-4px);
          border-color: rgba(102, 126, 234, 0.4);
          box-shadow: 0 12px 24px rgba(102, 126, 234, 0.15);
        }

        .badge {
          position: absolute;
          top: 16px;
          right: 16px;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;

          &.beta {
            background: rgba(59, 130, 246, 0.2);
            color: #3b82f6;
            border: 1px solid rgba(59, 130, 246, 0.3);
          }

          &.new {
            background: rgba(16, 185, 129, 0.2);
            color: #10b981;
            border: 1px solid rgba(16, 185, 129, 0.3);
          }
        }

        .tool-icon {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .tool-title {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 12px 0;
          color: #ffffff;
        }

        .tool-description {
          font-size: 14px;
          line-height: 1.6;
          color: #8b92a7;
          margin: 0;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .ai-toolbox-container {
    padding: 40px 20px;

    .header {
      .title {
        font-size: 32px;
      }

      .subtitle {
        font-size: 16px;
      }
    }

    .tools-section {
      .tools-grid {
        grid-template-columns: 1fr;
      }
    }
  }
}
</style>
