<template>
  <div>
    <Header></Header>
    <div class="content">
      <Viewer :value="content" :plugins="plugins" @change="handleChange" />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '__COMPONENTS__/Header'
import Footer from '__COMPONENTS__/Footer'
import { Editor, Viewer } from '@bytemd/vue'
import { article } from '../../constant/article'

export default {
  name: 'Detail',
  data() {
    return {
      detail: null,
      content: article
    }
  },
  components: {
    Header,
    Footer,
    Viewer
  },
  created() {
    this.getDetail();
  },
  methods: {
    async getDetail() {
      var arrUrl=location.href.split("/");
      var strPage=arrUrl[arrUrl.length-1];
      console.log(strPage);
      const { data: res } = await this.$http.get(`article/${strPage}`);
      this.detail = res.data;
    }
  },
}

</script>

<style lang='less' scoped>
.content {
  margin: 0 auto;
  max-width: 768px;
}
</style>
