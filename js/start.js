var state=0;
$('body').click(function(){
    if(state==0){
        state++;
        $('.lamp1').toggleClass('lamp1-anime')
        $('.lamp2').toggleClass('lamp2-anime')
        $('.lamp3').toggleClass('lamp3-anime')
        $('.lamp4').toggleClass('lamp4-anime')
        $('.lamp5').toggleClass('lamp5-anime')
        $('.LOGO').toggleClass('LOGO-anime')
        $('.person1').toggleClass('person1-anime')
        $('.group').toggleClass('group-anime')
        $('.person2').toggleClass('person2-anime')
    }else if(state==1){
        state++;
        $('.lamp1').toggleClass('lamp1-overanime')
        $('.lamp1').toggleClass('lamp-fade')
        $('.lamp2').toggleClass('lamp2-overanime')
        $('.lamp2').toggleClass('lamp-fade')
        $('.lamp3').toggleClass('lamp3-overanime')
        $('.lamp3').toggleClass('lamp-fade')
        $('.lamp4').toggleClass('lamp4-overanime')
        $('.lamp4').toggleClass('lamp-fade')
        $('.lamp5').toggleClass('lamp5-overanime')
        $('.lamp5').toggleClass('lamp-fade')
        $('.group').toggleClass('group-overanime')
        $('.group').toggleClass('group-fade')
        $('.LOGO').toggleClass('LOGO-overanime')
        $('.LOGO').toggleClass('LOGO-next')
        $('.person1').toggleClass('person1-overanime')
        $('.person1').toggleClass('person1-next')
        $('.person2').toggleClass('person2-overanime')
        $('.person2').toggleClass('person2-next')

        $('.header').toggleClass('fadein')
        $('.navagation').toggleClass('fadein')
        $('.words').toggleClass('fadein')
        
    }
    console.log(state)
})

$(document).ready(()=>{
    console.log("Event triggered!")
})