# MongoDB mongoose

The versionKey is a property set on each document when first created by Mongoose. This keys value contains the internal revision of the document. The name of this document property is configurable. The default is __v.

If this conflicts with your application you can configure as such:

```JS
var Schema = mongoose.Schema
new Schema({..}, { versionKey: '_somethingElse' }
```
if you don't need version_key, just

```JS
var Schema = mongoose.Schema

new Schema ({
    nickname: String,
    reg_time: { type: Date, default: Date.now}
    }, {
    versionKey: false // You should be aware of the outcome after set to false
    })
})
```

> _id field is reserved for primary key in mongodb, and that should be a unique value. If you don't set anything to _id it will automatically fill it with "MongoDB Id Object". But you can put any unique info into that field.

##  specify several 
You can also specify several more parameters in the uri:

```js
mongoose.connect('mongodb://username:password@host:port/database?options...');
```
when you need auth the admin
add params authSource

```js
mongoose.connect('mongodb://username:password@host:port/database?options...?authSource=admin');
```



使用 Mongoose 无需关心连接是否建立，它会先把数据库操作指令先缓存起来，在连接上以后数据库以后会把这些指令发送给 MongoDB