<template>
  <div class="article">
    <Header></Header>
    <nav
      role="navigation"
      class="view-nav"
      data-v-7e1071b3=""
      data-v-45471933=""
      data-v-4fa4e5da=""
    >
      <div class="nav-list left" data-v-7e1071b3="">
        <a href="/recommended" class="nav-item active" data-v-7e1071b3=""
          ><div
            st:block="categoryPopover"
            class="category-popover-box"
            data-v-9786f6f8=""
            data-v-7e1071b3=""
          >
            <!---->
            综合
          </div></a
        ><a href="/following" class="nav-item" data-v-7e1071b3=""
          ><div
            st:block="categoryPopover"
            class="category-popover-box"
            data-v-9786f6f8=""
            data-v-7e1071b3=""
          >
            <!---->
            关注
          </div></a
        ><a href="/backend" class="nav-item" data-v-7e1071b3=""
          ><div
            st:block="categoryPopover"
            st:state="6809637769959178254"
            class="category-popover-box"
            data-v-9786f6f8=""
            data-v-7e1071b3=""
          >
            <!---->
            后端
          </div></a
        ><a href="/frontend" class="nav-item" data-v-7e1071b3=""
          ><div
            st:block="categoryPopover"
            st:state="6809637767543259144"
            class="category-popover-box"
            data-v-9786f6f8=""
            data-v-7e1071b3=""
          >
            <!---->
            前端
          </div></a
        ><a href="/android" class="nav-item" data-v-7e1071b3=""
          ><div
            st:block="categoryPopover"
            st:state="6809635626879549454"
            class="category-popover-box"
            data-v-9786f6f8=""
            data-v-7e1071b3=""
          >
            <!---->
            Android
          </div></a
        ><a href="/ios" class="nav-item" data-v-7e1071b3=""
          ><div
            st:block="categoryPopover"
            st:state="6809635626661445640"
            class="category-popover-box"
            data-v-9786f6f8=""
            data-v-7e1071b3=""
          >
            <!---->
            iOS
          </div></a
        ><a href="/ai" class="nav-item" data-v-7e1071b3=""
          ><div
            st:block="categoryPopover"
            st:state="6809637773935378440"
            class="category-popover-box"
            data-v-9786f6f8=""
            data-v-7e1071b3=""
          >
            <!---->
            人工智能
          </div></a
        ><a href="/freebie" class="nav-item" data-v-7e1071b3=""
          ><div
            st:block="categoryPopover"
            st:state="6809637771511070734"
            class="category-popover-box"
            data-v-9786f6f8=""
            data-v-7e1071b3=""
          >
            <!---->
            开发工具
          </div></a
        ><a href="/career" class="nav-item" data-v-7e1071b3=""
          ><div
            st:block="categoryPopover"
            st:state="6809637776263217160"
            class="category-popover-box"
            data-v-9786f6f8=""
            data-v-7e1071b3=""
          >
            <!---->
            代码人生
          </div></a
        ><a href="/article" class="nav-item" data-v-7e1071b3=""
          ><div
            st:block="categoryPopover"
            st:state="6809637772874219534"
            class="category-popover-box"
            data-v-9786f6f8=""
            data-v-7e1071b3=""
          >
            <!---->
            阅读
          </div></a
        >
        <a
          href="/subscribe/subscribed"
          class="nav-item right"
          data-v-7e1071b3=""
        >
          标签管理
        </a>
      </div>
    </nav>
    <div class="container">
      <div class="items" v-for="(item, index) in articleList" :key="index">
        <a :href="'#/article/' + item.id + ''">
          <h1>{{ item.title }}</h1>
          <div class="item">
            <span class="title">
              {{ item.headline }}
            </span>
            <!-- <span class="time">
            {{ `0001-1-1 01-01 00:00` }}
          </span> -->
          </div>
        </a>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "__COMPONENTS__/Header";
import Footer from "__COMPONENTS__/Footer";
import { articleList } from "../../constant/article";

export default {
  name: "Artice",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      queryInfo: {
        keyword: "",
        pageIndex: 1,
        pageSize: 100,
      },
      total: 0,
      articleList: articleList,
    };
  },
  created() {
    this.getArticleList();
  },
  methods: {
    async getArticleList() {
      const { data: res } = await this.$http.get("article", {
        params: this.queryInfo,
      });
      if (res.status !== 200) return alert("文章列表获取失败");
      this.articleList = res.data.data;
      this.total = res.data.totalCount;
    },
    rTime(date) {
      var json_date = new Date(date).toJSON();
      return new Date(new Date(json_date) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
    },
  },
};
</script>

<style lang='less' scoped>
.article{
  background-color: #f6f6f6;
}
.wrap {
  max-width: 1024px;
  margin: auto;
}
.container {
  margin: auto;
  padding: 121px 0;
  max-width: 960px;
  position: relative;
  background-color: #ffffff;
  .items {
    padding: 0.75em 0;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      .title {
        font-size: 16px;
        font-weight: 300;
      }
    }
  }
}

.view-nav {
  position: fixed;
  top: 61px;
  width: 100%;
  height: 50px;
  z-index: 100;
  // box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  transition: all 0.2s;
  transform: translateZ(0);
  background-color: #ffffff;
  border-bottom: 1px solid #f1f1f1;
}

.view-nav .nav-list {
  max-width: 960px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  line-height: 1;
}

.nav-list .nav-item:hover {
  color: #007fff;
  transition: 0.5s;
}
.nav-list .nav-item {
  height: 100%;
  align-items: center;
  display: flex;
  flex-shrink: 0;
  font-size: 14px;
  color: #71777c;
  padding: 0 1rem;
}

.nav-item {
  position: relative;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .container {
    margin-left: 6em;
    .items {
      padding: 0.5em 0;
    }
  }
}
@media screen and (max-width: 640px) {
  .container {
    margin-left: 4em;
    .items {
      padding: 0.5em 0;
    }
  }
}
@media screen and (max-width: 460px) {
  .container {
    margin-left: 2em;
    .items {
      padding: 0.5em 0;
      .item {
        .time {
          display: none;
        }
      }
    }
  }
}
</style>
