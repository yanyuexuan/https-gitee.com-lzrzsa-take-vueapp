<template>
  <div>
    <a-drawer
      title="修改商品"
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
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
        <a-form-item label="商品图片">
          <CommodityUppload
            :commodity="commodity"
            :state="state"
          />
        </a-form-item>
      </a-form>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <a-button :style="{ marginRight: '8px' }" @click="onClose">
          Cancel
        </a-button>
        <a-button type="primary" @click="updata"> Submit </a-button>
      </div>
    </a-drawer>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    visible: {
      default: false,
    },
    commodity: {
      default: {},
    },
  },
  watch: {
    visible: function () {
      this.state = !this.state;
   
     

      for (let item in this.data) {
        this.data[item] = this.$props.commodity[item];
      }

      this.$nextTick(() => {
        this.form.setFieldsValue(this.data);
      });
    },
  },
  data() {
    return {
      
      listName: ["奈雪早餐", "新品推荐", "招牌热卖", "咖啡", "霸气芝士鲜果茶"],
      state: false,
      form: this.$form.createForm(this),
      temperature: ["标准冰", "去冰","热","温"],
      sweetness: ["标准糖", "少糖", "不另外加糖"],
      data: {
        name: "",
        listName: "",
        price: "",
        type: "",
        temperature: "",
        sweetness: "",
        content: "",
      },
    };
  },

  methods: {
    ...mapActions("commodity", ["updatacommodity", "get"]),

    updata() {
      
      const data = {
        _id: this.$props.commodity._id,
        commodity: this.form.getFieldsValue(),
      };
      this.updatacommodity(data);
      this.get();
      this.$emit("showDrawer");
    },

    onClose() {
      this.get();
      this.$emit("showDrawer");
    },
  },
};
</script>
