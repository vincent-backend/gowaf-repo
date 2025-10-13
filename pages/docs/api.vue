<template>
  <div class="api-docs">
    <Header />
    <LgOnly>
      <div class="page-container">
        <div class="doc-header">
          <h1 class="title">API 文档</h1>
          <p class="desc">这里列出了所有可用的API接口及其详细说明</p>
        </div>

        <!-- API列表 -->
        <div class="api-list">
          <el-collapse>
            <el-collapse-item
              v-for="(apis, service) in groupedApis"
              :key="service"
            >
              <template #title>
                <div class="service-header">
                  <span class="service-name">{{ service }}</span>
                  <div class="service-doc" v-if="apis[0]?.serviceDoc">
                    {{ apis[0].serviceDoc }}
                  </div>
                  <span class="api-count">{{ apis.length }} 个接口</span>
                </div>
              </template>

              <div v-for="api in apis" :key="api.name" class="api-item">
                <div class="api-header">
                  <div class="api-title">
                    <h3>{{ api.name }}</h3>
                    <el-tag
                      v-if="api.isDeprecated"
                      type="warning"
                      size="small"
                      effect="dark"
                      >已废弃</el-tag
                    >
                  </div>
                  <div class="api-meta">
                    <span class="meta-item">
                      <i class="el-icon-document"></i>
                      {{ api.filename }}
                    </span>
                  </div>
                  <div class="api-doc">{{ api.doc }}</div>
                </div>

                <div class="api-detail">
                  <!-- HTTP请求信息 -->
                  <div class="http-info">
                    <div class="http-method">{{ api.httpMethod }}</div>
                    <div class="http-path">{{ api.httpPath }}</div>
                  </div>

                  <div class="code-block">
                    <div class="code-header">
                      <span>调用方式</span>
                      <el-button
                        type="primary"
                        link
                        size="small"
                        @click="copyCode(api.code)"
                      >
                        复制代码
                      </el-button>
                    </div>
                    <pre><code>{{ api.code }}</code></pre>
                  </div>

                  <div class="message-info">
                    <!-- 请求参数 -->
                    <div class="message-section">
                      <div class="section-title">请求参数</div>
                      <div class="message-item">
                        <span class="label">消息类型:</span>
                        <span class="value">{{ api.requestMessage }}</span>
                      </div>

                      <!-- 请求参数说明 -->
                      <div class="message-doc" v-if="api.requestDetail?.doc">
                        {{ api.requestDetail.doc }}
                      </div>

                      <!-- 请求参数示例 -->
                      <div class="code-block" v-if="api.requestDetail?.code">
                        <div class="code-header">
                          <span>请求示例</span>
                          <el-button
                            type="primary"
                            link
                            size="small"
                            @click="copyCode(api.requestDetail.code)"
                          >
                            复制代码
                          </el-button>
                        </div>
                        <pre><code>{{ api.requestDetail.code }}</code></pre>
                      </div>
                    </div>

                    <!-- 响应参数 -->
                    <div class="message-section">
                      <div class="section-title">响应参数</div>
                      <div class="message-item">
                        <span class="label">消息类型:</span>
                        <span class="value">{{ api.responseMessage }}</span>
                      </div>

                      <!-- 响应参数说明 -->
                      <div class="message-doc" v-if="api.responseDetail?.doc">
                        {{ api.responseDetail.doc }}
                      </div>

                      <!-- 响应参数示例 -->
                      <div class="code-block" v-if="api.responseDetail?.code">
                        <div class="code-header">
                          <span>响应示例</span>
                          <el-button
                            type="primary"
                            link
                            size="small"
                            @click="copyCode(api.responseDetail.code)"
                          >
                            复制代码
                          </el-button>
                        </div>
                        <pre><code>{{ api.responseDetail.code }}</code></pre>
                      </div>
                    </div>

                    <!-- 相关链接 -->
                    <div class="links-section" v-if="api.links?.length">
                      <div class="section-title">相关链接</div>
                      <div class="links-list">
                        <a
                          v-for="link in api.links"
                          :key="link.key"
                          :href="link.value"
                          target="_blank"
                          >{{ link.key }}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </LgOnly>
    <XsOnly>
      <div class="mobile-api-docs">
        <div class="mobile-header">
          <h1 class="title">API 文档</h1>
          <p class="desc">这里列出了所有可用的API接口及其详细说明</p>
        </div>

        <!-- 服务列表 -->
        <div class="mobile-services">
          <el-collapse>
            <el-collapse-item 
              v-for="(apis, service) in groupedApis" 
              :key="service"
            >
              <template #title>
                <div class="service-title">
                  <span class="name">{{ service }}</span>
                  <span class="count">{{ apis.length }}</span>
                </div>
              </template>

              <!-- 服务说明 -->
              <div class="service-info" v-if="apis[0]?.serviceDoc">
                {{ apis[0].serviceDoc }}
              </div>

              <!-- API列表 -->
              <div class="mobile-api-list">
                <el-collapse>
                  <el-collapse-item 
                    v-for="api in apis" 
                    :key="api.name"
                    class="api-item"
                  >
                    <template #title>
                      <div class="api-title">
                        <span class="name">{{ api.name }}</span>
                        <el-tag 
                          v-if="api.isDeprecated" 
                          type="warning" 
                          size="small"
                          effect="dark"
                        >已废弃</el-tag>
                      </div>
                    </template>

                    <!-- API详情 -->
                    <div class="api-content">
                      <!-- 基本信息 -->
                      <div class="info-section">
                        <div class="api-doc">{{ api.doc }}</div>
                        <div class="api-meta">
                          <span class="meta-item">
                            <i class="el-icon-document"></i>
                            {{ api.filename }}
                          </span>
                        </div>
                      </div>

                      <!-- HTTP信息 -->
                      <div class="http-section">
                        <div class="http-method">{{ api.httpMethod }}</div>
                        <div class="http-path">{{ api.httpPath }}</div>
                      </div>

                      <!-- 调用方式 -->
                      <div class="code-section">
                        <div class="section-title">
                          <span>调用方式</span>
                          <el-button 
                            type="primary" 
                            link 
                            size="small"
                            @click="copyCode(api.code)"
                          >复制</el-button>
                        </div>
                        <pre><code>{{ api.code }}</code></pre>
                      </div>

                      <!-- 请求参数 -->
                      <div class="param-section">
                        <div class="section-title">请求参数</div>
                        <div class="param-type">
                          <span class="label">消息类型:</span>
                          <span class="value">{{ api.requestMessage }}</span>
                        </div>
                        <div class="param-doc" v-if="api.requestDetail?.doc">
                          {{ api.requestDetail.doc }}
                        </div>
                        <div class="param-example" v-if="api.requestDetail?.code">
                          <div class="example-header">
                            <span>请求示例</span>
                            <el-button 
                              type="primary" 
                              link 
                              size="small"
                              @click="copyCode(api.requestDetail.code)"
                            >复制</el-button>
                          </div>
                          <pre><code>{{ api.requestDetail.code }}</code></pre>
                        </div>
                      </div>

                      <!-- 响应参数 -->
                      <div class="param-section">
                        <div class="section-title">响应参数</div>
                        <div class="param-type">
                          <span class="label">消息类型:</span>
                          <span class="value">{{ api.responseMessage }}</span>
                        </div>
                        <div class="param-doc" v-if="api.responseDetail?.doc">
                          {{ api.responseDetail.doc }}
                        </div>
                        <div class="param-example" v-if="api.responseDetail?.code">
                          <div class="example-header">
                            <span>响应示例</span>
                            <el-button 
                              type="primary" 
                              link 
                              size="small"
                              @click="copyCode(api.responseDetail.code)"
                            >复制</el-button>
                          </div>
                          <pre><code>{{ api.responseDetail.code }}</code></pre>
                        </div>
                      </div>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </XsOnly>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'API docs',
});

interface Api {
  name: string;
  service: string;
  serviceDoc: string;
  requestMessage: string;
  responseMessage: string;
  doc: string;
  code: string;
  isDeprecated: boolean;
  filename: string;
  roles: string[];
  httpMethod: string;
  httpPath: string;
  requestDetail?: {
    code?: string;
    doc?: string;
    name?: string;
  };
  responseDetail?: {
    code?: string;
    doc?: string;
    name?: string;
  };
  links?: { key: string; value: string }[];
}

const currentRole = ref('user');
const apis = ref<Api[]>([]);

// 按服务分组API
const groupedApis = computed(() => {
  return apis.value.reduce((groups: Record<string, Api[]>, api) => {
    if (!groups[api.service]) {
      groups[api.service] = [];
    }
    groups[api.service].push(api);
    return groups;
  }, {});
});

// 加载API列表
async function loadApis() {
  try {
    const { data } = await useFetch<{ code: number; data: Api[] }>(
      `/api/docs/list?role=${currentRole.value}`
    );
    apis.value = data.value?.data || [];
  } catch (error) {
    ElMessage.error('加载API列表失败');
  }
}

// 复制代码
const copyCode = (code: string) => {
  navigator.clipboard
    .writeText(code)
    .then(() => {
      ElMessage.success('代码已复制到剪贴板');
    })
    .catch(() => {
      ElMessage.error('复制失败');
    });
};

// 初始加载
loadApis();
</script>

<style lang="scss" scoped>
.api-docs .api-list .el-collapse .el-collapse-item.is-active .el-collapse-item__content {
  padding-bottom: 0 !important;
}

.api-docs {
  min-height: 100vh;
  background: #f5f7fa;
  padding: 40px 0;

  .page-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .doc-header {
    margin-bottom: 40px;
    text-align: center;

    .title {
      font-size: 32px;
      line-height: 1.2;
      font-weight: bold;
      margin-bottom: 12px;
      background: linear-gradient(90deg, #46cf3a 0%, #36cfbc 100%);
      -webkit-background-clip: text;
      color: transparent;
    }

    .desc {
      font-size: 16px;
      color: #666;
    }
  }

  .api-list {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    :deep(.el-collapse) {
      border: none;
    }

    :deep(.el-collapse-item__header) {
      padding: 20px;
      font-size: 16px;
      border-bottom: 1px solid #eee;
    }

    .service-header {
      display: flex;
      align-items: center;
      gap: 12px;

      .service-name {
        font-weight: bold;
        color: #333;
      }

      .api-count {
        font-size: 14px;
        color: #999;
      }
    }
  }

  .service-doc {
    padding: 0 16px;
    color: #666;
    font-size: 14px;
    line-height: 1.6;
  }

  .api-meta {
    display: flex;
    gap: 16px;
    margin: 8px 0;

    .meta-item {
      display: flex;
      align-items: center;
      gap: 4px;
      color: #666;
      font-size: 13px;

      i {
        font-size: 14px;
      }
    }
  }

  .message-info {
    .message-section {
      margin-bottom: 24px;

      .section-title {
        font-weight: 500;
        color: #333;
        margin-bottom: 12px;
        font-size: 16px;
      }

      .message-doc {
        color: #666;
        font-size: 14px;
        line-height: 1.6;
        margin: 12px 0;
        padding: 0 12px;
      }

      .code-block {
        background: #f8f9fb;
        border-radius: 8px;
        margin: 16px 0;
        overflow: hidden;

        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #eef1f6;
          color: #666;
          font-size: 14px;
        }

        pre {
          margin: 0;
          padding: 16px;
          font-family: 'Monaco', monospace;
          font-size: 14px;
          line-height: 1.6;
          overflow-x: auto;

          code {
            white-space: pre-wrap;
            word-break: break-all;
          }
        }
      }
    }
  }

  .api-item {
    padding: 24px;
    border-bottom: 1px solid #eee;
    transition: all 0.3s;

    &:hover {
      background: #f8f9fb;
    }

    .api-header {
      margin-bottom: 20px;

      .api-title {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 8px;

        h3 {
          margin: 0;
          font-size: 18px;
          color: #333;
        }
      }

      .api-doc {
        color: #666;
        font-size: 14px;
        line-height: 1.6;
      }
    }

    .api-detail {
      .http-info {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;

        .http-method {
          background: #67c23a;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 500;
        }

        .http-path {
          font-family: 'Monaco', monospace;
          font-size: 14px;
          color: #333;
        }
      }

      .code-block {
        background: #f8f9fb;
        border-radius: 8px;
        margin-bottom: 16px;
        overflow: hidden;

        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #eef1f6;
          color: #666;
          font-size: 14px;
        }

        pre {
          margin: 0;
          padding: 16px;
          font-family: 'Monaco', monospace;
          font-size: 14px;
          line-height: 1.6;
          overflow-x: auto;
        }
      }

      .message-info {
        .message-item {
          display: flex;
          margin-bottom: 8px;
          font-size: 14px;

          .label {
            width: 80px;
            color: #666;
            flex-shrink: 0;
          }

          .value {
            color: #333;
          }
        }

        .fields-table {
          margin: 16px 0;
        }

        .example-block {
          margin: 16px 0;

          .example-title {
            font-size: 14px;
            color: #666;
            margin-bottom: 8px;
          }

          pre {
            background: #f8f9fb;
            padding: 16px;
            border-radius: 4px;
            font-family: 'Monaco', monospace;
            font-size: 14px;
            line-height: 1.6;
            overflow-x: auto;
          }
        }

        .links-section {
          margin-top: 24px;

          .links-list {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;

            a {
              color: #409eff;
              text-decoration: none;
              font-size: 14px;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .api-docs {
    padding: 20px 0;

    .page-container {
      padding: 0 15px;
    }

    .doc-header {
      margin-bottom: 20px;

      .title {
        font-size: 24px;
      }
    }

    .api-item {
      padding: 16px;
    }

    .message-info {
      .message-section {
        .code-block {
          margin: 12px -15px;
          border-radius: 0;
        }
      }
    }
  }
}

.mobile-api-docs {
  padding: 2rem;
  font-size: 16px;

  .mobile-header {
    margin-bottom: 2rem;
    
    .title {
      font-size: 2.25rem;
      font-weight: bold;
      margin-bottom: 0.75rem;
      line-height: 1.2;
    }
    
    .desc {
      font-size: 1.25rem;
      color: #666;
      line-height: 1.5;
    }
  }

  .mobile-services {
    .service-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      
      .name {
        font-size: 1.5rem;
        font-weight: 500;
      }
      
      .count {
        font-size: 1.125rem;
        color: #999;
        background: #f5f7fa;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
      }
    }

    .service-info {
      padding: 1.5rem;
      font-size: 1.125rem;
      color: #666;
      line-height: 1.5;
    }

    .mobile-api-list {
      .api-item {
        margin-bottom: 1rem;
        padding: 0 1.5rem;
        
        .api-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 0;
          .name {
            font-size: 1.375rem;
            color: #333;
          }
        }

        .api-content {
          padding: 1.5rem 0;

          .info-section {
            margin-bottom: 1.5rem;
            
            .api-doc {
              font-size: 1.125rem;
              color: #666;
              line-height: 1.5;
              margin-bottom: 1rem;
            }
            
            .api-meta {
              font-size: 1rem;
              color: #999;
            }
          }

          .http-section {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
            
            .http-method {
              background: #67c23a;
              color: white;
              padding: 0.5rem 1rem;
              border-radius: 0.25rem;
              font-size: 1.125rem;
            }
            
            .http-path {
              font-family: 'Monaco', monospace;
              font-size: 1.125rem;
              color: #333;
            }
          }

          .code-section,
          .param-section {
            margin-bottom: 2rem;
            
            .section-title {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 1rem;
              font-size: 1.375rem;
              font-weight: 500;
            }
            
            pre {
              background: #f8f9fb;
              padding: 1.5rem;
              border-radius: 0.5rem;
              font-size: 1.125rem;
              line-height: 1.5;
              overflow-x: auto;
              
              code {
                white-space: pre-wrap;
                word-break: break-all;
              }
            }
          }

          .param-section {
            .param-type {
              display: flex;
              margin-bottom: 1rem;
              font-size: 1.125rem;
              
              .label {
                color: #666;
                margin-right: 1rem;
              }
              
              .value {
                color: #333;
              }
            }
            
            .param-doc {
              font-size: 1.125rem;
              color: #666;
              line-height: 1.5;
              margin-bottom: 1.5rem;
            }
            
            .param-example {
              .example-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1rem;
                font-size: 1.125rem;
                color: #666;
              }
            }
          }
        }
      }
    }
  }
}
</style>
