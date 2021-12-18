const baseUrl = 'http://hapi.fhir.org/baseR4'; //http://hapi.fhir.org/baseR4  https://hapi.fhir.tw/fhir
const baseheader=new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/fhir+json',
        
    });

function PostData(resource,jsondata)
{
    // input json
    alert(JSON.stringify(jsondata));
    fetch(`${baseUrl}/`+resource, {
        method: 'POST',
        body: JSON.stringify(jsondata),
        headers: baseheader
    })
    .then(response => response.json())
    .then(function(json) {
        const area = document.getElementById('resultData');
        area.textContent = JSON.stringify(json);
        window.open(`${baseUrl}/`+resource+'/'+json.id);
    });
}

function GetFHIRURL()
{
    const fhirsever= document.getElementById('getFHIRURL');
    fhirsever.textContent=baseUrl;
}


