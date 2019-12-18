<template>
  <section class="CustomAside">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-custom"
      :collapse="isCollapse"
      :router="true"
    >
      <sidebar-item
        v-for="route in routeList"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </section>
</template>

<script>
import { mapState } from "vuex";
import SidebarItem from "./SidebarItem";
export default {
  name: "CustomAside",
  data() {
    return {
      routeList: []
    };
  },
  components: {
    SidebarItem
  },
  computed: {
    ...mapState(["isCollapse"])
  },
  watch: {},
  created() {},
  mounted() {
    console.log(this.$router.options.routes);
    let list = this.$router.options.routes;
    let _this = this;
    list.forEach(el => {
      if (!el.meta.hideInMenu) {
        _this.routeList.push(el);
      }
    });
  },
  methods: {
    hasChild(obj) {
      if (obj && obj.children && obj.children.length > 0) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style scoped lang="scss">
.el-menu {
  border-right: none;
}
</style>
