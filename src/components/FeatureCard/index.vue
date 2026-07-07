<template>
  <div class="feature-card">
    <div class="feature-icon">
      <el-icon :size="32">
        <component :is="icon" />
      </el-icon>
    </div>

    <div class="feature-content">
      <h3 class="feature-title">{{ title }}</h3>
      <p class="feature-subtitle">{{ subtitle }}</p>
      <p class="feature-description">{{ description }}</p>
    </div>

    <div class="preview-mockup">
      <div class="mockup-overlay"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

interface FeatureCardProps {
  icon: Component
  title: string
  subtitle: string
  description: string
}

defineProps<FeatureCardProps>()
</script>

<style lang="scss" scoped>
.feature-card {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #667eea;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
    transform: translateY(-2px);
  }

  .feature-icon {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    .el-icon {
      color: #ffffff;
    }
  }

  .feature-content {
    flex: 1;
    min-width: 0;

    .feature-title {
      font-size: 18px;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 6px 0;
    }

    .feature-subtitle {
      font-size: 14px;
      color: #667eea;
      margin: 0 0 8px 0;
      font-weight: 500;
    }

    .feature-description {
      font-size: 14px;
      line-height: 1.6;
      color: #6b7280;
      margin: 0;
    }
  }

  .preview-mockup {
    width: 200px;
    height: 120px;
    border-radius: 8px;
    background: linear-gradient(135deg, #e0e7ff 0%, #f3f4f6 100%);
    border: 1px solid #e5e7eb;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;

    // Subtle grid pattern overlay
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(0deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
      background-size: 20px 20px;
    }

    // Window decoration for mockup feel
    &::after {
      content: '';
      position: absolute;
      top: 8px;
      left: 8px;
      right: 8px;
      height: 16px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 4px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    .mockup-overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at 70% 30%,
        rgba(102, 126, 234, 0.1) 0%,
        transparent 50%
      );
    }
  }
}

// Responsive design
@media (max-width: 1200px) {
  .feature-card {
    padding: 20px;

    .preview-mockup {
      width: 160px;
      height: 100px;
    }
  }
}

@media (max-width: 768px) {
  .feature-card {
    flex-direction: column;
    align-items: center;
    text-align: center;

    .feature-content {
      text-align: center;
    }

    .preview-mockup {
      width: 100%;
      max-width: 300px;
      height: 180px;
    }
  }
}
</style>
