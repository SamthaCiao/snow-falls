# snow-falls
小说网页

## 部署步骤（GitHub Pages）

1. **确认仓库已推送到 GitHub**  
   确保本仓库已与 GitHub 上的远程仓库关联，且代码已推送到目标分支（如 `main` 或 `master`）。

2. **开启 GitHub Pages**
   - 打开 GitHub 仓库页面，点击 **Settings** → 左侧 **Pages**。
   - 在 **Build and deployment** 中：
     - **Source** 选 **Deploy from a branch**。
     - **Branch** 选用于部署的分支（如 `main`）和目录 **/ (root)**。
   - 保存后等待一两分钟，页面会提示部署完成。

3. **访问线上地址**  
   部署成功后，站点地址为：
   ```
   https://<你的用户名>.github.io/<仓库名>/
   ```
   例如仓库名为 `snow-falls`，则地址为：`https://<你的用户名>.github.io/snow-falls/`  
   首页即：`https://<你的用户名>.github.io/snow-falls/index.html`（可省略 `index.html`）。

4. **（可选）自定义域名**  
   在 Pages 设置里 **Custom domain** 填入自己的域名，并按提示在域名服务商处添加 CNAME 解析即可。
