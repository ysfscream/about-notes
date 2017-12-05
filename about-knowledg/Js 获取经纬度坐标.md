# Js 获取经纬度坐标

```js
function getPosition() {
    	if(navigator.geolocation) {
    		const success = (position) => {
    			const { longitude, latitude } = position.coords
    			console.log(longitude)
    			console.log(latitude)
    		}
    		const error = (err) => {
    			const error = err.message;
    			alert(error)
    		}
    		navigator.geolocation.getCurrentPosition(success, error)
    	} else {
    		alert('unposition')
    	}
	},
```

