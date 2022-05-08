<!--
 * @Author: happy 997401767@qq.com
 * @Date: 2022-04-07 11:12:44
 * @LastEditors: happy 997401767@qq.com
 * @LastEditTime: 2022-05-08 16:07:55
 * @FilePath: \Blog_web\src\views\article\Detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div>
    <Header></Header>
    <div class="container">
      <Viewer :value="content" :plugins="plugins" />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "__COMPONENTS__/Header";
import Footer from "__COMPONENTS__/Footer";
import { Editor, Viewer } from "@bytemd/vue";
import { article } from "../../constant/article";
import { fetchArticle } from "../../api/article";

import breaks from "@bytemd/plugin-breaks";
import footnotes from "@bytemd/plugin-footnotes";
import frontmatter from "@bytemd/plugin-frontmatter";
import gemoji from "@bytemd/plugin-gemoji";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight";
import mermaid from "@bytemd/plugin-mermaid";

import "bytemd/dist/index.min.css";
import "highlight.js/styles/vs.css";

const plugins = [
  breaks(),
  footnotes(),
  frontmatter(),
  gemoji(),
  highlight(),
  mermaid(),
  gfm(),
  // Add more plugins here
];

export default {
  name: "Detail",
  data() {
    return {
      detail: null,
      content: article,
      plugins,
    };
  },
  components: {
    Header,
    Footer,
    Viewer,
  },
  created() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      var arrUrl = location.href.split("/");
      var strPage = arrUrl[arrUrl.length - 1];
      console.log(strPage);
      const { res, err } = await fetchArticle(strPage);
      console.log("res");
      console.log(res);
      if (res) {
        console.log(res);
        const { content } = res.result;
        this.content = content;
      } else {
        console.log(err);
      }
    },
  },
};
</script>

<style lang='less' scoped>
.container {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 100px 0;
  max-width: 768px;
  min-height: e("calc(100vh - 60px)");
}
</style>
