<template>
  <div class="header">
    <div class="logo">HAPPYILEAF</div>
    <div class="nav">
      <ul>
        <li>
          <a href="#/">主页</a>
        </li>
        <li>
          <a href="#/article">博客</a>
        </li>
        <li>
          <a href="#/interest">趣学趣玩</a>
        </li>
        <li>
          <a href="#/about">关于</a>
        </li>
        <li>
          <a href="http://blog.indomite.top/admin"><LoginSVG /></a>
        </li>
      </ul>
    </div>
    <!-- <div class="link">
      <ul>
        <li>
          <a href="mailto:Indomite@163.com"><EmailSVG /></a>
        </li>
        <li>
          <a href="https://github.com/Indomite"><GitHubSVG /></a>
        </li>
        <li>
          <a href="http://blog.indomite.top/admin"><LoginSVG /></a>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import EmailSVG from "__SVG__/email.svg";
import GitHubSVG from "__SVG__/github.svg";
import LoginSVG from "__SVG__/login.svg";

export default {
  components: {
    EmailSVG,
    GitHubSVG,
    LoginSVG,
  },
};
</script>

<style lang='less' scoped>
.header {
  background-color: #FFFFFF;
  width: 100%;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: #515767;
  position: fixed;
  .logo {
    font-size: 20px;
    // padding: 30px 0;
    word-break: keep-all;
    margin-left: 100px;
  }
  .nav ul {
    margin-right: 50px;
    list-style: none;
    padding: 0;
    font-size: 15px;
    display: flex;
    justify-content: space-around;
    list-style: none;
    li {
      padding: 0 1em;
      word-break: keep-all;
      display: flex;
        align-items: center;
      a {
        color: #515767;
        display: flex;
        align-items: center;
        svg {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 2rem;
          cursor: pointer;
        }
      }
    }
  }
  .link ul {
    display: flex;
    svg {
      width: 1.25rem;
      height: 1.25rem;
      margin-right: 2rem;
      cursor: pointer;
    }
  }
}
</style>
