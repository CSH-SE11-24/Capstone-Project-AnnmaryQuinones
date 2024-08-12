let logo = document.querySelector(".logo")

logo.addEventListener('click',function(event){
  logo.src="https://www.saclibrary.org/getattachment/About/News/2022-(1)/Introducing-Hive-Class/Hiveclass-Logo-(Original-Dark).png.aspx?lang=en-US&width=200&height=200"
})

















let aquatics = document.querySelector("#aquatics")

aquatics.addEventListener('mouseover', function(event){
  if (!aquatics.innerHTML.includes("video")){
    console.log("setting video")
  aquatics.innerHTML = `<video src="aquatics.mp4" type="video/mp4" controls muted width="100%"></video>`
  //clip.play()
  } else {
    console.log("video already playing")
  }
})

aquatics.addEventListener('mouseout', function(event){
  aquatics.innerHTML = `<img src="aquatics image.jpg" class="rounded float-end" alt="aquatics course" width="350" height="200">`
})
