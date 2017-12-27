# Js Promise 简单的封装 Ajax

## Get

```JS

function getJSON(url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest()
        xhr.opne('GET', url, true)
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

