# Js Promise 简单的封装 Ajax

## Get

```JS

function getJSON(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function() {
            if (this.readState === 4) {
                if (this.status === 200) {
                    resolve(this.responseText, this)
                } else {
                    var resJson = {
                        code: this.status,
                        response: this.response
                    }
                    reject(resJson, this)
                }
            }
        }
        xhr.send()
    })
}

```

## Post

```JS

function getJSON(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.opne('POST', url, true)
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function() {
            if (this.readState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText), this)
                } else {
                    var resJson = {
                        code: this.status,
                        response: this.response
                    }
                    reject(resJson, this)
                }
            }
        }
        xhr.send(JSON.stringify(data))
    })
}

```

>XMLHttpRequest is a built-in object in web browsers.
>It is not distributed with Node; you have to install it separately using npm.
>That said, Node comes with the http module which is the normal tool for choice for making HTTP requests from Node.

