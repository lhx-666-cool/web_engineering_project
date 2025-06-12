# 第一阶段：构建阶段
# 使用官方 Node.js 镜像作为基础镜像
FROM node:lts-alpine as builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件，优先复制可以利用 Docker 缓存
COPY package*.json ./

# 安装项目依赖
# 如果你的项目使用 pnpm，请使用 pnpm install
# 如果你的项目使用 yarn，请使用 yarn install
RUN npm install

# 复制项目所有文件
COPY . .

# 构建 Next.js 应用
# 这里使用了 NEXT_TELEMETRY_DISABLED=1 来禁用构建过程中的遥测，可选
RUN NEXT_TELEMETRY_DISABLED=1 npm run build

# 第二阶段：运行阶段
# 使用一个轻量级的 Node.js 镜像作为运行阶段的基础镜像
# alpine 是一个非常小的 Linux 发行版，适合生产环境
FROM node:lts-alpine

# 设置工作目录
WORKDIR /app

# 从构建阶段复制构建好的 Next.js 应用文件
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
# 复制你可能需要的其他文件，例如 prisma 客户端等
# COPY --from=builder /app/node_modules/.prisma ./.prisma

# 安装生产环境依赖
# --omit=dev 参数只安装生产环境依赖
RUN npm install

# 暴露 Next.js 默认的服务端口
EXPOSE 3000

# 设置环境变量，告诉 Next.js 启动生产模式
ENV NODE_ENV=production

# 启动 Next.js 应用
CMD ["npm", "start"]