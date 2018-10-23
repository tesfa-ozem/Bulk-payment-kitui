<template>
  <div id="media" class="media">
    <v-toolbar class="elevation-0 transparent media-toolbar">
      <v-btn-toggle>
        <v-btn flat>
          <v-icon color="primary">cloud_upload</v-icon>
          &nbsp;Upload
        </v-btn>
        <v-btn flat>
          <v-icon color="primary">folder</v-icon>
          &nbsp; Add Folder
        </v-btn>
      </v-btn-toggle>
      <v-spacer></v-spacer>
      <v-btn-toggle v-model="view">
        <v-btn flat value="list">
          <v-icon color="primary">view_headline</v-icon>
        </v-btn>
        <v-btn flat value="grid">
          <v-icon color="primary">view_list</v-icon>
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>
    <v-divider></v-divider>
    <div class="layout row media-layout">
      <div class="media-content flex transparent">
        <vue-perfect-scrollbar class="media-content--warp">
          <v-container fluid v-if="view ==='grid'">
            <v-layout row wrap class="x-grid-lg">
              <v-flex sm12>
          <h3>Complex Table</h3>
        </v-flex>        
        <v-flex lg12>
          <v-card>
            <v-toolbar card color="white">
              <v-text-field
              flat
              solo
              prepend-icon="search"
              placeholder="Type something"
              v-model="search"
              hide-details
              class="hidden-sm-and-down"
              ></v-text-field>     
              <v-btn icon>
                <v-icon>filter_list</v-icon>
              </v-btn>         
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-data-table
                :headers="complex.headers"
                :search="search"
                :items="complex.items"
                :rows-per-page-items="[10,25,50,{text:'All','value':-1}]"
                class="elevation-1"
                item-key="name"
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
                  <td>
                    <v-avatar size="32">
                      <img :src="props.item.avatar" alt="">
                    </v-avatar> 
                  </td>
                  <td>{{ props.item.name }}</td>
                  <td>{{ props.item.email }}</td>
                  <td>{{ props.item.phone }}</td>
                  <td>
                    <v-btn depressed outline icon fab dark color="primary" small>
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn depressed outline icon fab dark color="pink" small>
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </td>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-flex>  
            </v-layout>
          </v-container>
          <v-layout column v-else>
            
            
          </v-layout>
        </vue-perfect-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Bytes from 'bytes';
import { getFileMenu, getFile } from '@/api/file';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import { Items as Users } from '@/api/user';
import API from '@/api';
import axios from 'axios';
export default {
  components: {
    VuePerfectScrollbar
  },  
  props: {
    type: {
      type: String,
      default: 'image'
    },
  },
  data: () => ({
    size: 'lg',
    view: 'grid',
    selectedFile: {
      path: '/static/icon/empty_file.svg'
    },
    search: '',
      complex: {
        payments:[],
        selected: [],
        headers: [
          {
            text: 'Avatar',
            value: 'avatar'
          },
          {
            text: 'Name',
            value: 'name'
          },
          {
            text: 'Email',
            value: 'email'
          },
          {
            text: 'Phone',
            value: 'phone'
          },
          {
            text: 'Action',
            value: ''
          },
        ],
        items: Users
      },
  }),
  computed: {
    mediaMenu () {
      return getFileMenu;
    },
    files () {
      return getFile();
    }
  },
  methods: {
    isImage (file) {
      return this.imageMime.includes(file.fileType);
    },
    mimeIcons (file) {
      return this.imageMime.includes(file.fileType) ? 'image' : 'insert_drive_file';
    },
    showDetail (file) {
      this.selectedFile = file;
    },
    fileSize (number) {
      return Bytes.format(number);
    },
    formateDate (string) {
      return (string) ? new Date(string).toLocaleDateString() : '';
    },
    computeFileImage (file) {
      return this.isImage(file) ? file.path : '/static/icon/file_empty.svg';
    },
    GetPayments:function(){
      
        
    }
  },
  created:function(){
    this.GetPayments();
    setInterval(function(){
      this.GetPayments();
    }.bind(this),5000)
  }  
};
</script>
<style lang="stylus" scoped>
.media
  &-cotent--wrap

  &-menu 
    min-width: 260px
    border-right: 1px solid #eee
    min-height: calc(100vh - 50px - 64px);
  &-detail 
    min-width:300px
    border-left:1px solid #eee
</style>
