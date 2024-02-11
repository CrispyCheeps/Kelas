<?php

use PhpParser\Node\Stmt\Echo_;

  echo $users[0]['name'];
?>

<?php 
  foreach ($users as $user) {?>
    <h1> <?= $user['name'] ?> </h1>
<?php } ?>

<!-- With larablade -->
@foreach($users as $user)
    <h1> <?= $user['name']?></h1>
    <h1> {{$user['age']}}</h1>

    @if($user['age'] <18)
      <p>User can't drive</p>
    @endif
    <hr>
@endforeach

@copyright {{date('Y')}}