
const limitLen = 5;
const stopWords = ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now"];
let wordCount = {};

let data = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: [],
    hoverOffset: 4
  }]
};

let config = {
  type: 'doughnut',
  data: data,
  options: {
    responsive: false
  }
};

let wordchart = new Chart(
  document.getElementById('chart'),
  config
);

function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
} 

function intToRGB(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}



function updateChart(){

  var items = Object.keys(wordCount).map(function(key) {
    return [key, wordCount[key]];
  });

  // Sort the array based on the second element
  items.sort(function(first, second) {
    return second[1] - first[1];
  });

  console.log(items);


  let labels = [];
  let vals = [];
  let cols = [];
  let ccount = 0;
  for (let i=0;i<items.length;i++) {
    if(stopWords.indexOf(items[i][0]) > -1) continue;
    labels.push(items[i][0]);
    vals.push(items[i][1]);
    cols.push("#"+intToRGB(hashCode(items[i][0])));
    ccount++;
    if(ccount > limitLen) break;
  }

  wordchart.data.labels = labels;
  wordchart.data.datasets.forEach((dataset) => {
    dataset.data = vals;
    dataset.backgroundColor = cols;
  });
  wordchart.update();
}


setInterval(updateChart,1000);
