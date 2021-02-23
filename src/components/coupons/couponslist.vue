<template>
<div>
  <a-table :columns="columns" :data-source="data" :scroll="{ x: 1500, y: 300 }">
    <a slot="action">删除</a>
  </a-table>
  </div>
</template>

<script>
const columns = [
  { title: "id", width: 100,dataIndex: "name",key: "name",fixed: "left",},
  { title: "类型", dataIndex: "address", key: "5",width: 150},
  { title: "名称", dataIndex: "age", key: "age",width: 150},
  { title: "优惠券金额", dataIndex: "address", key: "1", width: 150 },
  { title: "开始时间", dataIndex: "address", key: "2", width: 150 },
  { title: "结束时间", dataIndex: "address", key: "3", width: 150 },
  { title: "状态", dataIndex: "address", key: "4", width: 150 },
  {
    title: "操作",key: "operation",fixed: "right",width: 100,scopedSlots: { customRender: "action" },},
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>

<style lang="scss" scoped></style>
