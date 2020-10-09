#!/usr/bin/env bash

# 构建
npm run build &&

# cd 到构建输出的目录下 
cd build &&

git init &&
git add . &&
git commit -m 'deploy'  &&

# 部署到github仓库
git remote add origin git@github.com:rookie996-object/book-keeping-react-website.git &&
git push -u origin master -f

cd -