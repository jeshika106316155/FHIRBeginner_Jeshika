function padLeft(str, lenght) {
    if (str.length >= lenght) return str;
    else return padLeft("0" + str, lenght);
  }

function uploadPatient(){
    //取得生日資訊
    var birth= document.getElementById("birthDate").value;
   
    //取得性別資訊
    var items = document.getElementsByName("gender");
    var get_gender = "";
    for (var i = 0; i < items.length; i++) {
            if (items[i].checked) {
              get_gender = items[i].value;
            }
    }
   var getfamily=document.getElementById("family").value;
   var getgiven=document.getElementById("given").value;
   if(getfamily == null||getgiven==null)
   {
       alert("請輸入姓名");
   }
   
  // 資料檢查完畢，開始寫入
  const patientData = {
    resourceType: "Patient",
        identifier: [{
            use: "usual",
            system: "https://www.dicom.org.tw/cs/identityCardNumber_tw",
            type: {
                text: "身分證字號"
            },
            value:  document.getElementById("identifier").value,
            assigner: {
                display: "內政部"
            }
        }],
        name: [
            {
                text: getfamily+getgiven,
                family: getfamily,
                given: [
                    getgiven
                ]
            }
        ],
        // managingOrganization: {
        //     reference: "Organization/"
        // },
        active: true,
        gender: get_gender,
        birthDate: birth
        // telecom:[{
        //     use: "home",
        //     system: "phone",
        //     value: $('#telecom').val() || ""
        // }]     
  };
  
    // 送出至伺服器
    PostData('Patient',patientData);
}