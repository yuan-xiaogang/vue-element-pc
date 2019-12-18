<template>
  <div class="home">
    <el-container>
      <el-aside class="custom__aside" :style="asideStyle">
        <custom-aside></custom-aside>
      </el-aside>
      <el-container>
        <el-header>
          <custom-header class="home__header"></custom-header>
        </el-header>
        <el-main class="home__main">
          <div class="home__main_scrollbar">
            <el-backtop target=".home__main_scrollbar" :bottom="100" class="home__layout_backtop">
              <div class="home_back_top">
              <img src="@/assets/images/home_back_top.png" />
              <div class="text">顶部</div>
            </div>
            </el-backtop>
            <el-scrollbar>
              <router-view />
            </el-scrollbar>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import CustomAside from "_c/layout/CustomAside";
import CustomHeader from "_c/layout/CustomHeader";
import { mapState } from "vuex";
export default {
  name: "home",
  data() {
    return {};
  },
  components: {
    CustomHeader,
    CustomAside
  },
  computed: {
    ...mapState(["isCollapse"]),
    asideStyle() {
      return {
        width: !this.isCollapse ? "200px" : "auto"
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-header {
    padding: 0;
    position: relative;
    z-index: 11;
  }
  &__main {
    position: relative;
    padding: 0;
  }
}
.custom {
  &__aside {
    box-shadow: 1px 0 4px rgba(0, 21, 41, 0.08);
  }
}
.home__main_scrollbar {
  overflow-x: hidden;
  height: 100%;
  padding: 20px;
}
    .home_back_top {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #fff;
      img {
        width: 18px;
        height: 16px;
      }
      .text{
        height: 13px;
      }
    }
      .home__layout_backtop {
    width: 46px;
    height: 46px;
    border-radius: 4px;
    background-color: #409eff;
    &:hover {
      background-color: #409eff;
    }
    .home_back_top {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #fff;
      img {
        width: 18px;
        height: 16px;
        display: inline-block;
        margin-bottom: 4px;
      }
      .text{
        height: 13px;
      }
    }
  }
</style>
