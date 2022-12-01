function dateToYYYYMM(fcData) {
    fcData = fcData.split('/').reverse().join('-');
    fcData = fcData.replace(/-/g, '');
    return fcData.substring(0, (fcData.length - 2));
} 
