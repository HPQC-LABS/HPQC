<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!--
Design by TEMPLATED
http://templated.co
Released for free under the Creative Commons Attribution License

Name       : CrossWalk 
Description: A two-column, fixed-width design with dark color scheme.
Version    : 1.0
Released   : 20140216

-->
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>HPQC Labs: High Performance & Quantum Computing</title>
	<meta name="keywords" content="" />
	<meta name="description" content="" />
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&displa y=swap"
		rel="stylesheet" />
	<link href="default.css" rel="stylesheet" type="text/css" media="all" />
	<link href="Plugins/AOS/aos.css" rel="stylesheet">


	<link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png">
	<link rel="manifest" href="site.webmanifest">
	<link rel="shortcut icon" href="images/favicon.ico" />


	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<!--[if IE 6]><link href="default_ie6.css" rel="stylesheet" type="text/css" /><![endif]-->

</head>


<body>

	<div class="unsubContainer">

		<div class="unsubPopup" id="unsub">

			
			<div class="unsubHeader">
				<span class="unsubTitle">Unsubscribe</span>
				<span class="close">&times;</span>
			</div>
			
			<p>
				Message to user who is unsubscribing from email list
				<br>
				To be filled out at a later date with a proper message.
				<br>
				<br>
				Are you sure you want to unsubscribe?
			</p>
			<div class="buttons">
				<button class="confirmButton" id="confirm">Yes</button>
				<button class="denyButton" id="deny">No</button>
			</div>
			
			
		</div>

		<div class="getEmail">


			<div class="unsubHeader">
				<span class="unsubTitle">Unsubscribe</span>
				<span class="close">&times;</span>
			</div>

            <form action="database.php" method="POST">

                <?php
                    /*
                    $userEmail = "" //Variable declaration
                    if(isset($_POST['submitUnsub'])){ //When the unsub button is clicked
                        $userEmail = $_POST['email']; //Getting user email
                        if(filter_var($userEmail, FILTER_VALIDATE_EMAIL){ //ensuring valid email
                            echo "Valid Email";
                        } else{
                            echo "Invalid Email";
                        }

                    }*/
                ?>
                
                <div class="inputContainer">
                    <input type="text" id="email" name="email" placeholder="Email Address" required value="<?php echo $userEmail ?>" required autocomplete="off"><br><br>
                </div>

                <div class="buttons">
                    <button class="submitUnsub" id="submitUnsub" name="submitUnsub">Submit</button>
                    
                </div>
            </form>
           


		</div>

		<div class="endScreen" id="end">
			<div class="endScreenHeader">
				<span>You have been unsubscribed from the email list</span>
				<span class="close">&times;</span>
			</div>	
		</div>

	</div>


	<div id="menu">
		<!--Spans used to create the navbar toggle button in mobile (4 are used for the animation while only 3 are visible)-->
		<div class="navbar-toggle" id="navbar-toggle">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<a href="index.html" class="logo">
			<img src="images/HPQC_Labs.svg" class="logoImg">
			<span class="logoTxt">HPQC Labs</span>
		</a>
		<!--Main nav contains list items for each entry in the nav bar-->
		<ul class="main-nav" id="main-nav">
			<li class="current_page_item"><a href="index.html" accesskey="1" title="">Homepage</a></li>
			<li><a href="people.html" accesskey="2" title="">People</a></li>
			<li><a href="https://github.com/HPQC-LABS" accesskey="3" title="">Research</a></li>
			<li><a href="by-laws.html" accesskey="4" title="">By-laws</a></li>
			<!--Contains items in Resources drop down menu-->
			<li class="dropmenu">
				<a class="dropbtn" accesskey="5" title="">Resources</a>
				<div class="content">
					<a href="lectures.html" title="">Lectures</a>
					<a href="LaTeX.html">LaTeX Setup</a>
				</div>
			</li>
			<li><a href="college.html" accesskey="6" title="">HPQC College</a></li>
		</ul>
	</div>
	<!--Banner contains image content-->
	<div id="banner">&nbsp;</div>

	<!--Feature contains Description content-->
	<div id="featured">
		<div class="container">
			<div class="title">
				<h2>High Performance &amp; Quantum Computing Labs</h2>
				<span class="byline">HPC on classical & quantum computers.<br>Physics, Chemistry, Health Science,
					Medicine, Computation</span>
			</div>
		</div>

		<div id="copyright" class="container">
			<p>
				&copy; HPQC Labs. All rights reserved. 
				<br>
				<a class="unsubButton">Unsubscribe</a>

			</p>
			
			
		</div>

		<!--Initializing js files used-->
		<script type="text/javascript" src="main.js"></script>

		<!--Initializes AOS script which is used to animate divs apppearing when scrolling down-->
		<script src="Plugins/AOS/aos.js"></script>
		<script>
			AOS.init();
		</script>


</body>

</html>