<template>
  <div id="app">
    <particles class="particles"/>
    <div class="container">
      <div class="top">
        <a-row>
          <a-col :span="12"
                 :offset="6">
            <i class="iconfont top-icon icon-logo"/>
            <span class="top-title">Nick's Home Center</span>
          </a-col>
        </a-row>
      </div>
      <a-row>
        <a-col :span="16"
               :offset="4">
          <a-list :grid="{ gutter: 16, xs: 2, sm: 2, md: 4, lg: 4, xl: 4, xxl: 6 }"
                  :dataSource="data">
            <a-list-item class="lists"
                         slot="renderItem"
                         slot-scope="item">
              <a :href="item.href"
                 target="_blank">
                <span class="icon shake">
                <i :class="['iconfont',item.type]"/>
                </span>
                <span class="title">
									{{item.title}}
								</span></a>
            </a-list-item>
          </a-list>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
  import particles from './components/particles';

  const data = [
    {
      title: 'ESXI',
      type: 'icon-icon-VMware',
      href: 'https://esxi.zhangliang.cc:8443'
    },
    {
      title: 'IKUAI',
      type: 'icon-luyou',
      href: 'https://ikuai.zhangliang.cc:8443'
    },
    {
      title: 'OPENWRT',
      type: 'icon-luyouqi',
      href: 'https://openwrt.zhangliang.cc:8443'
    },
    {
      title: 'SIGN',
      type: 'icon-qiandao',
      href: 'https://qiandao.zhangliang.cc:8443'
    },
    {
      title: 'NAS',
      type: 'icon-weimingming-',
      href: 'https://nas.zhangliang.cc:8443'
    },
    {
      title: 'MOVIE',
      type: 'icon-movie',
      href: 'https://nas.zhangliang.cc:8443/video'
    },
    {
      title: 'DISK',
      type: 'icon-disc',
      href: 'https://nas.zhangliang.cc:8443/file'
    },
    {
      title: 'DOWNLOAD',
      type: 'icon-download',
      href: 'https://nas.zhangliang.cc:8443/download'
    },
    {
      title: 'R6900',
      type: 'icon-luyou1',
      href: 'https://router.zhangliang.cc:8443'
    },
    {
      title: 'JDY',
      type: 'icon-jdy',
      href: 'https://jdy.zhangliang.cc:8443'
    }
  ];
  export default {
    name: 'app',
    data() {
      return {
        data
      };
    },
    components: {
      particles
    }
  };
</script>

<style lang="scss">
  body {
    overflow: hidden;
    width: 100%;
    height: 100%;
    font-size: 100%;
    background: -webkit-linear-gradient(315deg, #00c4ff, #9d1bb2) no-repeat fixed;
    background: linear-gradient(135deg, #00c4ff, #9d1bb2) no-repeat fixed;
    overflow: hidden;
    font-family: "Helvetica Neue", "Microsoft Yahei", SimHei, sans-serif;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  .container,
  .particles {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow-y: auto;
  }

  .top {
    margin-top: 8%;
    text-align: center;
    margin-bottom: 35px;

    .top-icon {
      font-size: 10rem;
      color: #fff !important;
    }

    .top-title {
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      display: block;
      text-align: center;
      margin-top: -35px;
    }
  }

  .lists {
    text-align: center;
    color: #fff;

    a {
      cursor: pointer;
      color: #fff;
    }

    padding-top: 20px;

    .title {
      display: block;
      font-size: 16px;
      padding-top: 20px;
    }

    .icon {
      display: inline-block;
      width: 96px;
      height: 96px;
      line-height: 96px;
      border: 2px solid #fff;
      border-radius: 50%;

      i {
        font-size: 36px;
      }
    }

    @-webkit-keyframes shake {
      0%,
      100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }

      10%,
      30%,
      50%,
      70%,
      90% {
        -webkit-transform: translateX(-10px);
        transform: translateX(-10px);
      }

      20%,
      40%,
      60%,
      80% {
        -webkit-transform: translateX(10px);
        transform: translateX(10px);
      }
    }
  }

  @keyframes shake-bounce {
    0%,
    100% {
      -webkit-transform: rotate(0);
      -moz-transform: rotate(0);
      transform: rotate(0);
      -ms-transform: rotate(0);
    }

    25% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      transform: rotate(15deg);
      -ms-transform: rotate(15deg);
    }

    50% {
      -webkit-transform: rotate(-15deg);
      -moz-transform: rotate(-15deg);
      transform: rotate(-15deg);
      -ms-transform: rotate(-15deg);
    }

    75% {
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      transform: rotate(5deg);
      -ms-transform: rotate(5deg);
    }

    85% {
      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
    }
  }

  @-webkit-keyframes shake-bounce {
    0%,
    100% {
      -webkit-transform: rotate(0);
      -moz-transform: rotate(0);
      transform: rotate(0);
      -ms-transform: rotate(0);
    }

    25% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      transform: rotate(15deg);
      -ms-transform: rotate(15deg);
    }

    50% {
      -webkit-transform: rotate(-15deg);
      -moz-transform: rotate(-15deg);
      transform: rotate(-15deg);
      -ms-transform: rotate(-15deg);
    }

    75% {
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      transform: rotate(5deg);
      -ms-transform: rotate(5deg);
    }

    85% {
      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
    }
  }

  @-moz-keyframes shake-bounce {
    0%,
    100% {
      -webkit-transform: rotate(0);
      -moz-transform: rotate(0);
      transform: rotate(0);
      -ms-transform: rotate(0);
    }

    25% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      transform: rotate(15deg);
      -ms-transform: rotate(15deg);
    }

    50% {
      -webkit-transform: rotate(-15deg);
      -moz-transform: rotate(-15deg);
      transform: rotate(-15deg);
      -ms-transform: rotate(-15deg);
    }

    75% {
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      transform: rotate(5deg);
      -ms-transform: rotate(5deg);
    }

    85% {
      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
    }
  }

  @-o-keyframes shake-bounce {
    0%,
    100% {
      -webkit-transform: rotate(0);
      -moz-transform: rotate(0);
      transform: rotate(0);
      -ms-transform: rotate(0);
    }

    25% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      transform: rotate(15deg);
      -ms-transform: rotate(15deg);
    }

    50% {
      -webkit-transform: rotate(-15deg);
      -moz-transform: rotate(-15deg);
      transform: rotate(-15deg);
      -ms-transform: rotate(-15deg);
    }

    75% {
      -webkit-transform: rotate(5deg);
      -moz-transform: rotate(5deg);
      transform: rotate(5deg);
      -ms-transform: rotate(5deg);
    }

    85% {
      -webkit-transform: rotate(-5deg);
      -moz-transform: rotate(-5deg);
      transform: rotate(-5deg);
      -ms-transform: rotate(-5deg);
    }
  }

  .shake:hover {
    -webkit-animation: shake-bounce 0.5s alternate;
    -moz-animation: shake-bounce 0.5s alternate;
    -o-animation: shake-bounce 0.5s alternate;
    animation: shake-bounce 0.5s alternate;
  }
</style>
