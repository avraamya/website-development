<?php
include('header.php');
include('arrays.php');


/*
foreach ($_GET as $itemId => $itemCount) {
    echo $items[$itemId];
    echo "price:";
    echo  $items[$itemId]['price'] * $itemCount;
}
*/
//var_dump($_POST);
$obj = json_decode($_POST['array_data'], true);
$totalPrice = $_POST['totalPrice'];
//unset($_POST['page']);

echo '
<div class="my-container">
<table class="table table-dark">
<thead>
        <tr>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
            <th scope="col">picture</th>
        </tr>
        </thead>
        <tbody>
        
        ';
$count = 0;
foreach ($obj as $row) {
    if ($row['amount'] > 0) {
        echo
            '<tr>
            <th scope="row">' . $row['name'] . '</th>
            <td>' . $row['price'] . '</td>
            <td>' . $row['amount'] . '</td>
            <td><img class="img-fluid img-thumbnail" src=' . $Items[$count]['picture'] . '></td>     
        </tr>';
    }
    $count++;
}

'<tbody>
</table>
</div>';

//echo "<div class='purchase_item'>" . $totalPrice . "</div>";


include('footer.php');
?>