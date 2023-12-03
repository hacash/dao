
    
exports.components = [
    'html',
    'header',

    'index',

    'footer',
    'tail',
]


exports.datas = async function(cnf, ctx)
{
    // let data_types = await ddd.getTypes()

    // // console.log(ctx.lang)
    // let langmaps = {
    //     '/en': "en",
    //     '/cn': "zh",
    // }
    // let ln = langmaps[ctx.req.url] || "en_US"
    // lang = ctx.loadLang(ln)

    // // console.log(lang)
    
    return {
        // isMobile: types.isMobile(ctx.req),
        // numToThousands: utilnumber.numToThousands,
        // lang: lang.data,
        title: "Hacash DAO"
    }
}

    