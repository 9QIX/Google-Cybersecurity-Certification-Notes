## Float

**[[Float data]]** is data consisting of a number with a decimal point. All of the following are examples of float data: 

- `-2.2`
- `-1.34`
- `0.0`
- `0.34` 

Just like integer data, float data is not placed in quotation marks. In addition, you can also use the `print()` function to display float data or to perform mathematical calculations with float data. You can run the following code to review the result of this calculation:

```python
print(1.2 + 2.8)
```
Output:
```python
4.0
```

The output is `4.0`.

**Note:** Dividing two integer values or two float values results in float output when you use the symbol `/`:

```python
print(1/4)
print(1.0/4.0)
```
Output:
```python
0.25
0.25
```

The output of both calculations is the float value of `.25`.  

If you want to return a whole number from a calculation, you must use the symbol `//` instead:

```python
print(1//4)
print(1.0//4.0)
```
Output:
```python
0
0.0
```

It will round down to the nearest whole number. In the case of `print(1//4)`, the output is the integer value of 0 because using this symbol rounds down the calculation from `.25` to the nearest whole number. In the case of `print(1.0//4.0)`, the output is the float value of `0.0` because it maintains the float data type of the values in the calculation while also rounding down to the nearest whole number.