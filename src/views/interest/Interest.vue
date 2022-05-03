<template>
  <div class="interest">
    <Header></Header>
    <section id="search" class="nav">
      <div class="wrap">
        <input type="text" placeholder="输入关键词搜索"/>
      </div>
    </section>
    <section id="nav" class="nav">
      <div id="city-content" class="category-content">
        <h2>技术</h2>
        <ul>
          <a
            :href="item.url"
            target="blank"
            v-for="(item, index) in recommendationNavList"
            :key="index"
            class="category_li"
          >
            <li>
              {{ item.name }}
            </li>
          </a>
          <a
            :href="item.url"
            target="blank"
            v-for="(item, index) in recommendationNavList"
            :key="index"
            class="category_li"
          >
            <li>
              {{ item.name }}
            </li>
          </a>
        </ul>
      </div>
      <div id="city-content" class="category-content">
        <h2>设计</h2>
        <ul>
          <a
            :href="item.url"
            target="blank"
            v-for="(item, index) in recommendationNavList"
            :key="index"
            class="category_li"
          >
            <li>
              {{ item.name }}
            </li>
          </a>
        </ul>
      </div>
      <div id="city-content" class="category-content">
        <h2>娱乐</h2>
        <ul>
          <a
            :href="item.url"
            target="blank"
            v-for="(item, index) in recommendationNavList"
            :key="index"
            class="category_li"
          >
            <li>
              {{ item.name }}
            </li>
          </a>
        </ul>
      </div>
      <div id="city-content" class="category-content">
        <h2>工具</h2>
        <ul>
          <a
            :href="item.url"
            target="blank"
            v-for="(item, index) in recommendationNavList"
            :key="index"
            class="category_li"
          >
            <li>
              {{ item.name }}
            </li>
          </a>
        </ul>
      </div>
      <div id="city-content" class="category-content">
        <h2>有趣的</h2>
        <ul>
          <a
            :href="item.url"
            target="blank"
            v-for="(item, index) in recommendationNavList"
            :key="index"
            class="category_li"
          >
            <li>
              {{ item.name }}
            </li>
          </a>
        </ul>
      </div>
      <div id="city-content" class="category-content">
        <h2>未分类</h2>
        <ul>
          <a
            :href="item.url"
            target="blank"
            v-for="(item, index) in recommendationNavList"
            :key="index"
            class="category_li"
          >
            <li>
              {{ item.name }}
            </li>
          </a>
        </ul>
      </div>
    </section>
    <section id="tech" class="nav">
      <div class="container">
        <a
          v-for="(item, index) in recommendationNavList"
          :key="index"
          :href="item.url"
          target="_blank"
          ><img :src="item.logo" alt=""
        /></a>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "__COMPONENTS__/Header";
import Footer from "__COMPONENTS__/Footer";
import {
  INDEX_PAGE_CAROUSEL_IMG,
  RECOMMENDATION_NAV,
} from "../../constant/preset";

export default {
  name: "Artice",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      recommendationNavList: RECOMMENDATION_NAV,
    };
  },
  created() {},
};
</script>

<style lang='less' scoped>

.interest{
  background-color: #f6f6f6;
}
.nav {
  margin: 0 15vw;
  padding: 30px 30px;
  background-color: #FFFFFF;
}

#tech{
  margin-bottom: 100px
}

#search {
  width: 100%;
  margin: 0 0;
  padding: 60px 0 0 0;
  background-color: #1E80FF;
  text-align: center;
  display: flex;
  justify-content: center;

  .wrap{
    width:40%;
    display: flex;
    padding:30px 0 
  }
  input {
    width: 100%;
    height: 40px;
    border: none;
    outline: 0;
    padding-left: 3rem;
    padding-right: 3rem;
    font-size: 2rem;
    box-sizing: border-box;
    color: rgb(29, 33, 41);
    border-radius: 2px;
    font-size: 14px;
    background-color: #FFFFFF;
  }
}
.container {
  width: 70%;
  margin: auto;
  // padding: 100px 0;
  display: grid;
  // grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "a b c c c"
    "e e . d d"
    "f f . . .";
  place-items: center center;
  grid-gap: 10px 10px;
  flex: 0.5;
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  img {
    width: 100%;
    height: 100%;
  }
}

.container a:nth-child(1) {
  grid-area: a;
}

.container a:nth-child(2) {
  grid-area: b;
}
.container a:nth-child(3) {
  grid-area: c;
}
.container a:nth-child(4) {
  grid-area: d;
}

.container a:nth-child(5) {
  grid-area: e;
}
.container a:nth-child(6) {
  grid-area: f;
}

.category-content {
  display: flex;
  align-items: center;
  margin: 5px;
  font-size: 1rem;
}

.ul_title {
  /* min-width: 100px; */
  /* height: auto; */
  margin: 5px 0;
  padding: 0 10px;
  line-height: 16px;
}

.category-content p {
  display: flex;
  margin: 5px 0;
  padding: 0 10px;
  font-weight: 700;
}

.category-content h2 {
  min-width: 90px;
  margin: 15px 0;
  padding: 10px 0;
  align-self: flex-start;
  font-size: 18px;
  font-weight: 300;
}

.category-content ul {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  margin: 15px 0;
}

.category-content li {
  margin: 0 10px 5px 10px;
  padding: 10px 10px;
}
.category-content li:hover {
  background-color: rgb(231, 231, 231);
  transition: 0.5s;
}

.category-content li a {
  color: rgba(0, 0, 0, 1);
}
</style>
