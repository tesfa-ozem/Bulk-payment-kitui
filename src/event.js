/* eslint-disable */
export default [
  {
    name: 'APP_LOGIN_SUCCESS',
    callback: function (e) {
      this.$swal({
        position: 'center',
        type: 'success',
        title: 'Your Logged in',
        showConfirmButton: false,
        timer: 1500
      });
      this.$router.push({ path: '/dashboard' });
      
    }
  },
  {
    name: 'APP_LOGOUT',
    callback: function (e) {
      this.snackbar = {
        show: true,
        color: 'green',
        text: 'Logout successfully.'
      };
      this.$router.replace({ path: '/' });
    }
  },
  {
    name: 'APP_PAGE_LOADED',
    callback: function (e) {
    }
  },
  {
    name: 'APP_AUTH_FAILED',
    callback: function (e) {
      this.$router.push('/');
      this.$message.error('Token has expired');
    }
  },
  {
    name: 'APP_BAD_REQUEST',
    // @error api response data
    callback: function (msg) {
       this.snackbar = {
         show: true,
         color: 'red',
         text: 'Failed to upload,users exsist'
       };
    }
  },
  {
    name: 'APP_ACCESS_DENIED',
    // @error api response data
    callback: function (msg) {
     this.snackbar = {
       show: true,
       color: 'red',
       text: msg
     };
    }
  },
  {
    name: 'APP_RESOURCE_DELETED',
    // @error api response data
    callback: function (msg) {
      this.$message.success(msg);
    }
  },
  {
    name: 'APP_RESOURCE_UPDATED',
    // @error api response data
    callback: function (msg) {
      this.$swal({
        position: 'center',
        type: 'success',
        title: 'File Uploaded',
        showConfirmButton: false,
        timer: 1500
      });
    }
  },

];
