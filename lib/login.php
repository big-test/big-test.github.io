<?php
// assign username
$un = $_POST['username'];

// assign password
$pw = $_POST['password'];

// comparing with exist account
if ($un == 'admin' && $pw == '1')
{
	echo "Đăng nhập thành công!";
	header('Location: ../index.html');
    exit;
}
else
	echo "Sai thông tin đăng nhập!";
?>