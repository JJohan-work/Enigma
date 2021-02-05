import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Tumbler from './js/tumbler.js';



$(document).ready(function() {
  $("#cylThree").html();
  $("#cylTwo").html();
  $("#cylOne").html();

  $("#refresh").click(function() {
    cylPos = rotateCylinders();
    output = goForwardThruCylinder();
    $("#output").text();
    $("#cylThree").html();
    $("#cylTwo").html();
    $("#cylOne").html();
  });
});
