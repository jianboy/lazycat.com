<template>
    <div class="nav">
            <div class="nav-menu-wrapper">
                <ul>
                    <div></div>
                    <span></span>
                </ul>
            </div>
            <div>
                <HeadPortrait :imgUrl="imgUrl"></HeadPortrait>
            </div>
    </div>
</template>

<script>
    import HeadPortrait from './HeadPortrait'

    export default{
        component: {
            HeadPortrait,
        },data(){
            return {
                menuList:[

                ]
            }
        }
    }
</script>
<style scoped>
.nav{
    width:100%;
    height: 90vh;
    position: relative;
    border-radius: 20px 0 0 20px;
    .nav-menu-wrapper{
        position: absolute;
        top: 40%;
        transform: translate(0, -50%);
        .menu-list{
            margin-left: 10px;
            li{
                margin: 40px 0 0 30px;
                list-style: none;
                cursor: pointer;
            }
        }
    }
}
</style>