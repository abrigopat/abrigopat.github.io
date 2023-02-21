<?php
  $dbhost = "localhost";
	$dbuser = "root";
	$dbpass = "";
	$db = "test";

	$conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);

	if(!$conn)
	{
		die("Connection Failed. ". mysqli_connect_error());
		echo "can't connect to database";
	}

  //SQL FUNCTIONS

	function execute($Query){ //Requires Query eg. "SELECT * FROM tbl"
		$conn = $GLOBALS['conn'];
		$Result = mysqli_query($conn ,$Query);
		return $Result; //Returns SQL Result - use loop to go through the data
	}
?>
