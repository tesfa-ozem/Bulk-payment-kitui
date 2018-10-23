<template>
  <div id="pageTable">
      <v-layout row wrap>
        <v-flex sm12 lg12>
          <h3>Uploaded Members</h3>
        </v-flex>        
        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <download-excel
              class = "btn btn-success"
              :fetch= "fetchData"
              :fields = "json_fields"
              name = "filename.xls"
              type = "csv">
              Download Excel
              
              </download-excel>
              <v-divider
              class="mx-3"
              inset
              vertical
              ></v-divider>
              <v-text-field
              flat
              solo
              prepend-icon="search"
              placeholder="Type something"
              v-model="search"
              hide-details
              class="hidden-sm-and-down"
              ></v-text-field>
              <v-divider
              class="mx-0"
              inset
              vertical
              ></v-divider>    
              <v-btn 
              icon
              :disabled="dialog"
              :loading="dialog"
              class="white"
              
              @click="dialog = true"
              >
                <v-icon>send</v-icon>
                  <v-dialog
                    v-model="dialog"
                    hide-overlay
                    persistent
                    width="300"
                  >
                  <v-card
                    color="primary"
                    dark
                  >
                    <v-card-text>
                      Please stand by
                      <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                      ></v-progress-linear>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-btn>         
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="complex.headers"
                :search="search"
                :items="FileResponse.GroupData"
                :rows-per-page-items="[10,25,50,{text:'All','value':-1}]"
                class="elevation-1"
                item-key="Id"
                select-all
                v-model="complex.selected"
                >
                <template slot="items" slot-scope="props">
                <td>
                  <v-checkbox
                    primary
                    hide-details
                    v-model="props.selected"
                  ></v-checkbox>
                </td>              
                  <td>{{ props.item.Name }}</td>
                  
                  <td>{{ props.item.IdNumber}}</td>
                  <td>{{ props.item.Phone}}</td>
                  <td><v-icon>done</v-icon></td>
                  <td>
                    {{FileResponse.OrderNo}}
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>  
      </v-layout>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  props:{
    FileResponse:Object
  },
  data () {
    return {
      search: '',
      complex: {
        selected: [],
        headers: [
          
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
            text: 'Status',
            value: 'statu'
          },
          {
            text: 'Order Number',
            value: 'OrderNo'
          },
        ],
        
      },
      json_fields: {
        'Name': 'Name',
        'Id': 'IdNumber',
        'Phone Number':'Phone'
      },
      dialog: false
    };
  },
  methods:{
    fetchData(){
      return this.FileResponse.GroupData
    }
  },
  watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.dialog = false), 4000)
      }
    }
};
</script>
