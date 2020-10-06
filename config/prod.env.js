var target = process.env.npm_lifecycle_event;

if(target === 'sit'){
    var obj = {
        NODE_ENV:'"production"',
        API_ROOT:'"http://139.196.42.209:5004"'
    }
}else if(target === 'uat'){
    var obj = { 
        NODE_ENV:'"production"',
        API_ROOT:'"http://139.196.42.209:5004"'
    }
}else{
    //prd 正式环境
    var obj = {
        NODE_ENV:'"production"',
        API_ROOT:'"http://139.196.42.209:5004"'
    }
}
module.exports = obj;