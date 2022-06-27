// var nodemailer = require('nodemailer');
 
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'brillianthacker225@gmail.com',
//     pass: 'hackerhackathon@1225'
//   }
// });
 
// var mailOptions = {
//   from: 'brillianthacker225@gmail.com',
//   to: 'yagyani.topper@gmail.com',
//   subject: 'Selection confirm',
//   html: `<!doctype html>
//   <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
//   <head>
//   <title></title>
//   <!--[if !mso]><!-->
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <!--<![endif]-->
//   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1">
//   <style type="text/css">
//   #outlook a{padding:0;}body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}table,td{border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;}img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;}p{display:block;margin:0;}
//   </style>
//   <!--[if mso]> <noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
//   <![endif]-->
//   <!--[if lte mso 11]>
//   <style type="text/css">
//   .ogf{width:100% !important;}
//   </style>
//   <![endif]-->
//   <!--[if !mso]><!-->
//   <link href="https://fonts.googleapis.com/css?family=Open Sans:400" rel="stylesheet" type="text/css">
//   <link href="https://fonts.googleapis.com/css?family=Inter:700,400" rel="stylesheet" type="text/css">
//   <style type="text/css">
  
//   </style>
//   <!--<![endif]-->
//   <style type="text/css">
//   @media only screen and (min-width:599px){.xc303{width:303px!important;max-width:303px;}.xc265{width:265px!important;max-width:265px;}.xc536{width:536px!important;max-width:536px;}.xc41{width:41px!important;max-width:41px;}.xc16{width:16px!important;max-width:16px;}.xc483{width:483px!important;max-width:483px;}}
//   </style>
//   <style media="screen and (min-width:599px)">.moz-text-html .xc303{width:303px!important;max-width:303px;}.moz-text-html .xc265{width:265px!important;max-width:265px;}.moz-text-html .xc536{width:536px!important;max-width:536px;}.moz-text-html .xc41{width:41px!important;max-width:41px;}.moz-text-html .xc16{width:16px!important;max-width:16px;}.moz-text-html .xc483{width:483px!important;max-width:483px;}
//   </style>
//   <style type="text/css">
//   @media only screen and (max-width:599px){table.fwm{width:100%!important;}td.fwm{width:auto!important;}}
//   </style>
//   <style type="text/css">
//   u+.emailify a,#MessageViewBody a,a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important;}span.MsoHyperlink{mso-style-priority:99;color:inherit;}span.MsoHyperlinkFollowed{mso-style-priority:99;color:inherit;}u+.emailify .glist{margin-left:0!important;}
//   @media only screen and (max-width:599px){.emailify{height:100%!important;margin:0!important;padding:0!important;width:100%!important;}u+.emailify .glist{margin-left:25px!important;}td.x{padding-left:0!important;padding-right:0!important;}br.sb{display:none!important;}.hd-1{display:block!important;height:auto!important;overflow:visible!important;}.ht-1{display:table!important;height:auto!important;overflow:visible!important;}.hr-1{display:table-row!important;height:auto!important;overflow:visible!important;}.hc-1{display:table-cell!important;height:auto!important;overflow:visible!important;}div.r.pr-16>table>tbody>tr>td{padding-right:16px!important}div.r.pl-16>table>tbody>tr>td{padding-left:16px!important}div.g.mb-16>table>tbody>tr>td{padding-bottom:16px!important}}
//   </style>
//   <meta name="color-scheme" content="light dark">
//   <meta name="supported-color-schemes" content="light dark">
//   <!--[if gte mso 9]>
//   <style>li{text-indent:-1em;}
//   </style>
//   <![endif]-->
//   </head>
//   <body link="#DD0000" vlink="#DD0000" class="emailify" style="word-spacing:normal;background-color:#e5e5e5;"><div style="background-color:#e5e5e5;">
//   <!--[if mso | IE]>
//   <table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" style="width:600px;" width="600" bgcolor="#fffffe"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
//   <![endif]--><div class="r pr-16 pl-16 " style="background:#fffffe;background-color:#fffffe;margin:0px auto;border-radius:0;max-width:600px;">
//   <table align="center" border="0" cellpadding="0" cellspacing="0" style="background:#fffffe;background-color:#fffffe;width:100%;border-radius:0;background-image:url(img/background.png)"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
//   <!--[if mso | IE]>
//   <table border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:303px;">
//   <![endif]--><div class="xc303 ogf c " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
//   <table border="0" cellpadding="0" cellspacing="0" style="background-color:transparent;border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="i " style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;">
//   <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;"><tbody><tr><td style="width:149px;"> <img alt="" height="auto" src="img/f6486a59349a2f93aa58f9a55c698971.png" style="border:0;border-radius:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="149">
//   </td></tr></tbody></table>
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td><td class="" style="vertical-align:top;width:265px;">
//   <![endif]--><div class="xc265 ogf" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
//   <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;">
//   <table border="0" cellpadding="0" cellspacing="0"  width="100%"><tbody></tbody></table>
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <![endif]-->
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" style="width:600px;" width="600" bgcolor="#fffffe"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
//   <![endif]--><div class="r pr-16 pl-16 " style="background:#fffffe;background-color:#fffffe;margin:0px auto;border-radius:0;max-width:600px;">
//   <table align="center" border="0" cellpadding="0" cellspacing="0" style="background:#fffffe;background-color:#fffffe;width:100%;border-radius:0;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:10px 32px 10px 32px;text-align:left;">
//   <!--[if mso | IE]>
//   <table border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:536px;">
//   <![endif]--><div class="xc536 ogf c " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
//   <table border="0" cellpadding="0" cellspacing="0" style="background-color:transparent;border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="left" class="x m" style="font-size:0;padding:0;padding-bottom:8px;word-break:break-word;"><div style="font-family:Inter,Arial,sans-serif;font-size:28px;line-height:32px;text-align:left;color:#000000;"><p style="Margin:0;text-align:left;"><span style="mso-line-height-rule:exactly;font-size:28px;font-family:Inter,Arial,sans-serif;font-weight:700;color:#000000;line-height:32px;">Hey (Company Name)</span></p></div>
//   </td></tr><tr><td align="left" class="x " style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;"><div style="font-family:Open Sans,Arial,sans-serif;font-size:16px;line-height:24px;text-align:left;color:#000000;"><p style="Margin:0;text-align:left;"><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Open Sans,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;">Welcome to ConQt.<br class="sb"><br class="sb"></span></p><p style="Margin:0;"><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Open Sans,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;">No. 1 AI Based Business Matching Platform & Market place for vendors. <br class="sb"><br class="sb">It is a World wide Projects, Vendor Management Marketplace which can help post your project requirements easily with ConQt you can find multiple vendors on few clicks from worldwide. You can find a vendor & customer, ConQt can help to create and promote your business requirement in marketplace that can build a communities through a global network.​</span></p><p style="Margin:0;"><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Open Sans,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;">&nbsp;</span></p></div>
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <![endif]-->
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" style="width:600px;" width="600" bgcolor="#fffffe"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
//   <![endif]--><div class="r pr-16 pl-16 " style="background:#fffffe;background-color:#fffffe;margin:0px auto;border-radius:0;max-width:600px;">
//   <table align="center" border="0" cellpadding="0" cellspacing="0" style="background:#fffffe;background-color:#fffffe;width:100%;border-radius:0;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:10px 32px 10px 32px;text-align:left;">
//   <!--[if mso | IE]>
//   <table border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:536px;">
//   <![endif]--><div class="xc536 ogf c " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
//   <table border="0" cellpadding="0" cellspacing="0" style="background-color:transparent;border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="x " style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;"><div style="font-family:Inter,Arial,sans-serif;font-size:28px;line-height:32px;text-align:center;color:#000000;"><p style="Margin:0;text-align:center;"><span style="mso-line-height-rule:exactly;font-size:28px;font-family:Inter,Arial,sans-serif;font-weight:700;color:#000000;line-height:32px;">How You ConQt ?</span></p></div>
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <![endif]-->
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" style="width:600px;" width="600" bgcolor="#fffffe"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
//   <![endif]--><div class="r pr-16 pl-16 " style="background:#fffffe;background-color:#fffffe;margin:0px auto;border-radius:0;max-width:600px;">
//   <table align="center" border="0" cellpadding="0" cellspacing="0" style="background:#fffffe;background-color:#fffffe;width:100%;border-radius:0;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:32px 32px 32px 32px;text-align:left;">
//   <!--[if mso | IE]>
//   <table border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:536px;">
//   <![endif]--><div class="xc536 ogf c " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
//   <table border="0" cellpadding="0" cellspacing="0" style="background-color:transparent;border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="left" class="x " style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;"><div style="font-family:Inter,Arial,sans-serif;font-size:16px;line-height:24px;text-align:left;color:#000000;"><p style="Margin:0;text-align:left;"><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;">Here are the steps you need to follow-</span></p></div>
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <![endif]-->
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" style="width:600px;" width="600" bgcolor="#fffffe"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
//   <![endif]--><div class="r pr-16 pl-16 " style="background:#fffffe;background-color:#fffffe;margin:0px auto;border-radius:0;max-width:600px;">
//   <table align="center" border="0" cellpadding="0" cellspacing="0" style="background:#fffffe;background-color:#fffffe;width:100%;border-radius:0;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:10px 30px 10px 30px;text-align:left;">
//   <!--[if mso | IE]>
//   <table border="0" cellpadding="0" cellspacing="0"><tr><td class="m-outlook -outlook" style="vertical-align:middle;width:41px;">
//   <![endif]--><div class="xc41 ogf m " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
//   <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style="vertical-align:middle;padding:0 0 0 0;">
//   <table border="0" cellpadding="0" cellspacing="0"  width="100%"><tbody><tr><td align="left" class="i fw-1 " style="font-size:0;padding:0;word-break:break-word;">
//   <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;" class="fwm"><tbody><tr><td style="width:41px;" class="fwm"> <img alt="" height="auto" src="img/6b14d01449580f3aeb016349ccfd1dae.png" style="border:0;border-radius:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="41">
//   </td></tr></tbody></table>
//   </td></tr></tbody></table>
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td><td class="g-outlook mb-16-outlook" style="vertical-align:top;width:16px;">
//   <![endif]--><div class="xc16 ogf g mb-16" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
//   <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;">
//   <table border="0" cellpadding="0" cellspacing="0"  width="100%"><tbody></tbody></table>
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:483px;">
//   <![endif]--><div class="xc483 ogf c " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
//   <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style="background-color:transparent;border:none;vertical-align:middle;padding:8px 8px 8px 8px;">
//   <table border="0" cellpadding="0" cellspacing="0"  width="100%"><tbody><tr><td align="left" class="x m" style="font-size:0;padding:0;padding-bottom:8px;word-break:break-word;"><div style="font-family:Inter,Arial,sans-serif;font-size:20px;line-height:24px;text-align:left;color:#000000;"><p style="Margin:0;text-align:left;"><span style="mso-line-height-rule:exactly;font-size:20px;font-family:Inter,Arial,sans-serif;font-weight:700;color:#000000;line-height:24px;">Register</span></p></div>
//   </td></tr><tr><td align="left" class="x " style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;"><div style="font-family:Inter,Arial,sans-serif;font-size:16px;line-height:24px;text-align:left;color:#000000;"><p style="Margin:0;text-align:left;"><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;">You can Join as a vendor in ConQt.</span></p><p style="Margin:0;"><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;"></span><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;text-decoration:underline;"><a href="https://www.conqt.com/" style="color:#000000;text-decoration:underline;" target="_blank">Check out our website</a></span><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;">! </span></p></div>
//   </td></tr></tbody></table>
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <![endif]-->
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" style="width:600px;" width="600" bgcolor="#fffffe"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
//   <![endif]--><div class="r pr-16 pl-16 " style="background:#fffffe;background-color:#fffffe;margin:0px auto;border-radius:0;max-width:600px;">
//   <table align="center" border="0" cellpadding="0" cellspacing="0" style="background:#fffffe;background-color:#fffffe;width:100%;border-radius:0;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:10px 30px 10px 30px;text-align:left;">
//   <!--[if mso | IE]>
//   <table border="0" cellpadding="0" cellspacing="0"><tr><td class="m-outlook -outlook" style="vertical-align:middle;width:41px;">
//   <![endif]--><div class="xc41 ogf m " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
//   <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style="vertical-align:middle;padding:0 0 0 0;">
//   <table border="0" cellpadding="0" cellspacing="0"  width="100%"><tbody><tr><td align="left" class="i fw-1 " style="font-size:0;padding:0;word-break:break-word;">
//   <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;" class="fwm"><tbody><tr><td style="width:41px;" class="fwm"> <img alt="" height="auto" src="img/8baf20748cca000906d4a479e4e2eef2.png" style="border:0;border-radius:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="41">
//   </td></tr></tbody></table>
//   </td></tr></tbody></table>
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td><td class="g-outlook mb-16-outlook" style="vertical-align:top;width:16px;">
//   <![endif]--><div class="xc16 ogf g mb-16" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
//   <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;">
//   <table border="0" cellpadding="0" cellspacing="0"  width="100%"><tbody></tbody></table>
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:483px;">
//   <![endif]--><div class="xc483 ogf c " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
//   <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style="background-color:transparent;border:none;vertical-align:middle;padding:8px 8px 8px 8px;">
//   <table border="0" cellpadding="0" cellspacing="0"  width="100%"><tbody><tr><td align="left" class="x m" style="font-size:0;padding:0;padding-bottom:8px;word-break:break-word;"><div style="font-family:Inter,Arial,sans-serif;font-size:20px;line-height:24px;text-align:left;color:#000000;"><p style="Margin:0;text-align:left;"><span style="mso-line-height-rule:exactly;font-size:20px;font-family:Inter,Arial,sans-serif;font-weight:700;color:#000000;line-height:24px;">Log in</span></p></div>
//   </td></tr><tr><td align="left" class="x " style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;"><div style="font-family:Inter,Arial,sans-serif;font-size:16px;line-height:24px;text-align:left;color:#000000;"><p style="Margin:0;text-align:left;"><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;">Sign up with registered email and password.</span></p></div>
//   </td></tr></tbody></table>
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <![endif]-->
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" style="width:600px;" width="600" bgcolor="#fffffe"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
//   <![endif]--><div class="r pr-16 pl-16 " style="background:#fffffe;background-color:#fffffe;margin:0px auto;border-radius:0;max-width:600px;">
//   <table align="center" border="0" cellpadding="0" cellspacing="0" style="background:#fffffe;background-color:#fffffe;width:100%;border-radius:0;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:10px 30px 10px 30px;text-align:left;">
//   <!--[if mso | IE]>
//   <table border="0" cellpadding="0" cellspacing="0"><tr><td class="m-outlook -outlook" style="vertical-align:middle;width:41px;">
//   <![endif]--><div class="xc41 ogf m " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
//   <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style="vertical-align:middle;padding:0 0 0 0;">
//   <table border="0" cellpadding="0" cellspacing="0"  width="100%"><tbody><tr><td align="left" class="i fw-1 " style="font-size:0;padding:0;word-break:break-word;">
//   <table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0;" class="fwm"><tbody><tr><td style="width:41px;" class="fwm"> <img alt="" height="auto" src="img/19d9a28ce98b87ebbe1fcaf4a25a2ba9.png" style="border:0;border-radius:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="41">
//   </td></tr></tbody></table>
//   </td></tr></tbody></table>
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td><td class="g-outlook mb-16-outlook" style="vertical-align:top;width:16px;">
//   <![endif]--><div class="xc16 ogf g mb-16" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
//   <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style="vertical-align:top;padding:0;">
//   <table border="0" cellpadding="0" cellspacing="0"  width="100%"><tbody></tbody></table>
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:483px;">
//   <![endif]--><div class="xc483 ogf c " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
//   <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style="background-color:transparent;border:none;vertical-align:middle;padding:8px 8px 8px 8px;">
//   <table border="0" cellpadding="0" cellspacing="0"  width="100%"><tbody><tr><td align="left" class="x m" style="font-size:0;padding:0;padding-bottom:8px;word-break:break-word;"><div style="font-family:Inter,Arial,sans-serif;font-size:20px;line-height:24px;text-align:left;color:#000000;"><p style="Margin:0;text-align:left;"><span style="mso-line-height-rule:exactly;font-size:20px;font-family:Inter,Arial,sans-serif;font-weight:700;color:#000000;line-height:24px;">Dashboard</span></p></div>
//   </td></tr><tr><td align="left" class="x " style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;"><div style="font-family:Inter,Arial,sans-serif;font-size:16px;line-height:24px;text-align:left;color:#000000;"><p style="Margin:0;text-align:left;"><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;">You can Join as a vendor in ConQt.</span></p><p style="Margin:0;"><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;"></span><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;text-decoration:underline;"><a href="https://www.conqt.com/" style="color:#000000;text-decoration:underline;" target="_blank">Check out our website</a></span><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Inter,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;">! </span></p></div>
//   </td></tr></tbody></table>
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <![endif]-->
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <table align="center" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" style="width:600px;" width="600" bgcolor="#fffffe"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
//   <![endif]--><div class="r pr-16 pl-16 " style="background:#fffffe;background-color:#fffffe;margin:0px auto;border-radius:0;max-width:600px;">
//   <table align="center" border="0" cellpadding="0" cellspacing="0" style="background:#fffffe;background-color:#fffffe;width:100%;border-radius:0;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:10px 32px 10px 32px;text-align:left;">
//   <!--[if mso | IE]>
//   <table border="0" cellpadding="0" cellspacing="0"><tr><td class="c-outlook -outlook -outlook" style="vertical-align:middle;width:536px;">
//   <![endif]--><div class="xc536 ogf c " style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
//   <table border="0" cellpadding="0" cellspacing="0" style="background-color:transparent;border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="left" class="x " style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;"><div style="font-family:Open Sans,Arial,sans-serif;font-size:16px;line-height:24px;text-align:left;color:#000000;"><p style="Margin:0;text-align:left;"><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Open Sans,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;">In case you need any further help, feel free to reach out to us at </span><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Open Sans,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;text-decoration:underline;"><a href="mailto:information@techcurve.co" style="color:#000000;text-decoration:underline;" target="_blank">information@techcurve.co</a></span></p><p style="Margin:0;"><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Open Sans,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;text-decoration:none;">&nbsp;<a href="mailto:information@techcurve.co" style="color:#000000;text-decoration:underline;" target="_blank"></a></span></p><p style="Margin:0;"><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Open Sans,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;">We look forward to building a great relationship with you! 😊😊😊</span></p><p style="Margin:0;"><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Open Sans,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;">&nbsp;</span></p><p style="Margin:0;"><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Open Sans,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;">Happy to ConQt with you</span></p><p style="Margin:0;"><span style="mso-line-height-rule:exactly;font-size:16px;font-family:Open Sans,Arial,sans-serif;font-weight:400;color:#000000;line-height:24px;">Team Tech Curve</span></p></div>
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <![endif]-->
//   </td></tr></tbody></table></div>
//   <!--[if mso | IE]>
//   </td></tr></table>
//   <![endif]--></div>
//   </body>
//   </html>`,
//   attachments: [
//           {
//               //filename: 'index.html',
//               path: './conqt/index.html'
//           }
//         ]
// };
 
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

const Email = require('email-templates');

const email = new Email({
  message: {
    from: 'brillianthacker225@gmail.com'
  },
  transport: {
    jsonTransport: true
  }
});

email
  .send({
    template: 'mars',
    message: {
      to: 'yagyani.topper@gmail.com',
      attachments: [
        {
          filename: 'index.html',
          content: 'hello world!'
        }
      ]
    },
    locals: {
      name: 'Elon'
    }
  })
  .then(console.log)
  .catch(console.error);