$(document).ready(function(){
	$('.btn-navbar.navbar-toggle').click(function(){
		//alert("dsfds");
		$("#mobnav").empty();
		$("#mobnav").toggleClass('show');
		$("#desknav .menu1").children().clone().appendTo("#mobnav");
		$("#desknav .menu2").children().clone().appendTo("#mobnav");
		$("#mobnav").find('ul').addClass('navmob');
		$("#mobnav").find('ul').removeClass('nav');
		$("#mobnav").find('ul').removeClass('nav-collapse');
		$("#mobnav").find('ul').removeClass('pull-right');
	});
});