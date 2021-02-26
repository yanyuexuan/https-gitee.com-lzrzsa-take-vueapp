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
        :before-upload="beforeUpload"
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
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
export default {
  data() {
    return {
      previewVisible: false,
      previewImage: "",
      fileList: [],
      data: { _id: "" }
    };
  },
  methods: {
    ...mapActions("commodity", ["delimgs"]),
    handleCancel() {
      this.previewVisible = false;
    },
    remove(file) {
      console.log(file.response, this.$router.history.current.params._id);
      this.delimgs({
        path: file.response,
        _id: this.$router.history.current.params._id
      });
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      this.previewImage = file.url || file.preview;
      this.previewVisible = true;
    },
    beforeUpload(file) {
      this.data._id = this.$router.history.current.params._id;
      console.log(file);

      return true;
    },
    handleChange({ fileList }) {
      // console.log(this.$router.history.current.params._id);
      this.fileList = fileList;
    }
  }
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
