<template>
  <div>
    <div style="background:#ECECEC; padding:30px;width: 700px">
    <a-card title="新增商品" :bordered="false" style="width: 600px">
       <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="商品名称">
        <a-input placeholder="请输入商品名称" v-decorator="['name']" />
      </a-form-item>
      <a-form-item label="商品分类">
        <a-select
          mode="tags"
          :token-separators="[',']"
          v-decorator="[
            'listName',
            {
              rules: [{ required: true, message: 'Please 输入商品分类' }],
            },
          ]"
          placeholder=" 商品分类"
        >
          <a-select-option v-for="item in listName" :key="item">
            {{ item }}
          </a-select-option>

          <!-- <a-select-option value="female"> female </a-select-option> -->
        </a-select>
      </a-form-item>
      <a-form-item label="价格">
        <a-input prefix="￥" suffix="RMB" v-decorator="['price']" />
      </a-form-item>
      <a-form-item label="描述内容">
        <a-textarea
          placeholder="描述商品内容"
          auto-size
          v-decorator="['content']"
        />
      </a-form-item>
      <a-form-item label="是否上架">
        <a-switch v-decorator="['type', { valuePropName: 'checked' }]" />
      </a-form-item>
      <a-form-item label="商品温度">
        <a-select
          mode="tags"
          style="width: 100%"
          :token-separators="[',']"
          v-decorator="['temperature']"
        >
          <a-select-option v-for="i in temperature" :key="i">
            {{ i }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="商品甜度">
        <a-select
          mode="tags"
          style="width: 100%"
          :token-separators="[',']"
          v-decorator="['sweetness']"
        >
          <a-select-option v-for="i in sweetness" :key="i">
            {{ i }}
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit"> 提交 </a-button>
      </a-form-item>
    </a-form>
    </a-card>
  </div>
   
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      formLayout: "horizontal",
      listName: ["奈雪早餐", "新品推荐", "招牌热卖", "咖啡", "霸气芝士鲜果茶"],
      addstate: true,
      form: this.$form.createForm(this, { name: "coordinated" }),
      temperature: ["标准冰", "去冰","热","温"],
      sweetness: ["标准糖", "少糖", "不另外加糖"],
    };
  },
  
  methods: {
    ...mapActions("commodity", ["add"]),
    handleSubmit(e) {
      e.preventDefault();
      let _this = this;
      this.form.validateFields(async (err, values) => {
        if (!err) {
            
          const data = await this.add(values);
          if (data != null) {
            this.$confirm({
              title: "是否需要上传商品图片",
              onOk() {
                _this.$router.push({
                  name: "upload",
                  params: { _id: data._id },
                });
              },
              onCancel() {},
            });
          }
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
    },
    checkPrice(rule, value, callback) {
      if (value.number > 0) {
        callback();
        return;
      }
      callback("Price must greater than zero!");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>