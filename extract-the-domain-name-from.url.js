function domainName(url){
    return url.match(/^(?:https?:\/\/)?(?:www\.)?([^\/]+)/)[1].split('.')[0]
  }


domainName('http://github.com')
domainName("http://www.zombie-bites.com");
domainName("http://github.com/carbonfive/raygun")
domainName("https://www.cnet.com")
domainName("www.xakep.ru")
domainName("http://w-g5kq.biz/warez/")