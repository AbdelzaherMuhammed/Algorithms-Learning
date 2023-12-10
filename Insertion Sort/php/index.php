<?php

function insertionSort($x)
{
    for ($i = 1; $i < count($x); $i ++) {
        $key = $x[$i];
        for ($j = $i - 1; $j >= 0; --$j) {
            if ($key < $x[$j]) {
                $x[$j + 1] = $x[$j];
            } else {
                break;
            }
        }
        $x[$j + 1] = $key;
    }
    print_r($x);
}

insertionSort([9,5,2,1,7,3]);