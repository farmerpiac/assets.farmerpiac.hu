let cartItems={},cdn="https://cdn.farmerpiac.hu/",cdn2="https://cdn2.farmerpiac/";for(var i=0;i<localStorage.length;i++)"ttl"!=localStorage.key(i)&&"cartValue"!=localStorage.key(i)&&(cartItems[localStorage.key(i)]=localStorage.getItem(localStorage.key(i)));$.ajax({url:window.location.href,type:"POST",async:!0,data:{status:2,cartItems:cartItems},success:function(t){let e=JSON.stringify(t),r=null==JSON.parse(e).percentPrice?0:JSON.parse(e).percentPrice;if("success"==JSON.parse(e).order)localStorage.clear(),$("#cart").text(0);else{let t=JSON.parse(e).cartProduct;if(null!=t){let e="\n                    <thead>\n                        <tr>\n                            <th colspan=2>Termék</th>\n                            <th>Mennyiség</th>\n                            <th>Egységár</th>\n                            <th>Részösszeg</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                ";for(let r in t)for(let a in t[r]){let l=null,n=t[r][a].id,c=t[r][a].realPrice*localStorage.getItem(n);l=1==t[r][a].imageStatus?cdn+"assets/img/small/"+t[r][a].imageUrl:cdn2+"assets/img/small/"+t[r][a].imageUrl,e+='\n                            <tr style="height:100px;">\n                                <td>\n                                    <a href="'+t[r][a].productUrl+'">\n                                        <img class="img-fluid img-overview"\n                                            src="'+l+'"\n                                            alt="'+t[r][a].name+'">\n                                    </a>\n                                </td>\n                                <td><a href="'+t[r][a].productUrl+'">'+t[r][a].name+"</a></td>\n                                <td>"+localStorage.getItem(n)+"</td>\n                                <td>"+t[r][a].realPrice+" Ft/Db</td>\n                                <td>"+c+" Ft</td>\n                            </tr>\n                        "}e+="\n                </tbody>\n                <tfoot>\n                </tfoot>\n                ",$("#table").html(e)}}0!=JSON.parse(e).percent&&0!=JSON.parse(e).percentHuf&&JSON.parse(e).realPrice>=JSON.parse(e).percentHuf?($("#realPrice").html(JSON.parse(e).realPrice+" Ft"),$("#percent").html(JSON.parse(e).percent+" %")):$(".delete").remove(),$("#totalPrice").html(r+" Ft")},error:function(){window.location.href="https://"+window.location.hostname+"/kosar"}});
