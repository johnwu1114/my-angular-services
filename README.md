This repository is sample code for Angular 4 (Angular 2) SPA.  
Use the Visual Studio Code to development.  

# Angular 4 教學 - Lazy Loading 共用模組

當 Angular 4 開始拆分模組後，會有一些 Component、Pipe、Directive、Service 需要共用，此時就可以建立一個共用模組，包含這些可被共用的內容。  
本篇將介紹 Angular 4 的 Lazy Loading 共用模組。

Blog：  
[Angular 4 教學 - Lazy Loading 共用模組](https://blog.johnwu.cc/article/angular-4-lazy-loading-shared-module.html)  

## 說明

安裝軟體的部分我就沒有詳細介紹，以下是我使用到的工具跟語言。  

開發工具：
1. Visual Studio Code。[官網下載頁面](https://code.visualstudio.com/Download)  
> 基本上 VS Code 就是純文字編輯工具，你要用 Sublime、Notepade++、Atom、TextEdit都可以。  
2. Nodejs 6.9.x 以上版本 及 npm 3 以上版本。[官網下載頁面](https://nodejs.org/en/download/)  

下載範例後記得在專案目錄安裝 npm packages：
``` batch
npm install
```

安裝完 npm packages 後，用以下指令啟動：
``` batch
npm run dev
```
