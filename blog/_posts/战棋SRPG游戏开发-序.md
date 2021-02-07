---
title: 战棋SRPG游戏开发-序
commonts: true
date: 2021-02-05 16:12:19
index_img:
banner_img:
tags: 游戏开发
categories: SRPG游戏开发
---
## 什么是SRPG
>战略角色扮演游戏（Strategy Role-Playing Game），日本又称角色扮演模拟游戏，简称SRPG或RSLG，最大特性在于战斗系统中拥有类似战略游戏的游戏方式，以及具有类似角色扮演游戏的剧情推演及人物成长。

<!-- more -->

我玩过的最优秀的SRPG游戏还要数: 火焰纹章系列[^1]
玩家控制多个角色与敌人在一个地图上展开战斗。把角色抽象成棋子来模拟一场场战役。

一些SRPG游戏截图:
![火焰纹章之烈火之剑 2003年发行](https://cdn.jsdelivr.net/gh/impulses-1/BlogSource@0.0.6/images/SRPG/01.jpg)

![战律 2019年发行](https://cdn.jsdelivr.net/gh/impulses-1/BlogSource@0.0.6/images/SRPG/02.jpg)

---
# 开发计划

## 前言
我决定参考玩过的SRPG游戏，使用Unity3D开发一款战棋类SRPG游戏。
核心系统: 战棋类战斗系统
游戏主题: 仙侠风格
但是不会画画，所以开发过程中一切从简。😭

## 开发工具
* 游戏引擎: [Unity3D](https://unity.cn/releases)
* 绘画软件: [Aseprite](https://www.aseprite.org/)
* 版本控制: [Git](https://git-scm.com/)
* 远程仓库: [GitHub](https://github.com/)
* GitGUI软件: [GitHub Desktop](https://desktop.github.com/) & [Sourcetree](https://www.sourcetreeapp.com/)
* 项目管理: [Trello](https://trello.com/zh-Hans)

## 详细计划
1. 实现网格地图生成
2. 实现战斗单位
3. 实现战斗全过程
4. 后面还没想好......

实现原则: 数据和显示分离 ，地图数据和战斗队伍数据不能耦合
对于优化: 有优化思路但是实现比较复杂的可以先把优化点和思路记下，先让程序跑起来
对于美术: 先不想着多好多美术效果，怎么简单怎么来，主要目标是游戏可玩。
## 博客更新
在每一阶段完成之后,我都会抽时间出来写一篇教程来总结前面所做的工作。
教程不会大段贴代码,我会尽力描述我的实现思路和想法。

代码可以直接看源码,偷偷说一下～ 我没写注释(￣∇￣)
[项目源码GitHub](https://github.com/impulses-1/SRPG)

先放一张现阶段的截图吧,还不可以玩 o(╯□╰)o
![image](https://cdn.jsdelivr.net/gh/impulses-1/BlogSource@0.0.6/images/SRPG/03.png)

## 絮叨
如果觉得我的博客或者项目对于学习有帮助的话，欢迎在评论区留言，说几句废话也比冷冷清清强嘛。
如果我的博客哪里有错误或者错别字，一定要在评论区提醒我，博主有强迫症，肯定火速订正。

## 参考
[^1]: [火焰纹章wiki](https://zh.wikipedia.org/wiki/%E7%81%AB%E7%84%B0%E4%B9%8B%E7%BA%B9%E7%AB%A0%E7%B3%BB%E5%88%97)

