# Vue  element ui里dialog关闭后清除验证条件方法

**关闭dialog触发事件**

```vue
//vue
 <!--添加用户dialog begin-->
   <el-dialog title="编辑用户" 			    :visible.sync="dialogFormVisible"
     custom-class="editDialog"
     :close-on-click-modal="false"
     :before-close = "cleanContent"
     :show-close = "false"
     size='tiny'>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
 <el-form-item label="账户名" prop="account" label-width="100px" >
 <el-col :span="20">
 <el-input v-model="ruleForm.account" ></el-input>
 </el-col>
 </el-form-item>
 </el-form>
 <div slot="footer" class="dialog-footer">
 <el-button @click="cancledialog('ruleForm')">取 消</el-button>
 </div>
</el-dialog>

//js
cancledialog(formRule){
   this.$refs[formRule].resetFields();
 }
```