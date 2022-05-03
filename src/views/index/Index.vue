<template>
  <div class="root">
    <img class="doraemon" src="../../assets/20160503000209_drUZE.jpeg" alt="" />
    <div class="content">
      <nav>
        <h1>Happyileaf's Space</h1>
        <p>永远年轻 永远热泪盈眶</p>
      </nav>
      <div class="items">
        <div class="item">
          <a href="#/article">技术博客</a>
        </div>
        <div class="item">
          <a href="#/interest">趣学趣玩</a>
        </div>
        <div class="item">
          <a href="https://happyileaf.github.io/vuepressBlog/">学习笔记</a>
        </div>
        <div class="item">
          <a href="https://juejin.cn/user/2524134429703063">稀土掘金</a>
        </div>
        <div class="item">
          <a href="https://github.com/Happyileaf">GitHub</a>
        </div>
        <div class="item">
          <a href="#/about">关于我</a>
        </div>
      </div>
    </div>
    <footer>ICP 1000000000-1</footer>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>

<style lang='less' scoped>
.root {
  position: relative;
  min-width: 320px;
  text-align: center;
  nav {
    h1 {
      margin: 0;
      padding: 60px 0 0 0;
    }
  }
}

.doraemon {
  height: 37vh;
  position: absolute;
  right: 0;
  top: 45%;
  transform: translate(-30%,-50%); /* 50%为自身尺寸的一半 */
}

.content {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 0 0 56px 0;
}

nav > p {
  font-size: 12px;
  letter-spacing: 5px;
  font-weight: 200;
  width: 100%;
  text-align: center;
}

.items {
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation-name: fadeIn; /*动画名称*/
  animation-duration: 3s; /*动画持续时间*/
  animation-iteration-count: 1; /*动画次数*/
  animation-delay: 0s; /*延迟时间*/
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  33% {
    opacity: 0.33; /*中间状态 透明度为0*/
  }
  67% {
    opacity: 0.67; /*中间状态 透明度为0*/
  }
  100% {
    opacity: 1; /*结尾状态 透明度为1*/
  }
}

.item {
  padding: 15px 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 400;
}

footer {
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 200;
  width: 100%;
  text-align: center;
  margin: -56px 0 0 0;
  padding: 20px 0;
}
</style>
