
function uploadData()
{
    var getResource = document.getElementById("resourceType").value;
    var getData = JSON.parse(document.getElementById("uploadData").value);
    var result=document.getElementById("txt_result");
    PostData(getResource,getData,result);
}