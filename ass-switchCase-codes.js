let statusCode = 401;

switch (statusCode) {

    case 200:
    console.log("✓ Success");
    break;

    case 201 :
    console.log("✓ Created : Resource Created ");
    break;
    
    case 400 :
    case 401 :
    case 403 :
    console.log("✗ Client Error");
    break;

    case 404:
        console.log("Page Not Found");
    break;

    case 500:
    case 502:
    case 503:
    console.log("✗ Server Error");
    break;

    default:
        console.log("✗ Unknown status code: " + statusCode);

}

/* 

**Key concept:** When multiple `case` labels appear with no `break` between them, 
they all fall through to the same block. 
This is the **only** intentional use of fall-through.
*/