const compile = function(a, b, c){
    return a + 
    '<style>' + b + `</style>` +
    '<script>' + c + '</script>';
};

const validateHtml = function(html){
    var checkOne = /<(?=.*? .*?\/ ?>h[1-6]|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i.test(html);
    console.log(checkOne)
};

export {
    compile, 
    validateHtml
};