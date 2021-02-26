<template>
  <div>
    <a-table
      :columns="columns"
      :data-source="rows"
      :pagination="false"
      :rowKey="(record, index) => record._id"
    >
      <template slot="action" slot-scope="text, record">
        <a-popconfirm
          v-if="rows.length"
          title="Sure to delete?"
          @confirm="() => del_commodity(record._id)"
        >
          <a style="color: red; margin-right: 10px" href="javascript:;">删除</a>
        </a-popconfirm>

        <a href="javascript:;" @click="() => edit(record)">修改</a>
      </template>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="
            tag === 'loser' ? 'volcano' : tag.length >= 3 ? 'geekblue' : 'green'
          "
        >
          {{ tag }}
        </a-tag>
      </span>
    </a-table>
    <a-pagination
      :total="total"
      show-size-changer
      show-quick-jumper
      @showSizeChange="onShowSizeChange"
      @change="current"
      style="margin-top: 5px"
    />
    <CommodityUpdatacommodity
      @showDrawer="showDrawer"
      :visible="visible"
      :commodity="commodity"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "commodity"
);

export default {
  data() {
    return {
      visible: false,
      data: [],
      commodity: {},
      columns: [
        {
          title: "商品名称",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "商品分类",
          dataIndex: "listName",
          key: "listName",
          filters: [
            {
              text: "32",
              value: "32",
            },
          ],
          scopedSlots: { customRender: "tags" },
          onFilter: (value, record) => record.listName.indexOf(value) === 0,
        },
        { title: "商品描述", dataIndex: "content", key: "content", width: 200 },
        {
          title: "商品价格",
          dataIndex: "price",
          key: "price",
          align: "center",
        },
        {
          title: "商品温度",
          dataIndex: "temperature",
          key: "temperature",
          width: 150,
          scopedSlots: { customRender: "tags" },
        },
        {
          title: "商品甜度",
          dataIndex: "sweetness",
          key: "sweetness",
          width: 150,
          scopedSlots: { customRender: "tags" },
        },

        {
          title: "操作",
          key: "operation",
          align: "center",
          scopedSlots: { customRender: "action" },
        },
      ],
    };
  },
  watch: {
    curpage: function () {
      this.get().then(() => {
        this.filter_listName();
        
      });
    },
    eachpage: function () {
      this.get().then(() => {
        this.filter_listName();
        
      });
    },
  },
  methods: {
    ...mapMutations(["toggle_curpage", "toggle_eachpage"]),
    onShowSizeChange(current, pageSize) {
      this.toggle_eachpage(pageSize);
    },
    current(pageNumber) {
      this.toggle_curpage(pageNumber);
    },
  
    del_commodity(_id) {
      this.del(_id);
      this.get();
    },
    edit(key) {
      this.commodity = key;
      this.showDrawer();
    },
    showDrawer() {
      this.visible = !this.visible;
    },
    filter_listName() {
      const listName = new Set();
      const data = this.rows.map((item) => listName.add(item.listName[0]));
      this.columns[1].filters = [...data[0]].map((item) => ({
        text: item,
        value: item,
      }));
    },
    ...mapActions(["get", "del", "get_listName"]),
  },
  computed: {
    ...mapState(["maxpage", "total", "rows", "curpage", "eachpage"]),
  },

  mounted() {
    this.get().then(() => {
      this.filter_listName();
    });
  },
};
</script>

<style lang="css" scoped>
#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}
</style>

