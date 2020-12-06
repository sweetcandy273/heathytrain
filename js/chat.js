const firebaseConfig = {
  apiKey: "AIzaSyDGgcfUYbxBvtkGgLL_aQFMS2B1nxXxT6k",
  authDomain: "heathytrain-c5259.firebaseapp.com",
  databaseURL: "https://heathytrain-c5259.firebaseio.com",
  projectId: "heathytrain-c5259",
  storageBucket: "heathytrain-c5259.appspot.com",
  messagingSenderId: "357286277790",
  appId: "1:357286277790:web:bf3ed0ea0e2c953e13018f",
  measurementId: "G-737DC9CSXZ"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

db.collection("home").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {

      if (doc.data().imgname == "chat") {

          const result =`<img src="${doc.data().link}" alt="" width="15%">`
         
          $("#showchat").append(result)

      }
      if (doc.data().imgname == "user") {

        const result =`<span class="my-msg"> สวัสดีค่ะ ช่วยแนะนำวิธีวิ่งที่ถูกหลักการให้หน่อยค่ะ</span> 
        <img src="${doc.data().link}" class="avatar" alt="">`
       
        $("#user1").append(result)

    }   
    if (doc.data().imgname == "train3") {

      const result1 =`<img src="${doc.data().link}" class="avatar" alt="">
      <div class="msg">
      <img src="img/chat1.png" alt="" width="180" height="180" style="border-radius: 20px; margin-left: -3px; margin-bottom: 10px;" >`
      $("#train1").append(result1)
      const result2 =`<img src="${doc.data().link}" class="avatar" alt="">                     
      <span class="msg"> ลองอ่านเว็บนี้ดูนะครับ <br> https://bit.ly/3pa20qo</span>`
  $("#train2").append(result2)
  }  
  
  })
});

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'page1') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('page2.html', {data: {title: 'Page 2'}});
    };
  } else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');
const emojiBtn = document.querySelector('#emoji-btn');
const picker = new EmojiButton();


// Emoji selection  
window.addEventListener('DOMContentLoaded', () => {

    picker.on('emoji', emoji => {
      document.querySelector('input').value += emoji;
    });
  
    emojiBtn.addEventListener('click', () => {
      picker.togglePicker(emojiBtn);
    });
  });        

//   chat button toggler 

// chatBtn.addEventListener('click', ()=>{
//     popup.classList.toggle('show');
// })

// send msg 
submitBtn.addEventListener('click', ()=>{
    let userInput = inputElm.value;
    if(userInput == ''){

    }else{
      let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    <img src="img/user.jpg" class="avatar">
    </div>`;
    chatArea.insertAdjacentHTML("beforeend", temp);
    inputElm.value = '';
    }
    

    

})
function goconversation(){
  window.location.href = "conversation.html";
}

function goBacktohome() {
  window.location.href = "home.html";
}
function goBacktochat() {
  window.location.href = "chat.html";
}