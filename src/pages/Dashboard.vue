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
        <v-btn
         flat
         href="/static/nature/MemberList(2055).xlsx"
         download="Template">
          <v-icon color="primary">folder</v-icon>
          &nbsp; Download Template
        </v-btn>
    </v-btn-toggle>
   
    </v-toolbar>
    
    </v-flex>
    <v-flex v-flex lg12 sm12 xs12>
           
        <DataTable 
        :FileResponse ="FileResponse"
        :value ="uploadPercentage"
         />
    </v-flex>         
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
    OrderNumber:'0',
    show:false,
    Amount:'0.0',
    title:'099',
    Order:'',
    tabs: null,
    uploadPercentage: 0
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
      var Mpesa
      this.file = event.target.files[0];
      const data = new FormData();
      data.append("MembersFile", this.file);
      const options = {
        method: "POST",
        headers: { 'Cache-Control': 'no-cache' },
        data,
	      onUploadProgress: function( progressEvent ) {
        this.uploadPercentage = parseInt( Math.round( ( progressEvent.loaded * 100 ) / progressEvent.total ) );
        }.bind(this),
        
        url: "http://40.114.117.175/UhcApi/api/BulkPayment/UploadGroupData"
      };
      axios(options)
        .then(function(response) {
          
          app.FileResponse = response.data;
          if(app.FileResponse.FailedRecords.length>0){
            window.getApp.$emit('APP_BAD_REQUEST');
          }
          else{
          window.getApp.$emit('APP_RESOURCE_UPDATED')
          app.OrderNumber = response.data.OrderNo;
          app.Amount = parseInt(response.data.AmountToPay).toLocaleString();
          app.show = true;
          app.Mpesa = parseInt(response.data.AmountToPay).toLocaleString();
          }
          
          console.log(app.Mpesa);
          
          
          
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
