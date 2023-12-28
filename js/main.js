var siteName=document.getElementById("siteInput");
var urlName=document.getElementById("urlInput");
var btn=document.getElementById("btn");
var table=document.getElementById("table-content");
var message=document.getElementById("alert");
var hiddenBtn= document.getElementById("hidden-btn");

console.log(siteName);
console.log(urlInput);
 
   
function checkUrl(){
    console.log(urlName.value);
    var url=urlName.value;
    var regex=/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/
    if(regex.test(url)){
     urlName.classList.add("is-valid");
     urlName.classList.remove("is-invalid");
     
     
     
     return true;
    }else{
        
        urlName.classList.add("is-invalid");
        urlName.classList.remove("is-valid");
       
        return false;
    }
}
function checkName(){
    var name=siteName.value;
    var regex=/^[a-zA-Z]{4,20}$/
    if(regex.test(name)){
     siteName.classList.add("is-valid");
     siteName.classList.remove("is-invalid");
      btn.classList.remove("d-none");
     
      
    
     return true;
     
    }else{
        siteName.classList.add("is-invalid");
        siteName.classList.remove("is-valid");
    btn.classList.add("d-none");
   
        return false;
        
    }  
}


function checkValidation(){
    if(checkUrl()&&checkName()){
        console.log("true from checkValidation function");
        // btn.classList.remove("d-none");
        // hiddenBtn.classList.remove("d-block");
        // hiddenBtn.classList.add("d-none");

        return true;
    }else{
        console.log("false from checkValidation function");
        // btn.classList.add("d-none");
        // hiddenBtn.classList.add("d-block");
        // hiddenBtn.classList.remove("d-none");
   
   
        console.log("no");
        return false;
    }
}

 

 

var items=[];
if(localStorage.getItem("bookmarks")!=null){
    items=JSON.parse(localStorage.getItem("bookmarks"));
     displayData();
}

function add(){

    var bookmark={
      name:siteName.value,
      url:urlName.value,
    }
    items.push(bookmark);
    console.log(bookmark);
    localStorage.setItem("bookmarks",JSON.stringify(items));
    }

    

function submit(){
   if(checkValidation()){
    console.log("true from submit function");
    siteName.classList.remove("is-valid");
    urlName.classList.remove("is-valid");
    add();
    displayData();
    clear();
   }
   else{
    siteName.classList.remove("is-invalid");
    urlName.classList.remove("is-invalid");
    hiddenBtn.click();

    console.log("false from submit function");
  

    // $(document).ready(function(){
    //     $("#btn").click(function(){
    //       $("#myModal").modal();
    //     });
    //   });




    
  
   
    
   }


}

function displayData(){
    var content="";
    for(var i=0;i<items.length;i++){
     content+=`
     <tr>
     <td>${i}</td>
     <td>${items[i].name}</td>
     <td>
     <a href="${items[i].url}" target="_blank">
     <button class="btn  btn-success " >      <i class="fa-solid fa-eye"></i> Visit  </button>
     </a>
       
    </td>
     <td>
         <button class="btn btn-danger " onclick="deleteItem(${i})">
             <i class="fa-solid fa-trash-can"></i> Delete
         </button>
     </td>
 </tr>
     `
    }
    table.innerHTML=content;

}

function deleteItem(i){
console.log(i);
items.splice(i,1);
localStorage.setItem("bookmarks",JSON.stringify(items));
displayData();
}

function clear(){
    siteName.value="";
    urlName.value="";
}


