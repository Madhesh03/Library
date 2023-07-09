    let addedbook="";
     let addedbook2="";
   let title="hee";
   let author;
   let read;
   let i=0;
   let name1;
   document.querySelector("#title").value="";
          document.querySelector("#author").value="";
          document.querySelector("#pages").value="";
   
  
   const eventPrevent = document.querySelector("#form");
   eventPrevent.addEventListener('submit', (e)=>{
    
    e.preventDefault();
   
    Book();
    Addbook();

   
});




    
let book=[];
let mylibrary=[];
book[1]=['dfds','asdf','87','read'];
book[2]=['maddy','asdf','87','read'];
mylibrary.push(book[0],book[1]);
    console.log(mylibrary);
    console.log(book);
     
const tabler = document.querySelector("#table");

function Book() {
     
        
        let tabledata;
        let name;
        
        i=mylibrary.length+1;
        book[i]=[];
       

        title=document.querySelector("#title").value;
        book[i].push(title);
        author = document.querySelector("#author").value;
        book[i].push(author);
        pages = document.querySelector("#pages").value;
        book[i].push(pages);  
        read = document.querySelector('#read');
        myfunction();   
        book[i].push(read.value);
        mylibrary.push(book[i]);
       
      
       /* let text = document.createTextNode("Button");
        delbutton.appendChild(text);*/
}



function print(){

      const hire = document.querySelector('#table');
        let helooer;
        for(i=1;i<mylibrary.length+1;i++){
        helooer = document.createElement('tr');
        helooer.setAttribute("id",`row${i}`);
        let orgbook= book[i];

       for(j=0;j<4;j++){

        tabledata =document.createElement('td');
        const name = document.createTextNode(book[i][`${j}`]);
        tabledata.appendChild(name);
        helooer.appendChild(tabledata);
        hire.appendChild(helooer);


        }
        tabledata =document.createElement('td');
        name1 = document.createElement('button');
        name1.setAttribute("id",`del${i}`);
        name1.innerText="delete";
        name1.onclick = function() {
            let butid=this.id;
            let spliceid = butid.toString().slice(3);
             i=spliceid;
             document.getElementById("table").removeChild(document.getElementById(`row${i}`));
        };
         /*name1.onclick= function(){handleClick(this.id)};
       function handleClick(butid){
            let spliceid = butid.toString().slice(3);
             i=spliceid;
             document.getElementById('table').deleteRow(i);
          }*/
        tabledata.appendChild(name1);
        helooer.appendChild(tabledata);
        
        } 
       
            tabler.appendChild(helooer);
        
    }
   
    
        
      
      

function Addbook(){
      const hire = document.querySelector('#table');
      let helooer;
      let k=mylibrary.length;
      for(i=k;i<=mylibrary.length+1;i++){
      helooer = document.createElement('tr');
      helooer.setAttribute("id",`row${i}`);
      let orgbook= book[i];
      

     for(j=0;j<4;j++){

      tabledata =document.createElement('td');
      const name = document.createTextNode(book[i][`${j}`]);
      tabledata.appendChild(name);
      helooer.appendChild(tabledata);
      hire.appendChild(helooer);


      }
      tabledata =document.createElement('td');
          name1 = document.createElement('button');
          name1.setAttribute("id",`del${i}`);
          name1.innerText="delete";
          name1.onclick = function() {
            let butid=this.id;
            let spliceid = butid.toString().slice(3);
             i=spliceid;
             document.getElementById("table").removeChild(document.getElementById(`row${i}`));
        };
          /*name1.onclick= function(){handleClick(this.id)};
          function handleClick(butid){
               let spliceid = butid.toString().slice(3);
               i=spliceid;
               document.getElementById('table').deleteRow(i);
            }*/
          tabledata.appendChild(name1);
          helooer.appendChild(tabledata);



          document.querySelector("#title").value="";
          document.querySelector("#author").value="";
          document.querySelector("#pages").value="";
         
    
      
  }
  
        
    
         
    
    
      
    tabler.appendChild(helooer);
    
}
      print();


        
     
       
        
       function  myfunction(){
       

            if(read.checked==true){
                read.value= "Read";
        }
            else{
                read.value= "unread";
            }

        }


        
            
           

    const addabook=document.getElementById("addabook");
    addabook.addEventListener('click', () => {
        const form = document.getElementById('form');
        const form1=document.querySelector('.form');
      
        if (form.style.visibility ==='hidden') {
          
          form.style.visibility ='visible';
          form1.style.backgroundColor ='darkgray';
        }
        else {
          
          form.style.visibility ='hidden';
          form1.style.backgroundColor= 'black';
        }
      });

     
     /* name1.addEventListener('click', (this.id) => {
          let butid = this.id;
          let spliceid= butid.splice(0,3);
      
    });*/
    


