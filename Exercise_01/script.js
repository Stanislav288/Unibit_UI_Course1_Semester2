var text=[];
text.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus, elit eget commodo accumsan, enim eros aliquam arcu, eget condimentum est felis eget erat. Aenean accumsan pellentesque quam eget aliquet. Fusce imperdiet dictum augue et ultrices. Nullam mattis, risus fermentum scelerisque tincidunt, enim purus ultrices dolor, id molestie leo lacus vel dui. Nulla at neque ligula. Ut lacinia, leo ut blandit elementum, libero justo interdum diam, sit amet venenatis velit ligula vel lacus. Nulla sed felis lorem. Duis sollicitudin neque nec ante convallis condimentum. Donec eget augue sagittis, lacinia erat a, euismod orci. Nullam mattis ultrices scelerisque. In a turpis tortor");
text.push("Phasellus condimentum euismod aliquet. Curabitur dignissim bibendum rhoncus. Vivamus massa dolor, mattis a turpis et, iaculis luctus ligula. Curabitur aliquam augue in fringilla aliquam. Mauris in sodales justo. Nulla sed varius odio, quis porta libero. Ut a massa ligula. Quisque porttitor neque sit amet enim mattis, a semper leo volutpat. Integer facilisis urna dolor, in placerat urna imperdiet ut. Sed pellentesque magna non lectus porttitor, viverra imperdiet odio tincidunt. Cras pellentesque convallis hendrerit. Curabitur viverra diam et quam pellentesque tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut a porta sem. Aliquam id neque lacus. Nam odio erat, volutpat ac arcu nec, ullamcorper euismod arcu");
text.push("Integer congue tortor in iaculis posuere. Nam id arcu dignissim, condimentum lectus id, tristique diam. In accumsan libero at quam scelerisque placerat a in sapien. Aenean convallis quam consectetur pretium ultrices. Vestibulum in enim massa. Phasellus ullamcorper, ipsum quis rhoncus pharetra, turpis massa molestie risus, a finibus ligula justo nec sem. Nullam congue nunc nunc, ac gravida lacus fermentum vel. Vivamus consequat quis risus ac consequat. Donec posuere sodales malesuada. Proin sollicitudin dolor tortor, pretium tempor turpis dignissim eu");
text.push("Ut lobortis eros vel efficitur condimentum. Nullam efficitur dui ac sem lobortis, non sodales mauris luctus. Suspendisse et nisl sit amet tortor pulvinar dapibus. Mauris malesuada elit ac odio condimentum, vitae efficitur mauris sodales. Pellentesque ut dui vel nulla mollis sagittis at a nunc. Aliquam auctor quam felis, eget blandit leo auctor quis. Cras diam nibh, placerat et lacinia id, posuere ac augue. Quisque tempus elit vitae accumsan semper. Suspendisse dapibus, ligula sit amet lobortis consequat, lorem dui tincidunt dolor, at molestie quam ligula eget nunc. Morbi mattis metus ligula, eget ultrices erat eleifend non. Praesent hendrerit tortor ac leo interdum, non placerat arcu feugiat. Nullam auctor velit mi, eget euismod leo venenatis quis. Nam nec iaculis urna. Sed interdum tincidunt libero et gravida. Vivamus scelerisque semper fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos");
text.push("Cras sed convallis nisl. In hac habitasse platea dictumst. Nulla dapibus, magna eget egestas viverra, velit leo viverra nibh, vel vestibulum nunc eros sed justo. Nullam rhoncus efficitur dui ac blandit. Sed pellentesque justo vitae aliquet dignissim. Nam auctor pharetra diam a sagittis. Ut ultricies aliquet magna, eu venenatis massa condimentum a. Ut cursus neque vitae faucibus mollis");


function populator(){
    let container1=document.getElementById("container1");
    for(let i=0;i<5;i++){
        let paragraph = document.createElement("p");
        paragraph.innerText=text[i];
        paragraph.setAttribute("id","p"+(i+1));
        container1.appendChild(paragraph);
    }
}

function createH3(){
    let container2=document.getElementById("container2");
    for(let i=0;i<5;i++){
        let h3 = document.createElement("h3");
        h3.innerText=document.getElementById("p"+(i+1)).firstChild.nodeValue;
        container2.appendChild(h3);
    }
}


function changeH3Color(){
    let allH3=document.querySelectorAll("h3");
    for(let i=0;i<allH3.length;i++){
      allH3[i].setAttribute("style","color:orange");
    }
}