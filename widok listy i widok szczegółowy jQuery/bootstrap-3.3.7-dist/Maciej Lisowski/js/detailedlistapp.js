/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    $('.peopleDetailedInformation').hide();
    $('.peopleListDisplayedHeader').click(function () {
        $(this).find('.peopleDetailedInformation').slideToggle();


    });


});
