<template>
  <div class="container-fluid bg-success">
    <div class="container">
      <!-- 导航菜单 -->
      <b-navbar toggleable="sm" type="dark" variant="success">
        <b-navbar-brand to="/">首页</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">全部课程</b-nav-item>
            <b-nav-item href="#">基础课程</b-nav-item>
            <b-nav-item href="#">核心课程</b-nav-item>
            <b-nav-item href="#">进阶课程</b-nav-item>
            <b-nav-item :to="{name:'teacher'}">名师堂</b-nav-item>
            <b-nav-item href="#">校区</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <em>用户</em>
              </template>
              <b-dropdown-item href="#">用户中心</b-dropdown-item>
              <b-dropdown-item href="#">推出</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style >
  
</style>