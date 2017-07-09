This repository is sample code for Angular 4 (Angular 2) SPA.  
Use the Visual Studio Code to development.  

# Angular 4 教學 - Service

為了使 Component 程式碼更致力於與 Template 互動，同常會把邏輯或 Client 端的資料暫存用 Service 包裝，需要用到 Service 時，再透過建構子注入使用。  
本篇將介紹 Angular 4 (Angular 2) 的 Service 包裝及 DI (Dependency Injection)。

Blog：  
[Angular 4 教學 - Service](https://blog.johnwu.cc/article/angular-4-services.html)  

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
