# Have you ever come across the problem of calling non-secure resources from secure servers?

[![Join the chat at https://gitter.im/mxdcnt/community](https://badges.gitter.im/mxdcnt/community.svg)](https://gitter.im/mxdcnt/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

For example 
- loading your own resources in **github pages**...
- Calling non secure web API endpoints from **Codepen**...

Then  [this ](https://mixedcnt.herokuapp.com) might help you...
MixedCnt is an app that acts as a proxy for your API calls to non-secure servers.
You can make both GET and POST requests thru the app...

To make a **GET ** request, the end point is 
``` 
https://mixedcnt.herokuapp.com/get?url=
``` 
(append your URL)

For example, [this image](http://35.200.245.209/uploads/demo.png-1562509410103.key_mixedCnt.des_.png)  is served via HTTP.


![demo.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1562510008165/E8VC8dG0I.png)

It is available thru the app via  [https://mixedcnt.herokuapp.com/get?url=http://35.200.245.209/uploads/demo.png-1562509410103.key_mixedCnt.des_.png](https://mixedcnt.herokuapp.com/get?url=http://35.200.245.209/uploads/demo.png-1562509410103.key_mixedCnt.des_.png) 

For **POST **requests the endpoint is 

```
https://mixedcnt.herokuapp.com/post
``` 

In the body of the request, supply the target URL as url:<your url>

Example from **jQuery ajax**
 
```
$.ajax({
            url: 'https://mixedcnt.herokuapp.com/post',
            method: 'POST',
            data: {
                      url:'http://yourNonSecureURL.com',
                      otherdata: 'your other data to be sent'
                     },
            success: function (data) {
                      console.log(data)
                    }
        });
``` 





