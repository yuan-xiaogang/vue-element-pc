<template>
        <el-menu-item :index="item.path"  v-if="!hasChild(item)">
                <i class="el-icon-menu"></i>
                <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
         <el-submenu :index="item.path" v-else>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{item.meta.title}}</span>
            </template>
            <sidebar-item v-for="route in item.children" :key="route.path" :item="route" :base-path="route.path" />
        </el-submenu>
</template>

<script>
export default {
 name: 'SidebarItem',
 props: {
     item: {
         type: Object,
         default: () => {
             return {}
         }
     }
 },
  data() {
    return {

    }
  },
  components: {},
  computed: {},
  watch: {},
  created () {},
  mounted() {},
  methods: {
                hasChild (obj) {
      if (obj && obj.children && obj.children.length > 0) {
        return true
      }
      return false
    }
  }
}
</script>

<style scoped lang="scss">

</style>
