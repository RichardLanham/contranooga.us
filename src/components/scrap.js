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
	}],{"breakpoints":{"keys":["xs","sm","md","lg","xl"],"values":{"xs":0,"sm":600,"md":900,"lg":1200,"xl":1536},"unit":"px"},"direction":"ltr","components":{},"palette":{"mode":"light","common":{"black":"#000","white":"#fff"},"primary":{"main":"#1b86d3","light":"#489edb","dark":"#156ba8","contrastText":"rgb(255, 255, 255)","contrastDark":"rgb(255, 255, 255)","contrastLight":"rgb(255, 255, 255)"},"secondary":{"main":"#BD601E","light":"#ca7f4b","dark":"#974c18","contrastText":"rgb(255, 255, 255)","contrastDark":"rgb(255, 255, 255)","contrastLight":"rgb(255, 255, 255)"},"error":{"main":"#f44336","light":"#e57373","dark":"#d32f2f","contrastText":"#fff","contrastDark":"rgb(255, 255, 255)","contrastLight":"rgb(255, 255, 255)"},"warning":{"main":"#ff9800","light":"#ffb74d","dark":"#f57c00","contrastText":"rgba(0, 0, 0, 0.87)","contrastDark":"rgb(255, 255, 255)","contrastLight":"rgb(255, 255, 255)"},"info":{"main":"#BD601E","light":"#ca7f4b","dark":"#974c18","contrastText":"rgb(255, 255, 255)","contrastDark":"rgb(255, 255, 255)","contrastLight":"rgb(255, 255, 255)"},"success":{"main":"#2BCB1C","light":"#55d549","dark":"#22a216","contrastText":"rgb(255, 255, 255)","contrastDark":"rgb(255, 255, 255)","contrastLight":"rgb(0, 0, 0)"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121","A100":"#f5f5f5","A200":"#eeeeee","A400":"#bdbdbd","A700":"#616161"},"contrastThreshold":3,"tonalOffset":0.2,"text":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.6)","disabled":"rgba(0, 0, 0, 0.38)"},"divider":"rgba(0, 0, 0, 0.12)","background":{"paper":"#fff","default":"#fff"},"action":{"active":"rgba(0, 0, 0, 0.54)","hover":"rgba(0, 0, 0, 0.04)","hoverOpacity":0.04,"selected":"rgba(0, 0, 0, 0.08)","selectedOpacity":0.08,"disabled":"rgba(0, 0, 0, 0.26)","disabledBackground":"rgba(0, 0, 0, 0.12)","disabledOpacity":0.38,"focus":"rgba(0, 0, 0, 0.12)","focusOpacity":0.12,"activatedOpacity":0.12},"muiToolShades":{"main":"#1b4fd3","dark":"rgb(0, 0, 0)","light":"rgb(255, 255, 255)","contrastHexDark":"rgb(255, 255, 255)","contrastHexLight":"rgb(0, 0, 0)","contrastHexMain":"rgb(255, 255, 255)"}},"shape":{"borderRadius":4},"test":"value","debug":{"display":"none","fontWeight":800},"form":{"padding":10,"width":"10%"},"userCard":{"opacity":".9","margin":3,"padding":3,"width":"50%"},"badge":{"whiteSpace":"nowrap","maxWidth":300,"fontWeight":600,"borderRadius":3,"padding":2,"margin":3,"textTransform":"lowercase"},"submitButton":{"border":"1px solid grey","padding":3,"fontWeight":600,"margin":3,"whiteSpace":"nowrap","width":50,"height":60,"borderRadius":500},"loadMoreButton":{"height":"60px","borderRadius":3,"border":0,"margin":"2 3 3 2","padding":"0 0 0 0"},"flexRows":{"flexGrow":1,"display":"flex","flexDirection":"row","flexWrap":"wrap"},"errorMessage":{"position":"fixed","left":5,"top":"140px","width":"50%"},"loading":{"width":"100%","zIndex":2000,"& > * + *":{"marginLeft":2}},"loud":{"fontWeight":800},"siteLink":{"borderRadius":5,"padding":3,"whiteSpace":"nowrap","maxHeight":60,"textDecoration":"none"},"mixins":{"toolbar":{"minHeight":56,"@media (min-width:0px) and (orientation: landscape)":{"minHeight":48},"@media (min-width:600px)":{"minHeight":64}}},"shadows":["none","0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)","0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)","0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)","0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)","0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)","0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)","0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)","0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)","0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)","0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)","0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)","0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)","0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)","0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)","0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)","0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)","0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)","0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)","0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)","0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)","0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)","0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)","0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)","0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"],"typography":{"htmlFontSize":16,"fontFamily":"\"Roboto\", \"Helvetica\", \"Arial\", sans-serif","fontSize":14,"fontWeightLight":300,"fontWeightRegular":400,"fontWeightMedium":500,"fontWeightBold":700,"h1":{"fontFamily":"'Roboto Mono', 'Helvetica','Arial', sans-serif","fontWeight":300,"fontSize":"6rem","lineHeight":1.167,"letterSpacing":"-0.01562em"},"h2":{"fontFamily":"'Roboto Mono', 'Helvetica','Arial', sans-serif","fontWeight":300,"fontSize":"3.75rem","lineHeight":1.2,"letterSpacing":"-0.00833em"},"h3":{"fontFamily":"'Roboto Mono', 'Helvetica','Arial', sans-serif","fontWeight":400,"fontSize":"3rem","lineHeight":1.167,"letterSpacing":"0em"},"h4":{"fontFamily":"'Roboto Mono', 'Helvetica','Arial', sans-serif","fontWeight":400,"fontSize":"2.125rem","lineHeight":1.235,"letterSpacing":"0.00735em"},"h5":{"fontFamily":"'Roboto Mono', 'Helvetica','Arial', sans-serif","fontWeight":400,"fontSize":"1.5rem","lineHeight":1.334,"letterSpacing":"0em"},"h6":{"fontFamily":"'Roboto Mono', 'Helvetica','Arial', sans-serif","fontWeight":500,"fontSize":"1.25rem","lineHeight":1.6,"letterSpacing":"0.0075em"},"subtitle1":{"fontFamily":"'Roboto Mono', 'Helvetica','Arial', sans-serif","fontWeight":400,"fontSize":"1rem","lineHeight":1.75,"letterSpacing":"0.00938em"},"subtitle2":{"fontFamily":"'Roboto Mono', 'Helvetica','Arial', sans-serif","fontWeight":500,"fontSize":"0.875rem","lineHeight":1.57,"letterSpacing":"0.00714em"},"body1":{"fontFamily":"'Roboto Mono', 'Helvetica','Arial', sans-serif","fontWeight":400,"fontSize":"1rem","lineHeight":1.5,"letterSpacing":"0.00938em"},"body2":{"fontFamily":"'Roboto Mono', 'Helvetica','Arial', sans-serif","fontWeight":400,"fontSize":"0.875rem","lineHeight":1.43,"letterSpacing":"0.01071em"},"button":{"fontFamily":"'Roboto Mono', 'Helvetica','Arial', sans-serif","fontWeight":500,"fontSize":"0.875rem","lineHeight":1.75,"letterSpacing":"0.02857em","textTransform":"uppercase"},"caption":{"fontFamily":"'Roboto Mono', 'Helvetica','Arial', sans-serif","fontWeight":400,"fontSize":"0.75rem","lineHeight":1.66,"letterSpacing":"0.03333em"},"overline":{"fontFamily":"'Roboto Mono', 'Helvetica','Arial', sans-serif","fontWeight":400,"fontSize":"0.75rem","lineHeight":2.66,"letterSpacing":"0.08333em","textTransform":"uppercase"}},"transitions":{"easing":{"easeInOut":"cubic-bezier(0.4, 0, 0.2, 1)","easeOut":"cubic-bezier(0.0, 0, 0.2, 1)","easeIn":"cubic-bezier(0.4, 0, 1, 1)","sharp":"cubic-bezier(0.4, 0, 0.6, 1)"},"duration":{"shortest":150,"shorter":200,"short":250,"standard":300,"complex":375,"enteringScreen":225,"leavingScreen":195}},"zIndex":{"mobileStepper":1000,"fab":1050,"speedDial":1050,"appBar":1100,"drawer":1200,"modal":1300,"snackbar":1400,"tooltip":1500},"defaultThemeId":"1","global":{"__typename":"Global","favicon":{"__typename":"UploadFileEntityResponse","data":null},"metadata":{"__typename":"ComponentMetaMetadata","metaTitle":"Chattanooga Traditional Dance Society","metaDescription":"Chattanooga Traditional Dance Society","shareImage":{"__typename":"UploadFileEntityResponse","data":{"__typename":"UploadFileEntity","id":"38","attributes":{"__typename":"UploadFile","alternativeText":null,"width":271,"height":222,"mime":"image/gif","url":"/uploads/dancers_dce9db6303.gif","formats":null}}},"twitterCardType":"summary","twitterUsername":null},"metaTitleSuffix":"Chattanooga Traditional Dance Society","notificationBanner":null,"navbar":{"__typename":"ComponentLayoutNavbar","logo":{"__typename":"UploadFileEntityResponse","data":{"__typename":"UploadFileEntity","id":"34","attributes":{"__typename":"UploadFile","alternativeText":null,"width":1920,"height":1080,"mime":"image/png","url":"/uploads/heart1_95d09a1859.png","formats":{"large":{"ext":".png","url":"/uploads/large_heart1_95d09a1859.png","hash":"large_heart1_95d09a1859","mime":"image/png","name":"large_heart1.png","path":null,"size":198.15,"width":1000,"height":563},"small":{"ext":".png","url":"/uploads/small_heart1_95d09a1859.png","hash":"small_heart1_95d09a1859","mime":"image/png","name":"small_heart1.png","path":null,"size":45.99,"width":500,"height":281},"medium":{"ext":".png","url":"/uploads/medium_heart1_95d09a1859.png","hash":"medium_heart1_95d09a1859","mime":"image/png","name":"medium_heart1.png","path":null,"size":99.56,"width":750,"height":422},"thumbnail":{"ext":".png","url":"/uploads/thumbnail_heart1_95d09a1859.png","hash":"thumbnail_heart1_95d09a1859","mime":"image/png","name":"thumbnail_heart1.png","path":null,"size":15.49,"width":245,"height":138}}}}},"links":[{"__typename":"ComponentLinksLink","id":"1","url":"/","newTab":false,"text":"Home"},{"__typename":"ComponentLinksLink","id":"2","url":"/cal","newTab":false,"text":"Events"}],"dropdown":[{"__typename":"ComponentLinksDropdown","id":"2","text":"dancers","title":null,"url":null,"Link":[{"__typename":"ComponentLinksLink","id":"4","url":"/page/beginners","newTab":false,"text":"beginners","slug":"beginners","description":null}]},{"__typename":"ComponentLinksDropdown","id":"1","text":"more...","title":null,"url":null,"Link":[{"__typename":"ComponentLinksLink","id":"3","url":"/pages/pastdancers","newTab":false,"text":"Past Dancers","slug":"pastdancers","description":null},{"__typename":"ComponentLinksLink","id":"5","url":"/pages/bod","newTab":false,"text":"Board","slug":"bod","description":null}]}],"button":null},"footer":null},"feature":{"__typename":"Feature","heading":"","body":"","caption1":"","caption2":"Summer schedule through August 8","picture1":{"__typename":"UploadFileRelationResponseCollection","data":[{"__typename":"UploadFileEntity","id":"40","attributes":{"__typename":"UploadFile","name":"One_service.png","width":940,"height":788,"formats":{"small":{"ext":".png","url":"/uploads/small_One_service_8f4ba29e73.png","hash":"small_One_service_8f4ba29e73","mime":"image/png","name":"small_One_service.png","path":null,"size":452.21,"width":500,"height":419},"medium":{"ext":".png","url":"/uploads/medium_One_service_8f4ba29e73.png","hash":"medium_One_service_8f4ba29e73","mime":"image/png","name":"medium_One_service.png","path":null,"size":969.56,"width":750,"height":629},"thumbnail":{"ext":".png","url":"/uploads/thumbnail_One_service_8f4ba29e73.png","hash":"thumbnail_One_service_8f4ba29e73","mime":"image/png","name":"thumbnail_One_service.png","path":null,"size":69.83,"width":186,"height":156}}}}]},"picture2":{"__typename":"UploadFileRelationResponseCollection","data":[]}},"access_token":"EAAPfw7gqiE8BABfm8ZClked38glbRCq4rHJKIdnO6M6FhcMHxx9xR5xTyYTcJuojnoeklS3tE5sQc64PDxzSXf4ErQUmz9rIMxWYSPwUdoG50mNTajgI2H1GFiZAXeToMuwUMaT35YFKO8jUHWFIvOLhWFzowVDPTz0QZBoGq0DeuJC7axGkh16pIRP38wZD","themeId":"1","color_modes":[{"mode":"monochrome","count":"5","colors":[{"hex":{"value":"#0E3E60","clean":"0E3E60"},"rgb":{"fraction":{"r":0.054901960784313725,"g":0.24313725490196078,"b":0.3764705882352941},"r":14,"g":62,"b":96,"value":"rgb(14, 62, 96)"},"hsl":{"fraction":{"h":0.5691056910569106,"s":0.7454545454545454,"l":0.21568627450980393},"h":205,"s":75,"l":22,"value":"hsl(205, 75%, 22%)"},"hsv":{"fraction":{"h":0.5691056910569106,"s":0.8541666666666666,"v":0.3764705882352941},"value":"hsv(205, 85%, 38%)","h":205,"s":85,"v":38},"name":{"value":"Madison","closest_named_hex":"#09255D","exact_match_name":false,"distance":1709},"cmyk":{"fraction":{"c":0.8541666666666666,"m":0.3541666666666666,"y":0,"k":0.6235294117647059},"value":"cmyk(85, 35, 0, 62)","c":85,"m":35,"y":0,"k":62},"XYZ":{"fraction":{"X":0.17754039215686274,"Y":0.21274509803921565,"Z":0.3878768627450981},"value":"XYZ(18, 21, 39)","X":18,"Y":21,"Z":39},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=0E3E60","named":"https://www.thecolorapi.com/id?format=svg&hex=0E3E60"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=0E3E60"}},"_embedded":{},"target":"secondary"},{"hex":{"value":"#145B8E","clean":"145B8E"},"rgb":{"fraction":{"r":0.0784313725490196,"g":0.3568627450980392,"b":0.5568627450980392},"r":20,"g":91,"b":142,"value":"rgb(20, 91, 142)"},"hsl":{"fraction":{"h":0.5696721311475408,"s":0.7530864197530865,"l":0.3176470588235294},"h":205,"s":75,"l":32,"value":"hsl(205, 75%, 32%)"},"hsv":{"fraction":{"h":0.5696721311475408,"s":0.8591549295774648,"v":0.5568627450980392},"value":"hsv(205, 86%, 56%)","h":205,"s":86,"v":56},"name":{"value":"Matisse","closest_named_hex":"#1B659D","exact_match_name":false,"distance":904},"cmyk":{"fraction":{"c":0.8591549295774649,"m":0.3591549295774647,"y":0,"k":0.44313725490196076},"value":"cmyk(86, 36, 0, 44)","c":86,"m":36,"y":0,"k":44},"XYZ":{"fraction":{"X":0.2604729411764706,"Y":0.31210823529411763,"Z":0.5733498039215686},"value":"XYZ(26, 31, 57)","X":26,"Y":31,"Z":57},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=145B8E","named":"https://www.thecolorapi.com/id?format=svg&hex=145B8E"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=145B8E"}},"_embedded":{},"target":"error"},{"hex":{"value":"#1978BC","clean":"1978BC"},"rgb":{"fraction":{"r":0.09803921568627451,"g":0.47058823529411764,"b":0.7372549019607844},"r":25,"g":120,"b":188,"value":"rgb(25, 120, 188)"},"hsl":{"fraction":{"h":0.5695296523517382,"s":0.7652582159624414,"l":0.4176470588235294},"h":205,"s":77,"l":42,"value":"hsl(205, 77%, 42%)"},"hsv":{"fraction":{"h":0.5695296523517382,"s":0.8670212765957447,"v":0.7372549019607844},"value":"hsv(205, 87%, 74%)","h":205,"s":87,"v":74},"name":{"value":"Denim","closest_named_hex":"#1560BD","exact_match_name":false,"distance":795},"cmyk":{"fraction":{"c":0.8670212765957447,"m":0.3617021276595745,"y":0,"k":0.26274509803921564},"value":"cmyk(87, 36, 0, 26)","c":87,"m":36,"y":0,"k":26},"XYZ":{"fraction":{"X":0.3417882352941176,"Y":0.4106376470588235,"Z":0.7587470588235294},"value":"XYZ(34, 41, 76)","X":34,"Y":41,"Z":76},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1978BC","named":"https://www.thecolorapi.com/id?format=svg&hex=1978BC"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=1978BC"}},"_embedded":{},"target":"warning"},{"hex":{"value":"#2493E3","clean":"2493E3"},"rgb":{"fraction":{"r":0.1411764705882353,"g":0.5764705882352941,"b":0.8901960784313725},"r":36,"g":147,"b":227,"value":"rgb(36, 147, 227)"},"hsl":{"fraction":{"h":0.5698080279232113,"s":0.7732793522267206,"l":0.5156862745098039},"h":205,"s":77,"l":52,"value":"hsl(205, 77%, 52%)"},"hsv":{"fraction":{"h":0.5698080279232113,"s":0.841409691629956,"v":0.8901960784313725},"value":"hsv(205, 84%, 89%)","h":205,"s":84,"v":89},"name":{"value":"Cerulean","closest_named_hex":"#1DACD6","exact_match_name":false,"distance":1189},"cmyk":{"fraction":{"c":0.841409691629956,"m":0.3524229074889868,"y":0,"k":0.1098039215686275},"value":"cmyk(84, 35, 0, 11)","c":84,"m":35,"y":0,"k":11},"XYZ":{"fraction":{"X":0.4250474509803921,"Y":0.5065780392156862,"Z":0.9175713725490195},"value":"XYZ(43, 51, 92)","X":43,"Y":51,"Z":92},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=2493E3","named":"https://www.thecolorapi.com/id?format=svg&hex=2493E3"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=2493E3"}},"_embedded":{},"target":"info"},{"hex":{"value":"#50AAEA","clean":"50AAEA"},"rgb":{"fraction":{"r":0.3137254901960784,"g":0.6666666666666666,"b":0.9176470588235294},"r":80,"g":170,"b":234,"value":"rgb(80, 170, 234)"},"hsl":{"fraction":{"h":0.5692640692640693,"s":0.7857142857142855,"l":0.615686274509804},"h":205,"s":79,"l":62,"value":"hsl(205, 79%, 62%)"},"hsv":{"fraction":{"h":0.5692640692640693,"s":0.6581196581196581,"v":0.9176470588235294},"value":"hsv(205, 66%, 92%)","h":205,"s":66,"v":92},"name":{"value":"Blue Jeans","closest_named_hex":"#5DADEC","exact_match_name":false,"distance":284},"cmyk":{"fraction":{"c":0.6581196581196581,"m":0.27350427350427353,"y":0,"k":0.08235294117647063},"value":"cmyk(66, 27, 0, 8)","c":66,"m":27,"y":0,"k":8},"XYZ":{"fraction":{"X":0.5334156862745097,"Y":0.609752156862745,"Z":0.9577450980392157},"value":"XYZ(53, 61, 96)","X":53,"Y":61,"Z":96},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=50AAEA","named":"https://www.thecolorapi.com/id?format=svg&hex=50AAEA"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=50AAEA"}},"_embedded":{},"target":"success"}],"seed":{"hex":{"value":"#1B86D3","clean":"1B86D3"},"rgb":{"fraction":{"r":0.10588235294117647,"g":0.5254901960784314,"b":0.8274509803921568},"r":27,"g":134,"b":211,"value":"rgb(27, 134, 211)"},"hsl":{"fraction":{"h":0.569746376811594,"s":0.773109243697479,"l":0.4666666666666666},"h":205,"s":77,"l":47,"value":"hsl(205, 77%, 47%)"},"hsv":{"fraction":{"h":0.569746376811594,"s":0.8720379146919431,"v":0.8274509803921568},"value":"hsv(205, 87%, 83%)","h":205,"s":87,"v":83},"name":{"value":"Navy Blue","closest_named_hex":"#1974D2","exact_match_name":false,"distance":381},"cmyk":{"fraction":{"c":0.8720379146919431,"m":0.3649289099526066,"y":0,"k":0.1725490196078432},"value":"cmyk(87, 36, 0, 17)","c":87,"m":36,"y":0,"k":17},"XYZ":{"fraction":{"X":0.3809360784313725,"Y":0.4580831372549019,"Z":0.8511741176470589},"value":"XYZ(38, 46, 85)","X":38,"Y":46,"Z":85},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1B86D3","named":"https://www.thecolorapi.com/id?format=svg&hex=1B86D3"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1B86D3"}},"_embedded":{}},"image":{"bare":"https://www.thecolorapi.com/scheme?format=svg&named=false&hex=1B86D3&mode=monochrome&count=5","named":"https://www.thecolorapi.com/scheme?format=svg&hex=1B86D3&mode=monochrome&count=5"},"_links":{"self":"/scheme?hex=1B86D3&mode=monochrome&count=5","schemes":{"monochrome":"/scheme?hex=1B86D3&mode=monochrome&count=5","monochrome-dark":"/scheme?hex=1B86D3&mode=monochrome-dark&count=5","monochrome-light":"/scheme?hex=1B86D3&mode=monochrome-light&count=5","analogic":"/scheme?hex=1B86D3&mode=analogic&count=5","complement":"/scheme?hex=1B86D3&mode=complement&count=5","analogic-complement":"/scheme?hex=1B86D3&mode=analogic-complement&count=5","triad":"/scheme?hex=1B86D3&mode=triad&count=5","quad":"/scheme?hex=1B86D3&mode=quad&count=5"}},"_embedded":{}},{"mode":"monochrome-dark","count":"5","colors":[{"hex":{"value":"#0E3E60","clean":"0E3E60"},"rgb":{"fraction":{"r":0.054901960784313725,"g":0.24313725490196078,"b":0.3764705882352941},"r":14,"g":62,"b":96,"value":"rgb(14, 62, 96)"},"hsl":{"fraction":{"h":0.5691056910569106,"s":0.7454545454545454,"l":0.21568627450980393},"h":205,"s":75,"l":22,"value":"hsl(205, 75%, 22%)"},"hsv":{"fraction":{"h":0.5691056910569106,"s":0.8541666666666666,"v":0.3764705882352941},"value":"hsv(205, 85%, 38%)","h":205,"s":85,"v":38},"name":{"value":"Madison","closest_named_hex":"#09255D","exact_match_name":false,"distance":1709},"cmyk":{"fraction":{"c":0.8541666666666666,"m":0.3541666666666666,"y":0,"k":0.6235294117647059},"value":"cmyk(85, 35, 0, 62)","c":85,"m":35,"y":0,"k":62},"XYZ":{"fraction":{"X":0.17754039215686274,"Y":0.21274509803921565,"Z":0.3878768627450981},"value":"XYZ(18, 21, 39)","X":18,"Y":21,"Z":39},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=0E3E60","named":"https://www.thecolorapi.com/id?format=svg&hex=0E3E60"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=0E3E60"}},"_embedded":{},"target":"secondary"},{"hex":{"value":"#145B8E","clean":"145B8E"},"rgb":{"fraction":{"r":0.0784313725490196,"g":0.3568627450980392,"b":0.5568627450980392},"r":20,"g":91,"b":142,"value":"rgb(20, 91, 142)"},"hsl":{"fraction":{"h":0.5696721311475408,"s":0.7530864197530865,"l":0.3176470588235294},"h":205,"s":75,"l":32,"value":"hsl(205, 75%, 32%)"},"hsv":{"fraction":{"h":0.5696721311475408,"s":0.8591549295774648,"v":0.5568627450980392},"value":"hsv(205, 86%, 56%)","h":205,"s":86,"v":56},"name":{"value":"Matisse","closest_named_hex":"#1B659D","exact_match_name":false,"distance":904},"cmyk":{"fraction":{"c":0.8591549295774649,"m":0.3591549295774647,"y":0,"k":0.44313725490196076},"value":"cmyk(86, 36, 0, 44)","c":86,"m":36,"y":0,"k":44},"XYZ":{"fraction":{"X":0.2604729411764706,"Y":0.31210823529411763,"Z":0.5733498039215686},"value":"XYZ(26, 31, 57)","X":26,"Y":31,"Z":57},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=145B8E","named":"https://www.thecolorapi.com/id?format=svg&hex=145B8E"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=145B8E"}},"_embedded":{},"target":"error"},{"hex":{"value":"#1978BC","clean":"1978BC"},"rgb":{"fraction":{"r":0.09803921568627451,"g":0.47058823529411764,"b":0.7372549019607844},"r":25,"g":120,"b":188,"value":"rgb(25, 120, 188)"},"hsl":{"fraction":{"h":0.5695296523517382,"s":0.7652582159624414,"l":0.4176470588235294},"h":205,"s":77,"l":42,"value":"hsl(205, 77%, 42%)"},"hsv":{"fraction":{"h":0.5695296523517382,"s":0.8670212765957447,"v":0.7372549019607844},"value":"hsv(205, 87%, 74%)","h":205,"s":87,"v":74},"name":{"value":"Denim","closest_named_hex":"#1560BD","exact_match_name":false,"distance":795},"cmyk":{"fraction":{"c":0.8670212765957447,"m":0.3617021276595745,"y":0,"k":0.26274509803921564},"value":"cmyk(87, 36, 0, 26)","c":87,"m":36,"y":0,"k":26},"XYZ":{"fraction":{"X":0.3417882352941176,"Y":0.4106376470588235,"Z":0.7587470588235294},"value":"XYZ(34, 41, 76)","X":34,"Y":41,"Z":76},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1978BC","named":"https://www.thecolorapi.com/id?format=svg&hex=1978BC"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=1978BC"}},"_embedded":{},"target":"warning"},{"hex":{"value":"#848484","clean":"848484"},"rgb":{"fraction":{"r":0.5176470588235295,"g":0.5176470588235295,"b":0.5176470588235295},"r":132,"g":132,"b":132,"value":"rgb(132, 132, 132)"},"hsl":{"fraction":{"h":0,"s":0,"l":0.5176470588235295},"h":0,"s":0,"l":52,"value":"hsl(0, 0%, 52%)"},"hsv":{"fraction":{"h":0,"s":0,"v":0.5176470588235295},"value":"hsv(0, 0%, 52%)","h":0,"s":0,"v":52},"name":{"value":"Gray","closest_named_hex":"#808080","exact_match_name":false,"distance":80},"cmyk":{"fraction":{"c":0,"m":0,"y":0,"k":0.48235294117647054},"value":"cmyk(0, 0, 0, 48)","c":0,"m":0,"y":0,"k":48},"XYZ":{"fraction":{"X":0.49202352941176475,"Y":0.5176470588235293,"Z":0.5637176470588235},"value":"XYZ(49, 52, 56)","X":49,"Y":52,"Z":56},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=848484","named":"https://www.thecolorapi.com/id?format=svg&hex=848484"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=848484"}},"_embedded":{},"target":"info"},{"hex":{"value":"#9D9D9D","clean":"9D9D9D"},"rgb":{"fraction":{"r":0.615686274509804,"g":0.615686274509804,"b":0.615686274509804},"r":157,"g":157,"b":157,"value":"rgb(157, 157, 157)"},"hsl":{"fraction":{"h":0,"s":0,"l":0.615686274509804},"h":0,"s":0,"l":62,"value":"hsl(0, 0%, 62%)"},"hsv":{"fraction":{"h":0,"s":0,"v":0.615686274509804},"value":"hsv(0, 0%, 62%)","h":0,"s":0,"v":62},"name":{"value":"Quick Silver","closest_named_hex":"#A6A6A6","exact_match_name":false,"distance":405},"cmyk":{"fraction":{"c":0,"m":0,"y":0,"k":0.38431372549019605},"value":"cmyk(0, 0, 0, 38)","c":0,"m":0,"y":0,"k":38},"XYZ":{"fraction":{"X":0.5852098039215686,"Y":0.615686274509804,"Z":0.6704823529411765},"value":"XYZ(59, 62, 67)","X":59,"Y":62,"Z":67},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=9D9D9D","named":"https://www.thecolorapi.com/id?format=svg&hex=9D9D9D"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=9D9D9D"}},"_embedded":{},"target":"success"}],"seed":{"hex":{"value":"#1B86D3","clean":"1B86D3"},"rgb":{"fraction":{"r":0.10588235294117647,"g":0.5254901960784314,"b":0.8274509803921568},"r":27,"g":134,"b":211,"value":"rgb(27, 134, 211)"},"hsl":{"fraction":{"h":0.569746376811594,"s":0.773109243697479,"l":0.4666666666666666},"h":205,"s":77,"l":47,"value":"hsl(205, 77%, 47%)"},"hsv":{"fraction":{"h":0.569746376811594,"s":0.8720379146919431,"v":0.8274509803921568},"value":"hsv(205, 87%, 83%)","h":205,"s":87,"v":83},"name":{"value":"Navy Blue","closest_named_hex":"#1974D2","exact_match_name":false,"distance":381},"cmyk":{"fraction":{"c":0.8720379146919431,"m":0.3649289099526066,"y":0,"k":0.1725490196078432},"value":"cmyk(87, 36, 0, 17)","c":87,"m":36,"y":0,"k":17},"XYZ":{"fraction":{"X":0.3809360784313725,"Y":0.4580831372549019,"Z":0.8511741176470589},"value":"XYZ(38, 46, 85)","X":38,"Y":46,"Z":85},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1B86D3","named":"https://www.thecolorapi.com/id?format=svg&hex=1B86D3"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1B86D3"}},"_embedded":{}},"image":{"bare":"https://www.thecolorapi.com/scheme?format=svg&named=false&hex=1B86D3&mode=monochrome-dark&count=5","named":"https://www.thecolorapi.com/scheme?format=svg&hex=1B86D3&mode=monochrome-dark&count=5"},"_links":{"self":"/scheme?hex=1B86D3&mode=monochrome-dark&count=5","schemes":{"monochrome":"/scheme?hex=1B86D3&mode=monochrome&count=5","monochrome-dark":"/scheme?hex=1B86D3&mode=monochrome-dark&count=5","monochrome-light":"/scheme?hex=1B86D3&mode=monochrome-light&count=5","analogic":"/scheme?hex=1B86D3&mode=analogic&count=5","complement":"/scheme?hex=1B86D3&mode=complement&count=5","analogic-complement":"/scheme?hex=1B86D3&mode=analogic-complement&count=5","triad":"/scheme?hex=1B86D3&mode=triad&count=5","quad":"/scheme?hex=1B86D3&mode=quad&count=5"}},"_embedded":{}},{"mode":"monochrome-light","count":"5","colors":[{"hex":{"value":"#373737","clean":"373737"},"rgb":{"fraction":{"r":0.21568627450980393,"g":0.21568627450980393,"b":0.21568627450980393},"r":55,"g":55,"b":55,"value":"rgb(55, 55, 55)"},"hsl":{"fraction":{"h":0,"s":0,"l":0.21568627450980393},"h":0,"s":0,"l":22,"value":"hsl(0, 0%, 22%)"},"hsv":{"fraction":{"h":0,"s":0,"v":0.21568627450980393},"value":"hsv(0, 0%, 22%)","h":0,"s":0,"v":22},"name":{"value":"Mine Shaft","closest_named_hex":"#323232","exact_match_name":false,"distance":125},"cmyk":{"fraction":{"c":0,"m":0,"y":0,"k":0.7843137254901961},"value":"cmyk(0, 0, 0, 78)","c":0,"m":0,"y":0,"k":78},"XYZ":{"fraction":{"X":0.20500980392156862,"Y":0.2156862745098039,"Z":0.2348823529411765},"value":"XYZ(21, 22, 23)","X":21,"Y":22,"Z":23},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=373737","named":"https://www.thecolorapi.com/id?format=svg&hex=373737"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=373737"}},"_embedded":{},"target":"secondary"},{"hex":{"value":"#515151","clean":"515151"},"rgb":{"fraction":{"r":0.3176470588235294,"g":0.3176470588235294,"b":0.3176470588235294},"r":81,"g":81,"b":81,"value":"rgb(81, 81, 81)"},"hsl":{"fraction":{"h":0,"s":0,"l":0.3176470588235294},"h":0,"s":0,"l":32,"value":"hsl(0, 0%, 32%)"},"hsv":{"fraction":{"h":0,"s":0,"v":0.3176470588235294},"value":"hsv(0, 0%, 32%)","h":0,"s":0,"v":32},"name":{"value":"Emperor","closest_named_hex":"#514649","exact_match_name":false,"distance":1147},"cmyk":{"fraction":{"c":0,"m":0,"y":0,"k":0.6823529411764706},"value":"cmyk(0, 0, 0, 68)","c":0,"m":0,"y":0,"k":68},"XYZ":{"fraction":{"X":0.30192352941176465,"Y":0.31764705882352934,"Z":0.34591764705882355},"value":"XYZ(30, 32, 35)","X":30,"Y":32,"Z":35},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=515151","named":"https://www.thecolorapi.com/id?format=svg&hex=515151"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=515151"}},"_embedded":{},"target":"error"},{"hex":{"value":"#1978BC","clean":"1978BC"},"rgb":{"fraction":{"r":0.09803921568627451,"g":0.47058823529411764,"b":0.7372549019607844},"r":25,"g":120,"b":188,"value":"rgb(25, 120, 188)"},"hsl":{"fraction":{"h":0.5695296523517382,"s":0.7652582159624414,"l":0.4176470588235294},"h":205,"s":77,"l":42,"value":"hsl(205, 77%, 42%)"},"hsv":{"fraction":{"h":0.5695296523517382,"s":0.8670212765957447,"v":0.7372549019607844},"value":"hsv(205, 87%, 74%)","h":205,"s":87,"v":74},"name":{"value":"Denim","closest_named_hex":"#1560BD","exact_match_name":false,"distance":795},"cmyk":{"fraction":{"c":0.8670212765957447,"m":0.3617021276595745,"y":0,"k":0.26274509803921564},"value":"cmyk(87, 36, 0, 26)","c":87,"m":36,"y":0,"k":26},"XYZ":{"fraction":{"X":0.3417882352941176,"Y":0.4106376470588235,"Z":0.7587470588235294},"value":"XYZ(34, 41, 76)","X":34,"Y":41,"Z":76},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1978BC","named":"https://www.thecolorapi.com/id?format=svg&hex=1978BC"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=1978BC"}},"_embedded":{},"target":"warning"},{"hex":{"value":"#2493E3","clean":"2493E3"},"rgb":{"fraction":{"r":0.1411764705882353,"g":0.5764705882352941,"b":0.8901960784313725},"r":36,"g":147,"b":227,"value":"rgb(36, 147, 227)"},"hsl":{"fraction":{"h":0.5698080279232113,"s":0.7732793522267206,"l":0.5156862745098039},"h":205,"s":77,"l":52,"value":"hsl(205, 77%, 52%)"},"hsv":{"fraction":{"h":0.5698080279232113,"s":0.841409691629956,"v":0.8901960784313725},"value":"hsv(205, 84%, 89%)","h":205,"s":84,"v":89},"name":{"value":"Cerulean","closest_named_hex":"#1DACD6","exact_match_name":false,"distance":1189},"cmyk":{"fraction":{"c":0.841409691629956,"m":0.3524229074889868,"y":0,"k":0.1098039215686275},"value":"cmyk(84, 35, 0, 11)","c":84,"m":35,"y":0,"k":11},"XYZ":{"fraction":{"X":0.4250474509803921,"Y":0.5065780392156862,"Z":0.9175713725490195},"value":"XYZ(43, 51, 92)","X":43,"Y":51,"Z":92},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=2493E3","named":"https://www.thecolorapi.com/id?format=svg&hex=2493E3"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=2493E3"}},"_embedded":{},"target":"info"},{"hex":{"value":"#50AAEA","clean":"50AAEA"},"rgb":{"fraction":{"r":0.3137254901960784,"g":0.6666666666666666,"b":0.9176470588235294},"r":80,"g":170,"b":234,"value":"rgb(80, 170, 234)"},"hsl":{"fraction":{"h":0.5692640692640693,"s":0.7857142857142855,"l":0.615686274509804},"h":205,"s":79,"l":62,"value":"hsl(205, 79%, 62%)"},"hsv":{"fraction":{"h":0.5692640692640693,"s":0.6581196581196581,"v":0.9176470588235294},"value":"hsv(205, 66%, 92%)","h":205,"s":66,"v":92},"name":{"value":"Blue Jeans","closest_named_hex":"#5DADEC","exact_match_name":false,"distance":284},"cmyk":{"fraction":{"c":0.6581196581196581,"m":0.27350427350427353,"y":0,"k":0.08235294117647063},"value":"cmyk(66, 27, 0, 8)","c":66,"m":27,"y":0,"k":8},"XYZ":{"fraction":{"X":0.5334156862745097,"Y":0.609752156862745,"Z":0.9577450980392157},"value":"XYZ(53, 61, 96)","X":53,"Y":61,"Z":96},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=50AAEA","named":"https://www.thecolorapi.com/id?format=svg&hex=50AAEA"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=50AAEA"}},"_embedded":{},"target":"success"}],"seed":{"hex":{"value":"#1B86D3","clean":"1B86D3"},"rgb":{"fraction":{"r":0.10588235294117647,"g":0.5254901960784314,"b":0.8274509803921568},"r":27,"g":134,"b":211,"value":"rgb(27, 134, 211)"},"hsl":{"fraction":{"h":0.569746376811594,"s":0.773109243697479,"l":0.4666666666666666},"h":205,"s":77,"l":47,"value":"hsl(205, 77%, 47%)"},"hsv":{"fraction":{"h":0.569746376811594,"s":0.8720379146919431,"v":0.8274509803921568},"value":"hsv(205, 87%, 83%)","h":205,"s":87,"v":83},"name":{"value":"Navy Blue","closest_named_hex":"#1974D2","exact_match_name":false,"distance":381},"cmyk":{"fraction":{"c":0.8720379146919431,"m":0.3649289099526066,"y":0,"k":0.1725490196078432},"value":"cmyk(87, 36, 0, 17)","c":87,"m":36,"y":0,"k":17},"XYZ":{"fraction":{"X":0.3809360784313725,"Y":0.4580831372549019,"Z":0.8511741176470589},"value":"XYZ(38, 46, 85)","X":38,"Y":46,"Z":85},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1B86D3","named":"https://www.thecolorapi.com/id?format=svg&hex=1B86D3"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1B86D3"}},"_embedded":{}},"image":{"bare":"https://www.thecolorapi.com/scheme?format=svg&named=false&hex=1B86D3&mode=monochrome-light&count=5","named":"https://www.thecolorapi.com/scheme?format=svg&hex=1B86D3&mode=monochrome-light&count=5"},"_links":{"self":"/scheme?hex=1B86D3&mode=monochrome-light&count=5","schemes":{"monochrome":"/scheme?hex=1B86D3&mode=monochrome&count=5","monochrome-dark":"/scheme?hex=1B86D3&mode=monochrome-dark&count=5","monochrome-light":"/scheme?hex=1B86D3&mode=monochrome-light&count=5","analogic":"/scheme?hex=1B86D3&mode=analogic&count=5","complement":"/scheme?hex=1B86D3&mode=complement&count=5","analogic-complement":"/scheme?hex=1B86D3&mode=analogic-complement&count=5","triad":"/scheme?hex=1B86D3&mode=triad&count=5","quad":"/scheme?hex=1B86D3&mode=quad&count=5"}},"_embedded":{}},{"mode":"analogic","count":"5","colors":[{"hex":{"value":"#1D7EC5","clean":"1D7EC5"},"rgb":{"fraction":{"r":0.11372549019607843,"g":0.49411764705882355,"b":0.7725490196078432},"r":29,"g":126,"b":197,"value":"rgb(29, 126, 197)"},"hsl":{"fraction":{"h":0.5704365079365078,"s":0.743362831858407,"l":0.4431372549019608},"h":205,"s":74,"l":44,"value":"hsl(205, 74%, 44%)"},"hsv":{"fraction":{"h":0.5704365079365078,"s":0.8527918781725888,"v":0.7725490196078432},"value":"hsv(205, 85%, 77%)","h":205,"s":85,"v":77},"name":{"value":"Navy Blue","closest_named_hex":"#1974D2","exact_match_name":false,"distance":591},"cmyk":{"fraction":{"c":0.8527918781725888,"m":0.3604060913705584,"y":0,"k":0.22745098039215683},"value":"cmyk(85, 36, 0, 23)","c":85,"m":36,"y":0,"k":23},"XYZ":{"fraction":{"X":0.3630419607843137,"Y":0.4333490196078431,"Z":0.795401568627451},"value":"XYZ(36, 43, 80)","X":36,"Y":43,"Z":80},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1D7EC5","named":"https://www.thecolorapi.com/id?format=svg&hex=1D7EC5"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1D7EC5"}},"_embedded":{},"target":"secondary"},{"hex":{"value":"#1C4DCA","clean":"1C4DCA"},"rgb":{"fraction":{"r":0.10980392156862745,"g":0.30196078431372547,"b":0.792156862745098},"r":28,"g":77,"b":202,"value":"rgb(28, 77, 202)"},"hsl":{"fraction":{"h":0.6197318007662836,"s":0.7565217391304349,"l":0.4509803921568627},"h":223,"s":76,"l":45,"value":"hsl(223, 76%, 45%)"},"hsv":{"fraction":{"h":0.6197318007662836,"s":0.8613861386138615,"v":0.792156862745098},"value":"hsv(223, 86%, 79%)","h":223,"s":86,"v":79},"name":{"value":"New Car","closest_named_hex":"#214FC6","exact_match_name":false,"distance":247},"cmyk":{"fraction":{"c":0.8613861386138613,"m":0.6188118811881187,"y":0,"k":0.207843137254902},"value":"cmyk(86, 62, 0, 21)","c":86,"m":62,"y":0,"k":21},"XYZ":{"fraction":{"X":0.29624862745098035,"Y":0.29650039215686275,"Z":0.7910580392156862},"value":"XYZ(30, 30, 79)","X":30,"Y":30,"Z":79},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1C4DCA","named":"https://www.thecolorapi.com/id?format=svg&hex=1C4DCA"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=1C4DCA"}},"_embedded":{},"target":"error"},{"hex":{"value":"#1F1CD0","clean":"1F1CD0"},"rgb":{"fraction":{"r":0.12156862745098039,"g":0.10980392156862745,"b":0.8156862745098039},"r":31,"g":28,"b":208,"value":"rgb(31, 28, 208)"},"hsl":{"fraction":{"h":0.6694444444444444,"s":0.7627118644067795,"l":0.4627450980392157},"h":241,"s":76,"l":46,"value":"hsl(241, 76%, 46%)"},"hsv":{"fraction":{"h":0.6694444444444444,"s":0.8653846153846153,"v":0.8156862745098039},"value":"hsv(241, 87%, 82%)","h":241,"s":87,"v":82},"name":{"value":"Persian Blue","closest_named_hex":"#1C39BB","exact_match_name":false,"distance":1733},"cmyk":{"fraction":{"c":0.8509615384615384,"m":0.8653846153846153,"y":0,"k":0.1843137254901961},"value":"cmyk(85, 87, 0, 18)","c":85,"m":87,"y":0,"k":18},"XYZ":{"fraction":{"X":0.23663215686274508,"Y":0.16326980392156862,"Z":0.790744705882353},"value":"XYZ(24, 16, 79)","X":24,"Y":16,"Z":79},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1F1CD0","named":"https://www.thecolorapi.com/id?format=svg&hex=1F1CD0"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=1F1CD0"}},"_embedded":{},"target":"warning"},{"hex":{"value":"#561BD6","clean":"561BD6"},"rgb":{"fraction":{"r":0.33725490196078434,"g":0.10588235294117647,"b":0.8392156862745098},"r":86,"g":27,"b":214,"value":"rgb(86, 27, 214)"},"hsl":{"fraction":{"h":0.7192513368983957,"s":0.7759336099585064,"l":0.4725490196078431},"h":259,"s":78,"l":47,"value":"hsl(259, 78%, 47%)"},"hsv":{"fraction":{"h":0.7192513368983957,"s":0.8738317757009346,"v":0.8392156862745098},"value":"hsv(259, 87%, 84%)","h":259,"s":87,"v":84},"name":{"value":"Purple Heart","closest_named_hex":"#652DC1","exact_match_name":false,"distance":4052},"cmyk":{"fraction":{"c":0.5981308411214953,"m":0.8738317757009346,"y":0,"k":0.16078431372549018},"value":"cmyk(60, 87, 0, 16)","c":60,"m":87,"y":0,"k":16},"XYZ":{"fraction":{"X":0.3284258823529412,"Y":0.20801882352941178,"Z":0.816804705882353},"value":"XYZ(33, 21, 82)","X":33,"Y":21,"Z":82},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=561BD6","named":"https://www.thecolorapi.com/id?format=svg&hex=561BD6"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=561BD6"}},"_embedded":{},"target":"info"},{"hex":{"value":"#921ADB","clean":"921ADB"},"rgb":{"fraction":{"r":0.5725490196078431,"g":0.10196078431372549,"b":0.8588235294117647},"r":146,"g":26,"b":219,"value":"rgb(146, 26, 219)"},"hsl":{"fraction":{"h":0.7702936096718479,"s":0.7877551020408163,"l":0.48039215686274506},"h":277,"s":79,"l":48,"value":"hsl(277, 79%, 48%)"},"hsv":{"fraction":{"h":0.7702936096718479,"s":0.8812785388127854,"v":0.8588235294117647},"value":"hsv(277, 88%, 86%)","h":277,"s":88,"v":86},"name":{"value":"Purple Heart","closest_named_hex":"#652DC1","exact_match_name":false,"distance":6808},"cmyk":{"fraction":{"c":0.3333333333333333,"m":0.8812785388127854,"y":0,"k":0.14117647058823535},"value":"cmyk(33, 88, 0, 14)","c":33,"m":88,"y":0,"k":14},"XYZ":{"fraction":{"X":0.4275980392156862,"Y":0.25665333333333334,"Z":0.8395156862745098},"value":"XYZ(43, 26, 84)","X":43,"Y":26,"Z":84},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=921ADB","named":"https://www.thecolorapi.com/id?format=svg&hex=921ADB"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=921ADB"}},"_embedded":{},"target":"success"}],"seed":{"hex":{"value":"#1B86D3","clean":"1B86D3"},"rgb":{"fraction":{"r":0.10588235294117647,"g":0.5254901960784314,"b":0.8274509803921568},"r":27,"g":134,"b":211,"value":"rgb(27, 134, 211)"},"hsl":{"fraction":{"h":0.569746376811594,"s":0.773109243697479,"l":0.4666666666666666},"h":205,"s":77,"l":47,"value":"hsl(205, 77%, 47%)"},"hsv":{"fraction":{"h":0.569746376811594,"s":0.8720379146919431,"v":0.8274509803921568},"value":"hsv(205, 87%, 83%)","h":205,"s":87,"v":83},"name":{"value":"Navy Blue","closest_named_hex":"#1974D2","exact_match_name":false,"distance":381},"cmyk":{"fraction":{"c":0.8720379146919431,"m":0.3649289099526066,"y":0,"k":0.1725490196078432},"value":"cmyk(87, 36, 0, 17)","c":87,"m":36,"y":0,"k":17},"XYZ":{"fraction":{"X":0.3809360784313725,"Y":0.4580831372549019,"Z":0.8511741176470589},"value":"XYZ(38, 46, 85)","X":38,"Y":46,"Z":85},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1B86D3","named":"https://www.thecolorapi.com/id?format=svg&hex=1B86D3"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1B86D3"}},"_embedded":{}},"image":{"bare":"https://www.thecolorapi.com/scheme?format=svg&named=false&hex=1B86D3&mode=analogic&count=5","named":"https://www.thecolorapi.com/scheme?format=svg&hex=1B86D3&mode=analogic&count=5"},"_links":{"self":"/scheme?hex=1B86D3&mode=analogic&count=5","schemes":{"monochrome":"/scheme?hex=1B86D3&mode=monochrome&count=5","monochrome-dark":"/scheme?hex=1B86D3&mode=monochrome-dark&count=5","monochrome-light":"/scheme?hex=1B86D3&mode=monochrome-light&count=5","analogic":"/scheme?hex=1B86D3&mode=analogic&count=5","complement":"/scheme?hex=1B86D3&mode=complement&count=5","analogic-complement":"/scheme?hex=1B86D3&mode=analogic-complement&count=5","triad":"/scheme?hex=1B86D3&mode=triad&count=5","quad":"/scheme?hex=1B86D3&mode=quad&count=5"}},"_embedded":{}},{"mode":"complement","count":"5","colors":[{"hex":{"value":"#B05B1E","clean":"B05B1E"},"rgb":{"fraction":{"r":0.6901960784313725,"g":0.3568627450980392,"b":0.11764705882352941},"r":176,"g":91,"b":30,"value":"rgb(176, 91, 30)"},"hsl":{"fraction":{"h":0.0696347031963469,"s":0.7087378640776698,"l":0.403921568627451},"h":25,"s":71,"l":40,"value":"hsl(25, 71%, 40%)"},"hsv":{"fraction":{"h":0.0696347031963469,"s":0.8295454545454545,"v":0.6901960784313725},"value":"hsv(25, 83%, 69%)","h":25,"s":83,"v":69},"name":{"value":"Desert","closest_named_hex":"#AE6020","exact_match_name":false,"distance":91},"cmyk":{"fraction":{"c":0,"m":0.48295454545454536,"y":0.8295454545454545,"k":0.30980392156862746},"value":"cmyk(0, 48, 83, 31)","c":0,"m":48,"y":83,"k":31},"XYZ":{"fraction":{"X":0.4334862745098039,"Y":0.4104580392156863,"Z":0.16768235294117648},"value":"XYZ(43, 41, 17)","X":43,"Y":41,"Z":17},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=B05B1E","named":"https://www.thecolorapi.com/id?format=svg&hex=B05B1E"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=B05B1E"}},"_embedded":{},"target":"secondary"},{"hex":{"value":"#BD601E","clean":"BD601E"},"rgb":{"fraction":{"r":0.7411764705882353,"g":0.3764705882352941,"b":0.11764705882352941},"r":189,"g":96,"b":30,"value":"rgb(189, 96, 30)"},"hsl":{"fraction":{"h":0.06918238993710701,"s":0.7260273972602739,"l":0.4294117647058824},"h":25,"s":73,"l":43,"value":"hsl(25, 73%, 43%)"},"hsv":{"fraction":{"h":0.06918238993710701,"s":0.8412698412698413,"v":0.7411764705882353},"value":"hsv(25, 84%, 74%)","h":25,"s":84,"v":74},"name":{"value":"Bourbon","closest_named_hex":"#BA6F1E","exact_match_name":false,"distance":288},"cmyk":{"fraction":{"c":0,"m":0.4920634920634921,"y":0.8412698412698413,"k":0.2588235294117647},"value":"cmyk(0, 49, 84, 26)","c":0,"m":49,"y":84,"k":26},"XYZ":{"fraction":{"X":0.46152235294117644,"Y":0.43532,"Z":0.17100352941176472},"value":"XYZ(46, 44, 17)","X":46,"Y":44,"Z":17},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=BD601E","named":"https://www.thecolorapi.com/id?format=svg&hex=BD601E"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=BD601E"}},"_embedded":{},"target":"error"},{"hex":{"value":"#1C82CB","clean":"1C82CB"},"rgb":{"fraction":{"r":0.10980392156862745,"g":0.5098039215686274,"b":0.796078431372549},"r":28,"g":130,"b":203,"value":"rgb(28, 130, 203)"},"hsl":{"fraction":{"h":0.5695238095238094,"s":0.7575757575757577,"l":0.4529411764705882},"h":205,"s":76,"l":45,"value":"hsl(205, 76%, 45%)"},"hsv":{"fraction":{"h":0.5695238095238094,"s":0.8620689655172414,"v":0.796078431372549},"value":"hsv(205, 86%, 80%)","h":205,"s":86,"v":80},"name":{"value":"Navy Blue","closest_named_hex":"#1974D2","exact_match_name":false,"distance":392},"cmyk":{"fraction":{"c":0.8620689655172413,"m":0.35960591133004927,"y":0,"k":0.20392156862745103},"value":"cmyk(86, 36, 0, 20)","c":86,"m":36,"y":0,"k":20},"XYZ":{"fraction":{"X":0.3712811764705882,"Y":0.44543294117647053,"Z":0.8195603921568627},"value":"XYZ(37, 45, 82)","X":37,"Y":45,"Z":82},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1C82CB","named":"https://www.thecolorapi.com/id?format=svg&hex=1C82CB"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1C82CB"}},"_embedded":{},"target":"warning"},{"hex":{"value":"#1B8AD9","clean":"1B8AD9"},"rgb":{"fraction":{"r":0.10588235294117647,"g":0.5411764705882353,"b":0.8509803921568627},"r":27,"g":138,"b":217,"value":"rgb(27, 138, 217)"},"hsl":{"fraction":{"h":0.5692982456140351,"s":0.778688524590164,"l":0.4784313725490196},"h":205,"s":78,"l":48,"value":"hsl(205, 78%, 48%)"},"hsv":{"fraction":{"h":0.5692982456140351,"s":0.8755760368663595,"v":0.8509803921568627},"value":"hsv(205, 88%, 85%)","h":205,"s":88,"v":85},"name":{"value":"Navy Blue","closest_named_hex":"#1974D2","exact_match_name":false,"distance":609},"cmyk":{"fraction":{"c":0.8755760368663595,"m":0.36405529953917054,"y":0,"k":0.14901960784313728},"value":"cmyk(88, 36, 0, 15)","c":88,"m":36,"y":0,"k":15},"XYZ":{"fraction":{"X":0.3907925490196078,"Y":0.4710007843137254,"Z":0.8754086274509804},"value":"XYZ(39, 47, 88)","X":39,"Y":47,"Z":88},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1B8AD9","named":"https://www.thecolorapi.com/id?format=svg&hex=1B8AD9"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1B8AD9"}},"_embedded":{},"target":"info"},{"hex":{"value":"#1B91E6","clean":"1B91E6"},"rgb":{"fraction":{"r":0.10588235294117647,"g":0.5686274509803921,"b":0.9019607843137255},"r":27,"g":145,"b":230,"value":"rgb(27, 145, 230)"},"hsl":{"fraction":{"h":0.5697865353037769,"s":0.8023715415019762,"l":0.503921568627451},"h":205,"s":80,"l":50,"value":"hsl(205, 80%, 50%)"},"hsv":{"fraction":{"h":0.5697865353037769,"s":0.8826086956521739,"v":0.9019607843137255},"value":"hsv(205, 88%, 90%)","h":205,"s":88,"v":90},"name":{"value":"Cerulean","closest_named_hex":"#1DACD6","exact_match_name":false,"distance":1415},"cmyk":{"fraction":{"c":0.8826086956521739,"m":0.3695652173913044,"y":0,"k":0.0980392156862745},"value":"cmyk(88, 37, 0, 10)","c":88,"m":37,"y":0,"k":10},"XYZ":{"fraction":{"X":0.4098109803921568,"Y":0.49431450980392155,"Z":0.9271376470588236},"value":"XYZ(41, 49, 93)","X":41,"Y":49,"Z":93},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1B91E6","named":"https://www.thecolorapi.com/id?format=svg&hex=1B91E6"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1B91E6"}},"_embedded":{},"target":"success"}],"seed":{"hex":{"value":"#1B86D3","clean":"1B86D3"},"rgb":{"fraction":{"r":0.10588235294117647,"g":0.5254901960784314,"b":0.8274509803921568},"r":27,"g":134,"b":211,"value":"rgb(27, 134, 211)"},"hsl":{"fraction":{"h":0.569746376811594,"s":0.773109243697479,"l":0.4666666666666666},"h":205,"s":77,"l":47,"value":"hsl(205, 77%, 47%)"},"hsv":{"fraction":{"h":0.569746376811594,"s":0.8720379146919431,"v":0.8274509803921568},"value":"hsv(205, 87%, 83%)","h":205,"s":87,"v":83},"name":{"value":"Navy Blue","closest_named_hex":"#1974D2","exact_match_name":false,"distance":381},"cmyk":{"fraction":{"c":0.8720379146919431,"m":0.3649289099526066,"y":0,"k":0.1725490196078432},"value":"cmyk(87, 36, 0, 17)","c":87,"m":36,"y":0,"k":17},"XYZ":{"fraction":{"X":0.3809360784313725,"Y":0.4580831372549019,"Z":0.8511741176470589},"value":"XYZ(38, 46, 85)","X":38,"Y":46,"Z":85},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1B86D3","named":"https://www.thecolorapi.com/id?format=svg&hex=1B86D3"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1B86D3"}},"_embedded":{}},"image":{"bare":"https://www.thecolorapi.com/scheme?format=svg&named=false&hex=1B86D3&mode=complement&count=5","named":"https://www.thecolorapi.com/scheme?format=svg&hex=1B86D3&mode=complement&count=5"},"_links":{"self":"/scheme?hex=1B86D3&mode=complement&count=5","schemes":{"monochrome":"/scheme?hex=1B86D3&mode=monochrome&count=5","monochrome-dark":"/scheme?hex=1B86D3&mode=monochrome-dark&count=5","monochrome-light":"/scheme?hex=1B86D3&mode=monochrome-light&count=5","analogic":"/scheme?hex=1B86D3&mode=analogic&count=5","complement":"/scheme?hex=1B86D3&mode=complement&count=5","analogic-complement":"/scheme?hex=1B86D3&mode=analogic-complement&count=5","triad":"/scheme?hex=1B86D3&mode=triad&count=5","quad":"/scheme?hex=1B86D3&mode=quad&count=5"}},"_embedded":{}},{"mode":"analogic-complement","count":"5","colors":[{"hex":{"value":"#8F4E20","clean":"8F4E20"},"rgb":{"fraction":{"r":0.5607843137254902,"g":0.3058823529411765,"b":0.12549019607843137},"r":143,"g":78,"b":32,"value":"rgb(143, 78, 32)"},"hsl":{"fraction":{"h":0.06906906906906907,"s":0.6342857142857143,"l":0.3431372549019608},"h":25,"s":63,"l":34,"value":"hsl(25, 63%, 34%)"},"hsv":{"fraction":{"h":0.06906906906906907,"s":0.7762237762237763,"v":0.5607843137254902},"value":"hsv(25, 78%, 56%)","h":25,"s":78,"v":56},"name":{"value":"Rope","closest_named_hex":"#8E4D1E","exact_match_name":false,"distance":58},"cmyk":{"fraction":{"c":0,"m":0.45454545454545453,"y":0.7762237762237763,"k":0.4392156862745098},"value":"cmyk(0, 45, 78, 44)","c":0,"m":45,"y":78,"k":44},"XYZ":{"fraction":{"X":0.3633019607843137,"Y":0.34705019607843135,"Z":0.16656274509803923},"value":"XYZ(36, 35, 17)","X":36,"Y":35,"Z":17},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=8F4E20","named":"https://www.thecolorapi.com/id?format=svg&hex=8F4E20"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=8F4E20"}},"_embedded":{},"target":"secondary"},{"hex":{"value":"#A8591F","clean":"A8591F"},"rgb":{"fraction":{"r":0.6588235294117647,"g":0.34901960784313724,"b":0.12156862745098039},"r":168,"g":89,"b":31,"value":"rgb(168, 89, 31)"},"hsl":{"fraction":{"h":0.07055961070559624,"s":0.6884422110552764,"l":0.39019607843137255},"h":25,"s":69,"l":39,"value":"hsl(25, 69%, 39%)"},"hsv":{"fraction":{"h":0.07055961070559624,"s":0.8154761904761905,"v":0.6588235294117647},"value":"hsv(25, 82%, 66%)","h":25,"s":82,"v":66},"name":{"value":"Desert","closest_named_hex":"#AE6020","exact_match_name":false,"distance":126},"cmyk":{"fraction":{"c":0,"m":0.47023809523809523,"y":0.8154761904761905,"k":0.3411764705882353},"value":"cmyk(0, 47, 82, 34)","c":0,"m":47,"y":82,"k":34},"XYZ":{"fraction":{"X":0.41845137254901954,"Y":0.39846196078431373,"Z":0.16986941176470588},"value":"XYZ(42, 40, 17)","X":42,"Y":40,"Z":17},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=A8591F","named":"https://www.thecolorapi.com/id?format=svg&hex=A8591F"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=A8591F"}},"_embedded":{},"target":"error"},{"hex":{"value":"#551CD0","clean":"551CD0"},"rgb":{"fraction":{"r":0.3333333333333333,"g":0.10980392156862745,"b":0.8156862745098039},"r":85,"g":28,"b":208,"value":"rgb(85, 28, 208)"},"hsl":{"fraction":{"h":0.7194444444444443,"s":0.7627118644067795,"l":0.4627450980392157},"h":259,"s":76,"l":46,"value":"hsl(259, 76%, 46%)"},"hsv":{"fraction":{"h":0.7194444444444443,"s":0.8653846153846153,"v":0.8156862745098039},"value":"hsv(259, 87%, 82%)","h":259,"s":87,"v":82},"name":{"value":"Purple Heart","closest_named_hex":"#652DC1","exact_match_name":false,"distance":3382},"cmyk":{"fraction":{"c":0.591346153846154,"m":0.8653846153846153,"y":0,"k":0.1843137254901961},"value":"cmyk(59, 87, 0, 18)","c":59,"m":87,"y":0,"k":18},"XYZ":{"fraction":{"X":0.3239639215686274,"Y":0.20829098039215682,"Z":0.7948317647058823},"value":"XYZ(32, 21, 79)","X":32,"Y":21,"Z":79},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=551CD0","named":"https://www.thecolorapi.com/id?format=svg&hex=551CD0"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=551CD0"}},"_embedded":{},"target":"warning"},{"hex":{"value":"#AA1BD6","clean":"AA1BD6"},"rgb":{"fraction":{"r":0.6666666666666666,"g":0.10588235294117647,"b":0.8392156862745098},"r":170,"g":27,"b":214,"value":"rgb(170, 27, 214)"},"hsl":{"fraction":{"h":0.7941176470588235,"s":0.7759336099585064,"l":0.4725490196078431},"h":286,"s":78,"l":47,"value":"hsl(286, 78%, 47%)"},"hsv":{"fraction":{"h":0.7941176470588235,"s":0.8738317757009346,"v":0.8392156862745098},"value":"hsv(286, 87%, 84%)","h":286,"s":87,"v":84},"name":{"value":"Purple Heart","closest_named_hex":"#652DC1","exact_match_name":false,"distance":9082},"cmyk":{"fraction":{"c":0.20560747663551407,"m":0.8738317757009346,"y":0,"k":0.16078431372549018},"value":"cmyk(21, 87, 0, 16)","c":21,"m":87,"y":0,"k":16},"XYZ":{"fraction":{"X":0.464275294117647,"Y":0.27805176470588233,"Z":0.8231623529411766},"value":"XYZ(46, 28, 82)","X":46,"Y":28,"Z":82},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=AA1BD6","named":"https://www.thecolorapi.com/id?format=svg&hex=AA1BD6"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=AA1BD6"}},"_embedded":{},"target":"info"},{"hex":{"value":"#DB1AB1","clean":"DB1AB1"},"rgb":{"fraction":{"r":0.8588235294117647,"g":0.10196078431372549,"b":0.6941176470588235},"r":219,"g":26,"b":177,"value":"rgb(219, 26, 177)"},"hsl":{"fraction":{"h":0.8696027633851469,"s":0.7877551020408163,"l":0.48039215686274506},"h":313,"s":79,"l":48,"value":"hsl(313, 79%, 48%)"},"hsv":{"fraction":{"h":0.8696027633851469,"s":0.8812785388127854,"v":0.8588235294117647},"value":"hsv(313, 88%, 86%)","h":313,"s":88,"v":86},"name":{"value":"Frostbite","closest_named_hex":"#E936A7","exact_match_name":false,"distance":2092},"cmyk":{"fraction":{"c":0,"m":0.8812785388127854,"y":0.1917808219178082,"k":0.14117647058823535},"value":"cmyk(0, 88, 19, 14)","c":0,"m":88,"y":19,"k":14},"XYZ":{"fraction":{"X":0.5159282352941176,"Y":0.3056235294117647,"Z":0.6884878431372549},"value":"XYZ(52, 31, 69)","X":52,"Y":31,"Z":69},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=DB1AB1","named":"https://www.thecolorapi.com/id?format=svg&hex=DB1AB1"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=DB1AB1"}},"_embedded":{},"target":"success"}],"seed":{"hex":{"value":"#1B86D3","clean":"1B86D3"},"rgb":{"fraction":{"r":0.10588235294117647,"g":0.5254901960784314,"b":0.8274509803921568},"r":27,"g":134,"b":211,"value":"rgb(27, 134, 211)"},"hsl":{"fraction":{"h":0.569746376811594,"s":0.773109243697479,"l":0.4666666666666666},"h":205,"s":77,"l":47,"value":"hsl(205, 77%, 47%)"},"hsv":{"fraction":{"h":0.569746376811594,"s":0.8720379146919431,"v":0.8274509803921568},"value":"hsv(205, 87%, 83%)","h":205,"s":87,"v":83},"name":{"value":"Navy Blue","closest_named_hex":"#1974D2","exact_match_name":false,"distance":381},"cmyk":{"fraction":{"c":0.8720379146919431,"m":0.3649289099526066,"y":0,"k":0.1725490196078432},"value":"cmyk(87, 36, 0, 17)","c":87,"m":36,"y":0,"k":17},"XYZ":{"fraction":{"X":0.3809360784313725,"Y":0.4580831372549019,"Z":0.8511741176470589},"value":"XYZ(38, 46, 85)","X":38,"Y":46,"Z":85},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1B86D3","named":"https://www.thecolorapi.com/id?format=svg&hex=1B86D3"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1B86D3"}},"_embedded":{}},"image":{"bare":"https://www.thecolorapi.com/scheme?format=svg&named=false&hex=1B86D3&mode=analogic-complement&count=5","named":"https://www.thecolorapi.com/scheme?format=svg&hex=1B86D3&mode=analogic-complement&count=5"},"_links":{"self":"/scheme?hex=1B86D3&mode=analogic-complement&count=5","schemes":{"monochrome":"/scheme?hex=1B86D3&mode=monochrome&count=5","monochrome-dark":"/scheme?hex=1B86D3&mode=monochrome-dark&count=5","monochrome-light":"/scheme?hex=1B86D3&mode=monochrome-light&count=5","analogic":"/scheme?hex=1B86D3&mode=analogic&count=5","complement":"/scheme?hex=1B86D3&mode=complement&count=5","analogic-complement":"/scheme?hex=1B86D3&mode=analogic-complement&count=5","triad":"/scheme?hex=1B86D3&mode=triad&count=5","quad":"/scheme?hex=1B86D3&mode=quad&count=5"}},"_embedded":{}},{"mode":"triad","count":"5","colors":[{"hex":{"value":"#B01E76","clean":"B01E76"},"rgb":{"fraction":{"r":0.6901960784313725,"g":0.11764705882352941,"b":0.4627450980392157},"r":176,"g":30,"b":118,"value":"rgb(176, 30, 118)"},"hsl":{"fraction":{"h":0.8995433789954338,"s":0.7087378640776698,"l":0.403921568627451},"h":324,"s":71,"l":40,"value":"hsl(324, 71%, 40%)"},"hsv":{"fraction":{"h":0.8995433789954338,"s":0.8295454545454545,"v":0.6901960784313725},"value":"hsv(324, 83%, 69%)","h":324,"s":83,"v":69},"name":{"value":"Red Violet","closest_named_hex":"#C71585","exact_match_name":false,"distance":2287},"cmyk":{"fraction":{"c":0,"m":0.8295454545454545,"y":0.32954545454545453,"k":0.30980392156862746},"value":"cmyk(0, 83, 33, 31)","c":0,"m":83,"y":33,"k":31},"XYZ":{"fraction":{"X":0.4102329411764706,"Y":0.26428705882352943,"Z":0.4671835294117647},"value":"XYZ(41, 26, 47)","X":41,"Y":26,"Z":47},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=B01E76","named":"https://www.thecolorapi.com/id?format=svg&hex=B01E76"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=B01E76"}},"_embedded":{},"target":"secondary"},{"hex":{"value":"#77BD1E","clean":"77BD1E"},"rgb":{"fraction":{"r":0.4666666666666667,"g":0.7411764705882353,"b":0.11764705882352941},"r":119,"g":189,"b":30,"value":"rgb(119, 189, 30)"},"hsl":{"fraction":{"h":0.24004192872117391,"s":0.7260273972602739,"l":0.4294117647058824},"h":86,"s":73,"l":43,"value":"hsl(86, 73%, 43%)"},"hsv":{"fraction":{"h":0.24004192872117391,"s":0.8412698412698413,"v":0.7411764705882353},"value":"hsv(86, 84%, 74%)","h":86,"s":84,"v":74},"name":{"value":"Lima","closest_named_hex":"#76BD17","exact_match_name":false,"distance":462},"cmyk":{"fraction":{"c":0.3703703703703704,"m":0,"y":0.8412698412698413,"k":0.2588235294117647},"value":"cmyk(37, 0, 84, 26)","c":37,"m":0,"y":84,"k":26},"XYZ":{"fraction":{"X":0.4787333333333334,"Y":0.6377968627450982,"Z":0.20917843137254905},"value":"XYZ(48, 64, 21)","X":48,"Y":64,"Z":21},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=77BD1E","named":"https://www.thecolorapi.com/id?format=svg&hex=77BD1E"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=77BD1E"}},"_embedded":{},"target":"error"},{"hex":{"value":"#1C82CB","clean":"1C82CB"},"rgb":{"fraction":{"r":0.10980392156862745,"g":0.5098039215686274,"b":0.796078431372549},"r":28,"g":130,"b":203,"value":"rgb(28, 130, 203)"},"hsl":{"fraction":{"h":0.5695238095238094,"s":0.7575757575757577,"l":0.4529411764705882},"h":205,"s":76,"l":45,"value":"hsl(205, 76%, 45%)"},"hsv":{"fraction":{"h":0.5695238095238094,"s":0.8620689655172414,"v":0.796078431372549},"value":"hsv(205, 86%, 80%)","h":205,"s":86,"v":80},"name":{"value":"Navy Blue","closest_named_hex":"#1974D2","exact_match_name":false,"distance":392},"cmyk":{"fraction":{"c":0.8620689655172413,"m":0.35960591133004927,"y":0,"k":0.20392156862745103},"value":"cmyk(86, 36, 0, 20)","c":86,"m":36,"y":0,"k":20},"XYZ":{"fraction":{"X":0.3712811764705882,"Y":0.44543294117647053,"Z":0.8195603921568627},"value":"XYZ(37, 45, 82)","X":37,"Y":45,"Z":82},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1C82CB","named":"https://www.thecolorapi.com/id?format=svg&hex=1C82CB"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1C82CB"}},"_embedded":{},"target":"warning"},{"hex":{"value":"#1B8AD9","clean":"1B8AD9"},"rgb":{"fraction":{"r":0.10588235294117647,"g":0.5411764705882353,"b":0.8509803921568627},"r":27,"g":138,"b":217,"value":"rgb(27, 138, 217)"},"hsl":{"fraction":{"h":0.5692982456140351,"s":0.778688524590164,"l":0.4784313725490196},"h":205,"s":78,"l":48,"value":"hsl(205, 78%, 48%)"},"hsv":{"fraction":{"h":0.5692982456140351,"s":0.8755760368663595,"v":0.8509803921568627},"value":"hsv(205, 88%, 85%)","h":205,"s":88,"v":85},"name":{"value":"Navy Blue","closest_named_hex":"#1974D2","exact_match_name":false,"distance":609},"cmyk":{"fraction":{"c":0.8755760368663595,"m":0.36405529953917054,"y":0,"k":0.14901960784313728},"value":"cmyk(88, 36, 0, 15)","c":88,"m":36,"y":0,"k":15},"XYZ":{"fraction":{"X":0.3907925490196078,"Y":0.4710007843137254,"Z":0.8754086274509804},"value":"XYZ(39, 47, 88)","X":39,"Y":47,"Z":88},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1B8AD9","named":"https://www.thecolorapi.com/id?format=svg&hex=1B8AD9"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1B8AD9"}},"_embedded":{},"target":"info"},{"hex":{"value":"#1B91E6","clean":"1B91E6"},"rgb":{"fraction":{"r":0.10588235294117647,"g":0.5686274509803921,"b":0.9019607843137255},"r":27,"g":145,"b":230,"value":"rgb(27, 145, 230)"},"hsl":{"fraction":{"h":0.5697865353037769,"s":0.8023715415019762,"l":0.503921568627451},"h":205,"s":80,"l":50,"value":"hsl(205, 80%, 50%)"},"hsv":{"fraction":{"h":0.5697865353037769,"s":0.8826086956521739,"v":0.9019607843137255},"value":"hsv(205, 88%, 90%)","h":205,"s":88,"v":90},"name":{"value":"Cerulean","closest_named_hex":"#1DACD6","exact_match_name":false,"distance":1415},"cmyk":{"fraction":{"c":0.8826086956521739,"m":0.3695652173913044,"y":0,"k":0.0980392156862745},"value":"cmyk(88, 37, 0, 10)","c":88,"m":37,"y":0,"k":10},"XYZ":{"fraction":{"X":0.4098109803921568,"Y":0.49431450980392155,"Z":0.9271376470588236},"value":"XYZ(41, 49, 93)","X":41,"Y":49,"Z":93},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1B91E6","named":"https://www.thecolorapi.com/id?format=svg&hex=1B91E6"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1B91E6"}},"_embedded":{},"target":"success"}],"seed":{"hex":{"value":"#1B86D3","clean":"1B86D3"},"rgb":{"fraction":{"r":0.10588235294117647,"g":0.5254901960784314,"b":0.8274509803921568},"r":27,"g":134,"b":211,"value":"rgb(27, 134, 211)"},"hsl":{"fraction":{"h":0.569746376811594,"s":0.773109243697479,"l":0.4666666666666666},"h":205,"s":77,"l":47,"value":"hsl(205, 77%, 47%)"},"hsv":{"fraction":{"h":0.569746376811594,"s":0.8720379146919431,"v":0.8274509803921568},"value":"hsv(205, 87%, 83%)","h":205,"s":87,"v":83},"name":{"value":"Navy Blue","closest_named_hex":"#1974D2","exact_match_name":false,"distance":381},"cmyk":{"fraction":{"c":0.8720379146919431,"m":0.3649289099526066,"y":0,"k":0.1725490196078432},"value":"cmyk(87, 36, 0, 17)","c":87,"m":36,"y":0,"k":17},"XYZ":{"fraction":{"X":0.3809360784313725,"Y":0.4580831372549019,"Z":0.8511741176470589},"value":"XYZ(38, 46, 85)","X":38,"Y":46,"Z":85},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1B86D3","named":"https://www.thecolorapi.com/id?format=svg&hex=1B86D3"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1B86D3"}},"_embedded":{}},"image":{"bare":"https://www.thecolorapi.com/scheme?format=svg&named=false&hex=1B86D3&mode=triad&count=5","named":"https://www.thecolorapi.com/scheme?format=svg&hex=1B86D3&mode=triad&count=5"},"_links":{"self":"/scheme?hex=1B86D3&mode=triad&count=5","schemes":{"monochrome":"/scheme?hex=1B86D3&mode=monochrome&count=5","monochrome-dark":"/scheme?hex=1B86D3&mode=monochrome-dark&count=5","monochrome-light":"/scheme?hex=1B86D3&mode=monochrome-light&count=5","analogic":"/scheme?hex=1B86D3&mode=analogic&count=5","complement":"/scheme?hex=1B86D3&mode=complement&count=5","analogic-complement":"/scheme?hex=1B86D3&mode=analogic-complement&count=5","triad":"/scheme?hex=1B86D3&mode=triad&count=5","quad":"/scheme?hex=1B86D3&mode=quad&count=5"}},"_embedded":{}},{"mode":"quad","count":"5","colors":[{"hex":{"value":"#A41EB0","clean":"A41EB0"},"rgb":{"fraction":{"r":0.6431372549019608,"g":0.11764705882352941,"b":0.6901960784313725},"r":164,"g":30,"b":176,"value":"rgb(164, 30, 176)"},"hsl":{"fraction":{"h":0.819634703196347,"s":0.7087378640776698,"l":0.403921568627451},"h":295,"s":71,"l":40,"value":"hsl(295, 71%, 40%)"},"hsv":{"fraction":{"h":0.819634703196347,"s":0.8295454545454545,"v":0.6901960784313725},"value":"hsv(295, 83%, 69%)","h":295,"s":83,"v":69},"name":{"value":"Seance","closest_named_hex":"#731E8F","exact_match_name":false,"distance":4588},"cmyk":{"fraction":{"c":0.06818181818181811,"m":0.8295454545454545,"y":0,"k":0.30980392156862746},"value":"cmyk(7, 83, 0, 31)","c":7,"m":83,"y":0,"k":31},"XYZ":{"fraction":{"X":0.4318807843137255,"Y":0.27070431372549025,"Z":0.6824674509803921},"value":"XYZ(43, 27, 68)","X":43,"Y":27,"Z":68},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=A41EB0","named":"https://www.thecolorapi.com/id?format=svg&hex=A41EB0"},"contrast":{"value":"#ffffff"},"_links":{"self":{"href":"/id?hex=A41EB0"}},"_embedded":{},"target":"secondary"},{"hex":{"value":"#BD601E","clean":"BD601E"},"rgb":{"fraction":{"r":0.7411764705882353,"g":0.3764705882352941,"b":0.11764705882352941},"r":189,"g":96,"b":30,"value":"rgb(189, 96, 30)"},"hsl":{"fraction":{"h":0.06918238993710701,"s":0.7260273972602739,"l":0.4294117647058824},"h":25,"s":73,"l":43,"value":"hsl(25, 73%, 43%)"},"hsv":{"fraction":{"h":0.06918238993710701,"s":0.8412698412698413,"v":0.7411764705882353},"value":"hsv(25, 84%, 74%)","h":25,"s":84,"v":74},"name":{"value":"Bourbon","closest_named_hex":"#BA6F1E","exact_match_name":false,"distance":288},"cmyk":{"fraction":{"c":0,"m":0.4920634920634921,"y":0.8412698412698413,"k":0.2588235294117647},"value":"cmyk(0, 49, 84, 26)","c":0,"m":49,"y":84,"k":26},"XYZ":{"fraction":{"X":0.46152235294117644,"Y":0.43532,"Z":0.17100352941176472},"value":"XYZ(46, 44, 17)","X":46,"Y":44,"Z":17},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=BD601E","named":"https://www.thecolorapi.com/id?format=svg&hex=BD601E"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=BD601E"}},"_embedded":{},"target":"error"},{"hex":{"value":"#2BCB1C","clean":"2BCB1C"},"rgb":{"fraction":{"r":0.16862745098039217,"g":0.796078431372549,"b":0.10980392156862745},"r":43,"g":203,"b":28,"value":"rgb(43, 203, 28)"},"hsl":{"fraction":{"h":0.31904761904761914,"s":0.7575757575757577,"l":0.4529411764705882},"h":115,"s":76,"l":45,"value":"hsl(115, 76%, 45%)"},"hsv":{"fraction":{"h":0.31904761904761914,"s":0.8620689655172414,"v":0.796078431372549},"value":"hsv(115, 86%, 80%)","h":115,"s":86,"v":80},"name":{"value":"Slimy Green","closest_named_hex":"#299617","exact_match_name":false,"distance":4610},"cmyk":{"fraction":{"c":0.7881773399014778,"m":0,"y":0.8620689655172413,"k":0.20392156862745103},"value":"cmyk(79, 0, 86, 20)","c":79,"m":0,"y":86,"k":20},"XYZ":{"fraction":{"X":0.37403921568627446,"Y":0.6131333333333333,"Z":0.2025156862745098},"value":"XYZ(37, 61, 20)","X":37,"Y":61,"Z":20},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=2BCB1C","named":"https://www.thecolorapi.com/id?format=svg&hex=2BCB1C"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=2BCB1C"}},"_embedded":{},"target":"warning"},{"hex":{"value":"#1B8AD9","clean":"1B8AD9"},"rgb":{"fraction":{"r":0.10588235294117647,"g":0.5411764705882353,"b":0.8509803921568627},"r":27,"g":138,"b":217,"value":"rgb(27, 138, 217)"},"hsl":{"fraction":{"h":0.5692982456140351,"s":0.778688524590164,"l":0.4784313725490196},"h":205,"s":78,"l":48,"value":"hsl(205, 78%, 48%)"},"hsv":{"fraction":{"h":0.5692982456140351,"s":0.8755760368663595,"v":0.8509803921568627},"value":"hsv(205, 88%, 85%)","h":205,"s":88,"v":85},"name":{"value":"Navy Blue","closest_named_hex":"#1974D2","exact_match_name":false,"distance":609},"cmyk":{"fraction":{"c":0.8755760368663595,"m":0.36405529953917054,"y":0,"k":0.14901960784313728},"value":"cmyk(88, 36, 0, 15)","c":88,"m":36,"y":0,"k":15},"XYZ":{"fraction":{"X":0.3907925490196078,"Y":0.4710007843137254,"Z":0.8754086274509804},"value":"XYZ(39, 47, 88)","X":39,"Y":47,"Z":88},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1B8AD9","named":"https://www.thecolorapi.com/id?format=svg&hex=1B8AD9"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1B8AD9"}},"_embedded":{},"target":"info"},{"hex":{"value":"#1B91E6","clean":"1B91E6"},"rgb":{"fraction":{"r":0.10588235294117647,"g":0.5686274509803921,"b":0.9019607843137255},"r":27,"g":145,"b":230,"value":"rgb(27, 145, 230)"},"hsl":{"fraction":{"h":0.5697865353037769,"s":0.8023715415019762,"l":0.503921568627451},"h":205,"s":80,"l":50,"value":"hsl(205, 80%, 50%)"},"hsv":{"fraction":{"h":0.5697865353037769,"s":0.8826086956521739,"v":0.9019607843137255},"value":"hsv(205, 88%, 90%)","h":205,"s":88,"v":90},"name":{"value":"Cerulean","closest_named_hex":"#1DACD6","exact_match_name":false,"distance":1415},"cmyk":{"fraction":{"c":0.8826086956521739,"m":0.3695652173913044,"y":0,"k":0.0980392156862745},"value":"cmyk(88, 37, 0, 10)","c":88,"m":37,"y":0,"k":10},"XYZ":{"fraction":{"X":0.4098109803921568,"Y":0.49431450980392155,"Z":0.9271376470588236},"value":"XYZ(41, 49, 93)","X":41,"Y":49,"Z":93},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1B91E6","named":"https://www.thecolorapi.com/id?format=svg&hex=1B91E6"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1B91E6"}},"_embedded":{},"target":"success"}],"seed":{"hex":{"value":"#1B86D3","clean":"1B86D3"},"rgb":{"fraction":{"r":0.10588235294117647,"g":0.5254901960784314,"b":0.8274509803921568},"r":27,"g":134,"b":211,"value":"rgb(27, 134, 211)"},"hsl":{"fraction":{"h":0.569746376811594,"s":0.773109243697479,"l":0.4666666666666666},"h":205,"s":77,"l":47,"value":"hsl(205, 77%, 47%)"},"hsv":{"fraction":{"h":0.569746376811594,"s":0.8720379146919431,"v":0.8274509803921568},"value":"hsv(205, 87%, 83%)","h":205,"s":87,"v":83},"name":{"value":"Navy Blue","closest_named_hex":"#1974D2","exact_match_name":false,"distance":381},"cmyk":{"fraction":{"c":0.8720379146919431,"m":0.3649289099526066,"y":0,"k":0.1725490196078432},"value":"cmyk(87, 36, 0, 17)","c":87,"m":36,"y":0,"k":17},"XYZ":{"fraction":{"X":0.3809360784313725,"Y":0.4580831372549019,"Z":0.8511741176470589},"value":"XYZ(38, 46, 85)","X":38,"Y":46,"Z":85},"image":{"bare":"https://www.thecolorapi.com/id?format=svg&named=false&hex=1B86D3","named":"https://www.thecolorapi.com/id?format=svg&hex=1B86D3"},"contrast":{"value":"#000000"},"_links":{"self":{"href":"/id?hex=1B86D3"}},"_embedded":{}},"image":{"bare":"https://www.thecolorapi.com/scheme?format=svg&named=false&hex=1B86D3&mode=quad&count=5","named":"https://www.thecolorapi.com/scheme?format=svg&hex=1B86D3&mode=quad&count=5"},"_links":{"self":"/scheme?hex=1B86D3&mode=quad&count=5","schemes":{"monochrome":"/scheme?hex=1B86D3&mode=monochrome&count=5","monochrome-dark":"/scheme?hex=1B86D3&mode=monochrome-dark&count=5","monochrome-light":"/scheme?hex=1B86D3&mode=monochrome-light&count=5","analogic":"/scheme?hex=1B86D3&mode=analogic&count=5","complement":"/scheme?hex=1B86D3&mode=complement&count=5","analogic-complement":"/scheme?hex=1B86D3&mode=analogic-complement&count=5","triad":"/scheme?hex=1B86D3&mode=triad&count=5","quad":"/scheme?hex=1B86D3&mode=quad&count=5"}},"_embedded":{}}],"banners":[],"themes":[{"id":"1","name":"default"}],"font":"'Roboto Mono', 'Helvetica','Arial', sans-serif","menuPosition":"side","pages":[{"__typename":"PageEntity","id":"21","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"22","metaTitle":"about kim","metaDescription":"kim desc","shareImage":{"__typename":"UploadFileEntityResponse","data":null}},"createdAt":"2022-07-07T01:20:07.692Z","updatedAt":"2022-07-07T01:21:45.363Z","header":"KIm Page","subhead":null,"slug":"kim","MenuAnchor":"None","route":"/","order":null}},{"__typename":"PageEntity","id":"3","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"3","metaTitle":"Grace history","metaDescription":"Grace History","shareImage":{"__typename":"UploadFileEntityResponse","data":{"__typename":"UploadFileEntity","id":"25","attributes":{"__typename":"UploadFile","name":"Grace_Red_door.jpeg","alternativeText":"Grace_Red_door.jpeg","caption":"Grace_Red_door.jpeg","formats":{"small":{"ext":".jpeg","url":"/uploads/small_Grace_Red_door_34dee663e6.jpeg","hash":"small_Grace_Red_door_34dee663e6","mime":"image/jpeg","name":"small_Grace_Red_door.jpeg","path":null,"size":39.87,"width":362,"height":500},"thumbnail":{"ext":".jpeg","url":"/uploads/thumbnail_Grace_Red_door_34dee663e6.jpeg","hash":"thumbnail_Grace_Red_door_34dee663e6","mime":"image/jpeg","name":"thumbnail_Grace_Red_door.jpeg","path":null,"size":5.07,"width":113,"height":156}}}}}},"createdAt":"2022-05-10T18:56:26.582Z","updatedAt":"2022-05-23T15:46:43.734Z","header":"History of Grace Church","subhead":null,"slug":"history","MenuAnchor":"Explore","route":"/history","order":null}},{"__typename":"PageEntity","id":"4","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"4","metaTitle":"Bulletins","metaDescription":"Bulletins","shareImage":{"__typename":"UploadFileEntityResponse","data":{"__typename":"UploadFileEntity","id":"25","attributes":{"__typename":"UploadFile","name":"Grace_Red_door.jpeg","alternativeText":"Grace_Red_door.jpeg","caption":"Grace_Red_door.jpeg","formats":{"small":{"ext":".jpeg","url":"/uploads/small_Grace_Red_door_34dee663e6.jpeg","hash":"small_Grace_Red_door_34dee663e6","mime":"image/jpeg","name":"small_Grace_Red_door.jpeg","path":null,"size":39.87,"width":362,"height":500},"thumbnail":{"ext":".jpeg","url":"/uploads/thumbnail_Grace_Red_door_34dee663e6.jpeg","hash":"thumbnail_Grace_Red_door_34dee663e6","mime":"image/jpeg","name":"thumbnail_Grace_Red_door.jpeg","path":null,"size":5.07,"width":113,"height":156}}}}}},"createdAt":"2022-05-12T00:47:23.358Z","updatedAt":"2022-08-02T20:42:08.641Z","header":"Bulletins","subhead":null,"slug":"bulletins","MenuAnchor":"About","route":"/Bulletins","order":2}},{"__typename":"PageEntity","id":"14","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"14","metaTitle":"Pentecost","metaDescription":"Pentecost Sunday","shareImage":{"__typename":"UploadFileEntityResponse","data":null}},"createdAt":"2022-05-23T17:22:53.827Z","updatedAt":"2022-05-23T17:23:18.465Z","header":"Pentecost","subhead":null,"slug":"pentecost","MenuAnchor":"None","route":"/","order":null}},{"__typename":"PageEntity","id":"15","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"15","metaTitle":"St. Mary's","metaDescription":"St. Mary's Retreat Center","shareImage":{"__typename":"UploadFileEntityResponse","data":null}},"createdAt":"2022-05-23T17:41:42.763Z","updatedAt":"2022-05-23T17:41:42.763Z","header":"St. Mary's Retreat Center","subhead":null,"slug":"stmarys","MenuAnchor":"None","route":"/","order":null}},{"__typename":"PageEntity","id":"12","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"12","metaTitle":"EFM","metaDescription":"Education for Ministry (EFM)","shareImage":{"__typename":"UploadFileEntityResponse","data":null}},"createdAt":"2022-05-23T16:47:09.932Z","updatedAt":"2022-05-23T18:47:58.036Z","header":"Education for Ministry (EfM)","subhead":null,"slug":"efm","MenuAnchor":"Members","route":"/","order":null}},{"__typename":"PageEntity","id":"7","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"7","metaTitle":"Pledge","metaDescription":"pledge","shareImage":{"__typename":"UploadFileEntityResponse","data":{"__typename":"UploadFileEntity","id":"30","attributes":{"__typename":"UploadFile","name":"Grace_Red_door.jpeg","alternativeText":"Grace_Red_door.jpeg","caption":"Grace_Red_door.jpeg","formats":{"small":{"ext":".jpeg","url":"/uploads/small_Grace_Red_door_fdd2eef656.jpeg","hash":"small_Grace_Red_door_fdd2eef656","mime":"image/jpeg","name":"small_Grace_Red_door.jpeg","path":null,"size":39.87,"width":362,"height":500},"thumbnail":{"ext":".jpeg","url":"/uploads/thumbnail_Grace_Red_door_fdd2eef656.jpeg","hash":"thumbnail_Grace_Red_door_fdd2eef656","mime":"image/jpeg","name":"thumbnail_Grace_Red_door.jpeg","path":null,"size":5.07,"width":113,"height":156}}}}}},"createdAt":"2022-05-20T00:09:48.967Z","updatedAt":"2022-05-23T20:52:04.279Z","header":"Grace Pledge Form","subhead":null,"slug":"pledge","MenuAnchor":"Members","route":"/","order":null}},{"__typename":"PageEntity","id":"16","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"16","metaTitle":"Beliefs","metaDescription":"Beliefs and Pratices","shareImage":{"__typename":"UploadFileEntityResponse","data":null}},"createdAt":"2022-05-23T23:39:35.657Z","updatedAt":"2022-05-23T23:42:44.200Z","header":"Beliefs","subhead":null,"slug":"beliefs","MenuAnchor":"Worship","route":"/","order":null}},{"__typename":"PageEntity","id":"18","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"18","metaTitle":"videos","metaDescription":"Church videos","shareImage":{"__typename":"UploadFileEntityResponse","data":null}},"createdAt":"2022-05-26T01:42:29.820Z","updatedAt":"2022-05-26T01:57:10.211Z","header":"Videos","subhead":null,"slug":"videos","MenuAnchor":"Explore","route":"/","order":null}},{"__typename":"PageEntity","id":"19","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"19","metaTitle":"Snorkel Trip","metaDescription":"Snorkel Trip","shareImage":{"__typename":"UploadFileEntityResponse","data":null}},"createdAt":"2022-05-27T21:24:55.064Z","updatedAt":"2022-05-27T21:24:55.064Z","header":"Snorkel Trip","subhead":null,"slug":"snorkel","MenuAnchor":"None","route":"/","order":null}},{"__typename":"PageEntity","id":"9","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"9","metaTitle":"diversity","metaDescription":"diversity","shareImage":{"__typename":"UploadFileEntityResponse","data":{"__typename":"UploadFileEntity","id":"30","attributes":{"__typename":"UploadFile","name":"Grace_Red_door.jpeg","alternativeText":"Grace_Red_door.jpeg","caption":"Grace_Red_door.jpeg","formats":{"small":{"ext":".jpeg","url":"/uploads/small_Grace_Red_door_fdd2eef656.jpeg","hash":"small_Grace_Red_door_fdd2eef656","mime":"image/jpeg","name":"small_Grace_Red_door.jpeg","path":null,"size":39.87,"width":362,"height":500},"thumbnail":{"ext":".jpeg","url":"/uploads/thumbnail_Grace_Red_door_fdd2eef656.jpeg","hash":"thumbnail_Grace_Red_door_fdd2eef656","mime":"image/jpeg","name":"thumbnail_Grace_Red_door.jpeg","path":null,"size":5.07,"width":113,"height":156}}}}}},"createdAt":"2022-05-20T14:50:58.400Z","updatedAt":"2022-05-20T16:11:54.198Z","header":"Diversity","subhead":null,"slug":"diversity","MenuAnchor":"Members","route":"/","order":null}},{"__typename":"PageEntity","id":"13","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"13","metaTitle":"Pantry","metaDescription":"Food Pantry","shareImage":{"__typename":"UploadFileEntityResponse","data":null}},"createdAt":"2022-05-23T17:01:40.321Z","updatedAt":"2022-06-01T17:05:23.751Z","header":"Food Pantry","subhead":null,"slug":"pantry","MenuAnchor":"Explore","route":"/","order":null}},{"__typename":"PageEntity","id":"5","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"5","metaTitle":"Garden & Grounds","metaDescription":"Garden & Grounds","shareImage":{"__typename":"UploadFileEntityResponse","data":{"__typename":"UploadFileEntity","id":"27","attributes":{"__typename":"UploadFile","name":"grace-garden-1_1_orig.jpeg","alternativeText":null,"caption":null,"formats":{"small":{"ext":".jpeg","url":"/uploads/small_grace_garden_1_1_orig_84e9c6e82a.jpeg","hash":"small_grace_garden_1_1_orig_84e9c6e82a","mime":"image/jpeg","name":"small_grace-garden-1_1_orig.jpeg","path":null,"size":64.88,"width":500,"height":375},"thumbnail":{"ext":".jpeg","url":"/uploads/thumbnail_grace_garden_1_1_orig_84e9c6e82a.jpeg","hash":"thumbnail_grace_garden_1_1_orig_84e9c6e82a","mime":"image/jpeg","name":"thumbnail_grace-garden-1_1_orig.jpeg","path":null,"size":11.92,"width":208,"height":156}}}}}},"createdAt":"2022-05-12T00:58:24.795Z","updatedAt":"2022-05-23T15:18:09.566Z","header":"Garden & Grounds","subhead":null,"slug":"garden","MenuAnchor":"Explore","route":"/garden","order":null}},{"__typename":"PageEntity","id":"1","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"1","metaTitle":"Grace Episcopal Church","metaDescription":"Grace Episcopal Church","shareImage":{"__typename":"UploadFileEntityResponse","data":{"__typename":"UploadFileEntity","id":"24","attributes":{"__typename":"UploadFile","name":"IMG_0407.JPG","alternativeText":null,"caption":null,"formats":{"large":{"ext":".JPG","url":"/uploads/large_IMG_0407_12b3db579e.JPG","hash":"large_IMG_0407_12b3db579e","mime":"image/jpeg","name":"large_IMG_0407.JPG","path":null,"size":236.56,"width":1000,"height":563},"small":{"ext":".JPG","url":"/uploads/small_IMG_0407_12b3db579e.JPG","hash":"small_IMG_0407_12b3db579e","mime":"image/jpeg","name":"small_IMG_0407.JPG","path":null,"size":62.36,"width":500,"height":281},"medium":{"ext":".JPG","url":"/uploads/medium_IMG_0407_12b3db579e.JPG","hash":"medium_IMG_0407_12b3db579e","mime":"image/jpeg","name":"medium_IMG_0407.JPG","path":null,"size":134.51,"width":750,"height":422},"thumbnail":{"ext":".JPG","url":"/uploads/thumbnail_IMG_0407_12b3db579e.JPG","hash":"thumbnail_IMG_0407_12b3db579e","mime":"image/jpeg","name":"thumbnail_IMG_0407.JPG","path":null,"size":15.58,"width":245,"height":138}}}}}},"createdAt":"2022-05-10T16:40:56.796Z","updatedAt":"2022-06-07T13:56:27.408Z","header":"Grace Episcopal Church","subhead":"Welcome!","slug":"home","MenuAnchor":"None","route":"/","order":null}},{"__typename":"PageEntity","id":"8","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"8","metaTitle":"Music","metaDescription":"music page","shareImage":{"__typename":"UploadFileEntityResponse","data":{"__typename":"UploadFileEntity","id":"30","attributes":{"__typename":"UploadFile","name":"Grace_Red_door.jpeg","alternativeText":"Grace_Red_door.jpeg","caption":"Grace_Red_door.jpeg","formats":{"small":{"ext":".jpeg","url":"/uploads/small_Grace_Red_door_fdd2eef656.jpeg","hash":"small_Grace_Red_door_fdd2eef656","mime":"image/jpeg","name":"small_Grace_Red_door.jpeg","path":null,"size":39.87,"width":362,"height":500},"thumbnail":{"ext":".jpeg","url":"/uploads/thumbnail_Grace_Red_door_fdd2eef656.jpeg","hash":"thumbnail_Grace_Red_door_fdd2eef656","mime":"image/jpeg","name":"thumbnail_Grace_Red_door.jpeg","path":null,"size":5.07,"width":113,"height":156}}}}}},"createdAt":"2022-05-20T14:40:57.147Z","updatedAt":"2022-06-13T19:32:52.015Z","header":"Music Program","subhead":"","slug":"music","MenuAnchor":"Worship","route":"/music","order":null}},{"__typename":"PageEntity","id":"2","attributes":{"__typename":"Page","metadata":{"__typename":"ComponentMetaMetadata","id":"2","metaTitle":"services","metaDescription":"Grace Services","shareImage":{"__typename":"UploadFileEntityResponse","data":{"__typename":"UploadFileEntity","id":"25","attributes":{"__typename":"UploadFile","name":"Grace_Red_door.jpeg","alternativeText":"Grace_Red_door.jpeg","caption":"Grace_Red_door.jpeg","formats":{"small":{"ext":".jpeg","url":"/uploads/small_Grace_Red_door_34dee663e6.jpeg","hash":"small_Grace_Red_door_34dee663e6","mime":"image/jpeg","name":"small_Grace_Red_door.jpeg","path":null,"size":39.87,"width":362,"height":500},"thumbnail":{"ext":".jpeg","url":"/uploads/thumbnail_Grace_Red_door_34dee663e6.jpeg","hash":"thumbnail_Grace_Red_door_34dee663e6","mime":"image/jpeg","name":"thumbnail_Grace_Red_door.jpeg","path":null,"size":5.07,"width":113,"height":156}}}}}},"createdAt":"2022-05-10T18:44:55.199Z","updatedAt":"2022-06-23T16:25:52.873Z","header":"Services","subhead":"","slug":"services","MenuAnchor":"Worship","route":"/services","order":null}}],"menuAnchors":["Explore","Members","Worship"],"unstable_sxConfig":{"border":{"themeKey":"borders"},"borderTop":{"themeKey":"borders"},"borderRight":{"themeKey":"borders"},"borderBottom":{"themeKey":"borders"},"borderLeft":{"themeKey":"borders"},"borderColor":{"themeKey":"palette"},"borderTopColor":{"themeKey":"palette"},"borderRightColor":{"themeKey":"palette"},"borderBottomColor":{"themeKey":"palette"},"borderLeftColor":{"themeKey":"palette"},"borderRadius":{"themeKey":"shape.borderRadius"},"color":{"themeKey":"palette"},"bgcolor":{"themeKey":"palette","cssProperty":"backgroundColor"},"backgroundColor":{"themeKey":"palette"},"p":{},"pt":{},"pr":{},"pb":{},"pl":{},"px":{},"py":{},"padding":{},"paddingTop":{},"paddingRight":{},"paddingBottom":{},"paddingLeft":{},"paddingX":{},"paddingY":{},"paddingInline":{},"paddingInlineStart":{},"paddingInlineEnd":{},"paddingBlock":{},"paddingBlockStart":{},"paddingBlockEnd":{},"m":{},"mt":{},"mr":{},"mb":{},"ml":{},"mx":{},"my":{},"margin":{},"marginTop":{},"marginRight":{},"marginBottom":{},"marginLeft":{},"marginX":{},"marginY":{},"marginInline":{},"marginInlineStart":{},"marginInlineEnd":{},"marginBlock":{},"marginBlockStart":{},"marginBlockEnd":{},"displayPrint":{"cssProperty":false},"display":{},"overflow":{},"textOverflow":{},"visibility":{},"whiteSpace":{},"flexBasis":{},"flexDirection":{},"flexWrap":{},"justifyContent":{},"alignItems":{},"alignContent":{},"order":{},"flex":{},"flexGrow":{},"flexShrink":{},"alignSelf":{},"justifyItems":{},"justifySelf":{},"gap":{},"rowGap":{},"columnGap":{},"gridColumn":{},"gridRow":{},"gridAutoFlow":{},"gridAutoColumns":{},"gridAutoRows":{},"gridTemplateColumns":{},"gridTemplateRows":{},"gridTemplateAreas":{},"gridArea":{},"position":{},"zIndex":{"themeKey":"zIndex"},"top":{},"right":{},"bottom":{},"left":{},"boxShadow":{"themeKey":"shadows"},"width":{},"maxWidth":{},"minWidth":{},"height":{},"maxHeight":{},"minHeight":{},"boxSizing":{},"fontFamily":{"themeKey":"typography"},"fontSize":{"themeKey":"typography"},"fontStyle":{"themeKey":"typography"},"fontWeight":{"themeKey":"typography"},"letterSpacing":{},"textTransform":{},"lineHeight":{},"textAlign":{},"typography":{"cssProperty":false,"themeKey":"typography"}},"bgCount":0,"topStyle":{"maxWidth":300,"margin":"auto","justifyContent":"center","height":45,"padding":10,"borderRadius":5,"display":"none","flexDirection":"row","flexWrap":"nowrap"},"adminName":"","adminPassword":""}
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