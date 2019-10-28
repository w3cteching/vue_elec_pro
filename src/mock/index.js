import Mock from 'mockjs'

//引入商品mock数据
import goodsjson from './goods'
import userjson from './user'
import listjson from './list'


//Mock.mock('请求接口地址','提交方式','请求的数据')

Mock.mock('http://www.1902A.com/api/goods','get',goodsjson)
Mock.mock('http://www.1902A.com/api/list','get',listjson)
Mock.mock('http://www.1902A.com/api/user','get',userjson)