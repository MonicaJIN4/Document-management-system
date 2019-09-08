<template>
  <d2-container>
    <template slot="header">搜索</template>
 <div style="margin-top: 15px;">
 
 <div class="input-form">
  <p>输入文件名</p>
  <input type="text" v-model="filename">
  <p>输入文件类型</p>
  <input type="text" v-model="type">
  <p>输入所有者</p>
  <input type="text" v-model="owner">
    <el-button class="search-btn" slot="append" icon="el-icon-search" @click="fetchData">立即搜索</el-button>
</div>

<div class="res-form-i">
      <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      :loading="loading"/></div>
  </div>

  </d2-container>
</template>

<script>
import { Search } from '@api/system/search';

export default {
  name: 'page3',
      filename:'',
      type:'',
      owner:'',
  data () {
    return{
      data:[],
      columns: [
        {
          title: '文件名',
          key: 'fileName',
          width: '150'
        },
        {
          title: '所在文件夹',
          key: 'filePath',
          width: '250',
        },
        {
          title: '类型',
          key: 'fileType',
          width: '150',
        },
        {
          title: '所有者',
          key: 'fileOwner',
          width: '150',
        },
        {
          title: '创建时间',
          key: 'createDate',
          width: '250',
        }
      ],
    }
  },
  updated(){
    this.fetchData()
  },
  methods: {
    fetchData(){
      this.loading = true
      let filename = this.filename
      let type = this.type
      let owner = this.owner
      Search(filename,type,owner)
      .then(res => {
        this.data = res
        this.loading = false
      }).catch(err => {
        console.log('err', err)
        this.loading = false
      })
    }
  },
}
</script>
<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .input-form{
    float:left;
    overflow:hidden;
    margin-right:30px;
  }
  p{
    padding:0;
    margin:0;
    font-size:15px;
    color:#777;
  }
  input{
    display: block;
    margin-bottom:5px;
  }
  .search-btn{
    margin-top:15px;
    padding:10px;
    float:left;
  }
  .res-form-i{
    float:left;
  }
</style>