<template>
  <div class="article">
    <Header></Header>
    <nav role="navigation" class="view-nav">
      <div class="nav-list left" data-v-7e1071b3="">
        <a
          href=""
          class="nav-item active"
          @click.prevent="changeCategory(0)"
          ><div st:block="categoryPopover" class="category-popover-box">
            <!---->
            {{ "全部" }}
          </div>
        </a>
        <a
          v-for="(item, index) in categoryList"
          :key="index"
          href=""
          class="nav-item active"
          @click.prevent="changeCategory(item.category_id)"
          ><div st:block="categoryPopover" class="category-popover-box">
            <!---->
            {{ item.category_name }}
          </div>
        </a>
      </div>
    </nav>
    <div class="container">
      <div class="content">
        <div class="items" v-for="(item, index) in articleList" :key="index">
          <div class="meta-container">
            <div class="date">{{ item.article_info.create_time }}</div>
            <div class="dividing"></div>
            <div class="tag_list">
              <a href="" target="_blank" rel="" class="tag">{{
                item.category_info.category_name
              }}</a>
              <a v-for="(item,index) in item.tags_info" :key="index" href="" target="_blank" rel="" class="tag">{{
                item.tag_name
              }}</a>
            </div>
          </div>
          <div class="title-container">
            <a :href="'#/article/' + item.article_info.article_id + ''">
              <h1 class="title">{{ item.article_info.title }}</h1>
              <p class="headline">
                {{ item.article_info.brief_content }}
              </p>
              <!-- <span class="time">
            {{ `0001-1-1 01-01 00:00` }}
          </span> -->
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "__COMPONENTS__/Header";
import Footer from "__COMPONENTS__/Footer";
import { articleList } from "../../constant/article";
// import { articleList } from "../../constant/article";
import { fetchCategoryList } from "../../api/category";
import { fetchList } from "../../api/article";

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
        category: undefined,
        status: 1,
        pageNum: 1,
        pageSize: 1000000,
      },
      total: 0,
      categoryList: [],
      articleList: [],
    };
  },
  created() {
    this.getCategoryList();
    this.getArticleList();
  },
  methods: {
    async getCategoryList() {
      const { res, err } = await fetchCategoryList({
        pageNum: 1,
        pageSize: 20,
      });
      if (res) {
        console.log(res);
        this.categoryList = res.result.list;
      }
    },
    async getArticleList() {
      const { res } = await fetchList(this.queryInfo);
      if (res) {
        this.articleList = res.result.list;
      }
    },
    changeCategory(category_id) {
      if (category_id === 0) {
        this.queryInfo = {
          keyword: "",
          category: undefined,
          status: 1,
          pageNum: 1,
          pageSize: 1000000,
        };
        this.getArticleList();
      } else {
        this.queryInfo.category = category_id;
        this.getArticleList();
      }
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
.article {
  background-color: #f6f6f6;
}
.wrap {
  max-width: 1024px;
  margin: auto;
}
.container {
  box-sizing: border-box;
  margin: auto;
  padding: 121px 0;
  max-width: 960px;
  min-height: e("calc(100vh - 60px)");
  position: relative;
  background-color: #f6f6f6;
  .content {
    margin: 10px 0;
    // padding: 0 20px;
    background-color: #ffffff;
  }
  .items {
    // margin:10px 0;
    padding: 15px 20px 0 20px;
    .meta-container {
      display: flex;
      align-items: center;
      margin: 0 0 10px 0;
      .date {
        position: relative;
        // padding: 0 10px;
        line-height: 22px;
        font-size: 13px;
        flex-shrink: 0;
      }
      .dividing {
        width: 1px;
        height: 14px;
        background: #e5e6eb;
        margin: 0 8px;
      }
      .tag_list {
        display: flex;
        align-items: center;
        line-height: 22px;
      }
      .tag{
        margin: 0 5px;
      }
    }

    .title-container {
      padding: 0 0 15px 0;
      border-bottom: 1px solid #e5e6eb;
    }
    .title {
      font-weight: 700;
      font-size: 17px;
      line-height: 24px;
      color: #1d2129;
      margin: 0 0 8px 0;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
    .headline {
      margin: 0;
      font-size: 15px;
      font-weight: 300;
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
