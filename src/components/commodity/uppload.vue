<template>
  <a-card hoverable style="width: 240px">
    <div class="clearfix">
      <a-upload
        action="img/commodity"
        method="post"
        list-type="picture-card"
        :file-list="fileList"
        @preview="handlePreview"
        @change="handleChange"
        :remove="remove"
        :data="data"
      >
        <div v-if="fileList.length < 8">
          <a-icon type="plus" />
          <div class="ant-upload-text">上传图片</div>
        </div>
      </a-upload>
      <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
        <img alt="example" style="width: 100%" :src="previewImage" />
      </a-modal>
    </div>
    <a-card-meta title="添加商品图片"> </a-card-meta>
  </a-card>
</template>
<script>
import { mapActions } from "vuex";
import _ from "lodash";
// function getBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// }
export default {
  props: {
    commodity: {
      default: {},
    },
    state: {
      default: false,
    },

    
  },
  watch: {
    state: {
      immediate: true, // immediate选项可以开启首次赋值监听
      async handler() {
        this.fileList = [];
        for (let item in this.$props.commodity.images) {
          this.fileList.push({
            uid: `-${item}`,
            name: "image.png",
            status: "done",
            url: "http://localhost:3002" + this.$props.commodity.images[item],
          });
        }
         this.data._id = this.$props.commodity._id;
      },
    },
  },
  data() {
    return {
      fileList: [],
      data: { _id: "" },
      previewVisible: false,
      previewImage: ""
    };
  },

  methods: {
    ...mapActions("commodity", ["delimgs"]),

    handleCancel() {
      this.previewVisible = false;
    },
    remove(file) {
      this.delimgs({
        path: _.replace(file.url, "http://localhost:3002", ""),
        _id: this.data._id,
      });
    },
    handlePreview(file) {
      this.previewImage = file.url;
      this.previewVisible = true;
    },

    handleChange({ fileList }) {
      
      this.fileList = fileList;
    },
  },
};
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>