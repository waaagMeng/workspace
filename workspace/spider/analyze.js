const cheerio = require("cheerio");

module.exports = {
    analyze(html) {
        const $ = cheerio.load(html, {
            decodeEntities: false
        });
        let contentObj = {
            title: $(".mb-detail-box .detail-title h1").text(),
            author: $(".mb-detail-box .detail-title .author a").text(),
            time: $(".mb-detail-box .detail-title .time").text(),
            content: (() => {
                let arr = []
                $(".mb-detail-box .editor-body").children().each((index, ele) => {
                    if ($(ele).children().length === 0) {
                        let obj = {
                            type: (() => {
                                if ($(ele).prop("tagName") === "DIV") {
                                    return "section"
                                }else if($(ele).prop("tagName") === "H2"){
                                    return "header"
                                }
                            })(),
                            content: $(ele).html()
                        }
                        arr.push(obj)
                    }else if(
                        $("",ele)
                    )
                })
                return arr;
            })()
        };
        return JSON.stringify(contentObj);
    }
}