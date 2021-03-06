var giorno= dataOdierna()


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
    nomeUtente:"MariO",
    linkImgUtente:"img/avatar_2.jpg",
    dataAccess: "15 agosto 2105" ,
    messaggio:[
      {
        testo:"mio messaaggio ed e' solo uno in mario",
        miomessaggio:true,
        data:giorno
      }
    ]
   },
   // seconda chat
  {
     nomeUtente:"giovanni",
     linkImgUtente:"img/avatar_3.jpg",
     dataAccess:"data",
     lastMsgReceived:" ULTIMO msg ",
     dateLastMsgReceived:"10:25",
     filter:true,
     messaggio:[
       {
         testo:"mio messaaggio",
         data:giorno,
         miomessaggio:true
       },
       {
         testo:"suo messaggio",
         data:giorno,
         miomessaggio:false
       },
       {
         testo:"Giovanni a 3 messaggi in lista",
         data:giorno,
         miomessaggio:false
       }
     ]
    },
   // terza chat
  {
      nomeUtente:"luca",
      linkImgUtente:"img/avatar_4.jpg",
      dataAccess:"Oggi ore 15:54",
      lastMsgReceived:"last-message",
      dateLastMsgReceived:"10:25",
      filter:true,
      messaggio:[
        {
          testo:"mio messaaggio",
          data:giorno,
          miomessaggio:true
        },
        {
          testo:"suo messaggio",
          data:giorno,
          miomessaggio:false
        },
        {
          testo:"mio messaaggio",
          data:giorno,
          miomessaggio:true
        },
        {
          testo:"Luca ha 4 msg",
          data:giorno,
          miomessaggio:false
        }
      ]
     },
   // quarta chat
  {
       nomeUtente:"luisa",
       linkImgUtente:"img/avatar_5.jpg",
       dataAccess:"Oggi ore 15:54",
       lastMsgReceived:"last-message",
       dateLastMsgReceived:"10:25",
       filter:true,
       messaggio:[
         {
           testo:"io sono Luisa",
           data:giorno,
           miomessaggio:true
         },
         {
           testo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
           data:giorno,
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
      if (this.inputMsgUser=== '') {
      }
      else {
        this.contatti[this.indexActive].messaggio.push({testo:this.inputMsgUser, miomessaggio:true, data:giorno});
        this.inputMsgUser ='';
        setTimeout(()=> {
         this.contatti[this.indexActive].messaggio.push({testo:"ok....", miomessaggio:false, data:giorno})
       },1500)
      }
    },
    deleteMsg(item,i){
      this.contatti[this.indexActive].messaggio.splice(i,1);
      console.log(i);
    },

  },

  // computed attiva la funzione a una variazione
  computed: {
    // filtro il mio array contatti in base alle lettere che inserisco nell'input di ricerca, partendo dalla prima lettera e proseguendo
    filtroChat(){
      if(this.inputSearchUser.toLowerCase()){
        return this.contatti.filter((item)=>{
          // return item.nomeUtente.toLowerCase().startsWith(this.inputSearchUser);
        return this.inputSearchUser.toLowerCase().split(' ').every(v => item.nomeUtente.toLowerCase().includes(v))
      })
      }else{
        return this.contatti;
      }
    }

  }



});

function dataOdierna(){
 let data = new Date();
 let anno, mm, dd,hh, m, ss;
 dd = data.getDay() + "-";
 mm = data.getMonth() + "-"
 anno = data.getFullYear() + " ";
 hh = data.getHours() + ":";
 m = data.getMinutes() + ":";
 ss = data.getSeconds() ;
 let dataOdierna =  hh + m + ss + "    " + dd + mm + anno ;
 return dataOdierna;
}
