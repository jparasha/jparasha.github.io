console.log('%c Hello there..', 'background: #fff; color: #5636a2');
		console.log('%c Appears you are a Geek!', 'background: #222; color: #bada55; font-size: 130%; font-family:monospace;');

		var link = "https://www.github.com/jparasha";
		var after = "If you like this kind of stuffs, feel free to contribute here " + link + " and send me constructive feedback";

		console.log('%c ' + after, 'background: #fff; color: #5636a2;');
		console.log("%c I can be contacted @ jayantparashar@outlook.com", "background: #fff; color: #5636a2");

		(function (i, s, o, g, r, a, m) {
			i['GoogleAnalyticsObject'] = r;
			i[r] = i[r] || function () {
				(i[r].q = i[r].q || []).push(arguments)
			}, i[r].l = 1 * new Date();
			a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
			a.async = 1;
			a.src = g;
			m.parentNode.insertBefore(a, m)
		})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

		ga('create', 'UA-99377211-2', 'auto');
		ga('send', 'pageview');