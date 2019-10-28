import Mock from 'mockjs';

let goodsjson=Mock.mock({
    "success|1-2":true,
    "data|10":[{
          "id":"@id",
         "author_id":"@id",
         "tab|1":['ask','job','share','good'],
         "content":"@cparagraph",
         "title":"@ctitle",
         "name":"@cname",
         "last_reply_at":"@datetime('yyyy-MM-dd A HH:mm:ss')",
         "good|1":false,
         "toip|1":false,
         "reply_count|+1": 3,
         "visit_count|1": 555,
         "create_at": "@datetime('yyyy-MM-dd A HH:mm:ss')",
         "author":{
             "loginname":"@cname",
             "avatar_url":"@url"
 
 
         },
        "imgurl|1":[
                'https://img11.360buyimg.com/n2/jfs/t1/1632/20/3511/140589/5b99c0adE686075a8/a0828e25d49e2eaf.jpg!q70.jpg.webp',
                'https://img14.360buyimg.com/n2/jfs/t1/84443/14/12846/189736/5d9df66fEebc0b47b/360c7f8d978f879a.jpg!q70.jpg.webp',
                'https://img10.360buyimg.com/n2/jfs/t1/58112/20/13690/259913/5da5a37bEf269000f/ffba9efc8c7904fc.jpg!q70.jpg.webp',
                'https://img10.360buyimg.com/n2/jfs/t1/60188/33/672/162527/5cee38d6E9e0181bc/f676a0b6eadeefec.jpg!q70.jpg.webp'
       ],
        "city":"@city(true)"
 
 
 
    }]
 
})
 
export default goodsjson;