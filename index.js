fetch('https://rablo-production.up.railway.app/product/')
.then(res=>res.json())
.then(data=>{
    function helper(ele)
    {
        let row="<p>"+ele.company+" "+ele.id+" "+ele.name+" "+ele.price+"<\p>";
        console.log(ele);
        const para=document.createElement('p');
        para.innerHTML=row;
        document.getElementsByTagName('body')[0].appendChild(para);
    }
    data.map(helper);
});
/*async function addNew()
{
    console.log("add called");
    let newele={
        id:document.getElementsByName("id").value,
        name:document.getElementsByName("name").value,
        price:document.getElementsByName("price").value,
        rating:document.getElementsByName("rating").value,
        featured:document.getElementsByName("featured").value,
        company:document.getElementsByName("company").value,
        createdAt:document.getElementsByName("createdAt").value
     }
     onsole.log(newele);
    fetch('https://rablo-production.up.railway.app/product/', {
    method: 'POST',
    body: JSON.stringify(newele),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}*/


const form=document.getElementById("form");
form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    console.log("add called");
     const playload=new FormData(form);
     let newele={};
     playload.forEach(function(value, key){
        newele[key] = value;
    });
    if(newele['featured']==='')
    {
        newele['featured']=false;
    }
    else
    {
        newele['featured']=true;
    }
    fetch('https://rablo-production.up.railway.app/product/', {
    method: 'POST',
    body: JSON.stringify(newele),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
})