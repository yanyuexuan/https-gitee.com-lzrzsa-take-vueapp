<template>
  <div>
    <a-table
      :columns="columns"
      :data-source="rows"
      rowKey="_id"
      :scroll="{ x: 1500, y: 600 }"
    >
      <template slot="action" slot-scope="record">
        <a-button
          type="primary"
          slot="action"
          style="margin-left:10px;border-radius:50px"
          @click="() => delShop(record)"
        >
          删除
        </a-button>
        <a-button
          slot="action"
          style="margin-left:10px;border-radius:50px"
          @click="() => changShop(record)"
          >编辑</a-button
        >
      </template>
    </a-table>

    <div>
      <a-button type="primary" @click="changShop">
        Open Modal with async logic
      </a-button>
      <a-modal
        title="Title"
        :visible="visible"
        :confirm-loading="confirmLoading"
        @ok="handleOk"
        type="primary"
        html-type="submit"
        @cancel="handleCancel"
      >
        <a-form :form="form" @submit="changShop" style="white:400px">
          <a-form-item label="商铺名称" has-feedback>
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
          <a-form-item label="商铺地址" has-feedback>
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
          <a-form-item label="图片地址" has-feedback>
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
          <a-form-item label="商铺评分" has-feedback>
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
          <a-form-item>
            <a-checkbox
              v-decorator="['agreement', { valuePropName: 'checked' }]"
            >
              I have read the
              <a href="">
                agreement
              </a>
            </a-checkbox>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("shops");
const columns = [
  {
    title: "商铺ID",
    width: 220,
    dataIndex: "_id",
    key: "_id",
    fixed: "left"
  },
  {
    title: "商铺名称",
    width: 100,
    dataIndex: "cname",
    key: "cname",
    fixed: "left"
  },
  { title: "商铺地址", dataIndex: "address", key: "address", width: 300 },
  { title: "商铺图片", dataIndex: "imgs", key: "imgs", width: 300 },
  { title: "商铺评分", dataIndex: "shop_Score", key: "shop_Score", width: 300 },
  {
    title: "操作",
    key: "operation",
    fixed: "right",
    width: 200,
    scopedSlots: { customRender: "action" }
  }
];
export default {
  data() {
    return {
      columns,
      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  computed: { ...mapState(["rows"]) },
  methods: {
    ...mapActions(["getShopsList", "delShops"]),
    delShop(data) {
      const { _id } = data;
      this.delShops({ _id });
    },
    // 点击修改执行
    changShop(data) {
      this.visible = true;
      const { cname, address, imgs, shop_Score } = data;
      console.log(cname, address, imgs, shop_Score);
      this.form.validateFieldsAndScroll((err, values) => {
        console.log(values);
        // address.preventDefault = address;
        // cname.values = cname;
        // imgs.values = imgs;
        // shop_Score.values = shop_Score;
      });
    },
    // 确定
    handleOk(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        let { cname, address, imgs, shop_Score } = values;
        console.log(cname, address, imgs, shop_Score);
      });

      this.ModalText = "The modal will be closed after two seconds";
      this.confirmLoading = true;
      // 二秒后关闭弹窗
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    // 取消按钮
    handleCancel() {
      this.visible = false;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        let { cname, address, imgs, shop_Score } = values;
        console.log(cname, address, imgs, shop_Score);
      });
    },

    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    }
  },
  mounted() {
    this.getShopsList();
    this.dataIndex = this.rows._id;
  }
};
</script>

<style scoped>
/* #a {
  margin-left: 20px;
} */
</style>
