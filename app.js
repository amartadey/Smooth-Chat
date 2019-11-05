window.addEventListener('DOMContentLoaded',(e)=>{
    let chatBox = document.querySelector('#smooth-chat');
    chatBox.setAttribute('style','width:60px; height:60px;  border-radius:50%; position:fixed; ')
    chatBox.addEventListener('click',chatClick());


    function imgAdd(){
        let list = document.createElement('ul');
        list.classList.add("chat-icons");
        list.setAttribute('style','padding:0; margin:0;width: 100%;height: 100%; line-height:0;overflow:hidden; position:relative');
        let allImg = ['chat.png','email.png','facebook.png','phone.png','whatzapp.png'];
        for(i=0;i<5;i++){
            let imgs = document.createElement('img');
            let listItem = document.createElement('li');
            imgs.setAttribute('src',`images/${allImg[i]}`);
            listItem.appendChild(imgs);
            listItem.setAttribute('style', 'list-style:none;width: 100%;height: 100%;display: block;position:absolute; top:0; left:0');
            list.appendChild(listItem);
            imgs.setAttribute('style','padding:0; margin:0; line-height:0;width: 100%;height: 100%;');
            
        }
        chatBox.appendChild(list);

        let listItems = list.querySelectorAll('li');
        for(item of listItems){
            item.style.display = "none";
        }
        function carousel(){
            
        }
    }

    imgAdd();



    
    


    function chatClick(){
        // test
    }
})