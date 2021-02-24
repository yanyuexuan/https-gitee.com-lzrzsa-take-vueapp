<template>
  <div>
    <div>
      <a-card
        hoverable
        style="width: 540px;position: absolute;top:20%;left:30%; z-index: 5000;"
        :class="[disp ? 'updatadispaly' : 'updatahide']"
      >
        <a-form-item label="优惠券类型" style="display: flex;width: 440px">
          <a-input v-model="coupon_type" v-decorator="['coupon_type']" />
        </a-form-item>
        <a-form-item label="优惠券名称" style="display: flex;width: 440px">
          <a-input v-model="coupon_Name" v-decorator="['coupon_type']" />
        </a-form-item>
        <a-form-item label="优惠券金额" style="display: flex;width: 440px">
          <a-input v-model="discount_Amount" v-decorator="['coupon_type']" />
        </a-form-item>
        <a-form-item label="优惠券状态" style="display: flex;width: 440px">
          <a-input v-model="status" v-decorator="['coupon_type']" />
        </a-form-item>
        <a-form-item label="起始时间" style="display: flex;width: 440px">
          <a-range-picker
            v-decorator="['time']"
            show-time
            format="YYYY-MM-DD HH:mm:ss"
            :value="getDateRange(startTime, endTime)"
          />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="submit" style="width: 440px">
            确认修改
          </a-button>
        </a-form-item>
      </a-card>
    </div>

    <a-table
      :columns="columns"
      :data-source="rows"
      :scroll="{ x: 1500, y: 600 }"
    >
      <template slot="action" slot-scope="record">
        <a-button
          slot="action"
          @click="handleDelete(record)"
          style="margin-left:10px;border-radius:50px"
          >删除</a-button
        >
        <a-button
          type="primary"
          slot="action"
          @click="upCoupons(record)"
          style="margin-left:10px;border-radius:50px"
          >修改</a-button
        >
      </template>
    </a-table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import moment from "moment";
// import dateUtils  from "../../untils/dateUtils"
const { mapActions, mapState, mapMutations } = createNamespacedHelpers(
  "coupons"
);
const columns = [
  { title: "id", width: 260, dataIndex: "_id", key: "id", fixed: "left" },
  { title: "类型", dataIndex: "coupon_type", key: "coupon_type", width: 100 },
  { title: "名称", dataIndex: "coupon_Name", key: "coupon_Name", width: 100 },
  {
    title: "优惠券金额",
    dataIndex: "discount_Amount",
    key: "discount_Amount",
    width: 100,
  },
  { title: "开始时间", dataIndex: "time_start", key: "time_start", width: 100 },
  { title: "结束时间", dataIndex: "time_end", key: "time_end", width: 100 },
  { title: "状态", dataIndex: "status", key: "status", width: 100 },
  {
    title: "操作",
    key: "operation",
    fixed: "right",
    width: 200,
    scopedSlots: { customRender: "action" },
  },
];

// const data = [];
// function ergodic(rows) {
//   console.log(rows);
//    rows.map((item, index) => {
//       console.log(item,'lkdls');
//     data.push({
//       key: index,
//       _id: `${item._id}`,
//     //   coupon_Name:`${coupon_Name}`,

//     });
//   });
// }
export default {
  data() {
    return {
      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false,
      columns,
      coupon_id: "",
      coupon_type: "",
      coupon_Name: "",
      discount_Amount: "",
      endTime: "",
      startTime: "",
      status: "",
      disp:false,
    };
  },
  // 数据
  computed: {
    ...mapState(["eachPage", "maxPage", "rows"]),
    curPage: {
      get() {
        return this.$store.state.coupons.curPage;
      },
      set(newVal) {
        this.$store.state.coupons.curPage = newVal;
        this.get();
      },
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "确认新增" });
  },
  methods: {
    ...mapActions(["get", "dels", "upCoupon"]),
    ...mapMutations(["togglePage"]),
    // 时间返显
    getDateRange(startDate, endDate) {
      if (
        startDate == "" ||
        startDate == null ||
        endDate == "" ||
        endDate == null
      ) {
        return [(startDate = ""), (endDate = "")];
      }
      return [moment(startDate, "YYYY-MM-DD"), moment(endDate, "YYYY-MM-DD")];
    },
    // 删除优惠券
    handleDelete({ _id }) {
      this.dels({ _id });
    },
    // 修改
    upCoupons(e) {
      this.coupon_type = e.coupon_type;
      this.coupon_Name = e.coupon_Name;
      this.discount_Amount = e.discount_Amount;
      this.coupon_id = e._id;
      (this.startTime = e.time_start),
        (this.endTime = e.time_end),
        (this.status = e.status);
        this.disp=true
        console.log(this.disp);
    },
    // 确认修改
    submit(e) {
      e.preventDefault();
      console.log(this.coupon_type, this.coupon_id, this.startTime);
      this.upCoupon({
        id: this.coupon_id,
        coupon_type: this.coupon_type,
        coupon_Name: this.coupon_Name,
        discount_Amount: this.discount_Amount,
        status: this.status,
        time_start: this.startTime,
        time_end: this.endTime,
      });
      this.disp=false
      console.log(this.disp);
    },
  },
  watch: {
    curPage() {
      this.get();
    },
  },
  mounted() {
    this.get();
    // ergodic(this.rows);
  },
};
</script>

<style>
      .updatadispaly{
        display: "block",
      }
      .updatahide {
        display: "none",
      }
</style>
