<template>
  <d2-container>
    <template slot="header">回收站</template>
     <div>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      :rowHandle="rowHandle"
      @row-remove="handleRowRemove"
      
      @custom-emit-1="handleCustomEvent"/>
  </div>
  </d2-container>
</template>

<script>
import { Show, RecReturn, RecDel } from "@api/document";

export default {
  name: 'page2',
  data () {
    return {
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
          width: '250',
        }
      ],
      data: [],
      rowHandle: {
        columnHeader: '操作',
        // 还原
        custom: [
          {
            text: '还原',
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
    },
    }
  },
  mounted () {
    this.fetchData();
  },
  methods:{
    fetchData(){
      this.loading = true
      Show()
      .then(res => {
        this.data = res
        this.loading = false
      }).catch(err => {
        console.log('err', err)
        this.loading = false
      })
    },
    // 还原
    handleCustomEvent ({ index, row }) {
      setTimeout(() => {
        console.log(index)
        console.log(row)
        RecReturn(row.fileId).then((res)=>{
          console.log("success",res);
          this.fetchData();
        }),
        this.$message({
          message: '还原成功',
          type: 'success'
        })
      }, 300)
    },
    // 彻底删除
    handleRowRemove ({ index, row }, done) {
      setTimeout(() => {
        console.log(index)
        console.log(row)
        RecDel(row.fileId).then((res)=>{
          console.log("success",res);
        }),
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        done()
      }, 300)
    }
  }
}
</script>
