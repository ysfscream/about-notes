# Vue element ui 里table自动默认展开行

核心是 row-key、expand-row-keys属性
特别要注意的是row-key传入的是一个Function(row)，而expand-row-keys传入的是一个数组，元素的值是要展开的row的key。

```html
<template>
  <el-table
    :data="records"
    :row-key="getRowKeys"
    :expand-row-keys="expands">
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      records: [
        { id: 1, name: 'yu' }
      ]
      expands: [], // 要展开的行，数值的元素是row的key值
      getRowKeys(row) { // 获取row的key值
        return row.id,
      },
    }
  },

  mounted() {
    this.expands.push(this.records[0].id)
  },
}
</script>
```