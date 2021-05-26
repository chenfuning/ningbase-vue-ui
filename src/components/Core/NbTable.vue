<template>
  <div>
    <!--表格栏-->
    <el-table :data="data.content"  stripe highlight-current-row @selection-change=""
              :v-loading="loading" :max-height="maxHeight" :size="size" :align="align" style="width:100%;" >
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column v-for="column in columns"
                       :prop="column.prop" :label="column.label" :width="column.width" :min-width="column.minWidth"
                       :sortable="column.sortable" :fixed="column.fixed" :key="column.prop" :type="column.type">
      </el-table-column>
      <el-table-column label="操作" width="150" fixed="right">
        <template slot-scope="scope">
          <nb-button label="编辑"  :size="size" @click="" />
          <nb-button label="删除"  :size="size" type="danger" @click="" />
        </template>
      </el-table-column>
    </el-table>
    <!--分页栏-->
    <div class="toolbar" style="padding:10px;">
      <nb-button label="批量删除"  :size="size" type="danger"
                  style="float:left;"/>
      <el-pagination layout="total, prev, pager, next, jumper"  style="float:right;">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import NbButton from "../Btn/NbButton";
export default {
  name: 'NbTable',
  components:{
    NbButton
  },
  props: {
    columns: Array, // 表格列配置
    data: Object, // 表格分页数据
    size: { // 尺寸样式
      type: String,
      default: 'mini'
    },
    align: {  // 文本对齐方式
      type: String,
      default: 'left'
    },
    maxHeight: {  // 表格最大高度
      type: Number,
      default: 420
    }
  },
  data(){
    return{
      //分页信息
      pageRequest:{
        pageNum:1,
        pageSize:8
      },
      loading:false,//加载标识
      selections:[]// 列表选中列
    }
  },
  methods: {

  },
}
</script>
