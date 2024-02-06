const fs = require("fs");
const parse = require("csv-parser");
const axios = require("axios");

// Function to read and parse the CSV file
const readCSV = async (filePath) => {
  const results = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(parse({ headers: true }))
      .on("data", (data) => results.push(data))
      .on("end", () => {
        resolve(results);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

const isRegistered = async (email) => {

    const filePath = "tools/registeredUsers.csv"; // Replace with your CSV file path
    registeredCsv = await readCSV(filePath);

    try {
      const isFound = registeredCsv.some(row => row._0 === email);
      return isFound;
    } catch (error) {

      console.error("Error processing CSV file:", error);
      return false;

    }
};

// Function to send the data to the endpoint
const sendData = async (data) => {

  const isExist = await isRegistered(data?._0);
  if(isExist) {
    console.log(data?._0, " : User already exists!");
    return
  };

  try {

    const emailTemplate =   `<!DOCTYPE HTML>
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--Fix to get Windows Phone 8 to render CSS3 and Media Queries-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="https://use.typekit.net/zzu0znm.css">
        <title>[*info.subject_line*]</title>
        <!--<base href="http://e.cruise-collective.com"> THIS CAUSES IMAGES NOT TO WORK IF INCORRECT DOMAIN, CAN DELETE IT... -->
        <!-- Open Sans Font Import -->
        <style type="text/css">
            @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

            body,
            td,
            p,
            ol,
            li,
            ul {
                font-family: 'adobe-garamond-pro";' sans-serif;
                font-weight: 400;
            }

            h1,
            h2,
            h3,
            h4 {
                font-family: 'adobe-garamond-pro', sans-serif;
                font-weight: 700;
            }

        </style>
        <!-- Main styling #1 -->
        <style type="text/css">
            /* Our Media Base Template 2023 */

            body {
                padding: 0;
                margin: 0;
            }

            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }

            body,
            td {
                margin: 0px
            }

            img {
                border: none;
                display: block;
            }

            .amf-editor .preheader_text {
                display: block !important;
                visibility: visible !important;
            }

        .image_big_pad .image_padding--bottom_padding .element_padding_target {
          padding-bottom: 20px;
        }

        .image_small_pad .image_padding--bottom_padding .element_padding_target {
          padding-bottom: 10px;
        }

        .element_top_padding--0px .element_padding_target {
          padding-top: 0
        }

        .element_top_padding--5px {
          -amf-class-label: '5px';
        }

        .element_top_padding--5px .element_padding_target {
          padding-top: 5px;
        }

        .element_top_padding--10px {
          -amf-class-label: '10px';
        }

        .element_top_padding--10px .element_padding_target {
          padding-top: 10px;
        }

        .element_top_padding--15px {
          -amf-class-label: '15px';
        }

        .element_top_padding--15px .element_padding_target {
          padding-top: 15px;
        }

        .element_top_padding--20px {
          -amf-class-label: '20px';
        }

        .element_top_padding--20px .element_padding_target {
          padding-top: 20px;
        }

        .element_bottom_padding--0px {
          -amf-class-label: '0px';
        }

        .element_bottom_padding--0px .element_padding_target {
          padding-bottom: 0;
        }

        .element_bottom_padding--5px {
          -amf-class-label: '5px';
        }

        .element_bottom_padding--5px .element_padding_target {
          padding-bottom: 5px;
        }

        .element_bottom_padding--10px {
          -amf-class-label: '10px';
        }

        .element_bottom_padding--10px .element_padding_target {
          padding-bottom: 10px;
        }

        .element_bottom_padding--15px {
          -amf-class-label: '15px';
        }

        .element_bottom_padding--15px .element_padding_target {
          padding-bottom: 15px;
        }

        .element_bottom_padding--20px {
          -amf-class-label: '20px';
        }

        .element_bottom_padding--20px .element_padding_target {
          padding-bottom: 20px;
        }

        .element_side_padding--0px {
          -amf-class-label: '0px';
        }

        .onecol_side_padding--0px {
          -amf-class-label: '0px';
        }

        .element_side_padding--0px .element_padding_target,
        .onecol_side_padding--0px .element_padding_target {
          padding-left: 0;
          padding-right: 0;
        }

        .element_side_padding--5px {
          -amf-class-label: '5px';
        }

        .onecol_side_padding--5px {
          -amf-class-label: '5px';
        }

        .element_side_padding--5px .element_padding_target,
        .onecol_side_padding--5px .element_padding_target {
          padding-left: 5px;
          padding-right: 5px;
        }

        .element_side_padding--10px {
          -amf-class-label: '10px';
        }

        .onecol_side_padding--10px {
          -amf-class-label: '10px';
        }

        .element_side_padding--10px .element_padding_target,
        .onecol_side_padding--10px .element_padding_target {
          padding-left: 10px;
          padding-right: 10px;
        }

        .element_side_padding--15px {
          -amf-class-label: '15px';
        }

        .onecol_side_padding--15px {
          -amf-class-label: '15px';
        }

        .element_side_padding--15px .element_padding_target,
        .onecol_side_padding--15px .element_padding_target {
          padding-left: 15px;
          padding-right: 15px;
        }

        .element_side_padding--20px {
          -amf-class-label: '20px';
        }

        .onecol_side_padding--20px {
          -amf-class-label: '20px';
        }

        .element_side_padding--20px .element_padding_target,
        .onecol_side_padding--20px .element_padding_target {
          padding-left: 20px;
          padding-right: 20px;
        }

        .element_left_padding--0px {
          -amf-class-label: '0px';
        }

        .element_left_padding--0px .element_padding_target {
          padding-left: 0;
        }

        .element_left_padding--5px {
          -amf-class-label: '5px';
        }

        .element_left_padding--5px .element_padding_target {
          padding-left: 5px;
        }

        .element_left_padding--10px {
          -amf-class-label: '10px';
        }

        .element_left_padding--10px .element_padding_target {
          padding-left: 10px;
        }

        .element_left_padding--15px {
          -amf-class-label: '15px';
        }

        .element_left_padding--15px .element_padding_target {
          padding-left: 15px;
        }

        .element_left_padding--20px {
          -amf-class-label: '20px';
        }

        .element_left_padding--20px .element_padding_target {
          padding-left: 20px;
        }

        .element_right_padding--0px {
          -amf-class-label: '0px';
        }

        .element_right_padding--0px .element_padding_target {
          padding-right: 0;
        }

        .element_right_padding--5px {
          -amf-class-label: '5px';
        }

        .element_right_padding--5px .element_padding_target {
          padding-right: 5px;
        }

        .element_right_padding--10px {
          -amf-class-label: '10px';
        }

        .element_right_padding--10px .element_padding_target {
          padding-right: 10px;
        }

        .element_right_padding--15px {
          -amf-class-label: '15px';
        }

        .element_right_padding--15px .element_padding_target {
          padding-right: 15px;
        }

        .element_right_padding--20px {
          -amf-class-label: '20px';
        }

        .element_right_padding--20px .element_padding_target {
          padding-right: 20px;
        }



        </style>

        <!-- Mobile styling #1 -->
        <style type="text/css">
            @media only screen and (max-width: 599px) {
                html {
                    -webkit-text-size-adjust: none;
                }

                .wrapper {
                    width: 94%;
                    width: 94% !important;
                    margin-left: 3%;
                    margin-right: 3%;
                }

                .fl {
                    width: 100%;
                    width: 100% !important;
                    float: left;
                    height: auto;
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                }

                .mob_none {
                    display: none !important;
                }

                .full_img img, img.one_col_img {
                    width: 100% !important;
                    height: auto;
                }

                .onecol_side_padding--0px img.one_col_img {
          -amf-attr: width="600";
          width: 600px;
        }

        .onecol_side_padding--5px img.one_col_img {
          -amf-attr: width="590";
          width: 590px;
        }

        .onecol_side_padding--10px img.one_col_img {
          -amf-attr: width="580";
          width: 580px;
        }

        .onecol_side_padding--15px img.one_col_img {
          -amf-attr: width="570";
          width: 570px;
        }

        .onecol_side_padding--20px img.one_col_img {
          -amf-attr: width="560";
          width: 560px;
        }

        /*TWO COLUMN*/
        .element_left_padding--0px.element_right_padding--0px img.two_col_image {
          -amf-attr: width="300";
          width: 300px;
        }

        /*5 two col*/
        .element_left_padding--5px img.two_col_image,
        .element_right_padding--5px img.two_col_image,
        .element_left_padding--5px.element_right_padding--0px img.two_col_image,
        .element_left_padding--0px.element_right_padding--5px img.two_col_image {
          -amf-attr: width="295";
          width: 295px;
        }

        /*10 two col*/
        .element_left_padding--10px img.two_col_image,
        .element_right_padding--10px img.two_col_image,
        .element_left_padding--5px.element_right_padding--5px img.two_col_image,
        .element_left_padding--0px.element_right_padding--10px img.two_col_image,
        .element_left_padding--10px.element_right_padding--0px img.two_col_image {
          -amf-attr: width="290";
          width: 290px;
        }

        /*15 two col*/
        .element_left_padding--15px img.two_col_image,
        .element_right_padding--15px img.two_col_image,
        .element_left_padding--15px.element_right_padding--0px img.two_col_image,
        .element_left_padding--0px.element_right_padding--15px img.two_col_image,
        .element_left_padding--5px.element_right_padding--10px img.two_col_image,
        .element_left_padding--10px.element_right_padding--5px img.two_col_image {
          -amf-attr: width="285";
          width: 285px;
        }

        /*20 two col*/
        .element_left_padding--20px img.two_col_image,
        .element_right_padding--20px img.two_col_image,
        .element_left_padding--20px.element_right_padding--0px img.two_col_image,
        .element_left_padding--0px.element_right_padding--20px img.two_col_image,
        .element_left_padding--5px.element_right_padding--15px img.two_col_image,
        .element_left_padding--15px.element_right_padding--5px img.two_col_image,
        .element_left_padding--10px.element_right_padding--10px img.two_col_image,
        .element_left_padding--10px.element_right_padding--10px img.two_col_image {
          -amf-attr: width="280";
          width: 280px;
        }

        /*25 two col*/
        .element_left_padding--20px.element_right_padding--5px img.two_col_image,
        .element_left_padding--5px.element_right_padding--20px img.two_col_image,
        .element_left_padding--10px.element_right_padding--15px img.two_col_image,
        .element_left_padding--15px.element_right_padding--10px img.two_col_image {
          -amf-attr: width="275";
          width: 275px;
        }

        /*30 two col*/
        .element_left_padding--20px.element_right_padding--10px img.two_col_image,
        .element_left_padding--10px.element_right_padding--20px img.two_col_image,
        .element_left_padding--15px.element_right_padding--15px img.two_col_image,
        .element_left_padding--15px.element_right_padding--15px img.two_col_image {
          -amf-attr: width="270";
          width: 270px;
        }

        /*35 two col*/
        .element_left_padding--20px.element_right_padding--15px img.two_col_image,
        .element_left_padding--15px.element_right_padding--20px img.two_col_image {
          -amf-attr: width="265";
          width: 265px;
        }

        /*40 two col*/
        .element_left_padding--20px.element_right_padding--20px img.two_col_image {
          -amf-attr: width="260";
          width: 260px;
        }

        /*THREE COLUMN*/
        .element_left_padding--0px.element_right_padding--0px img.three_col_img {
          -amf-attr: width="190";
          width: 190px;
        }

        /*5 three col*/
        .element_left_padding--5px img.three_col_img,
        .element_right_padding--5px img.three_col_img,
        .element_left_padding--5px.element_right_padding--0px img.three_col_img,
        .element_left_padding--0px.element_right_padding--5px img.three_col_img {
          -amf-attr: width="185";
          width: 185px;
        }

        /*10 three col*/
        .element_left_padding--10px img.three_col_img,
        .element_right_padding--10px img.three_col_img,
        .element_left_padding--5px.element_right_padding--5px img.three_col_img,
        .element_left_padding--0px.element_right_padding--10px img.three_col_img,
        .element_left_padding--10px.element_right_padding--0px img.three_col_img {
          -amf-attr: width="180";
          width: 180px;
        }

        /*15 three col*/
        .element_left_padding--15px img.three_col_img,
        .element_right_padding--15px img.three_col_img,
        .element_left_padding--15px.element_right_padding--0px img.three_col_img,
        .element_left_padding--0px.element_right_padding--15px img.three_col_img,
        .element_left_padding--5px.element_right_padding--10px img.three_col_img,
        .element_left_padding--10px.element_right_padding--5px img.three_col_img {
          -amf-attr: width="175";
          width: 175px;
        }

        /*20 three col*/
        .element_left_padding--20px img.three_col_img,
        .element_right_padding--20px img.three_col_img,
        .element_left_padding--20px.element_right_padding--0px img.three_col_img,
        .element_left_padding--0px.element_right_padding--20px img.three_col_img,
        .element_left_padding--5px.element_right_padding--15px img.three_col_img,
        .element_left_padding--15px.element_right_padding--5px img.three_col_img,
        .element_left_padding--10px.element_right_padding--10px img.three_col_img,
        .element_left_padding--10px.element_right_padding--10px img.three_col_img {
          -amf-attr: width="170";
          width: 170px;
        }

        /*25 three col*/
        .element_left_padding--20px.element_right_padding--5px img.three_col_img,
        .element_left_padding--5px.element_right_padding--20px img.three_col_img,
        .element_left_padding--10px.element_right_padding--15px img.three_col_img,
        .element_left_padding--15px.element_right_padding--10px img.three_col_img {
          -amf-attr: width="165";
          width: 165px;
        }

        /*30 three col*/
        .element_left_padding--20px.element_right_padding--10px img.three_col_img,
        .element_left_padding--10px.element_right_padding--20px img.three_col_img,
        .element_left_padding--15px.element_right_padding--15px img.three_col_img,
        .element_left_padding--15px.element_right_padding--15px img.three_col_img {
          -amf-attr: width="160";
          width: 160px;
        }

        /*35 three col*/
        .element_left_padding--20px.element_right_padding--15px img.three_col_img,
        .element_left_padding--15px.element_right_padding--20px img.three_col_img {
          -amf-attr: width="155";
          width: 155px;
        }

        /*40 three col*/
        .element_left_padding--20px.element_right_padding--20px img.three_col_img {
          -amf-attr: width="150";
          width: 150px;
        }

        /*FOUR COLUMN*/
        .element_left_padding--0px.element_right_padding--0px img.four_col_img {
          -amf-attr: width="150";
          width: 150px;
        }

        /*5 four column*/
        .element_left_padding--5px img.four_col_img,
        .element_right_padding--5px img.four_col_img,
        .element_left_padding--5px.element_right_padding--0px img.four_col_img,
        .element_left_padding--0px.element_right_padding--5px img.four_col_img {
          -amf-attr: width="145";
          width: 145px;
        }

        /*10 four column*/
        .element_left_padding--10px img.four_col_img,
        .element_right_padding--10px img.four_col_img,
        .element_left_padding--5px.element_right_padding--5px img.four_col_img,
        .element_left_padding--0px.element_right_padding--10px img.four_col_img,
        .element_left_padding--10px.element_right_padding--0px img.four_col_img {
          -amf-attr: width="140";
          width: 140px;
        }

        /*15 four column*/
        .element_left_padding--15px img.four_col_img,
        .element_right_padding--15px img.four_col_img,
        .element_left_padding--15px.element_right_padding--0px img.four_col_img,
        .element_left_padding--0px.element_right_padding--15px img.four_col_img,
        .element_left_padding--5px.element_right_padding--10px img.four_col_img,
        .element_left_padding--10px.element_right_padding--5px img.four_col_img {
          -amf-attr: width="135";
          width: 135px;
        }

        /*20 four column*/
        .element_left_padding--20px img.four_col_img,
        .element_right_padding--20px img.four_col_img,
        .element_left_padding--20px.element_right_padding--0px img.four_col_img,
        .element_left_padding--0px.element_right_padding--20px img.four_col_img,
        .element_left_padding--5px.element_right_padding--15px img.four_col_img,
        .element_left_padding--15px.element_right_padding--5px img.four_col_img,
        .element_left_padding--10px.element_right_padding--10px img.four_col_img,
        .element_left_padding--10px.element_right_padding--10px img.four_col_img {
          -amf-attr: width="130";
          width: 130px;
        }

        /*25 four column*/
        .element_left_padding--20px.element_right_padding--5px img.four_col_img,
        .element_left_padding--5px.element_right_padding--20px img.four_col_img,
        .element_left_padding--10px.element_right_padding--15px img.four_col_img,
        .element_left_padding--15px.element_right_padding--10px img.four_col_img {
          -amf-attr: width="125";
          width: 125px;
        }

        /*30 four column*/
        .element_left_padding--20px.element_right_padding--10px img.four_col_img,
        .element_left_padding--10px.element_right_padding--20px img.four_col_img,
        .element_left_padding--15px.element_right_padding--15px img.four_col_img,
        .element_left_padding--15px.element_right_padding--15px img.four_col_img {
          -amf-attr: width="120";
          width: 120px;
        }

        /*35 four column*/
        .element_left_padding--20px.element_right_padding--15px img.four_col_img,
        .element_left_padding--15px.element_right_padding--20px img.four_col_img {
          -amf-attr: width="115";
          width: 115px;
        }

        /*40 four column*/
        .element_left_padding--20px.element_right_padding--20px img.four_col_img {
          -amf-attr: width="110";
          width: 110px;
        }

        /* small side */
        .element_side_padding--0px img.small_side_regular_img,
        .element_side_padding--0px img.small_image_reverse_img {
          -amf-attr: width="150";
          width: 150px;
        }

        .element_side_padding--5px img.small_side_regular_img,
        .element_side_padding--5px img.small_image_reverse_img {
          -amf-attr: width="145";
          width: 145px;
        }

        .element_side_padding--10px img.small_side_regular_img,
        .element_side_padding--10px img.small_image_reverse_img {
          -amf-attr: width="140";
          width: 140px;
        }

        .element_side_padding--15px img.small_side_regular_img,
        .element_side_padding--15px img.small_image_reverse_img {
          -amf-attr: width="135";
          width: 135px;
        }

        .element_side_padding--20px img.small_side_regular_img,
        .element_side_padding--20px img.small_image_reverse_img {
          -amf-attr: width="130";
          width: 130px;
        }

        .element_side_padding--0px img.small_side_regular_img,
        .element_side_padding--0px img.small_image_reverse_img {
          -amf-attr: width="150";
          width: 150px;
        }

                .nopad {
                    padding: 0 !important;
                }

                .button {
                    padding: 0 !important;
                    text-align: center;
                    width: 100%;
                    margin: auto;
                    float: none;
                }

                .button td {
                    padding: 0 !important;
                }

                .button td a {
                    display: block;
                    padding: 10px 40px;
                    margin: 0 auto;
                }
            }

        </style>

        <!-- Mobile styling #2 -->
        <style type="text/css">
            @media only screen and (max-width: 599px) {
                .center {
                    text-align: center !important;
                    margin: 0 auto;
                    float: none !important;
                }

                .center div {
                    text-align: center !important;
                }


                .fl {
            width: 100%;
            width: 100% !important;
            float: left;
            height: auto;
            padding-left: 0 !important;
            padding-right: 0 !important;
          }


                .center img {
                    display: block;
                    margin: auto;
                }

                .automarg {
                    margin: 0 auto;
                }

                .logo img {
                    width: 250px !important;
                    height: auto;
                }

                .footer .social {
                    margin: auto;
                    float: none;
                }

                .pad_logo {
                    padding: 10px 5px 0 5px !important;
                }

                th {
                    display: table;
                }

                table.amf__dt-none {
                    display: table !important;
                }

                table.amf__dt-none[width="100%"] {
                    width: 100% !important;
                }
            }

        </style>

        <!-- Main styling #2 -->
        <style type="text/css" amf:inline>
            body,
            p,
            th,
            li,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                padding: 0;
                margin: 0;
                font-weight: normal;

            }

            .advertisement_styling {
             color: #666666;
             font-weight: 700;
             padding-bottom: 8px;
            }


            .module_top_padding--0px {
          -amf-class-label: '0px';
        }

        .module_top_padding--0px .module_padding_target {
          padding-top: 0;
        }

        .module_top_padding--5px {
          -amf-class-label: '5px';
        }

        .module_top_padding--5px .module_padding_target {
          padding-top: 5px;
        }

        .module_top_padding--10px {
          -amf-class-label: '10px';
        }

        .module_top_padding--10px .module_padding_target {
          padding-top: 10px;
        }

        .module_top_padding--15px {
          -amf-class-label: '15px';
        }

        .module_top_padding--15px .module_padding_target {
          padding-top: 15px;
        }

        .module_top_padding--20px {
          -amf-class-label: '20px';
        }

        .module_top_padding--20px .module_padding_target {
          padding-top: 20px;
        }

        .module_bottom_padding--0px {
          -amf-class-label: '0px';
        }

        .module_bottom_padding--0px .module_padding_target {
          padding-bottom: 0;
        }

        .module_bottom_padding--5px {
          -amf-class-label: '5px';
        }

        .module_bottom_padding--5px .module_padding_target {
          padding-bottom: 5px;
        }

        .module_bottom_padding--10px {
          -amf-class-label: '10px';
        }

        .module_bottom_padding--10px .module_padding_target {
          padding-bottom: 10px;
        }

        .module_bottom_padding--15px {
          -amf-class-label: '15px';
        }

        .module_bottom_padding--15px .module_padding_target {
          padding-bottom: 15px
        }

        .module_bottom_padding--20px {
          -amf-class-label: '20px';
        }

        .module_bottom_padding--20px .module_padding_target {
          padding-bottom: 20px;
        }

            body h1,
            body h2,
            body h3,
            body h4,
            body h5,
            body h6 {
                text-align: inherit;
            }

            h1 {
                font-size: 24px;
                line-height: 30px;

            }

            h2 {
                font-size: 20px;
                line-height: 26px;
            }

            h3 {
                font-size: 17px;
                line-height: 23px;
            }

            h4 {
                font-size: 12px;
                line-height: 15px;
            }

            h5 {
                font-size: 14px;
                line-height: 17px;
            }

            h6 {
                font-size: 10px;
                line-height: 12px;
            }

            p {
                font-size: 15px;
                line-height: 19px;
            }

            ul {
                padding: 0;
                margin: 0 0 0 20px;
            }

            td {
                overflow-wrap: break-word;
                word-break: break-word;
            }

            .vertical_position {
                -amf-class-label: 'Vertical position:';
            }

            .vertical_position--top {
                -amf-class-label: 'Top';
                vertical-align: top;
                -amf-attr: valign="top";
            }

            .vertical_position--middle {
                -amf-class-label: 'Middle';
                vertical-align: middle;
                -amf-attr: valign="middle";
            }

            .vertical_position--bottom {
                -amf-class-label: 'Bottom';
                vertical-align: bottom;
                -amf-attr: valign="bottom";
            }

            .image_padding--bottom_padding {
                -amf-class-label: 'Add bottom padding';
            }

            .image_padding--no_bottom_padding {
                -amf-class-label: 'Remove bottom padding';
            }

            .image_big_pad .image_padding--bottom_padding .image_padding_target {
                padding-bottom: 20px;
            }

            .image_small_pad .image_padding--bottom_padding .image_padding_target {
                padding-bottom: 10px;
            }

            .preheader_text.hide_at_launch {
                display: none;
                visibility: hidden;
            }

            .left.two_col_pad_target {
                padding-right: 10px;
            }

            .right.two_col_pad_target {
                padding-left: 10px;
            }

        </style>

        <!-- Button inlined styles -->
        <style type="text/css" amf:inline>
            .maximise_button .button {
                width: 100%;
            }


        /* Buttons */

        .button_size--large {
          -amf-class-label: 'Big CTA';
        }

        .button_size--small {
          -amf-class-label: 'Small CTA';
        }

        .button_size--large .button_prop_target {
          padding: 9px 18px;
          font-size: 15px;
        }

        .button_size--small .button_prop_target {
          padding: 6px 13px;
          font-size: 11px;
        }

        .button_color--outline {
          -amf-class-label: 'Black Border';
        }

        .button_color--outline .button_prop_target {
          background-color: #FFFFFF !important;
          border: 2px solid #000000;
        }

        .button_color--outline .button_prop_target a {
          color: #333 !important;
                font-weight: 700;
                font-size: 15px;
        }

        .button_color--outline-rounded {
          -amf-class-label: 'Black Border Rounded';
        }
            .button_alignment--left .button>table {
          float: left !important;
        }

        .button_alignment--center .button>table {
          float: none !important;
          margin: 0 auto;
        }

        .button_alignment--right .button>table {
          float: right !important;
        }


            .button_alignment--left .button {
          float: left;
          -amf-attr: align="left";
        }

        .button_alignment--center {
          -amf-class-label: 'Center';
        }

        .button_alignment--center .button {
          margin: 0 auto;
                -amf-attr: align="center";
        }

        .button_alignment--right {
          -amf-class-label: 'Right';
        }

        .button_alignment--right .button {
          float: right;
                -amf-attr: align="right";
        }

        .button_alignment--fluid {
          -amf-class-label: 'Full Width';
        }

        .button_alignment--fluid .button {
          width: 100%;
                text-align: center;
        }


        .button_color--outline-rounded .button_prop_target {
          background-color: #FFFFFF !important;
          border: 2px solid #FF9A31;
          border-radius: 12px;
        }

            .txt-quote {
                font-size: 16px;
                line-height: 1.4em;
              letter-spacing: -0.25px;
                font-weight: 600;
            }

        .button_color--outline-rounded .button_prop_target a {
          color: #333 !important;
                font-weight: 700;
                font-size: 15px;
        }

        .button_color--solid {
          -amf-class-label: 'Solid';
        }

        .button_color--solid .button_prop_target {
                background-color:#FF9A31;
            }

        .button_color--solid .button_prop_target a {
          color: #fff;
                font-weight: 700;
                font-size: 15px;
        }

        .button_color--solid-rounded {
          -amf-class-label: 'Solid Rounded';
        }

        .button_color--solid-rounded .button_prop_target {
          border-radius: 12px;
                background-color:#FF9A31;
        }

        .button_color--solid-rounded .button_prop_target a {
          color: #FFFFFF;
                font-weight: 700;
                font-size: 15px;
        }

            .add_top_padding .add_top_padding_target {
                padding-top: 20px;
            }

            .additional_padding.fifteen {
                padding: 15px;
            }

            .additional_padding.ten {
                padding: 10px;
            }

            /* LOGO ALIGNMENT */

            .logo_alignment {
                -amf-class-label: 'Align header logo:';
            }

            .logo_alignment--align_logo_left {
                -amf-class-label: 'Left';
            }

            .logo_alignment--align_logo_center {
                -amf-class-label: 'Centre';
            }

            .logo_alignment--align_logo_right {
                -amf-class-label: 'Right';
            }

            .logo_alignment--align_logo_left .logo_container {
                -amf-attr: align="left";
            }

            .logo_alignment--align_logo_center .logo_container {
                -amf-attr: align="center";
            }

            .logo_alignment--align_logo_right .logo_container {
                -amf-attr: align="right";
            }


            /* /LOGO ALIGNMENT */

        </style>

        <!-- Button and logo non-inlined styles THIS CODE CONFLICTS (DELETE AFTER TESTING LOGO) -->
        <style type="text/css">


            .logo_alignment--align_logo_left .logo_container img {
                float: left;
            }

            .logo_alignment--align_logo_center .logo_container img {
                float: none;
                margin: 0 auto;
            }

            .logo_alignment--align_logo_right .logo_container img {
                float: right;
            }

        </style>

    </head>

    <body style="max-width: 800px; margin: 0 auto">
        <div amf:container="template_wrapper" amf:conditional style="background-color:#F5F2EE" amf:bgcolor>
        <!--[if gte mso 9]><style>ul,ol {margin: 0 0 0 30px !important;}</style><![endif]-->
       <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#F5F2EE;" class="module_top_padding--20px module_bottom_padding--20px">
            <tr>
                <td align="center" class="module_padding_target">
                    <table cellpadding="0" cellspacing="0" border="0" width="600" class="wrapper" style="width:600px;">
                        <tr>
                            <td>
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="min-width:100%;width:100%!important;" class="f1">
                                    <tr>
                                        <th class="fl" valign="top" style="vertical-align:top; font-weight:normal;">
                                            <table border="0" cellspacing="0" cellpadding="0" width="600" style="width: 600px;" role="presentation" class="fl">
                                                <tr class="logo_alignment--align_logo_center">
                                                    <td class="center full_img logo_container">
                                                        <a href="https://cruise-collective.com" style="text-decoration:none;" amf:link="header_logo_link" linklabel="">
                                                            <img src="https://e.cruise-collective.com/files/amf_our_media/workspace_50/social/email_header_new.png" alt="cruise-collective logo" border="0" style="display:block; width:600px;" class="center" width="600" amf:resize-width="1200">
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </th>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        <table cellpadding="0" cellspacing="0" border="0" width="100%" amf:bgcolor style="background-color:#F5F2EE;" amf:container="main_sections" amf:alternate amf:repeat amf:option="one_column" amf:conditional amf:class="@module_top_padding @module_bottom_padding" class="module_top_padding--20px module_bottom_padding--20px">
            <tr>
                <td align="center" class="module_padding_target">
                    <table cellpadding="0" cellspacing="0" border="0" width="600" class="wrapper" style="width:600px;">
                    </table>
                </td>
            </tr>
        </table>


        <div style="padding: 48px">
                <p>
                  Dear ${data?._1} ${data?._2},<br />
                </p>
                <p>
                  Thank you for signing up to Cruise Collective early-access. In order to complete your registration and become a full member, please click the link below:
                </p>
                <a style="display: inline-block;padding: 10px 30px;background-color: #FF9A31;color: #FFFFFF !important;font-size: 18px;text-decoration: none;border-radius: 6px;margin-top: 20px;margin-bottom: 14px;transition: background-color 0.3s ease;" href="https://staging-cruise.vercel.app/register?email=${data?._0}&firstName=${data?._1}&lastName=${data._2}">
                   Click Here
                </a>

                <p>
                Thank you for choosing to join us on this new and exciting voyage. We’re delighted to have you onboard.
                </p>
                <p className="mt-4">All the best, </p>
                <p className="text-gray-600 mt-8">The Cruise Collective Team.</p>
        </div>


        <!-- Footer Social Links Start. This needs to be replaced with each brands social icons and social links -->

        <table border="0" cellpadding="0" cellspacing="0" class="module_top_padding--20x module_bottom_padding--0px module_top_padding--5px" style="-amf-class-label: '5px'; -amf-class-label: '0px'; background-color:#FF9A31;min-width:100%;width:100%!important; padding: 20px 0px 0px 0px" width="100%">
            <tr>
                <td align="center" class="module_padding_target" style="padding-top: 5px; padding-bottom: 0;">
                    <table border="0" cellpadding="0" cellspacing="0" class="wrapper" width="600">
                        <tr>
                            <td align="center">
                                <table border="0" cellpadding="0" cellspacing="0" class="logos">
                                    <tr>
                                        <td class="element_top_padding--0px element_bottom_padding--0px" style="-amf-class-label: '0px'; -amf-class-label: '0px'; padding-right: 6px;" valign="top">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                    <td class="left full_img element_padding_target" style="padding-top: 0; padding-bottom: 0;">
                                                        <a href="https://www.facebook.com/cruise-collective/" style="text-decoration:none;">
                                                            <img alt="facebook" border="0" src="https://e.cruise-collective.com/files/amf_our_media/workspace_50/social/Facebook_white.png" style="display:block; height: 38px;">
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td class="element_top_padding--0px element_bottom_padding--0px" style="-amf-class-label: '0px'; -amf-class-label: '0px'; padding-left: 6px; padding-right: 6px;" valign="top">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                    <td class="left full_img element_padding_target" style="padding-top: 0; padding-bottom: 0;">
                                                        <a href="https://www.instagram.com/cruise-collective/" style="text-decoration:none;">
                                                            <img alt="instagram" border="0" src="https://e.cruise-collective.com/files/amf_our_media/workspace_50/social/Instagram_white.png" style="display:block; height: 38px;">
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td class="element_top_padding--0px element_bottom_padding--0px" style="-amf-class-label: '0px'; -amf-class-label: '0px'; padding-left: 6px;" valign="top">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                                <tr>
                                                    <td class="left full_img element_padding_target" style="padding-top: 0; padding-bottom: 0;">
                                                        <a href="https://www.twitter.com/cruise-collective/" style="text-decoration:none;">
                                                            <img alt="twitter" border="0" src="https://e.cruise-collective.com/files/amf_our_media/workspace_50/social/x_white.png" style="display:block; height: 38px;">
                                                        </a>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

        <!-- Footer Social Links END -->


        <table cellpadding="0" cellspacing="0" border="0" width="100%" amf:container="footer" amf:conditional amf:bgcolor bgcolor="#FF9A31">
            <tr>
                <td align="center" style="padding: 20px 0 20px 0;">
                    <table cellpadding="0" cellspacing="0" border="0" width="600" class="wrapper" style="width:600px;">
                        <tr>
                            <td>
                                <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
                                    <tr>
                                        <td align="center" class="center" style="color:#ffffff; padding: 0px; font-size: 11px; vertical-align:top;" valign="top" amf:htmlbox="Footer_top">
                                            <h5>Copyright © 2024 Cruise Collective. All rights reserved. Cruise Collective is owned and published by Our Media Ltd. Feel free to get in touch with us hello@cruise-collective.com</h5>
                                            <br>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="center" class="center" style="padding-top: 25px; vertical-align: top;" valign="top">

                                            <a href="https://ourmedia.co.uk" target="_blank" style="display: block; text-decoration: none;"><img src="https://e.cruise-collective.com/files/amf_our_media/workspace_50/social/OM_Logo_Lrg_WHITE_RGB_NoTag.png" alt="Our Media Company Ltd" style="width:90px; height: auto; display: block; border: none;" border="0" width="90"></a>

                                            <br>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="center" class="center" style="color:#fff; padding:0px; font-size: 11px; vertical-align:top;" valign="top">
                                            <h5>Our Media
                                            Registered Office: Eagle House, Colston Ave, Bristol BS1 4ST.
                                            Company registered in England and Wales under company number: 05715415.
                                            </h5>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

         <!-- FOOTER END -->

        </div>
    </body>

    </html>`


    const body = {
      email: data?._0,
      subject: "Early-access to Cruise Collective!",
      emailTemplate,
    };

    await axios.post("https://staging-cruise.vercel.app/api/sendEmail", body);

    console.log(data._0, " : Email sent successfully!");
  } catch (error) {
    console.log(data._0," : Error sending email");

  }
};

// Queue processing function
const processQueue = async (queue) => {
  while (queue.length > 0) {
    const data = queue.shift(); // Get the first item in the queue
    await sendData(data);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before next request
  }
};

const duplicateDataRemove = (data) => {
  const uniqueArr = Array.from(new Set(data.map(obj => obj._0))).map(e =>
    data.find(obj => obj._0 === e)
  );
  return uniqueArr;
}

// Main function to process the CSV file and send its content
const processCSV = async () => {
  const filePath = "tools/data.csv"; // Replace with your CSV file path
  try {
    const csvData = await readCSV(filePath);
    const filterCsvData = duplicateDataRemove(csvData);
    console.log(filterCsvData);
   await processQueue(filterCsvData); // Process the queue

  } catch (error) {
    console.error("Error processing CSV file:", error);
  }
};

// Run the main function
processCSV();
