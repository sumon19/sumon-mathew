$(document).ready(function() {
				$('#download_pdf').click(function () {
					alert("hello sumon");
				var pdf = new jsPDF('p', 'pt', 'letter')
				, source = $('#page_content')[0]
				, specialElementHandlers = {
				'#bypassme': function(element, renderer)
				{      
					return true
				}
				}
				margins = {
					top: 60,
					bottom: 60,
					left: 40,
					width: 522
				};
				pdf.fromHTML(
					source
					, margins.left
					, margins.top 
					, {
						'width': margins.width 
						, 'elementHandlers': specialElementHandlers
					},
				function (dispose) {
					pdf.save('download_pdf.pdf');
				},
				margins
				)
				
			});
			});
			