<template>
    <div class="home">
        <el-container height="100%">
            <el-aside width="100px">
                <Nav></Nav>
            </el-aside>
        </el-container>
    </div>
</template>

<script>
import { Nav } from "../components/Nav.vue";
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
}
</style>