<template>
  <section class="CustomHeader">
    <div>
      <span class="CustomHeader__fold" @click="toggleMenu">
        <i class="el-icon-s-unfold" v-if="isCollapse"></i>
        <i class="el-icon-s-fold" v-else></i>
      </span>
    </div>
    <div>
      <div class="CustomHeader__user">
        <span>
           <el-avatar icon="el-icon-user-solid"></el-avatar>
        </span>
        <span>登录</span>
      </div>
    </div>
  </section>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: "CustomHeader",
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState(['isCollapse'])
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    ...mapMutations(['changeCollapse']),
    toggleMenu () {
      this.changeCollapse(!this.isCollapse)
    }
  }
};
</script>

<style scoped lang="scss">
.CustomHeader {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  > div {
    height: 100%;
  }
  &__fold {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    cursor: pointer;
  }
  &__user {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    cursor: pointer;
    > span {
      &:last-child {
        margin-left: 10px;
      }
    }
  }
}
</style>
