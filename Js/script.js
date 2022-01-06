const doctors = document.querySelector(".container");
function createrectangle([designation,img,docName,docSpec,line5,docAbt,knowBtn]){

    let code = `
    <div class="doctor">
            <div class="rectangle12">
                <p class="pediatric-bmt">${designation}</p>
                <img class="bitmap-copy" src="${img}" alt="">
                <p class="dr-vijay-agarwal-copy">${docName}</p>
                <p class="md-mrcp-ph-d-cct-le-copy">${docSpec}<br>
                    Lead & Sr. Consultant - Medical Oncology & Haematology</p>
                    <hr class="line-5-copy">${line5}
                    <p class="dr-vijay-agarwal-is-copy">${docAbt} </p>
                        <div class="rectangle9">
                            <p class="know-more">${knowBtn}</p>
                            </div>
                            </div>
                            </div> 
                            `;
                            
                            doctors.innerHTML += code;  
       
                        }

               
                
               
               let doc1 = ["Pediatic BMT",
               "C:\Vinay's Web\New Assessment\img\Bitmap Copy.png",
               "Dr. Vijay Agarwal",
               "MD MRCP PhD CCT Lead & Sr. Consultant - Medical Oncology & Haematology ",
               "",
               "Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology Dr. Agarwal has been practising Medical Oncology since 2004.",
               "Know More"];
               
        
        createrectangle(doc1);
        // createrectangle(doc2);


