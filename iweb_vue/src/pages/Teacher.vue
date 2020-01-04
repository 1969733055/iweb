<template>
  <b-container  >
    <b-row class="my-5" v-for="(item,i) in list" :key="i">
      <b-col lg="2" md="3" sm="4">
        <img :src="require(`../assets/images/${item.tpic}`)" alt="" class="img-fluid"/>
      </b-col>
      <b-col lg="10" md="9" sm="8">
        <h3>{{item.tname}}<span>{{item.maincourse}}</span></h3>
        <dl>
            <dt>工作经历：</dt>
            <dd>{{item.experience}}</dd>
        </dl>
        <dl>
            <dt>授课风格：</dt>
            <dd>{{item.style}}</dd>
        </dl>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Teacher",
  data() {
    return {
        list:[]
    }
  },
  methods: {
    getTeachers() {
      // 通过axios调用node接口
      this.$http.get("/teacher/list").then(res => {
        //   var res=res.data.data;
          if(res.data.code==200){
              this.list=res.data.data;
          }else{
              res.send("vff")
          }
        
          console.log(this.list)
        // console.log(res);
      }).catch(err => {
        console.error(err);
      });
    }
  },
  mounted() {
    // 组件挂载时,调用getTeachers()方法
    this.getTeachers();
  }
}
</script>

<style>
  
</style>