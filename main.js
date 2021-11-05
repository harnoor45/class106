

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifer('https://teachablemachine.withgoogle.com/models/B9_z1itG4/', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}


function gotResults(error, results) {
    if (error){
        console.error(error);
    } else {
        console.log(results);random_number_r = Math.floor(Maths.random() * 255) +1;
        console.log(results);random_number_g = Math.floor(Maths.random() * 255) +1;
        console.log(results);random_number_b = Math.floor(Maths.random() * 255) +1;

        document.geElemetById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.geElemetById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
       
        img = document.geElemetById('alien1');
        img1 = document.geElemetById('alien2');
        img2 = document.geElemetById('alien3');
        img3 = document.geElemetById('alien4');

        if (results[0].label == "Clap") {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';

        } else if (results[0].label == "snap") {
                img.src = 'aliens-01.png';
                img1.src = 'aliens-02.gif';
                img2.src = 'aliens-03.png';
                img3.src = 'aliens-04.png';
        
            
    } else if (results[0].label == "spoon and plat") {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.gif';
        img3.src = 'aliens-04.png';

    } else   {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.gif';
    
    
}
}
}

