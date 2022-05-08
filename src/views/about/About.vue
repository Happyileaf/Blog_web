<template>
  <div class="about">
    <Header></Header>
    <section class="above">
      <div class="container">
        <img
          class="avatar"
          src="../../assets/doraemon/20160316234258_ErVQ4.thumb.700_0.jpeg"
          alt=""
        />
        <span class="slogan">DEVELOPER ADVOCATE</span>
        <br />
        <span class="intro">Software Engineer - Web Developer - Tech Communities</span>
      </div>
    </section>
    <section class="profile">
      <div class="container">
        <p class="title">认识一下吧</p>
        <div class="content">
          <div class="content-group intro">
            <p>
              {{userInfo.introduction}}
            </p>
          </div>
          <div class="content-group bio">
            <div class="user-bio">
              <div class="user-location user-bio-section">
                <div class="user-bio-section-header">
                  <svg-icon icon-class="email" /><span>Location</span>
                </div>
                <div class="user-bio-section-body">
                  <div class="text-muted">{{ userInfo.location || 1 }}</div>
                </div>
              </div>

              <div class="user-email user-bio-section">
                <div class="user-bio-section-header">
                  <svg-icon icon-class="email" /><span>Email</span>
                </div>
                <div class="user-bio-section-body">
                  <div class="text-muted">{{ userInfo.email }}</div>
                </div>
              </div>

              <div class="user-website user-bio-section">
                <div class="user-bio-section-header">
                  <svg-icon icon-class="email" /><span>Website</span>
                </div>
                <div class="user-bio-section-body">
                  <div class="text-muted">{{ userInfo.website }}</div>
                </div>
              </div>

              <div class="user-education user-bio-section">
                <div class="user-bio-section-header">
                  <svg-icon icon-class="education" /><span>Education</span>
                </div>
                <div class="user-bio-section-body">
                  <div
                    v-for="(item, index) in userInfo.education"
                    :key="index"
                    class="text-muted"
                  >
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
              <div class="user-skills user-bio-section">
                <div class="user-bio-section-header">
                  <svg-icon icon-class="skill" /><span>Skills</span>
                </div>
                <div class="user-bio-section-body">
                  <div
                    v-for="(item, index) in userInfo.skills"
                    :key="index"
                    class="progress-item"
                  >
                    <span>{{ item.name }}</span>
                    <el-progress :percentage="item.process" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="tech">
      <div class="container">
        <div class="title">计算机技术Computer Technology</div>
        <div class="aboutme">
          <h4>永远年轻，永远热泪盈眶</h4>
          <p>2018年9月入学，参加了为期一年的Homyit工作室培训</p>
          <p>2019年5月，完成考核，以前端开发加入Homyit工作室</p>
          <p>2019年7月，为期一个月的暑期集训，完成集训任务</p>
          <p>2019年9月，开始招新宣讲</p>
          <p>2019年11月，着力于前端方向</p>
          <p>2020年4月，完成新生培训计划、培训项目</p>
          <p>2020年5月，结束为期一年的新生培训</p>
          <p>2020年7月，带新生暑期集训一个月</p>
          <p>2020年10月，总结技术栈</p>
          <p>2021年3月，开始着力春招</p>
          <p>2021年7月，入职ACCESS集团大前端技术部</p>
          <p>2021年9月，开始着力秋招</p>
          <p>2021年11月，签约北森云计算</p>
        </div>
      </div>
    </section>
    <section class="environment">
      <div class="container">
        <div class="aboutme">
          <h4>让天更蓝，水更绿，地球更美丽</h4>
          <p>2018年9月入学，参加蓝天环保社团集训</p>
          <p>2018年10月，加入蓝天环保社团环教部</p>
          <p>2018年11月，成为环教部二队队长，小学负责人，第一次进行小学环教</p>
          <p>2018年11月，在余干县瑞洪中学进行保护江豚宣讲活动</p>
          <p>2019年1月，参加第七届鄱阳湖冬季观鸟营，考察鄱阳湖鸟况</p>
          <p>2019年4月，成为第五届江西省大学生环教营筹委，组织策划活动</p>
          <p>2019年6月，成为新一届环教部部长</p>
          <p>2019年9月，招新集训和宣讲</p>
          <p>2019年10月，带领环教部新成员开展环教活动</p>
          <p>2020年4月，带领第六届江西省大学生环教营筹委，组织策划活动</p>
          <p>2020年5月，选拔新一届环教部部长</p>
          <p>2020年6月，从环教部退休啦</p>
          <p>2020年7月，继续关注蓝天和环教的活动和事务，辅助新一届部长的工作</p>
          <p>2021年6月，欢送我的老人毕业</p>
          <p>2021年7月，继续关注蓝天和环教的活动和事务</p>
        </div>
        <div class="title">环境保护Environmental Protection</div>
      </div>
    </section>
    <!-- <section class="contact">
      <div class="container">
        <span class="title"> CONTACT ME </span>
        <form name="sentMessage" id="contactForm" novalidate="">
          <div class="control-group">
            <div class="form-group">
              <label>Name</label>
              <input
                class="form-control"
                id="name"
                type="text"
                placeholder="Name"
                required=""
                data-validation-required-message="Please enter your name."
                aria-invalid="false"
              />
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Email Address</label>
              <input
                class="form-control"
                id="email"
                type="email"
                placeholder="Email Address"
                required=""
                data-validation-required-message="Please enter your email address."
                aria-invalid="false"
              />
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Phone Number</label>
              <input
                class="form-control"
                id="phone"
                type="tel"
                placeholder="Phone Number"
                required=""
                data-validation-required-message="Please enter your phone number."
                aria-invalid="false"
              />
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <div class="control-group">
            <div class="form-group floating-label-form-group controls">
              <label>Message</label>
              <textarea
                class="form-control"
                id="message"
                rows="5"
                placeholder="Message"
                required=""
                data-validation-required-message="Please enter a message."
                aria-invalid="false"
              />
              <p class="help-block text-danger"></p>
            </div>
          </div>
          <br />
          <div id="success"></div>
          <div class="form-group">
            <button
              type="submit"
              class="btn btn-success btn-lg"
              id="sendMessageButton"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section> -->
    <section class="picture-album">
      <div class="container">
        <img
          :src="item.picture_url"
          alt=""
          v-for="(item, index) in pictureList"
          :key="index"
        />
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "__COMPONENTS__/Header";
import Footer from "__COMPONENTS__/Footer";
import { userInfo } from "../../constant/user";
import { INDEX_PAGE_CAROUSEL_IMG } from "../../constant/preset"

import { fetchUserInfo } from "../../api/userInfo"
import { fetchCarouselImgList } from "../../api/preset"

export default {
  name: "About",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      userInfo: userInfo[0],
      pictureList : INDEX_PAGE_CAROUSEL_IMG
    };
  },
  created() {
    this.getUserInfo()
    this.getPictureList()
  },
  methods:{
    async getUserInfo(){
      const { res, err } = await fetchUserInfo(20)
      if(res){
        console.log(res)
        this.userInfo = res.result
      }
    },
    async getPictureList(){
      const { res, err } = await fetchCarouselImgList()
      if(res){
        
        let tep = [...res.result.list,...INDEX_PAGE_CAROUSEL_IMG].slice(0,8)
        console.log(tep)
        this.pictureList = tep
      }
    }
  }
};
</script>

<style lang='less' scoped>
section {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 60px 0;
  .container {
    margin: 0 auto;
    max-width: 1060px;
    min-width: 320px;
    text-align: center;
  }
}
section.above {
  // min-height: e("calc(100vh - 106px)");
  background-color: rgb(0, 160, 234);
  margin: 0;
  display: flex;
  align-items: center;
  .avatar {
    display: block;
    width: 15vw;
    border-radius: 50%;
    margin: 100px auto 50px auto;
  }
  .slogan {
    font-size: 66px;
    font-weight: 600;
    color: aliceblue;
  }
  .intro {
    display: inline-block;
    margin: 30px 0 0 0;
    font-size: 30px;
    font-weight: 300;
    color: aliceblue;
  }
}
section.profile {
  .container {
    // margin: 0 10vw;
    height: 100%;
    .title {
      margin: 0;
      padding: 10px 0 30px 0;
      font-size: 37px;
      font-weight: 600;
      text-align: center;
    }
    .content {
      display: flex;
      .content-group {
        margin: 0 30px;
        font-size: 18px;
        font-weight: 300;
        // letter-spacing: 0.1rem;
      }

      .content-group.intro {
        flex: 1;
      }

      .content-group.bio {
        min-width: 370px;
      }
      p {
        text-indent: 2em;
        font-size: 23px;
        font-weight: 300;
        text-align: left;
      }
    }
  }
}

.user-bio {
  margin-top: 20px;
  padding: 0 30px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }

    .user-bio-section-body {
      font-size: 14px;
    }
  }

  .user-bio-section:not(.user-education, .user-skills) {
    display: flex;
    justify-content: space-between;
    .user-bio-section-header {
      border-bottom: 0px solid #dfe6ec;
      padding-bottom: 0px;
      margin-bottom: 0px;
      font-weight: 300;
    }
  }
  .user-bio-section.user-skills,
  .user-bio-section.user-education {
    text-align: left;
    .text-muted {
      margin: 5px 0;
    }
  }
}

section.tech,
section.contact,
section.picture-album {
  background-color: rgb(0, 160, 234);
  color: aliceblue;
}

section.tech,
section.environment {
  display: flex;
  .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      // margin: 0 100px 0 0;
      width: 200px;
      // flex: 1;
      font-size: 36px;
      font-weight: 300;
      // text-align: right;
    }
    .aboutme {
      flex: 1;
      // font-size: 18px;
    }
  }
}

section.contact {
  .container {
    width: 45%;
    text-align: center;
  }
  .title {
    font-size: 50px;
    font-weight: 600;
    text-align: center;
  }
  form {
    margin-top: 60px;
  }
}
section.picture-album {
  display: flex;
  align-items: center;
  .container {
    width: 70%;
    margin: auto;
    // padding: 100px 0;
    display: grid;
    grid-template-rows: 150px 150px 150px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
    grid-template-areas:
      "a a b c c c"
      "d d b c c c"
      "e f g h h h";
    place-items: center center;
    grid-gap: 10px 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .container img:nth-child(1) {
    grid-area: a;
  }

  .container img:nth-child(2) {
    grid-area: b;
  }
  .container img:nth-child(3) {
    grid-area: c;
  }
  .container img:nth-child(4) {
    grid-area: d;
  }

  .container img:nth-child(5) {
    grid-area: e;
  }
  .container img:nth-child(6) {
    grid-area: f;
  }
    .container img:nth-child(7) {
    grid-area: g;
  }
    .container img:nth-child(8) {
    grid-area: h;
  }
}

.control-group {
  .form-group {
    position: relative;
    margin-bottom: 0;
    padding-bottom: 0.5em;
    border-bottom: 1px solid #eee;
  }

  label {
    font-size: 0.85em;
    line-height: 1.764705882em;
    position: relative;
    z-index: 0;
    top: 2em;
    display: block;
    margin: 0;
    transition: top 0.3s ease, opacity 0.3s ease;
    vertical-align: middle;
    vertical-align: baseline;
    opacity: 0;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.25;
    color: #495057;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    // border: 1px solid rgba(0,0,0,.15);
    border-radius: 0.25rem;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  }
  input.form-control,
  textarea.form-control {
    font-size: 1.5em;
    position: relative;
    z-index: 1;
    padding-right: 0;
    padding-left: 0;
    resize: none;
    border: none;
    border-radius: 0;
    outline: none;
    background: 0 0;
    box-shadow: none !important;
  }
}

.btn-success {
  font-weight: 700;
  color: #fff;
  border-color: rgb(0, 160, 234);
  background-color: rgb(0, 160, 234);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  text-align: left;
}

#contactForm:last-child {
  text-align: left;
}
</style>