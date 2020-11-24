<?php
require('controllers/controller.php');

if (isset($_GET['action'])) {
    if ($_GET['action'] == '') {
        Home();
    }
   
}
else {
    Home();
    
}




?>