"use strict";

function start(){
    console.log("start speech");
    var r = document.getElementById("Speech");
    if("webkitSpeechRecognition" in window){
        var speechRecognizer = new webkitSpeechRecognition();
        speechRecognizer.continuous = true;
        speechRecognizer.interimResults = true;
        speechRecognizer.lang = "en-US";
        speechRecognizer.start();
        
        var finalTranscripts = "";
        const limit = 10;
        speechRecognizer.onresult = function(event){
            var interTranscripts = "";
            for(var i=event.resultIndex; i<event.results.length; i++){
                var transcript = event.results[i][0].transcript;
                transcript.replace("\n", "<br>");
                if(event.results[i].isFinal){
                    finalTranscripts += transcript;
                    const t_words = transcript.split(' ');
                    for(let j=0;j<t_words.length;j++){
                        if(t_words[j].match(/^[A-Za-z0-9]+\**$/)){
                            if(t_words[j] in wordCount){
                                wordCount[t_words[j]]++;
                            }else{
                                wordCount[t_words[j]]=1;
                            }
                        }
                    }
                    const words = finalTranscripts.split(' ');
                    finalTranscripts = words.slice(-limit).join(' ')+" ";
                }else{
                    interTranscripts += transcript;
                }
                r.innerHTML = finalTranscripts + '<span style="color: #999;">' + interTranscripts + '</span>';
            }
        };
        speechRecognizer.onerror = function(event){
        };
        speechRecognizer.addEventListener('end', () => speechRecognizer.start());
    }
    else{
        r.innerHTML = "Your browser does not support speech recognition. Use Google Chrome.";
    }
}