<template>
  <div>
    <a-table
      :columns="columns"
      :data-source="rows"
      :pagination="false"
      @change="onChange"
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
    <a-pagination :total="total" show-size-changer show-quick-jumper />
    <CommodityUpdatacommodity :visible="visible"/>
  </div>
  
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("commodity");

export default {
  data() {
    return {
        visible: false,
      data: [],
      columns: [
        {
          title: "商品名称",
          dataIndex: "name",
          key: "name",
          filters: [],
          onFilter: () => {},
        },
        {
          title: "商品分类",
          dataIndex: "age",
          key: "age",
          filters: [
            {
              text: "32",
              value: "32",
            },
          ],
          onFilter: (value, record) => {
            console.log(record, value);
          },
        },
        { title: "商品描述", dataIndex: "content", key: "content", width: 200 },
        {
          title: "商品价格",
          dataIndex: "price",
          key: "price",
          width: 100,
          align: "center",
        },
        {
          title: "商品温度",
          dataIndex: "temperature",
          key: "temperature",
          width: 200,
          scopedSlots: { customRender: "tags" },
        },
        {
          title: "商品甜度",
          dataIndex: "sweetness",
          key: "sweetness",
          width: 200,
          scopedSlots: { customRender: "tags" },
        },

        {
          title: "操作",
          key: "operation",

          scopedSlots: { customRender: "action" },
        },
      ],
    };
  },
  watch: {},
  methods: {
    onChange(pagination, filters, sorter) {
      console.log(pagination, filters, sorter);
      this.get(filters);
    },
    del_commodity(_id) {
      this.del(_id);
      this.get();
    },
    edit(key) {
      console.log(key);
        this.visible = true;
    },
    ...mapActions(["get", "del"]),
  },
  computed: {
    ...mapState(["maxpage", "total", "rows"]),
  },
  mounted() {
    this.get();
    this.columns[0].filters.push(
      {
        text: "脏脏王",
        value: "脏脏王",
      },
      {
        text: "脏脏王1",
        value: "脏脏王1",
      }
    );
  },
};
</script>

<style lang="css" scoped>
#components-pagination-demo-mini .ant-pagination:not(:last-child) {
  margin-bottom: 24px;
}
</style>