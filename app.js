const searchform=document.getElementById("searchform")
const searchbox=document.getElementById("searchbox")
const searchresult=document.getElementById("searchresult")
const smbtn=document.getElementById("showmorebtn")

let keyword=""
let page=1
let clientid= "qG6EDvMrq0zxf0a9OBKKQpKQizaAX8OiaogkRM0kn9Q"
async function searchimage(){
    keyword=searchbox.value 
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${clientid}&per_page=12`

     const response=await fetch(url)
     const data= await response.json()
     if(page===1){
        searchresult.innerHTML=""
     }


     const results=data.results
     results.map((result)=>{
        const image=document.createElement("img")
        image.src=result.urls.small
        const imagelink= document.createElement("a")
        imagelink.href=result.links.html
        imagelink.target="_blank"
        imagelink.appendChild(image)
        searchresult.appendChild(imagelink)
     })
     smbtn.style.display="block"


}
searchform.addEventListener("submit",(e)=>{
    e.preventDefault()
    page=1
    searchimage()
})


smbtn.addEventListener("click",()=>{
    page++
    searchimage()
})