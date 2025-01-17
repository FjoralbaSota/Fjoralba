//access html elements
const alertButton=document.getElementById('alertButton')
const openWindowButton=document.getElementById('openWindowButton')
const navigateBackButton=document.getElementById('navigateBackButton')
const changeURLButton=document.getElementById('changeURLButton')

//attach event listeners
alertButton.addEventListener('click',() =>{window.alert("this is alert");
})

openWindowButton.addEventListener('click', () => {window.open('https://translate.google.com/', '_blank');
});

navigateBackButton.addEventListener('click',() => {history.back();} );

changeURLButton.addEventListener('click', ()=>{location.href='https://mail.google.com/'})
