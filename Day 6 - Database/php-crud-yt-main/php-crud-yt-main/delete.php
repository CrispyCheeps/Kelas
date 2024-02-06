<?php
include "db_conn.php";
$id = $_GET["id"];
$sql = "DELETE FROM kontak WHERE kontak_id = $id";
$result = mysqli_query($conn, $sql);

if ($result) {
  header("Location: index.php?msg=Data deleted successfully");
} else {
  echo "Failed: " . mysqli_error($conn);
}
