<template>
  <el-config-provider namespace="ep">
    <div v-if="statusAuth">
      <BaseHeader />
      <div class="flex main-container">
        <BaseSide />
        <RouterView></RouterView>
      </div>
    </div>
    <div v-else>
      <RouterView></RouterView>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>
<script lang="ts">
import { Common } from "./common/main";
export default {
  data() {
    return {
      statusAuth: Common.isAuth,
    };
  },
  created() {
    // loadingInstance = Loading.service({ fullscreen: true });
    // this.getCodes();
    // loadingInstance.close();
  },
  methods: {
    // getCodes: async function () {
    //   const data = await getCode();
    //   if (data.data) {
    //     this.codes = data.data;
    //   }
    // },
    // success() {
    //   this.createCodeDL = false;
    //   loadingInstance.close();
    //   this.$message({
    //     type: "success",
    //     message: "Thành công",
    //   });
    // },
    // error() {
    //   this.createCodeDL = false;
    //   loadingInstance.close();
    //   this.$message({
    //     type: "error",
    //     message: "Không thành công",
    //   });
    // },
    // checkStatus: function (data) {
    //   if (!data.error) {
    //     this.getCodes();
    //     this.success();
    //   } else {
    //     this.error();
    //   }
    // },
    // handleCreateCode: async function () {
    //   loadingInstance = Loading.service({ fullscreen: true });
    //   const data = await createCode();
    //   this.checkStatus(data.data);
    // },
    // confirmDelete(row) {
    //   this.dataCode = row;
    //   this.deleteCodeDL = true;
    // },
    // deleteCode: async function () {
    //   this.deleteCodeDL = false;
    //   loadingInstance = Loading.service({ fullscreen: true });
    //   const data = await deleteCode(this.dataCode.id);
    //   // console.log(data);
    //   this.checkStatus(data.data);
    // },
    // btnSearch: async function () {
    //   this.listQuery.isUsed = parseInt(this.listQuery.isUsed);
    //   // console.log(this.listQuery);
    //   loadingInstance = Loading.service({ fullscreen: true });
    //   const data = await filterCode(this.listQuery);
    //   if (data.data) {
    //     this.codes = data.data;
    //     this.success();
    //   }else{
    //     this.error()
    //   }
    // },
  },
};
</script>
