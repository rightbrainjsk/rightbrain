# 라이트브레인  

## pnpm 설치   
```bash
$ npm install -g pnpm
```
## vite 설치 - React, Typscript + SWC (https://ko.vitejs.dev/guide/)
```bash
$ pnpm create vite
$ pnpm install
```
## MUI 설치 (https://mui.com/material-ui/getting-started/installation/)
```bash
$ pnpm add @mui/material @emotion/react @emotion/styled
$ pnpm add @fontsource/roboto
```
## VSCODE 확장프로그램  
ESLint  
Prettier - Code formatter  
## VSCODE 설정
FORMAT ON SAVE : true  
## 실행
```bash
$ pnpm run dev
```
## 폴더구조
```bash
├── node_modules
│   ├── train
│   ├── test
│   └── validation
├── public
│   ├── train.py
│   ├── classify.py
│   ├── model.py
│   └── dataset.py
└── src
```