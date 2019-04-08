<template>
  <div class="m-menu">
    <dl
      class="nav"
      @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd
        v-for="(item,idx) in menu"
        :key="idx"
        @mouseenter="enter">
        <i :class="item.type"/>{{ item.name }}<span class="arrow"/>
      </dd>
    </dl>
    <div
      v-if="kind"
      class="detail"
      @mouseenter="sover"
      @mouseleave="sout">
      <template v-for="(item,idx) in curdetail.child">
        <h4 :key="idx">{{ item.title }}</h4>
        <span
          v-for="v in item.child"
          :key="v">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      kind:'',
      menu:[{
        type:'food',
        name:'美食',
        child:[{
          title:'美食',
          child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
        }]
      },{
        type:'offspring',
        name:'外卖',
        child:[{
          title:'外卖',
          child:['食堂外卖','外卖带取','小食代购','...']
        }]
      },{
        type:'life',
        name:'生活服务',
        child:[{
          title:'生活服务',
          child:['洗衣服','搬运/运输','代购','...']
        }]
      }]
    }
  },
  computed:{
    curdetail:function(){
      return this.menu.filter(item => item.type===this.kind)[0]
    }
  },
  methods:{
    mouseleave:function(){
      let self=this;
      self._timer=setTimeout(function(){
        self.kind=''
      },150)
    },
    enter:function(e){
      this.kind=e.target.querySelector('i').className
    },
    sover:function(){
      clearTimeout(this._timer)
    },
    sout:function(){
      this.kind=''
    }
  }
}
</script>

<style lang="css">
</style>
