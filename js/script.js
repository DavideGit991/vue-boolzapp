


var app =new Vue(
{
 el:"#app",
 // array di obj, ogni arrai contiene gli elemnti della stessa chat
 data:
 {
  inputSearchUser:'',
  inputMsgUser:'',
  chatActive:[{
    nomeUtente:"Mario",
    linkImgUtente:"img/avatar_2.jpg",
    dataAccess:"Oggi ore 15:54",
    lastMsgReceived:"last-message",
    dateLastMsgReceived:"10:25",
    stateChat: false,
    sendMsg:[{
      msg:["msg1","msg2"],
      date:["data1","data2"]
    }],
    receivedMsg:[{
      msg:["msg1","msg2"],
      date:["data1","data2"]
    }]
   }],
  chat:[
  //prima chat
  {
    nomeUtente:"Mario",
    linkImgUtente:"img/avatar_2.jpg",
    dataAccess:"Oggi ore 15:54",
    lastMsgReceived:"last-message",
    dateLastMsgReceived:"10:25",
    stateChat: false,
    sendMsg:[{
      msg:["msg1","msg2"],
      date:["data1","data2"]
    }],
    receivedMsg:[{
      msg:["msg1","msg2"],
      date:["data1","data2"]
    }]
   },
   // seconda chat
  {
     nomeUtente:"Giovanni",
     linkImgUtente:"img/avatar_3.jpg",
     dataAccess:"Oggi ore 15:54",
     lastMsgReceived:"last-message",
     dateLastMsgReceived:"10:25",
     stateChat:false,
     sendMsg:[{
       msg:["msg1","msg2"],
       date:["data1","data2"]
     }],
     receivedMsg:[{
       msg:["msg1","msg2"],
       date:["data1","data2"]
     }],
    },
   // terza chat
  {
      nomeUtente:"Luca",
      linkImgUtente:"img/avatar_4.jpg",
      dataAccess:"Oggi ore 15:54",
      lastMsgReceived:"last-message",
      dateLastMsgReceived:"10:25",
      stateChat:false,
      sendMsg:[{
        msg:["msg1","msg2"],
        date:["data1","data2"]
      }],
      receivedMsg:[{
        msg:["msg1","msg2"],
        date:["data1","data2"]
      }],
     },
   // quarta chat
  {
       nomeUtente:"Luisa",
       linkImgUtente:"img/avatar_5.jpg",
       dataAccess:"Oggi ore 15:54",
       lastMsgReceived:"last-message",
       dateLastMsgReceived:"10:25",
       stateChat:false,
       sendMsg:[{
         msg:["msg1","msg2"],
         date:["data1","data2"]
       }],
       receivedMsg:[{
         msg:["msg1","msg2"],
         date:["data1","data2"]
       }],
    },
  ]
 },
 methods:{
 openThis(item) {
  item.stateChat = !item.stateChat;
  this.chatActive = this.chat.filter((item)=>{return item.stateChat===true});
  item.stateChat = !item.stateChat;
  console.log(this.chatActive);
 }
 }








}
);
