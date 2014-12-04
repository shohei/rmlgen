
 var timerId = setInterval(function(){
       if(FS.findObject("/output").contents != null){
           console.log("Output file ready."); 
           var rml = String.fromCharCode.apply(null, Module.ret());
           // console.log(rml);
           var rmlout = document.getElementById('rmloutput');
           rmlout.innerText = rml

           var rml_blob = new Blob([rml]);
           document.rml_blob = rml_blob; 
           var a = document.createElement("a");
           var label = document.createTextNode("Download");
           var disp = document.getElementById("disp");

           if (window.URL) {
             disp.innerHTML = '<a href="' + window.URL.createObjectURL(rml_blob) + '" target="_blank" download="convert.rml">Download .rml file</a>';
           } else if (window.webkitURL) {
             disp.innerHTML = '<a href="' + window.webkitURL.createObjectURL(rml_blob) + '" target="_blank" download="convert.rml">Download .rml file</a>';
           }

           clearInterval(timerId);
         } else {
           console.log("An error occured. Reloading browser in 3 seconds...");
           setTimeout(function(){
                //reload browser
                location.reload();                
           },3000);
         }
    },300);

}
