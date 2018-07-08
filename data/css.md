What is the final color of h1?

```
 h1 {
            font: 18px Helvetica;
            color: purple
            background: aqua;
    }
```

1.  black.

2.  purple.
3.  Syntax error.
4.  page won't render.

> > > >

What is the final color of h1?

```
<html>
<head>
    <style>
      #alert {color: red;}
    </style>
</head>
<body>
    <h1 id="alert">Alert 1</h1>
    <h1 id="alert">Alert 2</h1>
    <em id="alert">Alert 3</em>
</body>
</html>
```

1.  All the Alerts will be red.

2.  Only "Alert 1" will be red
3.  Only "Alert 3" will be red
4.  syntax error, you can't have multiple html element with same id.

> > > >

What is the effect of style on h1 and h2?

```
<html>
<head>
    <style>
    [lang|=en]{
        color: red;
    }
    </style>
</head>
<body>
        <h1 lang="en">h1</h1>
        <h2 lang="en-us">h2</h2>
</body>
</html>
```

1.  Both h1 and h2 will be red.

2.  Only h1 will be red.
3.  Only h2 will be red.
4.  unsupported css rule.

> > > >

How to make h1 text red?

```
<h1 class="c1 c2 c3">make me red</h1>
```

1.  [class~="c1"]{color: red}

2.  [class~="c1 c2"]{color: red}
3.  [class~="c2 c3"]{color: red}
4.  [class~="c1 c2 c3"]{color: red}

> > > >

How to make h1 text red?

```
<h1 class="c1 c2 c3">make me red</h1>
```

1.  All the options

2.  [class*="c1"]{color: red}
3.  [class*="c1 c2"]{color: red}
4.  [class*="c1 c2 c3"]{color: red}

> > > >

Make all 3 below links Bold, with single style.

```
<a href="https://test.pdf">PDF</a>
<a href="https://test.PDF">PDF</a>
<a href="https://test.Pdf">PDF</a>
```

1.  a[href$=".pdf" i] {font-weight: bold;}

2.  a[i href$=".pdf"] {font-weight: bold;}
3.  a[href$i=".pdf"] {font-weight: bold;}
4.  Can't be done!

> > > >
