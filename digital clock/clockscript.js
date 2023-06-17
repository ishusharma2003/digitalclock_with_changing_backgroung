let backimage=['clockbackground.jpg','clockbackground2.jpg','clockbackground3.jpg','clockbackground4.jpg',
'clockbackground5.jpg','clockbackground6.jpg','clockbackground7.jpg','clockbackground8.jpg',
'clockbackground9.jpg','clockbackground10.jpg',]

let ran=setInterval(function(){
    let x=Math.random()*10
    let y=Math.round(x)

    document.body.style.background=`url(${backimage[y]})`
    document.body.style.backgroundSize = 'cover';
},5000)



// document.body.style.background="url('clockbackground5.jpg')"


let b=setInterval(function(){
    let a=new Date();
    let h=a.getHours()
    let m=a.getMinutes()
    let s=a.getSeconds()
    let d=a.getDay()


let timehr=document.getElementsByClassName("hrfig")[0]
timehr.innerHTML=h
let timemin=document.getElementsByClassName("minfig")[0]
timemin.innerHTML=m
let timesec=document.getElementsByClassName("secfig")[0]
timesec.innerHTML=s

},1000)
