import { getdate } from "./getdate.mjs";
import { menusettings } from "./menuH.mjs";

document.addEventListener('DOMContentLoaded', () => {
    getdate();
});

const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const organizationTitle = document.getElementById('organizationTitle')
const email = document.getElementById('email')
const number = document.getElementById('number')
const organizationName = document.getElementById('organizationName')
const memberLavel = document.getElementById('memberLavel')
const description = document.getElementById('description')
const datatime = document.getElementById('datatime')

const anchor = window.location.href;
const array = anchor.split("?")[1].split("&")


const firsName = (array[0].split("=")[1].replace("+", ' '))
const lastName = (array[1].split("=")[1].replace("+", ' '))

const organizationT = (array[2].split("=")[1].replace("+", ' '))
const emailelement = (array[3].split("=")[1].replace("%40", '@'))

const n = (array[4].split("=")[1].replace("+", ' '))
const ogName = (array[5].split("=")[1].replace("+", ' '))

const mbLevel = (array[6].split("=")[1])
const desc = (array[7].split("=")[1].replace("+", ' '))

const dataT = (array[8].split("=")[1])
const decodedDate = decodeURIComponent(dataT).replaceAll("+", " "); 

fname.innerText=firsName
lname.innerText=lastName
organizationTitle.innerText=organizationT
email.innerText=emailelement
number.innerText=n
organizationName.innerText=ogName
memberLavel.innerText=mbLevel
description.innerText=desc
datatime.innerText=decodedDate