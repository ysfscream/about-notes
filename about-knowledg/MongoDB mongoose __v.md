# MongoDB mongoose __v

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

