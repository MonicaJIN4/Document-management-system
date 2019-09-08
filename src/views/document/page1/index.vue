<template>
  <d2-container>
    <template slot="header">文档管理</template>
    <div>
      <el-tree 
      :data="data" 
      :props="defaultProps" 
      @node-click="handleNodeClick"></el-tree>
    </div>
  <el-divider></el-divider>
  <div class="input-form">
  <p>地址：</p>
  <input type="text" v-model="filepath" class="filepath">
    <el-button class="search-btn" slot="append" icon="el-icon-search" @click="fetchData">立即搜索</el-button>
</div>

<div class="res-form">
      <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="formData"
      :loading="loading"
      :rowHandle="rowHandle"
      @row-remove="handleRowRemove"
      
      @custom-emit-1="handleCustomEvent"/>
</div>
  </d2-container>
</template>

<script>
import { List, SearchSubFile, Download, SearchFile, DocDel } from "@api/document";

export default {
  name: "page1",
  data() {
    return {
      data: [],//树形图
      defaultProps: {
        children: "children",
        label: "label"
      },
      filepath:'',//地址栏返回文件路径
      subfileid:[],
      formData:[],//表格
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
          width: '80',
        },
        {
          title: '所有者',
          key: 'fileOwner',
          width: '100',
        },
        {
          title: '创建时间',
          key: 'createDate',
          width: '200',
        }
      ],
      rowHandle: {
        columnHeader: '操作',
        // 下载
        custom: [
          {
            text: '下载',
            type: 'warning',
            size: 'small',
            emit: 'custom-emit-1'
          }
        ],
        remove: {
          icon: 'el-icon-delete',
          size: 'small',
          fixed: 'right',
          confirm: true,
          show (index, row) {
            // if (row.showRemoveButton) {
              return true
            // }
            // return false
          },
          disabled (index, row) {
            // if (row.forbidRemove) {
            //   return true
            // }
            return false
          }
        }
    }
    };
  },
  mounted () {
    this.fetchData();
  },
  methods: {
    handleNodeClick(data) { 
      console.log(data); 
      var id = data.id
      console.log("id",id); 
      // 搜索文件夹
      SearchSubFile(id)
      .then(res => {
        this.formData = res
        this.loading = false
      }).catch(err => {
        console.log('err', err)
        this.loading = false
      }),
      // 搜索文件
      SearchFile(id)
      .then(res => {
        this.filepath = res
        this.loading = false
      }).catch(err => {
        console.log('err', err)
        this.loading = false
      })
    },
    fetchData(){
      this.loading = true
      List()
      .then(res => {
        console.log('res:', res)
        let str = JSON.stringify(res).replace(/\//g, '')
        console.log('success', str)
        this.data = JSON.parse(str).children
        this.loading = false
      }).catch(err => {
        console.log('err', err)
        this.loading = false
      })
    },
    handleRowRemove ({ index, row }, done) {
      console.log(index)
      console.log(row)
      setTimeout(() => {
        DocDel(row.fileId).then((res)=>{
          console.log("success",res);
        }),
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        done()
      }, 300)
    },
    // 下载
    handleCustomEvent ({ index, row }) {
      setTimeout(() => {
        console.log(index)
        console.log(row)
        Download(row.fileId)
        .then(res => {
        console.log("data",res)
        this.$message({
          message: '下载成功',
          type: 'success'
        })
      }, 300)
    })
  }
}}
</script>
<style scoped>
.filepath{
  width: 180px;
}
</style>