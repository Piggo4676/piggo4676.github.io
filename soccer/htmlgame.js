(()=>{
    var o, i, t, l, e, c, d, n, a;
    a = window.location !== window.parent.location ? location.ancestorOrigins != null ? location.ancestorOrigins[0] : document.referrer : document.location.href;
    i = a != null && (l = a.match(/\/\/([^\/]+)/)) != null ? l[1] : void 0;
    n = (e = window.location.href) != null && (c = e.match(/\/html\/(\d+)/)) != null ? c[1] : void 0;
    t = (d = document.location.href) != null && d.match(/^https?:\/\/commondatastorage\.googleapis\.com\/itchio\//) || i && !(i === "itch.io" || i.match(/\.itch\.io$/)) ? !0 : void 0;
    t = !1;
    navigator.sendBeacon != null && (o = new FormData,
    o.append("domain", i || "unknown-domain"),
    n && o.append("upload_id", n),
    t && o.append("hotlink", "1"),
    navigator.sendBeacon("https://itch.io/html-callback", o));
    t && (n ? window.location = "https://itch.io/embed-hotlink/" + n : window.location = "https://itch.io/embed-hotlink");
}
)();
