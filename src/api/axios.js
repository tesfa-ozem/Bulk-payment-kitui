/* eslint-disable */
import axios from 'axios';
const API_URL = 'http://40.114.117.175/UhcApi/api/BulkPayment/UploadGroupData';
export const execute = params => {
    return axios.get(API_URL, params)

}