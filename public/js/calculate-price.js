var getPrice = function() {
	var parent = document.getElementById('parent');
	var child = document.getElementById('calculatedprice');
	if (child) {
		parent.removeChild(child);
	}
	var months = document.getElementById('monthsBilled').value;
	var services = document.getElementsByTagName('select');
	var SEO_price = 0;
	var SM_price = 0;
	var LB_price = 0;
	for (var i = 0; i < services.length; i++) {
		if(services[i].value === "Yes") {
			if(i === 0) {
				SM_price = 200*months;
			} else if (i === 1) {
				SEO_price = 500*months;
			} else if (i === 2) {
				LB_price = 250*months;
			}
		};
	};
	var totalPrice = SM_price + SEO_price + LB_price;
	var price = document.createElement('p');
	var textnode = document.createTextNode('Total Price: ' + totalPrice);
	price.appendChild(textnode);
	price.setAttribute('id','calculatedprice');
	parent.appendChild(price);
}