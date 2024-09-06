let heroformcontainer= document.querySelector('.form-container')
let form= document.querySelector('.formm')
let button = document.querySelector('button')
let submitt= document.querySelector('.submit')

button.addEventListener('click',function(e){
    e.preventDefault();
    if (heroformcontainer.style.display === 'none' || heroformcontainer.style.display === '') {
        heroformcontainer.style.display = 'block';
    } else {
        heroformcontainer.style.display = 'none';
    }
    
})
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let formdata= new FormData(e.target);
        let obj={};
        formdata.forEach((val,key)=>{
            obj[key]=val;
        })
        console.log('Form Submitted:', obj);
})
