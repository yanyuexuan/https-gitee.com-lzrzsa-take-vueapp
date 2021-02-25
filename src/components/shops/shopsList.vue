<template>
  <div>
    <!-- 搜索框 -->
    <a-input
      v-model="changValues"
      placeholder="请输入商铺ID"
      style="width:180px;margin-left:14px;margin-right:14px;"
    >
    </a-input>
    <a-button type="primary" @click="searchList">搜索</a-button>
    <!-- 商铺列表头 -->
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

    <!-- 修改弹框 -->
    <div>
      <a-button style="opacity: 0;" type="primary" @click="changShop">
      </a-button>
      <a-modal
        title="修改商铺信息"
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
                  initialValue: this.cname,
                  rules: [
                    {
                      required: true,
                      message: '请输入商铺名称!'
                    }
                  ]
                }
              ]"
              @blur="handleConfirmBlur"
            />
          </a-form-item>
          <a-form-item label="商铺地址" has-feedback>
            <a-input
              v-decorator="[
                'address',
                {
                  initialValue: this.address,
                  rules: [
                    {
                      required: true,
                      message: '请输入商铺地址!'
                    }
                  ]
                }
              ]"
              @blur="handleConfirmBlur"
            />
          </a-form-item>
          <!-- 上传图片 -->
          <a-form-item label="上传商铺图片" has-feedback> </a-form-item>
          <ShopsShopsImg :shops_id="id" :state="state" :imgs="fileList" />
          <a-form-item label="商铺评分" has-feedback>
            <a-input
              v-decorator="[
                'shop_Score',
                {
                  initialValue: this.shop_Score,
                  rules: [
                    {
                      required: true,
                      message: '请输入商铺评分!'
                    }
                  ]
                }
              ]"
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
    <!-- 商铺信息 -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("shops");
// 商铺列表
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
    width: 220,
    dataIndex: "cname",
    key: "cname",
    fixed: "left"
  },
  { title: "商铺地址", dataIndex: "address", key: "address", width: 300 },
  {
    title: "商铺图片",
    customRender(rows) {
      return rows.imgs.map(item => item);
    },
    width: 300
  },
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
      // 弹框
      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false,
      // 商铺基本信息
      cname: "",
      fileList: [],
      imgs:[],
      address:"",
      shop_Score: "",
      id: "",
      state:false,
      //  上传图片
      headers: {
        authorization: "authorization-text"
      },
      //搜索框查询
      changValues: ""
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  computed: { ...mapState(["rows"]) },
  methods: {
    ...mapActions(["getShopsList", "delShops", "changShops", "getShopText"]),
    // 点击修改拿到整条数据
    delShop(data) {
      const { _id } = data;
      this.delShops({ _id });
    },
    // 点击修改执行
    changShop(data) {
      this.fileList = []
      const { _id, cname, address, imgs, shop_Score } = data;
      this.cname = cname;
      this.address = address;
      if (imgs.length > 0) {
        imgs.map((item, index) => {
          this.fileList.push({
            uid: `${index}`,
            name: "xxx.png",
            status: "done",
            url: `http://localhost:3002${item}`
          });
        });
      }
      this.shop_Score = shop_Score;
      this.id = _id;
      // 点击修改弹框显示
      this.visible = true;
      this.state = !this.state;
    },

    // 确定框
    handleOk(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        let { cname, address, imgs, shop_Score } = values;
        const _id = this.id;
        this.changShops({ _id, cname, address, imgs, shop_Score });
      });
      this.ModalText = "The modal will be closed after two seconds";
      this.confirmLoading = true;
      // 二秒后关闭弹窗
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
        this.getShopsList();
      }, 2000);
    },
    // 取消按钮
    handleCancel() {
      this.visible = false;
    },
    // 点击确定拿到values，可发请求
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
    },
    handleChange(info) {
      if (info.file.status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },

    //指定条件搜索
    searchList() {
      const _id = this.changValues;
      this.getShopText({ _id: _id });
    }
  },

  mounted() {
    this.getShopsList();
  }
};
</script>

<style scoped>
#a {
  margin-left: 20px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
