module.exports = {
  content: [
    "./src/_includes/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/blog/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/pages/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
    "./src/index.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
  ],
	theme: {
		extend: {
			colors: {
				primary: {
					50: 'hsl(186, 100%, 94%)',
					100: 'hsl(185, 94%, 87%)',
					200: 'hsl(184, 80%, 74%)',
					300: 'hsl(184, 65%, 59%)',
					400: 'hsl(185, 57%, 50%)',
					500: 'hsl(185, 62%, 45%)',
					600: 'hsl(184, 77%, 34%)',
					700: 'hsl(185, 81%, 29%)',
					800: 'hsl(185, 84%, 25%)',
					900: 'hsl(184, 91%, 17%)'
				}
			}
		}
	}
}
