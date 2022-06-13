
import Typed from 'typed.js';
import axios from 'axios'
import Noty from 'noty';

var cart_shop = document.querySelectorAll('.add-to-cart');
var cart_Couter= document.getElementById('cardCounter');

function postData (btnData){
            axios.post('/update-cart',btnData).then(res=>{
                    console.log(res, " this is a session data ")
                    cart_Couter.innerHTML= res.data.totalQty;
                    new Noty({
                    
                      text: 'Order Sucsuss',
                      type:'success',
                      timeout:1000,
                      progressBar:false
                    
                  }).show()

            }).catch(err=>{
              console.log(err,"some error in axios");
            })
}

cart_shop.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    let btnData = JSON.parse(btn.dataset.temp);
       postData(btnData);
  })
});


//navbar 

(function($) {
  $(function() {
    $('nav ul li a:not(:only-child)').click(function(e) {
     

      $(this).siblings('.nav-dropdown').toggle();
 
          $('.dropdown').not($(this).siblings()).hide();
          
          e.stopPropagation();

    });

    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  });
})(jQuery);

var typed2 = new Typed('.text_demo', {
  strings: ['Strat now <strong style="color:#00006A;">Sheared Hosting </strong>',' Strat now <strong style="color:#3B82F6;">Cloud Hosting &#128515;</strong>', 'Strat now <strong style="color="#FFA531">VPS hosting</strong>'],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 500,
  startDelay: 1000,
  fadeOut: true,

  loop: true
});
var typed2 = new Typed('.domain_text', {
  strings: [" ","best Domain Name","Hostkites.com"],
  typeSpeed: 55,
    backSpeed: 50,
    attr: 'placeholder',
    bindInputFocusEvents: true,
    loop: true,
  cursorChar:true
});




  // navbar 

 

    