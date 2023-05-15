<template>
    <div class="home">
        <el-container height="100%">
            <el-aside width="100px">
                <Nav></Nav>
            </el-aside>
            <div>你好，home</div>
        </el-container>
    </div>
</template>

<script>
import { Nav } from "../components/Nav.vue";
export default (await import('vue')).defineComponent({
    name: 'Home',
    components: {
        Nav
    }
})
</script>

<style lang="scss" scoped>
.home {
    width: 90vw;
    height: 90vh;
    background-color: rgb(39, 42, 55);
    border-radius: 15px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);


    -moz-user-select:none; /*火狐*/
    -webkit-user-select:none; /*webkit浏览器*/
    -ms-user-select:none; /*IE10*/
    -khtml-user-select:none; /*早期浏览器*/
    user-select:none;
}
</style>