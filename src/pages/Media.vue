<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
    <v-flex xs12>
      
    <v-card>
      <v-card-title
          class="headline grey lighten-2 font-weight-regular"
          primary-title
        >
          <v-text-field
              flat
              solo
              prepend-icon="search"
              placeholder="Type something"
              v-model="search"
              hide-details
              class="hidden-sm-and-down"
              ></v-text-field>
        </v-card-title>
      <v-card-text>
    <v-data-table
    :headers="headers"
    :items="Orders"
    item-key="OrderNo"
    :search="search"
    >
    <template slot="items" slot-scope="props">
    <tr @click="props.expanded = !props.expanded">
        <td class="text-xs-center">{{ props.item.OrderNo }}</td>
        <td class="text-xs-center">{{ props.item.OrderAmount }}</td>
        <td class="text-xs-center">Status</td>
        <td class="text-xs-center">{{props.item.Date}}</td>
        
    </tr>
    </template>
    <template slot="expand" slot-scope="props"> 
      <v-card>
        <v-card-actions>
          <v-btn
        @click="LoadTable(props.item.Records)"
        color="red lighten-2"
        dark
        flat
      >
        View Data
      </v-btn> 
      <v-btn
        @click="paymentDialog = true"
        color="green lighten-2"
        dark
        flat
      >
        Make Payment
      </v-btn>
        </v-card-actions>
      </v-card>  
    <v-dialog
      v-model="dialog"
      width="500"
      lazy
      sync
      
    >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
           
        </v-card-title>

        <v-card-text>
          
          <v-data-table
          :headers="HeaderDialog"
          :items.sync="dialogTable"
          
          item-key="IdNumber">
             <template slot="items" slot-scope="props">
                  <tr >
                  <td>{{ props.item.OrderNo}}</td>
                  <td>{{ props.item.FirstName }}</td>
                  <td>{{ props.item.IdNumber}}</td>
                  <td>{{ props.item.PhoneNumber}}</td>
                  <td>{{ props.item.Date}}</td>
                  
                  </tr>
            </template>
          </v-data-table>
          
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
      
    </v-dialog>
    <v-dialog
      v-model="paymentDialog"
      width="400"
    >
      <v-card
      >
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Payment
        </v-card-title>

        <v-card-text class="--text pt-0 subheading">
          1.Go to Mpesa Menu select lipa na Mpesa.<br>
          2. Select Paybill option.<br>
          3.Put business number <strong>815815</strong>,go next.<br>
          4.Put account number <strong>{{props.item.OrderNo}}</strong>,go next
          5.Put the amount KSH <strong>{{ props.item.OrderAmount }}</strong>.<br>
          6.You will recive a confirmation message that your payment has been recived on complition of the transaction.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="paymentDialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
      
    </v-dialog>
    </template>
    </v-data-table>
      </v-card-text>
    </v-card>
    </v-flex>
  </v-layout>
      
  </v-container>

</template>
<script>
/* eslint-disable */
import axios from "axios";
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
  export default {
    components: {
    VuePerfectScrollbar
  },
    data () {
      return {
        headers: [
          
          { text: 'Order Number', align: 'center', value: 'OrderAmount' },
          { text: 'Amount', align: 'center', value: 'OrderAmount' },

          { text: 'Status', align: 'center', value: 'protein' },
          { text: 'Date', align: 'center', value: 'date' },
          
        ],
        search: '',
        Orders:[],
        dialog: false,
        settings: {
        maxScrollbarLength: 60,
        UserAccount:0,
      },
      paymentDialog:false,
      dialogTable:[],
      HeaderDialog:[
          {
            text: 'Name',
            value: 'Name'
          },
          {
            text: 'IdNumber',
            value: 'IdNumber'
          },
          {
            text: 'Phone',
            value: 'Phone'
          },
          {
            text: 'Order Number',
            value: 'OrderNo'
          },
          {
            text: 'Date',
            value: 'date'
          }
          ]
      
      }
    },
    methods: {
    scrollHanle(evt) {
      console.log(evt)
    },
    ApiData(){
      var app = this;
      const options = {
        method: "GET",
        headers: { 'Cache-Control': 'no-cache' },
        params: {
                  accountId: 2500
        },
        url: "http://40.114.117.175/UhcApi/api/BulkPayment/GetHistoricalGroupData?accountId=2500"
      };
      axios(options)
      .then(function(response){
        app.Orders = response.data.ObjectData
      })
      .catch(function(error){
        console.log(error)
      })
    },
    LoadTable(data){
      this.$forceUpdate()
      this.dialogTable=data
      console.log(this.dialogTable)
      this.dialog =true
    
    }
  },
  
  computed:{

  },
  created(){
    this.ApiData();
    
  }
  }
</script>

<style >
.scroll-area {
  position: relative;
  margin: auto;
  width: 400px;
  height: 300px;
}
</style>