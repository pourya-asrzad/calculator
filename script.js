const puter =document.querySelector(".puter")
const answer1 = document.querySelector(".answertxt")
const button =document.querySelector(".button")
let calin= []
const operators =document.getElementsByClassName("operator")
import { calculator } from "./database.js"

calculator(puter,answer1,calin,operators,button)