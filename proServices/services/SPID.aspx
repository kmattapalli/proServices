<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SPID.aspx.cs" Inherits="SCITY.SPID" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
     <link rel="Stylesheet" href="/CSS/Style.css" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="js\script.js"></script>
    <script src="js\base64.min.js"></script>

    <script src="Scripts/jquery-1.4.1.min.js" type="text/javascript"></script>
    <script type = "text/javascript">

        // Read a page's GET URL variables and return them as an associative array.
        function getUrlVars() {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars;
        }



        $(document).ready(function () {
            // $("#search").live("click", function () {

            var vspid = getUrlVars()["spid"];

            //SPID BESIC (FIRST SCREEN) BEGIN

            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: '<%=ResolveUrl("~/SpidInfo.asmx/GetSpidBasic") %>',
                //url: 'http://localhost/ScityDAL/api/Scity/GetSpidInfo',
                data: '{"SpidId": "' + vspid + '"}',
                processData: false,
                dataType: "json",
                success: function (response) {
                    var spidBasicResults = eval(response.d);
                    var html = "";
                    $.each(spidBasicResults, function () {
                        html += "<h3>Hello Mr. " + this.cc_name + "</h3>";
                        $("#custlogo").attr('src', 'images/' + this.cu_logo);
                    });
                    $("#c_name").html(html == "" ? "No results" : html);
                },
                error: function (a, b, c) {
                    alert(a.responseText);
                }
            });


            //SPID BESIC (FIRST SCREEN) END


            //PRODUCT LIST (SECOND SCREEN) BEGIN

            

            var productCount = 0;

            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: '<%=ResolveUrl("~/SpidInfo.asmx/GetSpidProducts") %>',
                data: '{"SpidId": "' + vspid + '"}',
                processData: false,
                dataType: "json",
                success: function (response) {
                    var spidProductsResults = eval(response.d);
                    //alert(spidProductsResults);
                    var htmlProductList = "";

                    htmlProductList += "<table id='products' border='0'>";
                    htmlProductList += "<tr><td colspan='2' align='center' valign='top'><p><h1>What is Pixars biggest chalenge today?</h1></p></td></tr>";
                    

                        $.each(spidProductsResults, function () {
                        productCount += 1;
                        //alert(productCount)
                        if (productCount % 2 == 0) {
                            // alert(productCount + ' even');
                            if (productCount == 2)
                            {
                                htmlProductList +=  "<td width='50%' align='center'><div id='CustP2Container'>";
                                htmlProductList += "<img id='imgp2' src='images\p2.jpg' /></div><br />RAM Speeds</td>";
                                $("#imgp2").attr('src', 'images/' + this.productImage);
                            }
                            if (productCount == 4)
                            {
                                htmlProductList +=  "<td width='50%' align='center'><div id='CustP4Container'>";
                                htmlProductList += "<img id='imgp4' src='images\p4.jpg' /></div><br />Something else we can help you with?</td>";
                                $("#imgp4").attr('src', 'images/' + this.productImage);
                            }
                        }
                        else {
                            
                            if (productCount == 1)
                            {
                                //alert(productCount + 'BEGIN');
                                htmlProductList += "<tr>";
                                htmlProductList +=  "<td width='50%' align='center'><div id='CustP1Container'>";
                                //     htmlProductList += "<img id='imgp1' /></div><br />GPU Options</td>";

                                $("#imgp1").attr('src', 'images/' + this.productImage);
                                //alert(productCount + 'END');

                            }
                            if (productCount == 3)
                            {
                                htmlProductList +=  "</tr><tr>";
                                htmlProductList +=  "<td width='50%' align='center'><div id='CustP3Container'>";
                                htmlProductList += "<img id='imgp3' src='images\p3.jpg' /></div><br />4k Rendering</td>";
                                $("#imgp3").attr('src', 'images/' + this.productImage);
                            }
                        }
                    });
                    htmlProductList += "</tr>";
                    htmlProductList += "<tr><td colspan='2' align='right' valign='down'><p><img id='custLogo1' src='images\cust.jpg' /></p></td></tr>";
                    htmlProductList += "</table>";
                    //$("#productResults").html(htmlProductList == "" ? "No results" : htmlProductList);
                    
                },
                error: function (a, b, c) {
                    //alert(a.responseText);
                }
            });

            

            //PRODUCT LIST (SECOND SCREEN) END


            var custLogoImg = document.getElementById('CustLogoContainer').firstChild;
            custLogoImg.onload = loadCustLogo();
            
            var custP1Img = document.getElementById('CustP1Container').firstChild;
            custP1Img.onload = loadCustPImg();

            var custP2Img = document.getElementById('CustP2Container').firstChild;
            custP2Img.onload = loadCustPImg();

            var custP3Img = document.getElementById('CustP3Container').firstChild;
            custP3Img.onload = loadCustPImg();

            var custP4Img = document.getElementById('CustP4Container').firstChild;
            custP4Img.onload = loadCustPImg();

            var screen2CustLogoImg = document.getElementById('Screen2CustLogoContainer').firstChild;
            screen2CustLogoImg.onload = loadCustLogo();



        });

        function loadCustLogo() {
            if (custLogoImg.height > custLogoImg.width) {
                custLogoImg.height = '100%';
                custLogoImg.width = 'auto';
            }
        };

        function loadCustPImg() {
            if (custP1Img.height > custP1Img.width) {
                custP1Img.height = '100%';
                custP1Img.width = 'auto';
            }
            if (custP2Img.height > custP2Img.width) {
                custP2Img.height = '100%';
                custP2Img.width = 'auto';
            }
            if (custP3Img.height > custP3Img.width) {
                custP3Img.height = '100%';
                custP3Img.width = 'auto';
            }
            if (custP4Img.height > custP4Img.width) {
                custP4Img.height = '100%';
                custP4Img.width = 'auto';
            }
        };

    </script>
</head>

<body id="ibody">
    <form id="form1" runat="server">       

        <!--

    <div  id="homepanel">
        <div id="c_name"></div>
        <div id="col2"><h3>Let me help you with your Laptop purchases.</h3></div>
        <div id="CustLogoContainer"><img id="custlogo" src="images\cust.jpg" /></div>
    </div>

        -->

    <table id="homepanel" border="0" background="images\DefualtBackground.jpg" >
        <tr><td></td><td nowrap align="right" valign="top"><p id="c_name"></p></td></tr>
        <tr><td></td><td id="col2"><p><h3>Let me help you with your Laptop purchases.</h3></p></td></tr>
         
        <tr><td></td><td align="right" valign="down"><div id="CustLogoContainer"><img id="custlogo" /></div></td></tr>
    </table>


   <div id="productResults">
         <table id="products" border="0" >
        <tr><td colspan="2" align="center" valign="top"><p><h1>What is Pixars biggest chalenge today?</h1></p></td></tr>
        <tr>
            <td width="50%" align="center"><div id="CustP1Container"><img id="imgp1" /></div><br /><p id="p1Info"></p></td>
            <td width="50%" align="center"><div id="CustP2Container"><img id="imgp2" /></div><br /><p id="p2info"></p></td>
        </tr>
        <tr>
            <td width="50%" align="center"><div id="CustP3Container"><img id="imgp3" /></div><br /><p id="p3info"></p></td>
            <td width="50%" align="center"><div id="CustP4Container"><img id="imgp4" /></div><br /><p id="p4info"></p></td>
        </tr>
        <tr><td colspan="2" align="right" valign="down"><div id="Screen2CustLogoContainer"><img id="screen2CustLogo" /></div></td></tr>
    </table>
   </div>
    
    <table id="p1f" border="0">
        <tr><td colspan="2" align="center" valign="down"><p><img id="p1i1" src="images\p1_features.jpg" /></p></td></tr>
        <tr><td colspan="2" align="center" valign="top"><p><h1>Vaio's perspective of GPU Boost</h1></p></td></tr>
        <tr>
            <td ALIGN="Left"><p><h2>* Industry highest frames per second</h2></p></td>
            <td width="30%" ALIGN="right" rowspan="4"><p><img id="imgright" src="images\right.png" /></p></td>
        </tr>
        <tr>
            <td  ALIGN="Left"><p><h2>* Hardware Agnostic code</h2></p></td>
        </tr>
         <tr>
            <td  ALIGN="Left"><p><h2>* Global memory coalscing</h2></p></td>
        </tr>
         <tr>
            <td  ALIGN="Left"><p><h2>* Lowest wattage per performance</h2></p></td>
        </tr>

        <tr><td colspan="2" align="right" valign="down"><p><img id="img1B" src="images\cust.jpg" /></p></td></tr>
    </table>

     <table id="p2f" border="0">
        <tr><td colspan="2" align="center" valign="down"><p><img id="Img6" src="images\p1_features.jpg" /></p></td></tr>
        <tr><td colspan="2" align="center" valign="top"><p>Vaio - z</p></td></tr>
        <tr>
            <td>
                <table id="p2af" border="0">
                    <tr>
                        <td width="50%" ALIGN="Center" id="p2aftd1"><p><h1>Complete Vaio Z Specs</h1></p></td>
                        <td width="50%" ALIGN="Center" id="p2aftd2"><p><h1>Vaio Z Awards</h1></p></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td colspan="2" id="p2aftd3">
                <table id="p2bf" border="0">
                    <tr>
                        <td width="100%" ALIGN="Center" bgcolor="blue"><p ><h1 style="color:white;">What Vaio - Z would do to your business</h1></p></td>
                    </tr>
                </table>
            </td>
        </tr>

        <tr><td colspan="2" align="right" valign="down"><p><img id="img1C" src="images\cust.jpg" /></p></td></tr>
    </table>


     <table id="p3f" border="0">
        <tr><td colspan="2" align="center" valign="down"><p><img id="Img7" src="images\p1_features.jpg" /></p></td></tr>
        <tr><td colspan="2" id="p3ftd1" align="center" valign="top"  bgcolor="blue"><p><h1 style="color:white;">With Vaio-Z you will get</h1></p></td></tr>
        <tr>
            <td width="100%">
                <table id="p3ftbl1" width="100%" border="0">
                    <tr>
                        <td ALIGN="Left"><p><h2>* Lowest cost per wattage</h2></p></td>
                        <td width="30%" ALIGN="right" rowspan="4"><p><img id="imgright2" src="images\right.png" /></p></td>
                    </tr>
                    <tr>
                        <td  ALIGN="Left"><p><h2>* CPU independent acceleration</h2></p></td>
                    </tr>
                     <tr>
                        <td  ALIGN="Left"><p><h2>* Fastest memory reads in the industry</h2></p></td>
                    </tr>
                     <tr>
                        <td  ALIGN="Left"><p><h2>* Award wining cooling algorthms</h2></p></td>
                    </tr>

                    <tr><td colspan="2" align="right" valign="down"><p><img id="img1D" src="images\cust.jpg" /></p></td></tr>
                </table>
            </td>
        </tr>

    </table>

     <table id="p4f" border="0">
        <tr><td colspan="2" align="center" valign="down"><p><img id="Img8" src="images\p1_features.jpg" /></p></td></tr>
         <tr><td colspan="2" align="left" valign="down"><p><h3>" We are very happy with the cost savings from <br /> Vaio-Z" - CTO - Charles M , Exxon</h3></p></td></tr>
         <tr><td colspan="2" align="right" valign="down"><p><h3>" Vaio-Z was the savior for our 3D animation <br /> project" VO Engg - Tom Kirby , Paramount</h3></p></td></tr>
         <tr><td align="center"><p><img id="img9" src="images\right.png" /></p></td></tr>
         <tr><td colspan="2" align="right" valign="down"><p><img id="img1E" src="images\cust.jpg" /></p></td></tr>
        </tr>
    </table>

    </form>
</body>
</html>
