/////////////////////////////////////////////
// jQuery enter buttons appearance
	
$(document).ready(function() {
	$('.WEB_arsonal,.WEB_avatar_labs,.WEB_machinima, .WEB_josiah_early, .WEB_charm_school, .WEB_BMP, .WEB_heavy_duty, .WEB_1pt1, .WEB_dmsFM, .WEB_dmsFM_email, .WEB_endust, .WEB_coding, .WEB_FragD, .WEB_NOW, .WEB_GoTV_site, .WEB_stratford_hall, .WEB_chocolate_city, .WEB_Community, .WEB_LFY_site, .WEB_Maranatha, .WEB_channel_buyer, .WEB_universal, .WEB_myPlace, .WEB_verizon_widget, .WEB_momibello, .WEB_music_sites, .WEB_Latimes, .WEB_myHolidayCondo, .WEB_pacific_natural_spices, .WEB_formative, .MOBILE_bettye_lavette, .MOBILE_aquatic_discoveries, .MOBILE_yoga_assists, .MOBILE_GoTV_Partners, .MOBILE_GoTV_originals, .MOBILE_Sprint_Cup, .MOBILE_LFY, .MOBILE_the_cool_doc, .MOBILE_10toPlay, .MOBILE_hsts, .MOBILE_vcr, .MOBILE_Jackass, .MOBILE_Telemundo, .MOBILE_TB_Bucs, .MOBILE_demos, .PRINT_movie_promotion, .PRINT_X, .PRINT_VRLA, .PRINT_machinima, .PRINT_AL_signage, .PRINT_GoTV_branding, .PRINT_AL_marketing, .PRINT_cinedigm, .PRINT_skyrose, .PRINT_aeg, .PRINT_bmp, .PRINT_rich_robinson, .PRINT_book_design, .PRINT_brkdwn, .PRINT_pdp, .PRINT_GOTV_corp, .PRINT_GOTV_biz_dev, .PRINT_GOTV_marketing, .PRINT_GOTV_show_branding, .PRINT_guides, .PRINT_SEE, .PRINT_wrigleys, .PRINT_NOFX, .PRINT_LAT, .PRINT_Target, .PRINT_FragD, .PRINT_misc, .PRINT_old, .MOTION_MLG_CSGO, .MOTION_machinima, .MOTION_plutoTV, .MOTION_BID, .MOTION_pokebingo, .MOTION_controller, .MOTION_profiler, .MOTION_crazy_heart, .MOTION_big_joe, .MOTION_xology, .MOTION_TVGasm, .MOTION_family_business, .MOTION_kingdom, .MOTION_music_promo, .MOTION_cambio, .MOTION_dyatlov_pass, .MOTION_pinnacle, .MOTION_mobil, .MOTION_sprint, .MOTION_motorola, .MOTION_cricket, .MOTION_gotv, .MOTION_limelight, .MOTION_inside_track').append('<span class="hover hover_placement"></span>').each(function () {
		var $span = $('> span.hover', this).css('opacity', 0);
		$(this).hover(function () {
			$span.stop().fadeTo(500, 1); /* the 500 changes the speed */
		}, function () {
	$span.stop().fadeTo(500, 0);
		});
	});
});