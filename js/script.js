
var app =new Vue(
{
 el:"#app",
 // array di obj, ogni arrai contiene gli elemnti della stessa chat
 data:
 {
  inputSearchUser:'',
  inputMsgUser:'',
  indexActive:0,
  // array della chat attiva
  contatti:[
  //prima chat
  {
    nomeUtente:"Mario",
    linkImgUtente:"img/avatar_2.jpg",
    dataAccess:"Oggi ore 15:54",
    lastMsgReceived:"last-message",
    dateLastMsgReceived:"10:25",
    stateChat: false,
    filter:true,
    messaggio:[
      {
        testo:"mio messaaggio ed e' solo uno in mario",
        miomessaggio:true
      }
    ]
   },
   // seconda chat
  {
     nomeUtente:"Giovanni",
     linkImgUtente:"img/avatar_3.jpg",
     dataAccess:"Oggi ore 15:54",
     lastMsgReceived:"last-message",
     dateLastMsgReceived:"10:25",
     stateChat:false,
     filter:true,
     messaggio:[
       {
         testo:"mio messaaggio",
         data:"ora invio",
         miomessaggio:true
       },
       {
         testo:"suo messaggio",
         data:"ora invio",
         miomessaggio:false
       },
       {
         testo:"Giovanni a 3 messaggi in lista",
         data:"ora invio",
         miomessaggio:false
       }
     ]
    },
   // terza chat
  {
      nomeUtente:"Luca",
      linkImgUtente:"img/avatar_4.jpg",
      dataAccess:"Oggi ore 15:54",
      lastMsgReceived:"last-message",
      dateLastMsgReceived:"10:25",
      stateChat:false,
      filter:true,
      messaggio:[
        {
          testo:"mio messaaggio",
          data:"ora invio",
          miomessaggio:true
        },
        {
          testo:"suo messaggio",
          data:"ora invio",
          miomessaggio:false
        },
        {
          testo:"mio messaaggio",
          data:"ora invio",
          miomessaggio:true
        },
        {
          testo:"Luca ha 4 msg",
          data:"ora invio",
          miomessaggio:false
        }
      ]
     },
   // quarta chat
  {
       nomeUtente:"Luisa",
       linkImgUtente:"img/avatar_5.jpg",
       dataAccess:"Oggi ore 15:54",
       lastMsgReceived:"last-message",
       dateLastMsgReceived:"10:25",
       stateChat:false,
       filter:true,
       messaggio:[
         {
           testo:"io sono Luisa",
           data:"ora invio",
           miomessaggio:true
         },
         {
           testo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
           data:"ora invio",
           miomessaggio:false
         }
       ]
    },
  ]
 },
 methods:{
 openThis(item,i) {
    this.indexActive=i;
    // console.log(this.chatActive);
  },
 sendMsg(){
     this.contatti[this.indexActive].messaggio.push({testo:this.inputMsgUser, miomessaggio:true, data:'15:56:55'});
     this.inputMsgUser ='';
     setTimeout(()=> {
      this.contatti[this.indexActive].messaggio.push({testo:"ok....", miomessaggio:false, data:'15:57:55'})
    },2000)
   }
  }



}
);
