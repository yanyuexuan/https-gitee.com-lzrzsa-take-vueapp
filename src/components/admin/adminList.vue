<template>
  <table border="1" style="width:500px;text-align:center">
    <thead>
      <tr>
        <th style="width:50px">id</th>
        <th style="width:50px">姓名</th>
        <th style="width:50px">密码</th>
        <th style="width:50px">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in rows" :key="item._id">
        <td>{{ item._id }}</td>
        <td>{{ item.adminName }}</td>
        <td>{{ item.adminPassword }}</td>
        <td>
          <button @click="change" :id="item._id">修改</button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- <a-table :columns="columns" :data-source="data" bordered>
    <template
      v-for="col in ['_id', 'adminName', 'adminPassword']"
      :slot="col"
      slot-scope="text, record"
    >
      <div :key="col">
        <a-input
          v-if="record.editable"
          style="margin: -5px 0"
          :value="text"
          @change="(e) => handleChange(e.target.value, record.key, col)"
        />
        <template v-else>
          {{ text }}
        </template>
      </div>
    </template>

    <template slot="operation" slot-scope="text, record">
      <div class="editable-row-operations">
        <span v-if="record.editable">
          <a @click="() => save(record.key)">Save</a>
          <a-popconfirm
            title="Sure to cancel?"
            @confirm="() => cancel(record.key)"
          >
            <a>Cancel</a>
          </a-popconfirm>
        </span>
        <span v-else>
          <a :disabled="editingKey !== ''" @click="() => edit(record.key)"
            >修改</a
          >
        </span>
      </div>
    </template>

    
    
  </a-table> -->
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("admin");

// const columns = [
//   {
//     title: "id",
//     dataIndex: "_id",
//     width: "40%",
//     scopedSlots: { customRender: "_id" },
//   },
//   {
//     title: "账号",
//     dataIndex: "adminName",
//     width: "25%",
//     scopedSlots: { customRender: "adminName" },
//   },
//   {
//     title: "密码",
//     dataIndex: "adminPassword",
//     width: "15%",
//     scopedSlots: { customRender: "adminPassword" },
//   },
//   {
//     title: "operation",
//     dataIndex: "operation",
//     scopedSlots: { customRender: "operation" },
//   },
// ];

// const data = [];
// for (let i = 0; i < 8; i++) {
//   data.push({
//     key: i.toString(),
//     _id: `${i}`,
//     adminName: `Edrward ${i}`,
//     adminPassword: 32,
//   });
// }

export default {
  data() {
    return {};
  },

  //   data() {
  //     this.cacheData = data.map((item) => ({ ...item }));
  //     console.log(this);

  //     return {
  //       data,
  //       columns,
  //       editingKey: "",
  //     };
  //   },

  computed: {
    ...mapState(["curPage", "eachPage", "maxPage", "total", "rows"]),
  },

  mounted() {
    this.get();
  },

  methods: {
    ...mapActions(["get", "find"]),

    change: async function(e) {
      const _id = e.target.id;
      const data = await this.find({ _id });
      if(data){
          this.$router.history.push(`/info/updateAdmin/${_id}`);
      }
    },

    //     handleChange(value, key, column) {
    //       const newData = [...this.data];
    //       const target = newData.filter((item) => key === item.key)[0];
    //       if (target) {
    //         target[column] = value;
    //         this.data = newData;
    //       }
    //     },
    //     edit(key) {
    //       const newData = [...this.data];
    //       const target = newData.filter((item) => key === item.key)[0];
    //       this.editingKey = key;
    //       if (target) {
    //         target.editable = true;
    //         this.data = newData;
    //       }
    //     },
    //     save(key) {
    //       const newData = [...this.data];
    //       const newCacheData = [...this.cacheData];
    //       const target = newData.filter((item) => key === item.key)[0];
    //       const targetCache = newCacheData.filter((item) => key === item.key)[0];
    //       if (target && targetCache) {
    //         delete target.editable;
    //         this.data = newData;
    //         Object.assign(targetCache, target);
    //         this.cacheData = newCacheData;
    //       }
    //       this.editingKey = "";
    //     },
    //     cancel(key) {
    //       const newData = [...this.data];
    //       const target = newData.filter((item) => key === item.key)[0];
    //       this.editingKey = "";
    //       if (target) {
    //         Object.assign(
    //           target,
    //           this.cacheData.filter((item) => key === item.key)[0]
    //         );
    //         delete target.editable;
    //         this.data = newData;
    //       }
    //     },
  },
};
</script>

<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>
