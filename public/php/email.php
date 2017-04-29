<?php
$donnee=$_POST["donnee"];
$visiteur = json_decode($donnee);

$header="MIME-Version: 1.0\r\n";
$header.='From:"mohamed-bouchiba.com"<contact@mohamed-bouchiba.com>'."\n";
$header.='Content-Type:text/html; charset="uft-8"'."\n";
$header.='Content-Transfer-Encoding: 8bit';

$nom = $visiteur->nom ;
$coordonee = $visiteur->coordonee;
$messageMail = $visiteur->message;

$message='
<html>
<body>
<div style="margin:0;padding:0;font-family:arial;color:rgb(51,51,51);background-color:rgb(255,255,255);text-align:center">
    <table cellpadding="0" cellspacing="0" width="100%" class="m_-8077663327360283137container-grey" style="border-collapse:collapse;background:rgb(238,238,238);width:100%">
        <tbody>
        <tr>
            <td align="center" valign="top">
                <table cellpadding="10" cellspacing="0" width="100%" style="border-collapse:collapse;width:100%;min-width:100%">
                    <tbody>
                    <tr>
                        <td align="center" style="text-align:center">
                            <a style="text-decoration:none;color:rgb(36,123,209);display:block;height:25px;max-height:25px" href="http://mohamed-bouchiba.com/public/index.html" target="_blank">Mon portfolio</a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="m_-8077663327360283137constrained-box-wide" style="width:95%;min-width:220px;max-width:650px;margin:0 auto">
                    <div class="m_-8077663327360283137section" style="border-bottom:rgb(238,238,238) solid 2px">
                        <table class="m_-8077663327360283137bg-white" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;background:white">
                            <tbody>
                            <tr>
                                <td align="center">
                                    <table class="m_-8077663327360283137main-box" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:80%;min-width:220px;max-width:650px;margin:0 auto;border-top:20px solid rgb(255,255,255);border-right:0px solid rgb(255,255,255);border-bottom:0px solid rgb(255,255,255);border-left:0px solid rgb(255,255,255);text-align:left;font-family:arial;font-size:14px;line-height:20px;color:rgb(84,84,84);background:rgb(255,255,255)">
                                        <tbody>
                                        <tr>
                                            <td align="left" valign="top">
                                                <h1 class="m_-8077663327360283137normalHeader m_-8077663327360283137center" style="font-weight:normal;font-size:2em;line-height:1.1em;text-align:center">
                                         
                                                '.$nom .' vous à envoyé un message
                                                
                                                </h1>
                                                
                                                <p style="font-size:13px;line-height:18px;margin:0 0 10px">
                                                
                                                '.$messageMail.'
                                                
                                                </p>

                                                <p style="font-size:13px;line-height:18px;margin:0 0 10px">
                                                
                                                Coordonée : '.$coordonee.'
                                                
                                                 </p>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</body>
</html>
';
mail("mohamed.bouchiba1993@gmail.com", "Portfolio Message", $message, $header);

echo "Envoyé";