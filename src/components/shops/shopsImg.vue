<template>
  <a-upload
    action="img/shops"
    method="post"
    list-type="picture"
    @preview="handlePreview"
    @change="handleChange"
    :file-list="fileList"
    :remove="remove"
    :data="data"
  >
    <a-button> <a-icon type="upload" /> upload </a-button>
  </a-upload>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("shops");
import _ from "lodash";
export default {
  data() {
    return {
      previewVisible: false,
      data: { _id: "" },
      previewImage: "",
      fileList: []
    };
  },
  props: {
    shops_id: {
      default: ""
    },
    imgs: {
      default: []
    },
    state: {
      default: false
    }
  },
  watch: {
    state: {
      immediate: true, // immediate选项可以开启首次赋值监听
      async handler() {
        this.fileList = [];
        for (let item in this.imgs) {
          this.fileList.push(this.imgs[item]);
        }
        this.data._id = this.shops_id;
      }
    }
  },
  methods: {
    ...mapActions(["delimgs"]),
    handleCancel() {
      this.previewVisible = false;
    },
    async handlePreview(file) {
      this.previewImage = file.url;
      this.previewVisible = true;
    },
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
    remove(file) {
      this.delimgs({
        path: _.replace(file.url, "http://localhost:3002", ""),
        _id: this.shops_id
      });
    }
  }
};
</script>
<style scoped>
/* tile uploaded pictures */
.upload-list-inline >>> .ant-upload-list-item {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline >>> .ant-upload-animate-enter {
  animation-name: uploadAnimateInlineIn;
}
.upload-list-inline >>> .ant-upload-animate-leave {
  animation-name: uploadAnimateInlineOut;
}
</style>
