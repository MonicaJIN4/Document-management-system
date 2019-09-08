<template>
  <d2-container>
    <template slot="header">角色管理</template>
      <div>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      :loading="loading"
      :pagination="pagination"
      @pagination-current-change="paginationCurrentChange"
      
      add-title="我的新增"
      :add-template="addTemplate"
      :form-options="formOptions"
      :add-rules="addRules"
      @row-add="handleRowAdd"
      @dialog-cancel="handleDialogCancel"
      
      :rowHandle="rowHandle"
      edit-title="我的修改"
      :edit-template="editTemplate"
      @row-edit="handleRowEdit"
      
      @row-remove="handleRowRemove">
      <el-button slot="header" style="margin-bottom: 5px" @click="addRow">新增</el-button>
    </d2-crud>

    
  </div>
  </d2-container>
</template>

<script>
import { List,Del,Add,Edit,Page } from '@api/system/user';

export default {
  name: 'page1',
  data () {
    return {
      columns: [
        {
          title: '用户名',
          key: 'code',
          width: '250'
        },
        {
          title: '密码',
          key: 'password',
          width: '250',
        },
        {
          title: '角色',
          key: 'role',
          width: '130',
        }
      ],
      data: [],
      loading: false,
      pagination: {
        currentPage: 1,
        pageSize: 5,
        total: 0
      },
      addTemplate: {
        code: {
          title: '用户名',
          value: ''
        },
        password: {
          title: '密码',
          value: ''
        },
        role: {
          title: '角色',
          value: ''
        }
      },
      formOptions: {
        labelWidth: '80px',
        labelPosition: 'left',
        saveLoading: false
      },
      addRules: {
        code: [ { required: true, message: '请输入用户名', trigger: 'blur' } ],
        password: [ { required: true, message: '请输入密码', trigger: 'blur' } ],
        role: [ { required: true, message: '请输入角色', trigger: 'blur' } ]
      },
      rowHandle: {
        columnHeader: '操作',
        edit: {
          icon: 'el-icon-edit',
          text: '编辑',
          size: 'small',
          show (index, row) {
            // if (row.showEditButton) {
              return true
            // }
            // return false
          },
          disabled (index, row) {
            // if (row.forbidEdit) {
              // return true
            // }
            return false
          }
        },
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
      editTemplate: {
        code: {
          title: '用户名',
          value: ''
        },
        password: {
          title: '密码',
          value: ''
        },
        role: {
          title: '角色',
          value: ''
        },
        forbidEdit: {
          title: '禁用按钮',
          value: false,
          component: {
            show: false
          }
        },
        showEditButton: {
          title: '显示按钮',
          value: true,
          component: {
            show: false
          }
        }
      }
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
    handleRowAdd (row, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        console.log(row)
        this.$message({
          message: '保存成功',
          type: 'success'
        });

        // done可以传入一个对象来修改提交的某个字段
        done({
          // address: '我是通过done事件传入的数据！'
        })
        this.formOptions.saveLoading = false
      }, 300)
    },
    handleDialogCancel (done) {
      this.$message({
        message: '操作取消',
        type: 'warning'
      });
      done()
    },
    editRowWithNewTemplate () {
      this.$refs.d2Crud.showDialog({
        mode: 'edit',
        rowIndex: 2,
        template: {
          code: {
          title: '用户名',
          value: ''
        },
        password: {
          title: '密码',
          value: ''
        },
        role: {
          title: '角色',
          value: ''
        }
        }
      })
    },
    handleRowEdit ({ index, row }, done) {
      this.formOptions.saveLoading = true
      setTimeout(() => {
        console.log(index)
        console.log(row)
        // Edit(row.id).then((res)=>{
        //   console.log("success",res);
        // }),
        this.$message({
          message: '编辑成功',
          type: 'success'
        })
        done({
          // address: '我是通过done事件传入的数据！'
        })
        this.formOptions.saveLoading = false
      }, 300)
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
