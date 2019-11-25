# Elctron lowDB 记录

lowdb 使用过程中会有一个问题，如果就按照基本操作，那么有可能出现在 main 进程里存入的值，在renderer进程里读不到。

直接引用的 db 实际上只是那个时刻在内存里的数据。lowdb 在使用过程中会把 JSON 数据读入内存中。只有在需要写操作的时候才会将新的数据写入磁盘。

解决：

强制在每个 db 操作前通过 read 刷新一遍内存区，这样就能保证拿到的数据都是最新的

```javascript
db.read().set('key', 'value')
const value = db.read.get('key').value
```
