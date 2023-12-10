using System;

public class HelloWorld
{
  public static void Main(string[] args)
  {
    int[] array = { 9, 5, 1, 2, 3, 4, 7, 8 };
    InsertionSort(array);

    // Print the sorted array
    foreach (var num in array)
    {
      Console.Write(num + " ");
    }

  }

  public static void InsertionSort(int[] x)
  {
    for (var i = 1; i < x.Length; i++)
    {
      int key = x[i];
      int j = i - 1;

      while (j >= 0 && key < x[j])
      {
        x[j + 1] = x[j];
        j--;
      }

      x[j + 1] = key;
    }
  }
}



