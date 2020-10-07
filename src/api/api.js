import axios from "axios";
import {Message,Loading} from "element-ui";

axios.defaults.withCredentials = true; //是否自带cookie

let baseurl = process.env.API_ROOT, //不同环境的 ip+端口号
    baseapi = baseurl+'/api',       // 接口api公共路径
    instance = axios.create({
        baseURL:baseapi
    });

const baseUrl = baseurl;
const baseApi = baseapi;

const dataAjax = params => {
    let loadingInstance = params.loading?Loading.service({fullscreen:true,text:params.loading||'加载中'}):null;
    let method = params.method,
        url = `${baseapi}`+params.url,
        callback = res=>{
            if(params.loading) loadingInstance.close();
            res = res.data;
            if(!res||!res.httpCode||(res.httpCode!=401&&res.httpCode!==200)){
                Message({
                    message:params.failMsg||res.msg||'加载失败，请重试',
                    type:'error'
                });
                if(params.failCall) params.failCall(res);
            }else if(res.httpCode===401){
                Message({
                    message:'登录信息过期，请重新登录',
                    type:'warning'
                });
                if(params.failCall) params.failCall(res);
            }else{
                if(params.successMsg){
                    Message({
                        message:params.success,
                        type:'success'
                    });
                }
                if(params.successCall) params.successCall(res.data)
            }
        },
        error = res=>{
            if(params.loading) loadingInstance.close();
            Message({
                message:params.failMsg || res.msg || '加载失败，请重试',
                type:'error'
            });
            if(params.failCall) params.failCall(res);
        };

        params.data = params.data ? Object.assign(params.data,{timestamp:new Date().getTime()}):{timestamp:new Date().getTime()};
        //请求方式转换小写
        if(params.method){params.method = params.method.toLocaleLowerCase()};
        //请求方式处理
        if(!method || method === 'get'){
            instance.get(url,{params:params.data}).then(callback).catch(error);
        }else if(method === 'post'){
            instance.post(url,params.data).then(callback).catch(error);
        }else if(method === 'delete'){
            instance.delete(url,{params:params.data}).then(callback).catch(error);
        }
};

export { baseUrl,baseApi, dataAjax }

