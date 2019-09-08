<template>
  <d2-container>
    <template slot="header">登录日志</template>
      <div>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      :loading="loading"
      :pagination="pagination"
      @pagination-current-change="paginationCurrentChange"
      
      @row-remove="handleRowRemove">
    </d2-crud>

    
  </div>
  </d2-container>
</template>

<script>
import { List,Del,Page } from '@api/system/log';

export default {
  name: 'page1',
  data () {
    return {
      columns: [
        {
          title: '用户ID',
          key: 'userid',
          width: '200'
        },
        {
          title: '内容',
          key: 'content',
          width: '200'
        },
        {
          title: '操作',
          key: 'operation',
          width: '200'
        }
      ],
      data: [],
      loading: false,
      pagination: {
        currentPage: 1,
        pageSize: 2,
        total: 0
      },
      formOptions: {
        labelWidth: '80px',
        labelPosition: 'left',
        saveLoading: false
      },
      rowHandle: {
        columnHeader: '操作',
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
    console.log(this.$refs.d2Crud.d2CrudData);
    this.fetchData();
  },
  methods: {
    paginationCurrentChange (currentPage) {
      this.pagination.currentPage = currentPage
      this.fetchData();
    },
    fetchData () {
      this.loading = true
      Page({
        ...this.pagination
      }).then(res => {
        this.data = res.rows
        this.pagination.total = res.total
        this.loading = false
        console.log("success",res);
      }).catch(err => {
        console.log('err', err)
        this.loading = false
      })
    },
    addRow () {
      this.$refs.d2Crud.showDialog({
        mode: 'add'
      })
    },
    handleDialogCancel (done) {
      this.$message({
        message: '操作取消',
        type: 'warning'
      });
      done()
    },
    handleRowRemove ({ index, row }, done) {
      setTimeout(() => {
        console.log(index)
        console.log(row)
        Del(row.id).then((res)=>{
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
