const httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        const golfInfo = JSON.parse(httpRequest.responseText)
        console.log(golfInfo);
    }
}
httpRequest.open('GET', 'https://golf-courses-api.herokuapp.com/courses', true);
httpRequest.send();