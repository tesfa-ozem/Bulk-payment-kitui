<template>
<div id="pageDashboard">
    <v-container grid-list-xl fluid>
    <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg6 sm6 xs12>
          <mini-statistic
            icon="done"
            v-bind:title = "Amount"
            sub-title="Amount to Pay"
            color="teal"      
          >
          </mini-statistic>  
        </v-flex>
        <v-flex lg6 sm6 xs12>
          <mini-statistic
            icon="block"
            v-bind:title="OrderNumber"
            sub-title="OrderNumber"
            color="red"      
          >
          </mini-statistic>           
        </v-flex> 
        <v-flex>
        <v-toolbar class="elevation-0 transparent media-toolbar">
    <v-btn-toggle>
        <v-btn flat>
          <input accept="application/excel" type="file" @change="uploadFile($event)">
        </v-btn>
        <v-btn flat>
          <v-icon color="primary">folder</v-icon>
          &nbsp; Add Folder
        </v-btn>
    </v-btn-toggle>
    <v-spacer></v-spacer>
    <v-btn-toggle >
    </v-btn-toggle>
    </v-toolbar>
    <v-divider></v-divider>
    </v-flex>
    <div>
    
</div>
        <v-flex v-flex lg12 sm12 xs12>
        <DataTable v-bind:FileResponse ="FileResponse" />
        </v-flex>         
        <!-- mini statistic  end -->   
        <!-- <v-flex lg8 sm12 xs12>
          <v-widget title="Site Traffic" content-bg="white">
            <v-btn icon slot="widget-header-action">
              <v-icon class="text--secondary">refresh</v-icon>
            </v-btn>
            <div slot="widget-content">
                <e-chart 
                :path-option="[
                  ['dataset.source', siteTrafficData],
                  ['color', [color.lightBlue.base, color.green.lighten1]],
                  ['legend.show', true],
                  ['xAxis.axisLabel.show', true],
                  ['yAxis.axisLabel.show', true],
                  ['grid.left', '2%'],
                  ['grid.bottom', '5%'],
                  ['grid.right', '3%'],
                  ['series[0].type', 'bar'],
                  ['series[0].areaStyle', {}],
                  ['series[0].smooth', true],
                  ['series[1].smooth', true],
                  ['series[1].type', 'bar'],
                  ['series[1].areaStyle', {}],
                ]"
                height="400px"
                width="100%"
                >
                </e-chart>     
            </div>
          </v-widget>  
        </v-flex>
        <v-flex lg4 sm12 xs12>
          <v-widget title="Top Location" content-bg="white">
            <div slot="widget-content">
                <e-chart 
                :path-option="[
                  ['dataset.source', locationData],
                  ['legend.bottom', '0'],
                  ['color', [color.lightBlue.base, color.indigo.base, color.pink.base, color.green.base, color.cyan.base, color.teal.base]],
                  ['xAxis.show', false],
                  ['yAxis.show', false],
                  ['series[0].type', 'pie'],
                  ['series[0].avoidLabelOverlap', true],         
                  ['series[0].radius', ['50%', '70%']],                      
                ]"
                height="400px"
                width="100%"
                >
                </e-chart>     
            </div>
          </v-widget>  
        </v-flex> -->
        <!-- social/weather card start -->
        <!-- <v-flex lg4 sm12 xs12>
          <profile-card>
          </profile-card>
        </v-flex>        
        <v-flex lg4 sm12 xs12>
          <box-chart
            card-color="indigo"
            title="Trending"
            sub-title="10%"
            icon="trending_up"
            :data="siteTrafficData"
            :chart-color="[color.indigo.lighten1]"
            type="line"
          >
          </box-chart>
          <box-chart class="mt-4"
            card-color="pink"
            title="Page views"
            sub-title="10%"
            icon="trending_up"
            :data="siteTrafficData"
            :chart-color="[color.pink.darken1, 'rgba(255,255,255,0.3)']"
            gradient
            type="area"
          >
          </box-chart>          
        </v-flex> -->
        <!-- statistic section -->
        <!-- <v-flex lg4 sm12 xs12>
          <linear-statistic 
            title="Sales"
            sub-title="Sales increase"
            icon="trending_up"
            color="success"
            :value="15"
          >
          </linear-statistic>
          <linear-statistic class="my-4"
            title="Orders"
            sub-title="Increase"
            icon="trending_up"
            color="pink"
            :value="30"
          >
          </linear-statistic>          
          <linear-statistic class="my-4"
            title="Revenue"
            sub-title="Revenue increase"
            icon="trending_up"
            color="primary"
            :value="50"
          >
          </linear-statistic>          
          <linear-statistic class="mt-4"
            title="Cost"
            sub-title="Cost reduce"
            icon="trending_down"
            color="orange"
            :value="25"
          >
          </linear-statistic>          
        </v-flex> -->
        <!-- Circle statistic -->
        <!-- <v-flex lg4 sm12 xs12 v-for="(item,index) in trending" :key="'c-trending'+index">
          <circle-statistic
            :title="item.subheading"
            :sub-title="item.headline"
            :caption="item.caption"
            :icon="item.icon.label"
            :color="item.linear.color"
            :value="item.linear.value"
          >
          </circle-statistic>            
        </v-flex>     -->
        <!-- acitivity/chat widget -->
        <!-- <v-flex lg6 sm12 xs12>
          <chat-window height="308px"></chat-window>
        </v-flex>
        <v-flex lg6 sm12 xs12>
          <v-widget title="Activities" contentBg="white">
            <div slot="widget-content">
              <ol class="timeline timeline-activity timeline-point-sm timeline-content-right">
                <li class="timeline-block" v-for="(item, index) in activity" :key="index">
                  <div class="timeline-point">
                    <v-circle dot large :color="item.color"></v-circle>
                  </div>
                  <div class="timeline-content">
                    <time datetime="2018" class="subheading">{{item.timeString}}</time>
                    <div class="py-2 text--secondary" v-html="item.text"></div>
                  </div>
                </li>
              </ol>              
            </div>
          </v-widget>          
        </v-flex>
        <v-flex lg7 sm12 xs12>
          <plain-table></plain-table>
        </v-flex>
        <v-flex lg5 sm12 xs12>
          <plain-table-order></plain-table-order>
        </v-flex>  -->              
      </v-layout>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */

import API from "@/api";
import EChart from "@/components/chart/echart";
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
import PostListCard from "@/components/widgets/card/PostListCard";
import ProfileCard from "@/components/widgets/card/ProfileCard";
import PostSingleCard from "@/components/widgets/card/PostSingleCard";
import WeatherCard from "@/components/widgets/card/WeatherCard";
import PlainTable from "@/components/widgets/list/PlainTable";
import PlainTableOrder from "@/components/widgets/list/PlainTableOrder";
import VWidget from "@/components/VWidget";
import Material from "vuetify/es5/util/colors";
import VCircle from "@/components/circle/VCircle";
import BoxChart from "@/components/widgets/chart/BoxChart";
import ChatWindow from "@/components/chat/ChatWindow";
import CircleStatistic from "@/components/widgets/statistic/CircleStatistic";
import LinearStatistic from "@/components/widgets/statistic/LinearStatistic";
import DataTable from "@/components/CustomUi/DataTable";
import UploadButton from "@/components/UploadButton";
import axios from "axios";
import Event from'./../event.js'


// Import FilePond styles

// Import plugins
export default {
  components: {
    VWidget,
    MiniStatistic,
    ChatWindow,
    VCircle,
    WeatherCard,
    PostSingleCard,
    PostListCard,
    ProfileCard,
    EChart,
    BoxChart,
    CircleStatistic,
    LinearStatistic,
    PlainTable,
    PlainTableOrder,
    DataTable,
    UploadButton
  },
  data() {
    return {
    test: "213",
    FileResponse: {},
    color: Material,
    OrderNumber:'',
    show:false,
    Amount:'',
    title:'',
    Order:'',
    tabs: null
    };
  },
  computed: {
    Testing() {},
    FormattString(n){
      var Currency = parseInt(n, 10);
      console.log(Currency.toLocaleString());
      return Currency
    }
  },
  methods: {
    uploadFile: function(event) {
      this.Testing;
      var app = this;
      this.file = event.target.files[0];
      const data = new FormData();
      data.append("MembersFile", this.file);
      const options = {
        method: "POST",
        headers: { 'Cache-Control': 'no-cache' },
	      
        data,
        url: "http://40.114.117.175/UhcApi/api/BulkPayment/UploadGroupData"
      };
      axios(options)
        .then(function(response) {
          window.getApp.$emit('APP_RESOURCE_UPDATED')
          app.FileResponse = response.data;
          app.OrderNumber = response.data.OrderNo
          app.show = true,
          app.Amount = payment.toLocaleString(parseInt(response.data.AmountToPay));
          
          
        })
        .catch(function(error) {
        this.$swal({
        position: 'center',
        type: 'success',
        title: error.response,
        showConfirmButton: false,
        timer: 1500
      });
        });
    }
  }
};
</script>
