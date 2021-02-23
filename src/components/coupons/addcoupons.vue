<template>
  <div>
    <h1>新增优惠券</h1>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item v-bind="formItemLayout" label="优惠券类型">
        <a-input
          v-decorator="[ 'texts',
           {
              rules: [
                {
                  type: 'text',
                  required: true,
                },
              ],
            },]"
          
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="优惠券名称">
        <a-input
          v-decorator="[
            'text',
            {
              rules: [
                {
                  type: 'text',
                  required: true,
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="优惠券金额">
        <a-input
          v-decorator="[
            'text',
            {
              rules: [
                {
                  type: 'text',
                  required: true,
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="起始时间" v-bind="formItemLayout">
        <a-range-picker
          v-decorator="['range-time-picker', rangeConfig]"
          show-time
          format="YYYY-MM-DD HH:mm:ss"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="状态">
        <a-input
          v-decorator="[
            'text',
            {
              rules: [
                {
                  type: 'text',
                  required: true,
                },
              ],
            },
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


export default {
  data() {
    return {
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
 
  methods: {
    handleSubmit(e) {
        console.log(e);
      e.preventDefault();
    //   this.form.validateFieldsAndScroll((err, values) => {
    //       console.log(err);
    //     if (!err) {
    //       console.log("Received values of form: ", values);
    //     }
    //   });
    },

  },
};
</script>

<style lang="scss" scoped></style>
