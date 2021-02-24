<template>
  <div>
    <h1>新增优惠券</h1>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item v-bind="formItemLayout" label="优惠券类型">
        <a-input
          v-decorator="[
            'coupon_type',
          ]"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="优惠券名称">
        <a-input
          v-decorator="[
            'coupon_Name',
          ]"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="优惠券金额">
        <a-input
          v-decorator="[
            'discount_Amount',
          ]"
        />
      </a-form-item>
      <a-form-item label="起始时间" v-bind="formItemLayout">
        <a-range-picker
          v-decorator="['time']"
          show-time
          format="YYYY-MM-DD HH:mm:ss"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="状态">
        <a-input
          v-decorator="[
            'status',
          ]"
        />
      </a-form-item>
      <a-form-item v-bind="tailFormItemLayout">
        <a-button type="primary" html-type="submit">
          确认新增
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import dateUtils  from "../../untils/dateUtils"
const {mapActions} = createNamespacedHelpers("coupons");

export default {
  data() {
    return {
      confirmDirty: true,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 4 },
        },
        wrapperCol: {
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          sm: {
            offset: 8,
          },
        },
      },
    };
  },
 beforeCreate() {
    this.form = this.$form.createForm(this, { name: '确认新增' });
  },
    
  methods: {
    ...mapActions(["add"]),
    handleSubmit(e) {
       e.preventDefault();
        this.form.validateFieldsAndScroll((err, values) => {
            const {coupon_type,coupon_Name,discount_Amount,status,time}=values
           this.add({coupon_type,coupon_Name,discount_Amount,status,time_start:dateUtils.time(time[0]._d),time_end:dateUtils.time(time[1]._d)})
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
