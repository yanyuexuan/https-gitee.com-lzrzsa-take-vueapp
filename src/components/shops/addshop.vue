<template>
  <div id="content">
    <img
      id="imgs"
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180530%2F6011c49b667443fb9e3893ae51cce4e7.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616745297&t=e06ecb0b08e5fcdd4d4a05938918a900"
      alt=""
    />
    <a-form :form="form" @submit="handleSubmit" id="froms">
      <a-form-item v-bind="formItemLayout" label="商铺名称" has-feedback>
        <a-input
          v-decorator="[
            'cname',
            {
              rules: [
                {
                  required: true,
                  message: '请输入商铺名称!'
                }
              ]
            }
          ]"
          type=""
          @blur="handleConfirmBlur"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="商铺地址" has-feedback>
        <a-input
          v-decorator="[
            'address',
            {
              rules: [
                {
                  required: true,
                  message: '请输入商铺地址!'
                }
              ]
            }
          ]"
          type=""
          @blur="handleConfirmBlur"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="图片地址" has-feedback>
        <a-input
          v-decorator="[
            'imgs',
            {
              rules: [
                {
                  required: true,
                  message: '请输入url!'
                }
              ]
            }
          ]"
          type=""
          @blur="handleConfirmBlur"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="商铺评分" has-feedback>
        <a-input
          v-decorator="[
            'shop_Score',
            {
              rules: [
                {
                  required: true,
                  message: '请输入商铺评分!'
                }
              ]
            }
          ]"
          type=""
          @blur="handleConfirmBlur"
        />
      </a-form-item>

      <a-form-item v-bind="tailFormItemLayout">
        <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
          I have read the
          <a href="">
            agreement
          </a>
        </a-checkbox>
      </a-form-item>
      <a-form-item v-bind="tailFormItemLayout">
        <a-button type="primary" html-type="submit">
          确定新增
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("shops");

export default {
  data() {
    return {
      confirmDirty: false,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      }
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },

  methods: {
    ...mapActions(["addShop"]),
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        // 新增商铺
        let { cname, address, imgs, shop_Score } = values;
        this.addShop({ cname, address, imgs, shop_Score });
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    }
  }
};
</script>
<style>
#content {
  display: flex;
}
#imgs {
  width: 400px;
  height: 400px;
}
#froms {
  width: 600px;
  margin-left: -80px;
}
</style>
