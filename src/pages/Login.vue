<template>
  <v-app id="login" class="primary">
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                    <img src="/static/nature/nicoza.png" alt="Vue Material Admin" width="" height="120">
                </div>                
                <v-form>
                  <v-text-field append-icon="person" name="login" label="Login" type="text" v-model="model.username"></v-text-field>
                  <v-text-field append-icon="lock" name="password" label="Password" id="password" type="password" v-model="model.password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="login" :loading="loading">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
    
  </v-app>
</template>
<script>
/* eslint-disable */
import {execute} from '@/api/axios.js'
import Event from'./../event.js' 
export default {
  data: () => ({
    loading: false,
    model: {
      username: '',
      password: 'password'
    }
  }),

  methods: {
    login () {
      
      if(this.model.username =="tesfa" )
      {
        this.loading = true;
        window.getApp.$emit('APP_LOGIN_SUCCESS');
      }
      else{
        this.loading = true;
        window.getApp.$emit('APP_LOGIN_SUCCESS');
      }
    }
  }

};
</script>
<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
    background-attachment: fixed;
  }
</style>
