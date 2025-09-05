//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   PIWIYA_MDᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：1.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░                                           
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © PIWIYA_MD
//  * @version      : 4.0
//  * @author       : Piwithuru_prakash
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © PIWIYA_MD, A Multi-functional WhatsApp bot created by Piwithru_prakash.
//*
//*
//Base by Piwithuru_prakash
//GitHub: @Mr_piwithuru
//WhatsApp: +94773060753
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@imjerry
//   * Created By GitHub: piwithuru_mD
//   * Credit To Piwithuru_prakash
//   * © 2025 PIWIYA_MD_v1.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PIWIYA_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU03MW9rcGhWdTZQWmM2Q2NQLy9kYmJWUysyZU9OT2lKMFhZZXppSGsyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1NGaERyQVRUcE5yY1BWcGwyLzRCMmorVHFtQmpsWG5xR3dFQVQwVlYxMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRy9maU0xUTIyL3ZXcWRoZm1xT2ZDdzMxNnVESlJVUk9nNTUybUNWY25RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4bzd1WWJiUDZCNnMyalNnWkRkS05qZHhPK3V1R1BBeEFCL0h6Y3VqTml3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklIdUFJOEM0LzJDRExtWFlvaHpmcFB0MmZxeCtvVmpzbnRXUy93WmdjRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJxaGZPazBWVjNjM3FNc0pxRWgwemU0azdPMmovN1lxU3lVNHZ2T1RIRms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUJRbExweEM1bmQydStGSG81aUJUMk5NTHZ2eXVodmM5V3JNd1d4OTcxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGlFeDRwUmVUUUlUT0xVeVR4ekFJbFNxVmcrNDkxWFA3dTFKSDZ6SFNSZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InAyd3A3bFFmcm0zWGptRTloYmtuR0JETEhUYWtUcGJPL1pJRmN4bnQzMU4xdlVXL013WmdkK0x5eHdPSXZqd0wydEEybjdyK0I4TTBjaXBRdWk2Y0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6ImFoakhTYi80aWY2N0pSanhBUkthbWlKSCtrQTA5K3QwRHVsTExLajNOdjQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlNkZkYtbWY0UlZhRXlMZDlTeXE4dGciLCJwaG9uZUlkIjoiZTI2M2U3YjItN2RiNi00MTFlLWJjOTYtMWIwOWFhZjAzYjA4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImM3c09kR2xPd2Ntcjl2RmhDZHdPRzBhM3RTQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5MGhYVjRVZTF3K1VJMDNPbmFuQTBZOXByc289In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVkI5UkVUMzEiLCJtZSI6eyJpZCI6Ijk0NzcwNjM1NzA4OjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMDkzMzc2NTM1NzE4MzU6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09YTGc1VURFSU9PNnNVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im56L2pvYlV4RDBjYy9BWmc4RElVTlFyODM4NzFlb3QxSytyRTJBaWQrRkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjErMHhTZnpheVFQZkdOWklFSTJqVFFSbVVXMXhxNFFjaEN0ekVVQlB3c2MrNEYxUzFUWWc4WG1IYVZGL1NWOG5tV1BwOG9Tak9nbzVZK0pMd21FR0JRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoNUU3dE13UmRFUGVHclR4ZWJyU0ZEZm5JdWlpWXM3eUFZOVNzY3VoV05WNlZDU051VWNuK2VOOHM3bmU3bW5IbC96bUg4cnRQa01kWXRhd0dKaGRBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzcwNjM1NzA4OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWjgvNDZHMU1ROUhIUHdHWVBBeUZEVUsvTi9POVhxTGRTdnF4TmdJbmZoUyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3MDU0NzM3LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUifQ==",
PORT: process.env.PORT || "8000"
};
