import axios from "axios";
const BASE_URL="http://192.168.1.19:1337/api"
const API_KEY="1e6c93ac6b11bd666c7d7f17f263540d29d14297cf718a2f19a0c01247f6c88efedd214520e7e72dd2ffe82c2ea2400e4d040207ac7452955c03aa78a5747167923afcbefb74a9562bda963204192249b24d6b463669dd7be7a542066feebd5e95f2959322714eb4505c6a74419419bf140ea7788903825cfaaa62becfd440d6"
const AxioInstance=axios.create({
    baseURL:BASE_URL,
    headers:{
        'Authorization':"Bearer "+API_KEY
    }
})

const getSlider=()=>AxioInstance.get("/sliders?populate=*");

const getCategories=()=>AxioInstance.get("/categories?populate=*");

const getPremiumHospitals=()=>AxioInstance.get("/hospitals?filters[Premium][$eq]=true&populate=*");

const getHospitalsByCategory=(category)=>AxioInstance.get("hospitals?filters[categories][Name][$in]="+category+"&populate=*");

export default{
    getSlider,
    getCategories,
    getPremiumHospitals,
    getHospitalsByCategory
}