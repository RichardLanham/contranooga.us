{
	"breakpoints": {
		"keys": ["xs", "sm", "md", "lg", "xl"],
		"values": {
			"xs": 0,
			"sm": 600,
			"md": 900,
			"lg": 1200,
			"xl": 1536
		},
		"unit": "px"
	},
	"direction": "ltr",
	"components": {},
	"palette": {
		"mode": "light",
		"common": {
			"black": "#000",
			"white": "#fff"
		},
		"primary": {
			"main": "#29682c",
			"light": "#538656",
			"dark": "#205323",
			"contrastText": "rgb(255, 255, 255)",
			"contrastDark": "rgb(255, 255, 255)",
			"contrastLight": "rgb(255, 255, 255)"
		},
		"secondary": {
			"main": "#2F5C1E",
			"light": "#587c4b",
			"dark": "#254918",
			"contrastText": "rgb(255, 255, 255)",
			"contrastDark": "rgb(255, 255, 255)",
			"contrastLight": "rgb(255, 255, 255)"
		},
		"error": {
			"main": "#f44336",
			"light": "#e57373",
			"dark": "#d32f2f",
			"contrastText": "#fff",
			"contrastDark": "rgb(255, 255, 255)",
			"contrastLight": "rgb(255, 255, 255)"
		},
		"warning": {
			"main": "#ff9800",
			"light": "#ffb74d",
			"dark": "#f57c00",
			"contrastText": "rgba(0, 0, 0, 0.87)",
			"contrastDark": "rgb(255, 255, 255)",
			"contrastLight": "rgb(255, 255, 255)"
		},
		"info": {
			"main": "#6CC84B",
			"light": "#89d36f",
			"dark": "#56a03c",
			"contrastText": "rgb(255, 255, 255)",
			"contrastDark": "rgb(255, 255, 255)",
			"contrastLight": "rgb(0, 0, 0)"
		},
		"success": {
			"main": "#4caf50",
			"light": "#81c784",
			"dark": "#388e3c",
			"contrastText": "rgba(0, 0, 0, 0.87)",
			"contrastDark": "rgb(255, 255, 255)",
			"contrastLight": "rgb(0, 0, 0)"
		},
		"grey": {
			"50": "#fafafa",
			"100": "#f5f5f5",
			"200": "#eeeeee",
			"300": "#e0e0e0",
			"400": "#bdbdbd",
			"500": "#9e9e9e",
			"600": "#757575",
			"700": "#616161",
			"800": "#424242",
			"900": "#212121",
			"A100": "#f5f5f5",
			"A200": "#eeeeee",
			"A400": "#bdbdbd",
			"A700": "#616161"
		},
		"contrastThreshold": 3,
		"tonalOffset": 0.2,
		"text": {
			"primary": "rgba(0, 0, 0, 0.87)",
			"secondary": "rgba(0, 0, 0, 0.6)",
			"disabled": "rgba(0, 0, 0, 0.38)"
		},
		"divider": "rgba(0, 0, 0, 0.12)",
		"background": {
			"paper": "#fff",
			"default": "#fff"
		},
		"action": {
			"active": "rgba(0, 0, 0, 0.54)",
			"hover": "rgba(0, 0, 0, 0.04)",
			"hoverOpacity": 0.04,
			"selected": "rgba(0, 0, 0, 0.08)",
			"selectedOpacity": 0.08,
			"disabled": "rgba(0, 0, 0, 0.26)",
			"disabledBackground": "rgba(0, 0, 0, 0.12)",
			"disabledOpacity": 0.38,
			"focus": "rgba(0, 0, 0, 0.12)",
			"focusOpacity": 0.12,
			"activatedOpacity": 0.12
		},
		"muiToolShades": {
			"main": "#293068",
			"dark": "rgb(0, 0, 0)",
			"light": "rgb(255, 255, 255)",
			"contrastHexDark": "rgb(255, 255, 255)",
			"contrastHexLight": "rgb(0, 0, 0)",
			"contrastHexMain": "rgb(255, 255, 255)"
		}
	},
	"shape": {
		"borderRadius": 4
	},
	"test": "value",
	"debug": {
		"display": "none",
		"fontWeight": 800
	},
	"form": {
		"padding": 10,
		"width": "10%"
	},
	"userCard": {
		"opacity": ".9",
		"margin": 3,
		"padding": 3,
		"width": "50%"
	},
	"badge": {
		"whiteSpace": "nowrap",
		"maxWidth": 300,
		"fontWeight": 600,
		"borderRadius": 3,
		"padding": 2,
		"margin": 3,
		"textTransform": "lowercase"
	},
	"submitButton": {
		"border": "1px solid grey",
		"padding": 3,
		"fontWeight": 600,
		"margin": 3,
		"whiteSpace": "nowrap",
		"width": 50,
		"height": 60,
		"borderRadius": 500
	},
	"loadMoreButton": {
		"height": "60px",
		"borderRadius": 3,
		"border": 0,
		"margin": "2 3 3 2",
		"padding": "0 0 0 0"
	},
	"flexRows": {
		"flexGrow": 1,
		"display": "flex",
		"flexDirection": "row",
		"flexWrap": "wrap"
	},
	"errorMessage": {
		"position": "fixed",
		"left": 5,
		"top": "140px",
		"width": "50%"
	},
	"loading": {
		"width": "100%",
		"zIndex": 2000,
		"& > * + *": {
			"marginLeft": 2
		}
	},
	"loud": {
		"fontWeight": 800
	},
	"siteLink": {
		"borderRadius": 5,
		"padding": 3,
		"whiteSpace": "nowrap",
		"maxHeight": 60,
		"textDecoration": "none"
	},
	"mixins": {
		"toolbar": {
			"minHeight": 56,
			"@media (min-width:0px) and (orientation: landscape)": {
				"minHeight": 48
			},
			"@media (min-width:600px)": {
				"minHeight": 64
			}
		}
	},
	"shadows": ["none", "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)", "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)", "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)", "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)", "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)", "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)", "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)", "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)", "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)", "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)", "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)", "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)", "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)", "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)", "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)", "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)", "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)", "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)", "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)", "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)", "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)", "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)", "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)", "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"],
	"typography": {
		"htmlFontSize": 16,
		"fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
		"fontSize": 14,
		"fontWeightLight": 300,
		"fontWeightRegular": 400,
		"fontWeightMedium": 500,
		"fontWeightBold": 700,
		"h1": {
			"fontFamily": "'Roboto Slab', serif",
			"fontWeight": 300,
			"fontSize": "6rem",
			"lineHeight": 1.167,
			"letterSpacing": "-0.01562em"
		},
		"h2": {
			"fontFamily": "'Roboto Slab', serif",
			"fontWeight": 300,
			"fontSize": "3.75rem",
			"lineHeight": 1.2,
			"letterSpacing": "-0.00833em"
		},
		"h3": {
			"fontFamily": "'Roboto Slab', serif",
			"fontWeight": 400,
			"fontSize": "3rem",
			"lineHeight": 1.167,
			"letterSpacing": "0em"
		},
		"h4": {
			"fontFamily": "'Roboto Slab', serif",
			"fontWeight": 400,
			"fontSize": "2.125rem",
			"lineHeight": 1.235,
			"letterSpacing": "0.00735em"
		},
		"h5": {
			"fontFamily": "'Roboto Slab', serif",
			"fontWeight": 400,
			"fontSize": "1.5rem",
			"lineHeight": 1.334,
			"letterSpacing": "0em"
		},
		"h6": {
			"fontFamily": "'Roboto Slab', serif",
			"fontWeight": 500,
			"fontSize": "1.25rem",
			"lineHeight": 1.6,
			"letterSpacing": "0.0075em"
		},
		"subtitle1": {
			"fontFamily": "'Roboto Slab', serif",
			"fontWeight": 400,
			"fontSize": "1rem",
			"lineHeight": 1.75,
			"letterSpacing": "0.00938em"
		},
		"subtitle2": {
			"fontFamily": "'Roboto Slab', serif",
			"fontWeight": 500,
			"fontSize": "0.875rem",
			"lineHeight": 1.57,
			"letterSpacing": "0.00714em"
		},
		"body1": {
			"fontFamily": "'Roboto Slab', serif",
			"fontWeight": 400,
			"fontSize": "1rem",
			"lineHeight": 1.5,
			"letterSpacing": "0.00938em"
		},
		"body2": {
			"fontFamily": "'Roboto Slab', serif",
			"fontWeight": 400,
			"fontSize": "0.875rem",
			"lineHeight": 1.43,
			"letterSpacing": "0.01071em"
		},
		"button": {
			"fontFamily": "'Roboto Slab', serif",
			"fontWeight": 500,
			"fontSize": "0.875rem",
			"lineHeight": 1.75,
			"letterSpacing": "0.02857em",
			"textTransform": "uppercase"
		},
		"caption": {
			"fontFamily": "'Roboto Slab', serif",
			"fontWeight": 400,
			"fontSize": "0.75rem",
			"lineHeight": 1.66,
			"letterSpacing": "0.03333em"
		},
		"overline": {
			"fontFamily": "'Roboto Slab', serif",
			"fontWeight": 400,
			"fontSize": "0.75rem",
			"lineHeight": 2.66,
			"letterSpacing": "0.08333em",
			"textTransform": "uppercase"
		}
	},
	"transitions": {
		"easing": {
			"easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
			"easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
			"easeIn": "cubic-bezier(0.4, 0, 1, 1)",
			"sharp": "cubic-bezier(0.4, 0, 0.6, 1)"
		},
		"duration": {
			"shortest": 150,
			"shorter": 200,
			"short": 250,
			"standard": 300,
			"complex": 375,
			"enteringScreen": 225,
			"leavingScreen": 195
		}
	},
	"zIndex": {
		"mobileStepper": 1000,
		"fab": 1050,
		"speedDial": 1050,
		"appBar": 1100,
		"drawer": 1200,
		"modal": 1300,
		"snackbar": 1400,
		"tooltip": 1500
	},
	"defaultThemeId": "1",
	"global": {
		"__typename": "Global",
		"favicon": {
			"__typename": "UploadFileEntityResponse",
			"data": null
		},
		"metadata": null,
		"metaTitleSuffix": "Contranooga",
		"notificationBanner": null,
		"navbar": null,
		"footer": {
			"__typename": "ComponentLayoutFooter",
			"logo": {
				"__typename": "UploadFileEntityResponse",
				"data": null
			},
			"smallText": null,
			"columns": [{
				"__typename": "ComponentElementsFooterSection",
				"id": "1",
				"title": "Footer Link1",
				"links": [{
					"__typename": "ComponentLinksLink",
					"id": "1",
					"url": "http://google.com",
					"newTab": true,
					"text": "google"
				}, {
					"__typename": "ComponentLinksLink",
					"id": "2",
					"url": "http:facebook.com",
					"newTab": true,
					"text": "facebook"
				}]
			}]
		}
	},
	"access_token": "EAAPfw7gqiE8BABfm8ZClked38glbRCq4rHJKIdnO6M6FhcMHxx9xR5xTyYTcJuojnoeklS3tE5sQc64PDxzSXf4ErQUmz9rIMxWYSPwUdoG50mNTajgI2H1GFiZAXeToMuwUMaT35YFKO8jUHWFIvOLhWFzowVDPTz0QZBoGq0DeuJC7axGkh16pIRP38wZD",
	"themeId": "1",
	"color_modes": [{
		"mode": "monochrome",
		"count": "5",
		"colors": [{
			"hex": {
				"value": "#050C06",
				"clean": "050C06"
			},
			"rgb": {
				"fraction": {
					"r": 0.0196078431372549,
					"g": 0.047058823529411764,
					"b": 0.023529411764705882
				},
				"r": 5,
				"g": 12,
				"b": 6,
				"value": "rgb(5, 12, 6)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3571428571428571,
					"s": 0.4117647058823529,
					"l": 0.03333333333333333
				},
				"h": 129,
				"s": 41,
				"l": 3,
				"value": "hsl(129, 41%, 3%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3571428571428571,
					"s": 0.5833333333333334,
					"v": 0.047058823529411764
				},
				"value": "hsv(129, 58%, 5%)",
				"h": 129,
				"s": 58,
				"v": 5
			},
			"name": {
				"value": "Gordons Green",
				"closest_named_hex": "#0B1107",
				"exact_match_name": false,
				"distance": 1154
			},
			"cmyk": {
				"fraction": {
					"c": 0.5833333333333329,
					"m": 0,
					"y": 0.5,
					"k": 0.9529411764705882
				},
				"value": "cmyk(58, 0, 50, 95)",
				"c": 58,
				"m": 0,
				"y": 50,
				"k": 95
			},
			"XYZ": {
				"fraction": {
					"X": 0.029161568627450975,
					"Y": 0.03952392156862745,
					"Z": 0.028352549019607844
				},
				"value": "XYZ(3, 4, 3)",
				"X": 3,
				"Y": 4,
				"Z": 3
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=050C06",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=050C06"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=050C06"
				}
			},
			"_embedded": {},
			"target": "secondary"
		}, {
			"hex": {
				"value": "#143115",
				"clean": "143115"
			},
			"rgb": {
				"fraction": {
					"r": 0.0784313725490196,
					"g": 0.19215686274509805,
					"b": 0.08235294117647059
				},
				"r": 20,
				"g": 49,
				"b": 21,
				"value": "rgb(20, 49, 21)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3390804597701149,
					"s": 0.42028985507246375,
					"l": 0.13529411764705884
				},
				"h": 122,
				"s": 42,
				"l": 14,
				"value": "hsl(122, 42%, 14%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3390804597701149,
					"s": 0.5918367346938775,
					"v": 0.19215686274509805
				},
				"value": "hsv(122, 59%, 19%)",
				"h": 122,
				"s": 59,
				"v": 19
			},
			"name": {
				"value": "Seaweed",
				"closest_named_hex": "#1B2F11",
				"exact_match_name": false,
				"distance": 877
			},
			"cmyk": {
				"fraction": {
					"c": 0.5918367346938778,
					"m": 0,
					"y": 0.5714285714285712,
					"k": 0.807843137254902
				},
				"value": "cmyk(59, 0, 57, 81)",
				"c": 59,
				"m": 0,
				"y": 57,
				"k": 81
			},
			"XYZ": {
				"fraction": {
					"X": 0.11592509803921569,
					"Y": 0.16005098039215687,
					"Z": 0.10269529411764707
				},
				"value": "XYZ(12, 16, 10)",
				"X": 12,
				"Y": 16,
				"Z": 10
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=143115",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=143115"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=143115"
				}
			},
			"_embedded": {},
			"target": "error"
		}, {
			"hex": {
				"value": "#225525",
				"clean": "225525"
			},
			"rgb": {
				"fraction": {
					"r": 0.13333333333333333,
					"g": 0.3333333333333333,
					"b": 0.1450980392156863
				},
				"r": 34,
				"g": 85,
				"b": 37,
				"value": "rgb(34, 85, 37)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3431372549019609,
					"s": 0.42857142857142855,
					"l": 0.23333333333333334
				},
				"h": 124,
				"s": 43,
				"l": 23,
				"value": "hsl(124, 43%, 23%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3431372549019609,
					"s": 0.6,
					"v": 0.3333333333333333
				},
				"value": "hsv(124, 60%, 33%)",
				"h": 124,
				"s": 60,
				"v": 33
			},
			"name": {
				"value": "Everglade",
				"closest_named_hex": "#1C402E",
				"exact_match_name": false,
				"distance": 1818
			},
			"cmyk": {
				"fraction": {
					"c": 0.6,
					"m": 0,
					"y": 0.564705882352941,
					"k": 0.6666666666666667
				},
				"value": "cmyk(60, 0, 56, 67)",
				"c": 60,
				"m": 0,
				"y": 56,
				"k": 67
			},
			"XYZ": {
				"fraction": {
					"X": 0.20037686274509803,
					"Y": 0.2772227450980392,
					"Z": 0.18022235294117647
				},
				"value": "XYZ(20, 28, 18)",
				"X": 20,
				"Y": 28,
				"Z": 18
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=225525",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=225525"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=225525"
				}
			},
			"_embedded": {},
			"target": "warning"
		}, {
			"hex": {
				"value": "#307B33",
				"clean": "307B33"
			},
			"rgb": {
				"fraction": {
					"r": 0.18823529411764706,
					"g": 0.4823529411764706,
					"b": 0.2
				},
				"r": 48,
				"g": 123,
				"b": 51,
				"value": "rgb(48, 123, 51)"
			},
			"hsl": {
				"fraction": {
					"h": 0.33999999999999997,
					"s": 0.43859649122807015,
					"l": 0.33529411764705885
				},
				"h": 122,
				"s": 44,
				"l": 34,
				"value": "hsl(122, 44%, 34%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.33999999999999997,
					"s": 0.6097560975609756,
					"v": 0.4823529411764706
				},
				"value": "hsv(122, 61%, 48%)",
				"h": 122,
				"s": 61,
				"v": 48
			},
			"name": {
				"value": "Goblin",
				"closest_named_hex": "#3D7D52",
				"exact_match_name": false,
				"distance": 2702
			},
			"cmyk": {
				"fraction": {
					"c": 0.6097560975609757,
					"m": 0,
					"y": 0.5853658536585368,
					"k": 0.5176470588235293
				},
				"value": "cmyk(61, 0, 59, 52)",
				"c": 61,
				"m": 0,
				"y": 59,
				"k": 52
			},
			"XYZ": {
				"fraction": {
					"X": 0.2862176470588235,
					"Y": 0.3994376470588235,
					"Z": 0.2512294117647059
				},
				"value": "XYZ(29, 40, 25)",
				"X": 29,
				"Y": 40,
				"Z": 25
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=307B33",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=307B33"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=307B33"
				}
			},
			"_embedded": {},
			"target": "info"
		}, {
			"hex": {
				"value": "#3DA142",
				"clean": "3DA142"
			},
			"rgb": {
				"fraction": {
					"r": 0.23921568627450981,
					"g": 0.6313725490196078,
					"b": 0.25882352941176473
				},
				"r": 61,
				"g": 161,
				"b": 66,
				"value": "rgb(61, 161, 66)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3416666666666667,
					"s": 0.45045045045045035,
					"l": 0.43529411764705883
				},
				"h": 123,
				"s": 45,
				"l": 44,
				"value": "hsl(123, 45%, 44%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3416666666666667,
					"s": 0.6211180124223602,
					"v": 0.6313725490196078
				},
				"value": "hsv(123, 62%, 63%)",
				"h": 123,
				"s": 62,
				"v": 63
			},
			"name": {
				"value": "Apple",
				"closest_named_hex": "#4FA83D",
				"exact_match_name": false,
				"distance": 666
			},
			"cmyk": {
				"fraction": {
					"c": 0.6211180124223602,
					"m": 0,
					"y": 0.5900621118012422,
					"k": 0.3686274509803922
				},
				"value": "cmyk(62, 0, 59, 37)",
				"c": 62,
				"m": 0,
				"y": 59,
				"k": 37
			},
			"XYZ": {
				"fraction": {
					"X": 0.3711490196078431,
					"Y": 0.5211019607843136,
					"Z": 0.32588823529411765
				},
				"value": "XYZ(37, 52, 33)",
				"X": 37,
				"Y": 52,
				"Z": 33
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=3DA142",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=3DA142"
			},
			"contrast": {
				"value": "#000000"
			},
			"_links": {
				"self": {
					"href": "/id?hex=3DA142"
				}
			},
			"_embedded": {},
			"target": "success"
		}],
		"seed": {
			"hex": {
				"value": "#29682C",
				"clean": "29682C"
			},
			"rgb": {
				"fraction": {
					"r": 0.1607843137254902,
					"g": 0.40784313725490196,
					"b": 0.17254901960784313
				},
				"r": 41,
				"g": 104,
				"b": 44,
				"value": "rgb(41, 104, 44)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.43448275862068964,
					"l": 0.28431372549019607
				},
				"h": 123,
				"s": 43,
				"l": 28,
				"value": "hsl(123, 43%, 28%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.6057692307692307,
					"v": 0.40784313725490196
				},
				"value": "hsv(123, 61%, 41%)",
				"h": 123,
				"s": 61,
				"v": 41
			},
			"name": {
				"value": "Green Pea",
				"closest_named_hex": "#1D6142",
				"exact_match_name": false,
				"distance": 3217
			},
			"cmyk": {
				"fraction": {
					"c": 0.6057692307692308,
					"m": 0,
					"y": 0.5769230769230768,
					"k": 0.592156862745098
				},
				"value": "cmyk(61, 0, 58, 59)",
				"c": 61,
				"m": 0,
				"y": 58,
				"k": 59
			},
			"XYZ": {
				"fraction": {
					"X": 0.24329725490196077,
					"Y": 0.33833019607843134,
					"Z": 0.21572588235294116
				},
				"value": "XYZ(24, 34, 22)",
				"X": 24,
				"Y": 34,
				"Z": 22
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=29682C",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=29682C"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=29682C"
				}
			},
			"_embedded": {}
		},
		"image": {
			"bare": "https://www.thecolorapi.com/scheme?format=svg&named=false&hex=29682C&mode=monochrome&count=5",
			"named": "https://www.thecolorapi.com/scheme?format=svg&hex=29682C&mode=monochrome&count=5"
		},
		"_links": {
			"self": "/scheme?hex=29682C&mode=monochrome&count=5",
			"schemes": {
				"monochrome": "/scheme?hex=29682C&mode=monochrome&count=5",
				"monochrome-dark": "/scheme?hex=29682C&mode=monochrome-dark&count=5",
				"monochrome-light": "/scheme?hex=29682C&mode=monochrome-light&count=5",
				"analogic": "/scheme?hex=29682C&mode=analogic&count=5",
				"complement": "/scheme?hex=29682C&mode=complement&count=5",
				"analogic-complement": "/scheme?hex=29682C&mode=analogic-complement&count=5",
				"triad": "/scheme?hex=29682C&mode=triad&count=5",
				"quad": "/scheme?hex=29682C&mode=quad&count=5"
			}
		},
		"_embedded": {}
	}, {
		"mode": "monochrome-light",
		"count": "5",
		"colors": [{
			"hex": {
				"value": "#090909",
				"clean": "090909"
			},
			"rgb": {
				"fraction": {
					"r": 0.03529411764705882,
					"g": 0.03529411764705882,
					"b": 0.03529411764705882
				},
				"r": 9,
				"g": 9,
				"b": 9,
				"value": "rgb(9, 9, 9)"
			},
			"hsl": {
				"fraction": {
					"h": 0,
					"s": 0,
					"l": 0.03529411764705882
				},
				"h": 0,
				"s": 0,
				"l": 4,
				"value": "hsl(0, 0%, 4%)"
			},
			"hsv": {
				"fraction": {
					"h": 0,
					"s": 0,
					"v": 0.03529411764705882
				},
				"value": "hsv(0, 0%, 4%)",
				"h": 0,
				"s": 0,
				"v": 4
			},
			"name": {
				"value": "Cod Gray",
				"closest_named_hex": "#0B0B0B",
				"exact_match_name": false,
				"distance": 20
			},
			"cmyk": {
				"fraction": {
					"c": 0,
					"m": 0,
					"y": 0,
					"k": 0.9647058823529412
				},
				"value": "cmyk(0, 0, 0, 96)",
				"c": 0,
				"m": 0,
				"y": 0,
				"k": 96
			},
			"XYZ": {
				"fraction": {
					"X": 0.033547058823529416,
					"Y": 0.03529411764705882,
					"Z": 0.038435294117647054
				},
				"value": "XYZ(3, 4, 4)",
				"X": 3,
				"Y": 4,
				"Z": 4
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=090909",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=090909"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=090909"
				}
			},
			"_embedded": {},
			"target": "secondary"
		}, {
			"hex": {
				"value": "#222222",
				"clean": "222222"
			},
			"rgb": {
				"fraction": {
					"r": 0.13333333333333333,
					"g": 0.13333333333333333,
					"b": 0.13333333333333333
				},
				"r": 34,
				"g": 34,
				"b": 34,
				"value": "rgb(34, 34, 34)"
			},
			"hsl": {
				"fraction": {
					"h": 0,
					"s": 0,
					"l": 0.13333333333333333
				},
				"h": 0,
				"s": 0,
				"l": 13,
				"value": "hsl(0, 0%, 13%)"
			},
			"hsv": {
				"fraction": {
					"h": 0,
					"s": 0,
					"v": 0.13333333333333333
				},
				"value": "hsv(0, 0%, 13%)",
				"h": 0,
				"s": 0,
				"v": 13
			},
			"name": {
				"value": "Eerie Black",
				"closest_named_hex": "#1B1B1B",
				"exact_match_name": false,
				"distance": 245
			},
			"cmyk": {
				"fraction": {
					"c": 0,
					"m": 0,
					"y": 0,
					"k": 0.8666666666666667
				},
				"value": "cmyk(0, 0, 0, 87)",
				"c": 0,
				"m": 0,
				"y": 0,
				"k": 87
			},
			"XYZ": {
				"fraction": {
					"X": 0.1267333333333333,
					"Y": 0.13333333333333333,
					"Z": 0.1452
				},
				"value": "XYZ(13, 13, 15)",
				"X": 13,
				"Y": 13,
				"Z": 15
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=222222",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=222222"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=222222"
				}
			},
			"_embedded": {},
			"target": "error"
		}, {
			"hex": {
				"value": "#225525",
				"clean": "225525"
			},
			"rgb": {
				"fraction": {
					"r": 0.13333333333333333,
					"g": 0.3333333333333333,
					"b": 0.1450980392156863
				},
				"r": 34,
				"g": 85,
				"b": 37,
				"value": "rgb(34, 85, 37)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3431372549019609,
					"s": 0.42857142857142855,
					"l": 0.23333333333333334
				},
				"h": 124,
				"s": 43,
				"l": 23,
				"value": "hsl(124, 43%, 23%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3431372549019609,
					"s": 0.6,
					"v": 0.3333333333333333
				},
				"value": "hsv(124, 60%, 33%)",
				"h": 124,
				"s": 60,
				"v": 33
			},
			"name": {
				"value": "Everglade",
				"closest_named_hex": "#1C402E",
				"exact_match_name": false,
				"distance": 1818
			},
			"cmyk": {
				"fraction": {
					"c": 0.6,
					"m": 0,
					"y": 0.564705882352941,
					"k": 0.6666666666666667
				},
				"value": "cmyk(60, 0, 56, 67)",
				"c": 60,
				"m": 0,
				"y": 56,
				"k": 67
			},
			"XYZ": {
				"fraction": {
					"X": 0.20037686274509803,
					"Y": 0.2772227450980392,
					"Z": 0.18022235294117647
				},
				"value": "XYZ(20, 28, 18)",
				"X": 20,
				"Y": 28,
				"Z": 18
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=225525",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=225525"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=225525"
				}
			},
			"_embedded": {},
			"target": "warning"
		}, {
			"hex": {
				"value": "#307B33",
				"clean": "307B33"
			},
			"rgb": {
				"fraction": {
					"r": 0.18823529411764706,
					"g": 0.4823529411764706,
					"b": 0.2
				},
				"r": 48,
				"g": 123,
				"b": 51,
				"value": "rgb(48, 123, 51)"
			},
			"hsl": {
				"fraction": {
					"h": 0.33999999999999997,
					"s": 0.43859649122807015,
					"l": 0.33529411764705885
				},
				"h": 122,
				"s": 44,
				"l": 34,
				"value": "hsl(122, 44%, 34%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.33999999999999997,
					"s": 0.6097560975609756,
					"v": 0.4823529411764706
				},
				"value": "hsv(122, 61%, 48%)",
				"h": 122,
				"s": 61,
				"v": 48
			},
			"name": {
				"value": "Goblin",
				"closest_named_hex": "#3D7D52",
				"exact_match_name": false,
				"distance": 2702
			},
			"cmyk": {
				"fraction": {
					"c": 0.6097560975609757,
					"m": 0,
					"y": 0.5853658536585368,
					"k": 0.5176470588235293
				},
				"value": "cmyk(61, 0, 59, 52)",
				"c": 61,
				"m": 0,
				"y": 59,
				"k": 52
			},
			"XYZ": {
				"fraction": {
					"X": 0.2862176470588235,
					"Y": 0.3994376470588235,
					"Z": 0.2512294117647059
				},
				"value": "XYZ(29, 40, 25)",
				"X": 29,
				"Y": 40,
				"Z": 25
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=307B33",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=307B33"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=307B33"
				}
			},
			"_embedded": {},
			"target": "info"
		}, {
			"hex": {
				"value": "#3DA142",
				"clean": "3DA142"
			},
			"rgb": {
				"fraction": {
					"r": 0.23921568627450981,
					"g": 0.6313725490196078,
					"b": 0.25882352941176473
				},
				"r": 61,
				"g": 161,
				"b": 66,
				"value": "rgb(61, 161, 66)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3416666666666667,
					"s": 0.45045045045045035,
					"l": 0.43529411764705883
				},
				"h": 123,
				"s": 45,
				"l": 44,
				"value": "hsl(123, 45%, 44%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3416666666666667,
					"s": 0.6211180124223602,
					"v": 0.6313725490196078
				},
				"value": "hsv(123, 62%, 63%)",
				"h": 123,
				"s": 62,
				"v": 63
			},
			"name": {
				"value": "Apple",
				"closest_named_hex": "#4FA83D",
				"exact_match_name": false,
				"distance": 666
			},
			"cmyk": {
				"fraction": {
					"c": 0.6211180124223602,
					"m": 0,
					"y": 0.5900621118012422,
					"k": 0.3686274509803922
				},
				"value": "cmyk(62, 0, 59, 37)",
				"c": 62,
				"m": 0,
				"y": 59,
				"k": 37
			},
			"XYZ": {
				"fraction": {
					"X": 0.3711490196078431,
					"Y": 0.5211019607843136,
					"Z": 0.32588823529411765
				},
				"value": "XYZ(37, 52, 33)",
				"X": 37,
				"Y": 52,
				"Z": 33
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=3DA142",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=3DA142"
			},
			"contrast": {
				"value": "#000000"
			},
			"_links": {
				"self": {
					"href": "/id?hex=3DA142"
				}
			},
			"_embedded": {},
			"target": "success"
		}],
		"seed": {
			"hex": {
				"value": "#29682C",
				"clean": "29682C"
			},
			"rgb": {
				"fraction": {
					"r": 0.1607843137254902,
					"g": 0.40784313725490196,
					"b": 0.17254901960784313
				},
				"r": 41,
				"g": 104,
				"b": 44,
				"value": "rgb(41, 104, 44)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.43448275862068964,
					"l": 0.28431372549019607
				},
				"h": 123,
				"s": 43,
				"l": 28,
				"value": "hsl(123, 43%, 28%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.6057692307692307,
					"v": 0.40784313725490196
				},
				"value": "hsv(123, 61%, 41%)",
				"h": 123,
				"s": 61,
				"v": 41
			},
			"name": {
				"value": "Green Pea",
				"closest_named_hex": "#1D6142",
				"exact_match_name": false,
				"distance": 3217
			},
			"cmyk": {
				"fraction": {
					"c": 0.6057692307692308,
					"m": 0,
					"y": 0.5769230769230768,
					"k": 0.592156862745098
				},
				"value": "cmyk(61, 0, 58, 59)",
				"c": 61,
				"m": 0,
				"y": 58,
				"k": 59
			},
			"XYZ": {
				"fraction": {
					"X": 0.24329725490196077,
					"Y": 0.33833019607843134,
					"Z": 0.21572588235294116
				},
				"value": "XYZ(24, 34, 22)",
				"X": 24,
				"Y": 34,
				"Z": 22
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=29682C",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=29682C"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=29682C"
				}
			},
			"_embedded": {}
		},
		"image": {
			"bare": "https://www.thecolorapi.com/scheme?format=svg&named=false&hex=29682C&mode=monochrome-light&count=5",
			"named": "https://www.thecolorapi.com/scheme?format=svg&hex=29682C&mode=monochrome-light&count=5"
		},
		"_links": {
			"self": "/scheme?hex=29682C&mode=monochrome-light&count=5",
			"schemes": {
				"monochrome": "/scheme?hex=29682C&mode=monochrome&count=5",
				"monochrome-dark": "/scheme?hex=29682C&mode=monochrome-dark&count=5",
				"monochrome-light": "/scheme?hex=29682C&mode=monochrome-light&count=5",
				"analogic": "/scheme?hex=29682C&mode=analogic&count=5",
				"complement": "/scheme?hex=29682C&mode=complement&count=5",
				"analogic-complement": "/scheme?hex=29682C&mode=analogic-complement&count=5",
				"triad": "/scheme?hex=29682C&mode=triad&count=5",
				"quad": "/scheme?hex=29682C&mode=quad&count=5"
			}
		},
		"_embedded": {}
	}, {
		"mode": "complement",
		"count": "5",
		"colors": [{
			"hex": {
				"value": "#4E244C",
				"clean": "4E244C"
			},
			"rgb": {
				"fraction": {
					"r": 0.3058823529411765,
					"g": 0.1411764705882353,
					"b": 0.2980392156862745
				},
				"r": 78,
				"g": 36,
				"b": 76,
				"value": "rgb(78, 36, 76)"
			},
			"hsl": {
				"fraction": {
					"h": 0.8412698412698414,
					"s": 0.368421052631579,
					"l": 0.2235294117647059
				},
				"h": 303,
				"s": 37,
				"l": 22,
				"value": "hsl(303, 37%, 22%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.8412698412698414,
					"s": 0.5384615384615385,
					"v": 0.3058823529411765
				},
				"value": "hsv(303, 54%, 31%)",
				"h": 303,
				"s": 54,
				"v": 31
			},
			"name": {
				"value": "Finn",
				"closest_named_hex": "#692D54",
				"exact_match_name": false,
				"distance": 1988
			},
			"cmyk": {
				"fraction": {
					"c": 0,
					"m": 0.5384615384615387,
					"y": 0.025641025641025546,
					"k": 0.6941176470588235
				},
				"value": "cmyk(0, 54, 3, 69)",
				"c": 0,
				"m": 54,
				"y": 3,
				"k": 69
			},
			"XYZ": {
				"fraction": {
					"X": 0.23042666666666667,
					"Y": 0.18751843137254903,
					"Z": 0.30601803921568627
				},
				"value": "XYZ(23, 19, 31)",
				"X": 23,
				"Y": 19,
				"Z": 31
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=4E244C",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=4E244C"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=4E244C"
				}
			},
			"_embedded": {},
			"target": "secondary"
		}, {
			"hex": {
				"value": "#582656",
				"clean": "582656"
			},
			"rgb": {
				"fraction": {
					"r": 0.34509803921568627,
					"g": 0.14901960784313725,
					"b": 0.33725490196078434
				},
				"r": 88,
				"g": 38,
				"b": 86,
				"value": "rgb(88, 38, 86)"
			},
			"hsl": {
				"fraction": {
					"h": 0.8399999999999999,
					"s": 0.3968253968253968,
					"l": 0.24705882352941178
				},
				"h": 302,
				"s": 40,
				"l": 25,
				"value": "hsl(302, 40%, 25%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.8399999999999999,
					"s": 0.5681818181818182,
					"v": 0.34509803921568627
				},
				"value": "hsv(302, 57%, 35%)",
				"h": 302,
				"s": 57,
				"v": 35
			},
			"name": {
				"value": "Finn",
				"closest_named_hex": "#692D54",
				"exact_match_name": false,
				"distance": 968
			},
			"cmyk": {
				"fraction": {
					"c": 0,
					"m": 0.5681818181818181,
					"y": 0.022727272727272648,
					"k": 0.6549019607843137
				},
				"value": "cmyk(0, 57, 2, 65)",
				"c": 0,
				"m": 57,
				"y": 2,
				"k": 65
			},
			"XYZ": {
				"fraction": {
					"X": 0.25648235294117644,
					"Y": 0.20429647058823527,
					"Z": 0.3449843137254902
				},
				"value": "XYZ(26, 20, 34)",
				"X": 26,
				"Y": 20,
				"Z": 34
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=582656",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=582656"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=582656"
				}
			},
			"_embedded": {},
			"target": "error"
		}, {
			"hex": {
				"value": "#28632B",
				"clean": "28632B"
			},
			"rgb": {
				"fraction": {
					"r": 0.1568627450980392,
					"g": 0.38823529411764707,
					"b": 0.16862745098039217
				},
				"r": 40,
				"g": 99,
				"b": 43,
				"value": "rgb(40, 99, 43)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3418079096045198,
					"s": 0.42446043165467623,
					"l": 0.27254901960784317
				},
				"h": 123,
				"s": 42,
				"l": 27,
				"value": "hsl(123, 42%, 27%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3418079096045198,
					"s": 0.595959595959596,
					"v": 0.38823529411764707
				},
				"value": "hsv(123, 60%, 39%)",
				"h": 123,
				"s": 60,
				"v": 39
			},
			"name": {
				"value": "Green Pea",
				"closest_named_hex": "#1D6142",
				"exact_match_name": false,
				"distance": 3316
			},
			"cmyk": {
				"fraction": {
					"c": 0.5959595959595959,
					"m": 0,
					"y": 0.5656565656565654,
					"k": 0.611764705882353
				},
				"value": "cmyk(60, 0, 57, 61)",
				"c": 60,
				"m": 0,
				"y": 57,
				"k": 61
			},
			"XYZ": {
				"fraction": {
					"X": 0.23396039215686273,
					"Y": 0.3231898039215686,
					"Z": 0.20958549019607844
				},
				"value": "XYZ(23, 32, 21)",
				"X": 23,
				"Y": 32,
				"Z": 21
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=28632B",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=28632B"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=28632B"
				}
			},
			"_embedded": {},
			"target": "warning"
		}, {
			"hex": {
				"value": "#2A6E2D",
				"clean": "2A6E2D"
			},
			"rgb": {
				"fraction": {
					"r": 0.16470588235294117,
					"g": 0.43137254901960786,
					"b": 0.17647058823529413
				},
				"r": 42,
				"g": 110,
				"b": 45,
				"value": "rgb(42, 110, 45)"
			},
			"hsl": {
				"fraction": {
					"h": 0.34068627450980404,
					"s": 0.4473684210526317,
					"l": 0.2980392156862745
				},
				"h": 123,
				"s": 45,
				"l": 30,
				"value": "hsl(123, 45%, 30%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.34068627450980404,
					"s": 0.6181818181818183,
					"v": 0.43137254901960786
				},
				"value": "hsv(123, 62%, 43%)",
				"h": 123,
				"s": 62,
				"v": 43
			},
			"name": {
				"value": "Green Pea",
				"closest_named_hex": "#1D6142",
				"exact_match_name": false,
				"distance": 3197
			},
			"cmyk": {
				"fraction": {
					"c": 0.6181818181818183,
					"m": 0,
					"y": 0.5909090909090908,
					"k": 0.5686274509803921
				},
				"value": "cmyk(62, 0, 59, 57)",
				"c": 62,
				"m": 0,
				"y": 59,
				"k": 57
			},
			"XYZ": {
				"fraction": {
					"X": 0.2540364705882353,
					"Y": 0.3562752941176471,
					"Z": 0.2223337254901961
				},
				"value": "XYZ(25, 36, 22)",
				"X": 25,
				"Y": 36,
				"Z": 22
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=2A6E2D",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=2A6E2D"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=2A6E2D"
				}
			},
			"_embedded": {},
			"target": "info"
		}, {
			"hex": {
				"value": "#2B792F",
				"clean": "2B792F"
			},
			"rgb": {
				"fraction": {
					"r": 0.16862745098039217,
					"g": 0.4745098039215686,
					"b": 0.1843137254901961
				},
				"r": 43,
				"g": 121,
				"b": 47,
				"value": "rgb(43, 121, 47)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3418803418803419,
					"s": 0.47560975609756095,
					"l": 0.32156862745098036
				},
				"h": 123,
				"s": 48,
				"l": 32,
				"value": "hsl(123, 48%, 32%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3418803418803419,
					"s": 0.6446280991735537,
					"v": 0.4745098039215686
				},
				"value": "hsv(123, 64%, 47%)",
				"h": 123,
				"s": 64,
				"v": 47
			},
			"name": {
				"value": "Sea Green",
				"closest_named_hex": "#2E8B57",
				"exact_match_name": false,
				"distance": 2785
			},
			"cmyk": {
				"fraction": {
					"c": 0.6446280991735536,
					"m": 0,
					"y": 0.6115702479338843,
					"k": 0.5254901960784314
				},
				"value": "cmyk(64, 0, 61, 53)",
				"c": 64,
				"m": 0,
				"y": 61,
				"k": 53
			},
			"XYZ": {
				"fraction": {
					"X": 0.27249529411764706,
					"Y": 0.3885270588235294,
					"Z": 0.23500627450980394
				},
				"value": "XYZ(27, 39, 24)",
				"X": 27,
				"Y": 39,
				"Z": 24
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=2B792F",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=2B792F"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=2B792F"
				}
			},
			"_embedded": {},
			"target": "success"
		}],
		"seed": {
			"hex": {
				"value": "#29682C",
				"clean": "29682C"
			},
			"rgb": {
				"fraction": {
					"r": 0.1607843137254902,
					"g": 0.40784313725490196,
					"b": 0.17254901960784313
				},
				"r": 41,
				"g": 104,
				"b": 44,
				"value": "rgb(41, 104, 44)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.43448275862068964,
					"l": 0.28431372549019607
				},
				"h": 123,
				"s": 43,
				"l": 28,
				"value": "hsl(123, 43%, 28%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.6057692307692307,
					"v": 0.40784313725490196
				},
				"value": "hsv(123, 61%, 41%)",
				"h": 123,
				"s": 61,
				"v": 41
			},
			"name": {
				"value": "Green Pea",
				"closest_named_hex": "#1D6142",
				"exact_match_name": false,
				"distance": 3217
			},
			"cmyk": {
				"fraction": {
					"c": 0.6057692307692308,
					"m": 0,
					"y": 0.5769230769230768,
					"k": 0.592156862745098
				},
				"value": "cmyk(61, 0, 58, 59)",
				"c": 61,
				"m": 0,
				"y": 58,
				"k": 59
			},
			"XYZ": {
				"fraction": {
					"X": 0.24329725490196077,
					"Y": 0.33833019607843134,
					"Z": 0.21572588235294116
				},
				"value": "XYZ(24, 34, 22)",
				"X": 24,
				"Y": 34,
				"Z": 22
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=29682C",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=29682C"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=29682C"
				}
			},
			"_embedded": {}
		},
		"image": {
			"bare": "https://www.thecolorapi.com/scheme?format=svg&named=false&hex=29682C&mode=complement&count=5",
			"named": "https://www.thecolorapi.com/scheme?format=svg&hex=29682C&mode=complement&count=5"
		},
		"_links": {
			"self": "/scheme?hex=29682C&mode=complement&count=5",
			"schemes": {
				"monochrome": "/scheme?hex=29682C&mode=monochrome&count=5",
				"monochrome-dark": "/scheme?hex=29682C&mode=monochrome-dark&count=5",
				"monochrome-light": "/scheme?hex=29682C&mode=monochrome-light&count=5",
				"analogic": "/scheme?hex=29682C&mode=analogic&count=5",
				"complement": "/scheme?hex=29682C&mode=complement&count=5",
				"analogic-complement": "/scheme?hex=29682C&mode=analogic-complement&count=5",
				"triad": "/scheme?hex=29682C&mode=triad&count=5",
				"quad": "/scheme?hex=29682C&mode=quad&count=5"
			}
		},
		"_embedded": {}
	}, {
		"mode": "analogic-complement",
		"count": "5",
		"colors": [{
			"hex": {
				"value": "#351C34",
				"clean": "351C34"
			},
			"rgb": {
				"fraction": {
					"r": 0.20784313725490197,
					"g": 0.10980392156862745,
					"b": 0.20392156862745098
				},
				"r": 53,
				"g": 28,
				"b": 52,
				"value": "rgb(53, 28, 52)"
			},
			"hsl": {
				"fraction": {
					"h": 0.8400000000000001,
					"s": 0.308641975308642,
					"l": 0.1588235294117647
				},
				"h": 302,
				"s": 31,
				"l": 16,
				"value": "hsl(302, 31%, 16%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.8400000000000001,
					"s": 0.47169811320754723,
					"v": 0.20784313725490197
				},
				"value": "hsv(302, 47%, 21%)",
				"h": 302,
				"s": 47,
				"v": 21
			},
			"name": {
				"value": "Livid Brown",
				"closest_named_hex": "#4D282E",
				"exact_match_name": false,
				"distance": 3724
			},
			"cmyk": {
				"fraction": {
					"c": 0,
					"m": 0.471698113207547,
					"y": 0.01886792452830235,
					"k": 0.792156862745098
				},
				"value": "cmyk(0, 47, 2, 79)",
				"c": 0,
				"m": 47,
				"y": 2,
				"k": 79
			},
			"XYZ": {
				"fraction": {
					"X": 0.16178823529411765,
					"Y": 0.13744235294117646,
					"Z": 0.21092745098039217
				},
				"value": "XYZ(16, 14, 21)",
				"X": 16,
				"Y": 14,
				"Z": 21
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=351C34",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=351C34"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=351C34"
				}
			},
			"_embedded": {},
			"target": "secondary"
		}, {
			"hex": {
				"value": "#492247",
				"clean": "492247"
			},
			"rgb": {
				"fraction": {
					"r": 0.28627450980392155,
					"g": 0.13333333333333333,
					"b": 0.2784313725490196
				},
				"r": 73,
				"g": 34,
				"b": 71,
				"value": "rgb(73, 34, 71)"
			},
			"hsl": {
				"fraction": {
					"h": 0.8418803418803419,
					"s": 0.3644859813084112,
					"l": 0.20980392156862743
				},
				"h": 303,
				"s": 36,
				"l": 21,
				"value": "hsl(303, 36%, 21%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.8418803418803419,
					"s": 0.5342465753424658,
					"v": 0.28627450980392155
				},
				"value": "hsv(303, 53%, 29%)",
				"h": 303,
				"s": 53,
				"v": 29
			},
			"name": {
				"value": "Finn",
				"closest_named_hex": "#692D54",
				"exact_match_name": false,
				"distance": 2782
			},
			"cmyk": {
				"fraction": {
					"c": 0,
					"m": 0.5342465753424658,
					"y": 0.027397260273972508,
					"k": 0.7137254901960784
				},
				"value": "cmyk(0, 53, 3, 71)",
				"c": 0,
				"m": 53,
				"y": 3,
				"k": 71
			},
			"XYZ": {
				"fraction": {
					"X": 0.2159964705882353,
					"Y": 0.17632470588235294,
					"Z": 0.28606745098039216
				},
				"value": "XYZ(22, 18, 29)",
				"X": 22,
				"Y": 18,
				"Z": 29
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=492247",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=492247"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=492247"
				}
			},
			"_embedded": {},
			"target": "error"
		}, {
			"hex": {
				"value": "#296663",
				"clean": "296663"
			},
			"rgb": {
				"fraction": {
					"r": 0.1607843137254902,
					"g": 0.4,
					"b": 0.38823529411764707
				},
				"r": 41,
				"g": 102,
				"b": 99,
				"value": "rgb(41, 102, 99)"
			},
			"hsl": {
				"fraction": {
					"h": 0.4918032786885246,
					"s": 0.42657342657342656,
					"l": 0.2803921568627451
				},
				"h": 177,
				"s": 43,
				"l": 28,
				"value": "hsl(177, 43%, 28%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.4918032786885246,
					"s": 0.5980392156862745,
					"v": 0.4
				},
				"value": "hsv(177, 60%, 40%)",
				"h": 177,
				"s": 60,
				"v": 40
			},
			"name": {
				"value": "Casal",
				"closest_named_hex": "#2F6168",
				"exact_match_name": false,
				"distance": 504
			},
			"cmyk": {
				"fraction": {
					"c": 0.5980392156862746,
					"m": 0,
					"y": 0.029411764705882526,
					"k": 0.6
				},
				"value": "cmyk(60, 0, 3, 60)",
				"c": 60,
				"m": 0,
				"y": 3,
				"k": 60
			},
			"XYZ": {
				"fraction": {
					"X": 0.27942392156862744,
					"Y": 0.34829333333333334,
					"Z": 0.41980078431372553
				},
				"value": "XYZ(28, 35, 42)",
				"X": 28,
				"Y": 35,
				"Z": 42
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=296663",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=296663"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=296663"
				}
			},
			"_embedded": {},
			"target": "warning"
		}, {
			"hex": {
				"value": "#29506A",
				"clean": "29506A"
			},
			"rgb": {
				"fraction": {
					"r": 0.1607843137254902,
					"g": 0.3137254901960784,
					"b": 0.41568627450980394
				},
				"r": 41,
				"g": 80,
				"b": 106,
				"value": "rgb(41, 80, 106)"
			},
			"hsl": {
				"fraction": {
					"h": 0.5666666666666668,
					"s": 0.44217687074829926,
					"l": 0.2882352941176471
				},
				"h": 204,
				"s": 44,
				"l": 29,
				"value": "hsl(204, 44%, 29%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.5666666666666668,
					"s": 0.6132075471698113,
					"v": 0.41568627450980394
				},
				"value": "hsv(204, 61%, 42%)",
				"h": 204,
				"s": 61,
				"v": 42
			},
			"name": {
				"value": "San Juan",
				"closest_named_hex": "#304B6A",
				"exact_match_name": false,
				"distance": 690
			},
			"cmyk": {
				"fraction": {
					"c": 0.6132075471698114,
					"m": 0.24528301886792467,
					"y": 0,
					"k": 0.584313725490196
				},
				"value": "cmyk(61, 25, 0, 58)",
				"c": 61,
				"m": 25,
				"y": 0,
				"k": 58
			},
			"XYZ": {
				"fraction": {
					"X": 0.2535270588235294,
					"Y": 0.28857176470588236,
					"Z": 0.43560901960784315
				},
				"value": "XYZ(25, 29, 44)",
				"X": 25,
				"Y": 29,
				"Z": 44
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=29506A",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=29506A"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=29506A"
				}
			},
			"_embedded": {},
			"target": "info"
		}, {
			"hex": {
				"value": "#2A346F",
				"clean": "2A346F"
			},
			"rgb": {
				"fraction": {
					"r": 0.16470588235294117,
					"g": 0.20392156862745098,
					"b": 0.43529411764705883
				},
				"r": 42,
				"g": 52,
				"b": 111,
				"value": "rgb(42, 52, 111)"
			},
			"hsl": {
				"fraction": {
					"h": 0.6425120772946861,
					"s": 0.4509803921568628,
					"l": 0.3
				},
				"h": 231,
				"s": 45,
				"l": 30,
				"value": "hsl(231, 45%, 30%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.6425120772946861,
					"s": 0.6216216216216217,
					"v": 0.43529411764705883
				},
				"value": "hsv(231, 62%, 44%)",
				"h": 231,
				"s": 62,
				"v": 44
			},
			"name": {
				"value": "Astronaut",
				"closest_named_hex": "#283A77",
				"exact_match_name": false,
				"distance": 382
			},
			"cmyk": {
				"fraction": {
					"c": 0.6216216216216217,
					"m": 0.5315315315315317,
					"y": 0,
					"k": 0.5647058823529412
				},
				"value": "cmyk(62, 53, 0, 56)",
				"c": 62,
				"m": 53,
				"y": 0,
				"k": 56
			},
			"XYZ": {
				"fraction": {
					"X": 0.21941764705882352,
					"Y": 0.21228941176470587,
					"Z": 0.4412333333333333
				},
				"value": "XYZ(22, 21, 44)",
				"X": 22,
				"Y": 21,
				"Z": 44
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=2A346F",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=2A346F"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=2A346F"
				}
			},
			"_embedded": {},
			"target": "success"
		}],
		"seed": {
			"hex": {
				"value": "#29682C",
				"clean": "29682C"
			},
			"rgb": {
				"fraction": {
					"r": 0.1607843137254902,
					"g": 0.40784313725490196,
					"b": 0.17254901960784313
				},
				"r": 41,
				"g": 104,
				"b": 44,
				"value": "rgb(41, 104, 44)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.43448275862068964,
					"l": 0.28431372549019607
				},
				"h": 123,
				"s": 43,
				"l": 28,
				"value": "hsl(123, 43%, 28%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.6057692307692307,
					"v": 0.40784313725490196
				},
				"value": "hsv(123, 61%, 41%)",
				"h": 123,
				"s": 61,
				"v": 41
			},
			"name": {
				"value": "Green Pea",
				"closest_named_hex": "#1D6142",
				"exact_match_name": false,
				"distance": 3217
			},
			"cmyk": {
				"fraction": {
					"c": 0.6057692307692308,
					"m": 0,
					"y": 0.5769230769230768,
					"k": 0.592156862745098
				},
				"value": "cmyk(61, 0, 58, 59)",
				"c": 61,
				"m": 0,
				"y": 58,
				"k": 59
			},
			"XYZ": {
				"fraction": {
					"X": 0.24329725490196077,
					"Y": 0.33833019607843134,
					"Z": 0.21572588235294116
				},
				"value": "XYZ(24, 34, 22)",
				"X": 24,
				"Y": 34,
				"Z": 22
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=29682C",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=29682C"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=29682C"
				}
			},
			"_embedded": {}
		},
		"image": {
			"bare": "https://www.thecolorapi.com/scheme?format=svg&named=false&hex=29682C&mode=analogic-complement&count=5",
			"named": "https://www.thecolorapi.com/scheme?format=svg&hex=29682C&mode=analogic-complement&count=5"
		},
		"_links": {
			"self": "/scheme?hex=29682C&mode=analogic-complement&count=5",
			"schemes": {
				"monochrome": "/scheme?hex=29682C&mode=monochrome&count=5",
				"monochrome-dark": "/scheme?hex=29682C&mode=monochrome-dark&count=5",
				"monochrome-light": "/scheme?hex=29682C&mode=monochrome-light&count=5",
				"analogic": "/scheme?hex=29682C&mode=analogic&count=5",
				"complement": "/scheme?hex=29682C&mode=complement&count=5",
				"analogic-complement": "/scheme?hex=29682C&mode=analogic-complement&count=5",
				"triad": "/scheme?hex=29682C&mode=triad&count=5",
				"quad": "/scheme?hex=29682C&mode=quad&count=5"
			}
		},
		"_embedded": {}
	}, {
		"mode": "analogic",
		"count": "5",
		"colors": [{
			"hex": {
				"value": "#275D2A",
				"clean": "275D2A"
			},
			"rgb": {
				"fraction": {
					"r": 0.15294117647058825,
					"g": 0.36470588235294116,
					"b": 0.16470588235294117
				},
				"r": 39,
				"g": 93,
				"b": 42,
				"value": "rgb(39, 93, 42)"
			},
			"hsl": {
				"fraction": {
					"h": 0.34259259259259256,
					"s": 0.40909090909090906,
					"l": 0.2588235294117647
				},
				"h": 123,
				"s": 41,
				"l": 26,
				"value": "hsl(123, 41%, 26%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.34259259259259256,
					"s": 0.5806451612903225,
					"v": 0.36470588235294116
				},
				"value": "hsv(123, 58%, 36%)",
				"h": 123,
				"s": 58,
				"v": 36
			},
			"name": {
				"value": "Everglade",
				"closest_named_hex": "#1C402E",
				"exact_match_name": false,
				"distance": 2472
			},
			"cmyk": {
				"fraction": {
					"c": 0.5806451612903226,
					"m": 0,
					"y": 0.5483870967741937,
					"k": 0.6352941176470588
				},
				"value": "cmyk(58, 0, 55, 64)",
				"c": 58,
				"m": 0,
				"y": 55,
				"k": 64
			},
			"XYZ": {
				"fraction": {
					"X": 0.22322117647058826,
					"Y": 0.305244705882353,
					"Z": 0.20297764705882354
				},
				"value": "XYZ(22, 31, 20)",
				"X": 22,
				"Y": 31,
				"Z": 20
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=275D2A",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=275D2A"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=275D2A"
				}
			},
			"_embedded": {},
			"target": "secondary"
		}, {
			"hex": {
				"value": "#28613C",
				"clean": "28613C"
			},
			"rgb": {
				"fraction": {
					"r": 0.1568627450980392,
					"g": 0.3803921568627451,
					"b": 0.23529411764705882
				},
				"r": 40,
				"g": 97,
				"b": 60,
				"value": "rgb(40, 97, 60)"
			},
			"hsl": {
				"fraction": {
					"h": 0.39181286549707606,
					"s": 0.41605839416058393,
					"l": 0.26862745098039215
				},
				"h": 141,
				"s": 42,
				"l": 27,
				"value": "hsl(141, 42%, 27%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.39181286549707606,
					"s": 0.5876288659793815,
					"v": 0.3803921568627451
				},
				"value": "hsv(141, 59%, 38%)",
				"h": 141,
				"s": 59,
				"v": 38
			},
			"name": {
				"value": "Green Pea",
				"closest_named_hex": "#1D6142",
				"exact_match_name": false,
				"distance": 2313
			},
			"cmyk": {
				"fraction": {
					"c": 0.5876288659793815,
					"m": 0,
					"y": 0.381443298969072,
					"k": 0.6196078431372549
				},
				"value": "cmyk(59, 0, 38, 62)",
				"c": 59,
				"m": 0,
				"y": 38,
				"k": 62
			},
			"XYZ": {
				"fraction": {
					"X": 0.2431890196078431,
					"Y": 0.322393725490196,
					"Z": 0.27201725490196077
				},
				"value": "XYZ(24, 32, 27)",
				"X": 24,
				"Y": 32,
				"Z": 27
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=28613C",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=28613C"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=28613C"
				}
			},
			"_embedded": {},
			"target": "error"
		}, {
			"hex": {
				"value": "#296650",
				"clean": "296650"
			},
			"rgb": {
				"fraction": {
					"r": 0.1607843137254902,
					"g": 0.4,
					"b": 0.3137254901960784
				},
				"r": 41,
				"g": 102,
				"b": 80,
				"value": "rgb(41, 102, 80)"
			},
			"hsl": {
				"fraction": {
					"h": 0.4398907103825136,
					"s": 0.42657342657342656,
					"l": 0.2803921568627451
				},
				"h": 158,
				"s": 43,
				"l": 28,
				"value": "hsl(158, 43%, 28%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.4398907103825136,
					"s": 0.5980392156862745,
					"v": 0.4
				},
				"value": "hsv(158, 60%, 40%)",
				"h": 158,
				"s": 60,
				"v": 40
			},
			"name": {
				"value": "Casal",
				"closest_named_hex": "#2F6168",
				"exact_match_name": false,
				"distance": 1757
			},
			"cmyk": {
				"fraction": {
					"c": 0.5980392156862746,
					"m": 0,
					"y": 0.215686274509804,
					"k": 0.6
				},
				"value": "cmyk(60, 0, 22, 60)",
				"c": 60,
				"m": 0,
				"y": 22,
				"k": 60
			},
			"XYZ": {
				"fraction": {
					"X": 0.2659749019607843,
					"Y": 0.34291372549019605,
					"Z": 0.3489792156862745
				},
				"value": "XYZ(27, 34, 35)",
				"X": 27,
				"Y": 34,
				"Z": 35
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=296650",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=296650"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=296650"
				}
			},
			"_embedded": {},
			"target": "warning"
		}, {
			"hex": {
				"value": "#296A67",
				"clean": "296A67"
			},
			"rgb": {
				"fraction": {
					"r": 0.1607843137254902,
					"g": 0.41568627450980394,
					"b": 0.403921568627451
				},
				"r": 41,
				"g": 106,
				"b": 103,
				"value": "rgb(41, 106, 103)"
			},
			"hsl": {
				"fraction": {
					"h": 0.49230769230769234,
					"s": 0.44217687074829926,
					"l": 0.2882352941176471
				},
				"h": 177,
				"s": 44,
				"l": 29,
				"value": "hsl(177, 44%, 29%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.49230769230769234,
					"s": 0.6132075471698113,
					"v": 0.41568627450980394
				},
				"value": "hsv(177, 61%, 42%)",
				"h": 177,
				"s": 61,
				"v": 42
			},
			"name": {
				"value": "Casal",
				"closest_named_hex": "#2F6168",
				"exact_match_name": false,
				"distance": 736
			},
			"cmyk": {
				"fraction": {
					"c": 0.6132075471698114,
					"m": 0,
					"y": 0.02830188679245299,
					"k": 0.584313725490196
				},
				"value": "cmyk(61, 0, 3, 58)",
				"c": 61,
				"m": 0,
				"y": 3,
				"k": 58
			},
			"XYZ": {
				"fraction": {
					"X": 0.28786470588235297,
					"Y": 0.3606447058823529,
					"Z": 0.43658039215686273
				},
				"value": "XYZ(29, 36, 44)",
				"X": 29,
				"Y": 36,
				"Z": 44
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=296A67",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=296A67"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=296A67"
				}
			},
			"_embedded": {},
			"target": "info"
		}, {
			"hex": {
				"value": "#2A5E6F",
				"clean": "2A5E6F"
			},
			"rgb": {
				"fraction": {
					"r": 0.16470588235294117,
					"g": 0.3686274509803922,
					"b": 0.43529411764705883
				},
				"r": 42,
				"g": 94,
				"b": 111,
				"value": "rgb(42, 94, 111)"
			},
			"hsl": {
				"fraction": {
					"h": 0.5410628019323672,
					"s": 0.4509803921568628,
					"l": 0.3
				},
				"h": 195,
				"s": 45,
				"l": 30,
				"value": "hsl(195, 45%, 30%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.5410628019323672,
					"s": 0.6216216216216217,
					"v": 0.43529411764705883
				},
				"value": "hsv(195, 62%, 44%)",
				"h": 195,
				"s": 62,
				"v": 44
			},
			"name": {
				"value": "Casal",
				"closest_named_hex": "#2F6168",
				"exact_match_name": false,
				"distance": 857
			},
			"cmyk": {
				"fraction": {
					"c": 0.6216216216216217,
					"m": 0.15315315315315312,
					"y": 0,
					"k": 0.5647058823529412
				},
				"value": "cmyk(62, 15, 0, 56)",
				"c": 62,
				"m": 15,
				"y": 0,
				"k": 56
			},
			"XYZ": {
				"fraction": {
					"X": 0.2783164705882353,
					"Y": 0.33008705882352946,
					"Z": 0.46086627450980394
				},
				"value": "XYZ(28, 33, 46)",
				"X": 28,
				"Y": 33,
				"Z": 46
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=2A5E6F",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=2A5E6F"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=2A5E6F"
				}
			},
			"_embedded": {},
			"target": "success"
		}],
		"seed": {
			"hex": {
				"value": "#29682C",
				"clean": "29682C"
			},
			"rgb": {
				"fraction": {
					"r": 0.1607843137254902,
					"g": 0.40784313725490196,
					"b": 0.17254901960784313
				},
				"r": 41,
				"g": 104,
				"b": 44,
				"value": "rgb(41, 104, 44)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.43448275862068964,
					"l": 0.28431372549019607
				},
				"h": 123,
				"s": 43,
				"l": 28,
				"value": "hsl(123, 43%, 28%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.6057692307692307,
					"v": 0.40784313725490196
				},
				"value": "hsv(123, 61%, 41%)",
				"h": 123,
				"s": 61,
				"v": 41
			},
			"name": {
				"value": "Green Pea",
				"closest_named_hex": "#1D6142",
				"exact_match_name": false,
				"distance": 3217
			},
			"cmyk": {
				"fraction": {
					"c": 0.6057692307692308,
					"m": 0,
					"y": 0.5769230769230768,
					"k": 0.592156862745098
				},
				"value": "cmyk(61, 0, 58, 59)",
				"c": 61,
				"m": 0,
				"y": 58,
				"k": 59
			},
			"XYZ": {
				"fraction": {
					"X": 0.24329725490196077,
					"Y": 0.33833019607843134,
					"Z": 0.21572588235294116
				},
				"value": "XYZ(24, 34, 22)",
				"X": 24,
				"Y": 34,
				"Z": 22
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=29682C",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=29682C"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=29682C"
				}
			},
			"_embedded": {}
		},
		"image": {
			"bare": "https://www.thecolorapi.com/scheme?format=svg&named=false&hex=29682C&mode=analogic&count=5",
			"named": "https://www.thecolorapi.com/scheme?format=svg&hex=29682C&mode=analogic&count=5"
		},
		"_links": {
			"self": "/scheme?hex=29682C&mode=analogic&count=5",
			"schemes": {
				"monochrome": "/scheme?hex=29682C&mode=monochrome&count=5",
				"monochrome-dark": "/scheme?hex=29682C&mode=monochrome-dark&count=5",
				"monochrome-light": "/scheme?hex=29682C&mode=monochrome-light&count=5",
				"analogic": "/scheme?hex=29682C&mode=analogic&count=5",
				"complement": "/scheme?hex=29682C&mode=complement&count=5",
				"analogic-complement": "/scheme?hex=29682C&mode=analogic-complement&count=5",
				"triad": "/scheme?hex=29682C&mode=triad&count=5",
				"quad": "/scheme?hex=29682C&mode=quad&count=5"
			}
		},
		"_embedded": {}
	}, {
		"mode": "monochrome-dark",
		"count": "5",
		"colors": [{
			"hex": {
				"value": "#050C06",
				"clean": "050C06"
			},
			"rgb": {
				"fraction": {
					"r": 0.0196078431372549,
					"g": 0.047058823529411764,
					"b": 0.023529411764705882
				},
				"r": 5,
				"g": 12,
				"b": 6,
				"value": "rgb(5, 12, 6)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3571428571428571,
					"s": 0.4117647058823529,
					"l": 0.03333333333333333
				},
				"h": 129,
				"s": 41,
				"l": 3,
				"value": "hsl(129, 41%, 3%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3571428571428571,
					"s": 0.5833333333333334,
					"v": 0.047058823529411764
				},
				"value": "hsv(129, 58%, 5%)",
				"h": 129,
				"s": 58,
				"v": 5
			},
			"name": {
				"value": "Gordons Green",
				"closest_named_hex": "#0B1107",
				"exact_match_name": false,
				"distance": 1154
			},
			"cmyk": {
				"fraction": {
					"c": 0.5833333333333329,
					"m": 0,
					"y": 0.5,
					"k": 0.9529411764705882
				},
				"value": "cmyk(58, 0, 50, 95)",
				"c": 58,
				"m": 0,
				"y": 50,
				"k": 95
			},
			"XYZ": {
				"fraction": {
					"X": 0.029161568627450975,
					"Y": 0.03952392156862745,
					"Z": 0.028352549019607844
				},
				"value": "XYZ(3, 4, 3)",
				"X": 3,
				"Y": 4,
				"Z": 3
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=050C06",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=050C06"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=050C06"
				}
			},
			"_embedded": {},
			"target": "secondary"
		}, {
			"hex": {
				"value": "#143115",
				"clean": "143115"
			},
			"rgb": {
				"fraction": {
					"r": 0.0784313725490196,
					"g": 0.19215686274509805,
					"b": 0.08235294117647059
				},
				"r": 20,
				"g": 49,
				"b": 21,
				"value": "rgb(20, 49, 21)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3390804597701149,
					"s": 0.42028985507246375,
					"l": 0.13529411764705884
				},
				"h": 122,
				"s": 42,
				"l": 14,
				"value": "hsl(122, 42%, 14%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3390804597701149,
					"s": 0.5918367346938775,
					"v": 0.19215686274509805
				},
				"value": "hsv(122, 59%, 19%)",
				"h": 122,
				"s": 59,
				"v": 19
			},
			"name": {
				"value": "Seaweed",
				"closest_named_hex": "#1B2F11",
				"exact_match_name": false,
				"distance": 877
			},
			"cmyk": {
				"fraction": {
					"c": 0.5918367346938778,
					"m": 0,
					"y": 0.5714285714285712,
					"k": 0.807843137254902
				},
				"value": "cmyk(59, 0, 57, 81)",
				"c": 59,
				"m": 0,
				"y": 57,
				"k": 81
			},
			"XYZ": {
				"fraction": {
					"X": 0.11592509803921569,
					"Y": 0.16005098039215687,
					"Z": 0.10269529411764707
				},
				"value": "XYZ(12, 16, 10)",
				"X": 12,
				"Y": 16,
				"Z": 10
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=143115",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=143115"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=143115"
				}
			},
			"_embedded": {},
			"target": "error"
		}, {
			"hex": {
				"value": "#225525",
				"clean": "225525"
			},
			"rgb": {
				"fraction": {
					"r": 0.13333333333333333,
					"g": 0.3333333333333333,
					"b": 0.1450980392156863
				},
				"r": 34,
				"g": 85,
				"b": 37,
				"value": "rgb(34, 85, 37)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3431372549019609,
					"s": 0.42857142857142855,
					"l": 0.23333333333333334
				},
				"h": 124,
				"s": 43,
				"l": 23,
				"value": "hsl(124, 43%, 23%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3431372549019609,
					"s": 0.6,
					"v": 0.3333333333333333
				},
				"value": "hsv(124, 60%, 33%)",
				"h": 124,
				"s": 60,
				"v": 33
			},
			"name": {
				"value": "Everglade",
				"closest_named_hex": "#1C402E",
				"exact_match_name": false,
				"distance": 1818
			},
			"cmyk": {
				"fraction": {
					"c": 0.6,
					"m": 0,
					"y": 0.564705882352941,
					"k": 0.6666666666666667
				},
				"value": "cmyk(60, 0, 56, 67)",
				"c": 60,
				"m": 0,
				"y": 56,
				"k": 67
			},
			"XYZ": {
				"fraction": {
					"X": 0.20037686274509803,
					"Y": 0.2772227450980392,
					"Z": 0.18022235294117647
				},
				"value": "XYZ(20, 28, 18)",
				"X": 20,
				"Y": 28,
				"Z": 18
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=225525",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=225525"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=225525"
				}
			},
			"_embedded": {},
			"target": "warning"
		}, {
			"hex": {
				"value": "#555555",
				"clean": "555555"
			},
			"rgb": {
				"fraction": {
					"r": 0.3333333333333333,
					"g": 0.3333333333333333,
					"b": 0.3333333333333333
				},
				"r": 85,
				"g": 85,
				"b": 85,
				"value": "rgb(85, 85, 85)"
			},
			"hsl": {
				"fraction": {
					"h": 0,
					"s": 0,
					"l": 0.3333333333333333
				},
				"h": 0,
				"s": 0,
				"l": 33,
				"value": "hsl(0, 0%, 33%)"
			},
			"hsv": {
				"fraction": {
					"h": 0,
					"s": 0,
					"v": 0.3333333333333333
				},
				"value": "hsv(0, 0%, 33%)",
				"h": 0,
				"s": 0,
				"v": 33
			},
			"name": {
				"value": "Emperor",
				"closest_named_hex": "#514649",
				"exact_match_name": false,
				"distance": 1475
			},
			"cmyk": {
				"fraction": {
					"c": 0,
					"m": 0,
					"y": 0,
					"k": 0.6666666666666667
				},
				"value": "cmyk(0, 0, 0, 67)",
				"c": 0,
				"m": 0,
				"y": 0,
				"k": 67
			},
			"XYZ": {
				"fraction": {
					"X": 0.3168333333333333,
					"Y": 0.3333333333333333,
					"Z": 0.363
				},
				"value": "XYZ(32, 33, 36)",
				"X": 32,
				"Y": 33,
				"Z": 36
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=555555",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=555555"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=555555"
				}
			},
			"_embedded": {},
			"target": "info"
		}, {
			"hex": {
				"value": "#6F6F6F",
				"clean": "6F6F6F"
			},
			"rgb": {
				"fraction": {
					"r": 0.43529411764705883,
					"g": 0.43529411764705883,
					"b": 0.43529411764705883
				},
				"r": 111,
				"g": 111,
				"b": 111,
				"value": "rgb(111, 111, 111)"
			},
			"hsl": {
				"fraction": {
					"h": 0,
					"s": 0,
					"l": 0.43529411764705883
				},
				"h": 0,
				"s": 0,
				"l": 44,
				"value": "hsl(0, 0%, 44%)"
			},
			"hsv": {
				"fraction": {
					"h": 0,
					"s": 0,
					"v": 0.43529411764705883
				},
				"value": "hsv(0, 0%, 44%)",
				"h": 0,
				"s": 0,
				"v": 44
			},
			"name": {
				"value": "Dove Gray",
				"closest_named_hex": "#6D6C6C",
				"exact_match_name": false,
				"distance": 42
			},
			"cmyk": {
				"fraction": {
					"c": 0,
					"m": 0,
					"y": 0,
					"k": 0.5647058823529412
				},
				"value": "cmyk(0, 0, 0, 56)",
				"c": 0,
				"m": 0,
				"y": 0,
				"k": 56
			},
			"XYZ": {
				"fraction": {
					"X": 0.4137470588235294,
					"Y": 0.43529411764705883,
					"Z": 0.47403529411764705
				},
				"value": "XYZ(41, 44, 47)",
				"X": 41,
				"Y": 44,
				"Z": 47
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=6F6F6F",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=6F6F6F"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=6F6F6F"
				}
			},
			"_embedded": {},
			"target": "success"
		}],
		"seed": {
			"hex": {
				"value": "#29682C",
				"clean": "29682C"
			},
			"rgb": {
				"fraction": {
					"r": 0.1607843137254902,
					"g": 0.40784313725490196,
					"b": 0.17254901960784313
				},
				"r": 41,
				"g": 104,
				"b": 44,
				"value": "rgb(41, 104, 44)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.43448275862068964,
					"l": 0.28431372549019607
				},
				"h": 123,
				"s": 43,
				"l": 28,
				"value": "hsl(123, 43%, 28%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.6057692307692307,
					"v": 0.40784313725490196
				},
				"value": "hsv(123, 61%, 41%)",
				"h": 123,
				"s": 61,
				"v": 41
			},
			"name": {
				"value": "Green Pea",
				"closest_named_hex": "#1D6142",
				"exact_match_name": false,
				"distance": 3217
			},
			"cmyk": {
				"fraction": {
					"c": 0.6057692307692308,
					"m": 0,
					"y": 0.5769230769230768,
					"k": 0.592156862745098
				},
				"value": "cmyk(61, 0, 58, 59)",
				"c": 61,
				"m": 0,
				"y": 58,
				"k": 59
			},
			"XYZ": {
				"fraction": {
					"X": 0.24329725490196077,
					"Y": 0.33833019607843134,
					"Z": 0.21572588235294116
				},
				"value": "XYZ(24, 34, 22)",
				"X": 24,
				"Y": 34,
				"Z": 22
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=29682C",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=29682C"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=29682C"
				}
			},
			"_embedded": {}
		},
		"image": {
			"bare": "https://www.thecolorapi.com/scheme?format=svg&named=false&hex=29682C&mode=monochrome-dark&count=5",
			"named": "https://www.thecolorapi.com/scheme?format=svg&hex=29682C&mode=monochrome-dark&count=5"
		},
		"_links": {
			"self": "/scheme?hex=29682C&mode=monochrome-dark&count=5",
			"schemes": {
				"monochrome": "/scheme?hex=29682C&mode=monochrome&count=5",
				"monochrome-dark": "/scheme?hex=29682C&mode=monochrome-dark&count=5",
				"monochrome-light": "/scheme?hex=29682C&mode=monochrome-light&count=5",
				"analogic": "/scheme?hex=29682C&mode=analogic&count=5",
				"complement": "/scheme?hex=29682C&mode=complement&count=5",
				"analogic-complement": "/scheme?hex=29682C&mode=analogic-complement&count=5",
				"triad": "/scheme?hex=29682C&mode=triad&count=5",
				"quad": "/scheme?hex=29682C&mode=quad&count=5"
			}
		},
		"_embedded": {}
	}, {
		"mode": "triad",
		"count": "5",
		"colors": [{
			"hex": {
				"value": "#25244E",
				"clean": "25244E"
			},
			"rgb": {
				"fraction": {
					"r": 0.1450980392156863,
					"g": 0.1411764705882353,
					"b": 0.3058823529411765
				},
				"r": 37,
				"g": 36,
				"b": 78,
				"value": "rgb(37, 36, 78)"
			},
			"hsl": {
				"fraction": {
					"h": 0.6706349206349206,
					"s": 0.368421052631579,
					"l": 0.2235294117647059
				},
				"h": 241,
				"s": 37,
				"l": 22,
				"value": "hsl(241, 37%, 22%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.6706349206349206,
					"s": 0.5384615384615385,
					"v": 0.3058823529411765
				},
				"value": "hsv(241, 54%, 31%)",
				"h": 241,
				"s": 54,
				"v": 31
			},
			"name": {
				"value": "Port Gore",
				"closest_named_hex": "#251F4F",
				"exact_match_name": false,
				"distance": 714
			},
			"cmyk": {
				"fraction": {
					"c": 0.5256410256410255,
					"m": 0.5384615384615387,
					"y": 0,
					"k": 0.6941176470588235
				},
				"value": "cmyk(53, 54, 0, 69)",
				"c": 53,
				"m": 54,
				"y": 0,
				"k": 69
			},
			"XYZ": {
				"fraction": {
					"X": 0.16553490196078433,
					"Y": 0.15390196078431373,
					"Z": 0.31036980392156865
				},
				"value": "XYZ(17, 15, 31)",
				"X": 17,
				"Y": 15,
				"Z": 31
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=25244E",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=25244E"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=25244E"
				}
			},
			"_embedded": {},
			"target": "secondary"
		}, {
			"hex": {
				"value": "#582926",
				"clean": "582926"
			},
			"rgb": {
				"fraction": {
					"r": 0.34509803921568627,
					"g": 0.1607843137254902,
					"b": 0.14901960784313725
				},
				"r": 88,
				"g": 41,
				"b": 38,
				"value": "rgb(88, 41, 38)"
			},
			"hsl": {
				"fraction": {
					"h": 0.01000000000000012,
					"s": 0.3968253968253968,
					"l": 0.24705882352941178
				},
				"h": 4,
				"s": 40,
				"l": 25,
				"value": "hsl(4, 40%, 25%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.01000000000000012,
					"s": 0.5681818181818182,
					"v": 0.34509803921568627
				},
				"value": "hsv(4, 57%, 35%)",
				"h": 4,
				"s": 57,
				"v": 35
			},
			"name": {
				"value": "Buccaneer",
				"closest_named_hex": "#622F30",
				"exact_match_name": false,
				"distance": 694
			},
			"cmyk": {
				"fraction": {
					"c": 0,
					"m": 0.5340909090909092,
					"y": 0.5681818181818181,
					"k": 0.6549019607843137
				},
				"value": "cmyk(0, 53, 57, 65)",
				"c": 0,
				"m": 53,
				"y": 57,
				"k": 65
			},
			"XYZ": {
				"fraction": {
					"X": 0.22671294117647056,
					"Y": 0.19912,
					"Z": 0.16746901960784313
				},
				"value": "XYZ(23, 20, 17)",
				"X": 23,
				"Y": 20,
				"Z": 17
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=582926",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=582926"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=582926"
				}
			},
			"_embedded": {},
			"target": "error"
		}, {
			"hex": {
				"value": "#28632B",
				"clean": "28632B"
			},
			"rgb": {
				"fraction": {
					"r": 0.1568627450980392,
					"g": 0.38823529411764707,
					"b": 0.16862745098039217
				},
				"r": 40,
				"g": 99,
				"b": 43,
				"value": "rgb(40, 99, 43)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3418079096045198,
					"s": 0.42446043165467623,
					"l": 0.27254901960784317
				},
				"h": 123,
				"s": 42,
				"l": 27,
				"value": "hsl(123, 42%, 27%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3418079096045198,
					"s": 0.595959595959596,
					"v": 0.38823529411764707
				},
				"value": "hsv(123, 60%, 39%)",
				"h": 123,
				"s": 60,
				"v": 39
			},
			"name": {
				"value": "Green Pea",
				"closest_named_hex": "#1D6142",
				"exact_match_name": false,
				"distance": 3316
			},
			"cmyk": {
				"fraction": {
					"c": 0.5959595959595959,
					"m": 0,
					"y": 0.5656565656565654,
					"k": 0.611764705882353
				},
				"value": "cmyk(60, 0, 57, 61)",
				"c": 60,
				"m": 0,
				"y": 57,
				"k": 61
			},
			"XYZ": {
				"fraction": {
					"X": 0.23396039215686273,
					"Y": 0.3231898039215686,
					"Z": 0.20958549019607844
				},
				"value": "XYZ(23, 32, 21)",
				"X": 23,
				"Y": 32,
				"Z": 21
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=28632B",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=28632B"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=28632B"
				}
			},
			"_embedded": {},
			"target": "warning"
		}, {
			"hex": {
				"value": "#2A6E2D",
				"clean": "2A6E2D"
			},
			"rgb": {
				"fraction": {
					"r": 0.16470588235294117,
					"g": 0.43137254901960786,
					"b": 0.17647058823529413
				},
				"r": 42,
				"g": 110,
				"b": 45,
				"value": "rgb(42, 110, 45)"
			},
			"hsl": {
				"fraction": {
					"h": 0.34068627450980404,
					"s": 0.4473684210526317,
					"l": 0.2980392156862745
				},
				"h": 123,
				"s": 45,
				"l": 30,
				"value": "hsl(123, 45%, 30%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.34068627450980404,
					"s": 0.6181818181818183,
					"v": 0.43137254901960786
				},
				"value": "hsv(123, 62%, 43%)",
				"h": 123,
				"s": 62,
				"v": 43
			},
			"name": {
				"value": "Green Pea",
				"closest_named_hex": "#1D6142",
				"exact_match_name": false,
				"distance": 3197
			},
			"cmyk": {
				"fraction": {
					"c": 0.6181818181818183,
					"m": 0,
					"y": 0.5909090909090908,
					"k": 0.5686274509803921
				},
				"value": "cmyk(62, 0, 59, 57)",
				"c": 62,
				"m": 0,
				"y": 59,
				"k": 57
			},
			"XYZ": {
				"fraction": {
					"X": 0.2540364705882353,
					"Y": 0.3562752941176471,
					"Z": 0.2223337254901961
				},
				"value": "XYZ(25, 36, 22)",
				"X": 25,
				"Y": 36,
				"Z": 22
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=2A6E2D",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=2A6E2D"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=2A6E2D"
				}
			},
			"_embedded": {},
			"target": "info"
		}, {
			"hex": {
				"value": "#2B792F",
				"clean": "2B792F"
			},
			"rgb": {
				"fraction": {
					"r": 0.16862745098039217,
					"g": 0.4745098039215686,
					"b": 0.1843137254901961
				},
				"r": 43,
				"g": 121,
				"b": 47,
				"value": "rgb(43, 121, 47)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3418803418803419,
					"s": 0.47560975609756095,
					"l": 0.32156862745098036
				},
				"h": 123,
				"s": 48,
				"l": 32,
				"value": "hsl(123, 48%, 32%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3418803418803419,
					"s": 0.6446280991735537,
					"v": 0.4745098039215686
				},
				"value": "hsv(123, 64%, 47%)",
				"h": 123,
				"s": 64,
				"v": 47
			},
			"name": {
				"value": "Sea Green",
				"closest_named_hex": "#2E8B57",
				"exact_match_name": false,
				"distance": 2785
			},
			"cmyk": {
				"fraction": {
					"c": 0.6446280991735536,
					"m": 0,
					"y": 0.6115702479338843,
					"k": 0.5254901960784314
				},
				"value": "cmyk(64, 0, 61, 53)",
				"c": 64,
				"m": 0,
				"y": 61,
				"k": 53
			},
			"XYZ": {
				"fraction": {
					"X": 0.27249529411764706,
					"Y": 0.3885270588235294,
					"Z": 0.23500627450980394
				},
				"value": "XYZ(27, 39, 24)",
				"X": 27,
				"Y": 39,
				"Z": 24
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=2B792F",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=2B792F"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=2B792F"
				}
			},
			"_embedded": {},
			"target": "success"
		}],
		"seed": {
			"hex": {
				"value": "#29682C",
				"clean": "29682C"
			},
			"rgb": {
				"fraction": {
					"r": 0.1607843137254902,
					"g": 0.40784313725490196,
					"b": 0.17254901960784313
				},
				"r": 41,
				"g": 104,
				"b": 44,
				"value": "rgb(41, 104, 44)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.43448275862068964,
					"l": 0.28431372549019607
				},
				"h": 123,
				"s": 43,
				"l": 28,
				"value": "hsl(123, 43%, 28%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.6057692307692307,
					"v": 0.40784313725490196
				},
				"value": "hsv(123, 61%, 41%)",
				"h": 123,
				"s": 61,
				"v": 41
			},
			"name": {
				"value": "Green Pea",
				"closest_named_hex": "#1D6142",
				"exact_match_name": false,
				"distance": 3217
			},
			"cmyk": {
				"fraction": {
					"c": 0.6057692307692308,
					"m": 0,
					"y": 0.5769230769230768,
					"k": 0.592156862745098
				},
				"value": "cmyk(61, 0, 58, 59)",
				"c": 61,
				"m": 0,
				"y": 58,
				"k": 59
			},
			"XYZ": {
				"fraction": {
					"X": 0.24329725490196077,
					"Y": 0.33833019607843134,
					"Z": 0.21572588235294116
				},
				"value": "XYZ(24, 34, 22)",
				"X": 24,
				"Y": 34,
				"Z": 22
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=29682C",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=29682C"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=29682C"
				}
			},
			"_embedded": {}
		},
		"image": {
			"bare": "https://www.thecolorapi.com/scheme?format=svg&named=false&hex=29682C&mode=triad&count=5",
			"named": "https://www.thecolorapi.com/scheme?format=svg&hex=29682C&mode=triad&count=5"
		},
		"_links": {
			"self": "/scheme?hex=29682C&mode=triad&count=5",
			"schemes": {
				"monochrome": "/scheme?hex=29682C&mode=monochrome&count=5",
				"monochrome-dark": "/scheme?hex=29682C&mode=monochrome-dark&count=5",
				"monochrome-light": "/scheme?hex=29682C&mode=monochrome-light&count=5",
				"analogic": "/scheme?hex=29682C&mode=analogic&count=5",
				"complement": "/scheme?hex=29682C&mode=complement&count=5",
				"analogic-complement": "/scheme?hex=29682C&mode=analogic-complement&count=5",
				"triad": "/scheme?hex=29682C&mode=triad&count=5",
				"quad": "/scheme?hex=29682C&mode=quad&count=5"
			}
		},
		"_embedded": {}
	}, {
		"mode": "quad",
		"count": "5",
		"colors": [{
			"hex": {
				"value": "#24374E",
				"clean": "24374E"
			},
			"rgb": {
				"fraction": {
					"r": 0.1411764705882353,
					"g": 0.21568627450980393,
					"b": 0.3058823529411765
				},
				"r": 36,
				"g": 55,
				"b": 78,
				"value": "rgb(36, 55, 78)"
			},
			"hsl": {
				"fraction": {
					"h": 0.5912698412698413,
					"s": 0.368421052631579,
					"l": 0.2235294117647059
				},
				"h": 213,
				"s": 37,
				"l": 22,
				"value": "hsl(213, 37%, 22%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.5912698412698413,
					"s": 0.5384615384615385,
					"v": 0.3058823529411765
				},
				"value": "hsv(213, 54%, 31%)",
				"h": 213,
				"s": 54,
				"v": 31
			},
			"name": {
				"value": "Rhino",
				"closest_named_hex": "#2E3F62",
				"exact_match_name": false,
				"distance": 1088
			},
			"cmyk": {
				"fraction": {
					"c": 0.5384615384615387,
					"m": 0.2948717948717949,
					"y": 0,
					"k": 0.6941176470588235
				},
				"value": "cmyk(54, 29, 0, 69)",
				"c": 54,
				"m": 29,
				"y": 0,
				"k": 69
			},
			"XYZ": {
				"fraction": {
					"X": 0.19056235294117646,
					"Y": 0.20635764705882353,
					"Z": 0.3191756862745099
				},
				"value": "XYZ(19, 21, 32)",
				"X": 19,
				"Y": 21,
				"Z": 32
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=24374E",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=24374E"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=24374E"
				}
			},
			"_embedded": {},
			"target": "secondary"
		}, {
			"hex": {
				"value": "#582656",
				"clean": "582656"
			},
			"rgb": {
				"fraction": {
					"r": 0.34509803921568627,
					"g": 0.14901960784313725,
					"b": 0.33725490196078434
				},
				"r": 88,
				"g": 38,
				"b": 86,
				"value": "rgb(88, 38, 86)"
			},
			"hsl": {
				"fraction": {
					"h": 0.8399999999999999,
					"s": 0.3968253968253968,
					"l": 0.24705882352941178
				},
				"h": 302,
				"s": 40,
				"l": 25,
				"value": "hsl(302, 40%, 25%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.8399999999999999,
					"s": 0.5681818181818182,
					"v": 0.34509803921568627
				},
				"value": "hsv(302, 57%, 35%)",
				"h": 302,
				"s": 57,
				"v": 35
			},
			"name": {
				"value": "Finn",
				"closest_named_hex": "#692D54",
				"exact_match_name": false,
				"distance": 968
			},
			"cmyk": {
				"fraction": {
					"c": 0,
					"m": 0.5681818181818181,
					"y": 0.022727272727272648,
					"k": 0.6549019607843137
				},
				"value": "cmyk(0, 57, 2, 65)",
				"c": 0,
				"m": 57,
				"y": 2,
				"k": 65
			},
			"XYZ": {
				"fraction": {
					"X": 0.25648235294117644,
					"Y": 0.20429647058823527,
					"Z": 0.3449843137254902
				},
				"value": "XYZ(26, 20, 34)",
				"X": 26,
				"Y": 20,
				"Z": 34
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=582656",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=582656"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=582656"
				}
			},
			"_embedded": {},
			"target": "error"
		}, {
			"hex": {
				"value": "#634828",
				"clean": "634828"
			},
			"rgb": {
				"fraction": {
					"r": 0.38823529411764707,
					"g": 0.2823529411764706,
					"b": 0.1568627450980392
				},
				"r": 99,
				"g": 72,
				"b": 40,
				"value": "rgb(99, 72, 40)"
			},
			"hsl": {
				"fraction": {
					"h": 0.09039548022598864,
					"s": 0.42446043165467623,
					"l": 0.27254901960784317
				},
				"h": 33,
				"s": 42,
				"l": 27,
				"value": "hsl(33, 42%, 27%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.09039548022598864,
					"s": 0.595959595959596,
					"v": 0.38823529411764707
				},
				"value": "hsv(33, 60%, 39%)",
				"h": 33,
				"s": 60,
				"v": 39
			},
			"name": {
				"value": "Irish Coffee",
				"closest_named_hex": "#5F3D26",
				"exact_match_name": false,
				"distance": 233
			},
			"cmyk": {
				"fraction": {
					"c": 0,
					"m": 0.27272727272727265,
					"y": 0.5959595959595959,
					"k": 0.611764705882353
				},
				"value": "cmyk(0, 27, 60, 61)",
				"c": 0,
				"m": 27,
				"y": 60,
				"k": 61
			},
			"XYZ": {
				"fraction": {
					"X": 0.2893913725490196,
					"Y": 0.2958031372549019,
					"Z": 0.19024745098039214
				},
				"value": "XYZ(29, 30, 19)",
				"X": 29,
				"Y": 30,
				"Z": 19
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=634828",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=634828"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=634828"
				}
			},
			"_embedded": {},
			"target": "warning"
		}, {
			"hex": {
				"value": "#2A6E2D",
				"clean": "2A6E2D"
			},
			"rgb": {
				"fraction": {
					"r": 0.16470588235294117,
					"g": 0.43137254901960786,
					"b": 0.17647058823529413
				},
				"r": 42,
				"g": 110,
				"b": 45,
				"value": "rgb(42, 110, 45)"
			},
			"hsl": {
				"fraction": {
					"h": 0.34068627450980404,
					"s": 0.4473684210526317,
					"l": 0.2980392156862745
				},
				"h": 123,
				"s": 45,
				"l": 30,
				"value": "hsl(123, 45%, 30%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.34068627450980404,
					"s": 0.6181818181818183,
					"v": 0.43137254901960786
				},
				"value": "hsv(123, 62%, 43%)",
				"h": 123,
				"s": 62,
				"v": 43
			},
			"name": {
				"value": "Green Pea",
				"closest_named_hex": "#1D6142",
				"exact_match_name": false,
				"distance": 3197
			},
			"cmyk": {
				"fraction": {
					"c": 0.6181818181818183,
					"m": 0,
					"y": 0.5909090909090908,
					"k": 0.5686274509803921
				},
				"value": "cmyk(62, 0, 59, 57)",
				"c": 62,
				"m": 0,
				"y": 59,
				"k": 57
			},
			"XYZ": {
				"fraction": {
					"X": 0.2540364705882353,
					"Y": 0.3562752941176471,
					"Z": 0.2223337254901961
				},
				"value": "XYZ(25, 36, 22)",
				"X": 25,
				"Y": 36,
				"Z": 22
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=2A6E2D",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=2A6E2D"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=2A6E2D"
				}
			},
			"_embedded": {},
			"target": "info"
		}, {
			"hex": {
				"value": "#2B792F",
				"clean": "2B792F"
			},
			"rgb": {
				"fraction": {
					"r": 0.16862745098039217,
					"g": 0.4745098039215686,
					"b": 0.1843137254901961
				},
				"r": 43,
				"g": 121,
				"b": 47,
				"value": "rgb(43, 121, 47)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3418803418803419,
					"s": 0.47560975609756095,
					"l": 0.32156862745098036
				},
				"h": 123,
				"s": 48,
				"l": 32,
				"value": "hsl(123, 48%, 32%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3418803418803419,
					"s": 0.6446280991735537,
					"v": 0.4745098039215686
				},
				"value": "hsv(123, 64%, 47%)",
				"h": 123,
				"s": 64,
				"v": 47
			},
			"name": {
				"value": "Sea Green",
				"closest_named_hex": "#2E8B57",
				"exact_match_name": false,
				"distance": 2785
			},
			"cmyk": {
				"fraction": {
					"c": 0.6446280991735536,
					"m": 0,
					"y": 0.6115702479338843,
					"k": 0.5254901960784314
				},
				"value": "cmyk(64, 0, 61, 53)",
				"c": 64,
				"m": 0,
				"y": 61,
				"k": 53
			},
			"XYZ": {
				"fraction": {
					"X": 0.27249529411764706,
					"Y": 0.3885270588235294,
					"Z": 0.23500627450980394
				},
				"value": "XYZ(27, 39, 24)",
				"X": 27,
				"Y": 39,
				"Z": 24
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=2B792F",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=2B792F"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=2B792F"
				}
			},
			"_embedded": {},
			"target": "success"
		}],
		"seed": {
			"hex": {
				"value": "#29682C",
				"clean": "29682C"
			},
			"rgb": {
				"fraction": {
					"r": 0.1607843137254902,
					"g": 0.40784313725490196,
					"b": 0.17254901960784313
				},
				"r": 41,
				"g": 104,
				"b": 44,
				"value": "rgb(41, 104, 44)"
			},
			"hsl": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.43448275862068964,
					"l": 0.28431372549019607
				},
				"h": 123,
				"s": 43,
				"l": 28,
				"value": "hsl(123, 43%, 28%)"
			},
			"hsv": {
				"fraction": {
					"h": 0.3412698412698413,
					"s": 0.6057692307692307,
					"v": 0.40784313725490196
				},
				"value": "hsv(123, 61%, 41%)",
				"h": 123,
				"s": 61,
				"v": 41
			},
			"name": {
				"value": "Green Pea",
				"closest_named_hex": "#1D6142",
				"exact_match_name": false,
				"distance": 3217
			},
			"cmyk": {
				"fraction": {
					"c": 0.6057692307692308,
					"m": 0,
					"y": 0.5769230769230768,
					"k": 0.592156862745098
				},
				"value": "cmyk(61, 0, 58, 59)",
				"c": 61,
				"m": 0,
				"y": 58,
				"k": 59
			},
			"XYZ": {
				"fraction": {
					"X": 0.24329725490196077,
					"Y": 0.33833019607843134,
					"Z": 0.21572588235294116
				},
				"value": "XYZ(24, 34, 22)",
				"X": 24,
				"Y": 34,
				"Z": 22
			},
			"image": {
				"bare": "https://www.thecolorapi.com/id?format=svg&named=false&hex=29682C",
				"named": "https://www.thecolorapi.com/id?format=svg&hex=29682C"
			},
			"contrast": {
				"value": "#ffffff"
			},
			"_links": {
				"self": {
					"href": "/id?hex=29682C"
				}
			},
			"_embedded": {}
		},
		"image": {
			"bare": "https://www.thecolorapi.com/scheme?format=svg&named=false&hex=29682C&mode=quad&count=5",
			"named": "https://www.thecolorapi.com/scheme?format=svg&hex=29682C&mode=quad&count=5"
		},
		"_links": {
			"self": "/scheme?hex=29682C&mode=quad&count=5",
			"schemes": {
				"monochrome": "/scheme?hex=29682C&mode=monochrome&count=5",
				"monochrome-dark": "/scheme?hex=29682C&mode=monochrome-dark&count=5",
				"monochrome-light": "/scheme?hex=29682C&mode=monochrome-light&count=5",
				"analogic": "/scheme?hex=29682C&mode=analogic&count=5",
				"complement": "/scheme?hex=29682C&mode=complement&count=5",
				"analogic-complement": "/scheme?hex=29682C&mode=analogic-complement&count=5",
				"triad": "/scheme?hex=29682C&mode=triad&count=5",
				"quad": "/scheme?hex=29682C&mode=quad&count=5"
			}
		},
		"_embedded": {}
	}],
	"themes": [{
		"id": "1",
		"name": "default"
	}],
	"font": "'Roboto Slab', serif",
	"menuPosition": "side",
	"unstable_sxConfig": {
		"border": {
			"themeKey": "borders"
		},
		"borderTop": {
			"themeKey": "borders"
		},
		"borderRight": {
			"themeKey": "borders"
		},
		"borderBottom": {
			"themeKey": "borders"
		},
		"borderLeft": {
			"themeKey": "borders"
		},
		"borderColor": {
			"themeKey": "palette"
		},
		"borderTopColor": {
			"themeKey": "palette"
		},
		"borderRightColor": {
			"themeKey": "palette"
		},
		"borderBottomColor": {
			"themeKey": "palette"
		},
		"borderLeftColor": {
			"themeKey": "palette"
		},
		"borderRadius": {
			"themeKey": "shape.borderRadius"
		},
		"color": {
			"themeKey": "palette"
		},
		"bgcolor": {
			"themeKey": "palette",
			"cssProperty": "backgroundColor"
		},
		"backgroundColor": {
			"themeKey": "palette"
		},
		"p": {},
		"pt": {},
		"pr": {},
		"pb": {},
		"pl": {},
		"px": {},
		"py": {},
		"padding": {},
		"paddingTop": {},
		"paddingRight": {},
		"paddingBottom": {},
		"paddingLeft": {},
		"paddingX": {},
		"paddingY": {},
		"paddingInline": {},
		"paddingInlineStart": {},
		"paddingInlineEnd": {},
		"paddingBlock": {},
		"paddingBlockStart": {},
		"paddingBlockEnd": {},
		"m": {},
		"mt": {},
		"mr": {},
		"mb": {},
		"ml": {},
		"mx": {},
		"my": {},
		"margin": {},
		"marginTop": {},
		"marginRight": {},
		"marginBottom": {},
		"marginLeft": {},
		"marginX": {},
		"marginY": {},
		"marginInline": {},
		"marginInlineStart": {},
		"marginInlineEnd": {},
		"marginBlock": {},
		"marginBlockStart": {},
		"marginBlockEnd": {},
		"displayPrint": {
			"cssProperty": false
		},
		"display": {},
		"overflow": {},
		"textOverflow": {},
		"visibility": {},
		"whiteSpace": {},
		"flexBasis": {},
		"flexDirection": {},
		"flexWrap": {},
		"justifyContent": {},
		"alignItems": {},
		"alignContent": {},
		"order": {},
		"flex": {},
		"flexGrow": {},
		"flexShrink": {},
		"alignSelf": {},
		"justifyItems": {},
		"justifySelf": {},
		"gap": {},
		"rowGap": {},
		"columnGap": {},
		"gridColumn": {},
		"gridRow": {},
		"gridAutoFlow": {},
		"gridAutoColumns": {},
		"gridAutoRows": {},
		"gridTemplateColumns": {},
		"gridTemplateRows": {},
		"gridTemplateAreas": {},
		"gridArea": {},
		"position": {},
		"zIndex": {
			"themeKey": "zIndex"
		},
		"top": {},
		"right": {},
		"bottom": {},
		"left": {},
		"boxShadow": {
			"themeKey": "shadows"
		},
		"width": {},
		"maxWidth": {},
		"minWidth": {},
		"height": {},
		"maxHeight": {},
		"minHeight": {},
		"boxSizing": {},
		"fontFamily": {
			"themeKey": "typography"
		},
		"fontSize": {
			"themeKey": "typography"
		},
		"fontStyle": {
			"themeKey": "typography"
		},
		"fontWeight": {
			"themeKey": "typography"
		},
		"letterSpacing": {},
		"textTransform": {},
		"lineHeight": {},
		"textAlign": {},
		"typography": {
			"cssProperty": false,
			"themeKey": "typography"
		}
	}
}