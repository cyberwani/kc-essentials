jQuery(document).ready(function(a){a(".kcsse-cwa").find(".add").on("click",function(){var b=a(this).parent().siblings("ul");if(b.is(":hidden")){b.slideDown(function(){a(this).removeClass("hidden")});return false}});a(".kcsse-cwa").find(".del").on("click",function(){var b=a(this).parent().siblings("ul");if(!b.parent().siblings().length){b.slideUp(function(){a(this).addClass("hidden").find("input.check").val("")})}})});