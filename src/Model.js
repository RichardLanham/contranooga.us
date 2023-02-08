export const SundayListing = {
  name: "Contra Dance",
  body: "Dance @ 7:30 PM",
  startTime: "",
  endTime: "",
};

export const SundayTemplate = {
  __typename: "EventEntity",
  id: "46",
  attributes: {
    __typename: "Event",
    createdAt: "2022-04-25T14:09:40.496Z",
    name: "Contra Dances",
    image: {
      __typename: "UploadFileEntityResponse",
      data: {
        __typename: "UploadFileEntity",
        id: Math.random(),
        attributes: {
          __typename: "UploadFile",
          createdAt: "2022-04-25T14:09:40.752Z",
          name: "IMG_0138.JPG",
          formats: {
            thumbnail: {
              name: "thumbnail_IMG_0138.JPG",
              hash: "thumbnail_IMG_0138_537fbfd2dd",
              ext: ".JPG",
              mime: "image/jpeg",
              path: null,
              width: 146,
              height: 162,
              size: 13.56,
              url: "https://stage.uglytree.cafe/grace_image.png",
            },
            large: {
              name: "large_IMG_0138.JPG",
              hash: "large_IMG_0138_537fbfd2dd",
              ext: ".JPG",
              mime: "image/jpeg",
              path: null,
              width: 1000,
              height: 563,
              size: 245.16,
              url: "/uploads/large_IMG_0138_537fbfd2dd.JPG",
            },
            medium: {
              name: "medium_IMG_0138.JPG",
              hash: "medium_IMG_0138_537fbfd2dd",
              ext: ".JPG",
              mime: "image/jpeg",
              path: null,
              width: 750,
              height: 422,
              size: 132.05,
              url: "/uploads/medium_IMG_0138_537fbfd2dd.JPG",
            },
            small: {
              name: "small_IMG_0138.JPG",
              hash: "small_IMG_0138_537fbfd2dd",
              ext: ".JPG",
              mime: "image/jpeg",
              path: null,
              width: 500,
              height: 281,
              size: 58.35,
              url: "/uploads/small_IMG_0138_537fbfd2dd.JPG",
            },
          },
        },
      },
    },
    startTime: "2022-04-26T16:00:00.000Z",
    body: "Contra Dance at 7:30 PM ",
    lectionary: {},
  },
};

export const Modes = {
  fill: () => {},
};

export const appTheme = {
  debug: {
    display: "none",
    fontWeight: 800,
  },
  form: {
    padding: 10,
    width: "10%",
  },
  userCard: {
    opacity: ".9",
    margin: 3,
    padding: 3,
    width: "50%",
  },
  badge: {
    whiteSpace: "nowrap",
    maxWidth: 300,
    fontWeight: 600,
    borderRadius: 3,
    padding: 2,
    margin: 3,
    textTransform: "lowercase",
  },
  submitButton: {
    border: "1px solid grey",
    padding: 3,
    fontWeight: 600,
    margin: 3,
    whiteSpace: "nowrap",
    width: 50,
    height: 60,
    borderRadius: 500,
  },
  loadMoreButton: {
    height: "60px",
    borderRadius: 3,
    border: 0,
    margin: "2 3 3 2",
    padding: "0 0 0 0",
  },
  flexRows: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  errorMessage: {
    position: "fixed",
    left: 5,
    top: "140px",
    width: "50%",
  },
  loading: {
    width: "100%",
    zIndex: 2000,
    "& > * + *": {
      marginLeft: 2,
    },
  },
  loud: {
    fontWeight: 800,
  },
  siteLink: {
    borderRadius: 5,
    padding: 3,
    whiteSpace: "nowrap",
    maxHeight: 60,
    textDecoration: "none",
  },
};

export const ColorModes = [
  {
    mode: "monochrome",
    count: "5",
    colors: [
      {
        hex: {
          value: "#1F3266",
          clean: "1F3266",
        },
        rgb: {
          fraction: {
            r: 0.12156862745098039,
            g: 0.19607843137254902,
            b: 0.4,
          },
          r: 31,
          g: 50,
          b: 102,
          value: "rgb(31, 50, 102)",
        },
        hsl: {
          fraction: {
            h: 0.6220657276995304,
            s: 0.5338345864661654,
            l: 0.2607843137254902,
          },
          h: 224,
          s: 53,
          l: 26,
          value: "hsl(224, 53%, 26%)",
        },
        hsv: {
          fraction: {
            h: 0.6220657276995304,
            s: 0.696078431372549,
            v: 0.4,
          },
          value: "hsv(224, 70%, 40%)",
          h: 224,
          s: 70,
          v: 40,
        },
        name: {
          value: "Biscay",
          closest_named_hex: "#1B3162",
          exact_match_name: false,
          distance: 201,
        },
        cmyk: {
          fraction: {
            c: 0.696078431372549,
            m: 0.5098039215686275,
            y: 0,
            k: 0.6,
          },
          value: "cmyk(70, 51, 0, 60)",
          c: 70,
          m: 51,
          y: 0,
          k: 60,
        },
        XYZ: {
          fraction: {
            X: 0.19245254901960784,
            Y: 0.1949607843137255,
            Z: 0.4059188235294118,
          },
          value: "XYZ(19, 19, 41)",
          X: 19,
          Y: 19,
          Z: 41,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=1F3266",
          named: "http://www.thecolorapi.com/id?format=svg&hex=1F3266",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=1F3266",
          },
        },
        _embedded: {},
        target: "secondary",
      },
      {
        hex: {
          value: "#2A448E",
          clean: "2A448E",
        },
        rgb: {
          fraction: {
            r: 0.16470588235294117,
            g: 0.26666666666666666,
            b: 0.5568627450980392,
          },
          r: 42,
          g: 68,
          b: 142,
          value: "rgb(42, 68, 142)",
        },
        hsl: {
          fraction: {
            h: 0.6233333333333334,
            s: 0.5434782608695653,
            l: 0.3607843137254902,
          },
          h: 224,
          s: 54,
          l: 36,
          value: "hsl(224, 54%, 36%)",
        },
        hsv: {
          fraction: {
            h: 0.6233333333333334,
            s: 0.7042253521126761,
            v: 0.5568627450980392,
          },
          value: "hsv(224, 70%, 56%)",
          h: 224,
          s: 70,
          v: 56,
        },
        name: {
          value: "Bay of Many",
          closest_named_hex: "#273A81",
          exact_match_name: false,
          distance: 432,
        },
        cmyk: {
          fraction: {
            c: 0.7042253521126761,
            m: 0.5211267605633804,
            y: 0,
            k: 0.44313725490196076,
          },
          value: "cmyk(70, 52, 0, 44)",
          c: 70,
          m: 52,
          y: 0,
          k: 44,
        },
        XYZ: {
          fraction: {
            X: 0.263798431372549,
            Y: 0.2659419607843137,
            Z: 0.5642635294117647,
          },
          value: "XYZ(26, 27, 56)",
          X: 26,
          Y: 27,
          Z: 56,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=2A448E",
          named: "http://www.thecolorapi.com/id?format=svg&hex=2A448E",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=2A448E",
          },
        },
        _embedded: {},
        target: "error",
      },
      {
        hex: {
          value: "#3556B7",
          clean: "3556B7",
        },
        rgb: {
          fraction: {
            r: 0.20784313725490197,
            g: 0.33725490196078434,
            b: 0.7176470588235294,
          },
          r: 53,
          g: 86,
          b: 183,
          value: "rgb(53, 86, 183)",
        },
        hsl: {
          fraction: {
            h: 0.6243589743589743,
            s: 0.5508474576271186,
            l: 0.4627450980392157,
          },
          h: 225,
          s: 55,
          l: 46,
          value: "hsl(225, 55%, 46%)",
        },
        hsv: {
          fraction: {
            h: 0.6243589743589743,
            s: 0.7103825136612021,
            v: 0.7176470588235294,
          },
          value: "hsv(225, 71%, 72%)",
          h: 225,
          s: 71,
          v: 72,
        },
        name: {
          value: "Violet Blue",
          closest_named_hex: "#324AB2",
          exact_match_name: false,
          distance: 264,
        },
        cmyk: {
          fraction: {
            c: 0.7103825136612021,
            m: 0.5300546448087431,
            y: 0,
            k: 0.2823529411764706,
          },
          value: "cmyk(71, 53, 0, 28)",
          c: 71,
          m: 53,
          y: 0,
          k: 28,
        },
        XYZ: {
          fraction: {
            X: 0.33585215686274505,
            Y: 0.33720627450980395,
            Z: 0.7263356862745098,
          },
          value: "XYZ(34, 34, 73)",
          X: 34,
          Y: 34,
          Z: 73,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=3556B7",
          named: "http://www.thecolorapi.com/id?format=svg&hex=3556B7",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=3556B7",
          },
        },
        _embedded: {},
        target: "warning",
      },
      {
        hex: {
          value: "#5071CE",
          clean: "5071CE",
        },
        rgb: {
          fraction: {
            r: 0.3137254901960784,
            g: 0.44313725490196076,
            b: 0.807843137254902,
          },
          r: 80,
          g: 113,
          b: 206,
          value: "rgb(80, 113, 206)",
        },
        hsl: {
          fraction: {
            h: 0.6230158730158729,
            s: 0.5625,
            l: 0.5607843137254902,
          },
          h: 224,
          s: 56,
          l: 56,
          value: "hsl(224, 56%, 56%)",
        },
        hsv: {
          fraction: {
            h: 0.6230158730158729,
            s: 0.6116504854368933,
            v: 0.807843137254902,
          },
          value: "hsv(224, 61%, 81%)",
          h: 224,
          s: 61,
          v: 81,
        },
        name: {
          value: "Indigo",
          closest_named_hex: "#4F69C6",
          exact_match_name: false,
          distance: 525,
        },
        cmyk: {
          fraction: {
            c: 0.6116504854368933,
            m: 0.45145631067961167,
            y: 0,
            k: 0.19215686274509802,
          },
          value: "cmyk(61, 45, 0, 19)",
          c: 61,
          m: 45,
          y: 0,
          k: 19,
        },
        XYZ: {
          fraction: {
            X: 0.4336619607843137,
            Y: 0.4419560784313725,
            Z: 0.8267317647058824,
          },
          value: "XYZ(43, 44, 83)",
          X: 43,
          Y: 44,
          Z: 83,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=5071CE",
          named: "http://www.thecolorapi.com/id?format=svg&hex=5071CE",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=5071CE",
          },
        },
        _embedded: {},
        target: "info",
      },
      {
        hex: {
          value: "#7791DA",
          clean: "7791DA",
        },
        rgb: {
          fraction: {
            r: 0.4666666666666667,
            g: 0.5686274509803921,
            b: 0.8549019607843137,
          },
          r: 119,
          g: 145,
          b: 218,
          value: "rgb(119, 145, 218)",
        },
        hsl: {
          fraction: {
            h: 0.622895622895623,
            s: 0.5722543352601156,
            l: 0.6607843137254902,
          },
          h: 224,
          s: 57,
          l: 66,
          value: "hsl(224, 57%, 66%)",
        },
        hsv: {
          fraction: {
            h: 0.622895622895623,
            s: 0.4541284403669724,
            v: 0.8549019607843137,
          },
          value: "hsv(224, 45%, 85%)",
          h: 224,
          s: 45,
          v: 85,
        },
        name: {
          value: "Chetwode Blue",
          closest_named_hex: "#8581D9",
          exact_match_name: false,
          distance: 1003,
        },
        cmyk: {
          fraction: {
            c: 0.4541284403669724,
            m: 0.3348623853211009,
            y: 0,
            k: 0.14509803921568631,
          },
          value: "cmyk(45, 33, 0, 15)",
          c: 45,
          m: 33,
          y: 0,
          k: 15,
        },
        XYZ: {
          fraction: {
            X: 0.5501043137254902,
            Y: 0.5676196078431373,
            Z: 0.8893713725490195,
          },
          value: "XYZ(55, 57, 89)",
          X: 55,
          Y: 57,
          Z: 89,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=7791DA",
          named: "http://www.thecolorapi.com/id?format=svg&hex=7791DA",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=7791DA",
          },
        },
        _embedded: {},
        target: "success",
      },
    ],
    seed: {
      hex: {
        value: "#3D61C8",
        clean: "3D61C8",
      },
      rgb: {
        fraction: {
          r: 0.23921568627450981,
          g: 0.3803921568627451,
          b: 0.7843137254901961,
        },
        r: 61,
        g: 97,
        b: 200,
        value: "rgb(61, 97, 200)",
      },
      hsl: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.5582329317269076,
          l: 0.5117647058823529,
        },
        h: 224,
        s: 56,
        l: 51,
        value: "hsl(224, 56%, 51%)",
      },
      hsv: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.695,
          v: 0.7843137254901961,
        },
        value: "hsv(224, 70%, 78%)",
        h: 224,
        s: 70,
        v: 78,
      },
      name: {
        value: "Indigo",
        closest_named_hex: "#4F69C6",
        exact_match_name: false,
        distance: 816,
      },
      cmyk: {
        fraction: {
          c: 0.695,
          m: 0.515,
          y: 0,
          k: 0.21568627450980393,
        },
        value: "cmyk(70, 52, 0, 22)",
        c: 70,
        m: 52,
        y: 0,
        k: 22,
      },
      XYZ: {
        fraction: {
          X: 0.37624941176470583,
          Y: 0.3795411764705882,
          Z: 0.7954498039215686,
        },
        value: "XYZ(38, 38, 80)",
        X: 38,
        Y: 38,
        Z: 80,
      },
      image: {
        bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=3D61C8",
        named: "http://www.thecolorapi.com/id?format=svg&hex=3D61C8",
      },
      contrast: {
        value: "#ffffff",
      },
      _links: {
        self: {
          href: "/id?hex=3D61C8",
        },
      },
      _embedded: {},
    },
    image: {
      bare: "http://www.thecolorapi.com/scheme?format=svg&named=false&hex=3D61C8&mode=monochrome&count=5",
      named:
        "http://www.thecolorapi.com/scheme?format=svg&hex=3D61C8&mode=monochrome&count=5",
    },
    _links: {
      self: "/scheme?hex=3D61C8&mode=monochrome&count=5",
      schemes: {
        monochrome: "/scheme?hex=3D61C8&mode=monochrome&count=5",
        "monochrome-dark": "/scheme?hex=3D61C8&mode=monochrome-dark&count=5",
        "monochrome-light": "/scheme?hex=3D61C8&mode=monochrome-light&count=5",
        analogic: "/scheme?hex=3D61C8&mode=analogic&count=5",
        complement: "/scheme?hex=3D61C8&mode=complement&count=5",
        "analogic-complement":
          "/scheme?hex=3D61C8&mode=analogic-complement&count=5",
        triad: "/scheme?hex=3D61C8&mode=triad&count=5",
        quad: "/scheme?hex=3D61C8&mode=quad&count=5",
      },
    },
    _embedded: {},
  },
  {
    mode: "monochrome-dark",
    count: "5",
    colors: [
      {
        hex: {
          value: "#1F3266",
          clean: "1F3266",
        },
        rgb: {
          fraction: {
            r: 0.12156862745098039,
            g: 0.19607843137254902,
            b: 0.4,
          },
          r: 31,
          g: 50,
          b: 102,
          value: "rgb(31, 50, 102)",
        },
        hsl: {
          fraction: {
            h: 0.6220657276995304,
            s: 0.5338345864661654,
            l: 0.2607843137254902,
          },
          h: 224,
          s: 53,
          l: 26,
          value: "hsl(224, 53%, 26%)",
        },
        hsv: {
          fraction: {
            h: 0.6220657276995304,
            s: 0.696078431372549,
            v: 0.4,
          },
          value: "hsv(224, 70%, 40%)",
          h: 224,
          s: 70,
          v: 40,
        },
        name: {
          value: "Biscay",
          closest_named_hex: "#1B3162",
          exact_match_name: false,
          distance: 201,
        },
        cmyk: {
          fraction: {
            c: 0.696078431372549,
            m: 0.5098039215686275,
            y: 0,
            k: 0.6,
          },
          value: "cmyk(70, 51, 0, 60)",
          c: 70,
          m: 51,
          y: 0,
          k: 60,
        },
        XYZ: {
          fraction: {
            X: 0.19245254901960784,
            Y: 0.1949607843137255,
            Z: 0.4059188235294118,
          },
          value: "XYZ(19, 19, 41)",
          X: 19,
          Y: 19,
          Z: 41,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=1F3266",
          named: "http://www.thecolorapi.com/id?format=svg&hex=1F3266",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=1F3266",
          },
        },
        _embedded: {},
        target: "secondary",
      },
      {
        hex: {
          value: "#2A448E",
          clean: "2A448E",
        },
        rgb: {
          fraction: {
            r: 0.16470588235294117,
            g: 0.26666666666666666,
            b: 0.5568627450980392,
          },
          r: 42,
          g: 68,
          b: 142,
          value: "rgb(42, 68, 142)",
        },
        hsl: {
          fraction: {
            h: 0.6233333333333334,
            s: 0.5434782608695653,
            l: 0.3607843137254902,
          },
          h: 224,
          s: 54,
          l: 36,
          value: "hsl(224, 54%, 36%)",
        },
        hsv: {
          fraction: {
            h: 0.6233333333333334,
            s: 0.7042253521126761,
            v: 0.5568627450980392,
          },
          value: "hsv(224, 70%, 56%)",
          h: 224,
          s: 70,
          v: 56,
        },
        name: {
          value: "Bay of Many",
          closest_named_hex: "#273A81",
          exact_match_name: false,
          distance: 432,
        },
        cmyk: {
          fraction: {
            c: 0.7042253521126761,
            m: 0.5211267605633804,
            y: 0,
            k: 0.44313725490196076,
          },
          value: "cmyk(70, 52, 0, 44)",
          c: 70,
          m: 52,
          y: 0,
          k: 44,
        },
        XYZ: {
          fraction: {
            X: 0.263798431372549,
            Y: 0.2659419607843137,
            Z: 0.5642635294117647,
          },
          value: "XYZ(26, 27, 56)",
          X: 26,
          Y: 27,
          Z: 56,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=2A448E",
          named: "http://www.thecolorapi.com/id?format=svg&hex=2A448E",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=2A448E",
          },
        },
        _embedded: {},
        target: "error",
      },
      {
        hex: {
          value: "#3556B7",
          clean: "3556B7",
        },
        rgb: {
          fraction: {
            r: 0.20784313725490197,
            g: 0.33725490196078434,
            b: 0.7176470588235294,
          },
          r: 53,
          g: 86,
          b: 183,
          value: "rgb(53, 86, 183)",
        },
        hsl: {
          fraction: {
            h: 0.6243589743589743,
            s: 0.5508474576271186,
            l: 0.4627450980392157,
          },
          h: 225,
          s: 55,
          l: 46,
          value: "hsl(225, 55%, 46%)",
        },
        hsv: {
          fraction: {
            h: 0.6243589743589743,
            s: 0.7103825136612021,
            v: 0.7176470588235294,
          },
          value: "hsv(225, 71%, 72%)",
          h: 225,
          s: 71,
          v: 72,
        },
        name: {
          value: "Violet Blue",
          closest_named_hex: "#324AB2",
          exact_match_name: false,
          distance: 264,
        },
        cmyk: {
          fraction: {
            c: 0.7103825136612021,
            m: 0.5300546448087431,
            y: 0,
            k: 0.2823529411764706,
          },
          value: "cmyk(71, 53, 0, 28)",
          c: 71,
          m: 53,
          y: 0,
          k: 28,
        },
        XYZ: {
          fraction: {
            X: 0.33585215686274505,
            Y: 0.33720627450980395,
            Z: 0.7263356862745098,
          },
          value: "XYZ(34, 34, 73)",
          X: 34,
          Y: 34,
          Z: 73,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=3556B7",
          named: "http://www.thecolorapi.com/id?format=svg&hex=3556B7",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=3556B7",
          },
        },
        _embedded: {},
        target: "warning",
      },
      {
        hex: {
          value: "#8F8F8F",
          clean: "8F8F8F",
        },
        rgb: {
          fraction: {
            r: 0.5607843137254902,
            g: 0.5607843137254902,
            b: 0.5607843137254902,
          },
          r: 143,
          g: 143,
          b: 143,
          value: "rgb(143, 143, 143)",
        },
        hsl: {
          fraction: {
            h: 0,
            s: 0,
            l: 0.5607843137254902,
          },
          h: 0,
          s: 0,
          l: 56,
          value: "hsl(0, 0%, 56%)",
        },
        hsv: {
          fraction: {
            h: 0,
            s: 0,
            v: 0.5607843137254902,
          },
          value: "hsv(0, 0%, 56%)",
          h: 0,
          s: 0,
          v: 56,
        },
        name: {
          value: "Gray",
          closest_named_hex: "#808080",
          exact_match_name: false,
          distance: 1125,
        },
        cmyk: {
          fraction: {
            c: 0,
            m: 0,
            y: 0,
            k: 0.4392156862745098,
          },
          value: "cmyk(0, 0, 0, 44)",
          c: 0,
          m: 0,
          y: 0,
          k: 44,
        },
        XYZ: {
          fraction: {
            X: 0.5330254901960785,
            Y: 0.5607843137254902,
            Z: 0.6106941176470588,
          },
          value: "XYZ(53, 56, 61)",
          X: 53,
          Y: 56,
          Z: 61,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=8F8F8F",
          named: "http://www.thecolorapi.com/id?format=svg&hex=8F8F8F",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=8F8F8F",
          },
        },
        _embedded: {},
        target: "info",
      },
      {
        hex: {
          value: "#A9A9A9",
          clean: "A9A9A9",
        },
        rgb: {
          fraction: {
            r: 0.6627450980392157,
            g: 0.6627450980392157,
            b: 0.6627450980392157,
          },
          r: 169,
          g: 169,
          b: 169,
          value: "rgb(169, 169, 169)",
        },
        hsl: {
          fraction: {
            h: 0,
            s: 0,
            l: 0.6627450980392157,
          },
          h: 0,
          s: 0,
          l: 66,
          value: "hsl(0, 0%, 66%)",
        },
        hsv: {
          fraction: {
            h: 0,
            s: 0,
            v: 0.6627450980392157,
          },
          value: "hsv(0, 0%, 66%)",
          h: 0,
          s: 0,
          v: 66,
        },
        name: {
          value: "Silver Chalice",
          closest_named_hex: "#ACACAC",
          exact_match_name: false,
          distance: 45,
        },
        cmyk: {
          fraction: {
            c: 0,
            m: 0,
            y: 0,
            k: 0.33725490196078434,
          },
          value: "cmyk(0, 0, 0, 34)",
          c: 0,
          m: 0,
          y: 0,
          k: 34,
        },
        XYZ: {
          fraction: {
            X: 0.6299392156862744,
            Y: 0.6627450980392157,
            Z: 0.721729411764706,
          },
          value: "XYZ(63, 66, 72)",
          X: 63,
          Y: 66,
          Z: 72,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=A9A9A9",
          named: "http://www.thecolorapi.com/id?format=svg&hex=A9A9A9",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=A9A9A9",
          },
        },
        _embedded: {},
        target: "success",
      },
    ],
    seed: {
      hex: {
        value: "#3D61C8",
        clean: "3D61C8",
      },
      rgb: {
        fraction: {
          r: 0.23921568627450981,
          g: 0.3803921568627451,
          b: 0.7843137254901961,
        },
        r: 61,
        g: 97,
        b: 200,
        value: "rgb(61, 97, 200)",
      },
      hsl: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.5582329317269076,
          l: 0.5117647058823529,
        },
        h: 224,
        s: 56,
        l: 51,
        value: "hsl(224, 56%, 51%)",
      },
      hsv: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.695,
          v: 0.7843137254901961,
        },
        value: "hsv(224, 70%, 78%)",
        h: 224,
        s: 70,
        v: 78,
      },
      name: {
        value: "Indigo",
        closest_named_hex: "#4F69C6",
        exact_match_name: false,
        distance: 816,
      },
      cmyk: {
        fraction: {
          c: 0.695,
          m: 0.515,
          y: 0,
          k: 0.21568627450980393,
        },
        value: "cmyk(70, 52, 0, 22)",
        c: 70,
        m: 52,
        y: 0,
        k: 22,
      },
      XYZ: {
        fraction: {
          X: 0.37624941176470583,
          Y: 0.3795411764705882,
          Z: 0.7954498039215686,
        },
        value: "XYZ(38, 38, 80)",
        X: 38,
        Y: 38,
        Z: 80,
      },
      image: {
        bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=3D61C8",
        named: "http://www.thecolorapi.com/id?format=svg&hex=3D61C8",
      },
      contrast: {
        value: "#ffffff",
      },
      _links: {
        self: {
          href: "/id?hex=3D61C8",
        },
      },
      _embedded: {},
    },
    image: {
      bare: "http://www.thecolorapi.com/scheme?format=svg&named=false&hex=3D61C8&mode=monochrome-dark&count=5",
      named:
        "http://www.thecolorapi.com/scheme?format=svg&hex=3D61C8&mode=monochrome-dark&count=5",
    },
    _links: {
      self: "/scheme?hex=3D61C8&mode=monochrome-dark&count=5",
      schemes: {
        monochrome: "/scheme?hex=3D61C8&mode=monochrome&count=5",
        "monochrome-dark": "/scheme?hex=3D61C8&mode=monochrome-dark&count=5",
        "monochrome-light": "/scheme?hex=3D61C8&mode=monochrome-light&count=5",
        analogic: "/scheme?hex=3D61C8&mode=analogic&count=5",
        complement: "/scheme?hex=3D61C8&mode=complement&count=5",
        "analogic-complement":
          "/scheme?hex=3D61C8&mode=analogic-complement&count=5",
        triad: "/scheme?hex=3D61C8&mode=triad&count=5",
        quad: "/scheme?hex=3D61C8&mode=quad&count=5",
      },
    },
    _embedded: {},
  },
  {
    mode: "monochrome-light",
    count: "5",
    colors: [
      {
        hex: {
          value: "#434343",
          clean: "434343",
        },
        rgb: {
          fraction: {
            r: 0.2627450980392157,
            g: 0.2627450980392157,
            b: 0.2627450980392157,
          },
          r: 67,
          g: 67,
          b: 67,
          value: "rgb(67, 67, 67)",
        },
        hsl: {
          fraction: {
            h: 0,
            s: 0,
            l: 0.2627450980392157,
          },
          h: 0,
          s: 0,
          l: 26,
          value: "hsl(0, 0%, 26%)",
        },
        hsv: {
          fraction: {
            h: 0,
            s: 0,
            v: 0.2627450980392157,
          },
          value: "hsv(0, 0%, 26%)",
          h: 0,
          s: 0,
          v: 26,
        },
        name: {
          value: "Tundora",
          closest_named_hex: "#4A4244",
          exact_match_name: false,
          distance: 661,
        },
        cmyk: {
          fraction: {
            c: 0,
            m: 0,
            y: 0,
            k: 0.7372549019607844,
          },
          value: "cmyk(0, 0, 0, 74)",
          c: 0,
          m: 0,
          y: 0,
          k: 74,
        },
        XYZ: {
          fraction: {
            X: 0.2497392156862745,
            Y: 0.2627450980392157,
            Z: 0.2861294117647059,
          },
          value: "XYZ(25, 26, 29)",
          X: 25,
          Y: 26,
          Z: 29,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=434343",
          named: "http://www.thecolorapi.com/id?format=svg&hex=434343",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=434343",
          },
        },
        _embedded: {},
        target: "secondary",
      },
      {
        hex: {
          value: "#5C5C5C",
          clean: "5C5C5C",
        },
        rgb: {
          fraction: {
            r: 0.3607843137254902,
            g: 0.3607843137254902,
            b: 0.3607843137254902,
          },
          r: 92,
          g: 92,
          b: 92,
          value: "rgb(92, 92, 92)",
        },
        hsl: {
          fraction: {
            h: 0,
            s: 0,
            l: 0.3607843137254902,
          },
          h: 0,
          s: 0,
          l: 36,
          value: "hsl(0, 0%, 36%)",
        },
        hsv: {
          fraction: {
            h: 0,
            s: 0,
            v: 0.3607843137254902,
          },
          value: "hsv(0, 0%, 36%)",
          h: 0,
          s: 0,
          v: 36,
        },
        name: {
          value: "Granite Gray",
          closest_named_hex: "#676767",
          exact_match_name: false,
          distance: 605,
        },
        cmyk: {
          fraction: {
            c: 0,
            m: 0,
            y: 0,
            k: 0.6392156862745098,
          },
          value: "cmyk(0, 0, 0, 64)",
          c: 0,
          m: 0,
          y: 0,
          k: 64,
        },
        XYZ: {
          fraction: {
            X: 0.34292549019607843,
            Y: 0.3607843137254902,
            Z: 0.39289411764705884,
          },
          value: "XYZ(34, 36, 39)",
          X: 34,
          Y: 36,
          Z: 39,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=5C5C5C",
          named: "http://www.thecolorapi.com/id?format=svg&hex=5C5C5C",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=5C5C5C",
          },
        },
        _embedded: {},
        target: "error",
      },
      {
        hex: {
          value: "#3556B7",
          clean: "3556B7",
        },
        rgb: {
          fraction: {
            r: 0.20784313725490197,
            g: 0.33725490196078434,
            b: 0.7176470588235294,
          },
          r: 53,
          g: 86,
          b: 183,
          value: "rgb(53, 86, 183)",
        },
        hsl: {
          fraction: {
            h: 0.6243589743589743,
            s: 0.5508474576271186,
            l: 0.4627450980392157,
          },
          h: 225,
          s: 55,
          l: 46,
          value: "hsl(225, 55%, 46%)",
        },
        hsv: {
          fraction: {
            h: 0.6243589743589743,
            s: 0.7103825136612021,
            v: 0.7176470588235294,
          },
          value: "hsv(225, 71%, 72%)",
          h: 225,
          s: 71,
          v: 72,
        },
        name: {
          value: "Violet Blue",
          closest_named_hex: "#324AB2",
          exact_match_name: false,
          distance: 264,
        },
        cmyk: {
          fraction: {
            c: 0.7103825136612021,
            m: 0.5300546448087431,
            y: 0,
            k: 0.2823529411764706,
          },
          value: "cmyk(71, 53, 0, 28)",
          c: 71,
          m: 53,
          y: 0,
          k: 28,
        },
        XYZ: {
          fraction: {
            X: 0.33585215686274505,
            Y: 0.33720627450980395,
            Z: 0.7263356862745098,
          },
          value: "XYZ(34, 34, 73)",
          X: 34,
          Y: 34,
          Z: 73,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=3556B7",
          named: "http://www.thecolorapi.com/id?format=svg&hex=3556B7",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=3556B7",
          },
        },
        _embedded: {},
        target: "warning",
      },
      {
        hex: {
          value: "#5071CE",
          clean: "5071CE",
        },
        rgb: {
          fraction: {
            r: 0.3137254901960784,
            g: 0.44313725490196076,
            b: 0.807843137254902,
          },
          r: 80,
          g: 113,
          b: 206,
          value: "rgb(80, 113, 206)",
        },
        hsl: {
          fraction: {
            h: 0.6230158730158729,
            s: 0.5625,
            l: 0.5607843137254902,
          },
          h: 224,
          s: 56,
          l: 56,
          value: "hsl(224, 56%, 56%)",
        },
        hsv: {
          fraction: {
            h: 0.6230158730158729,
            s: 0.6116504854368933,
            v: 0.807843137254902,
          },
          value: "hsv(224, 61%, 81%)",
          h: 224,
          s: 61,
          v: 81,
        },
        name: {
          value: "Indigo",
          closest_named_hex: "#4F69C6",
          exact_match_name: false,
          distance: 525,
        },
        cmyk: {
          fraction: {
            c: 0.6116504854368933,
            m: 0.45145631067961167,
            y: 0,
            k: 0.19215686274509802,
          },
          value: "cmyk(61, 45, 0, 19)",
          c: 61,
          m: 45,
          y: 0,
          k: 19,
        },
        XYZ: {
          fraction: {
            X: 0.4336619607843137,
            Y: 0.4419560784313725,
            Z: 0.8267317647058824,
          },
          value: "XYZ(43, 44, 83)",
          X: 43,
          Y: 44,
          Z: 83,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=5071CE",
          named: "http://www.thecolorapi.com/id?format=svg&hex=5071CE",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=5071CE",
          },
        },
        _embedded: {},
        target: "info",
      },
      {
        hex: {
          value: "#7791DA",
          clean: "7791DA",
        },
        rgb: {
          fraction: {
            r: 0.4666666666666667,
            g: 0.5686274509803921,
            b: 0.8549019607843137,
          },
          r: 119,
          g: 145,
          b: 218,
          value: "rgb(119, 145, 218)",
        },
        hsl: {
          fraction: {
            h: 0.622895622895623,
            s: 0.5722543352601156,
            l: 0.6607843137254902,
          },
          h: 224,
          s: 57,
          l: 66,
          value: "hsl(224, 57%, 66%)",
        },
        hsv: {
          fraction: {
            h: 0.622895622895623,
            s: 0.4541284403669724,
            v: 0.8549019607843137,
          },
          value: "hsv(224, 45%, 85%)",
          h: 224,
          s: 45,
          v: 85,
        },
        name: {
          value: "Chetwode Blue",
          closest_named_hex: "#8581D9",
          exact_match_name: false,
          distance: 1003,
        },
        cmyk: {
          fraction: {
            c: 0.4541284403669724,
            m: 0.3348623853211009,
            y: 0,
            k: 0.14509803921568631,
          },
          value: "cmyk(45, 33, 0, 15)",
          c: 45,
          m: 33,
          y: 0,
          k: 15,
        },
        XYZ: {
          fraction: {
            X: 0.5501043137254902,
            Y: 0.5676196078431373,
            Z: 0.8893713725490195,
          },
          value: "XYZ(55, 57, 89)",
          X: 55,
          Y: 57,
          Z: 89,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=7791DA",
          named: "http://www.thecolorapi.com/id?format=svg&hex=7791DA",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=7791DA",
          },
        },
        _embedded: {},
        target: "success",
      },
    ],
    seed: {
      hex: {
        value: "#3D61C8",
        clean: "3D61C8",
      },
      rgb: {
        fraction: {
          r: 0.23921568627450981,
          g: 0.3803921568627451,
          b: 0.7843137254901961,
        },
        r: 61,
        g: 97,
        b: 200,
        value: "rgb(61, 97, 200)",
      },
      hsl: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.5582329317269076,
          l: 0.5117647058823529,
        },
        h: 224,
        s: 56,
        l: 51,
        value: "hsl(224, 56%, 51%)",
      },
      hsv: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.695,
          v: 0.7843137254901961,
        },
        value: "hsv(224, 70%, 78%)",
        h: 224,
        s: 70,
        v: 78,
      },
      name: {
        value: "Indigo",
        closest_named_hex: "#4F69C6",
        exact_match_name: false,
        distance: 816,
      },
      cmyk: {
        fraction: {
          c: 0.695,
          m: 0.515,
          y: 0,
          k: 0.21568627450980393,
        },
        value: "cmyk(70, 52, 0, 22)",
        c: 70,
        m: 52,
        y: 0,
        k: 22,
      },
      XYZ: {
        fraction: {
          X: 0.37624941176470583,
          Y: 0.3795411764705882,
          Z: 0.7954498039215686,
        },
        value: "XYZ(38, 38, 80)",
        X: 38,
        Y: 38,
        Z: 80,
      },
      image: {
        bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=3D61C8",
        named: "http://www.thecolorapi.com/id?format=svg&hex=3D61C8",
      },
      contrast: {
        value: "#ffffff",
      },
      _links: {
        self: {
          href: "/id?hex=3D61C8",
        },
      },
      _embedded: {},
    },
    image: {
      bare: "http://www.thecolorapi.com/scheme?format=svg&named=false&hex=3D61C8&mode=monochrome-light&count=5",
      named:
        "http://www.thecolorapi.com/scheme?format=svg&hex=3D61C8&mode=monochrome-light&count=5",
    },
    _links: {
      self: "/scheme?hex=3D61C8&mode=monochrome-light&count=5",
      schemes: {
        monochrome: "/scheme?hex=3D61C8&mode=monochrome&count=5",
        "monochrome-dark": "/scheme?hex=3D61C8&mode=monochrome-dark&count=5",
        "monochrome-light": "/scheme?hex=3D61C8&mode=monochrome-light&count=5",
        analogic: "/scheme?hex=3D61C8&mode=analogic&count=5",
        complement: "/scheme?hex=3D61C8&mode=complement&count=5",
        "analogic-complement":
          "/scheme?hex=3D61C8&mode=analogic-complement&count=5",
        triad: "/scheme?hex=3D61C8&mode=triad&count=5",
        quad: "/scheme?hex=3D61C8&mode=quad&count=5",
      },
    },
    _embedded: {},
  },
  {
    mode: "analogic",
    count: "5",
    colors: [
      {
        hex: {
          value: "#3A5CBE",
          clean: "3A5CBE",
        },
        rgb: {
          fraction: {
            r: 0.22745098039215686,
            g: 0.3607843137254902,
            b: 0.7450980392156863,
          },
          r: 58,
          g: 92,
          b: 190,
          value: "rgb(58, 92, 190)",
        },
        hsl: {
          fraction: {
            h: 0.6237373737373735,
            s: 0.5322580645161291,
            l: 0.48627450980392156,
          },
          h: 225,
          s: 53,
          l: 49,
          value: "hsl(225, 53%, 49%)",
        },
        hsv: {
          fraction: {
            h: 0.6237373737373735,
            s: 0.6947368421052632,
            v: 0.7450980392156863,
          },
          value: "hsv(225, 69%, 75%)",
          h: 225,
          s: 69,
          v: 75,
        },
        name: {
          value: "Lapis Lazuli",
          closest_named_hex: "#436CB9",
          exact_match_name: false,
          distance: 914,
        },
        cmyk: {
          fraction: {
            c: 0.6947368421052632,
            m: 0.5157894736842105,
            y: 0,
            k: 0.2549019607843137,
          },
          value: "cmyk(69, 52, 0, 25)",
          c: 69,
          m: 52,
          y: 0,
          k: 25,
        },
        XYZ: {
          fraction: {
            X: 0.3573074509803922,
            Y: 0.3601850980392157,
            Z: 0.7556109803921569,
          },
          value: "XYZ(36, 36, 76)",
          X: 36,
          Y: 36,
          Z: 76,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=3A5CBE",
          named: "http://www.thecolorapi.com/id?format=svg&hex=3A5CBE",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=3A5CBE",
          },
        },
        _embedded: {},
        target: "secondary",
      },
      {
        hex: {
          value: "#403AC3",
          clean: "403AC3",
        },
        rgb: {
          fraction: {
            r: 0.25098039215686274,
            g: 0.22745098039215686,
            b: 0.7647058823529411,
          },
          r: 64,
          g: 58,
          b: 195,
          value: "rgb(64, 58, 195)",
        },
        hsl: {
          fraction: {
            h: 0.6739659367396595,
            s: 0.541501976284585,
            l: 0.496078431372549,
          },
          h: 243,
          s: 54,
          l: 50,
          value: "hsl(243, 54%, 50%)",
        },
        hsv: {
          fraction: {
            h: 0.6739659367396595,
            s: 0.7025641025641026,
            v: 0.7647058823529411,
          },
          value: "hsv(243, 70%, 76%)",
          h: 243,
          s: 70,
          v: 76,
        },
        name: {
          value: "Governor Bay",
          closest_named_hex: "#2F3CB3",
          exact_match_name: false,
          distance: 1159,
        },
        cmyk: {
          fraction: {
            c: 0.6717948717948717,
            m: 0.7025641025641026,
            y: 0,
            k: 0.23529411764705888,
          },
          value: "cmyk(67, 70, 0, 24)",
          c: 67,
          m: 70,
          y: 0,
          k: 24,
        },
        XYZ: {
          fraction: {
            X: 0.32287019607843137,
            Y: 0.27124313725490196,
            Z: 0.7588090196078432,
          },
          value: "XYZ(32, 27, 76)",
          X: 32,
          Y: 27,
          Z: 76,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=403AC3",
          named: "http://www.thecolorapi.com/id?format=svg&hex=403AC3",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=403AC3",
          },
        },
        _embedded: {},
        target: "error",
      },
      {
        hex: {
          value: "#6B3CC7",
          clean: "6B3CC7",
        },
        rgb: {
          fraction: {
            r: 0.4196078431372549,
            g: 0.23529411764705882,
            b: 0.7803921568627451,
          },
          r: 107,
          g: 60,
          b: 199,
          value: "rgb(107, 60, 199)",
        },
        hsl: {
          fraction: {
            h: 0.7230215827338129,
            s: 0.553784860557769,
            l: 0.5078431372549019,
          },
          h: 260,
          s: 55,
          l: 51,
          value: "hsl(260, 55%, 51%)",
        },
        hsv: {
          fraction: {
            h: 0.7230215827338129,
            s: 0.6984924623115578,
            v: 0.7803921568627451,
          },
          value: "hsv(260, 70%, 78%)",
          h: 260,
          s: 70,
          v: 78,
        },
        name: {
          value: "Purple Heart",
          closest_named_hex: "#7442C8",
          exact_match_name: false,
          distance: 154,
        },
        cmyk: {
          fraction: {
            c: 0.46231155778894467,
            m: 0.6984924623115577,
            y: 0,
            k: 0.2196078431372549,
          },
          value: "cmyk(46, 70, 0, 22)",
          c: 46,
          m: 70,
          y: 0,
          k: 22,
        },
        XYZ: {
          fraction: {
            X: 0.3980482352941176,
            Y: 0.3138352941176471,
            Z: 0.7779082352941176,
          },
          value: "XYZ(40, 31, 78)",
          X: 40,
          Y: 31,
          Z: 78,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=6B3CC7",
          named: "http://www.thecolorapi.com/id?format=svg&hex=6B3CC7",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=6B3CC7",
          },
        },
        _embedded: {},
        target: "warning",
      },
      {
        hex: {
          value: "#973EC9",
          clean: "973EC9",
        },
        rgb: {
          fraction: {
            r: 0.592156862745098,
            g: 0.24313725490196078,
            b: 0.788235294117647,
          },
          r: 151,
          g: 62,
          b: 201,
          value: "rgb(151, 62, 201)",
        },
        hsl: {
          fraction: {
            h: 0.773381294964029,
            s: 0.5627530364372468,
            l: 0.5156862745098039,
          },
          h: 278,
          s: 56,
          l: 52,
          value: "hsl(278, 56%, 52%)",
        },
        hsv: {
          fraction: {
            h: 0.773381294964029,
            s: 0.6915422885572139,
            v: 0.788235294117647,
          },
          value: "hsv(278, 69%, 79%)",
          h: 278,
          s: 69,
          v: 79,
        },
        name: {
          value: "Purple Heart",
          closest_named_hex: "#7442C8",
          exact_match_name: false,
          distance: 1556,
        },
        cmyk: {
          fraction: {
            c: 0.24875621890547261,
            m: 0.6915422885572139,
            y: 0,
            k: 0.21176470588235297,
          },
          value: "cmyk(25, 69, 0, 21)",
          c: 25,
          m: 69,
          y: 0,
          k: 21,
        },
        XYZ: {
          fraction: {
            X: 0.4734278431372549,
            Y: 0.3566949019607843,
            Z: 0.7896282352941176,
          },
          value: "XYZ(47, 36, 79)",
          X: 47,
          Y: 36,
          Z: 79,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=973EC9",
          named: "http://www.thecolorapi.com/id?format=svg&hex=973EC9",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=973EC9",
          },
        },
        _embedded: {},
        target: "info",
      },
      {
        hex: {
          value: "#C341CB",
          clean: "C341CB",
        },
        rgb: {
          fraction: {
            r: 0.7647058823529411,
            g: 0.2549019607843137,
            b: 0.796078431372549,
          },
          r: 195,
          g: 65,
          b: 203,
          value: "rgb(195, 65, 203)",
        },
        hsl: {
          fraction: {
            h: 0.8236714975845413,
            s: 0.5702479338842974,
            l: 0.5254901960784313,
          },
          h: 297,
          s: 57,
          l: 53,
          value: "hsl(297, 57%, 53%)",
        },
        hsv: {
          fraction: {
            h: 0.8236714975845413,
            s: 0.6798029556650246,
            v: 0.796078431372549,
          },
          value: "hsv(297, 68%, 80%)",
          h: 297,
          s: 68,
          v: 80,
        },
        name: {
          value: "Fuchsia",
          closest_named_hex: "#C364C5",
          exact_match_name: false,
          distance: 3395,
        },
        cmyk: {
          fraction: {
            c: 0.03940886699507389,
            m: 0.6798029556650246,
            y: 0,
            k: 0.20392156862745103,
          },
          value: "cmyk(4, 68, 0, 20)",
          c: 4,
          m: 68,
          y: 0,
          k: 20,
        },
        XYZ: {
          fraction: {
            X: 0.5502098039215686,
            Y: 0.4023592156862745,
            Z: 0.8018156862745097,
          },
          value: "XYZ(55, 40, 80)",
          X: 55,
          Y: 40,
          Z: 80,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=C341CB",
          named: "http://www.thecolorapi.com/id?format=svg&hex=C341CB",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=C341CB",
          },
        },
        _embedded: {},
        target: "success",
      },
    ],
    seed: {
      hex: {
        value: "#3D61C8",
        clean: "3D61C8",
      },
      rgb: {
        fraction: {
          r: 0.23921568627450981,
          g: 0.3803921568627451,
          b: 0.7843137254901961,
        },
        r: 61,
        g: 97,
        b: 200,
        value: "rgb(61, 97, 200)",
      },
      hsl: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.5582329317269076,
          l: 0.5117647058823529,
        },
        h: 224,
        s: 56,
        l: 51,
        value: "hsl(224, 56%, 51%)",
      },
      hsv: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.695,
          v: 0.7843137254901961,
        },
        value: "hsv(224, 70%, 78%)",
        h: 224,
        s: 70,
        v: 78,
      },
      name: {
        value: "Indigo",
        closest_named_hex: "#4F69C6",
        exact_match_name: false,
        distance: 816,
      },
      cmyk: {
        fraction: {
          c: 0.695,
          m: 0.515,
          y: 0,
          k: 0.21568627450980393,
        },
        value: "cmyk(70, 52, 0, 22)",
        c: 70,
        m: 52,
        y: 0,
        k: 22,
      },
      XYZ: {
        fraction: {
          X: 0.37624941176470583,
          Y: 0.3795411764705882,
          Z: 0.7954498039215686,
        },
        value: "XYZ(38, 38, 80)",
        X: 38,
        Y: 38,
        Z: 80,
      },
      image: {
        bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=3D61C8",
        named: "http://www.thecolorapi.com/id?format=svg&hex=3D61C8",
      },
      contrast: {
        value: "#ffffff",
      },
      _links: {
        self: {
          href: "/id?hex=3D61C8",
        },
      },
      _embedded: {},
    },
    image: {
      bare: "http://www.thecolorapi.com/scheme?format=svg&named=false&hex=3D61C8&mode=analogic&count=5",
      named:
        "http://www.thecolorapi.com/scheme?format=svg&hex=3D61C8&mode=analogic&count=5",
    },
    _links: {
      self: "/scheme?hex=3D61C8&mode=analogic&count=5",
      schemes: {
        monochrome: "/scheme?hex=3D61C8&mode=monochrome&count=5",
        "monochrome-dark": "/scheme?hex=3D61C8&mode=monochrome-dark&count=5",
        "monochrome-light": "/scheme?hex=3D61C8&mode=monochrome-light&count=5",
        analogic: "/scheme?hex=3D61C8&mode=analogic&count=5",
        complement: "/scheme?hex=3D61C8&mode=complement&count=5",
        "analogic-complement":
          "/scheme?hex=3D61C8&mode=analogic-complement&count=5",
        triad: "/scheme?hex=3D61C8&mode=triad&count=5",
        quad: "/scheme?hex=3D61C8&mode=quad&count=5",
      },
    },
    _embedded: {},
  },
  {
    mode: "complement",
    count: "5",
    colors: [
      {
        hex: {
          value: "#AB8E3A",
          clean: "AB8E3A",
        },
        rgb: {
          fraction: {
            r: 0.6705882352941176,
            g: 0.5568627450980392,
            b: 0.22745098039215686,
          },
          r: 171,
          g: 142,
          b: 58,
          value: "rgb(171, 142, 58)",
        },
        hsl: {
          fraction: {
            h: 0.1238938053097346,
            s: 0.4934497816593887,
            l: 0.4490196078431372,
          },
          h: 45,
          s: 49,
          l: 45,
          value: "hsl(45, 49%, 45%)",
        },
        hsv: {
          fraction: {
            h: 0.1238938053097346,
            s: 0.6608187134502924,
            v: 0.6705882352941176,
          },
          value: "hsv(45, 66%, 67%)",
          h: 45,
          s: 66,
          v: 67,
        },
        name: {
          value: "Metallic Sunburst",
          closest_named_hex: "#9C7C38",
          exact_match_name: false,
          distance: 749,
        },
        cmyk: {
          fraction: {
            c: 0,
            m: 0.1695906432748537,
            y: 0.6608187134502924,
            k: 0.3294117647058824,
          },
          value: "cmyk(0, 17, 66, 33)",
          c: 0,
          m: 17,
          y: 66,
          k: 33,
        },
        XYZ: {
          fraction: {
            X: 0.5167396078431372,
            Y: 0.5572572549019608,
            Z: 0.29551254901960783,
          },
          value: "XYZ(52, 56, 30)",
          X: 52,
          Y: 56,
          Z: 30,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=AB8E3A",
          named: "http://www.thecolorapi.com/id?format=svg&hex=AB8E3A",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=AB8E3A",
          },
        },
        _embedded: {},
        target: "secondary",
      },
      {
        hex: {
          value: "#B8973A",
          clean: "B8973A",
        },
        rgb: {
          fraction: {
            r: 0.7215686274509804,
            g: 0.592156862745098,
            b: 0.22745098039215686,
          },
          r: 184,
          g: 151,
          b: 58,
          value: "rgb(184, 151, 58)",
        },
        hsl: {
          fraction: {
            h: 0.12301587301587302,
            s: 0.5206611570247934,
            l: 0.4745098039215686,
          },
          h: 44,
          s: 52,
          l: 47,
          value: "hsl(44, 52%, 47%)",
        },
        hsv: {
          fraction: {
            h: 0.12301587301587302,
            s: 0.6847826086956522,
            v: 0.7215686274509804,
          },
          value: "hsv(44, 68%, 72%)",
          h: 44,
          s: 68,
          v: 72,
        },
        name: {
          value: "Tussock",
          closest_named_hex: "#C5994B",
          exact_match_name: false,
          distance: 952,
        },
        cmyk: {
          fraction: {
            c: 0,
            m: 0.1793478260869565,
            y: 0.6847826086956522,
            k: 0.2784313725490196,
          },
          value: "cmyk(0, 18, 68, 28)",
          c: 0,
          m: 18,
          y: 68,
          k: 28,
        },
        XYZ: {
          fraction: {
            X: 0.5503850980392156,
            Y: 0.5933380392156862,
            Z: 0.3007035294117647,
          },
          value: "XYZ(55, 59, 30)",
          X: 55,
          Y: 59,
          Z: 30,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=B8973A",
          named: "http://www.thecolorapi.com/id?format=svg&hex=B8973A",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=B8973A",
          },
        },
        _embedded: {},
        target: "error",
      },
      {
        hex: {
          value: "#3A5EC5",
          clean: "3A5EC5",
        },
        rgb: {
          fraction: {
            r: 0.22745098039215686,
            g: 0.3686274509803922,
            b: 0.7725490196078432,
          },
          r: 58,
          g: 94,
          b: 197,
          value: "rgb(58, 94, 197)",
        },
        hsl: {
          fraction: {
            h: 0.6235011990407674,
            s: 0.5450980392156863,
            l: 0.5,
          },
          h: 224,
          s: 55,
          l: 50,
          value: "hsl(224, 55%, 50%)",
        },
        hsv: {
          fraction: {
            h: 0.6235011990407674,
            s: 0.7055837563451777,
            v: 0.7725490196078432,
          },
          value: "hsv(224, 71%, 77%)",
          h: 224,
          s: 71,
          v: 77,
        },
        name: {
          value: "Indigo",
          closest_named_hex: "#4F69C6",
          exact_match_name: false,
          distance: 975,
        },
        cmyk: {
          fraction: {
            c: 0.7055837563451777,
            m: 0.5228426395939086,
            y: 0,
            k: 0.22745098039215683,
          },
          value: "cmyk(71, 52, 0, 23)",
          c: 71,
          m: 52,
          y: 0,
          k: 23,
        },
        XYZ: {
          fraction: {
            X: 0.3650670588235294,
            Y: 0.36777647058823537,
            Z: 0.7826380392156863,
          },
          value: "XYZ(37, 37, 78)",
          X: 37,
          Y: 37,
          Z: 78,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=3A5EC5",
          named: "http://www.thecolorapi.com/id?format=svg&hex=3A5EC5",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=3A5EC5",
          },
        },
        _embedded: {},
        target: "warning",
      },
      {
        hex: {
          value: "#4064CB",
          clean: "4064CB",
        },
        rgb: {
          fraction: {
            r: 0.25098039215686274,
            g: 0.39215686274509803,
            b: 0.796078431372549,
          },
          r: 64,
          g: 100,
          b: 203,
          value: "rgb(64, 100, 203)",
        },
        hsl: {
          fraction: {
            h: 0.6235011990407673,
            s: 0.5720164609053496,
            l: 0.5235294117647058,
          },
          h: 224,
          s: 57,
          l: 52,
          value: "hsl(224, 57%, 52%)",
        },
        hsv: {
          fraction: {
            h: 0.6235011990407673,
            s: 0.6847290640394088,
            v: 0.796078431372549,
          },
          value: "hsv(224, 68%, 80%)",
          h: 224,
          s: 68,
          v: 80,
        },
        name: {
          value: "Indigo",
          closest_named_hex: "#4F69C6",
          exact_match_name: false,
          distance: 783,
        },
        cmyk: {
          fraction: {
            c: 0.6847290640394088,
            m: 0.5073891625615764,
            y: 0,
            k: 0.20392156862745103,
          },
          value: "cmyk(68, 51, 0, 20)",
          c: 68,
          m: 51,
          y: 0,
          k: 20,
        },
        XYZ: {
          fraction: {
            X: 0.38743176470588236,
            Y: 0.39130588235294117,
            Z: 0.8082615686274509,
          },
          value: "XYZ(39, 39, 81)",
          X: 39,
          Y: 39,
          Z: 81,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=4064CB",
          named: "http://www.thecolorapi.com/id?format=svg&hex=4064CB",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=4064CB",
          },
        },
        _embedded: {},
        target: "info",
      },
      {
        hex: {
          value: "#486BD1",
          clean: "486BD1",
        },
        rgb: {
          fraction: {
            r: 0.2823529411764706,
            g: 0.4196078431372549,
            b: 0.8196078431372549,
          },
          r: 72,
          g: 107,
          b: 209,
          value: "rgb(72, 107, 209)",
        },
        hsl: {
          fraction: {
            h: 0.6240875912408759,
            s: 0.5982532751091703,
            l: 0.5509803921568628,
          },
          h: 225,
          s: 60,
          l: 55,
          value: "hsl(225, 60%, 55%)",
        },
        hsv: {
          fraction: {
            h: 0.6240875912408759,
            s: 0.6555023923444976,
            v: 0.8196078431372549,
          },
          value: "hsv(225, 66%, 82%)",
          h: 225,
          s: 66,
          v: 82,
        },
        name: {
          value: "Indigo",
          closest_named_hex: "#4F69C6",
          exact_match_name: false,
          distance: 1152,
        },
        cmyk: {
          fraction: {
            c: 0.6555023923444976,
            m: 0.4880382775119616,
            y: 0,
            k: 0.18039215686274512,
          },
          value: "cmyk(66, 49, 0, 18)",
          c: 66,
          m: 49,
          y: 0,
          k: 18,
        },
        XYZ: {
          fraction: {
            X: 0.4144333333333333,
            Y: 0.4193074509803922,
            Z: 0.8345039215686274,
          },
          value: "XYZ(41, 42, 83)",
          X: 41,
          Y: 42,
          Z: 83,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=486BD1",
          named: "http://www.thecolorapi.com/id?format=svg&hex=486BD1",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=486BD1",
          },
        },
        _embedded: {},
        target: "success",
      },
    ],
    seed: {
      hex: {
        value: "#3D61C8",
        clean: "3D61C8",
      },
      rgb: {
        fraction: {
          r: 0.23921568627450981,
          g: 0.3803921568627451,
          b: 0.7843137254901961,
        },
        r: 61,
        g: 97,
        b: 200,
        value: "rgb(61, 97, 200)",
      },
      hsl: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.5582329317269076,
          l: 0.5117647058823529,
        },
        h: 224,
        s: 56,
        l: 51,
        value: "hsl(224, 56%, 51%)",
      },
      hsv: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.695,
          v: 0.7843137254901961,
        },
        value: "hsv(224, 70%, 78%)",
        h: 224,
        s: 70,
        v: 78,
      },
      name: {
        value: "Indigo",
        closest_named_hex: "#4F69C6",
        exact_match_name: false,
        distance: 816,
      },
      cmyk: {
        fraction: {
          c: 0.695,
          m: 0.515,
          y: 0,
          k: 0.21568627450980393,
        },
        value: "cmyk(70, 52, 0, 22)",
        c: 70,
        m: 52,
        y: 0,
        k: 22,
      },
      XYZ: {
        fraction: {
          X: 0.37624941176470583,
          Y: 0.3795411764705882,
          Z: 0.7954498039215686,
        },
        value: "XYZ(38, 38, 80)",
        X: 38,
        Y: 38,
        Z: 80,
      },
      image: {
        bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=3D61C8",
        named: "http://www.thecolorapi.com/id?format=svg&hex=3D61C8",
      },
      contrast: {
        value: "#ffffff",
      },
      _links: {
        self: {
          href: "/id?hex=3D61C8",
        },
      },
      _embedded: {},
    },
    image: {
      bare: "http://www.thecolorapi.com/scheme?format=svg&named=false&hex=3D61C8&mode=complement&count=5",
      named:
        "http://www.thecolorapi.com/scheme?format=svg&hex=3D61C8&mode=complement&count=5",
    },
    _links: {
      self: "/scheme?hex=3D61C8&mode=complement&count=5",
      schemes: {
        monochrome: "/scheme?hex=3D61C8&mode=monochrome&count=5",
        "monochrome-dark": "/scheme?hex=3D61C8&mode=monochrome-dark&count=5",
        "monochrome-light": "/scheme?hex=3D61C8&mode=monochrome-light&count=5",
        analogic: "/scheme?hex=3D61C8&mode=analogic&count=5",
        complement: "/scheme?hex=3D61C8&mode=complement&count=5",
        "analogic-complement":
          "/scheme?hex=3D61C8&mode=analogic-complement&count=5",
        triad: "/scheme?hex=3D61C8&mode=triad&count=5",
        quad: "/scheme?hex=3D61C8&mode=quad&count=5",
      },
    },
    _embedded: {},
  },
  {
    mode: "analogic-complement",
    count: "5",
    colors: [
      {
        hex: {
          value: "#8D7738",
          clean: "8D7738",
        },
        rgb: {
          fraction: {
            r: 0.5529411764705883,
            g: 0.4666666666666667,
            b: 0.2196078431372549,
          },
          r: 141,
          g: 119,
          b: 56,
          value: "rgb(141, 119, 56)",
        },
        hsl: {
          fraction: {
            h: 0.12352941176470589,
            s: 0.43147208121827413,
            l: 0.3862745098039216,
          },
          h: 44,
          s: 43,
          l: 39,
          value: "hsl(44, 43%, 39%)",
        },
        hsv: {
          fraction: {
            h: 0.12352941176470589,
            s: 0.6028368794326241,
            v: 0.5529411764705883,
          },
          value: "hsv(44, 60%, 55%)",
          h: 44,
          s: 60,
          v: 55,
        },
        name: {
          value: "Metallic Sunburst",
          closest_named_hex: "#9C7C38",
          exact_match_name: false,
          distance: 596,
        },
        cmyk: {
          fraction: {
            c: 0,
            m: 0.15602836879432627,
            y: 0.6028368794326241,
            k: 0.44705882352941173,
          },
          value: "cmyk(0, 16, 60, 45)",
          c: 0,
          m: 16,
          y: 60,
          k: 45,
        },
        XYZ: {
          fraction: {
            X: 0.43455215686274506,
            Y: 0.4671709803921569,
            Z: 0.2750356862745098,
          },
          value: "XYZ(43, 47, 28)",
          X: 43,
          Y: 47,
          Z: 28,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=8D7738",
          named: "http://www.thecolorapi.com/id?format=svg&hex=8D7738",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=8D7738",
          },
        },
        _embedded: {},
        target: "secondary",
      },
      {
        hex: {
          value: "#A5893A",
          clean: "A5893A",
        },
        rgb: {
          fraction: {
            r: 0.6470588235294118,
            g: 0.5372549019607843,
            b: 0.22745098039215686,
          },
          r: 165,
          g: 137,
          b: 58,
          value: "rgb(165, 137, 58)",
        },
        hsl: {
          fraction: {
            h: 0.1230529595015577,
            s: 0.47982062780269064,
            l: 0.4372549019607843,
          },
          h: 44,
          s: 48,
          l: 44,
          value: "hsl(44, 48%, 44%)",
        },
        hsv: {
          fraction: {
            h: 0.1230529595015577,
            s: 0.6484848484848486,
            v: 0.6470588235294118,
          },
          value: "hsv(44, 65%, 65%)",
          h: 44,
          s: 65,
          v: 65,
        },
        name: {
          value: "Metallic Sunburst",
          closest_named_hex: "#9C7C38",
          exact_match_name: false,
          distance: 330,
        },
        cmyk: {
          fraction: {
            c: 0,
            m: 0.16969696969696976,
            y: 0.6484848484848486,
            k: 0.3529411764705882,
          },
          value: "cmyk(0, 17, 65, 35)",
          c: 0,
          m: 17,
          y: 65,
          k: 35,
        },
        XYZ: {
          fraction: {
            X: 0.5000243137254902,
            Y: 0.5382313725490195,
            Z: 0.29272117647058826,
          },
          value: "XYZ(50, 54, 29)",
          X: 50,
          Y: 54,
          Z: 29,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=A5893A",
          named: "http://www.thecolorapi.com/id?format=svg&hex=A5893A",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=A5893A",
          },
        },
        _embedded: {},
        target: "error",
      },
      {
        hex: {
          value: "#953CC7",
          clean: "953CC7",
        },
        rgb: {
          fraction: {
            r: 0.5843137254901961,
            g: 0.23529411764705882,
            b: 0.7803921568627451,
          },
          r: 149,
          g: 60,
          b: 199,
          value: "rgb(149, 60, 199)",
        },
        hsl: {
          fraction: {
            h: 0.7733812949640287,
            s: 0.553784860557769,
            l: 0.5078431372549019,
          },
          h: 278,
          s: 55,
          l: 51,
          value: "hsl(278, 55%, 51%)",
        },
        hsv: {
          fraction: {
            h: 0.7733812949640287,
            s: 0.6984924623115578,
            v: 0.7803921568627451,
          },
          value: "hsv(278, 70%, 78%)",
          h: 278,
          s: 70,
          v: 78,
        },
        name: {
          value: "Purple Heart",
          closest_named_hex: "#7442C8",
          exact_match_name: false,
          distance: 1448,
        },
        cmyk: {
          fraction: {
            c: 0.25125628140703515,
            m: 0.6984924623115577,
            y: 0,
            k: 0.2196078431372549,
          },
          value: "cmyk(25, 70, 0, 22)",
          c: 25,
          m: 70,
          y: 0,
          k: 22,
        },
        XYZ: {
          fraction: {
            X: 0.4659729411764706,
            Y: 0.34885176470588236,
            Z: 0.7810870588235294,
          },
          value: "XYZ(47, 35, 78)",
          X: 47,
          Y: 35,
          Z: 78,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=953CC7",
          named: "http://www.thecolorapi.com/id?format=svg&hex=953CC7",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=953CC7",
          },
        },
        _embedded: {},
        target: "warning",
      },
      {
        hex: {
          value: "#C93EBD",
          clean: "C93EBD",
        },
        rgb: {
          fraction: {
            r: 0.788235294117647,
            g: 0.24313725490196078,
            b: 0.7411764705882353,
          },
          r: 201,
          g: 62,
          b: 189,
          value: "rgb(201, 62, 189)",
        },
        hsl: {
          fraction: {
            h: 0.8477218225419663,
            s: 0.5627530364372468,
            l: 0.5156862745098039,
          },
          h: 305,
          s: 56,
          l: 52,
          value: "hsl(305, 56%, 52%)",
        },
        hsv: {
          fraction: {
            h: 0.8477218225419663,
            s: 0.6915422885572139,
            v: 0.788235294117647,
          },
          value: "hsv(305, 69%, 79%)",
          h: 305,
          s: 69,
          v: 79,
        },
        name: {
          value: "Fuchsia Pink",
          closest_named_hex: "#C154C1",
          exact_match_name: false,
          distance: 1846,
        },
        cmyk: {
          fraction: {
            c: 0,
            m: 0.6915422885572139,
            y: 0.05970149253731336,
            k: 0.21176470588235297,
          },
          value: "cmyk(0, 69, 6, 21)",
          c: 0,
          m: 69,
          y: 6,
          k: 21,
        },
        XYZ: {
          fraction: {
            X: 0.5457964705882352,
            Y: 0.3949835294117647,
            Z: 0.748683137254902,
          },
          value: "XYZ(55, 39, 75)",
          X: 55,
          Y: 39,
          Z: 75,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=C93EBD",
          named: "http://www.thecolorapi.com/id?format=svg&hex=C93EBD",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=C93EBD",
          },
        },
        _embedded: {},
        target: "info",
      },
      {
        hex: {
          value: "#CB4181",
          clean: "CB4181",
        },
        rgb: {
          fraction: {
            r: 0.796078431372549,
            g: 0.2549019607843137,
            b: 0.5058823529411764,
          },
          r: 203,
          g: 65,
          b: 129,
          value: "rgb(203, 65, 129)",
        },
        hsl: {
          fraction: {
            h: 0.9227053140096617,
            s: 0.5702479338842974,
            l: 0.5254901960784313,
          },
          h: 332,
          s: 57,
          l: 53,
          value: "hsl(332, 57%, 53%)",
        },
        hsv: {
          fraction: {
            h: 0.9227053140096617,
            s: 0.6798029556650246,
            v: 0.796078431372549,
          },
          value: "hsv(332, 68%, 80%)",
          h: 332,
          s: 68,
          v: 80,
        },
        name: {
          value: "Mulberry",
          closest_named_hex: "#C54B8C",
          exact_match_name: false,
          distance: 743,
        },
        cmyk: {
          fraction: {
            c: 0,
            m: 0.6798029556650246,
            y: 0.3645320197044335,
            k: 0.20392156862745103,
          },
          value: "cmyk(0, 68, 36, 20)",
          c: 0,
          m: 68,
          y: 36,
          k: 20,
        },
        XYZ: {
          fraction: {
            X: 0.5107674509803921,
            Y: 0.38807686274509806,
            Z: 0.5265898039215686,
          },
          value: "XYZ(51, 39, 53)",
          X: 51,
          Y: 39,
          Z: 53,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=CB4181",
          named: "http://www.thecolorapi.com/id?format=svg&hex=CB4181",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=CB4181",
          },
        },
        _embedded: {},
        target: "success",
      },
    ],
    seed: {
      hex: {
        value: "#3D61C8",
        clean: "3D61C8",
      },
      rgb: {
        fraction: {
          r: 0.23921568627450981,
          g: 0.3803921568627451,
          b: 0.7843137254901961,
        },
        r: 61,
        g: 97,
        b: 200,
        value: "rgb(61, 97, 200)",
      },
      hsl: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.5582329317269076,
          l: 0.5117647058823529,
        },
        h: 224,
        s: 56,
        l: 51,
        value: "hsl(224, 56%, 51%)",
      },
      hsv: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.695,
          v: 0.7843137254901961,
        },
        value: "hsv(224, 70%, 78%)",
        h: 224,
        s: 70,
        v: 78,
      },
      name: {
        value: "Indigo",
        closest_named_hex: "#4F69C6",
        exact_match_name: false,
        distance: 816,
      },
      cmyk: {
        fraction: {
          c: 0.695,
          m: 0.515,
          y: 0,
          k: 0.21568627450980393,
        },
        value: "cmyk(70, 52, 0, 22)",
        c: 70,
        m: 52,
        y: 0,
        k: 22,
      },
      XYZ: {
        fraction: {
          X: 0.37624941176470583,
          Y: 0.3795411764705882,
          Z: 0.7954498039215686,
        },
        value: "XYZ(38, 38, 80)",
        X: 38,
        Y: 38,
        Z: 80,
      },
      image: {
        bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=3D61C8",
        named: "http://www.thecolorapi.com/id?format=svg&hex=3D61C8",
      },
      contrast: {
        value: "#ffffff",
      },
      _links: {
        self: {
          href: "/id?hex=3D61C8",
        },
      },
      _embedded: {},
    },
    image: {
      bare: "http://www.thecolorapi.com/scheme?format=svg&named=false&hex=3D61C8&mode=analogic-complement&count=5",
      named:
        "http://www.thecolorapi.com/scheme?format=svg&hex=3D61C8&mode=analogic-complement&count=5",
    },
    _links: {
      self: "/scheme?hex=3D61C8&mode=analogic-complement&count=5",
      schemes: {
        monochrome: "/scheme?hex=3D61C8&mode=monochrome&count=5",
        "monochrome-dark": "/scheme?hex=3D61C8&mode=monochrome-dark&count=5",
        "monochrome-light": "/scheme?hex=3D61C8&mode=monochrome-light&count=5",
        analogic: "/scheme?hex=3D61C8&mode=analogic&count=5",
        complement: "/scheme?hex=3D61C8&mode=complement&count=5",
        "analogic-complement":
          "/scheme?hex=3D61C8&mode=analogic-complement&count=5",
        triad: "/scheme?hex=3D61C8&mode=triad&count=5",
        quad: "/scheme?hex=3D61C8&mode=quad&count=5",
      },
    },
    _embedded: {},
  },
  {
    mode: "triad",
    count: "5",
    colors: [
      {
        hex: {
          value: "#AB3A59",
          clean: "AB3A59",
        },
        rgb: {
          fraction: {
            r: 0.6705882352941176,
            g: 0.22745098039215686,
            b: 0.34901960784313724,
          },
          r: 171,
          g: 58,
          b: 89,
          value: "rgb(171, 58, 89)",
        },
        hsl: {
          fraction: {
            h: 0.9542772861356931,
            s: 0.4934497816593887,
            l: 0.4490196078431372,
          },
          h: 344,
          s: 49,
          l: 45,
          value: "hsl(344, 49%, 45%)",
        },
        hsv: {
          fraction: {
            h: 0.9542772861356931,
            s: 0.6608187134502924,
            v: 0.6705882352941176,
          },
          value: "hsv(344, 66%, 67%)",
          h: 344,
          s: 66,
          v: 67,
        },
        name: {
          value: "Night Shadz",
          closest_named_hex: "#AA375A",
          exact_match_name: false,
          distance: 71,
        },
        cmyk: {
          fraction: {
            c: 0,
            m: 0.6608187134502924,
            y: 0.47953216374269003,
            k: 0.3294117647058824,
          },
          value: "cmyk(0, 66, 48, 33)",
          c: 0,
          m: 66,
          y: 48,
          k: 33,
        },
        XYZ: {
          fraction: {
            X: 0.42088509803921564,
            Y: 0.3304392156862745,
            Z: 0.3717976470588235,
          },
          value: "XYZ(42, 33, 37)",
          X: 42,
          Y: 33,
          Z: 37,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=AB3A59",
          named: "http://www.thecolorapi.com/id?format=svg&hex=AB3A59",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=AB3A59",
          },
        },
        _embedded: {},
        target: "secondary",
      },
      {
        hex: {
          value: "#58B83A",
          clean: "58B83A",
        },
        rgb: {
          fraction: {
            r: 0.34509803921568627,
            g: 0.7215686274509804,
            b: 0.22745098039215686,
          },
          r: 88,
          g: 184,
          b: 58,
          value: "rgb(88, 184, 58)",
        },
        hsl: {
          fraction: {
            h: 0.2936507936507936,
            s: 0.5206611570247934,
            l: 0.4745098039215686,
          },
          h: 106,
          s: 52,
          l: 47,
          value: "hsl(106, 52%, 47%)",
        },
        hsv: {
          fraction: {
            h: 0.2936507936507936,
            s: 0.6847826086956522,
            v: 0.7215686274509804,
          },
          value: "hsv(106, 68%, 72%)",
          h: 106,
          s: 68,
          v: 72,
        },
        name: {
          value: "Apple",
          closest_named_hex: "#4FA83D",
          exact_match_name: false,
          distance: 800,
        },
        cmyk: {
          fraction: {
            c: 0.5217391304347826,
            m: 0,
            y: 0.6847826086956522,
            k: 0.2784313725490196,
          },
          value: "cmyk(52, 0, 68, 28)",
          c: 52,
          m: 0,
          y: 68,
          k: 28,
        },
        XYZ: {
          fraction: {
            X: 0.4414062745098039,
            Y: 0.6058556862745097,
            Z: 0.3088635294117647,
          },
          value: "XYZ(44, 61, 31)",
          X: 44,
          Y: 61,
          Z: 31,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=58B83A",
          named: "http://www.thecolorapi.com/id?format=svg&hex=58B83A",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=58B83A",
          },
        },
        _embedded: {},
        target: "error",
      },
      {
        hex: {
          value: "#3A5EC5",
          clean: "3A5EC5",
        },
        rgb: {
          fraction: {
            r: 0.22745098039215686,
            g: 0.3686274509803922,
            b: 0.7725490196078432,
          },
          r: 58,
          g: 94,
          b: 197,
          value: "rgb(58, 94, 197)",
        },
        hsl: {
          fraction: {
            h: 0.6235011990407674,
            s: 0.5450980392156863,
            l: 0.5,
          },
          h: 224,
          s: 55,
          l: 50,
          value: "hsl(224, 55%, 50%)",
        },
        hsv: {
          fraction: {
            h: 0.6235011990407674,
            s: 0.7055837563451777,
            v: 0.7725490196078432,
          },
          value: "hsv(224, 71%, 77%)",
          h: 224,
          s: 71,
          v: 77,
        },
        name: {
          value: "Indigo",
          closest_named_hex: "#4F69C6",
          exact_match_name: false,
          distance: 975,
        },
        cmyk: {
          fraction: {
            c: 0.7055837563451777,
            m: 0.5228426395939086,
            y: 0,
            k: 0.22745098039215683,
          },
          value: "cmyk(71, 52, 0, 23)",
          c: 71,
          m: 52,
          y: 0,
          k: 23,
        },
        XYZ: {
          fraction: {
            X: 0.3650670588235294,
            Y: 0.36777647058823537,
            Z: 0.7826380392156863,
          },
          value: "XYZ(37, 37, 78)",
          X: 37,
          Y: 37,
          Z: 78,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=3A5EC5",
          named: "http://www.thecolorapi.com/id?format=svg&hex=3A5EC5",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=3A5EC5",
          },
        },
        _embedded: {},
        target: "warning",
      },
      {
        hex: {
          value: "#4064CB",
          clean: "4064CB",
        },
        rgb: {
          fraction: {
            r: 0.25098039215686274,
            g: 0.39215686274509803,
            b: 0.796078431372549,
          },
          r: 64,
          g: 100,
          b: 203,
          value: "rgb(64, 100, 203)",
        },
        hsl: {
          fraction: {
            h: 0.6235011990407673,
            s: 0.5720164609053496,
            l: 0.5235294117647058,
          },
          h: 224,
          s: 57,
          l: 52,
          value: "hsl(224, 57%, 52%)",
        },
        hsv: {
          fraction: {
            h: 0.6235011990407673,
            s: 0.6847290640394088,
            v: 0.796078431372549,
          },
          value: "hsv(224, 68%, 80%)",
          h: 224,
          s: 68,
          v: 80,
        },
        name: {
          value: "Indigo",
          closest_named_hex: "#4F69C6",
          exact_match_name: false,
          distance: 783,
        },
        cmyk: {
          fraction: {
            c: 0.6847290640394088,
            m: 0.5073891625615764,
            y: 0,
            k: 0.20392156862745103,
          },
          value: "cmyk(68, 51, 0, 20)",
          c: 68,
          m: 51,
          y: 0,
          k: 20,
        },
        XYZ: {
          fraction: {
            X: 0.38743176470588236,
            Y: 0.39130588235294117,
            Z: 0.8082615686274509,
          },
          value: "XYZ(39, 39, 81)",
          X: 39,
          Y: 39,
          Z: 81,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=4064CB",
          named: "http://www.thecolorapi.com/id?format=svg&hex=4064CB",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=4064CB",
          },
        },
        _embedded: {},
        target: "info",
      },
      {
        hex: {
          value: "#486BD1",
          clean: "486BD1",
        },
        rgb: {
          fraction: {
            r: 0.2823529411764706,
            g: 0.4196078431372549,
            b: 0.8196078431372549,
          },
          r: 72,
          g: 107,
          b: 209,
          value: "rgb(72, 107, 209)",
        },
        hsl: {
          fraction: {
            h: 0.6240875912408759,
            s: 0.5982532751091703,
            l: 0.5509803921568628,
          },
          h: 225,
          s: 60,
          l: 55,
          value: "hsl(225, 60%, 55%)",
        },
        hsv: {
          fraction: {
            h: 0.6240875912408759,
            s: 0.6555023923444976,
            v: 0.8196078431372549,
          },
          value: "hsv(225, 66%, 82%)",
          h: 225,
          s: 66,
          v: 82,
        },
        name: {
          value: "Indigo",
          closest_named_hex: "#4F69C6",
          exact_match_name: false,
          distance: 1152,
        },
        cmyk: {
          fraction: {
            c: 0.6555023923444976,
            m: 0.4880382775119616,
            y: 0,
            k: 0.18039215686274512,
          },
          value: "cmyk(66, 49, 0, 18)",
          c: 66,
          m: 49,
          y: 0,
          k: 18,
        },
        XYZ: {
          fraction: {
            X: 0.4144333333333333,
            Y: 0.4193074509803922,
            Z: 0.8345039215686274,
          },
          value: "XYZ(41, 42, 83)",
          X: 41,
          Y: 42,
          Z: 83,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=486BD1",
          named: "http://www.thecolorapi.com/id?format=svg&hex=486BD1",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=486BD1",
          },
        },
        _embedded: {},
        target: "success",
      },
    ],
    seed: {
      hex: {
        value: "#3D61C8",
        clean: "3D61C8",
      },
      rgb: {
        fraction: {
          r: 0.23921568627450981,
          g: 0.3803921568627451,
          b: 0.7843137254901961,
        },
        r: 61,
        g: 97,
        b: 200,
        value: "rgb(61, 97, 200)",
      },
      hsl: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.5582329317269076,
          l: 0.5117647058823529,
        },
        h: 224,
        s: 56,
        l: 51,
        value: "hsl(224, 56%, 51%)",
      },
      hsv: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.695,
          v: 0.7843137254901961,
        },
        value: "hsv(224, 70%, 78%)",
        h: 224,
        s: 70,
        v: 78,
      },
      name: {
        value: "Indigo",
        closest_named_hex: "#4F69C6",
        exact_match_name: false,
        distance: 816,
      },
      cmyk: {
        fraction: {
          c: 0.695,
          m: 0.515,
          y: 0,
          k: 0.21568627450980393,
        },
        value: "cmyk(70, 52, 0, 22)",
        c: 70,
        m: 52,
        y: 0,
        k: 22,
      },
      XYZ: {
        fraction: {
          X: 0.37624941176470583,
          Y: 0.3795411764705882,
          Z: 0.7954498039215686,
        },
        value: "XYZ(38, 38, 80)",
        X: 38,
        Y: 38,
        Z: 80,
      },
      image: {
        bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=3D61C8",
        named: "http://www.thecolorapi.com/id?format=svg&hex=3D61C8",
      },
      contrast: {
        value: "#ffffff",
      },
      _links: {
        self: {
          href: "/id?hex=3D61C8",
        },
      },
      _embedded: {},
    },
    image: {
      bare: "http://www.thecolorapi.com/scheme?format=svg&named=false&hex=3D61C8&mode=triad&count=5",
      named:
        "http://www.thecolorapi.com/scheme?format=svg&hex=3D61C8&mode=triad&count=5",
    },
    _links: {
      self: "/scheme?hex=3D61C8&mode=triad&count=5",
      schemes: {
        monochrome: "/scheme?hex=3D61C8&mode=monochrome&count=5",
        "monochrome-dark": "/scheme?hex=3D61C8&mode=monochrome-dark&count=5",
        "monochrome-light": "/scheme?hex=3D61C8&mode=monochrome-light&count=5",
        analogic: "/scheme?hex=3D61C8&mode=analogic&count=5",
        complement: "/scheme?hex=3D61C8&mode=complement&count=5",
        "analogic-complement":
          "/scheme?hex=3D61C8&mode=analogic-complement&count=5",
        triad: "/scheme?hex=3D61C8&mode=triad&count=5",
        quad: "/scheme?hex=3D61C8&mode=quad&count=5",
      },
    },
    _embedded: {},
  },
  {
    mode: "quad",
    count: "5",
    colors: [
      {
        hex: {
          value: "#AB3A90",
          clean: "AB3A90",
        },
        rgb: {
          fraction: {
            r: 0.6705882352941176,
            g: 0.22745098039215686,
            b: 0.5647058823529412,
          },
          r: 171,
          g: 58,
          b: 144,
          value: "rgb(171, 58, 144)",
        },
        hsl: {
          fraction: {
            h: 0.8731563421828907,
            s: 0.4934497816593887,
            l: 0.4490196078431372,
          },
          h: 314,
          s: 49,
          l: 45,
          value: "hsl(314, 49%, 45%)",
        },
        hsv: {
          fraction: {
            h: 0.8731563421828907,
            s: 0.6608187134502924,
            v: 0.6705882352941176,
          },
          value: "hsv(314, 66%, 67%)",
          h: 314,
          s: 66,
          v: 67,
        },
        name: {
          value: "Red Violet",
          closest_named_hex: "#C0448F",
          exact_match_name: false,
          distance: 1154,
        },
        cmyk: {
          fraction: {
            c: 0,
            m: 0.6608187134502924,
            y: 0.1578947368421052,
            k: 0.3294117647058824,
          },
          value: "cmyk(0, 66, 16, 33)",
          c: 0,
          m: 66,
          y: 16,
          k: 33,
        },
        XYZ: {
          fraction: {
            X: 0.45981647058823527,
            Y: 0.3460117647058823,
            Z: 0.5768074509803921,
          },
          value: "XYZ(46, 35, 58)",
          X: 46,
          Y: 35,
          Z: 58,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=AB3A90",
          named: "http://www.thecolorapi.com/id?format=svg&hex=AB3A90",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=AB3A90",
          },
        },
        _embedded: {},
        target: "secondary",
      },
      {
        hex: {
          value: "#B8973A",
          clean: "B8973A",
        },
        rgb: {
          fraction: {
            r: 0.7215686274509804,
            g: 0.592156862745098,
            b: 0.22745098039215686,
          },
          r: 184,
          g: 151,
          b: 58,
          value: "rgb(184, 151, 58)",
        },
        hsl: {
          fraction: {
            h: 0.12301587301587302,
            s: 0.5206611570247934,
            l: 0.4745098039215686,
          },
          h: 44,
          s: 52,
          l: 47,
          value: "hsl(44, 52%, 47%)",
        },
        hsv: {
          fraction: {
            h: 0.12301587301587302,
            s: 0.6847826086956522,
            v: 0.7215686274509804,
          },
          value: "hsv(44, 68%, 72%)",
          h: 44,
          s: 68,
          v: 72,
        },
        name: {
          value: "Tussock",
          closest_named_hex: "#C5994B",
          exact_match_name: false,
          distance: 952,
        },
        cmyk: {
          fraction: {
            c: 0,
            m: 0.1793478260869565,
            y: 0.6847826086956522,
            k: 0.2784313725490196,
          },
          value: "cmyk(0, 18, 68, 28)",
          c: 0,
          m: 18,
          y: 68,
          k: 28,
        },
        XYZ: {
          fraction: {
            X: 0.5503850980392156,
            Y: 0.5933380392156862,
            Z: 0.3007035294117647,
          },
          value: "XYZ(55, 59, 30)",
          X: 55,
          Y: 59,
          Z: 30,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=B8973A",
          named: "http://www.thecolorapi.com/id?format=svg&hex=B8973A",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=B8973A",
          },
        },
        _embedded: {},
        target: "error",
      },
      {
        hex: {
          value: "#3AC55B",
          clean: "3AC55B",
        },
        rgb: {
          fraction: {
            r: 0.22745098039215686,
            g: 0.7725490196078432,
            b: 0.3568627450980392,
          },
          r: 58,
          g: 197,
          b: 91,
          value: "rgb(58, 197, 91)",
        },
        hsl: {
          fraction: {
            h: 0.37290167865707435,
            s: 0.5450980392156863,
            l: 0.5,
          },
          h: 134,
          s: 55,
          l: 50,
          value: "hsl(134, 55%, 50%)",
        },
        hsv: {
          fraction: {
            h: 0.37290167865707435,
            s: 0.7055837563451777,
            v: 0.7725490196078432,
          },
          value: "hsv(134, 71%, 77%)",
          h: 134,
          s: 71,
          v: 77,
        },
        name: {
          value: "Emerald",
          closest_named_hex: "#50C878",
          exact_match_name: false,
          distance: 1776,
        },
        cmyk: {
          fraction: {
            c: 0.7055837563451777,
            m: 0,
            y: 0.5380710659898477,
            k: 0.22745098039215683,
          },
          value: "cmyk(71, 0, 54, 23)",
          c: 71,
          m: 0,
          y: 54,
          k: 23,
        },
        XYZ: {
          fraction: {
            X: 0.4344780392156863,
            Y: 0.6266486274509804,
            Z: 0.4356756862745098,
          },
          value: "XYZ(43, 63, 44)",
          X: 43,
          Y: 63,
          Z: 44,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=3AC55B",
          named: "http://www.thecolorapi.com/id?format=svg&hex=3AC55B",
        },
        contrast: {
          value: "#000000",
        },
        _links: {
          self: {
            href: "/id?hex=3AC55B",
          },
        },
        _embedded: {},
        target: "warning",
      },
      {
        hex: {
          value: "#4064CB",
          clean: "4064CB",
        },
        rgb: {
          fraction: {
            r: 0.25098039215686274,
            g: 0.39215686274509803,
            b: 0.796078431372549,
          },
          r: 64,
          g: 100,
          b: 203,
          value: "rgb(64, 100, 203)",
        },
        hsl: {
          fraction: {
            h: 0.6235011990407673,
            s: 0.5720164609053496,
            l: 0.5235294117647058,
          },
          h: 224,
          s: 57,
          l: 52,
          value: "hsl(224, 57%, 52%)",
        },
        hsv: {
          fraction: {
            h: 0.6235011990407673,
            s: 0.6847290640394088,
            v: 0.796078431372549,
          },
          value: "hsv(224, 68%, 80%)",
          h: 224,
          s: 68,
          v: 80,
        },
        name: {
          value: "Indigo",
          closest_named_hex: "#4F69C6",
          exact_match_name: false,
          distance: 783,
        },
        cmyk: {
          fraction: {
            c: 0.6847290640394088,
            m: 0.5073891625615764,
            y: 0,
            k: 0.20392156862745103,
          },
          value: "cmyk(68, 51, 0, 20)",
          c: 68,
          m: 51,
          y: 0,
          k: 20,
        },
        XYZ: {
          fraction: {
            X: 0.38743176470588236,
            Y: 0.39130588235294117,
            Z: 0.8082615686274509,
          },
          value: "XYZ(39, 39, 81)",
          X: 39,
          Y: 39,
          Z: 81,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=4064CB",
          named: "http://www.thecolorapi.com/id?format=svg&hex=4064CB",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=4064CB",
          },
        },
        _embedded: {},
        target: "info",
      },
      {
        hex: {
          value: "#486BD1",
          clean: "486BD1",
        },
        rgb: {
          fraction: {
            r: 0.2823529411764706,
            g: 0.4196078431372549,
            b: 0.8196078431372549,
          },
          r: 72,
          g: 107,
          b: 209,
          value: "rgb(72, 107, 209)",
        },
        hsl: {
          fraction: {
            h: 0.6240875912408759,
            s: 0.5982532751091703,
            l: 0.5509803921568628,
          },
          h: 225,
          s: 60,
          l: 55,
          value: "hsl(225, 60%, 55%)",
        },
        hsv: {
          fraction: {
            h: 0.6240875912408759,
            s: 0.6555023923444976,
            v: 0.8196078431372549,
          },
          value: "hsv(225, 66%, 82%)",
          h: 225,
          s: 66,
          v: 82,
        },
        name: {
          value: "Indigo",
          closest_named_hex: "#4F69C6",
          exact_match_name: false,
          distance: 1152,
        },
        cmyk: {
          fraction: {
            c: 0.6555023923444976,
            m: 0.4880382775119616,
            y: 0,
            k: 0.18039215686274512,
          },
          value: "cmyk(66, 49, 0, 18)",
          c: 66,
          m: 49,
          y: 0,
          k: 18,
        },
        XYZ: {
          fraction: {
            X: 0.4144333333333333,
            Y: 0.4193074509803922,
            Z: 0.8345039215686274,
          },
          value: "XYZ(41, 42, 83)",
          X: 41,
          Y: 42,
          Z: 83,
        },
        image: {
          bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=486BD1",
          named: "http://www.thecolorapi.com/id?format=svg&hex=486BD1",
        },
        contrast: {
          value: "#ffffff",
        },
        _links: {
          self: {
            href: "/id?hex=486BD1",
          },
        },
        _embedded: {},
        target: "success",
      },
    ],
    seed: {
      hex: {
        value: "#3D61C8",
        clean: "3D61C8",
      },
      rgb: {
        fraction: {
          r: 0.23921568627450981,
          g: 0.3803921568627451,
          b: 0.7843137254901961,
        },
        r: 61,
        g: 97,
        b: 200,
        value: "rgb(61, 97, 200)",
      },
      hsl: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.5582329317269076,
          l: 0.5117647058823529,
        },
        h: 224,
        s: 56,
        l: 51,
        value: "hsl(224, 56%, 51%)",
      },
      hsv: {
        fraction: {
          h: 0.6235011990407673,
          s: 0.695,
          v: 0.7843137254901961,
        },
        value: "hsv(224, 70%, 78%)",
        h: 224,
        s: 70,
        v: 78,
      },
      name: {
        value: "Indigo",
        closest_named_hex: "#4F69C6",
        exact_match_name: false,
        distance: 816,
      },
      cmyk: {
        fraction: {
          c: 0.695,
          m: 0.515,
          y: 0,
          k: 0.21568627450980393,
        },
        value: "cmyk(70, 52, 0, 22)",
        c: 70,
        m: 52,
        y: 0,
        k: 22,
      },
      XYZ: {
        fraction: {
          X: 0.37624941176470583,
          Y: 0.3795411764705882,
          Z: 0.7954498039215686,
        },
        value: "XYZ(38, 38, 80)",
        X: 38,
        Y: 38,
        Z: 80,
      },
      image: {
        bare: "http://www.thecolorapi.com/id?format=svg&named=false&hex=3D61C8",
        named: "http://www.thecolorapi.com/id?format=svg&hex=3D61C8",
      },
      contrast: {
        value: "#ffffff",
      },
      _links: {
        self: {
          href: "/id?hex=3D61C8",
        },
      },
      _embedded: {},
    },
    image: {
      bare: "http://www.thecolorapi.com/scheme?format=svg&named=false&hex=3D61C8&mode=quad&count=5",
      named:
        "http://www.thecolorapi.com/scheme?format=svg&hex=3D61C8&mode=quad&count=5",
    },
    _links: {
      self: "/scheme?hex=3D61C8&mode=quad&count=5",
      schemes: {
        monochrome: "/scheme?hex=3D61C8&mode=monochrome&count=5",
        "monochrome-dark": "/scheme?hex=3D61C8&mode=monochrome-dark&count=5",
        "monochrome-light": "/scheme?hex=3D61C8&mode=monochrome-light&count=5",
        analogic: "/scheme?hex=3D61C8&mode=analogic&count=5",
        complement: "/scheme?hex=3D61C8&mode=complement&count=5",
        "analogic-complement":
          "/scheme?hex=3D61C8&mode=analogic-complement&count=5",
        triad: "/scheme?hex=3D61C8&mode=triad&count=5",
        quad: "/scheme?hex=3D61C8&mode=quad&count=5",
      },
    },
    _embedded: {},
  },
];

export const DefaultTheme = {
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  direction: "ltr",
  mixins: {
    toolbar: {
      minHeight: 56,
      "@media (min-width:0px) and (orientation: landscape)": {
        minHeight: 48,
      },
      "@media (min-width:600px)": {
        minHeight: 64,
      },
    },
  },
  overrides: {},
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    type: "light",
    primary: {
      light: "#7986cb",
      main: "#3f51b5",
      dark: "#303f9f",
      contrastText: "#fff",
      contrastDark: "#fff",
      contrastLight: "#000",
    },
    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff",
      contrastDark: "#fff",
      contrastLight: "#000",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
      contrastDark: "#fff",
      contrastLight: "#000",
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
      contrastDark: "#fff",
      contrastLight: "#000",
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#fff",
      contrastDark: "#fff",
      contrastLight: "#000",
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
      contrastText: "rgba(0, 0, 0, 0.87)",
      contrastDark: "#fff",
      contrastLight: "#000",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#303030",
      A700: "#616161",
    },
    muiToolShades: {
      main: "#121b4c",
      dark: "rgb(14, 21, 60)",
      light: "rgb(65, 72, 112)",
      contrastHexLight: "rgb(255, 255, 255)",
      contrastHexMain: "rgb(255, 255, 255)",
      contrastHexDark: "rgb(255, 255, 255)",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#fff",
      default: "#fffcf9",
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  props: {},
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
    "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
  typography: {
    htmlFontSize: 16,
    fontFamily: '"EB Garamond", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"EB Garamond", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h2: {
      fontFamily: '"EB Garamond", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
    },
    h3: {
      fontFamily: '"EB Garamond", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: '"EB Garamond", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: '"EB Garamond", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: '"EB Garamond", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontFamily: '"EB Garamond", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontFamily: '"EB Garamond", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontFamily: '"EB Garamond", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontFamily: '"EB Garamond", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontFamily: '"EB Garamond", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    caption: {
      fontFamily: '"EB Garamond", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontFamily: '"EB Garamond", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "0.75rem",
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 4,
  },
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  debug: {
    display: "none",
    fontWeight: 800,
  },
  form: {
    padding: 10,
    width: "10%",
  },
  userCard: {
    opacity: ".9",
    margin: 3,
    padding: 3,
    width: "50%",
  },
  badge: {
    whiteSpace: "nowrap",
    maxWidth: 300,
    fontWeight: 600,
    borderRadius: 3,
    padding: 2,
    margin: 3,
    textTransform: "lowercase",
  },
  submitButton: {
    border: "1px solid grey",
    padding: 3,
    fontWeight: 600,
    margin: 3,
    whiteSpace: "nowrap",
    width: 50,
    height: 60,
    borderRadius: 500,
  },
  loadMoreButton: {
    height: "60px",
    borderRadius: 3,
    border: 0,
    margin: "2 3 3 2",
    padding: "0 0 0 0",
  },
  flexRows: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  errorMessage: {
    position: "fixed",
    left: 5,
    top: "140px",
    width: "50%",
  },
  loading: {
    width: "100%",
    zIndex: 2000,
    "& > * + *": {
      marginLeft: 2,
    },
  },
  loud: {
    fontWeight: 800,
  },
  siteLink: {
    borderRadius: 5,
    padding: 3,
    whiteSpace: "nowrap",
    maxHeight: 60,
    textDecoration: "none",
  },
};
