# Python 版本号排序

1. version = ['2.0.1', '1.0.2', '1.0.21', '2,2.9', '1.2.11']

```python
>>> version = ['2.0.1', '1.0.2', '1.0.21', '2.2.9', '1.2.11']
>>> sorted(version, key=lambda x:tuple(int(v) for v in x.split(".")))
['1.0.2', '1.0.21', '1.2.11', '2.0.1', '2.2.9']
```

2. 如果版本号带上前缀，version = ['v2.0.1', 'v1.0.2', 'v1.0.21', 'v2,2.9', 'v1.2.11']

```python
>>> version = ['v2.0.1', 'v1.0.2', 'v1.0.21', 'v2.2.9', 'v1.2.11']
>>> sorted(version, key=lambda x:tuple(int(v) for v in x.replace('v', '').split(".")))
['v1.0.2', 'v1.0.21', 'v1.2.11', 'v2.0.1', 'v2.2.9']
```

升降序列由 sorted 函数的 reverse 参数控制，True 降序，默认 False 升序。

```python
>>> sorted(version, key=lambda x:tuple(int(v) for v in x.replace('v', '').split(".")), reverse=True)
```
