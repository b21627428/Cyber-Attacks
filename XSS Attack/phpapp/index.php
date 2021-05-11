<?php

$homepage = file_get_contents('http://localhost:3333/api/cookies/getAll/%27);

$json = json_decode($homepage);


echo "<table border='1'><br />";
echo "<tr>
<td> Client Ip Adress </td>
<td> Port </td>
<td> Browser Information </td>
<td> Client Operating System </td>
<td> Referrer </td>
<td> Session Id </td>
<td> Cookie </td>
<td> Date </td>
";


for ($row = 0; $row < count($json->{"data"}); $row ++) {
   echo "<tr>";
     echo "<td>", $json->{"data"}[$row]->{"clientIpAddress"},"</td>";
     echo "<td>", $json->{"data"}[$row]->{"port"},"</td>";
     echo "<td>", $json->{"data"}[$row]->{"browserInformation"},"</td>";
     echo "<td>", $json->{"data"}[$row]->{"clientOperatingSystem"},"</td>";
     echo "<td>", $json->{"data"}[$row]->{"referrer"},"</td>";
     echo "<td>", $json->{"data"}[$row]->{"sessionId"},"</td>";
     echo "<td>", $json->{"data"}[$row]->{"cookie"},"</td>";
     echo "<td>", $json->{"data"}[$row]->{"date"},"</td>";

   echo "</tr>";
}
echo "</table>";

?>
